/**
 * Main Application Logic (SPA Router, Sidebar Builder, Theme Toggle)
 */

(function () {
  'use strict';

  const STORAGE_THEME_KEY = 'h2scada_theme';
  let currentPageId = null;

  /**
   * Constrói a Sidebar dinamicamente com base no array PAGES (config.js)
   * - Itens 'fixed' no topo
   * - Seção colapsável '📚 Aulas' para títulos com padrão /^\d{2}\s*-/
   */
  window.buildSidebar = function () {
    const sidebarNav = document.getElementById('sidebar-nav');
    if (!sidebarNav || !Array.isArray(PAGES)) return;

    let html = '';

    // 1. Itens Fixos no Topo
    const fixedPages = PAGES.filter(p => p.type === 'fixed');
    html += '<ul class="nav-group nav-group-fixed">';
    fixedPages.forEach(p => {
      html += `
        <li class="nav-item">
          <a href="#${p.id}" class="nav-link" data-page-id="${p.id}">
            <span class="nav-title">${p.title}</span>
          </a>
        </li>
      `;
    });
    html += '</ul>';

    // Divisor
    html += '<div class="sidebar-divider"></div>';

    // 2. Seção de Aulas (Regex: /^\d{2}\s*-/)
    const aulaRegex = /^\d{2}\s*-/;
    const aulaPages = PAGES.filter(p => p.type === 'aula' || aulaRegex.test(p.title));

    if (aulaPages.length > 0) {
      html += `
        <div class="nav-collapsible" id="aulas-collapsible">
          <button type="button" class="collapsible-header" id="aulas-toggle" aria-expanded="true">
            <span class="collapsible-title">📚 Aulas</span>
            <svg class="collapsible-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
          <ul class="nav-group nav-group-aulas" id="aulas-list">
      `;

      aulaPages.forEach(p => {
        html += `
          <li class="nav-item">
            <a href="#${p.id}" class="nav-link nav-link-aula" data-page-id="${p.id}">
              <span class="nav-title">${p.title}</span>
            </a>
          </li>
        `;
      });

      html += `
          </ul>
        </div>
      `;
    }

    sidebarNav.innerHTML = html;

    // Listener para abrir/fechar o grupo colapsável de Aulas
    const aulasToggle = document.getElementById('aulas-toggle');
    const aulasList = document.getElementById('aulas-list');
    if (aulasToggle && aulasList) {
      aulasToggle.addEventListener('click', () => {
        const isExpanded = aulasToggle.getAttribute('aria-expanded') === 'true';
        aulasToggle.setAttribute('aria-expanded', !isExpanded);
        aulasList.classList.toggle('is-collapsed', isExpanded);
      });
    }

    // Listeners de clique nos links da sidebar
    sidebarNav.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('data-page-id');
        if (targetId) {
          window.location.hash = `#${targetId}`;
          closeMobileDrawer();
        }
      });
    });
  };

  /**
   * Marca o item ativo na Sidebar
   * @param {string} id 
   */
  window.setActiveNav = function (id) {
    document.querySelectorAll('.sidebar .nav-link').forEach(link => {
      const pageId = link.getAttribute('data-page-id');
      if (pageId === id) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      } else {
        link.classList.remove('active');
        link.removeAttribute('aria-current');
      }
    });

    // Se for aula, garante que a seção de aulas está expandida
    const activeLink = document.querySelector(`.sidebar .nav-link-aula[data-page-id="${id}"]`);
    if (activeLink) {
      const aulasToggle = document.getElementById('aulas-toggle');
      const aulasList = document.getElementById('aulas-list');
      if (aulasToggle && aulasList) {
        aulasToggle.setAttribute('aria-expanded', 'true');
        aulasList.classList.remove('is-collapsed');
      }
    }
  };

  /**
   * Carrega a página solicitada via SPA (fetch ou fallback)
   * @param {string} id 
   */
  window.loadPage = async function (id) {
    const mainContainer = document.getElementById('app-main');
    if (!mainContainer) return;

    // Valida se a página existe no config
    const pageConfig = PAGES.find(p => p.id === id) || PAGES[0];
    const pageId = pageConfig.id;
    currentPageId = pageId;

    window.setActiveNav(pageId);

    mainContainer.innerHTML = `
      <div class="page-loading-spinner" aria-label="Carregando conteúdo...">
        <div class="spinner"></div>
      </div>
    `;

    try {
      const filePath = pageConfig.file || `pages/${pageId}.html`;
      const response = await fetch(filePath);

      if (!response.ok) {
        throw new Error(`Página não encontrada (${response.status})`);
      }

      const html = await response.text();
      mainContainer.innerHTML = html;

      // Executa lógica específica por página
      if (pageId === 'home') {
        if (window.initDiagram) {
          window.initDiagram();
        }
        if (window.loadContributors) {
          window.loadContributors();
        }
      }

    } catch (err) {
      console.warn('Erro ao carregar página via fetch:', err);
      mainContainer.innerHTML = `
        <div class="page-error-card">
          <h2>⚠️ Não foi possível carregar a página</h2>
          <p>Ocorreu um erro ao carregar <code>${pageConfig.title}</code>.</p>
          <a href="#home" class="primary-action-btn" style="margin-top: 1rem;">Voltar para a Home</a>
        </div>
      `;
    }

    // Scroll suave para o topo do conteúdo principal
    mainContainer.scrollTop = 0;
    window.scrollTo(0, 0);
  };

  /**
   * Alternância de Tema Claro / Escuro
   */
  window.toggleTheme = function () {
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    const newTheme = isLight ? 'dark' : 'light';
    
    if (newTheme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }

    localStorage.setItem(STORAGE_THEME_KEY, newTheme);
    updateThemeButtons(newTheme);
  };

  function updateThemeButtons(theme) {
    const buttons = document.querySelectorAll('.theme-toggle-btn');
    buttons.forEach(btn => {
      btn.textContent = theme === 'light' ? '🌙' : '☀️';
      btn.setAttribute('aria-label', theme === 'light' ? 'Ativar modo escuro' : 'Ativar modo claro');
    });
  }

  function initTheme() {
    const saved = localStorage.getItem(STORAGE_THEME_KEY);
    const systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    const initialTheme = saved || (systemPrefersLight ? 'light' : 'dark');

    if (initialTheme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }

    updateThemeButtons(initialTheme);

    window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', (e) => {
      if (!localStorage.getItem(STORAGE_THEME_KEY)) {
        const t = e.matches ? 'light' : 'dark';
        if (t === 'light') {
          document.documentElement.setAttribute('data-theme', 'light');
        } else {
          document.documentElement.removeAttribute('data-theme');
        }
        updateThemeButtons(t);
      }
    });
  }

  /**
   * Controle do Menu Mobile Drawer
   */
  function initMobileDrawer() {
    const mobileBtn = document.getElementById('mobile-drawer-toggle');
    const sidebar = document.getElementById('app-sidebar');
    const overlay = document.getElementById('drawer-overlay');

    if (!mobileBtn || !sidebar || !overlay) return;

    mobileBtn.addEventListener('click', () => {
      const isOpen = sidebar.classList.toggle('is-open');
      overlay.classList.toggle('is-visible', isOpen);
      mobileBtn.setAttribute('aria-expanded', isOpen);
    });

    overlay.addEventListener('click', () => {
      closeMobileDrawer();
    });
  }

  function closeMobileDrawer() {
    const sidebar = document.getElementById('app-sidebar');
    const overlay = document.getElementById('drawer-overlay');
    const mobileBtn = document.getElementById('mobile-drawer-toggle');

    if (sidebar) sidebar.classList.remove('is-open');
    if (overlay) overlay.classList.remove('is-visible');
    if (mobileBtn) mobileBtn.setAttribute('aria-expanded', 'false');
  }

  /**
   * Router por Hash (#home, #sobre, #aula-00, etc.)
   */
  function handleHashChange() {
    const rawHash = window.location.hash.replace(/^#/, '').trim();
    const targetId = rawHash || 'home';
    window.loadPage(targetId);
  }

  /**
   * Inicialização do DOM
   */
  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    window.buildSidebar();
    initMobileDrawer();

    const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
    themeToggleBtns.forEach(btn => {
      btn.addEventListener('click', window.toggleTheme);
    });

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
  });

})();
