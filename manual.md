# MANUAL TÉCNICO INTEGRAL DE ENGENHARIA, OPERAÇÃO E ANÁLISE ARQUITETURAL
# SISTEMA SCADA CORE PARA ESTAÇÃO DE REABASTECIMENTO DE HIDROGÊNIO (HRS - FCEV)

**Universidade Federal de Itajubá - UNIFEI**  
**Instituto de Engenharia de Sistemas e Tecnologias da Informação (IESTI)**  
**Disciplina:** ECAA08 - Lógica Aplicada e Teoria dos Grafos para Automação  
**Repositório Oficial:** `leovarconrenno/Estacao-de-Reabastecimento-de-Hidrogenio---SCADA-Core`  
**Equipe de Desenvolvimento:** João Pedro, Marcelo Candelaria, Luca Augusto, Leo Vargas  
**Documento de Engenharia:** Revisão Técnica Consolidada, Análise Estrutural e Manual Completo  
**Classificação:** Documentação Técnica Industrial e Referencial de Controle e Automação  

---

## SUMÁRIO EXECUTIVO E ÍNDICE GERAL

- **SEÇÃO PRELIMINAR: ANÁLISE ESTRUTURAL E ARQUITETURAL DO REPOSITÓRIO GITHUB**
  - Contexto Acadêmico e Motivação do Projeto na UNIFEI
  - Topografia de Arquivos, Pastas e Artefatos de Software
  - Módulo 1 (Etapa 01 - Lógica Formal e Sistemas Especialistas)
  - Módulo 2 (Etapa 02 - Teoria dos Grafos Aplicada a Redes de Tubulação)
  - Módulo 3 (Interface Supervisória Web, P&ID Interativo e Simulador Didático)
  - Automação de CI/CD e Pipelines do GitHub Actions

- **CAPÍTULO 1: INTRODUÇÃO GERAL, CONTEXTO E VISÃO SISTÊMICA**
  - 1.1 O Papel do Hidrogênio Verde na Transição Energética Global
  - 1.2 Tecnologias de Mobilidade Elétrica a Célula de Combustível (FCEV)
  - 1.3 Anatomia Funcional de uma Estação de Hidrogênio (HRS)
  - 1.4 A Centralidade dos Sistemas SCADA e Automação Industrial Crítica
  - 1.5 Contextualização do Projeto SCADA Core UNIFEI
  - 1.6 Estrutura Organizacional do Repositório e Artefatos do Projeto

- **CAPÍTULO 2: NORMAS TÉCNICAS E DIRETRIZES INTERNACIONAIS DE SEGURANÇA**
  - 2.1 SAE J2601: Protocolo de Abastecimento para Veículos Leves de Alta Pressão
  - 2.2 SAE J2799: Protocolo de Comunicação Sem Fio e Infravermelho (IrDA)
  - 2.3 ISO 19880-1: Requisitos Globais de Segurança e Desempenho para HRS
  - 2.4 NFPA 2: Código Tecnológico de Hidrogênio e Mitigação de Riscos de Explosão
  - 2.5 IEC 61508 e IEC 61511: Segurança Funcional e Sistemas Instrumentados (SIS / SIL)
  - 2.6 Classificação de Áreas Potencialmente Explosivas (ATEX / IECEx / NR-10 / NR-20)
  - 2.7 ASME B31.12: Engenharia de Tubulações para Hidrogênio Gasoso

- **CAPÍTULO 3: TERMODINÂMICA E ENGENHARIA DO PROCESSO DE COMPRESSÃO E TRANSFERÊNCIA**
  - 3.1 Propriedades Físico-Químicas Críticas do Gás Hidrogênio (H2)
  - 3.2 O Efeito Joule-Thomson e o Fenômeno de Inversão Térmica
  - 3.3 Necessidade Crítica de Pré-resfriamento Criogênico (-40°C / Classe T40)
  - 3.4 Filosofia de Armazenamento em Cascata (Cascade Storage: LP, MP, HP)
  - 3.5 Taxa Média de Rampa de Pressão (APRR) e Prevenção de Fadiga Térmica
  - 3.6 Dinâmica de Carregamento em Tanques Tipo IV (Polímero e Fibra de Carbono)

- **CAPÍTULO 4: ARQUITETURA FÍSICA DA PLANTA E INSTRUMENTAÇÃO P&ID**
  - 4.1 Setor 100: Armazenamento e Compressão Multiestágio
  - 4.2 Setor 200: Condicionamento Térmico e Unidade de Resfriamento (Chiller)
  - 4.3 Setor 300: Linha de Dispensação e Interface Veicular
  - 4.4 Filosofia Operacional das Válvulas de Bloqueio Rápido e Seleção Direcional
  - 4.5 Mecanismos de Alívio Mecânico (PSV) e Parada de Emergência (ESD)

- **CAPÍTULO 5: MAPA DE VARIÁVEIS, DICIONÁRIO DE TAGS E PROTOCOLOS DE COMUNICAÇÃO**
  - 5.1 Padronização ISA-5.1 para Instrumentação e Malhas de Controle
  - 5.2 Dicionário Exaustivo de Entradas Analógicas (AI)
  - 5.3 Dicionário Exaustivo de Entradas Discretas (DI)
  - 5.4 Dicionário Exaustivo de Saídas Analógicas (AO)
  - 5.5 Dicionário Exaustivo de Saídas Discretas (DO)
  - 5.6 Mapeamento de Registradores Industriais (Modbus TCP e Nós OPC UA)

- **CAPÍTULO 6: ETAPA 01 - LÓGICA PROPOSICIONAL, BOOLEANA E INTERTRAVAMENTOS DE SEGURANÇA**
  - 6.1 Formalização Lógica de Estados Físicos e Variáveis Discretas
  - 6.2 Conectivos Fundamentais, Tabelas-Verdade e Permissivos Operacionais
  - 6.3 Análise Algébrica de Tautologias, Contradições e Contingências
  - 6.4 Formas Canônicas: Forma Normal Disjuntiva (FND) e Conjuntiva (FNC)
  - 6.5 Otimização Lógica: Mapas de Karnaugh e Algoritmo de Quine-McCluskey
  - 6.6 Predicados de Primeira Ordem e Quantificadores em Redes de Sensores
  - 6.7 Regras de Inferência Dedutiva e Resolução Proposicional
  - 6.8 Arquitetura de Intertravamento SIS e Votação Redundante (1oo2, 2oo3)

- **CAPÍTULO 7: SISTEMAS ESPECIALISTAS E MOTORES DE INFERÊNCIA DIAGNÓSTICA**
  - 7.1 Fundamentos de Sistemas Baseados em Regras (Rule-Based Systems - RBS)
  - 7.2 Estrutura da Base de Conhecimento e Regras de Produção IF-THEN
  - 7.3 Motor de Inferência por Encadeamento para Frente (Forward Chaining)
  - 7.4 Motor de Inferência por Encadeamento para Trás (Backward Chaining)
  - 7.5 Matriz de Correlação Sintoma-Causa-Ação para Diagnóstico Preditivo
  - 7.6 Implementação Computacional e Algoritmos de Diagnóstico em Tempo Real
  - 7.7 Avaliação de Eficácia do Módulo de Diagnóstico

- **CAPÍTULO 8: ETAPA 02 - TEORIA DOS GRAFOS E MODELAGEM TOPOLÓGICA DE TUBULAÇÕES**
  - 8.1 Modelagem Estrutural por Dígrafos Ponderados G = (V, E, W)
  - 8.2 Definição Topológica dos Vértices e Arestas da Planta H2
  - 8.3 Representações Matriciais: Adjacência, Incidência e Custos Hidráulicos
  - 8.4 Matriz Laplaciana e Propriedades Espectrais da Conectividade da Planta
  - 8.5 Tipologias de Passeios, Trilhas, Caminhos e Ciclos em Redes de Dutos
  - 8.6 Análise de Redundância e Lema do Aperto de Mãos Dirigido

- **CAPÍTULO 9: ALGORITMOS DE BUSCA, CAMINHO MÍNIMO E ROTEAMENTO DINÂMICO**
  - 9.1 Busca em Largura (BFS): Propagação de Pressão e Varredura de Alcance
  - 9.2 Busca em Profundidade (DFS): Rastreamento de Linhas e Detecção de Ciclos
  - 9.3 Algoritmo de Dijkstra para Otimização de Rota de Abastecimento
  - 9.4 Arestas Pontes (Bridges) e Vértices de Articulação Críticos
  - 9.5 Simulação de Vazamentos e Algoritmo de Desvio Automático em Tempo Real
  - 9.6 Intertravamento de Segurança via Grafo Acíclico Dirigido (DAG)

- **CAPÍTULO 10: OTIMIZAÇÃO DE INSPEÇÃO INDUSTRIAL E LOGÍSTICA DE INSUMOS**
  - 10.1 Problemas Eulerianos e Inspeção Integral por Robô PIG Ultrassônico
  - 10.2 Algoritmos de Hierholzer e Fleury para Trajetórias Eulerianas
  - 10.3 Problemas Hamiltonianos e Roteamento de Veículos Autônomos (AGV)
  - 10.4 Resolução do Problema do Caixeiro Viajante (TSP) com Heurística 2-Opt
  - 10.5 Grafos de Fluxo Máximo e Cadeia Logística de Transporte de H2 (Tube Trailers)

- **CAPÍTULO 11: ARQUITETURA DE SOFTWARE DO SCADA CORE E SIMULADOR WEB**
  - 11.1 Arquitetura Front-End: HTML5 Semântico, CSS3 e Design Responsivo
  - 11.2 Integração Dinâmica com Diagrama Vetorial P&ID em Formato SVG
  - 11.3 Controlador de Estados JavaScript e Manipulação do DOM em Tempo Real
  - 11.4 Simulador Didático de Grafos e Painel Interativo de Tomada de Decisão
  - 11.5 Automação de Builds, CI/CD e Integração Contínua com GitHub Actions

- **CAPÍTULO 12: ANÁLISE DE RISCOS DE PROCESSO, HAZOP E MATRIZ FMEA**
  - 12.1 Metodologia do Estudo de Perigos e Operabilidade (HAZOP)
  - 12.2 Planilhas Detalhadas de Análise HAZOP por Nós de Processo
  - 12.3 Matriz de Modos de Falha e Efeitos (FMEA) e Priorização de Risco (RPN)
  - 12.4 Filosofia de Gestão de Alarmes conforme a Norma ANSI/ISA-18.2
  - 12.5 Procedimentos Operacionais Padronizados de Contingência e Emergência

- **CAPÍTULO 13: GUIA PRÁTICO DE IMPLANTAÇÃO, EXECUÇÃO E TESTES**
  - 13.1 Requisitos de Infraestrutura e Dependências de Software
  - 13.2 Procedimentos de Inicialização do Servidor Local e Interface Web
  - 13.3 Execução e Validação dos Notebooks Didáticos Jupyter
  - 13.4 Bateria de Testes Funcionais e Casos Extremos (Corner Cases)
  - 13.5 Proposta de Roadmap e Extensões para Ambiente Industrial Real

- **CAPÍTULO 14: CONSIDERAÇÕES FINAIS, GLOSSÁRIO E REFERÊNCIAS BIBLIOGRÁFICAS**
  - 14.1 Conclusões Técnicas sobre a Integração Lógica-Grafos-SCADA
  - 14.2 Glossário Exaustivo de Termos Técnicos e Siglas de Engenharia
  - 14.3 Referências Bibliográficas Normativas e Acadêmicas

---

# SEÇÃO PRELIMINAR: ANÁLISE ESTRUTURAL E ARQUITETURAL DO REPOSITÓRIO GITHUB

## Contexto Acadêmico e Motivação do Projeto na UNIFEI
O projeto de código aberto **Estacao-de-Reabastecimento-de-Hidrogenio---SCADA-Core** foi concebido no âmbito do Instituto de Engenharia de Sistemas e Tecnologias da Informação (IESTI) da Universidade Federal de Itajubá (UNIFEI), na disciplina **ECAA08 (Lógica Aplicada e Teoria dos Grafos para Automação)**.

Os autores originais — **João Pedro, Marcelo Candelaria, Luca Augusto e Leo Vargas** — estruturaram a iniciativa para preencher uma lacuna existente entre o ensino de matemática discreta/ciência da computação teórica e a prática da engenharia de controle e automação industrial.

O objeto físico modelado é uma **Estação de Reabastecimento de Hidrogênio (HRS - Hydrogen Refueling Station)** projetada para veículos elétricos movidos a célula de combustível (*Fuel Cell Electric Vehicles* - FCEV) operando sob pressões ultra-elevadas (350 bar e 700 bar), em estrita conformidade com protocolos globais (SAE J2601, SAE J2799, ISO 19880-1, NFPA 2).

## Topografia de Arquivos e Artefatos do Repositório
O repositório apresenta uma hierarquia modular:
Estacao-de-Reabastecimento-de-Hidrogenio---SCADA-Core/ ├── .github/workflows/main.yml # Pipeline CI/CD do GitHub Actions ├── assets/ # Recursos da IHM Web e Simulador │ ├── css/styles.css # Folha de estilos Dark/Light Mode Glassmorphism │ ├── js/main.js # Controlador principal da IHM e modais │ ├── js/diagram.js # Mapeamento dinâmico de tooltips e DOM SVG │ ├── js/config.js # Variáveis e constantes de processo │ ├── js/contributors.js # Integração assíncrona com a API GitHub │ ├── diagrama.svg # Fluxograma P&ID vetorial da estação │ └── simulador_grafos_h2.html # Laboratório didático de teoria dos grafos ├── etapa-01-logica/ # Módulo 1: Lógica Proposicional e Booleana │ ├── 00 - Insumos.md # Mapeamento de matérias-primas e tags ISA-5.1 │ ├── 02 a 10 (*.ipynb, .md) # Notebooks de álgebra booleana e sistemas especialistas │ └── proposicoes_logicas_H2.csv# Base tabular de proposições e equações de intertravamento ├── etapa-02-grafos/ # Módulo 2: Teoria dos Grafos em Tubulações │ ├── 11 a 18 (.ipynb, *.md) # Notebooks de dígrafos, matrizes, BFS/DFS, Dijkstra, PIG, AGV │ └── grafo_tubulacoes.svg/.png # Diagrama da rede ponderada de dutos ├── index.html # Interface principal do sistema supervisório ├── main.py # Script de manutenção e compilação do README ├── README.md # Documento consolidado do repositório └── readme.template.md # Template com marcadores para automação


---

# CAPÍTULO 1: INTRODUÇÃO GERAL, CONTEXTO E VISÃO SISTÊMICA

## 1.1 O Papel do Hidrogênio Verde na Transição Energética Global
A transição energética global em direção a uma matriz de baixo carbono estabelece o hidrogênio verde ($H_2$) como um dos pilares mais promissores para a descarbonização profunda da economia. Setores industriais de difícil abatimento (*hard-to-abate sectors*), como siderurgia, indústria química, transporte rodoviário pesado de carga, transporte marítimo e aviação, encontram no hidrogênio uma densidade energética por unidade de massa sem precedentes (aproximadamente $120\text{ MJ/kg}$ a $142\text{ MJ/kg}$ em poder calorífico inferior, quase três vezes superior à da gasolina ou do óleo diesel).

Diferentemente dos combustíveis fósseis tradicionais, a oxidação eletroquímica do hidrogênio em uma célula de combustível (*Fuel Cell*) produz exclusivamente vapor de água de alta pureza e calor útil como subprodutos operacionais, eliminando em 100% a emissão direta de gases de efeito estufa (GEE), tais como dióxido de carbono ($CO_2$), metano ($CH_4$) e óxidos nitrosos ($N_2O$), além de erradicar poluentes locais severos como óxidos de enxofre ($SO_x$), óxidos de nitrogênio ($NO_x$) e material particulado inalável ($MP_{2.5}$).

A cadeia de valor do hidrogênio verde baseia-se na eletrólise da água alimentada por fontes renováveis de eletricidade, notadamente energia solar fotovoltaica e energia eólica. Nesse ecossistema, o hidrogênio atua como um vetor de armazenamento energético sazonal de grande escala, capaz de mitigar a intermitência intrínseca das fontes renováveis e fornecer estabilidade à rede elétrica nacional (*grid balancing*). No entanto, o aproveitamento pleno desse vetor na mobilidade veicular exige uma infraestrutura de distribuição e abastecimento de alta sofisticação tecnológica.
 [ Fonte Renovável ] ---> [ Eletrolisador PEM ] ---> [ Estação de Compressão ]
  (Solar / Eólica / PCH)         (Água -> H2 + O2)         (Estágios LP -> MP -> HP)
                                                                   |
                                                                   v
   [ Veículo FCEV ] <--- [ Bico Dispensador ] <--- [ Chiller T40 ] <--- [ Banco de Armazenamento ]
    (Tanque 700 bar)     (SAE J2601 / -40°C)      (Troca Térmica)       (Cascata 350/700/1000 bar)

    
## 1.2 Tecnologias de Mobilidade Elétrica a Célula de Combustível (FCEV)
Os Veículos Elétricos a Célula de Combustível (*Fuel Cell Electric Vehicles* - FCEV) combinam o dinamismo e o alto rendimento dos motores elétricos com a conveniência do rápido reabastecimento típico dos veículos convencionais a combustão interna. Enquanto veículos elétricos puramente a bateria (*Battery Electric Vehicles* - BEV) demandam de 30 a 90 minutos em estações de recarga rápida de corrente contínua (DC Fast Charging) para restabelecer cerca de 80% de sua autonomia, um veículo FCEV moderno pode ser completamente reabastecido em uma janela estrita de 3 a 5 minutos, recuperando autonomias superiores a 650 quilômetros.

O coração propulsor do veículo FCEV é a pilha de células de combustível com membrana de troca de prótons (*Proton Exchange Membrane Fuel Cell* - PEMFC). No anodo da célula, moléculas de hidrogênio gasoso são dissociadas cataliticamente sobre nanopartículas de platina em prótons ($H^+$) e elétrons ($e^-$):

$$H_2 \rightarrow 2H^+ + 2e^- \quad (E^\circ = 0{,}00\text{ V})$$

Os prótons migram através da membrana condutora eletrolítica polimérica seletiva até o catodo, enquanto os elétrons livres circulam por um circuito externo, gerando a corrente contínua necessária para alimentar o inversor de tração e o motor elétrico. No catodo, o oxigênio atmosférico absorvido é reduzido cataliticamente:

$$\frac{1}{2}O_2 + 2H^+ + 2e^- \rightarrow H_2O \quad (E^\circ = +1{,}23\text{ V})$$

$$\text{Reação Global:} \quad H_2 + \frac{1}{2}O_2 \rightarrow H_2O \quad (\Delta H = -285{,}8\text{ kJ/mol})$$

Para que esse ciclo ocorra com máxima densidade de potência embarcada, o hidrogênio deve ser armazenado sob pressões extremamente elevadas, prioritariamente no patamar nominal de 700 bar (aproximadamente $10.150\text{ psi}$ ou $70\text{ MPa}$) para automóveis leves de passeio, ou 350 bar ($5.075\text{ psi}$ ou $35\text{ MPa}$) para ônibus, trens e caminhões pesados.

## 1.3 Anatomia Funcional de uma Estação de Hidrogênio (HRS)
Uma Estação de Reabastecimento de Hidrogênio (*Hydrogen Refueling Station* - HRS) é estruturada em cinco subsistemas integrados essenciais:
1. **Subsistema de Recepção e Suprimento:** Composto por eletrolisadores locais ou linha de descarregamento de carretas semirreboque de cilindros compósitos (*tube trailers*), entregando gás comprimido entre 200 bar e 350 bar.
2. **Subsistema de Compressão Mecânica Multiestágio:** Compressores industriais de deslocamento positivo (compressores de pistão alternativo não lubrificado ou diafragma metálico) elevam o gás sequencialmente até patamares de 450 bar, 750 bar e 1000 bar.
3. **Subsistema de Armazenamento Estacionário em Cascata:** Segmentado em múltiplos níveis de pressão:
   - Banco de Baixa Pressão (LP): $350\text{ a }400\text{ bar}$.
   - Banco de Média Pressão (MP): $650\text{ a }700\text{ bar}$.
   - Banco de Alta Pressão (HP): $900\text{ a }1000\text{ bar}$.
4. **Subsistema de Condicionamento Térmico Criogênico (Chiller):** Trocador de calor microestruturado compacto resfriando o hidrogênio até $-40^\circ\text{C}$ (Classe T40 da SAE J2601) para neutralizar o calor de compressão adiabática no cilindro veicular.
5. **Subsistema de Dispensação Veicular (Dispenser):** Gabinete metálico com medidor mássico Coriolis de alta pressão, mangueiras flexíveis reforçadas com fios de aramida, bico hermético com trava mecânica, válvula *breakaway* de segurança contra arrancadas acidentais e receptor infravermelho IrDA (SAE J2799).

---

# CAPÍTULO 2: NORMAS TÉCNICAS E DIRETRIZES INTERNACIONAIS DE SEGURANÇA

A conformidade com padrões mundiais de segurança norteia o desenvolvimento do SCADA Core:

## 2.1 SAE J2601: Protocolo de Abastecimento para Veículos Leves
Regulamenta o abastecimento de veículos leves FCEV garantindo que o cilindro atinja 100% de Estado de Carga (*State of Charge* - SOC) sem violar três barreiras físicas estritas:
1. **Temperatura Máxima no Liner do Cilindro:** $T_{max} = +85^\circ\text{C}$.
2. **Pressão Máxima Transiente da Estação:** $P_{max} = 1{,}25 \times P_{nominal} = 875\text{ bar}$ para veículos H70.
3. **Densidade Máxima de Massa:** $\rho_{max} = 40{,}2\text{ g/L}$.

A norma estabelece a Taxa Média de Rampa de Pressão (*Average Pressure Ramp Rate* - APRR) e classifica as estações de acordo com sua capacidade de refrigeração:
* **Classe T40 (Adotada no Projeto):** $-40^\circ\text{C} \leq T_{saída} \leq -33^\circ\text{C}$ (abastecimento completo em 3 a 5 minutos).
* **Classe T30 / T20:** $-30^\circ\text{C} \text{ e } -20^\circ\text{C}$ (abastecimentos intermediários de 8 a 15 minutos).
* **Não-Resfriado:** Abastecimentos lentos superiores a 30 minutos.

## 2.2 SAE J2799: Protocolo de Comunicação Sem Fio e Infravermelho (IrDA)
Regulamenta o link de telemetria óptica bidirecional infravermelha montado no bico da mangueira e no bocal do veículo. O carro transmite ciclicamente a cada 100 ms:
- Pressão interna instantânea ($P_{veic}$).
- Temperatura interna do gás no liner ($T_{veic}$).
- Classe volumétrica do cilindro e SOC calculado.
- Bit de aborto de emergência (*Vehicle Abort Flag*).

## 2.3 Demais Códigos Regulamentadores
* **ISO 19880-1:** Requisitos mecânicos e funcionais gerais de projeto e fabricação para estações HRS e qualidade do combustível segundo ISO 14687 Grau D (pureza mínima de 99,97% de $H_2$).
* **NFPA 2 (Hydrogen Technologies Code):** Distâncias de separação espacial (*setbacks*), sistemas de ventilação mecânica forçada e níveis de alarme de gás (20% LFL para alerta; 40% LFL para trip de emergência).
* **IEC 61508 / IEC 61511:** Arquiteturas de segurança funcional e Níveis de Integridade de Segurança (SIL-2 e SIL-3) aplicados às malhas de parada de emergência ESD.
* **ATEX / IEC 60079:** Classificação de áreas explosivas em Zona 0, Zona 1 e Zona 2 para Grupo de Gás IIC e classe de temperatura T4.
* **ASME B31.12:** Seleção metalúrgica de tubulações de alta tenacidade contra fragilização por hidrogênio (*Hydrogen Embrittlement*), preconizando aços inoxidáveis austeníticos séries AISI 316/316L.

---

# CAPÍTULO 3: TERMODINÂMICA E ENGENHARIA DO PROCESSO DE COMPRESSÃO E TRANSFERÊNCIA

## 3.1 Propriedades Termofísicas e o Fator de Compressibilidade Real
Em pressões de 700 a 1000 bar, o hidrogênio desvia-se fortemente do comportamento de gás ideal, apresentando fator de compressibilidade $Z > 1$:

$$P \cdot V = Z(P, T) \cdot R \cdot T$$

Para $P = 700\text{ bar}$ e $T = 15^\circ\text{C}$, $Z \approx 1{,}45$, indicando que o gás ocupa um volume molar 45% maior do que o previsto pela física clássica dos gases ideais devido às forças de repulsão atômica de curto alcance.

## 3.2 O Efeito Joule-Thomson e o Fenômeno de Inversão Térmica
O coeficiente Joule-Thomson define a variação de temperatura em uma expansão isentálpica com queda de pressão:

$$\mu_{JT} = \left( \frac{\partial T}{\partial P} \right)_H$$

Para o gás hidrogênio, a temperatura máxima da curva de inversão ($\mu_{JT} = 0$) ao nível do mar é de apenas **$-73^\circ\text{C}$**. Em temperaturas ambientes ordinárias ($-10^\circ\text{C}$ a $+45^\circ\text{C}$), o hidrogênio opera com **$\mu_{JT} < 0$**. Consequentemente:
$$\Delta P < 0 \implies \Delta T > 0$$
O hidrogênio **aquece** ao sofrer despressurização através de orifícios, válvulas reguladoras ou pontos de vazamento, o que eleva drasticamente o risco de ignição e exige pré-resfriamento forçado a $-40^\circ\text{C}$ no trocador criogênico HEX-201.

---

# CAPÍTULO 4: ARQUITETURA FÍSICA DA PLANTA E INSTRUMENTAÇÃO P&ID

A infraestrutura física é segmentada em três setores fundamentais:
 SETOR 100: ARMAZENAMENTO & COMPRESSÃO           SETOR 200: CONDICIONAMENTO      SETOR 300: DISPENSADOR

  

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
|  +---------+   e5    | XV-104 | (Ponte Crítica) |  |   T <= -40°C   |(Ponte) |  |     |        (Ponte)  [VEIC]
|  | TK-102  |-------->|        |                 |  |                         |  |   XV-301              700  |
|  | (MP 700)|         |        |                 |  |                         |  |     |                 bar  |
|  +---------+         |        |                 |  |                         |  |     v                      |
|                      |        |                 |  |                         |  |   BV-301                   |
|  +---------+   e6    |        |                 |  |                         |  | (Breakaway)                |
|  | TK-103  |-------->|        |                 |  |                         |  |     |                      |
|  | (HP 1000|         +--------+                 |  |                         |  |  COM-301 (IrDA J2799)      |
|  +---------+                                    |  |                         |  |                          |
+-------------------------------------------------+  +-------------------------+  +--------------------------+



  
* **Setor 100:** Suprimento externo `SUP-100`, bancos em cascata `TK-101` (LP 350 bar), `TK-102` (MP 700 bar) e `TK-103` (HP 1000 bar), interligados à válvula seletora direcional `XV-104`.
* **Setor 200:** Unidade criogênica `HEX-201`, alimentada pelo motor do chiller `M-201` e válvula criogênica `XV-201`.
* **Setor 300:** Ilha de dispensação `DISP-300`, com válvula de rampa `XV-301`, válvula de desacoplamento mecânico `BV-301`, link infravermelho `COM-301` e tanque do automóvel `VEIC-300`.

---

# CAPÍTULO 5: MAPA DE VARIÁVEIS, DICIONÁRIO DE TAGS E PROTOCOLOS DE COMUNICAÇÃO

### 5.1 Dicionário de Entradas Analógicas (AI)
* `PT-101` ($p_{1,1}, p_{1,4}$): Pressão do Tanque LP ($0 \text{ a } 600\text{ bar}$). Setpoints: L: 100, H: 350, HH: 400 bar.
* `PT-102` ($p_{1,2}, p_{1,5}$): Pressão do Tanque MP ($0 \text{ a } 1000\text{ bar}$). Setpoints: L: 200, H: 650, HH: 700 bar.
* `PT-103` ($p_{1,3}, p_{1,6}$): Pressão do Tanque HP ($0 \text{ a } 1200\text{ bar}$). Setpoints: L: 350, H: 950, HH: 1000 bar.
* `PT-201` ($p_{2,1}$): Pressão na Linha do Chiller ($0 \text{ a } 1000\text{ bar}$).
* `PT-301` ($p_{3,1}$): Pressão de Enchimento no Bico ($0 \text{ a } 1000\text{ bar}$). HH: 875 bar (Trip de Sobrepressão).
* `TT-101`, `TT-102`, `TT-103` ($t_{1,1}, t_{1,2}, t_{1,3}$): Temperaturas dos Vasos ($-50 \text{ a }+150^\circ\text{C}$). HH: $+85^\circ\text{C}$.
* `TT-201` ($t_{2,1}$): Temperatura de Saída do Chiller ($-60 \text{ a }+40^\circ\text{C}$). H: $-33^\circ\text{C}$, L: $-40^\circ\text{C}$.
* `TT-301` ($t_{3,1}$): Temperatura no Receptáculo do Veículo ($-50 \text{ a }+120^\circ\text{C}$). HH: $+85^\circ\text{C}$.
* `AT-101`, `AT-102`, `AT-103`, `AT-301` ($g_{1,1}, g_{1,2}, g_{1,3}, g_{3,1}$): Detectores de Hidrogênio ($0 \text{ a } 100\%\text{ LFL}$). H: 20%, HH: 40% LFL.
* `FT-301`: Medidor Mássico Coriolis de Custódia ($0 \text{ a } 5{,}0\text{ kg/min}$).

### 5.2 Dicionário de Entradas e Saídas Discretas (DI / DO)
* `ESD-100` ($e_{1,1}$): Botão de Parada de Emergência Geral da Planta.
* `PSV-101-ZS` a `PSV-103-ZS` ($r_{1,1}, r_{1,2}, r_{1,3}$): Chaves de disparo das válvulas de alívio mecânico.
* `HS-301` ($h_{3,1}$): Botão de partida de abastecimento pelo operador.
* `COM-301-ST` ($c_{3,1}$): Status do link de comunicação óptica infravermelha SAE J2799.
* `BV-301-ZS` ($bv_{3,1}$): Sensor de integridade física da válvula breakaway.
* `XV-101`, `XV-102`, `XV-103` ($v_{1,1}, v_{1,2}, v_{1,3}$): Válvulas solenoide de bloqueio rápido dos tanques.
* `YV-104A`, `YV-104B` ($y_{1,4a}, y_{1,4b}$): Bobinas de seleção da cascata multivias.
* `M-201` ($m_{2,1}$): Contator de acionamento do motor do chiller.
* `XV-201` ($v_{2,1}$): Válvula criogênica de admissão do trocador.
* `XV-301` ($v_{3,1}$): Válvula solenoide de dispensação no veículo.
* `ALM-101` ($a_{1,1}$): Sirene e sinalizador estroboscópico de evacuação geral.

---

# CAPÍTULO 6: ETAPA 01 - LÓGICA PROPOSICIONAL, BOOLEANA E INTERTRAVAMENTOS DE SEGURANÇA

## 6.1 Equações Booleanas Fundamentais de Intertravamento
As saídas de comando do CLP são governadas por equações canônicas que garantem estado à prova de falha mecânica (*fail-close*):

$$v_{1,1} = \neg e_{1,1} \land \neg p_{1,1} \land \neg t_{1,1} \land \neg g_{1,1} \land \neg r_{1,1}$$
$$v_{1,2} = \neg e_{1,1} \land \neg p_{1,2} \land \neg t_{1,2} \land \neg g_{1,2} \land \neg r_{1,2}$$
$$v_{1,3} = \neg e_{1,1} \land \neg p_{1,3} \land \neg t_{1,3} \land \neg g_{1,3} \land \neg r_{1,3}$$

Permissivo global de abertura do bico de abastecimento ($v_{3,1}$):
$$v_{3,1} = h_{3,1} \land c_{3,1} \land bv_{3,1} \land t_{2,1} \land \neg t_{3,1} \land \neg p_{3,1} \land \neg g_{3,1} \land \neg e_{1,1} \land (v_{1,1} \lor v_{1,2} \lor v_{1,3})$$

## 6.2 Otimização Algébrica via Quine-McCluskey
O repositório implementa o algoritmo exato tabular de Quine-McCluskey para simplificar expressões lógicas complexas de permissivos industriais. O procedimento automatizado em Python agrupa mintermos por contagem de uns binários, combina pares com distância de Hamming 1 gerando implicantes primos e resolve a cobertura mínima através do método de Petrick, eliminando instruções redundantes na CPU do controlador.

---

# CAPÍTULO 7: SISTEMAS ESPECIALISTAS E MOTORES DE INFERÊNCIA DIAGNÓSTICA

O SCADA Core integra um sistema especialista baseado em regras de produção estruturado em Python:

```python
class MotorInferenciaSCADA:
    def __init__(self):
        self.base_conhecimento = []
        self.memoria_trabalho = {}
        self.historico_disparos = []

    def adicionar_regra(self, regra):
        self.base_conhecimento.append(regra)
        self.base_conhecimento.sort(key=lambda r: r.prioridade, reverse=True)

    def executar_forward_chaining(self):
        novos_fatos = True
        while novos_fatos:
            novos_fatos = False
            for regra in self.base_conhecimento:
                if regra.id in self.historico_disparos:
                    continue
                if all(self.memoria_trabalho.get(k) == v for k, v in regra.premissas.items()):
                    self.memoria_trabalho.update(regra.conclusao)
                    self.historico_disparos.append(regra.id)
                    novos_fatos = True
                    break
        return self.memoria_trabalho
```


A base de conhecimento cobre 25 regras de produção IF-THEN abrangendo diagnósticos de fadiga de mola de PSVs, perda de capacidade térmica do chiller, desvios automáticos de rota e detecção precoce de microvazamentos.


