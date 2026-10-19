/**
 * Módulo de Busca e Renderização dos Colaboradores via GitHub API
 */

(function () {
  'use strict';

  /**
   * Renderiza os esqueletos de loading animados
   * @param {HTMLElement} container 
   * @param {number} count 
   */
  function renderSkeletons(container, count = 4) {
    let skeletonsHtml = '';
    for (let i = 0; i < count; i++) {
      skeletonsHtml += `
        <div class="contributor-card skeleton-card" aria-hidden="true">
          <div class="skeleton-avatar"></div>
          <div class="skeleton-text skeleton-title"></div>
          <div class="skeleton-text skeleton-subtitle"></div>
        </div>
      `;
    }
    container.innerHTML = skeletonsHtml;
  }

  /**
   * Renderiza mensagem de fallback quando a API do GitHub atinge rate-limit ou falha
   * @param {HTMLElement} container 
   */
  function renderFallback(container) {
    container.innerHTML = `
      <div class="contributors-fallback-card">
        <div class="fallback-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        </div>
        <div class="fallback-content">
          <p class="fallback-title">Equipe do Projeto SCADA-Core</p>
          <p class="fallback-desc">Não foi possível carregar os colaboradores em tempo real. Consulte a lista diretamente no GitHub.</p>
          <a href="${CONFIG.repoUrl}" target="_blank" rel="noopener noreferrer" class="fallback-btn">
            Ver Colaboradores no GitHub &rarr;
          </a>
        </div>
      </div>
    `;
  }

  /**
   * Carrega os colaboradores do repositório no GitHub
   */
  window.loadContributors = async function () {
    const container = document.getElementById('contributors-container');
    if (!container) return;

    renderSkeletons(container, 4);

    try {
      const response = await fetch(CONFIG.contributorsApiUrl, {
        headers: {
          'Accept': 'application/vnd.github.v3+json'
        }
      });

      if (!response.ok) {
        throw new Error(`Erro na API do GitHub: status ${response.status}`);
      }

      const contributors = await response.json();

      if (!Array.isArray(contributors) || contributors.length === 0) {
        renderFallback(container);
        return;
      }

      // Identifica a quantidade máxima de contribuições para a badge Top Contributor
      const maxContributions = Math.max(...contributors.map(c => c.contributions || 0));

      let cardsHtml = '';
      contributors.forEach((member, index) => {
        const isTop = member.contributions === maxContributions && maxContributions > 0;
        const badgeHtml = isTop 
          ? `<span class="contributor-badge top-contributor">⭐ Top Contributor</span>`
          : `<span class="contributor-badge member-badge">Membro</span>`;

        cardsHtml += `
          <a href="${member.html_url}" target="_blank" rel="noopener noreferrer" class="contributor-card" title="Perfil de ${member.login} no GitHub">
            <div class="contributor-avatar-wrap">
              <img src="${member.avatar_url}" alt="Foto de ${member.login}" class="contributor-avatar" loading="lazy" />
            </div>
            <div class="contributor-info">
              <div class="contributor-login">
                @${member.login}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="external-icon">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </div>
              <div class="contributor-stats">
                <span class="commit-count">${member.contributions}</span> ${member.contributions === 1 ? 'contribuição' : 'contribuições'}
              </div>
              ${badgeHtml}
            </div>
          </a>
        `;
      });

      container.innerHTML = cardsHtml;

    } catch (error) {
      console.warn('Falha ao carregar colaboradores do GitHub:', error);
      renderFallback(container);
    }
  };

})();
