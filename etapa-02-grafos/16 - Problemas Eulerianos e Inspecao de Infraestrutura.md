# Aula 16: Problemas Eulerianos e Inspeção Autônoma de Infraestrutura de Hidrogênio

<a href="https://colab.research.google.com/github/leovarconrenno/Estacao-de-Reabastecimento-de-Hidrogenio---SCADA-Core/blob/main/etapa-02-grafos/16%20-%20Problemas%20Eulerianos%20e%20Inspecao%20de%20Infraestrutura.ipynb" target="_parent"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/></a>

## 1. Fundamentos Matemáticos: Teorema de Euler e Circuitos Eulerianos

Um **Circuito Euleriano** em um grafo não-dirigido conexo existe se e somente se **todos os vértices tiverem grau par**. Em grafos dirigidos, exige-se $\text{deg}^+(v) = \text{deg}^-(v)$ para todo nó $v \in V$.

Na **Estação de Reabastecimento de Hidrogênio — SCADA Core**, a integridade estrutural das tubulações de alta pressão (350 bar a 1000 bar) exige inspeções não-destrutivas periódicas (END — ensaio por ultrassom e correntes parasitas) para detecção de **fragilização por hidrogênio** (*hydrogen embrittlement*) e trincas sob tensão (SCC), conforme as normas ASME B31.12 e ISO 19880-3. Um robô autônomo *crawler* (ou PIG instrumentado) deve inspecionar **cada trecho de tubulação física exatamente uma vez**, retornando à base de manutenção sem desperdício de bateria ou tempo operacional.

---

## 2. Aprofundamento Teórico

### 2.1. Contexto Histórico: O Problema das Pontes de Königsberg

O estudo de Teoria dos Grafos como disciplina matemática nasce formalmente em **1736**, quando Leonhard Euler resolveu o célebre problema das sete pontes de Königsberg: quatro regiões de terra conectadas por sete pontes sobre o rio Pregel. Euler provou matematicamente a impossibilidade de atravessar cada ponte exatamente uma vez e retornar à origem, formulando o critério de paridade dos graus dos vértices. O problema da inspeção autônoma da planta de hidrogênio é estruturalmente idêntico: planejar uma varredura completa onde cada duto é percorrido sem redundâncias.

### 2.2. Definição Formal e Prova do Teorema (Caso Não-Dirigido)

**Teorema (Euler, 1736):** Um multigrafo conexo $G = (V, E)$ possui um circuito euleriano se e somente se todo vértice tem grau par.

**Prova (necessidade):** Se existe um circuito euleriano fechado, cada passagem do robô por um vértice intermediário $v$ consome uma aresta de entrada e uma de saída, contribuindo $+2$ ao grau de $v$. No vértice de partida/chegada, a aresta inicial de saída é emparelhada com a última aresta de retorno, totalizando também um número par de arestas incidentes. Logo, $\deg(v)$ deve ser par para todo $v \in V$.

**Prova (suficiência, esboço construtivo):** Se todos os graus são pares e o grafo é conexo, partindo de qualquer vértice $u$ e seguindo arestas não visitadas, é garantido que nunca ficaremos presos em um vértice diferente de $u$ (pois ao entrar por uma aresta não usada, resta um número ímpar de arestas não usadas, logo há sempre ao menos uma saída livre). O passeio fecha em $u$, formando um ciclo $C_1$. Se $C_1$ não cobrir todas as arestas, remove-se $C_1$; os graus no grafo restante continuam todos pares. Pela conexidade, existe um vértice compartilhado $w \in C_1$ incidente a arestas restantes, de onde se constrói um novo ciclo $C_2$ que é interpolado (“costurado”) em $C_1$. O processo se repete até esgotar $E$. $\blacksquare$

### 2.3. Adaptação para a Malha Física de Tubulações

Embora o fluxo de processo de H₂ seja estritamente direcionado (dígrafo da alimentação ao dispensador, como visto nas Aulas 11 a 15), a **inspeção de integridade mecânica** por robô ou PIG é **bidirecional**: o sensor trafega igualmente no sentido direto ou reverso dentro da tubulação despressurizada/inertizada durante a janela de manutenção. Por isso, a malha de inspeção é modelada como um **grafo não-dirigido**:

$$\text{adj}[u].\text{append}((v, id\_duto)); \quad \text{adj}[v].\text{append}((u, id\_duto))$$

### 2.4. O Algoritmo de Hierholzer (1873) — Análise Detalhada

O método implementado em `GrafoInspecaoEuleriano.calcular_circuito_hierholzer` formaliza o argumento construtivo de Euler utilizando uma pilha explícita:

1. Inicializa a pilha com o nó de partida (`BASE-100`).
2. Enquanto o topo da pilha possuir arestas não visitadas, consome a aresta, remove-a simetricamente das listas de adjacência e empilha o vizinho alcançado.
3. Quando o topo não tem mais arestas livres (o ciclo fechou), o vértice é desempilhado e anexado ao circuito final.
4. Ao final da execução, o circuito é invertido, revelando a rota contínua de inspeção.

**Complexidade:** $O(|E|)$ em tempo e espaço, pois cada aresta é examinada e removida exatamente uma vez. Esta complexidade é assintoticamente ótima, pois qualquer rotina de inspeção deve obrigatoriamente visitar todas as arestas.

### 2.5. O Problema do Carteiro Chinês (*Chinese Postman Problem*)

Quando a rede de tubulações **não é puramente euleriana** (ou seja, quando existem vértices de grau ímpar devido a ramificações específicas sem retorno), é impossível percorrer cada duto uma única vez. O objetivo passa a ser minimizar o comprimento total percorrido admitindo a repetição de alguns trechos. Esse é o **Problema do Carteiro Chinês** (Kwan Mei-Ko, 1962):

1. Pelo Lema do Aperto de Mãos (Aula 11), a quantidade de vértices de grau ímpar é sempre par ($2k$).
2. Calcula-se a distância mínima par-a-par entre esses vértices ímpares (usando o Dijkstra da Aula 14).
3. Encontra-se o **emparelhamento perfeito de peso mínimo** via Algoritmo de Edmonds ($O(n^3)$).
4. Duplicam-se as arestas que compõem os caminhos do emparelhamento, tornando todos os vértices de grau par.
5. Aplica-se o Algoritmo de Hierholzer sobre o multigrafo euleriano resultante.

---

## 3. Exemplo Resolvido: Malha de Inspeção da Estação de Hidrogênio

**Pergunta:** Verifique manualmente, pelo Lema do Aperto de Mãos, que a malha de 10 dutos de inspeção da planta possui todos os graus pares.

**Topologia dos trechos físicos:**
- $d_0$: `BASE-100` $\leftrightarrow$ `SUP-100` (Trilho de acesso da base ao suprimento, 12 m)
- $d_1$: `SUP-100` $\leftrightarrow$ `TK-101` (Linha de alimentação LP com válvula `XV-101`, 10 m)
- $d_2$: `SUP-100` $\leftrightarrow$ `TK-102` (Linha de alimentação MP com válvula `XV-102`, 12 m)
- $d_3$: `SUP-100` $\leftrightarrow$ `TK-103` (Linha de alimentação HP com válvula `XV-103`, 15 m)
- $d_4$: `TK-101` $\leftrightarrow$ `XV-104` (Linha de descarga LP, 8 m)
- $d_5$: `TK-102` $\leftrightarrow$ `XV-104` (Linha de descarga MP, 6 m)
- $d_6$: `TK-103` $\leftrightarrow$ `XV-104` (Linha de descarga HP, 8 m)
- $d_7$: `XV-104` $\leftrightarrow$ `HEX-201` (Linha de alimentação do chiller com válvula `XV-201`, 14 m)
- $d_8$: `HEX-201` $\leftrightarrow$ `DISP-300` (Linha criogênica ao dispensador com válvula `XV-301`, 16 m)
- $d_9$: `DISP-300` $\leftrightarrow$ `BASE-100` (Linha de retorno e fechamento de bico com válvula `BV-301`, 14 m)

**Contagem de incidências por vértice:**
| Vértice | Dutos Incidentes | Grau | Paridade |
| --- | --- | --- | --- |
| `BASE-100` | $d_0, d_9$ | 2 | Par |
| `SUP-100` | $d_0, d_1, d_2, d_3$ | 4 | Par |
| `TK-101` | $d_1, d_4$ | 2 | Par |
| `TK-102` | $d_2, d_5$ | 2 | Par |
| `TK-103` | $d_3, d_6$ | 2 | Par |
| `XV-104` | $d_4, d_5, d_6, d_7$ | 4 | Par |
| `HEX-201` | $d_7, d_8$ | 2 | Par |
| `DISP-300` | $d_8, d_9$ | 2 | Par |

Soma dos graus: $2 + 4 + 2 + 2 + 2 + 4 + 2 + 2 = 20 = 2 \times 10 = 2|E|$ (Lema do Aperto de Mãos confirmado).
Como **todos os 8 vértices possuem grau par**, o grafo é estritamente euleriano!

**Circuito obtido pelo Algoritmo de Hierholzer:**
$$\text{BASE-100} \to \text{DISP-300} \to \text{HEX-201} \to \text{XV-104} \to \text{TK-103} \to \text{SUP-100} \to \text{TK-102} \to \text{XV-104} \to \text{TK-101} \to \text{SUP-100} \to \text{BASE-100}$$

---

## 4. Atividades de Investigação

1. Adicione um duto hipotético de recirculação rápida conectando diretamente `HEX-201` a `SUP-100`. Quais vértices passam a ter grau ímpar? O grafo resultante ainda é euleriano?
2. Para o cenário com a aresta adicional do item 1, aplique o raciocínio do Problema do Carteiro Chinês: qual trecho deveria ser percorrido duas vezes para fechar um circuito de inspeção de custo mínimo?
3. Compare o circuito gerado partindo de `BASE-100` com um circuito gerado partindo de `XV-104`. O comprimento físico total percorrido varia? Justifique com base na definição de circuito euleriano.
4. Consulte a norma ASME B31.12 para tubulações de hidrogênio gasoso e elabore um relatório justificando por que a cobertura total de 100% das arestas sem pontos cegos é mandatória em vasos e linhas de pressão de 700 e 1000 bar.

---

## 5. Entregável da Aula 16

* **Módulo `GrafoInspecaoEuleriano` em Python:** Implementação robusta com o Algoritmo de Hierholzer, verificação de paridade de graus, mapeamento dos 10 dutos físicos da planta e geração do circuito euleriano de inspeção para robô autônomo na Estação de Reabastecimento de Hidrogênio.
