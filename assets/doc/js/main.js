/**
 * SCADA Core - Estação de Reabastecimento de Hidrogênio (UNIFEI)
 * Baseado no P&ID oficial: projeto2.drawio (Setores 100, 200 e 300)
 */

(function () {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. Gerenciador de Tema (Dark / Light) com LocalStorage
  // --------------------------------------------------------------------------
  const STORAGE_KEY = 'h2scada_theme_pref';

  function initTheme() {
    const saved = localStorage.getItem(STORAGE_KEY);
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

        localStorage.setItem(STORAGE_KEY, nextTheme);
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

  // --------------------------------------------------------------------------
  // 2. Menu Mobile Hambúrguer
  // --------------------------------------------------------------------------
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

  // --------------------------------------------------------------------------
  // 3. Tooltip Flutuante dos Sensores
  // --------------------------------------------------------------------------
  let tooltipEl = null;

  function ensureTooltip() {
    if (!tooltipEl) {
      tooltipEl = document.getElementById('custom-tooltip');
      if (!tooltipEl) {
        tooltipEl = document.createElement('div');
        tooltipEl.id = 'custom-tooltip';
        tooltipEl.className = 'custom-tooltip';
        tooltipEl.setAttribute('role', 'tooltip');
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
      tooltip.innerHTML = `<strong style="color: var(--primary-light); display: block; margin-bottom: 3px;">${title}</strong>${items}`;
    } else {
      tooltip.textContent = text;
    }

    tooltip.classList.add('is-visible');
    positionTooltip(e);
  }

  function positionTooltip(e) {
    if (!tooltipEl || !tooltipEl.classList.contains('is-visible')) return;

    const offset = 16;
    let x = e.clientX + offset;
    let y = e.clientY + offset;

    const rect = tooltipEl.getBoundingClientRect();
    if (x + rect.width > window.innerWidth - 16) {
      x = e.clientX - rect.width - offset;
    }
    if (y + rect.height > window.innerHeight - 16) {
      y = e.clientY - rect.height - offset;
    }

    tooltipEl.style.left = `${Math.max(10, x)}px`;
    tooltipEl.style.top = `${Math.max(10, y)}px`;
  }

  function hideTooltip() {
    if (tooltipEl) {
      tooltipEl.classList.remove('is-visible');
    }
  }

  function attachTooltips() {
    ensureTooltip();
    const targets = document.querySelectorAll('[data-sensor]');
    targets.forEach(el => {
      const info = el.getAttribute('data-sensor');
      el.addEventListener('mouseenter', (e) => showTooltip(e, info));
      el.addEventListener('mousemove', positionTooltip);
      el.addEventListener('mouseleave', hideTooltip);
      el.addEventListener('focus', (e) => showTooltip(e, info));
      el.addEventListener('blur', hideTooltip);
    });
  }

  // --------------------------------------------------------------------------
  // 4. Simulador SCADA da Planta H₂ Real (Setores 100, 200, 300)
  // --------------------------------------------------------------------------
  const simState = {
    // Setor 100: Armazenamento
    pt101: 350,   // Banco 1 (0-500 bar)
    pt102: 650,   // Banco 2 (0-800 bar)
    pt103: 950,   // Banco 3 (0-1100 bar)
    cascadeSelect: 'LP', // 'LP', 'MP', 'HP'
    xv101: true,
    xv102: true,
    xv103: true,
    esd100: false, // Parada de Emergência

    // Setor 200: Condicionamento
    tt201: -42,   // Temperatura de saída do Chiller (-50 a +20 °C)
    m201: true,   // Motor do Chiller
    xv201: true,  // Válvula Chiller

    // Setor 300: Dispensador
    pt301: 520,   // Pressão no veículo (0-700 bar)
    tt301: 28,    // Temperatura no receptáculo (-40 a 90 °C)
    xv301: true,  // Válvula Bico Dispensador
    j2799Com: true // Comunicação IR
  };

  let activeAlarms = [];
  const MAX_LOG_ENTRIES = 35;

  function initSimulator() {
    // Sliders
    const sliderPT101 = document.getElementById('slider-pt101');
    const sliderPT102 = document.getElementById('slider-pt102');
    const sliderPT103 = document.getElementById('slider-pt103');
    const sliderTT201 = document.getElementById('slider-tt201');
    const sliderPT301 = document.getElementById('slider-pt301');
    const sliderTT301 = document.getElementById('slider-tt301');

    // Toggles & Selectors
    const selectCascade = document.getElementById('select-cascade');
    const toggleXV101 = document.getElementById('toggle-xv101');
    const toggleXV102 = document.getElementById('toggle-xv102');
    const toggleXV103 = document.getElementById('toggle-xv103');
    const toggleM201 = document.getElementById('toggle-m201');
    const toggleXV201 = document.getElementById('toggle-xv201');
    const toggleXV301 = document.getElementById('toggle-xv301');
    const toggleESD = document.getElementById('toggle-esd');

    const btnInjectFault = document.getElementById('btn-inject-fault');
    const btnClearLog = document.getElementById('btn-clear-log');

    if (!sliderPT101) return;

    // Listeners de Sliders
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

    // Listeners de Toggles
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

    if (toggleM201) {
      toggleM201.addEventListener('change', (e) => {
        simState.m201 = e.target.checked;
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

    if (btnInjectFault) {
      btnInjectFault.addEventListener('click', injectRandomFault);
    }

    if (btnClearLog) {
      btnClearLog.addEventListener('click', () => {
        const logBox = document.getElementById('alarm-log-box');
        if (logBox) {
          logBox.innerHTML = '';
          addLogEntry('ok', 'Log limpo pelo operador. Sistema em supervisão contínua.');
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
    }

    if (valTT301) {
      valTT301.textContent = `${simState.tt301} °C`;
      valTT301.className = `slider-val-badge ${simState.tt301 > 85 ? 'val-danger' : 'val-normal'}`;
    }

    // 2. Avaliar Lógica de Intertravamento e Alarmes
    evaluateSafetyLogic();
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
        msg: `🔴 EMERGÊNCIA (ESD-100): Parada manual de emergência disparada! Trip geral de todas as válvulas solenoides e sirene ALM-101 ativada.`
      });

      // Atuação de Trip Geral
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
        msg: `🔴 CRÍTICO (PT-101): Sobrepressão no Banco 1 LP (${simState.pt101} bar > 400 bar). Trip na válvula XV-101 e sinalizador SL-101.`
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
        msg: `🔴 CRÍTICO (PT-102): Sobrepressão no Banco 2 MP (${simState.pt102} bar > 700 bar). Trip na válvula XV-102 e sinalizador SL-102.`
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
        msg: `🔴 CRÍTICO (PT-103): Sobrepressão no Banco 3 HP (${simState.pt103} bar > 1000 bar). Trip na válvula XV-103 e sinalizador SL-103.`
      });
      simState.xv103 = false;
      updateCheckboxes();
    }

    // Regra 5: Temperatura de Saída do Chiller (t2,1: T > -40 °C)
    if (simState.tt201 > -40) {
      hasWarning = true;
      activeAlarms.push({
        id: 'TT201_WARN',
        level: 'warn',
        msg: `🟡 ATENÇÃO (TT-201): Temperatura do Chiller inadequada (${simState.tt201}°C > -40°C). Permissivo de abastecimento SAE J2601 não atendido.`
      });
    }

    // Regra 6: Superaquecimento no Veículo (t3,1: T > 85 °C)
    if (simState.tt301 > 85) {
      hasCritical = true;
      activeAlarms.push({
        id: 'TT301_TRIP',
        level: 'crit',
        msg: `🔴 CRÍTICO (TT-301): Superaquecimento no tanque do veículo (${simState.tt301}°C > 85°C). Trip imediato da válvula de injeção XV-301.`
      });
      simState.xv301 = false;
      updateCheckboxes();
    }

    // Atualizar Status Banner
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

    // Registrar no log
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

  function addLogEntry(level, message) {
    const logBox = document.getElementById('alarm-log-box');
    if (!logBox) return;

    const timeStr = new Date().toLocaleTimeString('pt-BR');
    const entry = document.createElement('div');
    entry.className = `log-entry ${level}`;
    entry.innerHTML = `<span style="opacity: 0.65;">[${timeStr}]</span> ${message}`;

    logBox.insertBefore(entry, logBox.firstChild);

    while (logBox.children.length > MAX_LOG_ENTRIES) {
      logBox.removeChild(logBox.lastChild);
    }
  }

  function injectRandomFault() {
    const faults = [
      () => {
        // Sobrepressão Banco 1
        simState.pt101 = 440;
        const s = document.getElementById('slider-pt101');
        if (s) s.value = 440;
      },
      () => {
        // Sobrepressão Banco 3
        simState.pt103 = 1060;
        const s = document.getElementById('slider-pt103');
        if (s) s.value = 1060;
      },
      () => {
        // Falha no Chiller
        simState.tt201 = -15;
        const s = document.getElementById('slider-tt201');
        if (s) s.value = -15;
      },
      () => {
        // Superaquecimento no Veículo
        simState.tt301 = 89;
        const s = document.getElementById('slider-tt301');
        if (s) s.value = 89;
      },
      () => {
        // Parada de Emergência
        simState.esd100 = true;
        const s = document.getElementById('toggle-esd');
        if (s) s.checked = true;
      }
    ];

    const fn = faults[Math.floor(Math.random() * faults.length)];
    fn();
    updateSimulator();
  }

  // --------------------------------------------------------------------------
  // 5. Carregador de Diagrama SVG
  // --------------------------------------------------------------------------
  async function loadSvgDiagrams() {
    const containers = [
      document.getElementById('sim-diagram-viewport'),
      document.getElementById('diagrama-static-viewport')
    ];

    for (const container of containers) {
      if (container && !container.querySelector('svg')) {
        try {
          const res = await fetch('assets/diagrama.svg');
          if (res.ok) {
            const svgContent = await res.text();
            container.innerHTML = svgContent;
          }
        } catch (e) {
          console.warn('Diagrama carregado com fallback');
        }
      }
    }

    attachTooltips();
  }

  // --------------------------------------------------------------------------
  // 6. GitHub API - Colaboradores da Equipe
  // --------------------------------------------------------------------------
  const CONTRIBUTORS_API = 'https://api.github.com/repos/leovarconrenno/Estacao-de-Reabastecimento-de-Hidrogenio---SCADA-Core/contributors';
  const STATS_API = 'https://api.github.com/repos/leovarconrenno/Estacao-de-Reabastecimento-de-Hidrogenio---SCADA-Core/stats/contributors';
  const REPO_URL = 'https://github.com/leovarconrenno/Estacao-de-Reabastecimento-de-Hidrogenio---SCADA-Core';

  /**
   * Busca /stats/contributors e retorna um mapa { login: { additions, deletions } }.
   * A API do GitHub pode responder 202 (estatísticas ainda sendo calculadas) na
   * primeira chamada, então tentamos de novo algumas vezes antes de desistir.
   * Qualquer falha aqui é silenciosa — apenas a linha de +/- não aparece.
   */
  async function fetchLocStatsMap(retries = 4, delayMs = 2000) {
    for (let attempt = 0; attempt < retries; attempt++) {
      try {
        const res = await fetch(STATS_API, {
          headers: { 'Accept': 'application/vnd.github.v3+json' }
        });

        if (res.status === 202) {
          await new Promise(resolve => setTimeout(resolve, delayMs));
          continue;
        }

        if (!res.ok) return {};

        const data = await res.json();
        if (!Array.isArray(data)) return {};

        const map = {};
        data.forEach(entry => {
          if (!entry || !entry.author || !entry.author.login) return;
          const totals = (entry.weeks || []).reduce(
            (acc, week) => {
              acc.additions += week.a || 0;
              acc.deletions += week.d || 0;
              return acc;
            },
            { additions: 0, deletions: 0 }
          );
          map[entry.author.login] = totals;
        });
        return map;

      } catch (err) {
        console.warn('Falha ao buscar estatísticas de linhas dos colaboradores:', err);
        return {};
      }
    }
    return {};
  }

  async function loadContributors() {
    const container = document.getElementById('team-contributors-grid');
    if (!container) return;

    container.innerHTML = `
      <div class="skeleton-contributor"><div class="skeleton-avatar"></div><div class="skeleton-line skeleton-name"></div><div class="skeleton-line skeleton-sub"></div></div>
      <div class="skeleton-contributor"><div class="skeleton-avatar"></div><div class="skeleton-line skeleton-name"></div><div class="skeleton-line skeleton-sub"></div></div>
      <div class="skeleton-contributor"><div class="skeleton-avatar"></div><div class="skeleton-line skeleton-name"></div><div class="skeleton-line skeleton-sub"></div></div>
      <div class="skeleton-contributor"><div class="skeleton-avatar"></div><div class="skeleton-line skeleton-name"></div><div class="skeleton-line skeleton-sub"></div></div>
    `;

    try {
      const [res, locStatsMap] = await Promise.all([
        fetch(CONTRIBUTORS_API),
        fetchLocStatsMap()
      ]);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();

      if (!Array.isArray(data) || data.length === 0) {
        throw new Error('Nenhum colaborador retornado.');
      }

      let html = '';
      data.forEach(user => {
        const stats = locStatsMap[user.login];
        const locHtml = stats
          ? `<span class="contributor-loc-stats">
               <span class="loc-added">+${stats.additions.toLocaleString('pt-BR')}</span>
               <span class="loc-removed">-${stats.deletions.toLocaleString('pt-BR')}</span>
             </span>`
          : '';

        html += `
          <a href="${user.html_url}" target="_blank" rel="noopener noreferrer" class="contributor-card" title="Ver perfil de ${user.login} no GitHub">
            <img src="${user.avatar_url}" alt="${user.login}" class="contributor-avatar" loading="lazy" />
            <span class="contributor-login">@${user.login}</span>
            <span class="contributor-commits"><strong>${user.contributions}</strong> ${user.contributions === 1 ? 'commit' : 'commits'}</span>
            ${locHtml}
          </a>
        `;
      });

      container.innerHTML = html;

    } catch (err) {
      console.warn('Falha ao obter colaboradores do GitHub:', err);
      container.innerHTML = `
        <div style="grid-column: 1 / -1; background: var(--bg-card); border: 1px dashed var(--border-color); border-radius: 12px; padding: 1.5rem; text-align: center;">
          <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 0.75rem;">
            Não foi possível carregar os colaboradores em tempo real. Consulte a equipe diretamente no repositório.
          </p>
          <a href="${REPO_URL}" target="_blank" rel="noopener noreferrer" class="btn btn-outline" style="font-size: 0.85rem; padding: 0.5rem 1rem;">
            Ver Colaboradores no GitHub &rarr;
          </a>
        </div>
      `;
    }
  }

  // --------------------------------------------------------------------------
  // 7. Inicialização
  // --------------------------------------------------------------------------
  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initMobileMenu();
    loadSvgDiagrams();
    initSimulator();
    loadContributors();
  });

})();
