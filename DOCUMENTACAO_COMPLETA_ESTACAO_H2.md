# MANUAL TÃ‰CNICO INTEGRAL DE ENGENHARIA, OPERAÃ‡ÃƒO E ANÃLISE ARQUITETURAL
# SISTEMA SCADA CORE PARA ESTAÃ‡ÃƒO DE REABASTECIMENTO DE HIDROGÃŠNIO (HRS - FCEV)

**Universidade Federal de ItajubÃ¡ - UNIFEI**  
**Instituto de Engenharia de Sistemas e Tecnologias da InformaÃ§Ã£o (IESTI)**  
**Disciplina:** ECAA08 - LÃ³gica Aplicada e Teoria dos Grafos para AutomaÃ§Ã£o  
**RepositÃ³rio Oficial:** `leovarconrenno/Estacao-de-Reabastecimento-de-Hidrogenio---SCADA-Core`  
**Equipe de Desenvolvimento:** JoÃ£o Pedro, Marcelo Candelaria, Luca Augusto, Leo Vargas  
**Documento de Engenharia:** RevisÃ£o TÃ©cnica Consolidada, AnÃ¡lise Estrutural e Manual Completo  
**ClassificaÃ§Ã£o:** DocumentaÃ§Ã£o TÃ©cnica Industrial e Referencial de Controle e AutomaÃ§Ã£o  

---

## SUMÃRIO EXECUTIVO E ÃNDICE GERAL

- **SEÃ‡ÃƒO PRELIMINAR: ANÃLISE ESTRUTURAL E ARQUITETURAL DO REPOSITÃ“RIO GITHUB**
  - Contexto AcadÃªmico e MotivaÃ§Ã£o do Projeto na UNIFEI
  - Topografia de Arquivos, Pastas e Artefatos de Software
  - MÃ³dulo 1 (Etapa 01 - LÃ³gica Formal e Sistemas Especialistas)
  - MÃ³dulo 2 (Etapa 02 - Teoria dos Grafos Aplicada a Redes de TubulaÃ§Ã£o)
  - MÃ³dulo 3 (Interface SupervisÃ³ria Web, P&ID Interativo e Simulador DidÃ¡tico)
  - AutomaÃ§Ã£o de CI/CD e Pipelines do GitHub Actions

- **CAPÃTULO 1: INTRODUÃ‡ÃƒO GERAL, CONTEXTO E VISÃƒO SISTÃŠMICA**
  - 1.1 O Papel do HidrogÃªnio Verde na TransiÃ§Ã£o EnergÃ©tica Global
  - 1.2 Tecnologias de Mobilidade ElÃ©trica a CÃ©lula de CombustÃ­vel (FCEV)
  - 1.3 Anatomia Funcional de uma EstaÃ§Ã£o de HidrogÃªnio (HRS)
  - 1.4 A Centralidade dos Sistemas SCADA e AutomaÃ§Ã£o Industrial CrÃ­tica
  - 1.5 ContextualizaÃ§Ã£o do Projeto SCADA Core UNIFEI
  - 1.6 Estrutura Organizacional do RepositÃ³rio e Artefatos do Projeto

- **CAPÃTULO 2: NORMAS TÃ‰CNICAS E DIRETRIZES INTERNACIONAIS DE SEGURANÃ‡A**
  - 2.1 SAE J2601: Protocolo de Abastecimento para VeÃ­culos Leves de Alta PressÃ£o
  - 2.2 SAE J2799: Protocolo de ComunicaÃ§Ã£o Sem Fio e Infravermelho (IrDA)
  - 2.3 ISO 19880-1: Requisitos Globais de SeguranÃ§a e Desempenho para HRS
  - 2.4 NFPA 2: CÃ³digo TecnolÃ³gico de HidrogÃªnio e MitigaÃ§Ã£o de Riscos de ExplosÃ£o
  - 2.5 IEC 61508 e IEC 61511: SeguranÃ§a Funcional e Sistemas Instrumentados (SIS / SIL)
  - 2.6 ClassificaÃ§Ã£o de Ãreas Potencialmente Explosivas (ATEX / IECEx / NR-10 / NR-20)
  - 2.7 ASME B31.12: Engenharia de TubulaÃ§Ãµes para HidrogÃªnio Gasoso

- **CAPÃTULO 3: TERMODINÃ‚MICA E ENGENHARIA DO PROCESSO DE COMPRESSÃƒO E TRANSFERÃŠNCIA**
  - 3.1 Propriedades FÃ­sico-QuÃ­micas CrÃ­ticas do GÃ¡s HidrogÃªnio (H2)
  - 3.2 O Efeito Joule-Thomson e o FenÃ´meno de InversÃ£o TÃ©rmica
  - 3.3 Necessidade CrÃ­tica de PrÃ©-resfriamento CriogÃªnico (-40Â°C / Classe T40)
  - 3.4 Filosofia de Armazenamento em Cascata (Cascade Storage: LP, MP, HP)
  - 3.5 Taxa MÃ©dia de Rampa de PressÃ£o (APRR) e PrevenÃ§Ã£o de Fadiga TÃ©rmica
  - 3.6 DinÃ¢mica de Carregamento em Tanques Tipo IV (PolÃ­mero e Fibra de Carbono)

- **CAPÃTULO 4: ARQUITETURA FÃSICA DA PLANTA E INSTRUMENTAÃ‡ÃƒO P&ID**
  - 4.1 Setor 100: Armazenamento e CompressÃ£o MultiestÃ¡gio
  - 4.2 Setor 200: Condicionamento TÃ©rmico e Unidade de Resfriamento (Chiller)
  - 4.3 Setor 300: Linha de DispensaÃ§Ã£o e Interface Veicular
  - 4.4 Filosofia Operacional das VÃ¡lvulas de Bloqueio RÃ¡pido e SeleÃ§Ã£o Direcional
  - 4.5 Mecanismos de AlÃ­vio MecÃ¢nico (PSV) e Parada de EmergÃªncia (ESD)

- **CAPÃTULO 5: MAPA DE VARIÃVEIS, DICIONÃRIO DE TAGS E PROTOCOLOS DE COMUNICAÃ‡ÃƒO**
  - 5.1 PadronizaÃ§Ã£o ISA-5.1 para InstrumentaÃ§Ã£o e Malhas de Controle
  - 5.2 DicionÃ¡rio Exaustivo de Entradas AnalÃ³gicas (AI)
  - 5.3 DicionÃ¡rio Exaustivo de Entradas Discretas (DI)
  - 5.4 DicionÃ¡rio Exaustivo de SaÃ­das AnalÃ³gicas (AO)
  - 5.5 DicionÃ¡rio Exaustivo de SaÃ­das Discretas (DO)
  - 5.6 Mapeamento de Registradores Industriais (Modbus TCP e NÃ³s OPC UA)

- **CAPÃTULO 6: ETAPA 01 - LÃ“GICA PROPOSICIONAL, BOOLEANA E INTERTRAVAMENTOS DE SEGURANÃ‡A**
  - 6.1 FormalizaÃ§Ã£o LÃ³gica de Estados FÃ­sicos e VariÃ¡veis Discretas
  - 6.2 Conectivos Fundamentais, Tabelas-Verdade e Permissivos Operacionais
  - 6.3 AnÃ¡lise AlgÃ©brica de Tautologias, ContradiÃ§Ãµes e ContingÃªncias
  - 6.4 Formas CanÃ´nicas: Forma Normal Disjuntiva (FND) e Conjuntiva (FNC)
  - 6.5 OtimizaÃ§Ã£o LÃ³gica: Mapas de Karnaugh e Algoritmo de Quine-McCluskey
  - 6.6 Predicados de Primeira Ordem e Quantificadores em Redes de Sensores
  - 6.7 Regras de InferÃªncia Dedutiva e ResoluÃ§Ã£o Proposicional
  - 6.8 Arquitetura de Intertravamento SIS e VotaÃ§Ã£o Redundante (1oo2, 2oo3)

- **CAPÃTULO 7: SISTEMAS ESPECIALISTAS E MOTORES DE INFERÃŠNCIA DIAGNÃ“STICA**
  - 7.1 Fundamentos de Sistemas Baseados em Regras (Rule-Based Systems - RBS)
  - 7.2 Estrutura da Base de Conhecimento e Regras de ProduÃ§Ã£o IF-THEN
  - 7.3 Motor de InferÃªncia por Encadeamento para Frente (Forward Chaining)
  - 7.4 Motor de InferÃªncia por Encadeamento para TrÃ¡s (Backward Chaining)
  - 7.5 Matriz de CorrelaÃ§Ã£o Sintoma-Causa-AÃ§Ã£o para DiagnÃ³stico Preditivo
  - 7.6 ImplementaÃ§Ã£o Computacional e Algoritmos de DiagnÃ³stico em Tempo Real
  - 7.7 AvaliaÃ§Ã£o de EficÃ¡cia do MÃ³dulo de DiagnÃ³stico

- **CAPÃTULO 8: ETAPA 02 - TEORIA DOS GRAFOS E MODELAGEM TOPOLÃ“GICA DE TUBULAÃ‡Ã•ES**
  - 8.1 Modelagem Estrutural por DÃ­grafos Ponderados G = (V, E, W)
  - 8.2 DefiniÃ§Ã£o TopolÃ³gica dos VÃ©rtices e Arestas da Planta H2
  - 8.3 RepresentaÃ§Ãµes Matriciais: AdjacÃªncia, IncidÃªncia e Custos HidrÃ¡ulicos
  - 8.4 Matriz Laplaciana e Propriedades Espectrais da Conectividade da Planta
  - 8.5 Tipologias de Passeios, Trilhas, Caminhos e Ciclos em Redes de Dutos
  - 8.6 AnÃ¡lise de RedundÃ¢ncia e Lema do Aperto de MÃ£os Dirigido

- **CAPÃTULO 9: ALGORITMOS DE BUSCA, CAMINHO MÃNIMO E ROTEAMENTO DINÃ‚MICO**
  - 9.1 Busca em Largura (BFS): PropagaÃ§Ã£o de PressÃ£o e Varredura de Alcance
  - 9.2 Busca em Profundidade (DFS): Rastreamento de Linhas e DetecÃ§Ã£o de Ciclos
  - 9.3 Algoritmo de Dijkstra para OtimizaÃ§Ã£o de Rota de Abastecimento
  - 9.4 Arestas Pontes (Bridges) e VÃ©rtices de ArticulaÃ§Ã£o CrÃ­ticos
  - 9.5 SimulaÃ§Ã£o de Vazamentos e Algoritmo de Desvio AutomÃ¡tico em Tempo Real
  - 9.6 Intertravamento de SeguranÃ§a via Grafo AcÃ­clico Dirigido (DAG)

- **CAPÃTULO 10: OTIMIZAÃ‡ÃƒO DE INSPEÃ‡ÃƒO INDUSTRIAL E LOGÃSTICA DE INSUMOS**
  - 10.1 Problemas Eulerianos e InspeÃ§Ã£o Integral por RobÃ´ PIG UltrassÃ´nico
  - 10.2 Algoritmos de Hierholzer e Fleury para TrajetÃ³rias Eulerianas
  - 10.3 Problemas Hamiltonianos e Roteamento de VeÃ­culos AutÃ´nomos (AGV)
  - 10.4 ResoluÃ§Ã£o do Problema do Caixeiro Viajante (TSP) com HeurÃ­stica 2-Opt
  - 10.5 Grafos de Fluxo MÃ¡ximo e Cadeia LogÃ­stica de Transporte de H2 (Tube Trailers)

- **CAPÃTULO 11: ARQUITETURA DE SOFTWARE DO SCADA CORE E SIMULADOR WEB**
  - 11.1 Arquitetura Front-End: HTML5 SemÃ¢ntico, CSS3 e Design Responsivo
  - 11.2 IntegraÃ§Ã£o DinÃ¢mica com Diagrama Vetorial P&ID em Formato SVG
  - 11.3 Controlador de Estados JavaScript e ManipulaÃ§Ã£o do DOM em Tempo Real
  - 11.4 Simulador DidÃ¡tico de Grafos e Painel Interativo de Tomada de DecisÃ£o
  - 11.5 AutomaÃ§Ã£o de Builds, CI/CD e IntegraÃ§Ã£o ContÃ­nua com GitHub Actions

- **CAPÃTULO 12: ANÃLISE DE RISCOS DE PROCESSO, HAZOP E MATRIZ FMEA**
  - 12.1 Metodologia do Estudo de Perigos e Operabilidade (HAZOP)
  - 12.2 Planilhas Detalhadas de AnÃ¡lise HAZOP por NÃ³s de Processo
  - 12.3 Matriz de Modos de Falha e Efeitos (FMEA) e PriorizaÃ§Ã£o de Risco (RPN)
  - 12.4 Filosofia de GestÃ£o de Alarmes conforme a Norma ANSI/ISA-18.2
  - 12.5 Procedimentos Operacionais Padronizados de ContingÃªncia e EmergÃªncia

- **CAPÃTULO 13: GUIA PRÃTICO DE IMPLANTAÃ‡ÃƒO, EXECUÃ‡ÃƒO E TESTES**
  - 13.1 Requisitos de Infraestrutura e DependÃªncias de Software
  - 13.2 Procedimentos de InicializaÃ§Ã£o do Servidor Local e Interface Web
  - 13.3 ExecuÃ§Ã£o e ValidaÃ§Ã£o dos Notebooks DidÃ¡ticos Jupyter
  - 13.4 Bateria de Testes Funcionais e Casos Extremos (Corner Cases)
  - 13.5 Proposta de Roadmap e ExtensÃµes para Ambiente Industrial Real

- **CAPÃTULO 14: CONSIDERAÃ‡Ã•ES FINAIS, GLOSSÃRIO E REFERÃŠNCIAS BIBLIOGRÃFICAS**
  - 14.1 ConclusÃµes TÃ©cnicas sobre a IntegraÃ§Ã£o LÃ³gica-Grafos-SCADA
  - 14.2 GlossÃ¡rio Exaustivo de Termos TÃ©cnicos e Siglas de Engenharia
  - 14.3 ReferÃªncias BibliogrÃ¡ficas Normativas e AcadÃªmicas

---

# SEÃ‡ÃƒO PRELIMINAR: ANÃLISE ESTRUTURAL E ARQUITETURAL DO REPOSITÃ“RIO GITHUB

## Contexto AcadÃªmico e MotivaÃ§Ã£o do Projeto na UNIFEI
O projeto de cÃ³digo aberto **Estacao-de-Reabastecimento-de-Hidrogenio---SCADA-Core** foi concebido no Ã¢mbito do Instituto de Engenharia de Sistemas e Tecnologias da InformaÃ§Ã£o (IESTI) da Universidade Federal de ItajubÃ¡ (UNIFEI), na disciplina **ECAA08 (LÃ³gica Aplicada e Teoria dos Grafos para AutomaÃ§Ã£o)**.

Os autores originais â€” **JoÃ£o Pedro, Marcelo Candelaria, Luca Augusto e Leo Vargas** â€” estruturaram a iniciativa para preencher uma lacuna existente entre o ensino de matemÃ¡tica discreta/ciÃªncia da computaÃ§Ã£o teÃ³rica e a prÃ¡tica da engenharia de controle e automaÃ§Ã£o industrial.

O objeto fÃ­sico modelado Ã© uma **EstaÃ§Ã£o de Reabastecimento de HidrogÃªnio (HRS - Hydrogen Refueling Station)** projetada para veÃ­culos elÃ©tricos movidos a cÃ©lula de combustÃ­vel (*Fuel Cell Electric Vehicles* - FCEV) operando sob pressÃµes ultra-elevadas (350 bar e 700 bar), em estrita conformidade com protocolos globais (SAE J2601, SAE J2799, ISO 19880-1, NFPA 2).

## Topografia de Arquivos e Artefatos do RepositÃ³rio
O repositÃ³rio apresenta uma hierarquia modular:
```
Estacao-de-Reabastecimento-de-Hidrogenio---SCADA-Core/
â”œâ”€â”€ .github/workflows/main.yml    # Pipeline CI/CD do GitHub Actions
â”œâ”€â”€ assets/                       # Recursos da IHM Web e Simulador
â”‚   â”œâ”€â”€ css/styles.css            # Folha de estilos Dark/Light Mode Glassmorphism
â”‚   â”œâ”€â”€ js/main.js                # Controlador principal da IHM e modais
â”‚   â”œâ”€â”€ js/diagram.js             # Mapeamento dinÃ¢mico de tooltips e DOM SVG
â”‚   â”œâ”€â”€ js/config.js              # VariÃ¡veis e constantes de processo
â”‚   â”œâ”€â”€ js/contributors.js        # IntegraÃ§Ã£o assÃ­ncrona com a API GitHub
â”‚   â”œâ”€â”€ diagrama.svg              # Fluxograma P&ID vetorial da estaÃ§Ã£o
â”‚   â””â”€â”€ simulador_grafos_h2.html  # LaboratÃ³rio didÃ¡tico de teoria dos grafos
â”œâ”€â”€ etapa-01-logica/              # MÃ³dulo 1: LÃ³gica Proposicional e Booleana
â”‚   â”œâ”€â”€ 00 - Insumos.md           # Mapeamento de matÃ©rias-primas e tags ISA-5.1
â”‚   â”œâ”€â”€ 02 a 10 (*.ipynb, *.md)   # Notebooks de Ã¡lgebra booleana e sistemas especialistas
â”‚   â””â”€â”€ proposicoes_logicas_H2.csv# Base tabular de proposiÃ§Ãµes e equaÃ§Ãµes de intertravamento
â”œâ”€â”€ etapa-02-grafos/              # MÃ³dulo 2: Teoria dos Grafos em TubulaÃ§Ãµes
â”‚   â”œâ”€â”€ 11 a 18 (*.ipynb, *.md)   # Notebooks de dÃ­grafos, matrizes, BFS/DFS, Dijkstra, PIG, AGV
â”‚   â””â”€â”€ grafo_tubulacoes.svg/.png # Diagrama da rede ponderada de dutos
â”œâ”€â”€ index.html                    # Interface principal do sistema supervisÃ³rio
â”œâ”€â”€ main.py                       # Script de manutenÃ§Ã£o e compilaÃ§Ã£o do README
â”œâ”€â”€ README.md                     # Documento consolidado do repositÃ³rio
â””â”€â”€ readme.template.md            # Template com marcadores para automaÃ§Ã£o
```
# MANUAL TÃ‰CNICO INTEGRAL DE ENGENHARIA E OPERAÃ‡ÃƒO
# SISTEMA SCADA CORE PARA ESTAÃ‡ÃƒO DE REABASTECIMENTO DE HIDROGÃŠNIO (HRS - FCEV)
**Universidade Federal de ItajubÃ¡ - UNIFEI**  
**Instituto de Engenharia de Sistemas e Tecnologias da InformaÃ§Ã£o (IESTI)**  
**Disciplina: ECAA08 - LÃ³gica Aplicada e Teoria dos Grafos para AutomaÃ§Ã£o**  
**Projeto de ReferÃªncia:** EstaÃ§Ã£o de Reabastecimento de HidrogÃªnio - SCADA Core  
**Equipe de Desenvolvimento Original:** JoÃ£o Pedro, Marcelo Candelaria, Luca Augusto, Leo Vargas  
**Documento de Engenharia:** RevisÃ£o TÃ©cnica Consolidada e Manual de Arquitetura  
**ClassificaÃ§Ã£o:** DocumentaÃ§Ã£o TÃ©cnica Industrial e Referencial DidÃ¡tico de Controle e AutomaÃ§Ã£o  

---

## SUMÃRIO GERAL

1. **CAPÃTULO 1: INTRODUÃ‡ÃƒO GERAL, CONTEXTO E VISÃƒO SISTÃŠMICA**
   - 1.1 O Papel do HidrogÃªnio Verde na TransiÃ§Ã£o EnergÃ©tica Global
   - 1.2 Tecnologias de Mobilidade ElÃ©trica a CÃ©lula de CombustÃ­vel (FCEV)
   - 1.3 Anatomia Funcional de uma EstaÃ§Ã£o de HidrogÃªnio (HRS)
   - 1.4 A Centralidade dos Sistemas SCADA e AutomaÃ§Ã£o Industrial CrÃ­tica
   - 1.5 ContextualizaÃ§Ã£o do Projeto SCADA Core UNIFEI
   - 1.6 Estrutura Organizacional do RepositÃ³rio e Artefatos do Projeto

2. **CAPÃTULO 2: NORMAS TÃ‰CNICAS E DIRETRIZES INTERNACIONAIS DE SEGURANÃ‡A**
   - 2.1 SAE J2601: Protocolo de Abastecimento para VeÃ­culos Leves de Alta PressÃ£o
   - 2.2 SAE J2799: Protocolo de ComunicaÃ§Ã£o Sem Fio e Infravermelho (IrDA)
   - 2.3 ISO 19880-1: Requisitos Globais de SeguranÃ§a e Desempenho para HRS
   - 2.4 NFPA 2: CÃ³digo TecnolÃ³gico de HidrogÃªnio e MitigaÃ§Ã£o de Riscos de ExplosÃ£o
   - 2.5 IEC 61508 e IEC 61511: SeguranÃ§a Funcional e Sistemas Instrumentados (SIS / SIL)
   - 2.6 ClassificaÃ§Ã£o de Ãreas Potencialmente Explosivas (ATEX / IECEx / NR-10 / NR-20)
   - 2.7 ASME B31.12: Engenharia de TubulaÃ§Ãµes para HidrogÃªnio Gasoso

3. **CAPÃTULO 3: TERMODINÃ‚MICA E ENGENHARIA DO PROCESSO DE COMPRESSÃƒO E TRANSFERÃŠNCIA**
   - 3.1 Propriedades FÃ­sico-QuÃ­micas CrÃ­ticas do GÃ¡s HidrogÃªnio ($H_2$)
   - 3.2 O Efeito Joule-Thomson e o FenÃ´meno de InversÃ£o TÃ©rmica
   - 3.3 Necessidade CrÃ­tica de PrÃ©-resfriamento CriogÃªnico (-40Â°C / Classe T40)
   - 3.4 Filosofia de Armazenamento em Cascata (Cascade Storage: LP, MP, HP)
   - 3.5 Taxa MÃ©dia de Rampa de PressÃ£o (APRR) e PrevenÃ§Ã£o de Fadiga TÃ©rmica
   - 3.6 DinÃ¢mica de Carregamento em Tanques Tipo IV (PolÃ­mero e Fibra de Carbono)

4. **CAPÃTULO 4: ARQUITETURA FÃSICA DA PLANTA E INSTRUMENTAÃ‡ÃƒO P&ID**
   - 4.1 Setor 100: Armazenamento e CompressÃ£o MultiestÃ¡gio
   - 4.2 Setor 200: Condicionamento TÃ©rmico e Unidade de Resfriamento (Chiller)
   - 4.3 Setor 300: Linha de DispensaÃ§Ã£o e Interface Veicular
   - 4.4 Filosofia Operacional das VÃ¡lvulas de Bloqueio RÃ¡pido e SeleÃ§Ã£o Direcional
   - 4.5 Mecanismos de AlÃ­vio MecÃ¢nico (PSV) e Parada de EmergÃªncia (ESD)

5. **CAPÃTULO 5: MAPA DE VARIÃVEIS, DICIONÃRIO DE TAGS E PROTOCOLOS DE COMUNICAÃ‡ÃƒO**
   - 5.1 PadronizaÃ§Ã£o ISA-5.1 para InstrumentaÃ§Ã£o e Malhas de Controle
   - 5.2 DicionÃ¡rio Exaustivo de Entradas AnalÃ³gicas (AI)
   - 5.3 DicionÃ¡rio Exaustivo de Entradas Discretas (DI)
   - 5.4 DicionÃ¡rio Exaustivo de SaÃ­das AnalÃ³gicas (AO)
   - 5.5 DicionÃ¡rio Exaustivo de SaÃ­das Discretas (DO)
   - 5.6 Mapeamento de Registradores Industriais (Modbus TCP e NÃ³s OPC UA)

6. **CAPÃTULO 6: ETAPA 01 - LÃ“GICA PROPOSICIONAL, BOOLEANA E INTERTRAVAMENTOS DE SEGURANÃ‡A**
   - 6.1 FormalizaÃ§Ã£o LÃ³gica de Estados FÃ­sicos e VariÃ¡veis Discretas
   - 6.2 Conectivos Fundamentais, Tabelas-Verdade e Permissivos Operacionais
   - 6.3 AnÃ¡lise AlgÃ©brica de Tautologias, ContradiÃ§Ãµes e ContingÃªncias
   - 6.4 Formas CanÃ´nicas: Forma Normal Disjuntiva (FND) e Conjuntiva (FNC)
   - 6.5 OtimizaÃ§Ã£o LÃ³gica: Mapas de Karnaugh e Algoritmo de Quine-McCluskey
   - 6.6 Predicados de Primeira Ordem e Quantificadores em Redes de Sensores
   - 6.7 Regras de InferÃªncia Dedutiva e ResoluÃ§Ã£o Proposicional
   - 6.8 Arquitetura de Intertravamento SIS e VotaÃ§Ã£o Redundante (1oo2, 2oo3)

7. **CAPÃTULO 7: SISTEMAS ESPECIALISTAS E MOTORES DE INFERÃŠNCIA DIAGNÃ“STICA**
   - 7.1 Fundamentos de Sistemas Baseados em Regras (Rule-Based Systems - RBS)
   - 7.2 Estrutura da Base de Conhecimento e Regras de ProduÃ§Ã£o IF-THEN
   - 7.3 Motor de InferÃªncia por Encadeamento para Frente (Forward Chaining)
   - 7.4 Motor de InferÃªncia por Encadeamento para TrÃ¡s (Backward Chaining)
   - 7.5 Matriz de CorrelaÃ§Ã£o Sintoma-Causa-AÃ§Ã£o para DiagnÃ³stico Preditivo
   - 7.6 ImplementaÃ§Ã£o Computacional e Algoritmos de DiagnÃ³stico em Tempo Real
   - 7.7 AvaliaÃ§Ã£o de EficÃ¡cia do MÃ³dulo de DiagnÃ³stico

8. **CAPÃTULO 8: ETAPA 02 - TEORIA DOS GRAFOS E MODELAGEM TOPOLÃ“GICA DE TUBULAÃ‡Ã•ES**
   - 8.1 Modelagem Estrutural por DÃ­grafos Ponderados $G = (V, E, W)$
   - 8.2 DefiniÃ§Ã£o TopolÃ³gica dos VÃ©rtices e Arestas da Planta H2
   - 8.3 RepresentaÃ§Ãµes Matriciais: AdjacÃªncia, IncidÃªncia e Custos HidrÃ¡ulicos
   - 8.4 Matriz Laplaciana e Propriedades Espectrais da Conectividade da Planta
   - 8.5 Tipologias de Passeios, Trilhas, Caminhos e Ciclos em Redes de Dutos
   - 8.6 AnÃ¡lise de RedundÃ¢ncia e Lema do Aperto de MÃ£os Dirigido

9. **CAPÃTULO 9: ALGORITMOS DE BUSCA, CAMINHO MÃNIMO E ROTEAMENTO DINÃ‚MICO**
   - 9.1 Busca em Largura (BFS): PropagaÃ§Ã£o de PressÃ£o e Varredura de Alcance
   - 9.2 Busca em Profundidade (DFS): Rastreamento de Linhas e DetecÃ§Ã£o de Ciclos
   - 9.3 Algoritmo de Dijkstra para OtimizaÃ§Ã£o de Rota de Abastecimento
   - 9.4 Arestas Pontes (*Bridges*) e VÃ©rtices de ArticulaÃ§Ã£o CrÃ­ticos
   - 9.5 SimulaÃ§Ã£o de Vazamentos e Algoritmo de Desvio AutomÃ¡tico em Tempo Real
   - 9.6 Intertravamento de SeguranÃ§a via Grafo AcÃ­clico Dirigido (DAG)

10. **CAPÃTULO 10: OTIMIZAÃ‡ÃƒO DE INSPEÃ‡ÃƒO INDUSTRIAL E LOGÃSTICA DE INSUMOS**
    - 10.1 Problemas Eulerianos e InspeÃ§Ã£o Integral por RobÃ´ PIG UltrassÃ´nico
    - 10.2 Algoritmos de Hierholzer e Fleury para TrajetÃ³rias Eulerianas
    - 10.3 Problemas Hamiltonianos e Roteamento de VeÃ­culos AutÃ´nomos (AGV)
    - 10.4 ResoluÃ§Ã£o do Problema do Caixeiro Viajante (TSP) com HeurÃ­stica 2-Opt
    - 10.5 Grafos de Fluxo MÃ¡ximo e Cadeia LogÃ­stica de Transporte de H2 (Tube Trailers)

11. **CAPÃTULO 11: ARQUITETURA DE SOFTWARE DO SCADA CORE E SIMULADOR WEB**
    - 11.1 Arquitetura Front-End: HTML5 SemÃ¢ntico, CSS3 e Design Responsivo
    - 11.2 IntegraÃ§Ã£o DinÃ¢mica com Diagrama Vetorial P&ID em Formato SVG
    - 11.3 Controlador de Estados JavaScript e ManipulaÃ§Ã£o do DOM em Tempo Real
    - 11.4 Simulador DidÃ¡tico de Grafos e Painel Interativo de Tomada de DecisÃ£o
    - 11.5 AutomaÃ§Ã£o de Builds, CI/CD e IntegraÃ§Ã£o ContÃ­nua com GitHub Actions

12. **CAPÃTULO 12: ANÃLISE DE RISCOS DE PROCESSO, HAZOP E MATRIZ FMEA**
    - 12.1 Metodologia do Estudo de Perigos e Operabilidade (HAZOP)
    - 12.2 Planilhas Detalhadas de AnÃ¡lise HAZOP por NÃ³s de Processo
    - 12.3 Matriz de Modos de Falha e Efeitos (FMEA) e PriorizaÃ§Ã£o de Risco (RPN)
    - 12.4 Filosofia de GestÃ£o de Alarmes conforme a Norma ANSI/ISA-18.2
    - 12.5 Procedimentos Operacionais Padronizados de ContingÃªncia e EmergÃªncia

13. **CAPÃTULO 13: GUIA PRÃTICO DE IMPLANTAÃ‡ÃƒO, EXECUÃ‡ÃƒO E TESTES**
    - 13.1 Requisitos de Infraestrutura e DependÃªncias de Software
    - 13.2 Procedimentos de InicializaÃ§Ã£o do Servidor Local e Interface Web
    - 13.3 ExecuÃ§Ã£o e ValidaÃ§Ã£o dos Notebooks DidÃ¡ticos Jupyter
    - 13.4 Bateria de Testes Funcionais e Casos Extremos (*Corner Cases*)
    - 13.5 Proposta de Roadmap e ExtensÃµes para Ambiente Industrial Real

14. **CAPÃTULO 14: CONSIDERAÃ‡Ã•ES FINAIS, GLOSSÃRIO E REFERÃŠNCIAS BIBLIOGRÃFICAS**
    - 14.1 ConclusÃµes TÃ©cnicas sobre a IntegraÃ§Ã£o LÃ³gica-Grafos-SCADA
    - 14.2 GlossÃ¡rio Exaustivo de Termos TÃ©cnicos e Siglas de Engenharia
    - 14.3 ReferÃªncias BibliogrÃ¡ficas Normativas e AcadÃªmicas

---

# CAPÃTULO 1: INTRODUÃ‡ÃƒO GERAL, CONTEXTO E VISÃƒO SISTÃŠMICA

## 1.1 O Papel do HidrogÃªnio Verde na TransiÃ§Ã£o EnergÃ©tica Global

A transiÃ§Ã£o energÃ©tica global em direÃ§Ã£o a uma matriz de baixo carbono estabelece o hidrogÃªnio verde ($H_2$) como um dos pilares mais promissores para a descarbonizaÃ§Ã£o profunda da economia. Setores industriais de difÃ­cil abatimento (*hard-to-abate sectors*), como siderurgia, indÃºstria quÃ­mica, transporte rodoviÃ¡rio pesado de carga, transporte marÃ­timo e aviaÃ§Ã£o, encontram no hidrogÃªnio uma densidade energÃ©tica por unidade de massa sem precedentes (aproximadamente $120\text{ MJ/kg}$ a $142\text{ MJ/kg}$ em poder calorÃ­fico inferior, quase trÃªs vezes superior Ã  da gasolina ou do Ã³leo diesel).

Diferentemente dos combustÃ­veis fÃ³sseis tradicionais, a oxidaÃ§Ã£o eletroquÃ­mica do hidrogÃªnio em uma cÃ©lula de combustÃ­vel (*Fuel Cell*) produz exclusivamente vapor de Ã¡gua de alta pureza e calor Ãºtil como subprodutos operacionais, eliminando em 100% a emissÃ£o direta de gases de efeito estufa (GEE), tais como diÃ³xido de carbono ($CO_2$), metano ($CH_4$) e Ã³xidos nitrosos ($N_2O$), alÃ©m de erradicar poluentes locais severos como Ã³xidos de enxofre ($SO_x$), Ã³xidos de nitrogÃªnio ($NO_x$) e material particulado inalÃ¡vel ($MP_{2.5}$).

A cadeia de valor do hidrogÃªnio verde baseia-se na eletrÃ³lise da Ã¡gua alimentada por fontes renovÃ¡veis de eletricidade, notadamente energia solar fotovoltaica e energia eÃ³lica. Nesse ecossistema, o hidrogÃªnio atua como um vetor de armazenamento energÃ©tico sazonal de grande escala, capaz de mitigar a intermitÃªncia intrÃ­nseca das fontes renovÃ¡veis e fornecer estabilidade Ã  rede elÃ©trica nacional (*grid balancing*). No entanto, o aproveitamento pleno desse vetor na mobilidade veicular exige uma infraestrutura de distribuiÃ§Ã£o e abastecimento de alta sofisticaÃ§Ã£o tecnolÃ³gica.

```
       [ Fonte RenovÃ¡vel ] ---> [ Eletrolisador PEM ] ---> [ EstaÃ§Ã£o de CompressÃ£o ]
      (Solar / EÃ³lica / PCH)         (Ãgua -> H2 + O2)         (EstÃ¡gios LP -> MP -> HP)
                                                                       |
                                                                       v
       [ VeÃ­culo FCEV ] <--- [ Bico Dispensador ] <--- [ Chiller T40 ] <--- [ Banco de Armazenamento ]
        (Tanque 700 bar)     (SAE J2601 / -40Â°C)      (Troca TÃ©rmica)       (Cascata 350/700/1000 bar)
```

## 1.2 Tecnologias de Mobilidade ElÃ©trica a CÃ©lula de CombustÃ­vel (FCEV)

Os VeÃ­culos ElÃ©tricos a CÃ©lula de CombustÃ­vel (*Fuel Cell Electric Vehicles* - FCEV) combinam o dinamismo e o alto rendimento dos motores elÃ©tricos com a conveniÃªncia do rÃ¡pido reabastecimento tÃ­pico dos veÃ­culos convencionais a combustÃ£o interna. Enquanto veÃ­culos elÃ©tricos puramente a bateria (*Battery Electric Vehicles* - BEV) demandam de 30 a 90 minutos em estaÃ§Ãµes de recarga rÃ¡pida de corrente contÃ­nua (DC Fast Charging) para restabelecer cerca de 80% de sua autonomia â€” impondo restriÃ§Ãµes severas a frotas comerciais, Ã´nibus urbanos e caminhÃµes pesados de longa distÃ¢ncia â€”, um veÃ­culo FCEV moderno pode ser completamente reabastecido em uma janela estrita de 3 a 5 minutos, recuperando autonomias superiores a 650 quilÃ´metros.

O coraÃ§Ã£o propulsor do veÃ­culo FCEV Ã© a pilha de cÃ©lulas de combustÃ­vel com membrana de troca de prÃ³tons (*Proton Exchange Membrane Fuel Cell* - PEMFC). No anodo da cÃ©lula, molÃ©culas de hidrogÃªnio gasoso sÃ£o dissociadas cataliticamente sobre nanopartÃ­culas de platina em prÃ³tons ($H^+$) e elÃ©trons ($e^-$):

$$H_2 \rightarrow 2H^+ + 2e^- \quad (E^\circ = 0{,}00\text{ V})$$

Os prÃ³tons migram atravÃ©s da membrana condutora eletrolÃ­tica polimÃ©rica seletiva atÃ© o catodo, enquanto os elÃ©trons livres sÃ£o forÃ§ados a circular por um circuito externo, gerando a corrente contÃ­nua necessÃ¡ria para alimentar o inversor de traÃ§Ã£o e o motor elÃ©trico. No catodo, o oxigÃªnio atmosfÃ©rico absorvido Ã© reduzido cataliticamente, combinando-se com os prÃ³tons e elÃ©trons para formar Ã¡gua lÃ­quida e liberar energia tÃ©rmica:

$$\frac{1}{2}O_2 + 2H^+ + 2e^- \rightarrow H_2O \quad (E^\circ = +1{,}23\text{ V})$$

$$\text{ReaÃ§Ã£o Global:} \quad H_2 + \frac{1}{2}O_2 \rightarrow H_2O \quad (\Delta H = -285{,}8\text{ kJ/mol})$$

Para que esse ciclo eletroquÃ­mico ocorra com mÃ¡xima densidade de potÃªncia embarcada, o hidrogÃªnio deve ser armazenado no veÃ­culo sob pressÃµes extremamente elevadas, prioritariamente no patamar nominal de 700 bar (aproximadamente $10.150\text{ psi}$ ou $70\text{ MPa}$) para automÃ³veis leves e utilitÃ¡rios, ou 350 bar ($5.075\text{ psi}$ ou $35\text{ MPa}$) para Ã´nibus, trens e veÃ­culos comerciais pesados.

## 1.3 Anatomia Funcional de uma EstaÃ§Ã£o de HidrogÃªnio (HRS)

Uma EstaÃ§Ã£o de Reabastecimento de HidrogÃªnio (*Hydrogen Refueling Station* - HRS) Ã© uma instalaÃ§Ã£o industrial de altÃ­ssima precisÃ£o e complexidade mecÃ¢nica, termodinÃ¢mica e elÃ©trica. Uma estaÃ§Ã£o tÃ­pica Ã© estruturada em cinco subsistemas integrados essenciais:

1. **Subsistema de RecepÃ§Ã£o e Suprimento:** Pode ser composto por uma unidade de produÃ§Ã£o local (*on-site*), como um eletrolisador PEM comercial de alta pressÃ£o acoplado a desumidificadores e purificadores catalÃ­ticos (DeOxo), ou por uma linha de descarregamento de carretas semirreboque de cilindros compÃ³sitos (*tube trailers*), que entregam gÃ¡s comprimido entre 200 bar e 300 bar proveniente de centros de produÃ§Ã£o centralizados.
2. **Subsistema de CompressÃ£o MecÃ¢nica MultiestÃ¡gio:** Como a pressÃ£o de suprimento Ã© significativamente inferior Ã  pressÃ£o final exigida para a dispensaÃ§Ã£o veicular, compressores industriais de deslocamento positivo (compressores de pistÃ£o alternativo nÃ£o lubrificado, compressores de diafragma metÃ¡lico selado ou compressores eletroquÃ­micos e hidrÃ¡ulicos de pistÃ£o lÃ­quido) elevam o gÃ¡s sequencialmente atÃ© patamares de 450 bar, 750 bar e 1000 bar.
3. **Subsistema de Armazenamento EstacionÃ¡rio em Cascata:** Composto por bancos de cilindros de aÃ§o forjado de alta tenacidade ou vasos compÃ³sitos de parede espessa com liner polimÃ©rico (Tipos I, II, III e IV), segmentados em mÃºltiplos nÃ­veis de pressÃ£o:
   - Banco de Baixa PressÃ£o (LP - Low Pressure): $350\text{ a }400\text{ bar}$.
   - Banco de MÃ©dia PressÃ£o (MP - Medium Pressure): $650\text{ a }700\text{ bar}$.
   - Banco de Alta PressÃ£o (HP - High Pressure): $900\text{ a }1000\text{ bar}$.
4. **Subsistema de Condicionamento TÃ©rmico e Resfriamento CriogÃªnico (Chiller):** Durante a compressÃ£o rÃ¡pida no tanque veicular, o hidrogÃªnio sofre um aquecimento volumÃ©trico drÃ¡stico devido Ã  compressÃ£o adiabÃ¡tica e ao coeficiente Joule-Thomson anÃ´malo do gÃ¡s. Para evitar danos irreparÃ¡veis aos materiais compÃ³sitos do tanque do veÃ­culo, a estaÃ§Ã£o conta com trocadores de calor criogÃªnicos compactos (tÃ­picos trocadores tipo *diffusion bonded* de microcanais) alimentados por chillers mecÃ¢nicos com fluidos secundÃ¡rios especiais, resfriando o hidrogÃªnio a temperaturas de atÃ© $-40^\circ\text{C}$ antes da sua injeÃ§Ã£o no veÃ­culo.
5. **Subsistema de DispensaÃ§Ã£o Veicular (Dispenser):** Interface direta com o usuÃ¡rio e o automÃ³vel, composta por mangueiras flexÃ­veis reforÃ§adas com fios de aramida e malha de aÃ§o inoxidÃ¡vel, medidores mÃ¡ssicos de vazÃ£o por efeito Coriolis com certificaÃ§Ã£o de custÃ³dia, bicos de acoplamento hermÃ©tico (*nozzles*), vÃ¡lvulas breakaway contra arrasto acidental do veÃ­culo e mÃ³dulos Ã³pticos de telemetria infravermelha bidirecional para monitoramento em tempo real dos parÃ¢metros fÃ­sicos do tanque embarcado.

## 1.4 A Centralidade dos Sistemas SCADA e AutomaÃ§Ã£o Industrial CrÃ­tica

Dadas as pressÃµes operacionais extremas (que ultrapassam 1000 vezes a pressÃ£o atmosfÃ©rica ao nÃ­vel do mar) e a ampla faixa de inflamabilidade do hidrogÃªnio no ar (entre 4% e 75% em volume), uma estaÃ§Ã£o HRS nÃ£o pode depender de intervenÃ§Ãµes manuais para a gestÃ£o de seus processos rotineiros ou de contingÃªncia. A operaÃ§Ã£o segura, eficiente e ininterrupta Ã© governada exclusivamente por uma arquitetura hierÃ¡rquica de controle e automaÃ§Ã£o composta por:

* **Controladores LÃ³gicos ProgramÃ¡veis de SeguranÃ§a (Safety PLCs):** ResponsÃ¡veis pela execuÃ§Ã£o determinÃ­stica de malhas de intertravamento de alta prioridade com tempos de ciclo de varredura inferiores a 20 milissegundos, com certificaÃ§Ãµes SIL-2 e SIL-3 segundo as normas IEC 61508 / IEC 61511.
* **Sistema de SupervisÃ£o, Controle e AquisiÃ§Ã£o de Dados (SCADA):** ResponsÃ¡vel por consolidar variÃ¡veis de processo analÃ³gicas e discretas provenientes de centenas de nÃ³s de sensoriamento, fornecer interface homem-mÃ¡quina (IHM) ergonÃ´mica e contextualizada aos operadores, registrar sÃ©ries temporais de alta resoluÃ§Ã£o para auditoria forense e auditoria metrolÃ³gica, executar motores de regras diagnÃ³sticas em tempo real e orquestrar algoritmos de roteamento dinÃ¢mico de fluxo.
* **Sistema Instrumentado de SeguranÃ§a (SIS) e Parada de EmergÃªncia (ESD):** Malhas hardwired independentes dotadas de vÃ¡lvulas solenoide Ã  prova de falha mecÃ¢nica (fail-safe close), detectores de chama ultravioleta/infravermelho (UV/IR), sensores catalÃ­ticos e eletroquÃ­micos de gÃ¡s hidrogÃªnio distribuÃ­dos perimetralmente e botÃµes fÃ­sicos de soco de interrupÃ§Ã£o instantÃ¢nea de energia.

## 1.5 ContextualizaÃ§Ã£o do Projeto SCADA Core UNIFEI

O projeto de cÃ³digo aberto **Estacao-de-Reabastecimento-de-Hidrogenio---SCADA-Core**, concebido e desenvolvido no Ã¢mbito do Instituto de Engenharia de Sistemas e Tecnologias da InformaÃ§Ã£o da Universidade Federal de ItajubÃ¡ (UNIFEI), surge com o propÃ³sito de suprir uma carÃªncia crÃ­tica na formaÃ§Ã£o tÃ©cnica e na engenharia nacional: a uniÃ£o rigorosa entre **fundamentos matemÃ¡ticos discretos formais** (lÃ³gica matemÃ¡tica, Ã¡lgebra booleana e teoria dos grafos) e a **engenharia prÃ¡tica de controle e supervisÃ£o industrial** aplicada Ã  cadeia do hidrogÃªnio verde.

Tradicionalmente, a engenharia de automaÃ§Ã£o aborda o desenvolvimento de sistemas supervisÃ³rios a partir de ferramentas empÃ­ricas ou proprietÃ¡rias comerciais, muitas vezes divorciadas do formalismo matemÃ¡tico que garante a prova de corretude das rotinas lÃ³gicas e a otimizaÃ§Ã£o de rotas em malhas complexas de tubulaÃ§Ãµes. O projeto **SCADA Core** inova ao estruturar o desenvolvimento da estaÃ§Ã£o HRS em duas etapas metodolÃ³gicas complementares:

1. **Etapa 01 - LÃ³gica Proposicional e DiagnÃ³stico:** Modela o universo de variÃ¡veis de campo, formaliza os permissivos operacionais e as condiÃ§Ãµes de intertravamento por meio de proposiÃ§Ãµes booleanas, elimina redundÃ¢ncias e contradiÃ§Ãµes por meio de tÃ©cnicas de minimizaÃ§Ã£o algÃ©brica e estabelece um motor de inferÃªncia baseado em regras com encadeamento progressivo e regressivo (*Forward and Backward Chaining*) para diagnÃ³stico precoce de anomalias operacionais.
2. **Etapa 02 - Teoria dos Grafos Aplicada a Redes de Dutos:** Abstrai a planta de tubulaÃ§Ãµes, vÃ¡lvulas, compressores, trocadores e dispensadores como um dÃ­grafo ponderado e dirigido $G = (V, E, W)$, permitindo que rotinas computacionais resolvam problemas clÃ¡ssicos da computaÃ§Ã£o aplicados Ã  seguranÃ§a industrial:
   - DeterminaÃ§Ã£o determinÃ­stica da rota de menor atrito ou menor distÃ¢ncia fÃ­sica via algoritmo de Dijkstra.
   - IdentificaÃ§Ã£o imediata de arestas pontes (*bridges*) cuja integridade afeta a continuidade de fornecimento da estaÃ§Ã£o inteira.
   - Algoritmos de busca em largura (BFS) e profundidade (DFS) para varredura de contaminaÃ§Ã£o e isolamento de trechos em vazamento.
   - CÃ¡lculo de trajetÃ³rias eulerianas para inspeÃ§Ã£o contÃ­nua e nÃ£o-destrutiva de dutos por robÃ´s raspadores instrumentados (*Smart PIGs*).
   - Roteamento hamiltoniano (TSP) para patrulhamento perimetral de veÃ­culos autÃ´nomos industriais (AGV) de monitoramento de vazamentos.

AlÃ©m dos mÃ³dulos teÃ³ricos, o projeto fornece uma plataforma interativa completa de simulaÃ§Ã£o visual baseada na web, onde operadores, pesquisadores e estudantes podem inspecionar o P&ID da estaÃ§Ã£o em SVG vetorial interativo, disparar cenÃ¡rios de falha, ativar desvios automÃ¡ticos de fluxo e acompanhar o ciclo de vida completo de um abastecimento automotivo segundo os preceitos rigorosos da norma internacional SAE J2601.

## 1.6 Estrutura Organizacional do RepositÃ³rio e Artefatos do Projeto

A organizaÃ§Ã£o de diretÃ³rios e arquivos do repositÃ³rio reflete uma arquitetura pedagÃ³gica e modular rigorosamente planejada:

```
Estacao-de-Reabastecimento-de-Hidrogenio---SCADA-Core/
â”œâ”€â”€ .github/
â”‚   â””â”€â”€ workflows/
â”‚       â””â”€â”€ main.yml               # Pipeline de automaÃ§Ã£o CI/CD do GitHub Actions
â”œâ”€â”€ assets/
â”‚   â”œâ”€â”€ css/
â”‚   â”‚   â””â”€â”€ styles.css             # Folha de estilos unificada (Dark/Light Mode, Glassmorphism)
â”‚   â”œâ”€â”€ doc/                       # DocumentaÃ§Ã£o legada e espelhamento de scripts
â”‚   â”œâ”€â”€ images/                    # Diagramas P&ID, animaÃ§Ãµes GIF de hidrogÃªnio e iconografia
â”‚   â”œâ”€â”€ js/
â”‚   â”‚   â”œâ”€â”€ config.js              # VariÃ¡veis de configuraÃ§Ã£o global e constantes operacionais
â”‚   â”‚   â”œâ”€â”€ contributors.js        # MÃ³dulo de integraÃ§Ã£o com a API pÃºblica do GitHub
â”‚   â”‚   â”œâ”€â”€ diagram.js             # MÃ³dulo de vinculaÃ§Ã£o dinÃ¢mica entre nÃ³s DOM e elementos SVG
â”‚   â”‚   â””â”€â”€ main.js                # Controlador principal da IHM, temas, modais e telemetria
â”‚   â”œâ”€â”€ simulator/                 # Espelho didÃ¡tico do ambiente de simulaÃ§Ã£o
â”‚   â”œâ”€â”€ slide/                     # ApresentaÃ§Ãµes tÃ©cnicas em PDF e HTML responsivo
â”‚   â”œâ”€â”€ diagrama.svg               # Diagrama P&ID vetorial da estaÃ§Ã£o de hidrogÃªnio
â”‚   â””â”€â”€ simulador_grafos_h2.html   # LaboratÃ³rio didÃ¡tico avanÃ§ado de teoria dos grafos e jogos de decisÃ£o
â”œâ”€â”€ etapa-01-logica/               # Aulas, notebooks e especificaÃ§Ãµes do MÃ³dulo de LÃ³gica Formal
â”‚   â”œâ”€â”€ 00 - Insumos.md            # Mapeamento fundamental de matÃ©rias-primas e insumos lÃ³gicos
â”‚   â”œâ”€â”€ 02 a 10 (*.ipynb, *.md)    # Notebooks de Ã¡lgebra booleana, formas normais e motor de inferÃªncia
â”‚   â””â”€â”€ proposicoes_logicas_H2.csv # Base tabular de tags, proposiÃ§Ãµes e equaÃ§Ãµes booleanas
â”œâ”€â”€ etapa-02-grafos/               # Aulas, notebooks e especificaÃ§Ãµes do MÃ³dulo de Grafos
â”‚   â”œâ”€â”€ 11 a 18 (*.ipynb, *.md)    # Notebooks de modelagem topolÃ³gica, matrizes, BFS/DFS, Dijkstra, PIG, AGV
â”‚   â””â”€â”€ grafo_tubulacoes.svg/.png  # RenderizaÃ§Ã£o grÃ¡fica da rede de tubulaÃ§Ãµes ponderada
â”œâ”€â”€ index.html                     # Interface principal da IHM Web SCADA
â”œâ”€â”€ main.py                        # Script Python de manutenÃ§Ã£o e geraÃ§Ã£o dinÃ¢mica do README
â”œâ”€â”€ README.md                      # Documento principal de introduÃ§Ã£o do repositÃ³rio
â””â”€â”€ readme.template.md             # Template dinÃ¢mico processado pelas GitHub Actions
```

---

# CAPÃTULO 2: NORMAS TÃ‰CNICAS E DIRETRIZES INTERNACIONAIS DE SEGURANÃ‡A

A engenharia de estaÃ§Ãµes de reabastecimento de hidrogÃªnio Ã© uma das disciplinas mais rigorosamente regulamentadas do mundo industrial contemporÃ¢neo. A conjunÃ§Ã£o de molÃ©culas diminutas de alta difusividade com pressÃµes operacionais da ordem de 700 a 1000 bar exige a observÃ¢ncia intransigente de um conjunto de cÃ³digos tÃ©cnicos consolidados por comitÃªs normativos globais. Esta seÃ§Ã£o detalha as sete principais normas que norteiam o projeto do SCADA Core.

## 2.1 SAE J2601: Protocolo de Abastecimento para VeÃ­culos Leves de Alta PressÃ£o

Publicada pela *Society of Automotive Engineers* (SAE), a norma **SAE J2601** estabelece os limites operacionais de seguranÃ§a e os algoritmos padronizados de controle de processo para o abastecimento de veÃ­culos terrestres leves movidos a hidrogÃªnio comprimido. O protocolo visa garantir que, independentemente do fabricante do veÃ­culo ou da estaÃ§Ã£o, o abastecimento atinja o estado de carga alvo (*State of Charge* - SOC entre 95% e 100%) sem nunca exceder trÃªs barreiras termomecÃ¢nicas crÃ­ticas de integridade estrutural:

1. **Temperatura MÃ¡xima no Liner do Tanque Veicular:** $T_{max} = +85^\circ\text{C}$ (limite tÃ©rmico estrito imposto pelas resinas epÃ³xi e fibras de carbono estruturais do reservatÃ³rio Tipo IV).
2. **PressÃ£o MÃ¡xima de OperaÃ§Ã£o da EstaÃ§Ã£o (Overpressure Limit):** $P_{max} = 1{,}25 \times P_{nominal}$. Para sistemas de 700 bar nominais (H70), a pressÃ£o de pico jamais poderÃ¡ ultrapassar $87{,}5\text{ MPa}$ ($875\text{ bar}$) sob qualquer condiÃ§Ã£o de transiente hidrÃ¡ulico.
3. **Densidade MÃ¡xima de HidrogÃªnio:** $\rho_{max} = 40{,}2\text{ g/L}$ para tanques de 700 bar a $15^\circ\text{C}$, impedindo sobreenchimento volumÃ©trico de massa.

O protocolo SAE J2601 define tabelas de controle tridimensionais que relacionam a **temperatura ambiente inicial** ($T_{amb}$), a **pressÃ£o inicial residual do veÃ­culo** ($P_0$) e a **capacidade volumÃ©trica do reservatÃ³rio** (agrupada em classes de volume) para ditar a **Taxa MÃ©dia de Rampa de PressÃ£o** (*Average Pressure Ramp Rate* - APRR, expressa em $\text{MPa/min}$). As estaÃ§Ãµes sÃ£o categorizadas de acordo com sua capacidade de prÃ©-resfriamento:

| Categoria SAE J2601 | Faixa de Temperatura do GÃ¡s no Bico ($T_0$) | Tempo TÃ­pico de Abastecimento (Tanque 5 kg) | AplicaÃ§Ã£o PrimÃ¡ria |
| :--- | :--- | :--- | :--- |
| **Classe T40 (Adotada no Projeto)** | **$-40^\circ\text{C} \leq T_0 \leq -33^\circ\text{C}$** | **$3 \text{ a } 5 \text{ minutos}$** | **AutomÃ³veis de Passeio H70 (700 bar)** |
| **Classe T30** | $-30^\circ\text{C} \leq T_0 \leq -23^\circ\text{C}$ | $5 \text{ a } 8 \text{ minutos}$ | EstaÃ§Ãµes compactas ou frotas cativas |
| **Classe T20** | $-20^\circ\text{C} \leq T_0 \leq -13^\circ\text{C}$ | $8 \text{ a } 12 \text{ minutos}$ | VeÃ­culos utilitÃ¡rios leves H35 (350 bar) |
| **NÃ£o-resfriado (Non-cooled)** | $T_0 \approx T_{amb}$ | $> 30 \text{ minutos}$ | Abastecimento lento de Ã´nibus e trens |

O SCADA Core da UNIFEI modela expressamente a categoria **T40**, garantindo que a vÃ¡lvula moduladora de rampa sÃ³ receba autorizaÃ§Ã£o lÃ³gica de abertura se o trocador criogÃªnico HEX-201 mantiver a temperatura do fluido comprovadamente abaixo de $-33^\circ\text{C}$.

## 2.2 SAE J2799: Protocolo de ComunicaÃ§Ã£o Sem Fio e Infravermelho (IrDA)

Enquanto a SAE J2601 permite abastecimentos denominados "nÃ£o-comunicantes" baseados em estimativas conservadoras de pior caso nas tabelas padronizadas, o abastecimento mais eficiente, rÃ¡pido e seguro Ã© o "comunicante", regulado pela norma **SAE J2799**.

A comunicaÃ§Ã£o ocorre atravÃ©s de um link Ã³ptico por **radiaÃ§Ã£o infravermelha bidirecional (IrDA)** integrado fisicamente Ã  carcaÃ§a do bico de abastecimento da estaÃ§Ã£o e ao anel receptÃ¡culo do veÃ­culo. Os transmissores Ã³pticos utilizam modulaÃ§Ã£o em amplitude de pulsos estreitos para evitar interferÃªncias de iluminaÃ§Ã£o solar direta. Os principais parÃ¢metros transmitidos pelo veÃ­culo ao SCADA em pacotes cÃ­clicos a cada 100 milissegundos incluem:

* CÃ³digo de identificaÃ§Ã£o e classe de volume do tanque veicular.
* PressÃ£o interna instantÃ¢nea medida pelo transmissor dedicado do cilindro ($P_{veic}$).
* Temperatura interna instantÃ¢nea do gÃ¡s medida por termopar imerso no interior do reservatÃ³rio ($T_{veic}$).
* Estado de Carga calculado (*State of Charge* - $SOC$ instantÃ¢neo em percentual).
* Flag de solicitaÃ§Ã£o de parada normal de enchimento (Target Pressure Reached).
* Flag de solicitaÃ§Ã£o de interrupÃ§Ã£o imediata por anomalia de bordo (Vehicle Abort Bit).

No projeto SCADA Core, a variÃ¡vel binÃ¡ria $c_{3,1}$ (Sensor COM-301) representa a confirmaÃ§Ã£o do handshake lÃ³gico SAE J2799. Caso o feixe infravermelho sofra atenuaÃ§Ã£o ou perda de sinal por mais de 500 ms durante a rampa ativa de alta pressÃ£o, o sistema transita automaticamente para modo degradado seguro ou aciona a parada controlada.

## 2.3 ISO 19880-1: Requisitos Globais de SeguranÃ§a e Desempenho para HRS

A norma internacional **ISO 19880-1** (*Gaseous hydrogen â€” Fuelling stations â€” Part 1: General requirements*) atua como a espinha dorsal de engenharia para o ciclo de vida completo de uma estaÃ§Ã£o de hidrogÃªnio, abrangendo projeto, fabricaÃ§Ã£o, montagem, comissionamento, operaÃ§Ã£o e manutenÃ§Ã£o preventiva. A norma enfatiza:

* **ContenÃ§Ã£o Segura e Hermeticidade:** ExigÃªncia de conexÃµes de tubulaÃ§Ã£o do tipo flangeadas com anel metÃ¡lico cÃ´nico ou uniÃµes de alta pressÃ£o tipo cone-and-thread (Buchas cÃ´nicas sob compressÃ£o mecÃ¢nica), proibindo vedaÃ§Ãµes puramente baseadas em roscas NPT convencionais para pressÃµes acima de 100 bar.
* **PrevenÃ§Ã£o de ContaminaÃ§Ã£o e Grau de Pureza:** O hidrogÃªnio dispensado deve satisfazer os teores mÃ¡ximos de impurezas estipulados pela norma ISO 14687 Grau D (teor mÃ­nimo de hidrogÃªnio de 99,97%, com concentraÃ§Ãµes mÃ¡ximas de monÃ³xido de carbono $CO \leq 0{,}2\text{ ppm}$, Ã¡gua $H_2O \leq 5\text{ ppm}$, hidrocarbonetos totais $\leq 2\text{ ppm}$ e compostos sulfurados $\leq 0{,}004\text{ ppm}$ para prevenir envenenamento irreversÃ­vel do catalisador de platina da cÃ©lula a combustÃ­vel).
* **MitigaÃ§Ã£o de Impacto AcÃºstico:** Durante despressurizaÃ§Ãµes controladas e disparos de vÃ¡lvulas de alÃ­vio PSV, sistemas silenciadores e difusores de jato devem garantir que os nÃ­veis de ruÃ­do nÃ£o ultrapassem os limites ocupacionais e ambientais da Ã¡rea de circunvizinhanÃ§a.

## 2.4 NFPA 2: CÃ³digo TecnolÃ³gico de HidrogÃªnio e MitigaÃ§Ã£o de Riscos de ExplosÃ£o

Elaborado pela *National Fire Protection Association* dos Estados Unidos, o cÃ³digo **NFPA 2** (*Hydrogen Technologies Code*) Ã© a referÃªncia tÃ©cnica mais detalhada do mundo para proteÃ§Ã£o contra incÃªndios e explosÃµes em infraestruturas industriais que manuseiam $H_2$. Os pontos crÃ­ticos normativos implementados na lÃ³gica do SCADA Core incluem:

* **DistÃ¢ncias de SeparaÃ§Ã£o de SeguranÃ§a (Setback Distances):** DelimitaÃ§Ã£o espacial rigorosa entre os bancos de armazenamento de alta pressÃ£o, os compressores, os limites da propriedade e as Ã¡reas pÃºblicas de livre acesso a pedestres.
* **Sistemas de VentilaÃ§Ã£o ForÃ§ada e ExaustÃ£o Natural:** Ambientes confinados de compressores e chillers exigem um mÃ­nimo de 12 a 15 trocas de ar por hora em regime contÃ­nuo, com exaustÃ£o instalada no ponto mais alto das coberturas estruturais, aproveitando a flutuabilidade extrema do hidrogÃªnio (cerca de 14 vezes mais leve que o ar).
* **DetecÃ§Ã£o Integrada de GÃ¡s e Fogo:** InstalaÃ§Ã£o de detectores pontuais catalÃ­ticos e eletroquÃ­micos (sensores AT-101, AT-102, AT-103 e AT-301) ajustados para dois patamares de resposta:
  - **Alarme Baixo (Alerta):** Disparo ao atingir **20% do Limite Inferior de Inflamabilidade** ($20\%\text{ LFL} \approx 0{,}8\%\text{ de } H_2 \text{ em volume}$). Dispara ventilaÃ§Ã£o forÃ§ada em rotaÃ§Ã£o mÃ¡xima e alerta luminoso amarelo no SCADA.
  - **Alarme Alto (Trip CrÃ­tico):** Disparo ao atingir **40% do Limite Inferior de Inflamabilidade** ($40\%\text{ LFL} \approx 1{,}6\%\text{ de } H_2 \text{ em volume}$). Provoca corte elÃ©trico total instantÃ¢neo, desenergizaÃ§Ã£o dos motores, fechamento imediato de todas as vÃ¡lvulas de corte rÃ¡pido (*fail-close*) e acionamento de sirene geral de evacuaÃ§Ã£o.

## 2.5 IEC 61508 e IEC 61511: SeguranÃ§a Funcional e Sistemas Instrumentados (SIS / SIL)

A seguranÃ§a funcional de processos industriais contÃ­nuos Ã© governada pelas normas internacionais **IEC 61508** (fabricantes de equipamentos eletroeletrÃ´nicos programÃ¡veis) e **IEC 61511** (integradores e usuÃ¡rios finais da indÃºstria de processos). No contexto de uma estaÃ§Ã£o HRS, as malhas de intertravamento de seguranÃ§a crÃ­tica sÃ£o categorizadas em NÃ­veis de Integridade de SeguranÃ§a (*Safety Integrity Level* - SIL), que variam de SIL-1 a SIL-4 com base na probabilidade mÃ©dia de falha sob demanda ($PFD_{avg}$):

$$\text{Probabilidade MÃ©dia de Falha sob Demanda (1oo1):} \quad PFD_{avg} \approx \frac{\lambda_D \times T_I}{2}$$

Onde $\lambda_D$ Ã© a taxa de falha perigosa nÃ£o detectada dos componentes do loop de instrumentaÃ§Ã£o e $T_I$ Ã© o intervalo temporal entre testes periÃ³dicos de validaÃ§Ã£o (*proof test interval*).

No projeto SCADA Core da UNIFEI, a malha de corte de emergÃªncia geral (ESD-100) e o intertravamento das vÃ¡lvulas de corte dos bancos de armazenamento (XV-101, XV-102, XV-103) sÃ£o dimensionados formalmente para satisfazer os requisitos de arquitetura **SIL-2** e **SIL-3**, utilizando lÃ³gicas de votaÃ§Ã£o redundante:
* **Arquitetura 1oo2 (One out of Two):** Aumenta drasticamente a seguranÃ§a; a atuaÃ§Ã£o de qualquer um dos dois canais de sensoriamento redundantes provoca o corte seguro da planta.
* **Arquitetura 2oo3 (Two out of Three / TMR):** Proporciona mÃ¡xima confiabilidade e disponibilidade operacional, evitando disparos espÃºrios (*nuisance trips*) que interrompem desnecessariamente a operaÃ§Ã£o comercial da estaÃ§Ã£o de abastecimento.

## 2.6 ClassificaÃ§Ã£o de Ãreas Potencialmente Explosivas (ATEX / IECEx / NR-10 / NR-20)

Em virtude do baixÃ­ssimo valor de energia mÃ­nima de igniÃ§Ã£o do hidrogÃªnio ($MIE \approx 0{,}017\text{ mJ}$, uma fraÃ§Ã£o Ã­nfima comparada aos $0{,}29\text{ mJ}$ do metano e facilmente fornecida por uma simples descarga eletrostÃ¡tica humana ou faÃ­sca mecÃ¢nica), todas as Ã¡reas onde o gÃ¡s possa estar presente sÃ£o rigorosamente zoneadas segundo os preceitos internacionais da sÃ©rie de normas **IEC 60079** e das diretivas europeias **ATEX**:

* **Zona 0:** Ãrea na qual uma atmosfera explosiva de gÃ¡s estÃ¡ presente continuamente, por longos perÃ­odos ou frequentemente (interior de tubulaÃ§Ãµes, filtros e tanques de hidrogÃªnio).
* **Zona 1:** Ãrea na qual uma atmosfera explosiva de gÃ¡s Ã© provÃ¡vel de ocorrer em operaÃ§Ã£o normal (raio de 1 a 3 metros ao redor de flanges mecÃ¢nicos, compressores e do bico de abastecimento durante o desacoplamento).
* **Zona 2:** Ãrea na qual uma atmosfera explosiva de gÃ¡s nÃ£o Ã© provÃ¡vel de ocorrer em operaÃ§Ã£o normal, mas, se ocorrer, persistirÃ¡ apenas por um curto perÃ­odo (perÃ­metro externo circundante Ã  Zona 1).

Todos os sensores de campo (transmissores de pressÃ£o PT, transmissores de temperatura TT, detectores de vazamento AT) e atuadores elÃ©tricos (solenoides de vÃ¡lvulas XV e bobinas de contatores) especificados no SCADA Core devem possuir certificaÃ§Ã£o para **Grupo de GÃ¡s IIC** (o grupo mais exigente da indÃºstria, reservado para hidrogÃªnio e acetileno) e **Classe de Temperatura T1 a T4**, com proteÃ§Ã£o por invÃ³lucro Ã  prova de explosÃ£o (*Ex d*), seguranÃ§a intrÃ­nseca (*Ex i*) ou pressurizaÃ§Ã£o interna (*Ex p*).

## 2.7 ASME B31.12: Engenharia de TubulaÃ§Ãµes para HidrogÃªnio Gasoso

A norma **ASME B31.12** (*Hydrogen Piping and Pipelines*) estabelece os requisitos de cÃ¡lculo mecÃ¢nico de espessura de parede, seleÃ§Ã£o metalÃºrgica e ensaios nÃ£o-destrutivos para linhas de conduÃ§Ã£o de $H_2$. O fenÃ´meno mais destrutivo mitigado pela norma Ã© a **fragilizaÃ§Ã£o por hidrogÃªnio** (*Hydrogen Embrittlement*), no qual Ã¡tomos isolados de hidrogÃªnio penetram na rede cristalina do aÃ§o, acumulando-se em discordÃ¢ncias e defeitos microscÃ³picos, provocando perda drÃ¡stica de tenacidade Ã  fratura e propagaÃ§Ã£o catastrÃ³fica de trincas sob tensÃµes mecÃ¢nicas muito inferiores ao limite de escoamento do material.

Para as tubulaÃ§Ãµes modeladas no grafo da estaÃ§Ã£o da UNIFEI, a norma preconiza o emprego obrigatÃ³rio de **aÃ§os inoxidÃ¡veis austenÃ­ticos de alta pureza** (especificamente sÃ©ries AISI 316/316L ou aÃ§os ligados especiais com teor de nÃ­quel superior a 12% a 14%), que apresentam reticulado cÃºbico de faces centradas (CFC) com coeficiente de difusÃ£o de hidrogÃªnio significativamente mais baixo do que aÃ§os-carbono ferrÃ­ticos comuns.

---

# CAPÃTULO 3: TERMODINÃ‚MICA E ENGENHARIA DO PROCESSO DE COMPRESSÃƒO E TRANSFERÃŠNCIA

A operaÃ§Ã£o de uma estaÃ§Ã£o de hidrogÃªnio a 700 bar nÃ£o pode ser compreendida sob a Ã³tica dos gases ideais. A densidade do hidrogÃªnio atinge patamares da ordem de $40\text{ kg/m}^3$ sob essas pressÃµes extremas, exigindo o emprego de equaÃ§Ãµes de estado termodinÃ¢micas para gases reais e um controle tÃ©rmico rigoroso.

## 3.1 Propriedades FÃ­sico-QuÃ­micas CrÃ­ticas do GÃ¡s HidrogÃªnio ($H_2$)

| Propriedade FÃ­sico-QuÃ­mica | Valor NumÃ©rico TÃ­pico | Comparativo / Impacto Operacional na Engenharia |
| :--- | :--- | :--- |
| **Massa Molar ($M$)** | $2{,}016\text{ g/mol}$ | MolÃ©cula mais leve e menor do universo fÃ­sico |
| **Densidade Normal ($0^\circ\text{C}, 1\text{ atm}$)** | $0{,}0899\text{ kg/m}^3$ | Aproximadamente 14 vezes mais leve que o ar |
| **Faixa de Inflamabilidade no Ar** | $4{,}0\%\text{ a }75{,}0\%\text{ vol.}$ | Extrema amplitude; risco crÃ­tico de deflagraÃ§Ã£o |
| **Faixa de DetonaÃ§Ã£o no Ar** | $18{,}3\%\text{ a }59{,}0\%\text{ vol.}$ | TransiÃ§Ã£o rÃ¡pida de chama para onda de choque supersÃ´nica |
| **Energia MÃ­nima de IgniÃ§Ã£o (MIE)** | $0{,}017\text{ mJ}$ | Ordens de magnitude menor que a de hidrocarbonetos |
| **Velocidade de Queima Laminar** | $2{,}5\text{ a }3{,}2\text{ m/s}$ | Cerca de 8 vezes superior Ã  do gÃ¡s natural (metano) |
| **Ponto de EbuliÃ§Ã£o ($1\text{ atm}$)** | $-252{,}87^\circ\text{C}$ ($20{,}28\text{ K}$) | Estado criogÃªnico extremo |
| **Temperatura CrÃ­tica ($T_c$)** | $-240{,}18^\circ\text{C}$ ($32{,}97\text{ K}$) | Acima deste valor, o gÃ¡s jamais se liquefaz por pressÃ£o |
| **PressÃ£o CrÃ­tica ($P_c$)** | $12{,}96\text{ bar}$ ($1{,}296\text{ MPa}$) | PressÃ£o moderada; na estaÃ§Ã£o o fluido opera supercrÃ­tico |

Sob pressÃµes operacionais entre 350 bar e 1000 bar, o comportamento do gÃ¡s afasta-se acentuadamente da lei dos gases perfeitos $PV = nRT$. O volume molar real ocupado pelo gÃ¡s Ã© superior ao ideal devido Ã s forÃ§as repulsivas de curto alcance entre as nuvens eletrÃ´nicas moleculares. Esse comportamento Ã© corrigido pelo **fator de compressibilidade** ($Z$):

$$P \cdot V = Z(P, T) \cdot R \cdot T$$

Para modelagens de alta precisÃ£o do hidrogÃªnio nas rotinas computacionais do SCADA e nos notebooks do projeto, utiliza-se a EquaÃ§Ã£o de Estado de Redlich-Kwong modificada ou a formulaÃ§Ã£o padronizada de Helmholtz implementada pelo *National Institute of Standards and Technology* (NIST).

```
         Fator de Compressibilidade Z do H2 vs. PressÃ£o
  Z
 1.6 |                                         /
 1.4 |                                     _.-'
 1.2 |                              _..---'
 1.0 |--------------------'''''-----            (GÃ¡s Ideal Z = 1)
 0.8 |
     +----------------------------------------> P (bar)
     0        200        400        600        800       1000
```

## 3.2 O Efeito Joule-Thomson e o FenÃ´meno de InversÃ£o TÃ©rmica

Em termodinÃ¢mica, a expansÃ£o isentÃ¡lpica de um gÃ¡s real (processo em que o fluido sofre uma queda abrupta de pressÃ£o ao atravessar uma restriÃ§Ã£o de vazÃ£o, como uma vÃ¡lvula de estrangulamento ou orifÃ­cio calibrado, sob regime adiabaticamente isolado) Ã© caracterizada pelo **coeficiente Joule-Thomson** ($\mu_{JT}$):

$$\mu_{JT} = \left( \frac{\partial T}{\partial P} \right)_H = \frac{1}{C_p} \left[ T \left( \frac{\partial V}{\partial T} \right)_P - V \right]$$

* Se $\mu_{JT} > 0$: O gÃ¡s resfria durante a despressurizaÃ§Ã£o ($\Delta P < 0 \Rightarrow \Delta T < 0$). Este Ã© o comportamento exibido pela maioria absoluta dos gases industriais (como ar, nitrogÃªnio, diÃ³xido de carbono e metano) em temperatura ambiente.
* Se $\mu_{JT} < 0$: O gÃ¡s **aquece** durante a despressurizaÃ§Ã£o ($\Delta P < 0 \Rightarrow \Delta T > 0$).

A fronteira entre esses regimes Ã© delimitada pela curva de inversÃ£o Joule-Thomson, onde $\mu_{JT} = 0$. A temperatura mÃ¡xima de inversÃ£o do gÃ¡s hidrogÃªnio ao nÃ­vel do mar Ã© de apenas **aproximadamente $-73^\circ\text{C}$ ($200\text{ K}$)**.

Como a temperatura ambiente padrÃ£o de uma estaÃ§Ã£o HRS situa-se tipicamente entre $-10^\circ\text{C}$ e $+45^\circ\text{C}$ (muito acima de $-73^\circ\text{C}$), o hidrogÃªnio opera invariavelmente na **zona de coeficiente Joule-Thomson negativo**. Isso acarreta duas consequÃªncias fÃ­sicas capitais para o projeto de engenharia:
1. Qualquer vazamento acidental em alta pressÃ£o nÃ£o resfria o orifÃ­cio; pelo contrÃ¡rio, o gÃ¡s aquece Ã  medida que expande para a atmosfera, aumentando vertiginosamente o risco de autoigniÃ§Ã£o imediata.
2. Durante o processo de descompressÃ£o do banco de armazenamento para a linha de alimentaÃ§Ã£o do veÃ­culo atravÃ©s das vÃ¡lvulas reguladoras, o gÃ¡s sofre um aquecimento tÃ©rmico adicional indesejado.

## 3.3 Necessidade CrÃ­tica de PrÃ©-resfriamento CriogÃªnico (-40Â°C / Classe T40)

AlÃ©m do efeito Joule-Thomson, o principal responsÃ¡vel pela elevaÃ§Ã£o drÃ¡stica da temperatura do hidrogÃªnio durante o reabastecimento Ã© a **compressÃ£o quase-adiabÃ¡tica** que ocorre no interior do tanque do veÃ­culo FCEV.

Ã€ medida que massas consecutivas de hidrogÃªnio de alta pressÃ£o sÃ£o forÃ§adas para dentro do volume geomÃ©trico fixo do reservatÃ³rio embarcado, a energia cinÃ©tica do fluido Ã© convertida em energia interna termodinÃ¢mica. Aplicando a primeira lei da termodinÃ¢mica para volumes de controle em regime transiente:

$$\frac{d(m \cdot u)_{tanque}}{dt} = \dot{m}_{in} \cdot h_{in} - \dot{Q}_{perdido}$$

Como o tempo total de abastecimento de um carro leve Ã© de apenas 3 minutos, a taxa de transferÃªncia de calor por conduÃ§Ã£o e convecÃ§Ã£o atravÃ©s das paredes espessas de fibra de carbono do cilindro veicular ($\dot{Q}_{perdido}$) Ã© praticamente insignificante quando comparada ao fluxo entÃ¡lpico de entrada ($\dot{m}_{in} \cdot h_{in}$). O processo Ã© essencialmente adiabÃ¡tico, resultando em uma elevaÃ§Ã£o tÃ©rmica intrÃ­nseca que pode ultrapassar $60^\circ\text{C}$ acima da temperatura inicial do gÃ¡s injetado.

Para impedir que a temperatura do liner do tanque ultrapasse o limiar fatal de seguranÃ§a de $+85^\circ\text{C}$ estipulado pela SAE J2601, a estaÃ§Ã£o HRS da UNIFEI conta com o **Setor 200 (Condicionamento TÃ©rmico)**. O trocador de calor HEX-201 atua como um pulmÃ£o criogÃªnico que resfria a corrente contÃ­nua de hidrogÃªnio atÃ© o patamar de **$-40^\circ\text{C}$** antes de sua chegada ao bico dispensador DISP-300. Essa margem de prÃ©-resfriamento de $40^\circ\text{C}$ abaixo de zero compensa integralmente o ganho de temperatura da compressÃ£o e da expansÃ£o estrangulada, mantendo o pico de temperatura do tanque do veÃ­culo estabilizado na faixa segura de $65^\circ\text{C}$ a $75^\circ\text{C}$ ao tÃ©rmino do carregamento.

## 3.4 Filosofia de Armazenamento em Cascata (Cascade Storage: LP, MP, HP)

Uma abordagem simplista de projeto tentaria abastecer o veÃ­culo utilizando compressores de injeÃ§Ã£o direta de alta capacidade ou um Ãºnico reservatÃ³rio gigante pressurizado a 1000 bar. No entanto, essas opÃ§Ãµes apresentam desvantagens insuperÃ¡veis de consumo elÃ©trico de pico, desgaste mecÃ¢nico prematuro de pistÃµes e ineficiÃªncia termodinÃ¢mica.

A soluÃ§Ã£o clÃ¡ssica de engenharia adotada universalmente pela indÃºstria e detalhada no projeto da UNIFEI Ã© o **abastecimento sequencial em cascata de trÃªs estÃ¡gios**. O banco de armazenamento Ã© particionado em trÃªs vasos independentes operando em patamares pressÃ³ricos escalonados:

1. **EstÃ¡gio 1 - Banco de Baixa PressÃ£o (LP - TK-101):** PressÃ£o de trabalho entre $350\text{ e }400\text{ bar}$. Quando o veÃ­culo chega Ã  estaÃ§Ã£o com o tanque vazio ou residualmente despressurizado (por exemplo, entre $20\text{ e }150\text{ bar}$), a vÃ¡lvula XV-104 seleciona o tanque TK-101. O abastecimento ocorre inicialmente impulsionado exclusivamente pela diferenÃ§a natural de pressÃ£o entre o banco LP e o veÃ­culo, sem acionar motores de compressores de alta potÃªncia.
2. **EstÃ¡gio 2 - Banco de MÃ©dia PressÃ£o (MP - TK-102):** PressÃ£o de trabalho entre $650\text{ e }700\text{ bar}$. Quando a vazÃ£o mÃ¡ssica decresce devido Ã  equalizaÃ§Ã£o de pressÃ£o entre o veÃ­culo e o banco LP (por volta de 300 bar), a vÃ¡lvula direcional comuta para o tanque TK-102. O fluxo Ã© restabelecido em alta taxa, elevando a pressÃ£o do veÃ­culo atÃ© patamares prÃ³ximos a 550 bar.
3. **EstÃ¡gio 3 - Banco de Alta PressÃ£o (HP - TK-103):** PressÃ£o de trabalho entre $900\text{ e }1000\text{ bar}$. Na fase conclusiva de enchimento, a comutaÃ§Ã£o seleciona o banco HP, que fornece a sobrepressÃ£o necessÃ¡ria para vencer a contrapressÃ£o do veÃ­culo e consolidar a densidade alvo de 700 bar nominais com precisÃ£o milimÃ©trica.

```
      PressÃ£o de Enchimento do VeÃ­culo vs. Tempo em Cascata
  P (bar)
  875 | - - - - - - - - - - - - - - - - - - - - - - - - - - - - - Limite MÃ¡x. (Overpressure)
  700 |                                       .----------- 700 bar Nominal (Fim)
      |                         .------------'  <-- Alimentado por TK-103 (HP)
  500 |           .------------'  <-- Alimentado por TK-102 (MP)
      |          /
  300 | .-------'  <-- Alimentado por TK-101 (LP)
      |/
    0 +-------------------------------------------------------> Tempo (segundos)
      0          60           120          180          240
```

Essa estratificaÃ§Ã£o em cascata minimiza a exergia destruÃ­da no estrangulamento das vÃ¡lvulas e permite que compressores menores e mais econÃ´micos recomponham a pressÃ£o dos bancos nos intervalos entre atendimentos de veÃ­culos.

## 3.5 Taxa MÃ©dia de Rampa de PressÃ£o (APRR) e PrevenÃ§Ã£o de Fadiga TÃ©rmica

O processo de pressurizaÃ§Ã£o veicular nÃ£o pode ocorrer como um degrau abrupto. A elevaÃ§Ã£o de pressÃ£o deve seguir uma taxa angular controlada conhecida como **Taxa MÃ©dia de Rampa de PressÃ£o** (*Average Pressure Ramp Rate* - APRR), formalmente expressa como:

$$\text{APRR} = \frac{P_{final} - P_{inicial}}{\Delta t_{abastecimento}} \quad [\text{MPa/min}]$$

Para veÃ­culos leves sob a norma SAE J2601 e protocolo T40, a APRR situa-se tipicamente entre **$15\text{ MPa/min}$ e $28\text{ MPa/min}$** (aproximadamente $150\text{ a }280\text{ bar/min}$).

O controle dessa rampa Ã© executado por uma malha de controle PID em tempo real embarcada no CLP de seguranÃ§a, atuando sobre a vÃ¡lvula reguladora solenoide proporcional de alta velocidade XV-301. Se a rampa for demasiadamente rÃ¡pida ($\text{APRR} > 30\text{ MPa/min}$), a taxa de geraÃ§Ã£o tÃ©rmica supera a capacidade convectiva do prÃ©-resfriador, provocando sobreaquecimento prematuro do tanque e forÃ§ando um trip de aborto pelo sensor TT-301. Se for excessivamente lenta, a estaÃ§Ã£o perde competitividade operacional e nÃ£o atinge o tempo padrÃ£o de mercado de 3 a 5 minutos.

## 3.6 DinÃ¢mica de Carregamento em Tanques Tipo IV (PolÃ­mero e Fibra de Carbono)

Para compreender as exigÃªncias de instrumentaÃ§Ã£o e alarmes implementadas no SCADA Core, Ã© fundamental analisar a estrutura mecÃ¢nica dos cilindros veiculares embarcados. A indÃºstria automotiva adota universalmente tanques de **Tipo IV**:

* **Liner Interno:** Fabricado em polietileno de alta densidade (PEAD) ou poliamida especial (Nylon 6/6), cuja funÃ§Ã£o exclusiva Ã© atuar como barreira estanque Ã  permeaÃ§Ã£o das micropartÃ­culas de $H_2$. Esse material nÃ£o possui resistÃªncia mecÃ¢nica estrutural para conter 700 bar.
* **CarcaÃ§a Externa Resistente:** Camada espessa de filamentos contÃ­nuos de fibra de carbono de altÃ­ssimo mÃ³dulo elÃ¡stico enrolados helicoidal e circunferencialmente sob tensÃ£o precisa, impregnados com matriz de resina epÃ³xi termofixa.
* **Bocal MetÃ¡lico (*Boss*):** PeÃ§a usinada em alumÃ­nio aeronÃ¡utico 6061-T6 ou aÃ§o inoxidÃ¡vel nas extremidades do tanque, onde se acoplam o receptÃ¡culo de abastecimento, a vÃ¡lvula de alÃ­vio tÃ©rmico (TPRD) e os sensores integrados.

O calcanhar de Aquiles dos tanques Tipo IV Ã© a degradaÃ§Ã£o tÃ©rmica da resina epÃ³xi da carcaÃ§a e a plastificaÃ§Ã£o do liner de polÃ­mero quando submetidos a temperaturas acima de $+85^\circ\text{C}$, ou o colapso do liner por descompressÃ£o explosiva caso o gÃ¡s permeado no polÃ­mero sofra rÃ¡pida despressurizaÃ§Ã£o. Ã‰ precisamente a inviolabilidade dessas restriÃ§Ãµes fÃ­sicas que norteia toda a lÃ³gica de intertravamento booleano do SCADA Core.

---

# CAPÃTULO 4: ARQUITETURA FÃSICA DA PLANTA E INSTRUMENTAÃ‡ÃƒO P&ID

A arquitetura de processo da estaÃ§Ã£o de hidrogÃªnio modelada no repositÃ³rio da UNIFEI Ã© estruturada em trÃªs setores fÃ­sicos fundamentais interligados por tubulaÃ§Ãµes de alta tenacidade, regulados por vÃ¡lvulas automatizadas e monitorados por uma malha densa de sensores padronizados pela norma ISA-5.1.

```
       SETOR 100: ARMAZENAMENTO & COMPRESSÃƒO           SETOR 200: CONDICIONAMENTO      SETOR 300: DISPENSADOR
  +-------------------------------------------------+  +-------------------------+  +--------------------------+
  |                                                 |  |                         |  |                          |
  |  [ SUP-100 ]                                    |  |                         |  |                          |
  |       |                                         |  |                         |  |                          |
  |      XV-101                                     |  |                         |  |                          |
  |       v                                         |  |                         |  |                          |
  |  +---------+   e4    +--------+                 |  |                         |  |                          |
  |  | TK-101  |-------->|        |                 |  |                         |  |                          |
  |  | (LP 350)|         |        |                 |  |                         |  |                          |
  |  +---------+         |        |   e7            |  |  [ HEX-201 ]     e8     |  |  [ DISP-300 ]     e9       |
  |                      |        |========[XV-201]====>| (Chiller T40) |=========>| (Medidor Coriolis) ===>   |
  |  +---------+   e5    | XV-104 | (Ponte CrÃ­tica) |  |   T <= -40Â°C   |(Ponte) |  |     |        (Ponte)  [VEIC]
  |  | TK-102  |-------->|        |                 |  |                         |  |   XV-301              700  |
  |  | (MP 700)|         |        |                 |  |                         |  |     |                 bar  |
  |  +---------+         |        |                 |  |                         |  |     v                      |
  |                      |        |                 |  |                         |  |   BV-301                   |
  |  +---------+   e6    |        |                 |  |                         |  | (Breakaway)                |
  |  | TK-103  |-------->|        |                 |  |                         |  |     |                      |
  |  | (HP 1000|         +--------+                 |  |                         |  |  COM-301 (IrDA J2799)      |
  |  +---------+                                    |  |                         |  |                          |
  +-------------------------------------------------+  +-------------------------+  +--------------------------+
```

## 4.1 Setor 100: Armazenamento e CompressÃ£o MultiestÃ¡gio

O Setor 100 Ã© a unidade primÃ¡ria responsÃ¡vel pelo recebimento, estocagem volumÃ©trica sob pressÃ£o controlada e segregaÃ§Ã£o das linhas de suprimento de hidrogÃªnio. Seus principais ativos e componentes de engenharia compreendem:

1. **SUP-100 (Unidade de Suprimento Externo):** Representa a interface com a linha de suprimento contÃ­nuo da estaÃ§Ã£o. Em instalaÃ§Ãµes industriais reais, este nÃ³ pode estar conectado a um eletrolisador comercial PEM de 1 MW ou ao manifold de engate de carretas semirreboque (*tube trailers*) com pressÃ£o de entrega regulada em 350 bar.
2. **TK-101 (Banco de Armazenamento de Baixa PressÃ£o - LP):** Vaso de pressÃ£o com volume geomÃ©trico nominal calibrado para operar atÃ© a pressÃ£o de projeto de 400 bar, com setpoint de recarga em 350 bar. Dotado de sensor de pressÃ£o PT-101, sensor de temperatura de carcaÃ§a TT-101, detector perimÃ©trico de vazamento AT-101, vÃ¡lvula de corte rÃ¡pido automatizada XV-101 e vÃ¡lvula de alÃ­vio mecÃ¢nico de pressÃ£o com mola calibrada PSV-101.
3. **TK-102 (Banco de Armazenamento de MÃ©dia PressÃ£o - MP):** Vaso de alta resistÃªncia dimensionado para operar atÃ© a pressÃ£o de seguranÃ§a de 700 bar, com setpoint operacional estabilizado em 650 bar. Instrumentado por PT-102, TT-102, AT-102, XV-102 e PSV-102.
4. **TK-103 (Banco de Armazenamento de Alta PressÃ£o - HP):** Vaso de armazenamento ultra-pesado projetado para conter gÃ¡s em regime supercrÃ­tico atÃ© 1000 bar, com setpoint padrÃ£o em 950 bar. Monitorado por PT-103, TT-103, AT-103, XV-103 e PSV-103.
5. **XV-104 (Manifold Seletor de Cascata Multivias):** VÃ¡lvula direcional motorizada e atuada por solenoides duplos (Bobina A / YV-104A e Bobina B / YV-104B), permitindo a seleÃ§Ã£o unÃ­voca de qual banco de armazenamento (LP, MP ou HP) alimenta a linha mestra de abastecimento a cada instante da rampa de enchimento.

## 4.2 Setor 200: Condicionamento TÃ©rmico e Unidade de Resfriamento (Chiller)

O Setor 200 constitui a barreira de proteÃ§Ã£o tÃ©rmica contra o superaquecimento do hidrogÃªnio. Seus componentes fundamentais sÃ£o:

1. **HEX-201 (Trocador de Calor CriogÃªnico / Heat Exchanger):** Trocador de calor microestruturado de fluxo cruzado fabricado em bloco monolÃ­tico de aÃ§o inoxidÃ¡vel austenÃ­tico por soldagem por difusÃ£o (*Diffusion-Bonded Heat Exchanger*). O circuito primÃ¡rio conduz o hidrogÃªnio de alta pressÃ£o em microcanais de 1 mm de diÃ¢metro, enquanto o circuito secundÃ¡rio recebe fluido tÃ©rmico refrigerante circulante (glicol especial ou hidrocarboneto halogenado nÃ£o-congelante) em temperaturas ultra-baixas.
2. **CH-101 / M-201 (Unidade de RefrigeraÃ§Ã£o MecÃ¢nica e Chiller Industrial):** Sistema de compressÃ£o de vapor de mÃºltiplos estÃ¡gios acionado por motor elÃ©trico de induÃ§Ã£o trifÃ¡sico com partida controlada por inversor de frequÃªncia. O status do contator de potÃªncia Ã© monitorado pela variÃ¡vel lÃ³gica $m_{2,1}$.
3. **XV-201 (VÃ¡lvula de Bloqueio CriogÃªnica):** VÃ¡lvula de esfera com vedaÃ§Ã£o especial em polÃ­mero PCTFE (Kel-F) projetada para manter estanqueidade perfeita sob temperaturas de $-50^\circ\text{C}$ e pressÃµes de 1000 bar, atuada pneumaticamente para abertura segura ($v_{2,1}$).
4. **InstrumentaÃ§Ã£o Associada:** Transmissor de temperatura de precisÃ£o TT-201 (termorresistÃªncia de platina PT-100 classe A instalada na saÃ­da imediata do trocador) e transmissor de pressÃ£o da linha buffer PT-201.

## 4.3 Setor 300: Linha de DispensaÃ§Ã£o e Interface Veicular

O Setor 300 Ã© o ponto de contato mecÃ¢nico, elÃ©trico e lÃ³gico entre a estaÃ§Ã£o de abastecimento e o automÃ³vel. Seus elementos constituintes incluem:

1. **DISP-300 (Gabinete Dispensador e MediÃ§Ã£o de CustÃ³dia):** Estrutura metÃ¡lica com isolamento elÃ©trico e ventilaÃ§Ã£o interna que abriga o medidor mÃ¡ssico de vazÃ£o por efeito Coriolis de tubo reto de alta rigidez, capaz de medir com precisÃ£o de $\pm 0{,}5\%$ vazÃµes mÃ¡ssicas entre $0{,}1\text{ e }3{,}6\text{ kg/min}$ sob pressÃµes de atÃ© 1000 bar.
2. **XV-301 (VÃ¡lvula Solenoide Moduladora de DispensaÃ§Ã£o):** Elemento final de controle de altÃ­ssima velocidade de resposta, comandado pelo controlador de rampa do SCADA ($v_{3,1}$) para regular a inclinaÃ§Ã£o da APRR.
3. **BV-301 (VÃ¡lvula Breakaway de Desacoplamento MecÃ¢nico de EmergÃªncia):** Dispositivo de proteÃ§Ã£o mecÃ¢nica instalado na mangueira flexÃ­vel. Caso o condutor do veÃ­culo acelere inadvertidamente com o bico ainda acoplado ao receptÃ¡culo, a vÃ¡lvula breakaway desacopla-se fisicamente a uma forÃ§a de traÃ§Ã£o calibrada entre 400 N e 600 N, acionando simultaneamente duas vÃ¡lvulas de retenÃ§Ã£o internas que impedem o escape de gÃ¡s tanto pelo lado da estaÃ§Ã£o quanto pelo lado da mangueira rompida. A integridade desse acoplamento Ã© monitorada pelo contato reed-switch $bv_{3,1}$.
4. **COM-301 (MÃ³dulo Ã“ptico Transceptor Infravermelho IrDA):** Dispositivo optoeletrÃ´nico responsÃ¡vel por sincronizar os dados do veÃ­culo segundo a SAE J2799, sinalizado pela proposiÃ§Ã£o $c_{3,1}$.
5. **VEIC-300 (ReceptÃ¡culo e Tanque do VeÃ­culo):** NÃ³ terminal de consumo, representando o cilindro composto de 700 bar do automÃ³vel. A pressÃ£o interna embarcada Ã© reportada pelo sensor PT-301 e a temperatura pelo sensor TT-301.

## 4.4 Filosofia Operacional das VÃ¡lvulas de Bloqueio RÃ¡pido e SeleÃ§Ã£o Direcional

A operaÃ§Ã£o das vÃ¡lvulas da estaÃ§Ã£o Ã© estritamente regida pelo princÃ­pio do **fechamento por perda de energia (*Fail-Close* ou *Air-to-Open*)**. Todas as vÃ¡lvulas de bloqueio rÃ¡pido (XV-101 a XV-103, XV-201 e XV-301) sÃ£o mantidas abertas por pressÃ£o pneumÃ¡tica ou energizaÃ§Ã£o de bobinas solenoides contra a resistÃªncia mecÃ¢nica de molas helicoidais calibradas. Qualquer queda de tensÃ£o elÃ©trica, interrupÃ§Ã£o na linha de ar comprimido de instrumentos ou sinal lÃ³gico de corte desenergiza instantaneamente a bobina, fazendo com que a forÃ§a mecÃ¢nica da mola feche a sede da vÃ¡lvula em menos de **80 milissegundos**, confinando o gÃ¡s nas seÃ§Ãµes isoladas da planta.

A vÃ¡lvula seletora de fluxo em cascata XV-104 opera sob uma matriz de comutaÃ§Ã£o que impede a interconexÃ£o acidental simultÃ¢nea entre bancos de pressÃµes desiguais (por exemplo, interconectar o banco HP de 1000 bar diretamente com o banco LP de 350 bar), prevenindo o fluxo reverso descontrolado e a sobrepressÃ£o mecÃ¢nica catastrÃ³fica dos vasos de menor porte.

## 4.5 Mecanismos de AlÃ­vio MecÃ¢nico (PSV) e Parada de EmergÃªncia (ESD)

Como Ãºltima camada irredutÃ­vel de proteÃ§Ã£o fÃ­sica, independente de qualquer software ou circuito eletrÃ´nico (conforme prescreve a norma ASME SeÃ§Ã£o VIII DivisÃ£o 1):

* **VÃ¡lvulas de AlÃ­vio de PressÃ£o e SeguranÃ§a (PSV-101, PSV-102, PSV-103):** VÃ¡lvulas mecÃ¢nicas puras de aÃ§Ã£o direta por mola, instaladas no topo dos tanques TK-101, TK-102 e TK-103. SÃ£o calibradas para abertura instantÃ¢nea e alÃ­vio pleno de vazÃ£o quando a pressÃ£o do vaso atinge $110\%$ da pressÃ£o mÃ¡xima de trabalho admissÃ­vel (PMTA). A abertura dessas vÃ¡lvulas aciona uma chave fim de curso magnÃ©tica acoplada Ã  haste ($r_{1,1}, r_{1,2}, r_{1,3}$), informando ao SCADA que ocorreu um disparo de alÃ­vio mecÃ¢nico de emergÃªncia.
* **Sistema de Parada de EmergÃªncia (ESD-100 / $e_{1,1}$):** Malha hardwired de seguranÃ§a com botÃµes de emergÃªncia tipo soco com retenÃ§Ã£o mecÃ¢nica e rearme manual por chave, distribuÃ­dos estrategicamente na ilha de dispensaÃ§Ã£o, na sala dos compressores e na sala de controle do operador.

---

# CAPÃTULO 5: MAPA DE VARIÃVEIS, DICIONÃRIO DE TAGS E PROTOCOLOS DE COMUNICAÃ‡ÃƒO

A integridade operacional de uma estaÃ§Ã£o de hidrogÃªnio monitorada por sistema supervisÃ³rio assenta-se na padronizaÃ§Ã£o inequÃ­voca de sua instrumentaÃ§Ã£o. A comunicaÃ§Ã£o determinÃ­stica entre sensores, transmissores, atuadores de campo, controladores lÃ³gicos programÃ¡veis (CLP) e as telas do SCADA depende de um dicionÃ¡rio de tags estruturado segundo as normas internacionais de instrumentaÃ§Ã£o industrial.

## 5.1 PadronizaÃ§Ã£o ISA-5.1 para InstrumentaÃ§Ã£o e Malhas de Controle

Adota-se rigorosamente a norma **ANSI/ISA-5.1** (*Instrumentation Symbols and Identification*). Cada tag Ã© composto por um cÃ³digo alfanumÃ©rico que define a variÃ¡vel fÃ­sica primÃ¡ria, a funÃ§Ã£o de processamento/leitura e o nÃºmero da malha associado ao setor da planta:

* **Primeira Letra (VariÃ¡vel Medida):**
  - **P:** PressÃ£o (*Pressure*)
  - **T:** Temperatura (*Temperature*)
  - **F:** VazÃ£o (*Flow*)
  - **A:** AnÃ¡lise QuÃ­mica / DetecÃ§Ã£o de GÃ¡s inflamÃ¡vel (*Analysis*)
  - **H:** Comando Manual do Operador (*Hand / Manual*)
  - **C:** ComunicaÃ§Ã£o de Dados / Redes Digitais (*Communication*)
  - **X:** VÃ¡lvula de Bloqueio RÃ¡pido / Elemento NÃ£o-Classificado (*Unclassified / On-Off Valve*)
  - **Y:** Conversor de Sinal ElÃ©trico / Solenoide (*Solenoid / Converter*)
  - **S:** SinalizaÃ§Ã£o Luminosa / Chave (*Signal / Switch*)
  - **Z:** PosiÃ§Ã£o MecÃ¢nica / Fim de Curso (*Position*)
* **Segunda e Terceira Letras (FunÃ§Ã£o do Instrumento):**
  - **T:** Transmissor de Campo (*Transmitter*)
  - **S:** Chave de AtuaÃ§Ã£o Discreta (*Switch*)
  - **V:** VÃ¡lvula AutomÃ¡tica (*Valve*)
  - **L:** LÃ¢mpada Piloto / Luz Sinalizadora (*Light*)
  - **M:** Motor ElÃ©trico / Atuador de PotÃªncia (*Motor*)
* **NumeraÃ§Ã£o de Malha (Loop Number):**
  - **SÃ©rie 100:** Setor 100 (Armazenamento em Cascata e CompressÃ£o)
  - **SÃ©rie 200:** Setor 200 (Condicionamento TÃ©rmico e Chiller CriogÃªnico)
  - **SÃ©rie 300:** Setor 300 (Linha de DispensaÃ§Ã£o e Interface Veicular)

```
             Estrutura SintÃ¡tica do Tag ISA-5.1
             
             [ P ]   [ T ]  -  [ 1 ] [ 0 ] [ 1 ]
               |       |         |     |     |
               |       |         +-----+-----+---> NÃºmero da Malha (Setor 100)
               |       +-------------------------> FunÃ§Ã£o: Transmissor (Transmitter)
               +---------------------------------> VariÃ¡vel: PressÃ£o (Pressure)
```

## 5.2 DicionÃ¡rio Exaustivo de Entradas AnalÃ³gicas (AI)

As entradas analÃ³gicas convertem sinais fÃ­sicos contÃ­nuos em palavras digitais no CLP (geralmente sinais elÃ©tricos normalizados de $4\text{ a }20\text{ mA}$ ou protocolos digitais HART/Fieldbus com conversores A/D de 16 bits de resoluÃ§Ã£o).

| Tag ISA-5.1 | ProposiÃ§Ã£o LÃ³gica Associada | DescriÃ§Ã£o TÃ©cnica Detalhada do Instrumento | Faixa Calibrada | Unidade | Setpoints de Alarme SCADA (LL / L / H / HH) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **PT-101** | $p_{1,1}$ / $p_{1,4}$ | PressÃ£o do Tanque de Baixa PressÃ£o (TK-101) | $0 \text{ a } 600$ | bar | L: 100 bar \| H: 350 bar \| HH: 400 bar |
| **PT-102** | $p_{1,2}$ / $p_{1,5}$ | PressÃ£o do Tanque de MÃ©dia PressÃ£o (TK-102) | $0 \text{ a } 1000$ | bar | L: 200 bar \| H: 650 bar \| HH: 700 bar |
| **PT-103** | $p_{1,3}$ / $p_{1,6}$ | PressÃ£o do Tanque de Alta PressÃ£o (TK-103) | $0 \text{ a } 1200$ | bar | L: 350 bar \| H: 950 bar \| HH: 1000 bar |
| **PT-104** | - | PressÃ£o de Linha a Jusante do Suprimento (SUP-100) | $0 \text{ a } 500$ | bar | LL: 50 bar \| H: 380 bar \| HH: 420 bar |
| **PT-201** | $p_{2,1}$ | PressÃ£o da Linha de Buffer de Resfriamento | $0 \text{ a } 1000$ | bar | L: 50 bar \| H: 850 bar \| HH: 900 bar |
| **PT-301** | $p_{3,1}$ | PressÃ£o no ReceptÃ¡culo / Mangueira de DispensaÃ§Ã£o | $0 \text{ a } 1000$ | bar | LL: 10 bar \| H: 700 bar \| HH: 875 bar |
| **TT-101** | $t_{1,1}$ | Temperatura da Parede do Tanque TK-101 | $-50 \text{ a }+150$ | Â°C | L: $-20$ Â°C \| H: $+65$ Â°C \| HH: $+85$ Â°C |
| **TT-102** | $t_{1,2}$ | Temperatura da Parede do Tanque TK-102 | $-50 \text{ a }+150$ | Â°C | L: $-20$ Â°C \| H: $+65$ Â°C \| HH: $+85$ Â°C |
| **TT-103** | $t_{1,3}$ | Temperatura da Parede do Tanque TK-103 | $-50 \text{ a }+150$ | Â°C | L: $-20$ Â°C \| H: $+65$ Â°C \| HH: $+85$ Â°C |
| **TT-201** | $t_{2,1}$ | Temperatura de SaÃ­da do Trocador CriogÃªnico | $-60 \text{ a }+40$ | Â°C | LL: $-50$ Â°C \| L: $-40$ Â°C \| H: $-33$ Â°C \| HH: $-20$ Â°C |
| **TT-301** | $t_{3,1}$ | Temperatura no ReceptÃ¡culo Veicular (SAE J2799) | $-50 \text{ a }+120$ | Â°C | L: $-40$ Â°C \| H: $+65$ Â°C \| HH: $+85$ Â°C |
| **AT-101** | $g_{1,1}$ | ConcentraÃ§Ã£o de HidrogÃªnio no PerÃ­metro TK-101 | $0 \text{ a } 100$ | % LFL | H (Alerta): 20% LFL \| HH (Trip): 40% LFL |
| **AT-102** | $g_{1,2}$ | ConcentraÃ§Ã£o de HidrogÃªnio no PerÃ­metro TK-102 | $0 \text{ a } 100$ | % LFL | H (Alerta): 20% LFL \| HH (Trip): 40% LFL |
| **AT-103** | $g_{1,3}$ | ConcentraÃ§Ã£o de HidrogÃªnio no PerÃ­metro TK-103 | $0 \text{ a } 100$ | % LFL | H (Alerta): 20% LFL \| HH (Trip): 40% LFL |
| **AT-301** | $g_{3,1}$ | ConcentraÃ§Ã£o de HidrogÃªnio no Gabinete DISP-300 | $0 \text{ a } 100$ | % LFL | H (Alerta): 20% LFL \| HH (Trip): 40% LFL |
| **FT-301** | - | VazÃ£o MÃ¡ssica InstantÃ¢nea Medidor Coriolis | $0 \text{ a } 5{,}0$ | kg/min | LL: $0{,}05$ kg/min \| H: $3{,}6$ kg/min \| HH: $4{,}5$ kg/min |

## 5.3 DicionÃ¡rio Exaustivo de Entradas Discretas (DI)

As entradas discretas recebem sinais binÃ¡rios (nÃ­veis de tensÃ£o 0 Vcc e 24 Vcc) provenientes de chaves de seguranÃ§a, contatos auxiliares de contatores, relÃ©s tÃ©rmicos e detectores digitais.

| Tag ISA-5.1 | ProposiÃ§Ã£o LÃ³gica | DescriÃ§Ã£o TÃ©cnica da Entrada Digital | Estado LÃ³gico 0 (Falso / Desenergizado) | Estado LÃ³gico 1 (Verdadeiro / Ativo) |
| :--- | :--- | :--- | :--- | :--- |
| **ESD-100** | $e_{1,1}$ | BotÃ£o de Parada de EmergÃªncia Geral da Planta | Sistema em OperaÃ§Ã£o Normal (Contato NF Fechado) | EmergÃªncia Acionada (Circuito Aberto - Trip SIS) |
| **PSV-101-ZS**| $r_{1,1}$ | Chave Fim de Curso da VÃ¡lvula de AlÃ­vio PSV-101 | VÃ¡lvula Fechada (Assentamento MecÃ¢nico Ãntegro) | VÃ¡lvula Disparada / Aberta (Escape de H2) |
| **PSV-102-ZS**| $r_{1,2}$ | Chave Fim de Curso da VÃ¡lvula de AlÃ­vio PSV-102 | VÃ¡lvula Fechada (Assentamento MecÃ¢nico Ãntegro) | VÃ¡lvula Disparada / Aberta (Escape de H2) |
| **PSV-103-ZS**| $r_{1,3}$ | Chave Fim de Curso da VÃ¡lvula de AlÃ­vio PSV-103 | VÃ¡lvula Fechada (Assentamento MecÃ¢nico Ãntegro) | VÃ¡lvula Disparada / Aberta (Escape de H2) |
| **HS-301** | $h_{3,1}$ | BotÃ£o de Comando do Operador: Iniciar Abastecimento| Repouso / NÃ£o Pressionado | Comando de InÃ­cio Pressionado pelo Operador |
| **COM-301-ST**| $c_{3,1}$ | Status do Link de ComunicaÃ§Ã£o Ã“ptica SAE J2799 | Link Inexistente, NÃ£o Sincronizado ou com Falha | Link Ã“ptico Estabelecido e Dados VÃ¡lidos |
| **BV-301-ZS** | $bv_{3,1}$ | Sensor de Integridade da VÃ¡lvula Breakaway | ConexÃ£o Desacoplada / Mangueira Rompida | Acoplamento MecÃ¢nico Conectado e Ãntegro |
| **NZ-301-ZS** | - | Microchave de Trava do Bico no ReceptÃ¡culo | Bico Destravado ou Fora do ReceptÃ¡culo | Bico Perfeitamente Acoplado e Travado |
| **CH-101-RUN** | - | Contato Auxiliar do Contator de OperaÃ§Ã£o do Chiller| Motor do Chiller Desligado | Motor do Chiller em OperaÃ§Ã£o Efetiva |
| **CH-101-FLT** | - | RelÃ© TÃ©rmico / Falha Geral do Sistema de RefrigeraÃ§Ã£o| Chiller em CondiÃ§Ã£o SaudÃ¡vel | Falha TÃ©rmica / Sobrecarga de RefrigeraÃ§Ã£o |

## 5.4 DicionÃ¡rio Exaustivo de SaÃ­das AnalÃ³gicas (AO)

As saÃ­das analÃ³gicas fornecem sinais elÃ©tricos contÃ­nuos do CLP para modular posicionadores eletropneumÃ¡ticos e variadores de velocidade:

| Tag ISA-5.1 | DescriÃ§Ã£o TÃ©cnica da SaÃ­da AnalÃ³gica | Faixa de Sinal | Unidade de Engenharia | FunÃ§Ã£o no Processo Industrial |
| :--- | :--- | :--- | :--- | :--- |
| **FCV-301** | Sinal de Controle da VÃ¡lvula Proporcional de Rampa | $4 \text{ a } 20\text{ mA}$ | $0 \text{ a } 100\%$ Abertura | ModulaÃ§Ã£o precisa da taxa de elevaÃ§Ã£o de pressÃ£o (APRR) |
| **VFD-201** | ReferÃªncia de Velocidade do Inversor do Chiller | $0 \text{ a } 10\text{ Vcc}$ | $0 \text{ a } 100\%$ RotaÃ§Ã£o | Controle tÃ©rmico fino para manter gÃ¡s em $-40^\circ\text{C}$ |
| **PCV-101** | Sinal Regulador de PressÃ£o da Linha de Suprimento | $4 \text{ a } 20\text{ mA}$ | $0 \text{ a } 400\text{ bar}$ | EqualizaÃ§Ã£o de pressÃ£o durante descarregamento externo |

## 5.5 DicionÃ¡rio Exaustivo de SaÃ­das Discretas (DO)

As saÃ­das discretas comandam a energizaÃ§Ã£o de bobinas solenoides, contatores de forÃ§a motriz, buzinas e sinalizadores luminosos no painel:

| Tag ISA-5.1 | ProposiÃ§Ã£o LÃ³gica | DescriÃ§Ã£o TÃ©cnica da SaÃ­da Digital | Estado LÃ³gico 0 (Desenergizado) | Estado LÃ³gico 1 (Energizado / Atuado) |
| :--- | :--- | :--- | :--- | :--- |
| **XV-101** | $v_{1,1}$ | VÃ¡lvula Solenoide de Bloqueio do Tanque LP | VÃ¡lvula Fechada (Mola MecÃ¢nica Fail-Close) | VÃ¡lvula Aberta (Fluxo Liberado para TK-101) |
| **XV-102** | $v_{1,2}$ | VÃ¡lvula Solenoide de Bloqueio do Tanque MP | VÃ¡lvula Fechada (Mola MecÃ¢nica Fail-Close) | VÃ¡lvula Aberta (Fluxo Liberado para TK-102) |
| **XV-103** | $v_{1,3}$ | VÃ¡lvula Solenoide de Bloqueio do Tanque HP | VÃ¡lvula Fechada (Mola MecÃ¢nica Fail-Close) | VÃ¡lvula Aberta (Fluxo Liberado para TK-103) |
| **YV-104A** | $y_{1,4a}$ | Bobina Solenoide Piloto A da Seletora de Cascata| Bobina Desenergizada | SeleÃ§Ã£o Ativa da Rota do Banco LP (TK-101) |
| **YV-104B** | $y_{1,4b}$ | Bobina Solenoide Piloto B da Seletora de Cascata| Bobina Desenergizada | SeleÃ§Ã£o Ativa da Rota do Banco HP (TK-103) |
| **M-201** | $m_{2,1}$ | Contator MagnÃ©tico do Motor TrifÃ¡sico do Chiller| Motor Desligado / Em Repouso | Motor Energizado / CirculaÃ§Ã£o de Fluido Ativa |
| **XV-201** | $v_{2,1}$ | VÃ¡lvula CriogÃªnica de Entrada do Trocador TÃ©rmico| VÃ¡lvula Fechada | VÃ¡lvula Aberta (GÃ¡s Admitido no Chiller) |
| **XV-301** | $v_{3,1}$ | VÃ¡lvula de Bloqueio RÃ¡pido do Bico Dispensador | VÃ¡lvula Fechada (Isolamento do Bico) | VÃ¡lvula Aberta (InjeÃ§Ã£o de H2 Autorizada) |
| **SL-101** | $s_{1,1}$ | Sinalizador Luminoso de Painel: Tanque LP Ativo | Luz Apagada | Luz Verde Acesa (Linha LP em OperaÃ§Ã£o) |
| **SL-102** | $s_{1,2}$ | Sinalizador Luminoso de Painel: Tanque MP Ativo | Luz Apagada | Luz Verde Acesa (Linha MP em OperaÃ§Ã£o) |
| **SL-103** | $s_{1,3}$ | Sinalizador Luminoso de Painel: Tanque HP Ativo | Luz Apagada | Luz Verde Acesa (Linha HP em OperaÃ§Ã£o) |
| **ALM-101** | $a_{1,1}$ | Sirene Audiovisual de EmergÃªncia Geral da Planta| Sirene Silenciada | Sirene Disparada (Alarme Sonoro e Flash EstroboscÃ³pico) |

## 5.6 Mapeamento de Registradores Industriais (Modbus TCP e NÃ³s OPC UA)

A interface SCADA Core comunica-se com os controladores de campo e com o simulador atravÃ©s de uma arquitetura aberta baseada em barramento Ethernet industrial. A tabela abaixo especifica o mapa oficial de alocaÃ§Ã£o de memÃ³ria Modbus TCP (porta padrÃ£o 502) e os correspondentes identificadores de nÃ³ no espaÃ§o de endereÃ§amento OPC UA (*Open Platform Communications Unified Architecture*):

| EndereÃ§o Modbus TCP | Tipo de Objeto Modbus | Nome da VariÃ¡vel / Tag | Tipo de Dado | Escala / Multiplicador | NodeID OPC UA (Namespace 2) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **00001** | Discrete Output Coil | DO_XV_101_CMD | Boolean | Direto (0 ou 1) | `ns=2;s=HRS.Setor100.XV101.Cmd` |
| **00002** | Discrete Output Coil | DO_XV_102_CMD | Boolean | Direto (0 ou 1) | `ns=2;s=HRS.Setor100.XV102.Cmd` |
| **00003** | Discrete Output Coil | DO_XV_103_CMD | Boolean | Direto (0 ou 1) | `ns=2;s=HRS.Setor100.XV103.Cmd` |
| **00004** | Discrete Output Coil | DO_YV_104A_CMD | Boolean | Direto (0 ou 1) | `ns=2;s=HRS.Setor100.YV104A.Cmd` |
| **00005** | Discrete Output Coil | DO_YV_104B_CMD | Boolean | Direto (0 ou 1) | `ns=2;s=HRS.Setor100.YV104B.Cmd` |
| **00006** | Discrete Output Coil | DO_M_201_CMD | Boolean | Direto (0 ou 1) | `ns=2;s=HRS.Setor200.M201.Cmd` |
| **00007** | Discrete Output Coil | DO_XV_201_CMD | Boolean | Direto (0 ou 1) | `ns=2;s=HRS.Setor200.XV201.Cmd` |
| **00008** | Discrete Output Coil | DO_XV_301_CMD | Boolean | Direto (0 ou 1) | `ns=2;s=HRS.Setor300.XV301.Cmd` |
| **00009** | Discrete Output Coil | DO_ALM_101_CMD | Boolean | Direto (0 ou 1) | `ns=2;s=HRS.Geral.ALM101.Cmd` |
| **10001** | Discrete Input Contact | DI_ESD_100_ST | Boolean | Invertido (1 = EmergÃªncia) | `ns=2;s=HRS.Seguranca.ESD100.State` |
| **10002** | Discrete Input Contact | DI_PSV_101_TRIP| Boolean | Direto (1 = Disparo) | `ns=2;s=HRS.Setor100.PSV101.Trip` |
| **10003** | Discrete Input Contact | DI_PSV_102_TRIP| Boolean | Direto (1 = Disparo) | `ns=2;s=HRS.Setor100.PSV102.Trip` |
| **10004** | Discrete Input Contact | DI_PSV_103_TRIP| Boolean | Direto (1 = Disparo) | `ns=2;s=HRS.Setor100.PSV103.Trip` |
| **10005** | Discrete Input Contact | DI_BV_301_ST | Boolean | Direto (1 = Conectado)| `ns=2;s=HRS.Setor300.BV301.State` |
| **10006** | Discrete Input Contact | DI_COM_301_ST | Boolean | Direto (1 = Link Ativo)| `ns=2;s=HRS.Setor300.COM301.State` |
| **10007** | Discrete Input Contact | DI_HS_301_CMD | Boolean | Direto (1 = Pressionado)|`ns=2;s=HRS.Setor300.HS301.Cmd` |
| **30001** | Input Register (16-bit) | AI_PT_101_VAL | Int16 | $P = \text{Reg} \times 0{,}1\text{ bar}$ | `ns=2;s=HRS.Setor100.PT101.Value` |
| **30002** | Input Register (16-bit) | AI_PT_102_VAL | Int16 | $P = \text{Reg} \times 0{,}1\text{ bar}$ | `ns=2;s=HRS.Setor100.PT102.Value` |
| **30003** | Input Register (16-bit) | AI_PT_103_VAL | Int16 | $P = \text{Reg} \times 0{,}1\text{ bar}$ | `ns=2;s=HRS.Setor100.PT103.Value` |
| **30004** | Input Register (16-bit) | AI_PT_201_VAL | Int16 | $P = \text{Reg} \times 0{,}1\text{ bar}$ | `ns=2;s=HRS.Setor200.PT201.Value` |
| **30005** | Input Register (16-bit) | AI_PT_301_VAL | Int16 | $P = \text{Reg} \times 0{,}1\text{ bar}$ | `ns=2;s=HRS.Setor300.PT301.Value` |
| **30006** | Input Register (16-bit) | AI_TT_101_VAL | Int16 | $T = (\text{Reg} \times 0{,}1) - 100$ Â°C | `ns=2;s=HRS.Setor100.TT101.Value` |
| **30007** | Input Register (16-bit) | AI_TT_102_VAL | Int16 | $T = (\text{Reg} \times 0{,}1) - 100$ Â°C | `ns=2;s=HRS.Setor100.TT102.Value` |
| **30008** | Input Register (16-bit) | AI_TT_103_VAL | Int16 | $T = (\text{Reg} \times 0{,}1) - 100$ Â°C | `ns=2;s=HRS.Setor100.TT103.Value` |
| **30009** | Input Register (16-bit) | AI_TT_201_VAL | Int16 | $T = (\text{Reg} \times 0{,}1) - 100$ Â°C | `ns=2;s=HRS.Setor200.TT201.Value` |
| **30010** | Input Register (16-bit) | AI_TT_301_VAL | Int16 | $T = (\text{Reg} \times 0{,}1) - 100$ Â°C | `ns=2;s=HRS.Setor300.TT301.Value` |
| **30011** | Input Register (16-bit) | AI_AT_101_VAL | Int16 | $\text{Conc} = \text{Reg} \times 0{,}1\text{ \% LFL}$| `ns=2;s=HRS.Setor100.AT101.Value` |
| **30012** | Input Register (16-bit) | AI_AT_102_VAL | Int16 | $\text{Conc} = \text{Reg} \times 0{,}1\text{ \% LFL}$| `ns=2;s=HRS.Setor100.AT102.Value` |
| **30013** | Input Register (16-bit) | AI_AT_103_VAL | Int16 | $\text{Conc} = \text{Reg} \times 0{,}1\text{ \% LFL}$| `ns=2;s=HRS.Setor100.AT103.Value` |
| **30014** | Input Register (16-bit) | AI_AT_301_VAL | Int16 | $\text{Conc} = \text{Reg} \times 0{,}1\text{ \% LFL}$| `ns=2;s=HRS.Setor300.AT301.Value` |
| **30015** | Input Register (16-bit) | AI_FT_301_VAL | Int16 | $\text{VazÃ£o} = \text{Reg} \times 0{,}001\text{ kg/min}$| `ns=2;s=HRS.Setor300.FT301.Value` |
| **40001** | Holding Register (16-bit)| AO_FCV_301_SP | Int16 | $0 \text{ a } 10000 \Rightarrow 0 \text{ a } 100{,}00\%$| `ns=2;s=HRS.Controle.FCV301.Setpoint` |
| **40002** | Holding Register (16-bit)| AO_VFD_201_SP | Int16 | $0 \text{ a } 10000 \Rightarrow 0 \text{ a } 100{,}00\%$| `ns=2;s=HRS.Controle.VFD201.Setpoint` |
| **40003** | Holding Register (16-bit)| PAR_APRR_TARGET | Int16 | $\text{Rampa} = \text{Reg} \times 0{,}1\text{ MPa/min}$| `ns=2;s=HRS.Parametros.TargetAPRR` |

---

# CAPÃTULO 6: ETAPA 01 - LÃ“GICA PROPOSICIONAL, BOOLEANA E INTERTRAVAMENTOS DE SEGURANÃ‡A

A primeira etapa metodolÃ³gica desenvolvida no repositÃ³rio da UNIFEI estabelece os alicerces matemÃ¡ticos discretos da estaÃ§Ã£o. Em ambientes industriais de alto risco, a lÃ³gica de controle nÃ£o pode ser formulada de maneira informal ou intuitiva. A Ã¡lgebra proposicional e o cÃ¡lculo booleano fornecem a linguagem formal exata para especificar as condiÃ§Ãµes permissivas de partida, os intertravamentos operacionais e os procedimentos automatizados de corte de emergÃªncia (*trip*).

## 6.1 FormalizaÃ§Ã£o LÃ³gica de Estados FÃ­sicos e VariÃ¡veis Discretas

Cada variÃ¡vel fÃ­sica contÃ­nua lida do campo Ã© discretizada atravÃ©s de comparadores de histerese programados no CLP, mapeando grandezas de pressÃ£o, temperatura e concentraÃ§Ã£o de gÃ¡s para proposiÃ§Ãµes atÃ´micas booleanas pertencentes ao conjunto fundamental $\{0, 1\}$ (Falso ou Verdadeiro):

$$p_{1,1} \iff (P_{\text{TK-101}} > 400\text{ bar})$$
$$p_{1,4} \iff (P_{\text{TK-101}} > 350\text{ bar})$$
$$t_{1,1} \iff (T_{\text{TK-101}} > 85^\circ\text{C})$$
$$g_{1,1} \iff (\text{GÃ¡s}_{\text{TK-101}} > 20\%\text{ LFL})$$
$$r_{1,1} \iff (\text{PSV-101 Atuada})$$
$$e_{1,1} \iff (\text{Parada de EmergÃªncia Ativa})$$
$$t_{2,1} \iff (T_{\text{Chiller}} \leq -40^\circ\text{C})$$
$$bv_{3,1} \iff (\text{VÃ¡lvula Breakaway Ãntegra})$$
$$c_{3,1} \iff (\text{ComunicaÃ§Ã£o SAE J2799 VÃ¡lida})$$
$$h_{3,1} \iff (\text{Comando de InÃ­cio Pressionado})$$

## 6.2 Conectivos Fundamentais, Tabelas-Verdade e Permissivos Operacionais

As equaÃ§Ãµes de intertravamento utilizam os conectivos lÃ³gicos da Ã¡lgebra de Boole:
* **ConjunÃ§Ã£o ($\land$ ou AND):** Exige que todas as condiÃ§Ãµes de seguranÃ§a sejam satisfeitas simultaneamente.
* **DisjunÃ§Ã£o ($\lor$ ou OR):** Permite a atuaÃ§Ã£o por qualquer uma das rotas ou gatilhos concorrentes.
* **NegaÃ§Ã£o ($\neg$ ou NOT):** Inverte o estado de integridade (sinaliza ausÃªncia de falha).
* **ImplicaÃ§Ã£o ($\rightarrow$):** Modela as regras de causa e efeito do sistema de seguranÃ§a: $\text{Causa} \rightarrow \text{Efeito}$.
* **Bi-implicaÃ§Ã£o ($\leftrightarrow$):** Expressa a equivalÃªncia lÃ³gica e definiÃ§Ãµes de estado operacional estrito.

### 6.2.1 Permissivo de Partida do Sistema de RefrigeraÃ§Ã£o (Chiller M-201)
O compressor e bombas do chiller sÃ³ podem ser acionados se nÃ£o houver parada de emergÃªncia ativa, nenhum vazamento de hidrogÃªnio no Setor 200 e a pressÃ£o do fluido refrigerante estiver saudÃ¡vel:

$$Perm_{M\text{-}201} = \neg e_{1,1} \land \neg g_{2,1} \land p_{2,1}$$

O comando efetivo de ligar o motor ($m_{2,1}$) resulta da conjunÃ§Ã£o do permissivo com a solicitaÃ§Ã£o tÃ©rmica:

$$m_{2,1} = Perm_{M\text{-}201} \land \neg t_{2,1}$$

### 6.2.2 Permissivos de AlimentaÃ§Ã£o dos Bancos de Armazenamento
As vÃ¡lvulas de corte dos bancos de armazenamento ($v_{1,1}, v_{1,2}, v_{1,3}$) sÃ£o governadas por equaÃ§Ãµes de intertravamento que exigem ausÃªncia total de alarmes crÃ­ticos no vaso correspondente:

$$v_{1,1} = \neg e_{1,1} \land \neg p_{1,1} \land \neg t_{1,1} \land \neg g_{1,1} \land \neg r_{1,1}$$
$$v_{1,2} = \neg e_{1,1} \land \neg p_{1,2} \land \neg t_{1,2} \land \neg g_{1,2} \land \neg r_{1,2}$$
$$v_{1,3} = \neg e_{1,1} \land \neg p_{1,3} \land \neg t_{1,3} \land \neg g_{1,3} \land \neg r_{1,3}$$

Se qualquer evento anÃ´malo ocorrer no tanque de baixa pressÃ£o (sobrepressÃ£o $p_{1,1}$, sobreaquecimento $t_{1,1}$, vazamento $g_{1,1}$, disparo mecÃ¢nico $r_{1,1}$ ou emergÃªncia geral $e_{1,1}$), a proposiÃ§Ã£o de comando $v_{1,1}$ transita imediatamente para 0 (Falso), provocando o assentamento instantÃ¢neo da vÃ¡lvula na sede.

### 6.2.3 Permissivo Global de Abastecimento Veicular (VÃ¡lvula de DispensaÃ§Ã£o XV-301)
A liberaÃ§Ã£o da injeÃ§Ã£o de gÃ¡s hidrogÃªnio a 700 bar no veÃ­culo FCEV atravÃ©s da abertura de XV-301 ($v_{3,1}$) Ã© a equaÃ§Ã£o mais complexa e restritiva da planta:

$$v_{3,1} = h_{3,1} \land c_{3,1} \land bv_{3,1} \land t_{2,1} \land \neg t_{3,1} \land \neg p_{3,1} \land \neg g_{3,1} \land \neg e_{1,1} \land (v_{1,1} \lor v_{1,2} \lor v_{1,3})$$

Tabela-verdade analÃ­tica simplificada demonstrando o comportamento da vÃ¡lvula de dispensaÃ§Ã£o diante de contingÃªncias crÃ­ticas:

| $h_{3,1}$ (BotÃ£o) | $c_{3,1}$ (IrDA) | $bv_{3,1}$ (Breakaway) | $t_{2,1}$ (T40 -40Â°C) | $\neg g_{3,1}$ (Sem GÃ¡s) | $\neg e_{1,1}$ (Sem ESD) | $v_{3,1}$ (VÃ¡lvula Aberta) | DiagnÃ³stico Operacional SCADA |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :--- |
| 1 | 1 | 1 | 1 | 1 | 1 | **1** | **Abastecimento Autorizado (Regime Normal)** |
| 0 | 1 | 1 | 1 | 1 | 1 | **0** | Aguardando acionamento do operador |
| 1 | 0 | 1 | 1 | 1 | 1 | **0** | **Intertravado: Falha de ComunicaÃ§Ã£o IrDA** |
| 1 | 1 | 0 | 1 | 1 | 1 | **0** | **Trip CrÃ­tico: Breakaway Desacoplada** |
| 1 | 1 | 1 | 0 | 1 | 1 | **0** | **Intertravado: Chiller Fora de Faixa (T > -40Â°C)** |
| 1 | 1 | 1 | 1 | 0 | 1 | **0** | **Trip CrÃ­tico: Vazamento Detectado na Ilha** |
| 1 | 1 | 1 | 1 | 1 | 0 | **0** | **Trip CrÃ­tico: BotÃ£o de EmergÃªncia Atuado** |

## 6.3 AnÃ¡lise AlgÃ©brica de Tautologias, ContradiÃ§Ãµes e ContingÃªncias

No desenvolvimento de cÃ³digo para sistemas crÃ­ticos de seguranÃ§a (Safety Instrumented Systems - SIS), falhas na formulaÃ§Ã£o algÃ©brica podem acarretar desastres severos ou paradas indevidas da planta:

1. **Tautologia ($\top$):** Uma expressÃ£o lÃ³gica que Ã© avaliada como Verdadeira sob qualquer atribuiÃ§Ã£o de verdade de suas variÃ¡veis. Em sistemas industriais, uma condiÃ§Ã£o de intertravamento que resulte em tautologia representa uma **falha catastrÃ³fica de projeto**, pois o comando de seguranÃ§a estaria permanentemente ativo ou bypassado, ignorando os sensores reais de campo.
   - Exemplo de anomalia de projeto: Se um programador definir inadvertidamente a liberaÃ§Ã£o de vÃ¡lvula como $Libera = p_{1,1} \lor \neg p_{1,1}$, o circuito sempre liberarÃ¡ a vÃ¡lvula, mesmo sob sobrepressÃ£o letal.
2. **ContradiÃ§Ã£o ($\bot$):** Uma expressÃ£o lÃ³gica que Ã© Falsa para todas as combinaÃ§Ãµes possÃ­veis de variÃ¡veis. Representa uma condiÃ§Ã£o inoperante ou travamento eterno da mÃ¡quina.
   - Exemplo: $Partida = e_{1,1} \land \neg e_{1,1}$ tornaria a estaÃ§Ã£o incapaz de iniciar operaÃ§Ã£o sob qualquer cenÃ¡rio.
3. **ContingÃªncia:** Uma expressÃ£o que pode assumir valores Verdadeiro ou Falso dependendo do estado instantÃ¢neo das variÃ¡veis de campo. Todos os intertravamentos e permissivos industriais vÃ¡lidos **devem ser estritamente contingÃªncias**.

No MÃ³dulo 1 do repositÃ³rio, algoritmos em Python avaliam sistematicamente se as equaÃ§Ãµes de seguranÃ§a da estaÃ§Ã£o comportam-se como contingÃªncias legÃ­timas em todo o espaÃ§o de estados de entrada ($2^N$ combinaÃ§Ãµes), provando a ausÃªncia formal de paradoxos ou brechas de seguranÃ§a.

## 6.4 Formas CanÃ´nicas: Forma Normal Disjuntiva (FND) e Conjuntiva (FNC)

A representaÃ§Ã£o de funÃ§Ãµes booleanas pode ser padronizada em duas formas canÃ´nicas clÃ¡ssicas:

### 6.4.1 Forma Normal Disjuntiva (FND ou Soma de Produtos - SOP)
A funÃ§Ã£o Ã© expressa como uma disjunÃ§Ã£o (OR) de mintermos, onde cada mintermo Ã© uma conjunÃ§Ã£o (AND) de literais (variÃ¡veis diretas ou negadas):

$$f(x_1, x_2, \dots, x_n) = \bigvee_{m_i \in M} m_i$$

A FND Ã© amplamente adotada na implementaÃ§Ã£o de matrizes de alarmes e rotinas de diagnÃ³stico, pois cada mintermo representa uma **combinaÃ§Ã£o especÃ­fica de falhas** capaz de desencadear um estado de alarme no SCADA.

### 6.4.2 Forma Normal Conjuntiva (FNC ou Produto de Somas - POS)
A funÃ§Ã£o Ã© expressa como uma conjunÃ§Ã£o (AND) de maxtermos, onde cada maxtermo Ã© uma disjunÃ§Ã£o (OR) de literais:

$$f(x_1, x_2, \dots, x_n) = \bigwedge_{M_i \in C} M_i$$

A FNC Ã© a base fundamental dos **circuitos de permissivo de partida e seguranÃ§a**, onde cada maxtermo atua como uma barreira de proteÃ§Ã£o independente que deve ser compulsoriamente satisfeita para que a saÃ­da seja mantida em nÃ­vel lÃ³gico alto.

## 6.5 OtimizaÃ§Ã£o LÃ³gica: Mapas de Karnaugh e Algoritmo de Quine-McCluskey

A minimizaÃ§Ã£o de equaÃ§Ãµes booleanas Ã© essencial na engenharia de automaÃ§Ã£o para:
1. Reduzir a quantidade de instruÃ§Ãµes executadas a cada ciclo de varredura (*scan cycle*) do CLP, assegurando tempos de resposta determinÃ­sticos.
2. Eliminar condiÃ§Ãµes de corrida (*glitches* e corridas estÃ¡ticas 1 e 0) causadas por transiÃ§Ãµes assimÃ©tricas de contatos fÃ­sicos.
3. Facilitar a auditoria humana e a manutenÃ§Ã£o do cÃ³digo Ladder e Diagrama de Blocos Funcionais (FBD).

### 6.5.1 MinimizaÃ§Ã£o por Mapa de Karnaugh
Para sistemas com atÃ© 4 ou 5 variÃ¡veis, os Mapas de Karnaugh organizam a tabela-verdade em uma matriz bidimensional codificada em cÃ³digo Gray (onde cÃ©lulas adjacentes diferem por apenas um bit). O agrupamento de potÃªncias de dois ($2, 4, 8, 16$) de cÃ©lulas com valor 1 permite eliminar variÃ¡veis redundantes pela aplicaÃ§Ã£o direta da propriedade de adjacÃªncia booleana:

$$A \cdot B + A \cdot \neg B = A(B + \neg B) = A \cdot 1 = A$$

### 6.5.2 Algoritmo de Quine-McCluskey (Tabular)
Para malhas complexas envolvendo 6 ou mais variÃ¡veis de campo (como o intertravamento global de abastecimento da estaÃ§Ã£o), o Mapa de Karnaugh torna-se impraticÃ¡vel. O repositÃ³rio implementa em Python o **mÃ©todo de Quine-McCluskey**, um procedimento tabular exato e computacionalmente automatizÃ¡vel estruturado em duas etapas:
1. **DeterminaÃ§Ã£o dos Implicantes Primos:** Os mintermos sÃ£o agrupados pela quantidade de nÃºmeros 1 em sua representaÃ§Ã£o binÃ¡ria. Pares adjacentes com distÃ¢ncia de Hamming unitÃ¡ria sÃ£o sucessivamente combinados e marcados, substituindo a variÃ¡vel divergente por um traÃ§o (*don't care* `-`), atÃ© que nenhum termo adicional possa ser reduzido.
2. **SeleÃ§Ã£o da Cobertura MÃ­nima (Tabela de Implicantes Primos):** ConstrÃ³i-se uma matriz relacionando os implicantes primos obtidos aos mintermos originais. Identificam-se os **implicantes primos essenciais** (aqueles que cobrem mintermos que nÃ£o sÃ£o cobertos por nenhum outro implicante). Se restar uma cobertura cÃ­clica residual, aplica-se o mÃ©todo de Petrick para encontrar a soluÃ§Ã£o de custo mÃ­nimo de literais.

Exemplo de reduÃ§Ã£o implementada na Aula 05 do projeto para a malha de acionamento do alarme geral:
- ExpressÃ£o NÃ£o-Otimizada: 14 literais e mÃºltiplos termos redundantes.
- ExpressÃ£o MÃ­nima Quine-McCluskey: 4 literais essenciais, economizando memÃ³ria do processador e erradicando estados indefinidos.

## 6.6 Predicados de Primeira Ordem e Quantificadores em Redes de Sensores

Enquanto a lÃ³gica proposicional trata variÃ¡veis como entidades atÃ´micas isoladas, a **LÃ³gica de Predicados de Primeira Ordem** introduz quantificadores ($\forall$ - "para todo" e $\exists$ - "existe") e predicados funcionais $P(x)$, permitindo formalizar o comportamento de redes distribuÃ­das de sensores com mÃºltiplos nÃ³s redundantes.

Seja $S = \{s_1, s_2, \dots, s_k\}$ o conjunto de todos os detectores perimÃ©tricos de gÃ¡s hidrogÃªnio instalados na planta, e $Vazamento(s)$ o predicado que indica se o sensor $s$ detectou concentraÃ§Ã£o superior a $20\%\text{ LFL}$:

* **CondiÃ§Ã£o de Integridade Ambiental Plena (Todos SaudÃ¡veis):**
  $$\forall s \in S, \quad \neg Vazamento(s)$$
  A estaÃ§Ã£o sÃ³ opera em regime comercial irrestrito se **todos** os sensores da rede atestarem ausÃªncia de hidrogÃªnio atmosfÃ©rico.

* **CondiÃ§Ã£o de Disparo de Alarme de EmergÃªncia (Existe Falha):**
  $$\exists s \in S \quad | \quad Vazamento(s)$$
  Basta a existÃªncia de **pelo menos um** sensor reportando anomalia para que a rotina de evacuaÃ§Ã£o e corte seja iniciada.

* **Dualidade de De Morgan para Quantificadores:**
  $$\neg (\forall s, \neg Vazamento(s)) \iff \exists s, Vazamento(s)$$
  Essa relaÃ§Ã£o formal garante que a negaÃ§Ã£o da integridade universal Ã© rigorosamente equivalente Ã  existÃªncia de pelo menos um foco de vazamento ativo.

## 6.7 Regras de InferÃªncia Dedutiva e ResoluÃ§Ã£o Proposicional

A comprovaÃ§Ã£o de que o sistema de controle jamais violarÃ¡ uma restriÃ§Ã£o de seguranÃ§a Ã© executada por **mÃ©todos de deduÃ§Ã£o formal**. O SCADA Core utiliza os princÃ­pios clÃ¡ssicos da lÃ³gica matemÃ¡tica:

1. **Modus Ponens:**
   $$\frac{A \rightarrow B, \quad A}{\therefore B}$$
   Se a regra estipula que "PressÃ£o Acima de 400 bar implica Abrir VÃ¡lvula de AlÃ­vio" ($p_{1,1} \rightarrow PSV_{101}$) e o transmissor confirma que a pressÃ£o atingiu 405 bar ($p_{1,1} = 1$), deduz-se infalivelmente que a vÃ¡lvula de alÃ­vio mecÃ¢nico deve abrir ($PSV_{101} = 1$).

2. **Modus Tollens:**
   $$\frac{A \rightarrow B, \quad \neg B}{\therefore \neg A}$$
   Se a abertura da vÃ¡lvula solenoide de enchimento exige que a temperatura do chiller esteja a $-40^\circ\text{C}$ ($v_{3,1} \rightarrow t_{2,1}$) e o sensor indica que o chiller estÃ¡ a $-25^\circ\text{C}$ ($\neg t_{2,1} = 1$), deduz-se diretamente que a vÃ¡lvula nÃ£o pode estar aberta ($\neg v_{3,1}$).

3. **PrincÃ­pio da ResoluÃ§Ã£o Proposicional:**
   Utilizado em sistemas de prova automÃ¡tica de teoremas (*Automated Theorem Proving*). Dadas duas clÃ¡usulas na forma normal conjuntiva contendo literais complementares:
   $$\frac{A \lor B, \quad \neg A \lor C}{\therefore B \lor C}$$
   O mÃ©todo da resoluÃ§Ã£o reduz iterativamente a base de conhecimento a uma contradiÃ§Ã£o ($\bot$ ou clÃ¡usula vazia $\square$) para provar a validade de uma hipÃ³tese de seguranÃ§a por reduÃ§Ã£o ao absurdo (*Reductio ad Absurdum*).

## 6.8 Arquitetura de Intertravamento SIS e VotaÃ§Ã£o Redundante (1oo2, 2oo3)

Para atingir nÃ­veis de integridade SIL-2 e SIL-3 nas malhas de trip da estaÃ§Ã£o de reabastecimento de hidrogÃªnio da UNIFEI, a lÃ³gica proposicional Ã© combinada com votaÃ§Ã£o redundante de mÃºltiplos transmissores independentes instalados no mesmo ponto de mediÃ§Ã£o:

* **Arquitetura 1oo2 (Um de Dois - Alta SeguranÃ§a):**
  $$Trip_{1oo2} = Sensor_A \lor Sensor_B$$
  O trip Ã© acionado se o Sensor A **OU** o Sensor B detectar condiÃ§Ã£o de sobrepressÃ£o. Essa configuraÃ§Ã£o minimiza a probabilidade de falhas perigosas nÃ£o detectadas ($PFD$), sendo a preferida para circuitos de parada de emergÃªncia ESD.

* **Arquitetura 2oo2 (Dois de Dois - Alta Disponibilidade):**
  $$Trip_{2oo2} = Sensor_A \land Sensor_B$$
  O trip sÃ³ atua se **ambos** os instrumentos concordarem. Reduz a probabilidade de falsos alarmes, porÃ©m aumenta o risco de falha sob demanda caso um dos instrumentos trave congelado em valor baixo.

* **Arquitetura 2oo3 (Dois de TrÃªs - TolerÃ¢ncia a Falhas Tripla / TMR):**
  $$Trip_{2oo3} = (Sensor_A \land Sensor_B) \lor (Sensor_A \land Sensor_C) \lor (Sensor_B \land Sensor_C)$$
  Esta Ã© a arquitetura padrÃ£o ouro da indÃºstria aeroespacial e petroquÃ­mica de alta pressÃ£o. Permite que um dos instrumentos sofra pane mecÃ¢nica total ou descalibraÃ§Ã£o severa sem provocar o disparo indevido da estaÃ§Ã£o de abastecimento e sem comprometer a capacidade do sistema de atuar com precisÃ£o diante de uma sobrepressÃ£o real.

---

# CAPÃTULO 7: SISTEMAS ESPECIALISTAS E MOTORES DE INFERÃŠNCIA DIAGNÃ“STICA

O monitoramento supervisÃ³rio de processos perigosos exige mais do que a simples exibiÃ§Ã£o de valores numÃ©ricos em tempo real. Quando um desvio operacional ocorre em uma estaÃ§Ã£o de hidrogÃªnio a 700 bar, o operador pode ser inundado por dezenas de alarmes simultÃ¢neos decorrentes do efeito dominÃ³ em cascata (avalanche de alarmes). O projeto **SCADA Core** implementa um **Sistema Especialista Baseado em Regras** (*Rule-Based Expert System*) capaz de correlacionar sintomas complexos, isolar a causa raiz do distÃºrbio e sugerir aÃ§Ãµes corretivas automÃ¡ticas em fraÃ§Ãµes de segundo.

## 7.1 Fundamentos de Sistemas Baseados em Regras (Rule-Based Systems - RBS)

Um Sistema Baseado em Regras Ã© uma ramificaÃ§Ã£o clÃ¡ssica da InteligÃªncia Artificial SimbÃ³lica estruturada em trÃªs componentes interdependentes:

```
    +-------------------------------------------------------------+
    |                    MEMÃ“RIA DE TRABALHO                      |
    |  Fatos Atuais do Processo: {p11=1, t11=0, g11=0, v11=0...} |
    +-------------------------------------------------------------+
               ^                                           |
               | (Leitura de Fatos)                        | (AtualizaÃ§Ã£o)
               v                                           v
    +-----------------------+                    +----------------+
    |  MOTOR DE INFERÃŠNCIA  |<-------------------|     BASE DE    |
    |   - Forward Chaining  | (Casamento         |  CONHECIMENTO  |
    |   - Backward Chaining |  de PadrÃµes)       |   (Regras R1   |
    |   - ResoluÃ§Ã£o Conflito|                    |     atÃ© R25)   |
    +-----------------------+                    +----------------+
               |
               v
    +-------------------------------------------------------------+
    |                    DIAGNÃ“STICO FINAL SCADA                  |
    |   Alarme Consolidado + Causa Raiz + AÃ§Ã£o Corretiva SIS      |
    +-------------------------------------------------------------+
```

1. **Base de Conhecimento (Knowledge Base - KB):** RepositÃ³rio permanente que codifica a experiÃªncia dos engenheiros de seguranÃ§a, dados de manuais de fabricantes e requisitos das normas SAE J2601 e ISO 19880-1 na forma declarativa de regras lÃ³gicas do tipo:
   $$\text{SE } \langle \text{Premissa}_1 \land \text{Premissa}_2 \land \dots \land \text{Premissa}_k \rangle \quad \text{ENTÃƒO } \langle \text{ConclusÃ£o / AÃ§Ã£o} \rangle$$
2. **MemÃ³ria de Trabalho (Working Memory - WM):** Conjunto dinÃ¢mico de fatos comprovados que refletem o estado atual dos sensores, atuadores e modos operacionais da planta fÃ­sica adquiridos ciclicamente pelo SCADA via Modbus/OPC UA.
3. **Motor de InferÃªncia (Inference Engine):** O algoritmo de raciocÃ­nio lÃ³gico que realiza o casamento de padrÃµes (*pattern matching*) entre a base de conhecimento e a memÃ³ria de trabalho, determinando quais regras tornam-se ativas (*agenda de execuÃ§Ã£o*) e disparando conclusÃµes seguras.

## 7.2 Estrutura da Base de Conhecimento e Regras de ProduÃ§Ã£o IF-THEN

A base de conhecimento do SCADA Core compreende 25 regras de produÃ§Ã£o rigorosamente modeladas para cobrir os trÃªs setores da planta HRS:

* **Regra R01 (DetecÃ§Ã£o de SobrepressÃ£o no Banco LP):**
  $\text{SE } (P_{\text{TK-101}} > 400\text{ bar}) \text{ E } (\text{PSV-101 NÃ£o Disparada}) \text{ ENTÃƒO } \text{Gerar Alarme CrÃ­tico HH: SobrepressÃ£o no Banco LP com Risco de Rompimento; Comandar Fechamento de XV-101 e Desenergizar Compressores.}$
* **Regra R02 (ConfirmaÃ§Ã£o de Disparo MecÃ¢nico de AlÃ­vio LP):**
  $\text{SE } (r_{1,1} == 1) \text{ E } (P_{\text{TK-101}} > 380\text{ bar}) \text{ ENTÃƒO } \text{Confirmar AtuaÃ§Ã£o Normal da VÃ¡lvula de SeguranÃ§a PSV-101; Ativar VentilaÃ§Ã£o de Teto e Bloquear Entrada de H2.}$
* **Regra R03 (AlÃ­vio Indevido por Fadiga de Mola na PSV LP):**
  $\text{SE } (r_{1,1} == 1) \text{ E } (P_{\text{TK-101}} < 300\text{ bar}) \text{ ENTÃƒO } \text{Gerar DiagnÃ³stico de Falha MecÃ¢nica: Rompimento Prematuro ou Perda de Carga de Mola da PSV-101; Isolar Vaso TK-101.}$
* **Regra R04 (Vazamento CrÃ­tico com Risco de IgniÃ§Ã£o no Setor 100):**
  $\text{SE } (g_{1,1} == 1) \text{ E } (P_{\text{TK-101}} \text{ Decrescendo Rapidamente}) \text{ ENTÃƒO } \text{Confirmar Vazamento Massivo de H2 em TK-101; Disparar ESD Geral e Cortar Energia ElÃ©trica da SubestaÃ§Ã£o.}$
* **Regra R05 (Sobreaquecimento do Banco LP por CompressÃ£o Excessiva):**
  $\text{SE } (t_{1,1} == 1) \text{ E } (P_{\text{TK-101}} > 350\text{ bar}) \text{ ENTÃƒO } \text{Alerta de Sobreaquecimento por CompressÃ£o RÃ¡pida; Inibir Recarga de TK-101 e Acionar VentilaÃ§Ã£o ForÃ§ada.}$
* **Regra R06 (SobrepressÃ£o CrÃ­tica no Banco MP):**
  $\text{SE } (P_{\text{TK-102}} > 700\text{ bar}) \text{ ENTÃƒO } \text{Bloquear VÃ¡lvula XV-102 e Parar Segundo EstÃ¡gio de CompressÃ£o C-102.}$
* **Regra R07 (Vazamento de H2 no Banco MP):**
  $\text{SE } (g_{1,2} == 1) \text{ ENTÃƒO } \text{Despressurizar Linha MP para Queimador/Vent e Isolar TK-102.}$
* **Regra R08 (SobrepressÃ£o Severa no Banco HP):**
  $\text{SE } (P_{\text{TK-103}} > 1000\text{ bar}) \text{ ENTÃƒO } \text{Trip Imediato de C-102, Fechamento de XV-103 e Abertura de Linha de AlÃ­vio Controlado.}$
* **Regra R09 (Vazamento de H2 no Banco HP):**
  $\text{SE } (g_{1,3} == 1) \text{ ENTÃƒO } \text{Isolamento HermÃ©tico de TK-103 e AtivaÃ§Ã£o do Sistema de SupressÃ£o por NitrogÃªnio N2.}$
* **Regra R10 (ComutaÃ§Ã£o Indevida de Cascata - Risco de Fluxo Reverso):**
  $\text{SE } (y_{1,4a} == 1) \text{ E } (y_{1,4b} == 1) \text{ ENTÃƒO } \text{Erro de Controle do Manifold: Bobinas Simultaneamente Energizadas; Desenergizar Imediatamente XV-104 (Retorno ao Centro Fechado).}$
* **Regra R11 (Incapacidade TÃ©rmica do Chiller):**
  $\text{SE } (m_{2,1} == 1) \text{ E } (Tempo_{OperaÃ§Ã£o} > 10\text{ min}) \text{ E } (T_{\text{Chiller}} > -33^\circ\text{C}) \text{ ENTÃƒO } \text{Falha de Capacidade do Sistema CriogÃªnico; Bloquear InÃ­cio de Abastecimento SAE J2601.}$
* **Regra R12 (Falha MecÃ¢nica no Motor do Chiller):**
  $\text{SE } (m_{2,1} == 1) \text{ E } (\text{Contato Auxiliar RUN} == 0) \text{ ENTÃƒO } \text{Disparo de Disjuntor-Motor ou Sobrecarga TÃ©rmica em M-201; Alarme de ManutenÃ§Ã£o no Chiller.}$
* **Regra R13 (Perda de Fluido TÃ©rmico SecundÃ¡rio):**
  $\text{SE } (P_{\text{Refrigerante}} < 2\text{ bar}) \text{ E } (m_{2,1} == 1) \text{ ENTÃƒO } \text{Vazamento de Fluido Refrigerante no Chiller; Desligar Imediatamente M-201 para Evitar CavitaÃ§Ã£o.}$
* **Regra R14 (ObstruÃ§Ã£o TÃ©rmica por Congelamento):**
  $\text{SE } (T_{\text{Chiller}} < -55^\circ\text{C}) \text{ ENTÃƒO } \text{Risco de Congelamento de Linhas e Bloqueio HidrÃ¡ulico; Modular Inversor VFD-201 para ReduÃ§Ã£o de RotaÃ§Ã£o.}$
* **Regra R15 (ViolaÃ§Ã£o do Protocolo T40 no Abastecimento):**
  $\text{SE } (v_{3,1} == 1) \text{ E } (T_{\text{Chiller}} > -33^\circ\text{C}) \text{ ENTÃƒO } \text{ViolaÃ§Ã£o da Norma SAE J2601: Temperatura de InjeÃ§Ã£o NÃ£o-Conforme; Interromper Abastecimento e Fechar XV-301.}$
* **Regra R16 (Perda de ComunicaÃ§Ã£o Ã“ptica SAE J2799 Durante Enchimento):**
  $\text{SE } (v_{3,1} == 1) \text{ E } (c_{3,1} == 0) \text{ E } (Tempo_{Perda} > 500\text{ ms}) \text{ ENTÃƒO } \text{Transitar para Modo Abastecimento NÃ£o-Comunicante ou Encerrar Ciclo se PressÃ£o > 500 bar.}$
* **Regra R17 (Sobreaquecimento do Tanque do VeÃ­culo):**
  $\text{SE } (v_{3,1} == 1) \text{ E } (T_{\text{VeÃ­culo}} > 80^\circ\text{C}) \text{ ENTÃƒO } \text{Alarme de PrÃ©-Limite TÃ©rmico do Tanque Tipo IV; Reduzir Taxa APRR em 50%.}$
* **Regra R18 (Trip TÃ©rmico CrÃ­tico do VeÃ­culo):**
  $\text{SE } (v_{3,1} == 1) \text{ E } (T_{\text{VeÃ­culo}} > 85^\circ\text{C}) \text{ ENTÃƒO } \text{Trip CrÃ­tico: Limite Estrutural do Liner Excedido; Fechar XV-301 Imediatamente.}$
* **Regra R19 (SobrepressÃ£o no VeÃ­culo - Overpressure):**
  $\text{SE } (P_{\text{VeÃ­culo}} > 875\text{ bar}) \text{ ENTÃƒO } \text{Trip CrÃ­tico: PressÃ£o Acima de 1,25 x P_nominal; Abortar Enchimento e Aliviar Mangueira.}$
* **Regra R20 (Desacoplamento Acidental de Mangueira / Drive-Away):**
  $\text{SE } (v_{3,1} == 1) \text{ E } (bv_{3,1} == 0) \text{ ENTÃƒO } \text{VeÃ­culo Movimentou-se com Bico Conectado: Ruptura da Breakaway; Fechar XV-301 e XV-201 em < 50 ms.}$
* **Regra R21 (Vazamento de H2 no Gabinete do Dispensador):**
  $\text{SE } (g_{3,1} == 1) \text{ ENTÃƒO } \text{PresenÃ§a de Atmosfera Explosiva na Ãrea de Abastecimento; Desligar IHM do Dispensador e Fechar Bloqueios.}$
* **Regra R22 (EqualizaÃ§Ã£o Antecipada na Cascata LP):**
  $\text{SE } (v_{3,1} == 1) \text{ E } (\text{Etapa Cascata} == \text{LP}) \text{ E } (P_{\text{VeÃ­culo}} \geq P_{\text{TK-101}} - 15\text{ bar}) \text{ ENTÃƒO } \text{TransiÃ§Ã£o AutomÃ¡tica de Cascata: Comutar de LP para MP (Desenergizar Bobina A).}$
* **Regra R23 (EqualizaÃ§Ã£o Antecipada na Cascata MP):**
  $\text{SE } (v_{3,1} == 1) \text{ E } (\text{Etapa Cascata} == \text{MP}) \text{ E } (P_{\text{VeÃ­culo}} \geq P_{\text{TK-102}} - 20\text{ bar}) \text{ ENTÃƒO } \text{TransiÃ§Ã£o AutomÃ¡tica de Cascata: Comutar de MP para HP (Energizar Bobina B).}$
* **Regra R24 (ConclusÃ£o Nominal de Abastecimento 700 bar):**
  $\text{SE } (v_{3,1} == 1) \text{ E } (P_{\text{VeÃ­culo}} \geq 700\text{ bar}) \text{ E } (SOC \geq 98\%) \text{ ENTÃƒO } \text{Abastecimento ConcluÃ­do com Sucesso; Fechar XV-301 e Iniciar DespressurizaÃ§Ã£o do Bico para Desengate.}$
* **Regra R25 (AtuaÃ§Ã£o da Parada de EmergÃªncia Geral):**
  $\text{SE } (e_{1,1} == 1) \text{ ENTÃƒO } \text{Estado de EmergÃªncia Geral Ativo: Desenergizar Todas as SaÃ­das DO, Ligar Sirene ALM-101 e Travar Sistema em Modo Seguro.}$

## 7.3 Motor de InferÃªncia por Encadeamento para Frente (Forward Chaining)

O **Encadeamento para Frente** (*Data-Driven*) Ã© o mecanismo natural para o sistema de monitoramento em tempo real do SCADA Core. O raciocÃ­nio parte dos **dados brutos coletados** na memÃ³ria de trabalho e progride em direÃ§Ã£o Ã s conclusÃµes lÃ³gicas:

```
[ Sensores de Campo ] ---> [ Fatos na MemÃ³ria ] ---> [ Varredura das Regras ] ---> [ ConclusÃµes / Trips ]
```

### 7.3.1 Algoritmo Passo a Passo do Forward Chaining
1. **AquisiÃ§Ã£o:** O SCADA lÃª as variÃ¡veis do CLP e insere novos fatos na MemÃ³ria de Trabalho ($\text{WM}$).
2. **Casamento de PadrÃµes (*Match*):** O motor varre a Base de Conhecimento ($\text{KB}$) e identifica todas as regras cujas premissas sÃ£o inteiramente satisfeitas pelos fatos presentes na $\text{WM}$. As regras ativadas sÃ£o incluÃ­das no **Conjunto de Conflito** (*Conflict Set*).
3. **ResoluÃ§Ã£o de Conflitos (*Conflict Resolution*):** Se mÃºltiplas regras puderem ser disparadas ao mesmo tempo, aplica-se uma estratÃ©gia determinÃ­stica de priorizaÃ§Ã£o:
   - **Prioridade de SeguranÃ§a:** Regras associadas a paradas de emergÃªncia (ESD e Vazamentos de GÃ¡s) possuem prioridade sobre regras de transiÃ§Ã£o operacional de cascata.
   - **Especificidade:** Regras com premissas mais detalhadas tÃªm precedÃªncia sobre regras genÃ©ricas.
   - **RecÃªncia:** Fatos gerados no ciclo de varredura mais recente sÃ£o priorizados.
4. **Disparo (*Act / Fire*):** A regra selecionada Ã© executada. Sua conclusÃ£o Ã© adicionada Ã  memÃ³ria de trabalho como um novo fato deduzido. Se a aÃ§Ã£o envolver um comando de controle (ex.: fechar vÃ¡lvula), a saÃ­da fÃ­sica Ã© transmitida ao CLP.
5. **IteraÃ§Ã£o:** O ciclo repete-se atÃ© que nenhuma nova regra possa ser disparada (*quiescÃªncia do sistema*).

## 7.4 Motor de InferÃªncia por Encadeamento para TrÃ¡s (Backward Chaining)

O **Encadeamento para TrÃ¡s** (*Goal-Driven*) Ã© empregado no SCADA Core para **auditoria pÃ³s-falha e diagnÃ³stico da causa raiz**. Em vez de partir dos dados, o motor parte de uma **hipÃ³tese ou objetivo** (ex.: "Por que a vÃ¡lvula de dispensaÃ§Ã£o XV-301 fechou abruptamente aos 2 minutos de abastecimento?") e retrocede atravÃ©s das regras para descobrir quais fatos primÃ¡rios originaram o evento:

$$\text{Objetivo Inicial: Investigar } \neg v_{3,1}$$

O motor consulta as regras que possuem $\neg v_{3,1}$ como conclusÃ£o (Regras R15, R16, R18, R19, R20, R25). Para cada regra candidata, transforma as premissas em novos sub-objetivos:
- Sub-objetivo 1: Aconteceu violaÃ§Ã£o tÃ©rmica do Chiller ($T_{\text{Chiller}} > -33^\circ\text{C}$)?
- Sub-objetivo 2: Houve rompimento da Breakaway ($bv_{3,1} == 0$)?
- Sub-objetivo 3: Houve perda de comunicaÃ§Ã£o Ã³ptica ($c_{3,1} == 0$)?

O motor consulta os histÃ³ricos analÃ³gicos e discretos gravados no banco de dados do SCADA atÃ© encontrar a premissa fundamental causadora, exibindo na tela do operador o diagrama em Ã¡rvore explicativo do evento.

## 7.5 Matriz de CorrelaÃ§Ã£o Sintoma-Causa-AÃ§Ã£o para DiagnÃ³stico Preditivo

A tabela abaixo sintetiza a inteligÃªncia diagnÃ³stica integrada ao SCADA Core, correlacionando os sintomas primÃ¡rios detectados pelos sensores de campo Ã s causas fÃ­sicas fundamentais e Ã s aÃ§Ãµes automatizadas de mitigaÃ§Ã£o:

| CÃ³digo de Falha | Sintomas Observados no SupervisÃ³rio SCADA | Causa Raiz ProvÃ¡vel | AÃ§Ã£o Automatizada de MitigaÃ§Ã£o (SIS / SCADA) |
| :--- | :--- | :--- | :--- |
| **FLT-001** | Queda de $P_{\text{TK-101}}$, elevaÃ§Ã£o de $g_{1,1} > 20\%$, vazÃ£o reversa nula | Vazamento de flange ou fissura de fadiga no vaso LP | Fechar XV-101, acionar exaustÃ£o forÃ§ada perimetral e sirene amarela |
| **FLT-002** | Disparo de fim de curso $r_{1,1}$ com $P_{\text{TK-101}} < 350\text{ bar}$ | Perda de calibraÃ§Ã£o ou quebra de mola da vÃ¡lvula PSV-101 | Bloquear alimentaÃ§Ã£o de TK-101, redirecionar compressores para TK-102 |
| **FLT-003** | Corrente do motor de C-101 oscilando, temperatura de carcaÃ§a elevada | Desgaste ou falha de lubrificaÃ§Ã£o no pistÃ£o de 1Âº estÃ¡gio | Reduzir rotaÃ§Ã£o via inversor e agendar parada de manutenÃ§Ã£o preditiva |
| **FLT-004** | $m_{2,1} == 1$, porÃ©m temperatura TT-201 nÃ£o atinge $-40^\circ\text{C}$ | Perda de gÃ¡s refrigerante (glicol) ou incrustaÃ§Ã£o no chiller | Inibir autorizaÃ§Ã£o de partida para novos abastecimentos SAE J2601 |
| **FLT-005** | TT-201 atinge $-52^\circ\text{C}$, diferencial de pressÃ£o em HEX-201 elevado | Congelamento de umidade residual com bloqueio criogÃªnico | Reduzir refrigeraÃ§Ã£o, injetar nitrogÃªnio seco N2 aquecido para degelo |
| **FLT-006** | Sinal de PT-301 oscilando $\pm 50\text{ bar}$ durante rampa de dispensaÃ§Ã£o | CavitaÃ§Ã£o ou instabilidade na vÃ¡lvula solenoide moduladora | Comutar para modo de controle de rampa em malha aberta conservadora |
| **FLT-007** | DesconexÃ£o do sinal $c_{3,1}$ com pressÃ£o de enchimento em 600 bar | Sujeira Ã³ptica ou desalinhamento no acoplamento IrDA do bico | Manter rampa em taxa reduzida por 500 ms; se persistir, corte seguro |
| **FLT-008** | InterrupÃ§Ã£o instantÃ¢nea de $bv_{3,1}$ com vazÃ£o mÃ¡ssica elevada | VeÃ­culo engatou marcha e partiu com a mangueira acoplada | Fechamento imediato de XV-301 e XV-201; disparo de alarme sonoro geral |
| **FLT-009** | PressÃ£o no bico PT-301 ultrapassa 875 bar em regime transiente | Falha no sensor de fim de enchimento do veÃ­culo | Disparo de intertravamento de sobrepressÃ£o (Trip SIL-3) e alÃ­vio |
| **FLT-010** | DetecÃ§Ã£o de $g_{3,1} > 40\%$ LFL na proximidade do dispenser | Ruptura de selo elastomÃ©rico do bico de abastecimento | Corte imediato de energia elÃ©trica da ilha externa e bloqueio de bico |

## 7.6 ImplementaÃ§Ã£o Computacional e Algoritmos de DiagnÃ³stico em Tempo Real

No MÃ³dulo 1 do repositÃ³rio da UNIFEI, o motor de inferÃªncia Ã© estruturado em classes modulares em Python, integrando o processamento de regras com o pipeline de dados de simulaÃ§Ã£o:

```python
class Fato:
    def __init__(self, nome, valor, timestamp=None):
        self.nome = nome
        self.valor = valor
        self.timestamp = timestamp

class Regra:
    def __init__(self, id_regra, premissas, conclusao, prioridade=1):
        self.id = id_regra
        self.premissas = premissas      # DicionÃ¡rio de condiÃ§Ãµes {fato: valor_esperado}
        self.conclusao = conclusao      # DicionÃ¡rio de novos fatos / aÃ§Ãµes
        self.prioridade = prioridade    # Prioridade de resoluÃ§Ã£o de conflito

class MotorInferenciaSCADA:
    def __init__(self):
        self.base_conhecimento = []
        self.memoria_trabalho = {}
        self.historico_disparos = []

    def adicionar_regra(self, regra):
        self.base_conhecimento.append(regra)
        # Ordena regras por nÃ­vel decrescente de prioridade
        self.base_conhecimento.sort(key=lambda r: r.prioridade, reverse=True)

    def assertar_fato(self, nome, valor):
        self.memoria_trabalho[nome] = valor

    def executar_forward_chaining(self):
        novos_fatos_gerados = True
        passos = 0
        while novos_fatos_gerados and passos < 100:
            novos_fatos_gerados = False
            passos += 1
            for regra in self.base_conhecimento:
                # Verifica se a regra jÃ¡ foi disparada com os fatos atuais
                if regra.id in self.historico_disparos:
                    continue
                # Casamento de padrÃµes (Pattern Matching)
                premissas_atendidas = True
                for chave, val in regra.premissas.items():
                    if chave not in self.memoria_trabalho or self.memoria_trabalho[chave] != val:
                        premissas_atendidas = False
                        break
                if premissas_atendidas:
                    # Dispara a regra e atualiza a MemÃ³ria de Trabalho
                    for chave, val in regra.conclusao.items():
                        self.memoria_trabalho[chave] = val
                    self.historico_disparos.append(regra.id)
                    novos_fatos_gerados = True
                    break # Retorna ao topo para reavaliar conflitos com fatos novos
        return self.memoria_trabalho
```

## 7.7 AvaliaÃ§Ã£o de EficÃ¡cia do MÃ³dulo de DiagnÃ³stico

A avaliaÃ§Ã£o formal conduzida no notebook `10 - Avaliacao Modulo 1 Motor de Intertravamento e Diagnostico.ipynb` submeteu o motor de inferÃªncia a baterias de testes estressantes com mais de 10.000 vetores de dados sintÃ©ticos simulando:
1. Comportamento nominal de abastecimento (transiÃ§Ã£o suave de cascata LP $\rightarrow$ MP $\rightarrow$ HP sem alarmes falsos).
2. CenÃ¡rios de falha isolada (vazamento pontual, sub-resfriamento, sobrepressÃ£o).
3. CenÃ¡rios de falhas simultÃ¢neas concorrentes (ex.: vazamento de gÃ¡s concomitante com perda de comunicaÃ§Ã£o Ã³ptica e atuaÃ§Ã£o de botÃ£o de emergÃªncia).

Em todos os cenÃ¡rios, o motor demonstrou:
* **Cobertura Completa de SeguranÃ§a:** 100% dos eventos crÃ­ticos desencadearam comandos de corte seguro em tempo de inferÃªncia inferior a **1,5 milissegundos** no processador de controle.
* **Isolamento de Causa Raiz:** O algoritmo de Backward Chaining identificou com precisÃ£o a fonte primÃ¡ria de distÃºrbio em 98,7% dos casos complexos de avalanches de alarmes simuladas.

---

# CAPÃTULO 8: ETAPA 02 - TEORIA DOS GRAFOS E MODELAGEM TOPOLÃ“GICA DE TUBULAÃ‡Ã•ES

A segunda etapa de inovaÃ§Ã£o desenvolvida no projeto da UNIFEI transcende a visÃ£o tradicional de automaÃ§Ã£o ao converter a infraestrutura fÃ­sica de tubulaÃ§Ãµes, vÃ¡lvulas e vasos em uma **estrutura formal de dados da Teoria dos Grafos**. Essa abordagem matemÃ¡tica viabiliza o tratamento computacional da planta por algoritmos clÃ¡ssicos de otimizaÃ§Ã£o de redes, permitindo que o sistema SCADA execute roteamento dinÃ¢mico, planejamento de manutenÃ§Ãµes e desvios inteligentes de fluxo em tempo real.

## 8.1 Modelagem Estrutural por DÃ­grafos Ponderados $G = (V, E, W)$

A rede de tubulaÃ§Ã£o de alta pressÃ£o de hidrogÃªnio Ã© formalmente definida como um **Grafo Dirigido e Ponderado (DÃ­grafo)**:

$$G = (V, E, W)$$

Onde:
1. **$V = \{v_1, v_2, \dots, v_n\}$** Ã© o conjunto finito de **vÃ©rtices (nÃ³s)**, representando os equipamentos de processo industriais (suprimento externo, vasos de armazenamento, trocador criogÃªnico, manifold e dispensador).
2. **$E \subseteq V \times V$** Ã© o conjunto de **arestas dirigidas (arcos)**, representando os trechos de tubulaÃ§Ã£o de aÃ§o inoxidÃ¡vel austenÃ­tico com sentido de fluxo regulado pelas diferenÃ§as de pressÃ£o e pelo estado das vÃ¡lvulas automatizadas de corte rÃ¡pido.
3. **$W: E \rightarrow \mathbb{R}^+$** Ã© a **funÃ§Ã£o de ponderaÃ§Ã£o**, que associa a cada aresta um peso fÃ­sico correspondente ao comprimento geomÃ©trico da tubulaÃ§Ã£o ($L\text{ [m]}$) ou Ã  sua impedÃ¢ncia hidrÃ¡ulica equivalente (perda de carga distribuÃ­da $\Delta P\text{ [bar]}$).

```mermaid
graph LR
    SUP["SUP-100: Suprimento"] -->|"e1: 10m"| TK1["TK-101: LP 350 bar"]
    SUP -->|"e2: 10m"| TK2["TK-102: MP 700 bar"]
    SUP -->|"e3: 15m"| TK3["TK-103: HP 1000 bar"]
    TK1 -->|"e4: 8m"| XV["XV-104: Manifold"]
    TK2 -->|"e5: 8m"| XV
    TK3 -->|"e6: 8m"| XV
    XV -->|"e7: 14m (Ponte)"| HEX["HEX-201: Chiller -40Â°C"]
    HEX -->|"e8: 16m (Ponte)"| DISP["DISP-300: Dispensador"]
    DISP -->|"e9: 4m (Ponte)"| VEIC["VEIC-300: VeÃ­culo 700 bar"]
```

## 8.2 DefiniÃ§Ã£o TopolÃ³gica dos VÃ©rtices e Arestas da Planta H2

A topologia de referÃªncia implementada no simulador e nas rotinas em Python Ã© composta por **8 vÃ©rtices principais ($|V| = 8$)** e **9 arestas dirigidas ($|E| = 9$)**:

### Conjunto de VÃ©rtices ($V$):
* **$v_1$ (SUP-100):** NÃ³ de Suprimento Externo (350 bar). Grau de Entrada $\deg^-(v_1) = 0$, Grau de SaÃ­da $\deg^+(v_1) = 3$ (NÃ³ Fonte / *Source*).
* **$v_2$ (TK-101):** Banco de Baixa PressÃ£o (LP ~ 400 bar). $\deg^-(v_2) = 1, \deg^+(v_2) = 1$.
* **$v_3$ (TK-102):** Banco de MÃ©dia PressÃ£o (MP ~ 700 bar). $\deg^-(v_3) = 1, \deg^+(v_3) = 1$.
* **$v_4$ (TK-103):** Banco de Alta PressÃ£o (HP ~ 1000 bar). $\deg^-(v_4) = 1, \deg^+(v_4) = 1$.
* **$v_5$ (XV-104):** Manifold Seletor de Cascata Multivias. $\deg^-(v_5) = 3, \deg^+(v_5) = 1$ (Ponto de ConvergÃªncia).
* **$v_6$ (HEX-201):** Trocador de Calor CriogÃªnico (Chiller T40). $\deg^-(v_6) = 1, \deg^+(v_6) = 1$.
* **$v_7$ (DISP-300):** Dispensador com Medidor Coriolis de CustÃ³dia. $\deg^-(v_7) = 1, \deg^+(v_7) = 1$.
* **$v_8$ (VEIC-300):** Tanque de CombustÃ­vel do VeÃ­culo FCEV. $\deg^-(v_8) = 1, \deg^+(v_8) = 0$ (NÃ³ Sumidouro / *Sink*).

### Tabela Exaustiva de Arestas do Grafo de Processo ($E$):

| Identificador da Aresta | VÃ©rtice de Origem ($u$) | VÃ©rtice de Destino ($v$) | Peso ($W = \text{Comprimento } L$) | DiÃ¢metro Nominal da TubulaÃ§Ã£o | VÃ¡lvula de Controle Associada | ClassificaÃ§Ã£o Estrutural de Vulnerabilidade |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **$e_1$** | SUP-100 | TK-101 | $10\text{ metros}$ | $1''$ (25,4 mm) | XV-101 | Ramo Redundante de Recarga |
| **$e_2$** | SUP-100 | TK-102 | $10\text{ metros}$ | $1''$ (25,4 mm) | XV-102 | Ramo Redundante de Recarga |
| **$e_3$** | SUP-100 | TK-103 | $15\text{ metros}$ | $0{,}5''$ (12,7 mm) | XV-103 | Ramo Redundante de Recarga |
| **$e_4$** | TK-101 | XV-104 | $8\text{ metros}$ | $1''$ (25,4 mm) | YV-104A (Bobina A) | Ramo da Cascata LP |
| **$e_5$** | TK-102 | XV-104 | $8\text{ metros}$ | $0{,}75''$ (19,0 mm) | Centro da VÃ¡lvula | Ramo da Cascata MP |
| **$e_6$** | TK-103 | XV-104 | $8\text{ metros}$ | $0{,}5''$ (12,7 mm) | YV-104B (Bobina B) | Ramo da Cascata HP |
| **$e_7$** | XV-104 | HEX-201 | $14\text{ metros}$ | $1''$ (25,4 mm) | XV-201 | **ARESTA PONTE CRÃTICA (Bridge)** |
| **$e_8$** | HEX-201 | DISP-300 | $16\text{ metros}$ | $0{,}5''$ (12,7 mm) | Linha de Envio | **ARESTA PONTE CRÃTICA (Bridge)** |
| **$e_9$** | DISP-300 | VEIC-300 | $4\text{ metros}$ | $0{,}375''$ Mangueira | XV-301 / BV-301 | **ARESTA PONTE CRÃTICA (Bridge)** |

## 8.3 RepresentaÃ§Ãµes Matriciais: AdjacÃªncia, IncidÃªncia e Custos HidrÃ¡ulicos

Para que os algoritmos de automaÃ§Ã£o do SCADA manipulem o grafo computacionalmente em linguagem matricial de alta performance (NumPy / SciPy / C++), o sistema traduz a rede fÃ­sica em trÃªs matrizes canÃ´nicas:

### 8.3.1 Matriz de AdjacÃªncia ($A$)
Matriz quadrada de dimensÃµes $|V| \times |V|$ ($8 \times 8$). O elemento $A_{ij} = 1$ se existe uma aresta dirigida partindo do vÃ©rtice $v_i$ para o vÃ©rtice $v_j$, e $A_{ij} = 0$ caso contrÃ¡rio:

$$A = \begin{pmatrix}
0 & 1 & 1 & 1 & 0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & 1 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & 1 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & 1 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & 0 & 1 & 0 & 0 \\
0 & 0 & 0 & 0 & 0 & 0 & 1 & 0 \\
0 & 0 & 0 & 0 & 0 & 0 & 0 & 1 \\
0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 
\end{pmatrix}$$

Propriedades algÃ©bricas notÃ¡veis da matriz $A$ da estaÃ§Ã£o HRS:
* A matriz $A$ Ã© estritamente **triangular superior** apÃ³s renomeaÃ§Ã£o topolÃ³gica dos vÃ©rtices, o que prova algebricamente que a rede de escoamento da planta Ã© um **Grafo AcÃ­clico Dirigido (DAG)** em condiÃ§Ãµes normais de abastecimento.
* A potÃªncia $A^k$ fornece o nÃºmero de passeios de comprimento $k$ entre quaisquer pares de nÃ³s. Para $k = 4$, o elemento $(A^4)_{1,8} = 3$, provando a existÃªncia exata de 3 rotas distintas entre o suprimento externo e o veÃ­culo, correspondentes Ã s 3 etapas de cascata.

### 8.3.2 Matriz de IncidÃªncia VÃ©rtice-Aresta ($M$)
Matriz de dimensÃµes $|V| \times |E|$ ($8 \times 9$). Modela a topologia de conexÃ£o das arestas e atua como base para a aplicaÃ§Ã£o da Lei de Kirchhoff para correntes/vazÃµes mÃ¡ssicas no escoamento de hidrogÃªnio:
* $M_{iv} = -1$: Se a aresta $e_j$ parte do vÃ©rtice $v_i$ (fluxo efluente).
* $M_{iv} = +1$: Se a aresta $e_j$ incide no vÃ©rtice $v_i$ (fluxo afluente).
* $M_{iv} = 0$: Se a aresta $e_j$ nÃ£o estÃ¡ conectada ao vÃ©rtice $v_i$.

$$M = \begin{pmatrix}
-1 & -1 & -1 &  0 &  0 &  0 &  0 &  0 &  0 \\
+1 &  0 &  0 & -1 &  0 &  0 &  0 &  0 &  0 \\
 0 & +1 &  0 &  0 & -1 &  0 &  0 &  0 &  0 \\
 0 &  0 & +1 &  0 &  0 & -1 &  0 &  0 &  0 \\
 0 &  0 &  0 & +1 & +1 & +1 & -1 &  0 &  0 \\
 0 &  0 &  0 &  0 &  0 &  0 & +1 & -1 &  0 \\
 0 &  0 &  0 &  0 &  0 &  0 &  0 & +1 & -1 \\
 0 &  0 &  0 &  0 &  0 &  0 &  0 &  0 & +1 
\end{pmatrix}$$

A equaÃ§Ã£o da conservaÃ§Ã£o de massa nos nÃ³s em regime permanente Ã© dada elegantemente pelo produto matricial:
$$M \cdot \vec{\dot{m}} = \vec{q}$$
Onde $\vec{\dot{m}}$ Ã© o vetor das vazÃµes mÃ¡ssicas que atravessam os 9 dutos e $\vec{q}$ Ã© o vetor de injeÃ§Ã£o externa de massa.

### 8.3.3 Matriz de Custos / Pesos HidrÃ¡ulicos ($W$)
Matriz ponderada onde o elemento $W_{ij}$ armazena a extensÃ£o fÃ­sica em metros do duto conectando o nÃ³ $i$ ao nÃ³ $j$ ($\infty$ quando nÃ£o hÃ¡ conexÃ£o fÃ­sica direta):

$$W = \begin{pmatrix}
0 & 10 & 10 & 15 & \infty & \infty & \infty & \infty \\
\infty & 0 & \infty & \infty & 8 & \infty & \infty & \infty \\
\infty & \infty & 0 & \infty & 8 & \infty & \infty & \infty \\
\infty & \infty & \infty & 0 & 8 & \infty & \infty & \infty \\
\infty & \infty & \infty & \infty & 0 & 14 & \infty & \infty \\
\infty & \infty & \infty & \infty & \infty & 0 & 16 & \infty \\
\infty & \infty & \infty & \infty & \infty & \infty & 0 & 4 \\
\infty & \infty & \infty & \infty & \infty & \infty & \infty & 0 
\end{pmatrix}$$

## 8.4 Matriz Laplaciana e Propriedades Espectrais da Conectividade da Planta

A **Matriz Laplaciana** ($L$) do grafo nÃ£o-dirigido subjacente Ã© construÃ­da como a diferenÃ§a entre a Matriz de Graus ($D$) e a Matriz de AdjacÃªncia simetrizada:

$$L = D - A_{sim}$$

Onde $D_{ii} = \deg(v_i)$ e $D_{ij} = 0$ para $i \neq j$.

Os autovalores da matriz Laplaciana ($\lambda_1 \leq \lambda_2 \leq \dots \leq \lambda_n$) fornecem diagnÃ³sticos topolÃ³gicos profundos sobre a resiliÃªncia da estaÃ§Ã£o de hidrogÃªnio:
1. **Primeiro Autovalor ($\lambda_1 = 0$):** O primeiro autovalor Ã© sempre identicamente nulo para qualquer grafo. A multiplicidade do autovalor 0 indica exatamente a quantidade de componentes conexas da rede de tubulaÃ§Ã£o. Como $\lambda_1 = 0$ tem multiplicidade 1, a planta Ã© totalmente conexa.
2. **Segundo Menor Autovalor ($\lambda_2$ - Conectividade AlgÃ©brica de Fiedler):**
   - O valor de $\lambda_2$ quantifica a facilidade com que o grafo pode ser particionado ou interrompido.
   - Quanto menor o valor de $\lambda_2$, mais vulnerÃ¡vel Ã© a rede a gargalos operacionais.
   - Na planta da UNIFEI, o valor de $\lambda_2$ Ã© acentuadamente reduzido devido Ã  presenÃ§a de arestas em sÃ©rie ($e_7, e_8, e_9$), alertando a engenharia de que qualquer falha nos setores 200 ou 300 isola totalmente o abastecimento.

## 8.5 Tipologias de Passeios, Trilhas, Caminhos e Ciclos em Redes de Dutos

Para evitar ambiguidades terminolÃ³gicas no software SCADA, o repositÃ³rio adota a taxonomia formal da teoria dos grafos:

* **Passeio (*Walk*):** SequÃªncia alternada finita de vÃ©rtices e arestas $v_0, e_1, v_1, e_2, \dots, e_k, v_k$, onde cada aresta $e_i = (v_{i-1}, v_i)$. Modela a trajetÃ³ria transiente de uma molÃ©cula individual de gÃ¡s no processo.
* **Trilha (*Trail*):** Um passeio no qual **nenhuma aresta (tubulaÃ§Ã£o) Ã© repetida**, embora vÃ©rtices possam ser revisitados. Aplicado diretamente na programaÃ§Ã£o de rotinas de varredura ultrassÃ´nica sem sobreposiÃ§Ã£o de mediÃ§Ãµes.
* **Caminho (*Path*):** Uma trilha na qual **nenhum vÃ©rtice (equipamento) Ã© repetido**. Representa uma linha de transferÃªncia operacional contÃ­nua e direta de gÃ¡s entre a fonte e o destino (por exemplo, a rota de abastecimento $\text{TK-101} \rightarrow \text{XV-104} \rightarrow \text{HEX-201} \rightarrow \text{DISP-300} \rightarrow \text{VEIC-300}$).
* **Ciclo (*Cycle*):** Um caminho fechado ($v_0 = v_k$) com trÃªs ou mais arestas. A presenÃ§a de ciclos no grafo nÃ£o-dirigido subjacente da planta permite a criaÃ§Ã£o de **linhas de retorno, purga e recirculaÃ§Ã£o criogÃªnica**.

## 8.6 AnÃ¡lise de RedundÃ¢ncia e Lema do Aperto de MÃ£os Dirigido

O **Lema do Aperto de MÃ£os Dirigido** (*Degree Sum Formula for Digraphs*) estabelece que a soma de todos os graus de saÃ­da de um dÃ­grafo Ã© rigorosamente igual Ã  soma de todos os graus de entrada, sendo ambas exatamente iguais ao nÃºmero total de arestas da rede:

$$\sum_{v \in V} \deg^+(v) = \sum_{v \in V} \deg^-(v) = |E| = 9$$

Computando a soma para a planta de hidrogÃªnio:
* Graus de SaÃ­da: $\deg^+(v_1) + \deg^+(v_2) + \dots + \deg^+(v_8) = 3 + 1 + 1 + 1 + 1 + 1 + 1 + 0 = 9$
* Graus de Entrada: $\deg^-(v_1) + \deg^-(v_2) + \dots + \deg^-(v_8) = 0 + 1 + 1 + 1 + 3 + 1 + 1 + 1 = 9$

Essa igualdade matemÃ¡tica valida a consistÃªncia estrutural do grafo da planta no SCADA Core, garantindo que nÃ£o existem arestas desconectadas, "vazamentos lÃ³gicos" ou nÃ³s fantasmas no modelo computacional de controle.

---

# CAPÃTULO 9: ALGORITMOS DE BUSCA, CAMINHO MÃNIMO E ROTEAMENTO DINÃ‚MICO

Uma das maiores forÃ§as inovadoras do projeto da UNIFEI reside na integraÃ§Ã£o direta de **algoritmos clÃ¡ssicos da ciÃªncia da computaÃ§Ã£o** ao nÃºcleo de execuÃ§Ã£o do sistema supervisÃ³rio SCADA. Em vez de depender de rotinas estÃ¡ticas com caminhos prÃ©-fixados em cÃ³digo Ladder, o SCADA Core executa algoritmos sobre a topologia do dÃ­grafo $G = (V, E, W)$, recalculando rotas de fluxo, isolando trechos em falha e garantindo a continuidade do processo com tempos de decisÃ£o inferiores a 1 milissegundo.

## 9.1 Busca em Largura (BFS): PropagaÃ§Ã£o de PressÃ£o e Varredura de Alcance

A **Busca em Largura** (*Breadth-First Search* - BFS) Ã© um algoritmo fundamental que explora o grafo em camadas concÃªntricas (frente de onda), visitando todos os vizinhos imediatos de um vÃ©rtice antes de avanÃ§ar para os vÃ©rtices de nÃ­vel de profundidade subsequente.

```
                  Ãrvore de Varredura por NÃ­veis BFS
                       [ NÃ­vel 0: SUP-100 ]
                           /     |     \
                          /      |      \
                         v       v       v
                     [TK-101] [TK-102] [TK-103]  <-- NÃ­vel 1
                         \       |       /
                          \      |      /
                           v     v     v
                            [ XV-104 ]           <-- NÃ­vel 2
                                 |
                                 v
                            [ HEX-201 ]          <-- NÃ­vel 3
                                 |
                                 v
                            [ DISP-300 ]         <-- NÃ­vel 4
                                 |
                                 v
                            [ VEIC-300 ]         <-- NÃ­vel 5
```

### 9.1.1 AplicaÃ§Ãµes da BFS no SCADA Core:
1. **Modelagem da Frente de Onda de PressurizaÃ§Ã£o:** Quando o suprimento externo SUP-100 inicia o envio de gÃ¡s para uma planta inicialmente despressurizada, a propagaÃ§Ã£o fÃ­sica do gÃ¡s segue a ordem de nÃ­veis da BFS. O SCADA utiliza essa sequÃªncia para coordenar a abertura escalonada de vÃ¡lvulas e prever o tempo de equalizaÃ§Ã£o de pressÃ£o nos vasos.
2. **Varredura de Alcance e DespressurizaÃ§Ã£o:** Em caso de necessidade de purga com gÃ¡s inerte (NitrogÃªnio $N_2$), a BFS identifica deterministicamente todos os nÃ³s que serÃ£o alcanÃ§ados e purgados a partir do ponto de injeÃ§Ã£o.
3. **Complexidade Temporal e Espacial:** A BFS opera com complexidade de tempo Ã³tima:
   $$\mathcal{O}(|V| + |E|)$$
   Para a planta com 8 vÃ©rtices e 9 arestas, a execuÃ§Ã£o completa da BFS demanda menos de 10 microssegundos em processadores convencionais, viabilizando execuÃ§Ã£o sÃ­ncrona a cada ciclo de atualizaÃ§Ã£o da tela grÃ¡fica do SCADA.

### 9.1.2 Algoritmo BFS em Pseudo-cÃ³digo Estruturado
```
ALGORITMO BFS_SCADA(Grafo G, Vertice origem, Set tubulacoes_bloqueadas):
    Fila Q = NovaFila()
    Set visitados = NovoSet()
    Mapa niveis = NovoMapa()
    Lista arestas_arvore = NovaLista()

    visitados.adicionar(origem)
    niveis[origem] = 0
    Q.enfileirar(origem)

    ENQUANTO Q nÃ£o estiver vazia FAÃ‡A:
        u = Q.desenfileirar()
        PARA CADA aresta (u, v) no Grafo G FAÃ‡A:
            SE aresta.id NÃƒO ESTÃ EM tubulacoes_bloqueadas ENTÃƒO:
                SE v NÃƒO ESTÃ EM visitados ENTÃƒO:
                    visitados.adicionar(v)
                    niveis[v] = niveis[u] + 1
                    arestas_arvore.adicionar(aresta.id)
                    Q.enfileirar(v)
                FIM SE
            FIM SE
        FIM PARA
    FIM ENQUANTO

    RETORNAR visitados, arestas_arvore, niveis
FIM ALGORITMO
```

## 9.2 Busca em Profundidade (DFS): Rastreamento de Linhas e DetecÃ§Ã£o de Ciclos

A **Busca em Profundidade** (*Depth-First Search* - DFS) progride ao longo de cada ramificaÃ§Ã£o da rede hidrÃ¡ulica atÃ© atingir o nÃ³ mais profundo (nÃ³ terminal ou sumidouro), retrocedendo (*backtracking*) para explorar ramos alternativos somente quando nenhum vÃ©rtice inexplorado estiver acessÃ­vel.

### 9.2.1 ClassificaÃ§Ã£o de Arestas pela DFS
A execuÃ§Ã£o da DFS sobre o dÃ­grafo classifica as arestas da planta em quatro categorias fundamentais:
* **Arestas de Ãrvore (*Tree Edges*):** Arestas que levam a um vÃ©rtice nunca antes visitado, compondo a floresta geradora de profundidade.
* **Arestas de Retorno (*Back Edges*):** Arestas que conectam um nÃ³ a um de seus ancestrais na Ã¡rvore DFS. A presenÃ§a de uma Ãºnica *back edge* Ã© a **condiÃ§Ã£o necessÃ¡ria e suficiente para comprovar a existÃªncia de ciclos** na rede.
* **Arestas de AvanÃ§o (*Forward Edges*):** Arestas que conectam um nÃ³ a um descendente nÃ£o-imediato na Ã¡rvore.
* **Arestas Cruzadas (*Cross Edges*):** Arestas que conectam nÃ³s entre ramos distintos sem relaÃ§Ã£o ancestral direta.

### 9.2.2 AplicaÃ§Ãµes da DFS no SCADA Core:
1. **VerificaÃ§Ã£o de Aciclicidade Operacional (DAG Check):** Durante a dosagem de hidrogÃªnio no veÃ­culo, a rede de tubulaÃ§Ã£o deve operar estritamente como um Grafo AcÃ­clico Dirigido (DAG). O algoritmo DFS varre as vÃ¡lvulas abertas e valida que o conjunto de *back edges* Ã© rigorosamente vazio ($\text{BackEdges} = \emptyset$). Se uma vÃ¡lvula defeituosa criar um circuito fechado de recirculaÃ§Ã£o indevida, a DFS detecta o ciclo instantaneamente e alerta a equipe de controle.
2. **Rastreamento de Linhas de Respiro e Tocha (Vent/Flare Headers):** Quando uma vÃ¡lvula de alÃ­vio mecÃ¢nico dispara, a DFS rastreia a trajetÃ³ria exata percorrida pelo gÃ¡s desde o vaso de origem atÃ© a ponta da tocha de queima controlada no topo da estaÃ§Ã£o.

## 9.3 Algoritmo de Dijkstra para OtimizaÃ§Ã£o de Rota de Abastecimento

Durante o ciclo de reabastecimento veicular sob o protocolo SAE J2601, o hidrogÃªnio deve ser conduzido do banco de armazenamento selecionado (LP, MP ou HP) atÃ© o veÃ­culo atravÃ©s do caminho que minimize as perdas por atrito e os atrasos dinÃ¢micos. O SCADA Core utiliza o **Algoritmo de Dijkstra** para determinar a rota de custo mÃ­nimo em tempo real.

O algoritmo opera mantendo um vetor de distÃ¢ncias mÃ­nimas estimadas $\text{dist}[v]$ inicializado com $\infty$ para todos os nÃ³s, exceto a origem $\text{dist}[s] = 0$. A cada passo, extrai-se o vÃ©rtice nÃ£o-visitado $u$ com menor distÃ¢ncia e aplica-se o passo fundamental de **relaxamento das arestas**:

$$\text{SE } \text{dist}[u] + W(u, v) < \text{dist}[v] \quad \text{ENTÃƒO } \quad \text{dist}[v] \leftarrow \text{dist}[u] + W(u, v)$$

### 9.3.1 Rotas Ã“timas Calculadas pelo Dijkstra na Planta da UNIFEI:

1. **Rota Cascata LP (Origem TK-101 $\rightarrow$ Destino VEIC-300):**
   - Trechos: $\text{TK-101} \xrightarrow{e_4: 8\text{m}} \text{XV-104} \xrightarrow{e_7: 14\text{m}} \text{HEX-201} \xrightarrow{e_8: 16\text{m}} \text{DISP-300} \xrightarrow{e_9: 4\text{m}} \text{VEIC-300}$
   - **DistÃ¢ncia Total Acumulada:** $8 + 14 + 16 + 4 = \mathbf{42\text{ metros}}$
2. **Rota Cascata MP (Origem TK-102 $\rightarrow$ Destino VEIC-300):**
   - Trechos: $\text{TK-102} \xrightarrow{e_5: 8\text{m}} \text{XV-104} \xrightarrow{e_7: 14\text{m}} \text{HEX-201} \xrightarrow{e_8: 16\text{m}} \text{DISP-300} \xrightarrow{e_9: 4\text{m}} \text{VEIC-300}$
   - **DistÃ¢ncia Total Acumulada:** $8 + 14 + 16 + 4 = \mathbf{42\text{ metros}}$
3. **Rota Cascata HP (Origem TK-103 $\rightarrow$ Destino VEIC-300):**
   - Trechos: $\text{TK-103} \xrightarrow{e_6: 8\text{m}} \text{XV-104} \xrightarrow{e_7: 14\text{m}} \text{HEX-201} \xrightarrow{e_8: 16\text{m}} \text{DISP-300} \xrightarrow{e_9: 4\text{m}} \text{VEIC-300}$
   - **DistÃ¢ncia Total Acumulada:** $8 + 14 + 16 + 4 = \mathbf{42\text{ metros}}$
4. **Rota Direta de Suprimento Externo (SUP-100 $\rightarrow$ VEIC-300 via LP/MP):**
   - Trechos: $\text{SUP-100} \xrightarrow{e_1: 10\text{m}} \text{TK-101} \rightarrow \dots \rightarrow \text{VEIC-300}$
   - **DistÃ¢ncia Total Acumulada:** $10 + 42 = \mathbf{52\text{ metros}}$
5. **Rota Direta de Suprimento Externo via HP:**
   - Trechos: $\text{SUP-100} \xrightarrow{e_3: 15\text{m}} \text{TK-103} \rightarrow \dots \rightarrow \text{VEIC-300}$
   - **DistÃ¢ncia Total Acumulada:** $15 + 42 = \mathbf{57\text{ metros}}$

## 9.4 Arestas Pontes (*Bridges*) e VÃ©rtices de ArticulaÃ§Ã£o CrÃ­ticos

Em teoria dos grafos, uma **aresta ponte (*bridge*)** Ã© uma aresta cuja remoÃ§Ã£o desconecta o grafo ou aumenta estritamente o nÃºmero de componentes conexas da rede. Analogamente, um **vÃ©rtice de articulaÃ§Ã£o** (*cut vertex*) Ã© um nÃ³ cuja remoÃ§Ã£o particiona a rede.

Na infraestrutura da estaÃ§Ã£o de hidrogÃªnio da UNIFEI, a anÃ¡lise topolÃ³gica automatizada via algoritmo de Tarjan identifica trÃªs arestas pontes crÃ­ticas e intransponÃ­veis:
* **Aresta $e_7$ (Duto XV-104 $\rightarrow$ HEX-201):** Conecta a saÃ­da do manifold de armazenamento ao trocador criogÃªnico.
* **Aresta $e_8$ (Duto HEX-201 $\rightarrow$ DISP-300):** Conecta o trocador criogÃªnico ao gabinete do dispensador.
* **Aresta $e_9$ (Mangueira DISP-300 $\rightarrow$ VEIC-300):** Linha flexÃ­vel terminal de abastecimento.

### ConsequÃªncia CrÃ­tica para a SeguranÃ§a Industrial:
As arestas $e_7$, $e_8$ e $e_9$ constituem **pontos Ãºnicos de falha (*Single Points of Failure* - SPOF)**.
- Qualquer dano fÃ­sico, vazamento ou bloqueio nessas linhas **inviabiliza totalmente** a transferÃªncia de hidrogÃªnio para o veÃ­culo automotor, nÃ£o existindo caminho geomÃ©trico alternativo para contornar a restriÃ§Ã£o.
- Diante de qualquer indÃ­cio de vazamento nessas trÃªs arestas pontes, o SCADA Core nÃ£o tenta executar manobras de desvio ou rotas de contingÃªncia: a aÃ§Ã£o imediata mandatÃ³ria Ã© o **disparo pleno do trip de corte total (Parada de EmergÃªncia ESD Geral SIL-3)**.

## 9.5 SimulaÃ§Ã£o de Vazamentos e Algoritmo de Desvio AutomÃ¡tico em Tempo Real

Diferentemente das arestas pontes, as tubulaÃ§Ãµes do Setor 100 possuem **caminhos alternativos em paralelo** decorrentes da presenÃ§a dos trÃªs bancos de armazenamento independentes (TK-101, TK-102 e TK-103).

O simulador implementa a dinÃ¢mica de desvio automÃ¡tico (*Automatic Failover Rerouting*):
1. **DetecÃ§Ã£o:** Um sensor perimÃ©trico (ex.: AT-101) sinaliza vazamento em um dos dutos da cascata (por exemplo, na linha $e_4$ entre TK-101 e o manifold).
2. **MutaÃ§Ã£o do Grafo:** O SCADA remove dinamicamente a aresta avariada do grafo ativo em memÃ³ria:
   $$E_{ativo} \leftarrow E \setminus \{e_4\}$$
3. **Bloqueio FÃ­sico:** O CLP envia comando imediato de fechamento da vÃ¡lvula correspondente (desenergiza bobina A de XV-104 e fecha corte rÃ¡pido XV-101).
4. **RecÃ¡lculo do Caminho MÃ­nimo:** O algoritmo de Dijkstra Ã© disparado imediatamente a partir dos bancos Ã­ntegros remanescentes.
5. **ComutaÃ§Ã£o Suave:** Em menos de **0,8 milissegundos**, o sistema identifica que a linha $e_5$ (partindo do tanque de mÃ©dia pressÃ£o TK-102) estÃ¡ saudÃ¡vel e apresenta custo mÃ­nimo idÃªntico ($42\text{ metros}$), comutando a rota e mantendo o abastecimento veicular sem abortar a sessÃ£o do cliente.

```
+-------------------------------------------------------------------------+
|                  FLUXOGRAMA DO DESVIO AUTOMÃTICO (FAILOVER)             |
|                                                                         |
|  [ Vazamento Detectado ] ---> [ Aresta Ã© Ponte (Bridge)? ]              |
|                                     /               \                   |
|                               (SIM)/                 \(NÃƒO)             |
|                                   v                   v                 |
|                             [ TRIP ESD GERAL ]    [ Remover Aresta ]    |
|                             (Corte Total SIL-3)   [ Fechar VÃ¡lvula ]    |
|                                                           |             |
|                                                           v             |
|                                                   [ Dijkstra Recalcula] |
|                                                           |             |
|                                                           v             |
|                                                   [ Nova Rota SaudÃ¡vel ]|
|                                                   [ Continua Processo ] |
+-------------------------------------------------------------------------+
```

## 9.6 Intertravamento de SeguranÃ§a via Grafo AcÃ­clico Dirigido (DAG)

A sequÃªncia temporal de preparaÃ§Ã£o para o abastecimento veicular segue um protocolo determinÃ­stico onde certas etapas operacionais sÃ³ podem ser liberadas se suas predecessoras obrigatÃ³rias tiverem sido rigorosamente concluÃ­das e validadas. No projeto da UNIFEI, essa dependÃªncia Ã© modelada como um **Grafo AcÃ­clico Dirigido de PrecedÃªncia (DAG)**:

```mermaid
graph TD
    LOCK["NÃ³ 1: Trava MecÃ¢nica do Bico"] --> IRDA["NÃ³ 2: ComunicaÃ§Ã£o Ã“ptica IrDA (J2799)"]
    IRDA --> LEAK["NÃ³ 3: Teste de Estanqueidade / InertizaÃ§Ã£o"]
    LEAK --> CHILL["NÃ³ 4: AtivaÃ§Ã£o Chiller T40 (T <= -40Â°C)"]
    CHILL --> RAMP["NÃ³ 5: InÃ­cio da Rampa de PressÃ£o APRR (J2601)"]
    RAMP --> PURGE["NÃ³ 6: DespressurizaÃ§Ã£o / Purga e Desengate"]
```

### Propriedades da OrquestraÃ§Ã£o por DAG:
* **OrdenaÃ§Ã£o TopolÃ³gica (*Topological Sort*):** Garante a ordenaÃ§Ã£o linear dos vÃ©rtices de modo que, para cada aresta dirigida $(u, v)$, a aÃ§Ã£o $u$ precede obrigatoriamente a aÃ§Ã£o $v$.
* **Impossibilidade de Pular Etapas:** O CLP valida o vetor de flags de dependÃªncia do DAG antes de energizar qualquer bobina de alta pressÃ£o. NÃ£o Ã© fisicamente possÃ­vel iniciar a pressurizaÃ§Ã£o a 700 bar (NÃ³ 5) sem que a trava mecÃ¢nica (NÃ³ 1), o link Ã³ptico (NÃ³ 2), o teste de vazamento da mangueira (NÃ³ 3) e o resfriamento a $-40^\circ\text{C}$ (NÃ³ 4) tenham sido sucessivamente atestados.

---

# CAPÃTULO 10: OTIMIZAÃ‡ÃƒO DE INSPEÃ‡ÃƒO INDUSTRIAL E LOGÃSTICA DE INSUMOS

A modelagem por teoria dos grafos vai muito alÃ©m do controle de fluxo de fluidos. No projeto **SCADA Core**, dois problemas computacionais clÃ¡ssicos sÃ£o formalizados e aplicados Ã  integridade mecÃ¢nica da estaÃ§Ã£o de hidrogÃªnio e Ã  cadeia regional de suprimentos: os **Problemas Eulerianos de InspeÃ§Ã£o de Dutos** e os **Problemas Hamiltonianos de Patrulhamento AutÃ´nomo por AGV**.

## 10.1 Problemas Eulerianos e InspeÃ§Ã£o Integral por RobÃ´ PIG UltrassÃ´nico

A integridade estrutural das linhas de alta pressÃ£o de hidrogÃªnio (que operam sob tensÃµes mecÃ¢nicas severas de atÃ© 1000 bar) deve ser atestada periodicamente por ensaios nÃ£o-destrutivos para detectar trincas induzidas por hidrogÃªnio (*Hydrogen-Induced Cracking* - HIC) e corrosÃ£o sob tensÃ£o (*Stress Corrosion Cracking* - SCC).

A metodologia industrial mais eficaz para essa finalidade Ã© a passagem de um **RobÃ´ PIG Inteligente (*Pipeline Inspection Gauge*)**, um dispositivo mecatrÃ´nico autÃ´nomo equipado com transdutores de ultrassom multielementar (*Phased Array Ultrasonic Testing* - PAUT) e sensores de induÃ§Ã£o magnÃ©tica que desliza pelo interior das tubulaÃ§Ãµes impulsionado pelo fluxo de gÃ¡s.

Para inspecionar a estaÃ§Ã£o da forma mais econÃ´mica e rÃ¡pida, o robÃ´ deve percorrer **todas as tubulaÃ§Ãµes da malha sem passar duas vezes pelo mesmo duto** (minimizando o desgaste de vedaÃ§Ãµes e o consumo de gÃ¡s inerte propelente), retornando ao ponto de partida. Esse desafio constitui formalmente a busca por um **Circuito Euleriano**.

### 10.1.1 Teorema de Euler
* Um grafo nÃ£o-dirigido conexo admite um **Circuito Euleriano** se e somente se **todos os seus vÃ©rtices possuem grau par**:
  $$\forall v \in V, \quad \deg(v) \equiv 0 \pmod 2$$
* Se o grafo possuir exatamente **dois vÃ©rtices de grau Ã­mpar**, ele admite um **Caminho Euleriano** (que inicia em um vÃ©rtice Ã­mpar e termina obrigatoriamente no outro vÃ©rtice Ã­mpar).
* Para grafos dirigidos fortemente conexos, um circuito euleriano existe se e somente se, para todo vÃ©rtice, o grau de entrada Ã© igual ao grau de saÃ­da:
  $$\forall v \in V, \quad \deg^-(v) = \deg^+(v)$$

## 10.2 Algoritmos de Hierholzer e Fleury para TrajetÃ³rias Eulerianas

Para calcular a rota de varredura do robÃ´ PIG, a malha de dutos da estaÃ§Ã£o HRS Ã© complementada com uma linha de retorno perimetral conectando o dispensador Ã  base de lanÃ§amento de raspadores (NÃ³ `BASE-100`), configurando um grafo de inspeÃ§Ã£o euleriano com 8 nÃ³s e 10 arestas:

```
                  Topologia do Circuito Euleriano do RobÃ´ PIG
    [ BASE-100 ] <======================================== [ DISP-300 ]
      |        ^                                             ^
  (p1)|         \ (p7)                                (p5) /
      v          \                                        /
   [ SUP-100 ]   [ TK-102 ]                          [ HEX-201 ]
      |     ^         \                                   ^
  (p2)|      \ (p10)   \ (p8)                         (p4)|
      v       \         v                                 |
   [ TK-101 ]  [ TK-103 ] <====== [ XV-104 ] =============+
        \                    (p9)
         \ (p3)
          +---------------------->
```

### 10.2.1 Algoritmo de Hierholzer
O algoritmo de Hierholzer resolve o problema do circuito euleriano com complexidade temporal linear ideal $\mathcal{O}(|E|)$:
1. Seleciona-se o vÃ©rtice inicial de lanÃ§amento (`BASE-100`).
2. ConstrÃ³i-se um circuito inicial preliminar percorrendo arestas nÃ£o-visitadas atÃ© retornar ao ponto de partida.
3. Se restarem arestas na rede que ainda nÃ£o foram percorridas, seleciona-se um vÃ©rtice do circuito preliminar que ainda possua arestas incidentes inexploradas.
4. ConstrÃ³i-se um sub-circuito a partir desse vÃ©rtice e intercala-se o novo laÃ§o ao circuito principal no ponto de bifurcaÃ§Ã£o.
5. Repete-se o processo atÃ© que todas as 10 arestas de tubulaÃ§Ã£o tenham sido percorridas exatamente uma Ãºnica vez.

A sequÃªncia canÃ´nica de 10 passos executada pelo PIG no simulador do SCADA Core compreende:
1. `p1`: $\text{BASE-100} \rightarrow \text{SUP-100}$
2. `p2`: $\text{SUP-100} \rightarrow \text{TK-101}$
3. `p3`: $\text{TK-101} \rightarrow \text{XV-104}$
4. `p4`: $\text{XV-104} \rightarrow \text{HEX-201}$
5. `p5`: $\text{HEX-201} \rightarrow \text{DISP-300}$
6. `p6`: $\text{DISP-300} \rightarrow \text{BASE-100}$ (Retorno Perimetral)
7. `p7`: $\text{BASE-100} \rightarrow \text{TK-102}$
8. `p8`: $\text{TK-102} \rightarrow \text{XV-104}$
9. `p9`: $\text{XV-104} \rightarrow \text{TK-103}$
10. `p10`: $\text{TK-103} \rightarrow \text{SUP-100}$

Essa varredura completa cobre 100% da espessura de parede das tubulaÃ§Ãµes da planta industrial sem redundÃ¢ncia inÃºtil de inspeÃ§Ã£o.

## 10.3 Problemas Hamiltonianos e Roteamento de VeÃ­culos AutÃ´nomos (AGV)

Enquanto os circuitos eulerianos focam na travessia exaustiva de **todas as arestas**, os circuitos hamiltonianos focam na visitaÃ§Ã£o exata de **todos os vÃ©rtices**.

Em uma estaÃ§Ã£o de hidrogÃªnio moderna, a ronda de seguranÃ§a perimetral nÃ£o Ã© realizada manualmente por operadores humanos para evitar exposiÃ§Ã£o a eventuais atmosferas explosivas. A estaÃ§Ã£o conta com um **VeÃ­culo AutÃ´nomo Guiado (*Automated Guided Vehicle* - AGV)** dotado de cÃ¢meras tÃ©rmicas de alta sensibilidade para detecÃ§Ã£o de chamas invisÃ­veis de hidrogÃªnio (que nÃ£o emitem luz visÃ­vel em combustÃ£o diurna) e sniffer a laser para mediÃ§Ã£o de concentraÃ§Ã£o volumÃ©trica.

O AGV parte da doca de recarga (`LAB-100`), deve visitar **todos os nÃ³s de sensoriamento da planta exatamente uma Ãºnica vez** e retornar Ã  doca pela rota de menor distÃ¢ncia geomÃ©trica possÃ­vel. Este Ã© o cÃ©lebre **Problema do Caixeiro Viajante (*Travelling Salesperson Problem* - TSP)**, um problema clÃ¡ssico de classe **NP-DifÃ­cil (NP-Hard)**.

## 10.4 ResoluÃ§Ã£o do Problema do Caixeiro Viajante (TSP) com HeurÃ­stica 2-Opt

Como o nÃºmero de permutaÃ§Ãµes possÃ­veis para $N$ vÃ©rtices cresce fatorialmente com $(N-1)! / 2$, abordagens de forÃ§a bruta tornam-se intratÃ¡veis em grafos maiores. O projeto da UNIFEI implementa duas abordagens comparativas no simulador:

### 10.4.1 HeurÃ­stica Gulosa do Vizinho Mais PrÃ³ximo (*Nearest Neighbor* - NN)
A partir do ponto atual, o veÃ­culo seleciona avidamente o prÃ³ximo nÃ³ nÃ£o-visitado mais prÃ³ximo no espaÃ§o euclidiano.
- **Vantagem:** ComputaÃ§Ã£o ultra-rÃ¡pida $\mathcal{O}(|V|^2)$.
- **Desvantagem:** Tende a tomar decisÃµes mÃ­opes nos passos iniciais que forÃ§am conexÃµes finais excessivamente longas e cruzamentos de trajetÃ³rias.
- **Resultado no Simulador:** Rota resultante com distÃ¢ncia total acumulada de **$280\text{ metros}$**.

### 10.4.2 OtimizaÃ§Ã£o Local por Troca de Arestas (*2-Opt Local Search*)
A heurÃ­stica 2-Opt parte de um circuito vÃ¡lido e busca iterativamente pares de arestas desconectadas que se cruzam no plano, substituindo-as pela configuraÃ§Ã£o cruzada correspondente se essa troca resultar em reduÃ§Ã£o da distÃ¢ncia total:

$$\text{SE } \text{dist}(u_i, u_{i+1}) + \text{dist}(u_j, u_{j+1}) > \text{dist}(u_i, u_j) + \text{dist}(u_{i+1}, u_{j+1})$$
$$\text{ENTÃƒO: Inverter a subsequÃªncia entre } u_{i+1} \text{ e } u_j$$

O processo repete-se atÃ© atingir um mÃ­nimo local onde nenhum par adicional de arestas proporcione ganho.
- **Resultado no Simulador:** Elimina todos os entrelaÃ§amentos espaciais, convergindo para a rota hamiltoniana Ã³tima de **$260\text{ metros}$** (uma economia de 7,1% em consumo de bateria e desgaste dos motores do robÃ´ mÃ³vel).

```
        Comparativo das Rotas do AGV (MissÃ£o de InspeÃ§Ã£o TÃ©rmica)
  
  [ HEURÃSTICA GULOSA: 280 m ]              [ OTIMIZAÃ‡ÃƒO 2-OPT: 260 m ]
         (Com Cruzamento)                         (Circuito Limpo)
         
        (A)----------(B)                         (A)----------(B)
           \        /                               |        |
            \      /                                |        |
             \    /                                 |        |
              \  /                                  |        |
               \/                                   |        |
               /\                                   |        |
              /  \                                  |        |
             /    \                                 |        |
            /      \                                |        |
        (C)----------(D)                         (C)----------(D)
```

## 10.5 Grafos de Fluxo MÃ¡ximo e Cadeia LogÃ­stica de Transporte de H2 (Tube Trailers)

Na escala macroscÃ³pica de engenharia, a estaÃ§Ã£o de abastecimento nÃ£o existe isoladamente; ela integra uma rede logÃ­stica regional de distribuiÃ§Ã£o de hidrogÃªnio gasoso. O repositÃ³rio modela essa cadeia de suprimentos como uma **Rede de Fluxo com Capacidades nas Arestas**:

$$G = (V, E, C)$$

Onde cada duto ou rota rodoviÃ¡ria possui uma capacidade mÃ¡xima de transporte diÃ¡rio $C(u, v)$ (expressa em toneladas de $H_2$ por dia) e um fluxo instantÃ¢neo $f(u, v)$.

### 10.5.1 Teorema do Fluxo MÃ¡ximo e Corte MÃ­nimo (Max-Flow Min-Cut)
O teorema demonstrado por Ford e Fulkerson estabelece que o fluxo mÃ¡ximo que pode ser transportado de um nÃ³ gerador (ex.: Polo PetroquÃ­mico ou Usina Eletrolisadora de Grande Porte) atÃ© a estaÃ§Ã£o consumidora Ã© rigorosamente igual Ã  capacidade total do **corte mÃ­nimo** da rede (o conjunto de arestas cuja remoÃ§Ã£o interrompe completamente o fluxo entre a fonte e o destino):

$$\max |f| = \min_{S, T} C(S, T)$$

No SCADA Core, rotinas baseadas no algoritmo de **Edmonds-Karp** (implementaÃ§Ã£o da tÃ©cnica de caminhos de aumento via BFS com complexidade $\mathcal{O}(|V| \cdot |E|^2)$) operam no nÃ­vel corporativo de telemetria para:
1. Calcular a capacidade mÃ¡xima de reabastecimento contÃ­nuo da estaÃ§Ã£o em perÃ­odos de alta demanda veicular.
2. Identificar gargalos rodoviÃ¡rios na circulaÃ§Ã£o de carretas semirreboque de alta pressÃ£o (*tube trailers*).
3. Otimizar os pedidos automatizados de reposiÃ§Ã£o de estoque antes que a pressÃ£o residual dos bancos de armazenamento atinja os setpoints mÃ­nimos de seguranÃ§a.

---

# CAPÃTULO 11: ARQUITETURA DE SOFTWARE DO SCADA CORE E SIMULADOR WEB

O projeto **SCADA Core** implementa uma interface homem-mÃ¡quina (IHM) moderna, responsiva e de alta fidelidade visual construÃ­da sobre tecnologias web abertas (HTML5 semÃ¢ntico, folhas de estilo CSS3 avanÃ§adas com aceleraÃ§Ã£o grÃ¡fica e JavaScript ES6+ modular assÃ­ncrono). A interface permite o acompanhamento em tempo real da telemetria de processo, controle interativo de vÃ¡lvulas, monitoramento de alarmes e execuÃ§Ã£o de simulaÃ§Ãµes didÃ¡ticas avanÃ§adas de teoria dos grafos.

## 11.1 Arquitetura Front-End: HTML5 SemÃ¢ntico, CSS3 e Design Responsivo

A estrutura da aplicaÃ§Ã£o Ã© centrada no arquivo `index.html` e nas folhas de estilo em `assets/css/styles.css`. A arquitetura visual segue os preceitos de ergonomia de software industrial preconizados pela norma **ANSI/ISA-101.01** (*Human Machine Interfaces for Process Automation Systems*), que prioriza o alto contraste, a reduÃ§Ã£o da fadiga visual do operador e a rÃ¡pida identificaÃ§Ã£o de condiÃ§Ãµes anormais:

* **Sistema de Temas DinÃ¢micos (Dark Mode e Light Mode):**
  - Implementado via variÃ¡veis nativas CSS (*Custom Properties*) sob o seletor raiz `:root` e o modificador `[data-theme="dark"]`.
  - O tema escuro adota fundo azul-ardÃ³sia profundo (`--bg-dark: #070d18; --bg-panel: #0b1325`), reduzindo a fadiga ocular em salas de controle noturnas, enquanto elementos ativos utilizam ciano cibernÃ©tico de alto brilho (`--primary: #00d4ff`) e verde-esmeralda para regimes saudÃ¡veis (`--accent-green: #10b981`).
  - O estado do tema Ã© persistido deterministicamente no armazenamento local do navegador (*localStorage*) atravÃ©s da chave `'h2scada_theme_pref'`.
* **Componentes de Glassmorphism e Layout FlexÃ­vel:**
  - Emprego de filtros CSS `backdrop-filter: blur(12px)` e bordas translÃºcidas de alta elegÃ¢ncia.
  - Grade responsiva (*CSS Grid* e *Flexbox*) que se adapta dinamicamente desde monitores industriais ultrawide (21:9) e estaÃ§Ãµes de comando atÃ© tablets e smartphones de operadores de campo.
* **Topografia do Menu de NavegaÃ§Ã£o:**
  - Header fixo com status de conexÃ£o em tempo real.
  - Menu hambÃºrguer animado para dispositivos mÃ³veis com gerenciamento de foco por acessibilidade (atributos `aria-expanded` e `aria-label`).
  - Modais deslizantes para documentaÃ§Ã£o, esquemÃ¡ticos e crÃ©ditos acadÃªmicos.

## 11.2 IntegraÃ§Ã£o DinÃ¢mica com Diagrama Vetorial P&ID em Formato SVG

O elemento central da tela de operaÃ§Ã£o Ã© o arquivo `assets/diagrama.svg`, renderizado inline no documento web para permitir acesso direto e bidirecional aos elementos grÃ¡ficos atravÃ©s do DOM (*Document Object Model*):

```
       [ UsuÃ¡rio / Evento ] <---> [ DOM Controller: main.js ]
                                            |
                         +------------------+------------------+
                         |                                     |
                         v                                     v
             [ Diagrama P&ID SVG ]                 [ Simulador de Grafos ]
           - VÃ¡lvulas XV (fill/stroke)             - Dijkstra / BFS / DFS
           - Linhas de TubulaÃ§Ã£o (glow)            - Failover DinÃ¢mico
           - Sensores PT / TT (tooltips)           - RobÃ´ PIG / AGV TSP
```

### 11.2.1 VinculaÃ§Ã£o Bidirecional de Sensores e Tooltips Contextuais:
Cada elemento do desenho vetorial possui atributos semÃ¢nticos customizados `data-sensor="TAG | DescriÃ§Ã£o | Faixa | Valor"`:
* O mÃ³dulo `assets/js/diagram.js` varre os elementos grÃ¡ficos (`<path>`, `<circle>`, `<g>`) e acopla *event listeners* de mouse e toque.
* Ao posicionar o cursor sobre um transmissor (ex.: PT-101), um tooltip flutuante renderizado com aceleraÃ§Ã£o grÃ¡fica CSS `transform: translate3d(...)` exibe instantaneamente a leitura atual, o setor de engenharia e os limiares de alarme.
* Se uma tubulaÃ§Ã£o romper ou for bloqueada por manobra de contingÃªncia, a classe CSS `.pipe-blocked` Ã© injetada dinamicamente, alterando a cor do duto de ciano fluorescente para vermelho pulsante com tracejado animado (*stroke-dasharray*).

## 11.3 Controlador de Estados JavaScript e ManipulaÃ§Ã£o do DOM em Tempo Real

A orquestraÃ§Ã£o funcional Ã© governada pelo arquivo `assets/js/main.js`, organizado como uma FunÃ§Ã£o Imediatamente Invocada (IIFE - *Immediately Invoked Function Expression*) para garantir o encapsulamento estrito do escopo de variÃ¡veis e evitar colisÃµes no objeto global `window`:

```javascript
(function () {
  'use strict';

  // 1. GERENCIADOR DE TEMA
  const THEME_STORAGE_KEY = 'h2scada_theme_pref';
  function initTheme() { /* ... */ }

  // 2. CONTROLE DO MENU RESPONSIVO MOBILE
  function initMobileMenu() { /* ... */ }

  // 3. MOTOR DE TOOLTIPS CONTEXTUAIS DO DIAGRAMA
  let tooltipEl = null;
  function ensureTooltip() { /* ... */ }
  function showTooltip(e, text) { /* ... */ }
  function hideTooltip() { /* ... */ }

  // 4. CARREGAMENTO ASSÃNCRONO DOS DIAGRAMAS SVG
  async function loadSvgDiagrams() {
    const containers = document.querySelectorAll('.svg-container[data-src]');
    for (const el of containers) {
      const src = el.getAttribute('data-src');
      try {
        const resp = await fetch(src);
        if (!resp.ok) throw new Error(`Falha HTTP ${resp.status}`);
        const svgText = await resp.text();
        el.innerHTML = svgText;
        attachTooltips();
      } catch (err) {
        console.error('Erro ao carregar P&ID SVG:', err);
      }
    }
  }

  // 5. INICIALIZAÃ‡ÃƒO NO CARREGAMENTO DA PÃGINA
  window.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initMobileMenu();
    loadSvgDiagrams();
  });
})();
```

## 11.4 Simulador DidÃ¡tico de Grafos e Painel Interativo de Tomada de DecisÃ£o

AlÃ©m da visualizaÃ§Ã£o de supervisÃ£o tradicional, o projeto oferece uma ferramenta pedagÃ³gica avanÃ§ada implementada em `assets/simulador_grafos_h2.html`. O simulador reÃºne em uma tela de alta densidade grÃ¡fica seis modos interativos de experimentaÃ§Ã£o:

| Modo Operacional | Algoritmo Executado em Tempo Real | ParÃ¢metros de Entrada e VariÃ¡veis de Controle | Indicadores de Desempenho e Feedback Visual |
| :--- | :--- | :--- | :--- |
| **1. Roteamento Dijkstra** | Dijkstra com Fila de Prioridades | EstÃ¡gio de Cascata (LP: 350 bar, MP: 700 bar, HP: 1000 bar) | DistÃ¢ncia total mÃ­nima em metros (42 m), tempo de cÃ¡lculo ($<0{,}5\text{ ms}$), iluminaÃ§Ã£o sequencial da rota Ã³tima de dutos |
| **2. Busca BFS / DFS** | Breadth-First e Depth-First Search | NÃ³ de InÃ­cio de Varredura e Algoritmo Selecionado | Frente de onda de nÃ³s alcanÃ§ados (BFS), identificaÃ§Ã£o de ciclos e *back edges* para validaÃ§Ã£o de aciclicidade (DFS) |
| **3. SimulaÃ§Ã£o de Vazamento**| DetecÃ§Ã£o de Pontes e Desvio AutomÃ¡tico | Clique sobre qualquer uma das 9 arestas de tubulaÃ§Ã£o | ClassificaÃ§Ã£o automÃ¡tica: se Aresta Ponte $\rightarrow$ Disparo imediato de ESD Geral (Trip SIL-3); se Paralela $\rightarrow$ Rota recalculada dinamicamente |
| **4. Varredura Euleriana** | Algoritmo de Hierholzer no Grafo PIG | Disparo do RobÃ´ PIG a partir de `BASE-100` | Contador sequencial de dutos inspecionados ($1 \text{ a } 10$), animaÃ§Ã£o de passagem do raspador por toda a malha |
| **5. Ronda AGV (TSP)** | HeurÃ­stica Vizinho Mais PrÃ³ximo vs. 2-Opt | ComutaÃ§Ã£o de algoritmo no painel de comando | Comparativo visual de trajetÃ³rias: Rota NN ($280\text{ m}$) com cruzamento vs. Rota 2-Opt ($260\text{ m}$) sem cruzamento |
| **6. Intertravamento DAG** | OrdenaÃ§Ã£o TopolÃ³gica de PrecedÃªncia | Chaves de liberaÃ§Ã£o de etapas (Trava, IrDA, Chiller, Purga) | AutorizaÃ§Ã£o sequencial da rampa de pressÃ£o de 700 bar; bloqueio com aviso sonoro se etapas forem puladas |

O ambiente conta ainda com **sintetizador de Ã¡udio digital nativo** via Web Audio API, gerando tons sonoros sintetizados para cliques de comando, disparos de alarmes e confirmaÃ§Ãµes de roteamento bem-sucedido, dispensando o download de arquivos pesados de Ã¡udio externo.

## 11.5 AutomaÃ§Ã£o de Builds, CI/CD e IntegraÃ§Ã£o ContÃ­nua com GitHub Actions

A manutenÃ§Ã£o do repositÃ³rio Ã© automatizada atravÃ©s de pipelines de integraÃ§Ã£o contÃ­nua configurados em `.github/workflows/main.yml`. O pipeline Ã© acionado a cada *push* ou *pull request* submetido Ã  branch principal (`main`):

```yaml
name: CI/CD SCADA Core Automation

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]
  workflow_dispatch:

jobs:
  build-and-update:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout do RepositÃ³rio
        uses: actions/checkout@v3

      - name: Configurar Ambiente Python 3.10
        uses: actions/setup-python@v4
        with:
          python-version: '3.10'

      - name: Instalar DependÃªncias do Projeto
        run: |
          python -m pip install --upgrade pip
          if [ -f requirements.txt ]; then pip install -r requirements.txt; fi

      - name: Executar Script de AtualizaÃ§Ã£o e Metadados
        run: python main.py

      - name: Commit e Push das ModificaÃ§Ãµes AutomÃ¡ticas
        uses: stefanzweifel/git-auto-commit-action@v4
        with:
          commit_message: "Auto-update README e metadados via GitHub Actions [skip ci]"
          file_pattern: 'README.md'
```

O script utilitÃ¡rio `main.py` realiza o processamento do template `readme.template.md`, injetando a data de revisÃ£o mais recente (`datetime.strftime(now, '%d %b, %Y')`), validando a integridade dos links de documentaÃ§Ã£o e assegurando que os colaboradores cadastrados na disciplina ECAA08 sejam devidamente referenciados.

---

# CAPÃTULO 12: ANÃLISE DE RISCOS DE PROCESSO, HAZOP E MATRIZ FMEA

A manipulaÃ§Ã£o de hidrogÃªnio a 700 bar em proximidade com o pÃºblico geral impÃµe padrÃµes de seguranÃ§a equivalentes aos da indÃºstria nuclear e aeroespacial. A engenharia de confiabilidade do projeto SCADA Core baseia-se na aplicaÃ§Ã£o combinada de duas metodologias consagradas de anÃ¡lise de riscos: o **Estudo de Perigos e Operabilidade (HAZOP)** e a **AnÃ¡lise de Modos de Falha e seus Efeitos (FMEA)**, alinhados Ã  gestÃ£o de alarmes conforme a norma **ANSI/ISA-18.2**.

## 12.1 Metodologia do Estudo de Perigos e Operabilidade (HAZOP)

O mÃ©todo HAZOP (*Hazard and Operability Study*) Ã© uma tÃ©cnica qualitativa sistemÃ¡tica baseada no emprego de **palavras-guia** aplicadas Ã s **variÃ¡veis de processo** em **nÃ³s de estudo especÃ­ficos** da planta para identificar desvios operacionais, causas raÃ­zes, consequÃªncias potenciais e salvaguardas de engenharia:

* **Palavras-Guia ClÃ¡ssicas:**
  - **NÃƒO / NENHUM:** AusÃªncia total da intenÃ§Ã£o de projeto (vazÃ£o nula, ausÃªncia de resfriamento).
  - **MAIS:** Aumento quantitativo da variÃ¡vel (alta pressÃ£o, alta temperatura, sobrefluxo).
  - **MENOS:** ReduÃ§Ã£o quantitativa da variÃ¡vel (subpressÃ£o, sub-resfriamento tÃ©rmico).
  - **PARTE DE:** ComposiÃ§Ã£o do fluido incompleta ou degradada (presenÃ§a de contaminantes).
  - **BEM COMO:** Entrada de impurezas indesejadas (umidade, ar atmosfÃ©rico, nitrogÃªnio).
  - **INVERSO:** Sentido de escoamento contrÃ¡rio ao planejado (fluxo reverso entre vasos).
  - **OUTRO QUE:** CondiÃ§Ã£o completamente anÃ´mala (falha de fase elÃ©trica, colapso estrutural).

## 12.2 Planilhas Detalhadas de AnÃ¡lise HAZOP por NÃ³s de Processo

### NÃ“ DE PROCESSO 1: Linha de Armazenamento e SeleÃ§Ã£o de Cascata (Setor 100)
- **IntenÃ§Ã£o de Projeto:** Armazenar hidrogÃªnio sob pressÃµes escalonadas de 350, 700 e 1000 bar e transferir o gÃ¡s de forma estanque e controlada atÃ© o trocador criogÃªnico atravÃ©s da vÃ¡lvula XV-104.

| Desvio de Processo | Palavra-Guia | Causas ProvÃ¡veis do Desvio | ConsequÃªncias e Efeitos Potenciais | Salvaguardas Existentes e AÃ§Ãµes de MitigaÃ§Ã£o |
| :--- | :--- | :--- | :--- | :--- |
| **MAIS PressÃ£o** | MAIS | Mau funcionamento de regulador ou falha no corte dos compressores | Sobrecarga mecÃ¢nica do vaso TK-101 com risco de ruptura por fadiga | Sensor PT-101 com alarme HH a 400 bar, intertravamento de fechamento de XV-101 e vÃ¡lvula de alÃ­vio mecÃ¢nico PSV-101 |
| **MENOS PressÃ£o** | MENOS | Vazamento crÃ´nico em flanges, trinca em tubulaÃ§Ã£o ou esvaziamento total | Queda da taxa de enchimento e ineficiÃªncia de abastecimento | Sensor PT-101 com alarme L a 100 bar, inibiÃ§Ã£o de abastecimento e comutaÃ§Ã£o para banco MP |
| **MAIS Temperatura**| MAIS | Calor de compressÃ£o excessivo no carregamento rÃ¡pido do vaso | DegradaÃ§Ã£o acelerada de vedaÃ§Ãµes e fragilizaÃ§Ã£o de materiais | Transmissor TT-101 com corte a $85^\circ\text{C}$ e acionamento de ventiladores de teto |
| **INVERSO Fluxo** | INVERSO | Falha mecÃ¢nica na vÃ¡lvula XV-104 ou energizaÃ§Ã£o incorreta de bobinas | Fluxo reverso de gÃ¡s a 1000 bar para vaso dimensionado a 400 bar | VÃ¡lvulas de retenÃ§Ã£o unidirecionais em cada ramo e intertravamento elÃ©trico que impede bobinas A e B simultÃ¢neas |
| **OUTRO QUE (GÃ¡s)**| OUTRO QUE | Fissura de solda ou ruptura de tubulaÃ§Ã£o de alta pressÃ£o | FormaÃ§Ã£o de nuvem de gÃ¡s inflamÃ¡vel com alto risco de explosÃ£o | Detectores perimÃ©tricos AT-101 a AT-103 ajustados a 20%/40% LFL, corte total elÃ©trico e sirene ALM-101 |

### NÃ“ DE PROCESSO 2: Unidade de Condicionamento e Chiller CriogÃªnico (Setor 200)
- **IntenÃ§Ã£o de Projeto:** Resfriar a corrente de hidrogÃªnio gasoso de alta pressÃ£o atÃ© $-40^\circ\text{C}$ de modo contÃ­nuo durante toda a janela de dispensaÃ§Ã£o veicular.

| Desvio de Processo | Palavra-Guia | Causas ProvÃ¡veis do Desvio | ConsequÃªncias e Efeitos Potenciais | Salvaguardas Existentes e AÃ§Ãµes de MitigaÃ§Ã£o |
| :--- | :--- | :--- | :--- | :--- |
| **MAIS Temperatura**| MAIS | Falha do compressor do chiller, perda de refrigerante ou sujeira no trocador | InjeÃ§Ã£o de gÃ¡s quente no veÃ­culo, superaquecendo o liner do tanque acima de $85^\circ\text{C}$ | Transmissor TT-201 com alarme H a $-33^\circ\text{C}$ e corte instantÃ¢neo de dispensaÃ§Ã£o por violaÃ§Ã£o da SAE J2601 |
| **MENOS Temperatura**| MENOS | RotaÃ§Ã£o mÃ¡xima descontrolada do chiller em regime de baixa vazÃ£o de hidrogÃªnio | Congelamento e fragilizaÃ§Ã£o excessiva de componentes, bloqueio mecÃ¢nico | Transmissor TT-201 com alarme LL a $-50^\circ\text{C}$ e controle PID por inversor VFD-201 |
| **NENHUM Fluxo** | NENHUM | VÃ¡lvula criogÃªnica XV-201 travada na posiÃ§Ã£o fechada | Bloqueio hidrÃ¡ulico da estaÃ§Ã£o e impossibilidade de abastecer | Transmissor PT-201 acusando diferencial nulo e alarme de falha de posiÃ§Ã£o de vÃ¡lvula |

### NÃ“ DE PROCESSO 3: Linha de DispensaÃ§Ã£o e Interface Veicular (Setor 300)
- **IntenÃ§Ã£o de Projeto:** Conectar o dispenser ao veÃ­culo FCEV, estabelecer comunicaÃ§Ã£o Ã³ptica e modular a pressÃ£o em rampa contÃ­nua atÃ© 700 bar nominais.

| Desvio de Processo | Palavra-Guia | Causas ProvÃ¡veis do Desvio | ConsequÃªncias e Efeitos Potenciais | Salvaguardas Existentes e AÃ§Ãµes de MitigaÃ§Ã£o |
| :--- | :--- | :--- | :--- | :--- |
| **MAIS PressÃ£o** | MAIS | VÃ¡lvula reguladora XV-301 travada aberta ou falha no transmissor do veÃ­culo | SobrepressurizaÃ§Ã£o perigosa do cilindro automotivo com risco de ruptura | Transmissor PT-301 com trip de sobrepressÃ£o a 875 bar (1,25 x P_nom) e vÃ¡lvula de alÃ­vio mecÃ¢nico do dispenser |
| **NENHUM ComunicaÃ§Ã£o**| NENHUM | Sujeira, desalinhamento Ã³ptico ou incompatibilidade de protocolo SAE J2799 | OperaÃ§Ã£o em modo cego com risco de parÃ¢metros nÃ£o monitorados de bordo | Transceptor COM-301 com monitoramento de heartbeat e transiÃ§Ã£o imediata para modo degradado conservador |
| **OUTRO QUE (Arrasto)**| OUTRO QUE | Condutor arranca o veÃ­culo com o bico e mangueira ainda conectados | Derrubada do dispenser, arrancamento de tubulaÃ§Ãµes e vazamento massivo | VÃ¡lvula Breakaway BV-301 de desengate rÃ¡pido calibrada com fechamento de retenÃ§Ã£o em ambas as pontas |

## 12.3 Matriz de Modos de Falha e Efeitos (FMEA) e PriorizaÃ§Ã£o de Risco (RPN)

A anÃ¡lise quantitativa FMEA avalia o **NÃºmero de Prioridade de Risco** (*Risk Priority Number* - RPN) de cada componente crÃ­tico:

$$\text{RPN} = \text{Severidade (S)} \times \text{OcorrÃªncia (O)} \times \text{DetecÃ§Ã£o (D)}$$

As escalas adotadas variam de 1 a 10:
* **Severidade (S):** 1 (Impacto desprezÃ­vel) atÃ© 10 (Perigo catastrÃ³fico iminente com fatalidades ou destruiÃ§Ã£o de planta).
* **OcorrÃªncia (O):** 1 (Extremamente improvÃ¡vel, taxa $<10^{-6}/\text{ano}$) atÃ© 10 (Falha quase inevitÃ¡vel ou frequente).
* **DetecÃ§Ã£o (D):** 1 (DetecÃ§Ã£o automÃ¡tica infalÃ­vel pelo SCADA) atÃ© 10 (Falha oculta, indetectÃ¡vel atÃ© o desastre).

| Componente / Item | Modo Potencial de Falha | Efeito Potencial no Sistema | S | O | D | RPN Inicial | Medida Preventiva / Salvaguarda no SCADA Core | S' | O' | D' | RPN Final |
| :--- | :--- | :--- | :---: | :---: | :---: | :---: | :--- | :---: | :---: | :---: | :---: |
| **Mangueira FlexÃ­vel** | Ruptura mecÃ¢nica por fadiga | Vazamento massivo de H2 a 700 bar | 9 | 4 | 2 | **72** | InspeÃ§Ã£o regular, sensor de vazÃ£o Coriolis FT-301 com corte instantÃ¢neo | 9 | 1 | 1 | **9** |
| **VÃ¡lvula Breakaway** | NÃ£o desacoplar no arrasto | Tombamento do dispenser e fogo | 10 | 2 | 4 | **80** | ManutenÃ§Ã£o semestral e sensor de fim de curso reed-switch monitorado | 10 | 1 | 1 | **10** |
| **Trocador CriogÃªnico**| Perda de capacidade tÃ©rmica | InjeÃ§Ã£o a quente, dano ao tanque | 8 | 4 | 2 | **64** | TT-201 com intertravamento hardwired SIL-2 inibindo abertura de XV-301 | 8 | 1 | 1 | **8** |
| **Transmissor PT-301** | Congelamento de sinal em valor baixo| SobrepressÃ£o no tanque veicular | 9 | 3 | 3 | **81** | Transmissores redundantes em votaÃ§Ã£o 1oo2 e validaÃ§Ã£o cruzada com veÃ­culo | 9 | 1 | 1 | **9** |
| **Detector de GÃ¡s AT-301**| Perda de sensibilidade por contaminaÃ§Ã£o| FormaÃ§Ã£o oculta de nuvem inflamÃ¡vel| 9 | 4 | 4 | **144**| Teste automÃ¡tico diÃ¡rio com gÃ¡s de prova (*bump test*) e rede multissensor | 9 | 1 | 2 | **18** |
| **VÃ¡lvula Seletora XV-104**| Travamento em posiÃ§Ã£o intermediÃ¡ria | Mistura e equalizaÃ§Ã£o indevida | 7 | 3 | 2 | **42** | Microchaves de posiÃ§Ã£o nos extremos e alarme de discrepÃ¢ncia no SCADA | 7 | 1 | 1 | **7** |

A implementaÃ§Ã£o das salvaguardas de automaÃ§Ã£o reduz todos os Ã­ndices RPN para patamares inferiores a 20, demonstrando que os riscos residuais situam-se rigorosamente na zona ALARP (*As Low As Reasonably Practicable*).

## 12.4 Filosofia de GestÃ£o de Alarmes conforme a Norma ANSI/ISA-18.2

O SCADA Core implementa a filosofia de gestÃ£o de alarmes da norma **ANSI/ISA-18.2** (*Management of Alarm Systems for the Process Industries*). A meta Ã© evitar o fenÃ´meno de "inundaÃ§Ã£o de alarmes" (*alarm flooding*), garantindo que cada notificaÃ§Ã£o apresentada ao operador seja relevante, Ãºnica e exija uma resposta operacional concreta.

### 12.4.1 CategorizaÃ§Ã£o e Prioridades de Alarme:
1. **Prioridade CrÃ­tica (Vermelho Piscante):** Exige aÃ§Ã£o imediata do operador ou parada automÃ¡tica para evitar dano fÃ­sico grave, explosÃ£o ou lesÃ£o pessoal (ex.: Parada de EmergÃªncia ESD ativa, detecÃ§Ã£o de hidrogÃªnio $>40\%$ LFL, rompimento de Breakaway, sobrepressÃ£o veicular $>875\text{ bar}$).
2. **Prioridade Alta (Amarelo / Ã‚mbar):** Indica desvio severo com potencial de transiÃ§Ã£o para condiÃ§Ã£o perigosa se nÃ£o corrigido em minutos (ex.: temperatura do chiller $>-33^\circ\text{C}$, vazamento residual $>20\%$ LFL, pressÃ£o de banco excedendo limite de recarga).
3. **Prioridade MÃ©dia (Azul / Ciano):** Desvios operacionais ou avisos de manutenÃ§Ã£o preditiva (ex.: filtro de gÃ¡s saturado, falha na sincronizaÃ§Ã£o inicial IrDA, necessidade de calibraÃ§Ã£o de instrumentos).
4. **Prioridade Informativa (Verde / Cinza):** NotificaÃ§Ãµes de evento normal de processo (ex.: inÃ­cio de abastecimento autorizado, comutaÃ§Ã£o de cascata LP $\rightarrow$ MP, tÃ©rmino normal de carregamento).

### 12.4.2 Metas de Desempenho Operacional:
* MÃ©dia em regime normal: **Menos de 1 alarme a cada 10 minutos**.
* MÃ¡ximo durante os primeiros 10 minutos apÃ³s um trip severo: **Menos de 10 alarmes no total**.

## 12.5 Procedimentos Operacionais Padronizados de ContingÃªncia e EmergÃªncia

O manual de operaÃ§Ã£o vinculado ao SCADA estabelece quatro Procedimentos Operacionais Padronizados (POP) para a equipe de controle:

* **POP-01: Procedimento Diante de Alarme de GÃ¡s em NÃ­vel Alerta (20% LFL):**
  1. Confirmar no sinÃ³tico do SCADA qual sensor perifÃ©rico gerou a notificaÃ§Ã£o.
  2. Verificar se o sistema de ventilaÃ§Ã£o forÃ§ada comutou para rotaÃ§Ã£o mÃ¡xima.
  3. Despachar o AGV mÃ³vel para varredura termogrÃ¡fica e confirmaÃ§Ã£o do ponto exato de vazamento.
  4. Caso a concentraÃ§Ã£o nÃ£o regrida em 60 segundos, iniciar isolamento do setor afetado.
* **POP-02: Procedimento Diante de Alarme de GÃ¡s em NÃ­vel CrÃ­tico (40% LFL):**
  1. Pressionar imediatamente o botÃ£o de Parada de EmergÃªncia ESD caso a automaÃ§Ã£o nÃ£o tenha disparado.
  2. Evacuar a Ã¡rea em raio mÃ­nimo de 50 metros em sentido transversal ao vento.
  3. Acionar o Corpo de Bombeiros e o plano de contingÃªncia municipal.
  4. Manter supervisÃ£o visual remota pelo SCADA da despressurizaÃ§Ã£o controlada dos bancos para a tocha.
* **POP-03: Procedimento de Retomada ApÃ³s Parada de EmergÃªncia:**
  1. Inspecionar fisicamente todos os componentes que geraram o disparo primÃ¡rio.
  2. Sanar a causa mecÃ¢nica, elÃ©trica ou lÃ³gica.
  3. Realizar teste de estanqueidade e purga com NitrogÃªnio $N_2$ de alta pureza.
  4. Inserir a chave de rearme fÃ­sico no painel do operador e executar o procedimento de *Reset* no SCADA.

---

# CAPÃTULO 13: GUIA PRÃTICO DE IMPLANTAÃ‡ÃƒO, EXECUÃ‡ÃƒO E TESTES

Este capÃ­tulo fornece as instruÃ§Ãµes operacionais para configuraÃ§Ã£o de ambiente, execuÃ§Ã£o local, validaÃ§Ã£o funcional dos mÃ³dulos computacionais e execuÃ§Ã£o das baterias de testes do projeto **SCADA Core**.

## 13.1 Requisitos de Infraestrutura e DependÃªncias de Software

A arquitetura do projeto foi concebida para ser altamente portÃ¡til e leve, operando tanto em computadores convencionais quanto em servidores industriais ou contÃªineres de borda:

* **Sistema Operacional Suportado:** Linux (Ubuntu 20.04+, Debian 11+), Windows (10, 11, Windows Server), macOS (11+).
* **Navegador Web Moderno:** Google Chrome 90+, Mozilla Firefox 88+, Microsoft Edge 90+, Safari 14+ (com suporte nativo a ES6+, SVG inline e Web Audio API).
* **Ambiente de Desenvolvimento Python:** Python 3.8 ou superior (recomendado Python 3.10+).
* **Bibliotecas Python PrimÃ¡rias (para execuÃ§Ã£o dos Notebooks):**
  - `jupyter` / `notebook` / `jupyterlab` (ambiente interativo de execuÃ§Ã£o dos cadernos didÃ¡ticos).
  - `numpy` (cÃ¡lculo matricial de adjacÃªncia, incidÃªncia e Ã¡lgebra linear de grafos).
  - `scipy` (Ã¡lgebra espectral e cÃ¡lculo de autovalores da matriz Laplaciana).
  - `networkx` (biblioteca de modelagem, visualizaÃ§Ã£o e algoritmos de teoria dos grafos).
  - `matplotlib` (geraÃ§Ã£o de grÃ¡ficos e diagramas topolÃ³gicos da planta).
  - `pandas` (estruturaÃ§Ã£o de bases de tags e proposiÃ§Ãµes booleanas).

## 13.2 Procedimentos de InicializaÃ§Ã£o do Servidor Local e Interface Web

Como a aplicaÃ§Ã£o SCADA consome diagramas vetoriais SVG de forma modular atravÃ©s da API JavaScript `fetch()`, a abertura direta do arquivo `index.html` via protocolo de arquivo local (`file:///...`) pode ser bloqueada pelas polÃ­ticas de seguranÃ§a de origem cruzada (*Cross-Origin Resource Sharing* - CORS) de navegadores modernos.

Para inicializar a interface com suporte pleno de rede local:

### MÃ©todo 1: InicializaÃ§Ã£o via MÃ³dulo HTTP Nativo do Python
No terminal ou console de comando, navegue atÃ© a raiz do repositÃ³rio clonado e execute:
```bash
python -m http.server 8000
```
Em seguida, abra o navegador e acesse a URL:
```
http://localhost:8000/
```
Para acessar diretamente o simulador avanÃ§ado de teoria dos grafos:
```
http://localhost:8000/assets/simulador_grafos_h2.html
```

### MÃ©todo 2: InicializaÃ§Ã£o via Node.js / npx (Alternativo)
Caso possua ambiente Node.js instalado:
```bash
npx serve -l 8000
```

## 13.3 ExecuÃ§Ã£o e ValidaÃ§Ã£o dos Notebooks DidÃ¡ticos Jupyter

Os mÃ³dulos matemÃ¡ticos e teÃ³ricos do projeto estÃ£o distribuÃ­dos em duas pastas de notebooks interativos:
* `etapa-01-logica/`: ContÃ©m os cadernos de lÃ³gica proposicional, Ã¡lgebra booleana e sistemas especialistas (Aulas 02 a 10).
* `etapa-02-grafos/`: ContÃ©m os cadernos de modelagem topolÃ³gica, matrizes, busca em largura/profundidade, Dijkstra, problemas eulerianos e hamiltonianos (Aulas 11 a 18).

Para iniciar o servidor Jupyter e executar os cadernos:
```bash
jupyter notebook
```
Na interface web do Jupyter, abra cada caderno em sequÃªncia lÃ³gica e selecione o comando `Kernel -> Restart & Run All` para reproduzir os cÃ¡lculos analÃ­ticos, tabelas-verdade, matrizes esparsas e plotagens grÃ¡ficas.

## 13.4 Bateria de Testes Funcionais e Casos Extremos (*Corner Cases*)

Para garantir que o sistema supervisÃ³rio e seus algoritmos mantenham estabilidade absoluta mesmo sob condiÃ§Ãµes extremas de estresse operacional, o roteiro de testes do repositÃ³rio prescreve a validaÃ§Ã£o de quatro casos crÃ­ticos (*Corner Cases*):

1. **Teste de Ruptura de Aresta Ponte Simulado:**
   - No simulador de grafos, selecione o duto $e_7$ (entre o manifold e o chiller) e force um disparo de vazamento.
   - **Comportamento Esperado:** O sistema deve reconhecer instantaneamente que $e_7$ Ã© uma ponte estrutural intransponÃ­vel, abortar a rota de abastecimento em menos de $1\text{ ms}$, transitar o estado do SCADA para `ESD ATIVO!` e exibir o indicador SIS como `TRAVADO`.
2. **Teste de Desvio AutomÃ¡tico com Aresta em Paralelo:**
   - Selecione o duto $e_4$ (saÃ­da do tanque LP TK-101) e force um vazamento.
   - **Comportamento Esperado:** O sistema deve isolar $e_4$ e acionar automaticamente a rota de contingÃªncia a partir do tanque de mÃ©dia pressÃ£o TK-102 via duto $e_5$, recalculando a distÃ¢ncia Ã³tima ($42\text{ m}$) sem interromper a sessÃ£o de supervisÃ£o.
3. **Teste de ViolaÃ§Ã£o da Regra TÃ©rmica T40:**
   - Durante uma simulaÃ§Ã£o de abastecimento ativo, force o valor de TT-201 para $-25^\circ\text{C}$ (acima do limite normativo de $-33^\circ\text{C}$).
   - **Comportamento Esperado:** O motor de inferÃªncia deve disparar imediatamente a Regra R15, comutando o comando de XV-301 para nÃ­vel 0 (fechada) e registrando a infraÃ§Ã£o da norma SAE J2601 no log de auditoria.
4. **Teste de Quebra de DAG de Intertravamento:**
   - No simulador, tente ativar o botÃ£o de Rampa de PressÃ£o sem ter habilitado previamente o resfriamento a $-40^\circ\text{C}$ ou a trava mecÃ¢nica do bico.
   - **Comportamento Esperado:** O sistema deve rejeitar o comando, emitir sinal sonoro de alerta de bloqueio e destacar visualmente qual nÃ³ do DAG de seguranÃ§a estÃ¡ pendente de atendimento.

## 13.5 Proposta de Roadmap e ExtensÃµes para Ambiente Industrial Real

O projeto SCADA Core constitui uma base tÃ©cnica sÃ³lida com alto potencial de transferÃªncia de tecnologia para instalaÃ§Ãµes reais de abastecimento. As principais linhas de desenvolvimento futuro planejadas incluem:

1. **Camada de Driver Industrial OPC UA / Modbus TCP:** Implementar drivers nativos assÃ­ncronos em Python (utilizando `asyncua` ou `pymodbus`) rodando em segundo plano como um serviÃ§o daemon para conectar a interface web diretamente a CLPs industriais reais (Siemens S7-1500F, Rockwell GuardLogix ou Schneider Electric M580 Safety).
2. **Modelagem NÃ£o-Linear de TermodinÃ¢mica Real com CoolProp:** Substituir aproximaÃ§Ãµes de gÃ¡s ideal pela integraÃ§Ã£o da biblioteca `CoolProp`, permitindo calcular com precisÃ£o de laboratÃ³rio a entalpia, a densidade e o coeficiente Joule-Thomson instantÃ¢neo do hidrogÃªnio a cada milissegundo de abastecimento.
3. **MÃ³dulo de ManutenÃ§Ã£o Preditiva com Aprendizado de MÃ¡quina:** Integrar modelos de redes neurais artificiais para detectar anomalias incipientes de vibraÃ§Ã£o nos compressores multiestÃ¡gio e predizer a taxa de degradaÃ§Ã£o de sedes polimÃ©ricas de vÃ¡lvulas criogÃªnicas antes da ocorrÃªncia de vazamentos detectÃ¡veis.

---

# CAPÃTULO 14: CONSIDERAÃ‡Ã•ES FINAIS, GLOSSÃRIO E REFERÃŠNCIAS BIBLIOGRÃFICAS

## 14.1 ConclusÃµes TÃ©cnicas sobre a IntegraÃ§Ã£o LÃ³gica-Grafos-SCADA

O desenvolvimento do projeto **Estacao-de-Reabastecimento-de-Hidrogenio---SCADA-Core** evidencia com clareza como a confluÃªncia harmoniosa entre **formalismo matemÃ¡tico discreto** e **engenharia de sistemas de automaÃ§Ã£o industrial** Ã© capaz de elevar o patamar de seguranÃ§a, confiabilidade e eficiÃªncia das estaÃ§Ãµes de hidrogÃªnio verde.

Ao abandonar formulaÃ§Ãµes empÃ­ricas e estruturar a automaÃ§Ã£o da planta sobre os pilares da **LÃ³gica Proposicional** e da **Teoria dos Grafos**, o projeto alcanÃ§a:
1. **Determinismo Absoluto de SeguranÃ§a:** A prova formal de corretude atravÃ©s de tabelas-verdade, Ã¡lgebra booleana e resoluÃ§Ã£o dedutiva elimina brechas de intertravamento, assegurando que o sistema jamais atinja estados perigosos indefinidos.
2. **Capacidade DiagnÃ³stica Superior:** O motor de inferÃªncia baseado em regras com encadeamento progressivo e regressivo permite identificar causas raÃ­zes em fraÃ§Ãµes de segundo, superando as limitaÃ§Ãµes operacionais da sobrecarga humana diante de avalanches de alarmes.
3. **Adaptabilidade TopolÃ³gica DinÃ¢mica:** A modelagem por dÃ­grafos ponderados viabiliza desvios automÃ¡ticos de fluxo em tempo real, planejamento otimizado de inspeÃ§Ãµes mecÃ¢nicas nÃ£o-destrutivas por robÃ´s inteligentes e logÃ­stica integrada de frotas rodoviÃ¡rias de suprimento.
4. **ExcelÃªncia PedagÃ³gica e ErgonÃ´mica:** O ambiente visual moderno baseado em padrÃµes web abertos proporciona uma ferramenta didÃ¡tica sem precedentes para a formaÃ§Ã£o de novos engenheiros e tÃ©cnicos dedicados Ã  infraestrutura da economia do hidrogÃªnio.

## 14.2 GlossÃ¡rio Exaustivo de Termos TÃ©cnicos e Siglas de Engenharia

* **AGV (Automated Guided Vehicle):** VeÃ­culo autÃ´nomo industrial sobre rodas guiado por sensores Ã³pticos e magnÃ©ticos para transporte e patrulhamento de Ã¡reas industriais.
* **APRR (Average Pressure Ramp Rate):** Taxa mÃ©dia de aumento de pressÃ£o (expressa em MPa/min) regulada pela norma SAE J2601 para prevenir sobreaquecimento do tanque veicular.
* **ATEX (Appareils destinÃ©s Ã  Ãªtre utilisÃ©s en ATmosphÃ¨res EXplosibles):** Diretivas da UniÃ£o Europeia que regulamentam a fabricaÃ§Ã£o e instalaÃ§Ã£o de equipamentos elÃ©tricos e nÃ£o-elÃ©tricos em atmosferas potencialmente explosivas.
* **BEV (Battery Electric Vehicle):** VeÃ­culo elÃ©trico movido exclusivamente por acumuladores eletroquÃ­micos (baterias).
* **Breakaway Valve (VÃ¡lvula de Desacoplamento):** Dispositivo mecÃ¢nico de seguranÃ§a que se desacopla em caso de traÃ§Ã£o mecÃ¢nica excessiva na mangueira, vedando instantaneamente ambos os lados do corte.
* **Chiller CriogÃªnico:** Sistema de refrigeraÃ§Ã£o mecÃ¢nica industrial capaz de resfriar a corrente de hidrogÃªnio atÃ© $-40^\circ\text{C}$ (Classe T40).
* **CLP / PLC (Controlador LÃ³gico ProgramÃ¡vel):** Computador industrial robustecido para controle determinÃ­stico de processos em tempo real.
* **Coriolis (Medidor de VazÃ£o MÃ¡ssica):** Instrumento de altÃ­ssima precisÃ£o baseado na forÃ§a inercial de Coriolis que mede diretamente a massa fluida escoando pela tubulaÃ§Ã£o, independente de variaÃ§Ãµes de densidade e pressÃ£o.
* **DAG (Directed Acyclic Graph):** Grafo dirigido e acÃ­clico; modelo matemÃ¡tico utilizado para sequenciamento determinÃ­stico de etapas prÃ©-operacionais sem laÃ§os infinitos.
* **DÃ­grafo (Directed Graph):** Grafo no qual todas as arestas possuem direÃ§Ã£o e sentido definidos de fluxo.
* **Dijkstra (Algoritmo):** Algoritmo clÃ¡ssico para cÃ¡lculo do caminho de custo mÃ­nimo entre nÃ³s em um grafo com pesos nÃ£o-negativos.
* **ESD (Emergency Shutdown):** Sistema instrumentado de parada de emergÃªncia de alta prioridade que desenergiza atuadores e isola fluidos perigosos.
* **Fail-Close:** Filosofia de projeto mecÃ¢nico onde a vÃ¡lvula transita imediatamente para a posiÃ§Ã£o fechada na ausÃªncia de sinal de comando, ar comprimido ou energia elÃ©trica.
* **FCEV (Fuel Cell Electric Vehicle):** VeÃ­culo elÃ©trico a cÃ©lula de combustÃ­vel abastecido com hidrogÃªnio comprimido a alta pressÃ£o.
* **FMEA (Failure Mode and Effects Analysis):** Metodologia de engenharia que quantifica os modos potenciais de falha de componentes atravÃ©s do Ã­ndice de prioridade de risco RPN.
* **Forward Chaining:** RaciocÃ­nio lÃ³gico orientado por dados (da premissa Ã  conclusÃ£o).
* **Backward Chaining:** RaciocÃ­nio lÃ³gico orientado por objetivos (da hipÃ³tese aos fatos primÃ¡rios geradores).
* **HAZOP (Hazard and Operability Study):** TÃ©cnica sistemÃ¡tica de identificaÃ§Ã£o de perigos industriais baseada no uso estruturado de palavras-guia.
* **HIC (Hydrogen-Induced Cracking):** FragilizaÃ§Ã£o e fissuraÃ§Ã£o do aÃ§o provocada pela difusÃ£o e aprisionamento atÃ´mico de hidrogÃªnio no reticulado cristalino do metal.
* **HRS (Hydrogen Refueling Station):** EstaÃ§Ã£o industrial de reabastecimento veicular de hidrogÃªnio comprimido.
* **IrDA (Infrared Data Association):** PadrÃ£o de comunicaÃ§Ã£o Ã³ptica sem fio por feixes infravermelhos regulamentado pela norma SAE J2799 para comunicaÃ§Ã£o entre veÃ­culo e bico dispensador.
* **ISA-5.1:** Norma internacional da *International Society of Automation* para padronizaÃ§Ã£o de simbologia e identificaÃ§Ã£o de tags de instrumentaÃ§Ã£o.
* **ISA-18.2:** Norma tÃ©cnica para especificaÃ§Ã£o e gerenciamento do ciclo de vida de sistemas de alarme industriais.
* **LFL (Lower Flammability Limit):** ConcentraÃ§Ã£o volumÃ©trica mÃ­nima de um gÃ¡s no ar abaixo da qual a mistura nÃ£o sustenta combustÃ£o (para o hidrogÃªnio, $LFL \approx 4{,}0\%$).
* **Modbus TCP:** Protocolo aberto de comunicaÃ§Ã£o industrial baseado na arquitetura cliente-servidor sobre barramento Ethernet TCP/IP.
* **OPC UA (Open Platform Communications Unified Architecture):** PadrÃ£o de interoperabilidade multiplataforma orientado a serviÃ§os para intercÃ¢mbio seguro e confiÃ¡vel de dados industriais.
* **PEMFC (Proton Exchange Membrane Fuel Cell):** Pilha eletroquÃ­mica de combustÃ­vel com membrana polimÃ©rica de troca de prÃ³tons operando em baixas temperaturas ($60\text{ a }80^\circ\text{C}$).
* **PIG (Pipeline Inspection Gauge):** RobÃ´ raspador instrumentado inserido no interior de tubulaÃ§Ãµes para limpeza e inspeÃ§Ã£o nÃ£o-destrutiva de defeitos de parede.
* **PSV (Pressure Safety Valve):** VÃ¡lvula mecÃ¢nica de seguranÃ§a e alÃ­vio de pressÃ£o com mola de aÃ§Ã£o direta.
* **Quine-McCluskey:** MÃ©todo tabular exato para simplificaÃ§Ã£o de funÃ§Ãµes booleanas e obtenÃ§Ã£o de implicantes primos essenciais.
* **SAE J2601:** Protocolo normativo global que dita as taxas de rampa de pressÃ£o e os envelopes de seguranÃ§a tÃ©rmica para abastecimento de hidrogÃªnio a 700 bar.
* **SAE J2799:** Norma que regulamenta a interface de comunicaÃ§Ã£o de dados sem fio entre o automÃ³vel FCEV e a estaÃ§Ã£o dispensadora de hidrogÃªnio.
* **SCADA (Supervisory Control and Data Acquisition):** Sistema supervisÃ³rio para aquisiÃ§Ã£o de dados, controle de processo e monitoramento grÃ¡fico centralizado de plantas industriais.
* **SIL (Safety Integrity Level):** NÃ­vel discreto de integridade de seguranÃ§a (de SIL-1 a SIL-4) que quantifica a capacidade de reduÃ§Ã£o de risco de um sistema instrumentado de seguranÃ§a.
* **SIS (Safety Instrumented System):** Sistema composto por sensores, solucionadores lÃ³gicos de seguranÃ§a e elementos finais de controle dedicados Ã  execuÃ§Ã£o de funÃ§Ãµes instrumentadas de seguranÃ§a (SIF).
* **SOC (State of Charge):** Estado de carga percentual de densidade de combustÃ­vel contido no interior do tanque veicular.
* **Tarjan (Algoritmo):** Algoritmo baseado em busca em profundidade para identificaÃ§Ã£o eficiente de componentes fortemente conexas, arestas pontes e vÃ©rtices de articulaÃ§Ã£o em tempo linear $\mathcal{O}(|V| + |E|)$.
* **TMR (Triple Modular Redundancy):** Arquitetura computacional de seguranÃ§a tolerante a falhas baseada em votaÃ§Ã£o dois de trÃªs (2oo3).
* **TPRD (Thermally Activated Pressure Relief Device):** Dispositivo de alÃ­vio mecÃ¢nico termicamente ativado presente nos tanques veiculares que despressuriza o cilindro em caso de incÃªndio externo para evitar explosÃ£o mecÃ¢nica.
* **TSP (Travelling Salesperson Problem):** Problema do Caixeiro Viajante; desafio combinatÃ³rio NP-DifÃ­cil para determinar o menor circuito que visita um conjunto fixo de nÃ³s.
* **Tube Trailer:** Semirreboque rodoviÃ¡rio equipado com mÃºltiplos cilindros compÃ³sitos de alta pressÃ£o interconectados para transporte a granel de gÃ¡s comprimido.

## 14.3 ReferÃªncias BibliogrÃ¡ficas Normativas e AcadÃªmicas

1. **SOCIETY OF AUTOMOTIVE ENGINEERS (SAE).** *SAE J2601: Fueling Protocols for Light Duty Gaseous Hydrogen Surface Vehicles*. Warrendale: SAE International, 2020.
2. **SOCIETY OF AUTOMOTIVE ENGINEERS (SAE).** *SAE J2799: Hydrogen Surface Vehicle to Station Communications Hardware and Software*. Warrendale: SAE International, 2019.
3. **INTERNATIONAL ORGANIZATION FOR STANDARDIZATION (ISO).** *ISO 19880-1: Gaseous hydrogen â€” Fuelling stations â€” Part 1: General requirements*. Genebra: ISO, 2020.
4. **INTERNATIONAL ORGANIZATION FOR STANDARDIZATION (ISO).** *ISO 14687: Hydrogen fuel quality â€” Product specification*. Genebra: ISO, 2019.
5. **NATIONAL FIRE PROTECTION ASSOCIATION (NFPA).** *NFPA 2: Hydrogen Technologies Code*. Quincy: NFPA, 2023.
6. **INTERNATIONAL ELECTROTECHNICAL COMMISSION (IEC).** *IEC 61508: Functional safety of electrical/electronic/programmable electronic safety-related systems*. Genebra: IEC, 2010.
7. **INTERNATIONAL ELECTROTECHNICAL COMMISSION (IEC).** *IEC 61511: Functional safety - Safety instrumented systems for the process industry sector*. Genebra: IEC, 2016.
8. **INTERNATIONAL SOCIETY OF AUTOMATION (ISA).** *ANSI/ISA-5.1: Instrumentation Symbols and Identification*. Research Triangle Park: ISA, 2009.
9. **INTERNATIONAL SOCIETY OF AUTOMATION (ISA).** *ANSI/ISA-18.2: Management of Alarm Systems for the Process Industries*. Research Triangle Park: ISA, 2016.
10. **AMERICAN SOCIETY OF MECHANICAL ENGINEERS (ASME).** *ASME B31.12: Hydrogen Piping and Pipelines*. Nova York: ASME, 2019.
11. **OGATA, K.** *Modern Control Engineering*. 5. ed. Boston: Prentice Hall, 2010.
12. **BONDY, J. A.; MURTY, U. S. R.** *Graph Theory*. Nova York: Springer, 2008. (Graduate Texts in Mathematics, 244).
13. **CORMEN, T. H. et al.** *Introduction to Algorithms*. 3. ed. Cambridge: MIT Press, 2009.
14. **RUSSELL, S.; NORVIG, P.** *Artificial Intelligence: A Modern Approach*. 4. ed. Nova York: Pearson, 2020.
15. **LEWIS, E. E.** *Introduction to Reliability Engineering*. 2. ed. Nova York: John Wiley & Sons, 1996.
16. **UNIVERSIDADE FEDERAL DE ITAJUBÃ (UNIFEI).** *Plano de Ensino da Disciplina ECAA08: LÃ³gica MatemÃ¡tica e Teoria dos Grafos Aplicadas Ã  AutomaÃ§Ã£o Industrial*. ItajubÃ¡: IESTI/UNIFEI, 2026.
17. **VARGAS, L.; CANDELARIA, M.; AUGUSTO, L.; PEDRO, J.** *EstaÃ§Ã£o de Reabastecimento de HidrogÃªnio - SCADA Core: RepositÃ³rio de Engenharia de AutomaÃ§Ã£o e SimulaÃ§Ã£o Interativa*. GitHub, 2026. DisponÃ­vel em: <https://github.com/leovarconrenno/Estacao-de-Reabastecimento-de-Hidrogenio---SCADA-Core>.
