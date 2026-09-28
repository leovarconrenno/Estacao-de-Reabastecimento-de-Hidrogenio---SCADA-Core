# Aula 15: Simulação de Vazamentos de H₂ e Desvio Automático em Malha Fechada

<a href="https://colab.research.google.com/github/leovarconrenno/Estacao-de-Reabastecimento-de-Hidrogenio---SCADA-Core/blob/main/etapa-02-grafos/15%20-%20Simulacao%20de%20Vazamentos%20e%20Desvio%20Automatico.ipynb" target="_parent"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/></a>

## 1. Fundamentos Matemáticos: Reconfiguração Dinâmica de Grafos em Tempo Real

Na detecção de um vazamento de hidrogênio em um segmento de duto $(u, v)$ — sinalizado pelos detectores `AT-101`, `AT-102`, `AT-103` ou `AT-301` — o sistema SCADA executa a **punição topológica** $W(u, v) \leftarrow \infty$ e recalcula instantaneamente a rota de abastecimento via Dijkstra, comandando o fechamento da válvula de isolamento correspondente (`XV-101`, `XV-102`, `XV-103`, `XV-201` ou `XV-301`) e a abertura da rota alternativa.

---

## 2. Aprofundamento Teórico

### 2.1. Grafos Dinâmicos e o Conceito de Reponderão

Um **grafo dinâmico** é aquele cujo conjunto de arestas ou pesos varia ao longo do tempo, $G_t = (V, E_t, W_t)$, em contraste com o grafo estático estudado nas Aulas 11–14. A técnica de reponderão usada nesta aula — atribuir $W(u,v) \leftarrow \infty$ a um trecho isolado — é a forma mais simples de modelar uma mudança topológica sem alterar a estrutura de dados subjacente. Basta tornar a aresta **infinitamente cara**, garantindo que nenhum algoritmo de menor caminho jamais a selecione, preservando ao mesmo tempo o registro histórico de que aquela conexão existe fisicamente.

### 2.2. Recomputar do Zero vs. Algoritmos Incrementais

A estratégia adotada no notebook — **recomputar Dijkstra do zero** a cada mudança de peso — é a mais simples e robusta, com custo $O((|V|+|E|)\log|V|)$ por recomputação. Para a estação de hidrogênio ($|V|=8$, $|E|=9$), isso é desprezível computacionalmente. Em redes de grande escala, a literatura de **algoritmos dinâmicos de grafos** oferece estruturas de dados especializadas (*dynamic shortest path trees*) que atualizam apenas a porção do grafo afetada pela mudança.

### 2.3. Tempo de Decisão como Métrica de Segurança Funcional (IEC 61511)

O notebook reporta explicitamente o **tempo de decisão** (`Tempo_Decisao_ms`) do recálculo, medido em milissegundos. A IEC 61511 normatiza o **tempo de resposta do processo** (*process safety time*) como o intervalo máximo tolerável entre a detecção de uma condição perigosa e a ação corretiva.

Um algoritmo de Dijkstra que processa em frações de milissegundo é **ordens de magnitude mais rápido** que o tempo típico de atuação de uma válvula motorizada de alta pressão (tipicamente 5–30 segundos para válvulas de esfera DN50 a 1000 bar), confirmando que o **gargalo de segurança está sempre na atuação física, não no cálculo computacional**.

### 2.4. Conectividade, Pontes e Vértices de Articulação na Rede de H₂

A simulação de vazamento levanta uma pergunta estrutural mais profunda: **quais trechos da rede, se isolados, desconectariam completamente o fluxo de H₂ até o veículo?** Um trecho cuja remoção aumenta o número de componentes conexos do grafo é chamado de **ponte** (*bridge*); um vértice com a mesma propriedade é um **vértice de articulação** (*cut vertex*).

Na rede da estação, `XV-104` é um **vértice de articulação crítico**: todos os três bancos convergem nele, e não existe rota que não passe por ele. As arestas $e_7$ (`XV-104 → HEX-201`), $e_8$ (`HEX-201 → DISP-300`) e $e_9$ (`DISP-300 → VEIC-300`) são **pontes verdadeiras** — sua falha isola completamente o abastecimento.

**Algoritmo de detecção de pontes (Tarjan, 1974):** executa uma única DFS em $O(|V|+|E|)$ mantendo o tempo de descoberta e o *low-link value* de cada vértice. Complementaria perfeitamente esta simulação, identificando **de antemão** todos os trechos críticos — uma análise de risco proativa.

### 2.5. Resiliência de Rede: k-Conectividade e Estratégia de Cascata

Generalizando o conceito de ponte, dizemos que um grafo é **$k$-aresta-conexo** se é necessário remover pelo menos $k$ arestas para desconectá-lo. Na estratégia de cascata LP/MP/HP da estação, as três rotas de entrada em `XV-104` ($e_4$, $e_5$, $e_6$) são paralelas — o que torna esse subgrafo **3-aresta-conexo** entre `SUP-100` e `XV-104`, garantindo tolerância a até 2 falhas simultâneas de linha de alimentação.

---

## 3. Exemplo Resolvido

**Cenário:** Detector `AT-101` aciona alarme de H₂ na linha $e_4$ (`TK-101 → XV-104`, Linha LP). O SCADA isola `TK-101` (`XV-101` fecha) e recalcula a rota.

**Resolução:** Com $e_4$ reponderada para $\infty$, Dijkstra encontra:

- Rota via `TK-102 (MP)`: `SUP-100 → TK-102 → XV-104 → HEX-201 → DISP-300 → VEIC-300` | **54 m** ✓
- Rota via `TK-103 (HP)`: `SUP-100 → TK-103 → XV-104 → HEX-201 → DISP-300 → VEIC-300` | **57 m**

O SCADA seleciona automaticamente a rota MP (54 m), abre `XV-102` e chaveie `YV-104A` para selecionar `TK-102`, continuando o abastecimento sem interrupção perceptível para o motorista do FCEV.

---

## 4. Atividades de Investigação

1. Implemente uma função que teste, para cada aresta da rede, se sua remoção (reponderão para $\infty$) desconecta `SUP-100` de `VEIC-300`. Quantas pontes existem na rede da estação?
2. Compare o tempo de decisão reportado pelo notebook com o tempo típico de fechamento de uma válvula de esfera motorizada DN50 a 700 bar (pesquise valores típicos). Quantas ordens de magnitude separam os dois tempos?
3. Se, além de $e_4$ (`TK-101 → XV-104`), o trecho $e_5$ (`TK-102 → XV-104`) também sofresse uma falha simultânea, qual seria o resultado do recálculo? A rede ainda consegue abastecer o veículo?
4. Pesquise o conceito de *dynamic shortest path trees* e explique por que recomputar Dijkstra do zero a cada evento se torna impraticável para redes com mais de $10^5$ vértices.

---

## 5. Entregável da Aula 15

* **Simulador de Desvio de Vazamento H₂:** Teste de estresse com injeção programada de falha em cada um dos 9 trechos de tubulação, validação de recálculo em milissegundos e identificação automática de pontes na rede da Estação de Reabastecimento de Hidrogênio.
