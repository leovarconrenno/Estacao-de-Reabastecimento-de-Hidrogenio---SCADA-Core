# Aula 14: Menor Caminho — Algoritmo de Dijkstra e Roteamento Dinâmico de Pressão

<a href="https://colab.research.google.com/github/leovarconrenno/Estacao-de-Reabastecimento-de-Hidrogenio---SCADA-Core/blob/main/etapa-02-grafos/14%20-%20Menor%20Caminho%20Dijkstra%20e%20Roteamento%20Dinamico.ipynb" target="_parent"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/></a>

## 1. Fundamentos Matemáticos: Algoritmo Guloso de Dijkstra

Dado o dígrafo ponderado com pesos não-negativos $G = (V, E, W)$ da **Estação de Reabastecimento de Hidrogênio — SCADA Core**, o **Algoritmo de Dijkstra** calcula o caminho de custo mínimo entre um vértice fonte $s$ e qualquer nó de destino $v \in V$ em $O((|V| + |E|) \log |V|)$ com Min-Heap binário.

O **custo** de uma rota é o comprimento físico total de tubulação percorrido (em metros), correlacionado com a perda de pressão por atrito ($\Delta P \propto L$) e com o custo de manutenção de cada linha de alta pressão.

---

## 2. Aprofundamento Teórico

### 2.1. O Princípio de Relaxação de Arestas

O conceito central do algoritmo é a **operação de relaxação**: para cada aresta $(u, v)$ com peso $w(u,v)$, se a distância provisória até $u$ mais o peso da aresta for menor que a distância conhecida até $v$, atualizamos:

$$\text{se } d[u] + w(u,v) < d[v] \implies d[v] \leftarrow d[u] + w(u,v), \quad \text{pred}[v] \leftarrow u$$

Na planta, isso equivale ao SCADA descobrir que uma rota alternativa implica menor comprimento total de tubulação — e atualizar o plano de roteamento de válvulas em conformidade.

### 2.2. Por Que a Estratégia Gulosa Funciona (Esboço de Prova)

Comprimentos físicos de tubulação são sempre positivos ($L > 0$), então a hipótese de pesos não-negativos é sempre satisfeita nesta planta. A prova por indução demonstra que ao retirar do heap o vértice $u$ com menor $d[u]$ não finalizado, $d[u] = \delta(s, u)$ — a distância real mínima. $\blacksquare$

Se um duto representasse ganho energético negativo, seria necessário o **Algoritmo de Bellman-Ford** ($O(|V| \cdot |E|)$), sensivelmente pior.

### 2.3. Análise de Complexidade Detalhada

| Estrutura de dados para a fila de prioridade | Complexidade total |
| --- | --- |
| Busca linear (sem heap) | $O(|V|^2)$ |
| Heap binário (`heapq`, usado no notebook) | $O((|V| + |E|) \log |V|)$ |
| Heap de Fibonacci (teórico) | $O(|E| + |V| \log |V|)$ |

Para a rede da estação ($|V|=8$, $|E|=9$), qualquer estrutura executa em tempo desprezível.

### 2.4. Reconstrução do Caminho via Vetor de Predecessores

O algoritmo mantém um vetor `pred[v]`, atualizado a cada relaxação bem-sucedida. Ao final, o caminho é reconstruído por **retropropagação**: de `VEIC-300` seguimos `pred` até `SUP-100` e invertemos a sequência.

### 2.5. Corretude com Bloqueios Dinâmicos (ESD / Manutenção)

O `RoteadorDijkstra` aceita um conjunto `bloqueios` com nós temporàriamente indisponíveis (`ESD-100`, válvulas em manutenção). Isso equivale a definir $w(u,v) = \infty$ para toda aresta incidente ao nó bloqueado — preservando a corretude.

---

## 3. Exemplo Resolvido: Dijkstra de `SUP-100` até `VEIC-300`

**Configuração:** $|V|=8$ nós, $|E|=9$ tubulações. Fonte: `SUP-100`. Destino: `VEIC-300`.

| Iteração | Nó retirado | Distância | Relaxações realizadas |
| --- | --- | --- | --- |
| 1 | SUP-100 | 0 m | d[TK-101]=10, d[TK-102]=12, d[TK-103]=15 |
| 2 | TK-101 | 10 m | d[XV-104]=18 (via Linha LP) |
| 3 | TK-102 | 12 m | d[XV-104]=min(18, 12+6=18)=18 — empate, sem atualização |
| 4 | TK-103 | 15 m | d[XV-104]=min(18,23)=18 — sem atualização |
| 5 | XV-104 | 18 m | d[HEX-201]=32 (via XV-201) |
| 6 | HEX-201 | 32 m | d[DISP-300]=48 (via XV-301) |
| 7 | DISP-300 | 48 m | d[VEIC-300]=52 (via BV-301) |

**Rota LP Ótima:** `SUP-100 → TK-101 → XV-104 → HEX-201 → DISP-300 → VEIC-300` | **52 m**

A rota via `TK-102` (52 m, mesmo comprimento) e `TK-103` (57 m) estão disponíveis como contingência — o SCADA seleciona automaticamente a linha LP para o abastecimento nominal.

---

## 4. Atividades de Investigação

1. Complete manualmente o traçado via `TK-102` e confirme que o comprimento é também **52 m** (mesmo que LP) — explique por que Dijkstra pode retornar qualquer uma das duas rotas empatadas.
2. Bloqueie o nó `XV-104` (falha elétrica nos solenoides `YV-104A` e `YV-104B`) e execute o algoritmo de `SUP-100` até `VEIC-300`. O que o resultado indica sobre a criticidade deste nó?
3. Adicione uma aresta hipotética com peso negativo entre `HEX-201` e `DISP-300` e explique, usando o argumento da Seção 2.2, por que Dijkstra pode retornar um resultado incorreto.
4. Compare a complexidade de executar Dijkstra a partir de cada um dos 8 vértices versus Floyd-Warshall uma única vez.

---

## 5. Entregável da Aula 14

* **Módulo `RoteadorDijkstra` em Python:** Implementação com suporte a bloqueios dinâmicos (ESD, manutenção), retorno da sequência completa de equipamentos e da distância total em metros, validado para a rede real dos Setores 100, 200 e 300 da Estação de Reabastecimento de Hidrogênio.
