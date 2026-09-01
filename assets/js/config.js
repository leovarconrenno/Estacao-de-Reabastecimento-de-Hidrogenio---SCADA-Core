/**
 * Configuração de Páginas e Rotas do Projeto SCADA-Core
 * Organização do índice, detecção de aulas e metadados.
 */

const CONFIG = {
  repoUrl: "https://github.com/Automatica-Reabastecimento-H2-SCADA/Estacao-de-Reabastecimento-de-Hidrogenio---SCADA-Core",
  contributorsApiUrl: "https://api.github.com/repos/Automatica-Reabastecimento-H2-SCADA/Estacao-de-Reabastecimento-de-Hidrogenio---SCADA-Core/contributors",
  projectTitle: "Estação de Reabastecimento de H₂",
  academicContext: "Engenharia de Controle e Automação — UNIFEI"
};

/**
 * Array de Páginas Disponíveis no Projeto
 * O script detecta automaticamente itens cujo title inicia com `\d{2}\s*-`
 * e os agrupa na seção colapsável "📚 Aulas".
 */
const PAGES = [
  { 
    id: "home", 
    title: "🏠 Home", 
    type: "fixed",
    file: "pages/home.html"
  },
  { 
    id: "sobre", 
    title: "📋 Sobre o Projeto", 
    type: "fixed",
    file: "pages/sobre.html"
  },
  { 
    id: "aula-00", 
    title: "00 - Introdução ao SCADA", 
    type: "aula",
    file: "pages/aula-00.html"
  },
  { 
    id: "aula-01", 
    title: "01 - Lógica Formal e Diagnóstico", 
    type: "aula",
    file: "pages/aula-01.html"
  },
  { 
    id: "aula-02", 
    title: "02 - Grafos de Estados & Cascata", 
    type: "aula",
    file: "pages/aula-02.html"
  },
  { 
    id: "aula-03", 
    title: "03 - Árvores de Falhas & Confiabilidade", 
    type: "aula",
    file: "pages/aula-03.html"
  }
];
