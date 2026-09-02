/**
 * Lógica do Diagrama Interativo P&ID (Draw.io / SVG) e Tooltip Flutuante
 */

(function () {
  'use strict';

  let tooltipEl = null;

  /**
   * Garante a existência do elemento de tooltip flutuante no DOM
   */
  function ensureTooltipElement() {
    if (!tooltipEl) {
      tooltipEl = document.getElementById('diagram-tooltip');
      if (!tooltipEl) {
        tooltipEl = document.createElement('div');
        tooltipEl.id = 'diagram-tooltip';
        tooltipEl.className = 'custom-diagram-tooltip';
        tooltipEl.setAttribute('role', 'tooltip');
        tooltipEl.setAttribute('aria-hidden', 'true');
        document.body.appendChild(tooltipEl);
      }
    }
    return tooltipEl;
  }

  /**
   * Exibe e posiciona o tooltip flutuante
   * @param {MouseEvent|FocusEvent} e 
   * @param {string} text 
   */
  window.showTooltip = function (e, text) {
    const tooltip = ensureTooltipElement();
    if (!text || !tooltip) return;

    // Formata o texto caso contenha separadores de tag (|)
    const parts = text.split('|');
    if (parts.length > 1) {
      const header = parts[0].trim();
      const bodyItems = parts.slice(1).map(p => `<li>${p.trim()}</li>`).join('');
      tooltip.innerHTML = `
        <div class="tooltip-header">${header}</div>
        <ul class="tooltip-body">${bodyItems}</ul>
      `;
    } else {
      tooltip.textContent = text;
    }

    tooltip.classList.add('is-visible');
    tooltip.setAttribute('aria-hidden', 'false');

    positionTooltip(e);
  };

  /**
   * Atualiza as coordenadas do tooltip sem sair dos limites da tela
   * @param {MouseEvent} e 
   */
  function positionTooltip(e) {
    if (!tooltipEl || !tooltipEl.classList.contains('is-visible')) return;

    const offset = 16;
    let clientX = e.clientX;
    let clientY = e.clientY;

    // Se disparado por foco via teclado
    if (e.type === 'focus' && e.target) {
      const rect = e.target.getBoundingClientRect();
      clientX = rect.left + rect.width / 2;
      clientY = rect.top;
    }

    const tooltipRect = tooltipEl.getBoundingClientRect();
    let left = clientX + offset;
    let top = clientY + offset;

    // Ajuste contra transbordo lateral
    if (left + tooltipRect.width > window.innerWidth - 16) {
      left = clientX - tooltipRect.width - offset;
    }
    if (left < 16) {
      left = 16;
    }

    // Ajuste contra transbordo vertical
    if (top + tooltipRect.height > window.innerHeight - 16) {
      top = clientY - tooltipRect.height - offset;
    }
    if (top < 16) {
      top = 16;
    }

    tooltipEl.style.left = `${left}px`;
    tooltipEl.style.top = `${top}px`;
  }

  /**
   * Oculta o tooltip flutuante
   */
  window.hideTooltip = function () {
    if (tooltipEl) {
      tooltipEl.classList.remove('is-visible');
      tooltipEl.setAttribute('aria-hidden', 'true');
    }
  };

  /**
   * Inicializa os nós interativos do diagrama SVG
   */
  window.initDiagram = async function () {
    const diagramContainer = document.getElementById('diagram-container');
    if (!diagramContainer) return;

    ensureTooltipElement();

    // Se o SVG ainda não estiver inserido diretamente no container, busca o arquivo
    if (!diagramContainer.querySelector('svg')) {
      try {
        const response = await fetch('assets/diagrama.svg');
        if (response.ok) {
          const svgContent = await response.text();
          diagramContainer.innerHTML = svgContent;
        }
      } catch (err) {
        console.warn('Carregamento do SVG via fetch falhou, utilizando fallback se presente:', err);
      }
    }

    // Seleciona todos os elementos com data-sensor
    const sensorElements = diagramContainer.querySelectorAll('[data-sensor]');
    
    sensorElements.forEach((elem) => {
      const sensorInfo = elem.getAttribute('data-sensor');
      if (!sensorInfo) return;

      // Eventos de Mouse
      elem.addEventListener('mouseenter', (e) => {
        window.showTooltip(e, sensorInfo);
      });

      elem.addEventListener('mousemove', (e) => {
        positionTooltip(e);
      });

      elem.addEventListener('mouseleave', () => {
        window.hideTooltip();
      });

      // Acessibilidade por Teclado
      elem.addEventListener('focus', (e) => {
        window.showTooltip(e, sensorInfo);
      });

      elem.addEventListener('blur', () => {
        window.hideTooltip();
      });
    });
  };

})();
