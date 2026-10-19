/**
 * SCADA Core - Estação de Reabastecimento de Hidrogênio (UNIFEI)
 * Controlador Principal: Tema, Menu Mobile, Diagrama SVG P&ID, Simulador SCADA e Equipe GitHub
 */

(function () {
  'use strict';

  // ==========================================================================
  // 1. GERENCIADOR DE TEMA (DARK / LIGHT) COM LOCALSTORAGE
  // ==========================================================================
  const THEME_STORAGE_KEY = 'h2scada_theme_pref';

  function initTheme() {
    const saved = localStorage.getItem(THEME_STORAGE_KEY);
    const activeTheme = saved ? saved : 'dark';

    if (activeTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }

    updateThemeButtons(activeTheme);

    const themeToggleBtns = document.querySelectorAll('.theme-toggle');
    themeToggleBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const isCurrentlyDark = document.documentElement.getAttribute('data-theme') === 'dark';
        const nextTheme = isCurrentlyDark ? 'light' : 'dark';

        if (nextTheme === 'dark') {
          document.documentElement.setAttribute('data-theme', 'dark');
        } else {
          document.documentElement.removeAttribute('data-theme');
        }

        localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
        updateThemeButtons(nextTheme);
      });
    });
  }

  function updateThemeButtons(theme) {
    const buttons = document.querySelectorAll('.theme-toggle');
    buttons.forEach(btn => {
      btn.textContent = theme === 'dark' ? '☀️' : '🌙';
      btn.setAttribute('aria-label', theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro');
    });
  }

  // ==========================================================================
  // 2. MENU MOBILE HAMBÚRGUER
  // ==========================================================================
  function initMobileMenu() {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileMenu = document.getElementById('mobile-nav-menu');

    if (!hamburgerBtn || !mobileMenu) return;

    hamburgerBtn.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('is-open');
      hamburgerBtn.setAttribute('aria-expanded', isOpen);
    });

    mobileMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('is-open');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ==========================================================================
  // 3. TOOLTIP FLUTUANTE DOS SENSORES E VÁLVULAS (SVG)
  // ==========================================================================
  let tooltipEl = null;

  function ensureTooltip() {
    if (!tooltipEl) {
      tooltipEl = document.getElementById('custom-tooltip');
      if (!tooltipEl) {
        tooltipEl = document.createElement('div');
        tooltipEl.id = 'custom-tooltip';
        tooltipEl.className = 'custom-tooltip';
        tooltipEl.setAttribute('role', 'tooltip');
        tooltipEl.setAttribute('aria-hidden', 'true');
        document.body.appendChild(tooltipEl);
      }
    }
    return tooltipEl;
  }

  function showTooltip(e, text) {
    const tooltip = ensureTooltip();
    if (!text || !tooltip) return;

    const parts = text.split('|');
    if (parts.length > 1) {
      const title = parts[0].trim();
      const items = parts.slice(1).map(p => `<div>• ${p.trim()}</div>`).join('');
      tooltip.innerHTML = `<strong style="color: var(--primary-light); display: block; margin-bottom: 4px;">${title}</strong>${items}`;
    } else {
      tooltip.textContent = text;
    }

    tooltip.classList.add('is-visible');
    tooltip.setAttribute('aria-hidden', 'false');
    positionTooltip(e);
  }

  function positionTooltip(e) {
    if (!tooltipEl || !tooltipEl.classList.contains('is-visible')) return;

    const offset = 16;
    let x = e.clientX;
    let y = e.clientY;

    if (e.type === 'focus' && e.target) {
      const rect = e.target.getBoundingClientRect();
      x = rect.left + rect.width / 2;
      y = rect.top;
    }

    let left = x + offset;
    let top = y + offset;

    const tooltipRect = tooltipEl.getBoundingClientRect();
    if (left + tooltipRect.width > window.innerWidth - 16) {
      left = x - tooltipRect.width - offset;
    }
    if (left < 16) left = 16;

    if (top + tooltipRect.height > window.innerHeight - 16) {
      top = y - tooltipRect.height - offset;
    }
    if (top < 16) top = 16;

    tooltipEl.style.left = `${left}px`;
    tooltipEl.style.top = `${top}px`;
  }

  function hideTooltip() {
    if (tooltipEl) {
      tooltipEl.classList.remove('is-visible');
      tooltipEl.setAttribute('aria-hidden', 'true');
    }
  }

  function attachTooltips() {
    ensureTooltip();
    const targets = document.querySelectorAll('[data-sensor]');
    targets.forEach(el => {
      const info = el.getAttribute('data-sensor');
      if (!info) return;

      el.addEventListener('mouseenter', (e) => showTooltip(e, info));
      el.addEventListener('mousemove', positionTooltip);
      el.addEventListener('mouseleave', hideTooltip);
      el.addEventListener('focus', (e) => showTooltip(e, info));
      el.addEventListener('blur', hideTooltip);
    });
  }

  // ==========================================================================
  // 4. CARREGADOR DE DIAGRAMA SVG (P&ID OFICIAL)
  // ==========================================================================
  async function loadSvgDiagrams() {
    const containers = [
      document.getElementById('sim-diagram-viewport'),
      document.getElementById('diagrama-static-viewport')
    ];

    let svgText = null;
    try {
      const res = await fetch('assets/diagrama.svg');
      if (res.ok) {
        svgText = await res.text();
      }
    } catch (e) {
      console.warn('Carregamento do SVG via fetch falhou:', e);
    }

    if (svgText) {
      containers.forEach(container => {
        if (container && !container.querySelector('svg')) {
          container.innerHTML = svgText;
        }
      });
    }

    attachTooltips();
    updateSimulatorVisuals();
  }

  // ==========================================================================
  // 5. SIMULADOR SCADA DA PLANTA REAL (SETORES 100, 200 E 300)
  // ==========================================================================
  const simState = {
    // Setor 100: Cascata de Armazenamento
    pt101: 350,   // Banco 1 LP (0-500 bar) · Trip > 400
    pt102: 650,   // Banco 2 MP (0-800 bar) · Trip > 700
    pt103: 950,   // Banco 3 HP (0-1100 bar) · Trip > 1000
    cascadeSelect: 'LP',
    xv101: true,
    xv102: true,
    xv103: true,
    esd100: false, // Parada de Emergência ESD-100

    // Setor 200: Condicionamento e Chiller
    tt201: -42,   // Temperatura Chiller (-50 a +20 °C) · Alarme > -40 °C
    xv201: true,

    // Setor 300: Dispensador e Veículo FCEV
    pt301: 520,   // Pressão Veicular (0-700 bar) · Trip > 700
    tt301: 28,    // Temperatura Receptáculo (-40 a 90 °C) · Trip > 85 °C
    xv301: true
  };

  let activeAlarms = [];
  const MAX_LOG_ENTRIES = 35;

  function initSimulator() {
    const sliderPT101 = document.getElementById('slider-pt101');
    const sliderPT102 = document.getElementById('slider-pt102');
    const sliderPT103 = document.getElementById('slider-pt103');
    const sliderTT201 = document.getElementById('slider-tt201');
    const sliderPT301 = document.getElementById('slider-pt301');
    const sliderTT301 = document.getElementById('slider-tt301');

    const selectCascade = document.getElementById('select-cascade');
    const toggleXV101 = document.getElementById('toggle-xv101');
    const toggleXV102 = document.getElementById('toggle-xv102');
    const toggleXV103 = document.getElementById('toggle-xv103');
    const toggleXV201 = document.getElementById('toggle-xv201');
    const toggleXV301 = document.getElementById('toggle-xv301');
    const toggleESD = document.getElementById('toggle-esd');

    const btnInjectFault = document.getElementById('btn-inject-fault');
    const btnClearLog = document.getElementById('btn-clear-log');

    if (!sliderPT101) return;

    // Listeners dos Sliders
    sliderPT101.addEventListener('input', (e) => {
      simState.pt101 = parseInt(e.target.value, 10);
      updateSimulator();
    });

    sliderPT102.addEventListener('input', (e) => {
      simState.pt102 = parseInt(e.target.value, 10);
      updateSimulator();
    });

    sliderPT103.addEventListener('input', (e) => {
      simState.pt103 = parseInt(e.target.value, 10);
      updateSimulator();
    });

    sliderTT201.addEventListener('input', (e) => {
      simState.tt201 = parseInt(e.target.value, 10);
      updateSimulator();
    });

    sliderPT301.addEventListener('input', (e) => {
      simState.pt301 = parseInt(e.target.value, 10);
      updateSimulator();
    });

    sliderTT301.addEventListener('input', (e) => {
      simState.tt301 = parseInt(e.target.value, 10);
      updateSimulator();
    });

    // Listeners dos Toggles e Select
    if (selectCascade) {
      selectCascade.addEventListener('change', (e) => {
        simState.cascadeSelect = e.target.value;
        updateSimulator();
      });
    }

    if (toggleXV101) {
      toggleXV101.addEventListener('change', (e) => {
        simState.xv101 = e.target.checked;
        updateSimulator();
      });
    }

    if (toggleXV102) {
      toggleXV102.addEventListener('change', (e) => {
        simState.xv102 = e.target.checked;
        updateSimulator();
      });
    }

    if (toggleXV103) {
      toggleXV103.addEventListener('change', (e) => {
        simState.xv103 = e.target.checked;
        updateSimulator();
      });
    }

    if (toggleXV201) {
      toggleXV201.addEventListener('change', (e) => {
        simState.xv201 = e.target.checked;
        updateSimulator();
      });
    }

    if (toggleXV301) {
      toggleXV301.addEventListener('change', (e) => {
        simState.xv301 = e.target.checked;
        updateSimulator();
      });
    }

    if (toggleESD) {
      toggleESD.addEventListener('change', (e) => {
        simState.esd100 = e.target.checked;
        updateSimulator();
      });
    }

    // Botão Injetar Falha
    if (btnInjectFault) {
      btnInjectFault.addEventListener('click', injectRandomFault);
    }

    // Botão Limpar Log
    if (btnClearLog) {
      btnClearLog.addEventListener('click', () => {
        const logBox = document.getElementById('alarm-log-box');
        if (logBox) {
          logBox.innerHTML = '';
          addLogEntry('ok', 'Log reiniciado pelo operador. Sistema em supervisão contínua.');
        }
      });
    }

    addLogEntry('ok', 'Planta SCADA-Core H₂ inicializada. Setores 100, 200 e 300 operando.');
    updateSimulator();
  }

  function updateSimulator() {
    // 1. Atualizar badges numéricas do painel
    const valPT101 = document.getElementById('val-badge-pt101');
    const valPT102 = document.getElementById('val-badge-pt102');
    const valPT103 = document.getElementById('val-badge-pt103');
    const valTT201 = document.getElementById('val-badge-tt201');
    const valPT301 = document.getElementById('val-badge-pt301');
    const valTT301 = document.getElementById('val-badge-tt301');

    if (valPT101) {
      valPT101.textContent = `${simState.pt101} bar`;
      valPT101.className = `slider-val-badge ${simState.pt101 > 400 ? 'val-danger' : 'val-normal'}`;
    }

    if (valPT102) {
      valPT102.textContent = `${simState.pt102} bar`;
      valPT102.className = `slider-val-badge ${simState.pt102 > 700 ? 'val-danger' : 'val-normal'}`;
    }

    if (valPT103) {
      valPT103.textContent = `${simState.pt103} bar`;
      valPT103.className = `slider-val-badge ${simState.pt103 > 1000 ? 'val-danger' : 'val-normal'}`;
    }

    if (valTT201) {
      valTT201.textContent = `${simState.tt201} °C`;
      valTT201.className = `slider-val-badge ${simState.tt201 > -40 ? 'val-warning' : 'val-normal'}`;
    }

    if (valPT301) {
      valPT301.textContent = `${simState.pt301} bar`;
      valPT301.className = `slider-val-badge ${simState.pt301 > 700 ? 'val-danger' : 'val-normal'}`;
    }

    if (valTT301) {
      valTT301.textContent = `${simState.tt301} °C`;
      valTT301.className = `slider-val-badge ${simState.tt301 > 85 ? 'val-danger' : 'val-normal'}`;
    }

    // 2. Avaliar Lógica de Segurança (SIL 3) e Intertravamentos
    evaluateSafetyLogic();

    // 3. Atualizar Mimico SVG em tempo real
    updateSimulatorVisuals();
  }

  function evaluateSafetyLogic() {
    const previousAlarms = [...activeAlarms];
    activeAlarms = [];

    let hasCritical = false;
    let hasWarning = false;

    // Regra 1: Parada de Emergência ESD-100
    if (simState.esd100) {
      hasCritical = true;
      activeAlarms.push({
        id: 'ESD_ACTIVE',
        level: 'crit',
        msg: '🔴 EMERGÊNCIA (ESD-100): Parada geral disparada! Trip de todas as válvulas solenoides e sirene ALM-101 ativada.'
      });
      simState.xv101 = false;
      simState.xv102 = false;
      simState.xv103 = false;
      simState.xv201 = false;
      simState.xv301 = false;
      updateCheckboxes();
    }

    // Regra 2: Sobrepressão Banco 1 LP (p1,1: P > 400 bar)
    if (simState.pt101 > 400) {
      hasCritical = true;
      activeAlarms.push({
        id: 'PT101_TRIP',
        level: 'crit',
        msg: `🔴 CRÍTICO (PT-101): Sobrepressão no Banco LP (${simState.pt101} bar > 400 bar). Trip automático XV-101.`
      });
      simState.xv101 = false;
      updateCheckboxes();
    }

    // Regra 3: Sobrepressão Banco 2 MP (p1,2: P > 700 bar)
    if (simState.pt102 > 700) {
      hasCritical = true;
      activeAlarms.push({
        id: 'PT102_TRIP',
        level: 'crit',
        msg: `🔴 CRÍTICO (PT-102): Sobrepressão no Banco MP (${simState.pt102} bar > 700 bar). Trip automático XV-102.`
      });
      simState.xv102 = false;
      updateCheckboxes();
    }

    // Regra 4: Sobrepressão Banco 3 HP (p1,3: P > 1000 bar)
    if (simState.pt103 > 1000) {
      hasCritical = true;
      activeAlarms.push({
        id: 'PT103_TRIP',
        level: 'crit',
        msg: `🔴 CRÍTICO (PT-103): Sobrepressão no Banco HP (${simState.pt103} bar > 1000 bar). Trip automático XV-103.`
      });
      simState.xv103 = false;
      updateCheckboxes();
    }

    // Regra 5: Temperatura do Chiller (t2,1: T > -40 °C)
    if (simState.tt201 > -40) {
      hasWarning = true;
      activeAlarms.push({
        id: 'TT201_WARN',
        level: 'warn',
        msg: `🟡 ATENÇÃO (TT-201): Chiller inadequado (${simState.tt201}°C > -40°C). Protocolo SAE J2601 exige pré-resfriamento.`
      });
    }

    // Regra 6: Sobrepressão no Veículo (PT-301 > 700 bar)
    if (simState.pt301 > 700) {
      hasCritical = true;
      activeAlarms.push({
        id: 'PT301_TRIP',
        level: 'crit',
        msg: `🔴 CRÍTICO (PT-301): Limite nominal de 700 bar excedido no veículo (${simState.pt301} bar). Trip XV-301.`
      });
      simState.xv301 = false;
      updateCheckboxes();
    }

    // Regra 7: Superaquecimento no Veículo (TT-301 > 85 °C)
    if (simState.tt301 > 85) {
      hasCritical = true;
      activeAlarms.push({
        id: 'TT301_TRIP',
        level: 'crit',
        msg: `🔴 CRÍTICO (TT-301): Superaquecimento no tanque FCEV (${simState.tt301}°C > 85°C). Trip imediato da válvula de injeção XV-301.`
      });
      simState.xv301 = false;
      updateCheckboxes();
    }

    // Atualizar Status Banner e Contador de Alarmes
    const banner = document.getElementById('sim-status-banner');
    const counter = document.getElementById('sim-alarm-counter');

    if (banner && counter) {
      counter.textContent = `Alarmes Ativos: ${activeAlarms.length}`;

      if (hasCritical) {
        banner.className = 'sim-status-banner status-crit';
        banner.textContent = '🔴 TRIP DE SEGURANÇA SIL 3 ATIVO';
      } else if (hasWarning) {
        banner.className = 'sim-status-banner status-warn';
        banner.textContent = '🟡 ATENÇÃO — CONDIÇÃO ANÔMALA';
      } else {
        banner.className = 'sim-status-banner status-ok';
        banner.textContent = '🟢 PLANTA OPERANDO NORMALMENTE';
      }
    }

    // Registrar no Log de Alarmes
    activeAlarms.forEach(alarm => {
      const exists = previousAlarms.some(prev => prev.id === alarm.id);
      if (!exists) {
        addLogEntry(alarm.level, alarm.msg);
      }
    });

    if (activeAlarms.length === 0 && previousAlarms.length > 0) {
      addLogEntry('ok', '🟢 NORMALIZAÇÃO — Todos os parâmetros operacionais dentro das faixas nominais.');
    }
  }

  function updateCheckboxes() {
    const t1 = document.getElementById('toggle-xv101');
    const t2 = document.getElementById('toggle-xv102');
    const t3 = document.getElementById('toggle-xv103');
    const t201 = document.getElementById('toggle-xv201');
    const t301 = document.getElementById('toggle-xv301');

    if (t1) t1.checked = simState.xv101;
    if (t2) t2.checked = simState.xv102;
    if (t3) t3.checked = simState.xv103;
    if (t201) t201.checked = simState.xv201;
    if (t301) t301.checked = simState.xv301;
  }

  function updateSimulatorVisuals() {
    const mimicContainer = document.getElementById('sim-diagram-viewport');
    if (!mimicContainer) return;
    const svg = mimicContainer.querySelector('svg');
    if (!svg) return;

    // 1. Atualizar Válvulas no SVG
    setValveSvg(svg, 'valvula-xv101', simState.xv101);
    setValveSvg(svg, 'valvula-xv102', simState.xv102);
    setValveSvg(svg, 'valvula-xv103', simState.xv103);
    setValveSvg(svg, 'valvula-xv201', simState.xv201);
    setValveSvg(svg, 'valvula-xv301', simState.xv301);

    // 2. Destacar Tanques em Sobrepressão
    setTankSvg(svg, 'banco-lp', simState.pt101 > 400);
    setTankSvg(svg, 'banco-mp', simState.pt102 > 700);
    setTankSvg(svg, 'banco-hp', simState.pt103 > 1000);

    // 3. Destacar ESD e Sirene
    setEsdSvg(svg, simState.esd100);
  }

  function setValveSvg(svgRoot, valveId, isOpen) {
    const g = svgRoot.getElementById(valveId);
    if (!g) return;

    const polygons = g.querySelectorAll('polygon');
    const lines = g.querySelectorAll('line');
    const rects = g.querySelectorAll('rect');

    const fillColor = isOpen ? '#10b981' : '#ef4444';
    const strokeColor = isOpen ? '#059669' : '#b91c1c';

    polygons.forEach(p => {
      p.setAttribute('fill', fillColor);
      p.setAttribute('stroke', strokeColor);
    });
    rects.forEach(r => {
      r.setAttribute('stroke', fillColor);
    });
    lines.forEach(l => {
      l.setAttribute('stroke', fillColor);
    });
  }

  function setTankSvg(svgRoot, tankId, isAlert) {
    const g = svgRoot.getElementById(tankId);
    if (!g) return;
    const rect = g.querySelector('rect');
    if (rect) {
      if (isAlert) {
        rect.setAttribute('stroke', '#ef4444');
        rect.setAttribute('stroke-width', '3');
      } else {
        rect.setAttribute('stroke', '#38bdf8');
        rect.setAttribute('stroke-width', '1.5');
      }
    }
  }

  function setEsdSvg(svgRoot, isEsdActive) {
    const esd = svgRoot.getElementById('sensor-esd100');
    const alm = svgRoot.getElementById('actuator-alm101');

    if (esd) {
      const rect = esd.querySelector('rect');
      if (rect) {
        rect.setAttribute('fill', isEsdActive ? '#ef4444' : '#b91c1c');
        rect.setAttribute('stroke', isEsdActive ? '#fca5a5' : '#ef4444');
      }
    }
    if (alm) {
      const poly = alm.querySelector('polygon');
      if (poly) {
        poly.setAttribute('fill', isEsdActive ? '#ef4444' : '#e11d48');
      }
    }
  }

  function addLogEntry(level, message) {
    const logBox = document.getElementById('alarm-log-box');
    if (!logBox) return;

    const timeStr = new Date().toLocaleTimeString('pt-BR');
    const entry = document.createElement('div');
    entry.className = `log-entry ${level}`;
    entry.innerHTML = `<span style="opacity: 0.65; font-family: var(--font-mono); font-size: 0.75rem;">[${timeStr}]</span> ${message}`;

    logBox.insertBefore(entry, logBox.firstChild);

    while (logBox.children.length > MAX_LOG_ENTRIES) {
      logBox.removeChild(logBox.lastChild);
    }
  }

  function injectRandomFault() {
    const faults = [
      () => {
        simState.pt101 = 440;
        const s = document.getElementById('slider-pt101');
        if (s) s.value = 440;
      },
      () => {
        simState.pt102 = 740;
        const s = document.getElementById('slider-pt102');
        if (s) s.value = 740;
      },
      () => {
        simState.pt103 = 1060;
        const s = document.getElementById('slider-pt103');
        if (s) s.value = 1060;
      },
      () => {
        simState.tt201 = -18;
        const s = document.getElementById('slider-tt201');
        if (s) s.value = -18;
      },
      () => {
        simState.pt301 = 730;
        const s = document.getElementById('slider-pt301');
        if (s) s.value = 730;
      },
      () => {
        simState.tt301 = 89;
        const s = document.getElementById('slider-tt301');
        if (s) s.value = 89;
      },
      () => {
        simState.esd100 = true;
        const s = document.getElementById('toggle-esd');
        if (s) s.checked = true;
      }
    ];

    const fn = faults[Math.floor(Math.random() * faults.length)];
    fn();
    updateSimulator();
  }

  // ==========================================================================
  // 6. EQUIPE DO PROJETO (GITHUB API + FALLBACK ROBUSTO GRUPO 9)
  // ==========================================================================
  const REPO_CONTRIBUTORS_API = 'https://api.github.com/repos/leovarconrenno/Estacao-de-Reabastecimento-de-Hidrogenio---SCADA-Core/contributors';
  const REPO_URL = 'https://github.com/leovarconrenno/Estacao-de-Reabastecimento-de-Hidrogenio---SCADA-Core';

  const FALLBACK_MEMBERS = [
    {
      login: 'JoaoOMago',
      name: 'João Pedro',
      html_url: 'https://github.com/JoaoOMago',
      avatar_url: 'https://avatars.githubusercontent.com/u/164713970?v=4',
      commits: '112 commits'
    },
    {
      login: 'MarceloCandelaria',
      name: 'Marcelo Candelaria',
      html_url: 'https://github.com/MarceloCandelaria',
      avatar_url: 'https://avatars.githubusercontent.com/u/148222438?v=4',
      commits: '108 commits'
    },
    {
      login: 'leovarconrenno',
      name: 'Leo Vargas',
      html_url: 'https://github.com/leovarconrenno',
      avatar_url: 'https://avatars.githubusercontent.com/u/315107902?v=4',
      commits: '12 commits'
    },
    {
      login: 'luca-augusto',
      name: 'Luca Augusto',
      html_url: 'https://github.com/luca-augusto',
      avatar_url: 'https://avatars.githubusercontent.com/u/108502392?v=4',
      commits: 'Colaborador'
    }
  ];

  function renderContributorCards(container, members) {
    let html = '';
    members.forEach(member => {
      html += `
        <a href="${member.html_url}" target="_blank" rel="noopener noreferrer" class="contributor-card" title="Ver perfil de ${member.name || member.login} no GitHub">
          <img src="${member.avatar_url}" alt="${member.name || member.login}" class="contributor-avatar" loading="lazy" />
          <span class="contributor-login">@${member.login}</span>
          <span class="contributor-commits">${member.commits || member.role || 'Membro da Equipe'}</span>
        </a>
      `;
    });
    container.innerHTML = html;
  }

  async function loadContributors() {
    const container = document.getElementById('team-contributors-grid');
    if (!container) return;

    // Esqueleto inicial
    container.innerHTML = `
      <div class="skeleton-contributor"><div class="skeleton-avatar"></div><div class="skeleton-line skeleton-name"></div><div class="skeleton-line skeleton-sub"></div></div>
      <div class="skeleton-contributor"><div class="skeleton-avatar"></div><div class="skeleton-line skeleton-name"></div><div class="skeleton-line skeleton-sub"></div></div>
      <div class="skeleton-contributor"><div class="skeleton-avatar"></div><div class="skeleton-line skeleton-name"></div><div class="skeleton-line skeleton-sub"></div></div>
      <div class="skeleton-contributor"><div class="skeleton-avatar"></div><div class="skeleton-line skeleton-name"></div><div class="skeleton-line skeleton-sub"></div></div>
    `;

    try {
      const res = await fetch(REPO_CONTRIBUTORS_API);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();

      if (!Array.isArray(data) || data.length === 0) {
        throw new Error('Nenhum colaborador retornado.');
      }

      // Filtra bots
      const humanUsers = data.filter(u => !u.login.includes('[bot]'));

      const mapped = humanUsers.map(user => {
        const fallbackMatch = FALLBACK_MEMBERS.find(m => m.login.toLowerCase() === user.login.toLowerCase());
        return {
          login: user.login,
          name: fallbackMatch ? fallbackMatch.name : user.login,
          html_url: user.html_url,
          avatar_url: user.avatar_url,
          commits: `${user.contributions} ${user.contributions === 1 ? 'commit' : 'commits'}`
        };
      });

      renderContributorCards(container, mapped);

    } catch (err) {
      console.warn('Utilizando fallback para colaboradores da equipe:', err);
      renderContributorCards(container, FALLBACK_MEMBERS);
    }
  }

  // ==========================================================================
  // 7. INICIALIZAÇÃO NO CARREGAMENTO DO DOM
  // ==========================================================================
  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initMobileMenu();
    loadSvgDiagrams();
    initSimulator();
    loadContributors();
  });

})();
