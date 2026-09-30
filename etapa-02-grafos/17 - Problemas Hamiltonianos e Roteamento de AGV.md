# Aula 17: Problemas Hamiltonianos e Roteamento Logístico de AGVs (TSP)

<a href="https://colab.research.google.com/github/leovarconrenno/Estacao-de-Reabastecimento-de-Hidrogenio---SCADA-Core/blob/main/etapa-02-grafos/17%20-%20Problemas%20Hamiltonianos%20e%20Roteamento%20de%20AGV.ipynb" target="_parent"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/></a>

## 1. Fundamentos Matemáticos: Ciclos Hamiltonianos e o Caixeiro-Viajante (TSP)

O **Problema do Caixeiro-Viajante (TSP — *Traveling Salesperson Problem*)** busca o **Ciclo Hamiltoniano** de menor custo que visita cada vértice do grafo exatamente uma vez e retorna à base de partida. Diferente do Circuito Euleriano (que cobre arestas), o TSP é focado na **cobertura de vértices** e pertence à classe **NP-difícil** (*NP-hard*).

Na **Estação de Reabastecimento de Hidrogênio — SCADA Core**, um **AGV (Veículo Autônomo Guiado)** executa a ronda periódica de amostragem de pureza de hidrogênio (normas **SAE J2719** e **ISO 14687**, que exigem pureza mínima de $99{,}97\%$ de H₂ e limite rígido para contaminantes críticos como CO, H₂S e umidade) e calibração *in-situ* dos detectores de vazamento (`AT-101`, `AT-102`, `AT-103`, `AT-301`). O AGV parte do Laboratório Central (`LAB-100`), deve visitar cada ponto de processo da planta uma única vez e retornar ao laboratório percorrendo a **menor distância acumulada possível**.

---

## 2. Aprofundamento Teórico

### 2.1. Ciclo Hamiltoniano vs. Circuito Euleriano — Contraste Fundamental

| Propriedade | Circuito Euleriano (Aula 16) | Ciclo Hamiltoniano / TSP (Aula 17) |
| --- | --- | --- |
| **Elemento visitado** | Cada **aresta** (tubulação) exatamente uma vez | Cada **vértice** (equipamento/posto) exatamente uma vez |
| **Repetição de vértices** | Permitida (desde que por arestas distintas) | Proibida (exceto o nó de partida/retorno) |
| **Critério de existência** | Simples e verificável em $O(|V| + |E|)$ (Graus pares — Euler) | Sem critério local conhecido; decisão é **NP-completa** |
| **Aplicação típica na planta** | Robô *crawler* inspecionando 100% dos dutos contra fragilização | AGV de segurança e amostragem visitando postos de sensores |

O problema homenageia Sir William Rowan Hamilton, que em 1857 formulou o *Icosian Game* (encontrar um ciclo passando pelos 20 vértices de um dodecaedro).

### 2.2. Complexidade Computacional e a Inviabilidade da Força Bruta

Dado um conjunto de $n$ locais, fixando o vértice inicial, existem $(n-1)!$ permutações possíveis de trajetos. Para $n=6$ locais (como na malha do notebook), $(6-1)! = 120$ rotas — perfeitamente computável por força bruta em fração de segundo. Entretanto, para $n=25$ locais em um complexo petroquímico, $24! \approx 6{,}2 \times 10^{23}$ permutações, o que demandaria milhões de anos mesmo no supercomputador mais veloz do mundo.

O algoritmo exato por Programação Dinâmica de **Held-Karp** (1962) reduz o custo para $O(n^2 \cdot 2^n)$, mas ainda é exponencial. Por essa razão, na automação industrial de frotas de AGV recorre-se a **heurísticas construtivas** combinadas com **busca local**, que fornecem soluções quase-ótimas em tempo polinomial.

### 2.3. Heurística do Vizinho Mais Próximo (*Nearest Neighbor* — NN)

O método `vizinho_mais_proximo` inicia no ponto base (`LAB-100`) e adota uma decisão estritamente **gulosa**: a cada passo, salta para o vértice ainda não visitado com a menor distância direta em relação ao nó atual. Complexidade: $O(n^2)$.

**Limitação clássica:** Ao priorizar ganhos locais de curto alcance, o algoritmo frequentemente deixa para o final vértices geograficamente isolados, sendo forçado a fechar a rota com um **salto longo e dispendioso** de volta à base. No pior caso teórico, a rota do NN pode ser $\Theta(\log n)$ vezes pior que o ótimo global.

### 2.4. Refinamento por Busca Local 2-Opt

A heurística **2-Opt** (Croes, 1958) é o método padrão da indústria para eliminar cruzamentos de rota no plano. O algoritmo testa sistematicamente a remoção de duas arestas não-adjacentes $(u, v)$ e $(w, z)$, reconectando os segmentos pela inversão da subsequência interna:

$$\text{nova\_rota} = \text{rota}[:i] + \text{rota}[i : j+1][::-1] + \text{rota}[j+1:]$$

Se o custo da nova rota for menor que o custo anterior, a mudança é imediatamente adotada e a busca recomeça. O processo converge para um **ótimo local** quando nenhuma troca 2-Opt for capaz de diminuir o comprimento da rota. Complexidade no pior caso: $O(n^3)$, altamente tratável para sistemas operacionais de AGVs.

### 2.5. Cotas Inferiores: Árvore Geradora Mínima (MST) e Christofides

Como avaliar o quão boa é uma solução heurística sem conhecer o ótimo exato? Utiliza-se a **relaxação por Árvore Geradora Mínima (MST)**:
- Se removermos qualquer aresta de um ciclo hamiltoniano, obtemos uma árvore geradora dos vértices.
- Como a MST é, por definição, a árvore geradora de menor custo possível, temos: $C(\text{MST}) \le C(\text{TSP}^*)$.
- Portanto, a MST fornece uma **cota inferior matemática rígida** (*lower bound*) para o TSP métrico. O algoritmo de **Christofides** (1976) expande essa ideia, combinando a MST com um emparelhamento perfeito de peso mínimo (Aula 16) sobre os vértices de grau ímpar para garantir uma aproximação de no máximo $1{,}5\times$ o ótimo.

---

## 3. Exemplo Resolvido: Otimização do Circuito de Amostragem do AGV

**Configuração da Planta (6 postos de coleta):**
0. `LAB-100`: Laboratório de Qualidade e Sala de Controle (Base de carga do AGV)
1. `TK-101`: Banco 1 de Armazenamento — Baixa Pressão LP (350 bar)
2. `TK-102`: Banco 2 de Armazenamento — Média Pressão MP (700 bar)
3. `TK-103`: Banco 3 de Armazenamento — Alta Pressão HP (1000 bar)
4. `HEX-201`: Skid de Pré-Resfriamento Chiller (-40°C)
5. `DISP-300`: Unidade Dispensadora de Abastecimento Veicular

**Matriz de Distâncias no Pátio Industrial (metros):**
| Local | `LAB-100` | `TK-101` | `TK-102` | `TK-103` | `HEX-201` | `DISP-300` |
| --- | --- | --- | --- | --- | --- | --- |
| `LAB-100` | 0 | 45 | 50 | 80 | 75 | 110 |
| `TK-101` | 45 | 0 | 20 | 55 | 60 | 95 |
| `TK-102` | 50 | 20 | 0 | 45 | 50 | 85 |
| `TK-103` | 80 | 55 | 45 | 0 | 25 | 40 |
| `HEX-201` | 75 | 60 | 50 | 25 | 0 | 35 |
| `DISP-300` | 110 | 95 | 85 | 40 | 35 | 0 |

**Passo a passo da Heurística do Vizinho Mais Próximo (NN):**
1. Inicia em `LAB-100`. O vizinho mais próximo não visitado é `TK-101` (distância: 45 m).
2. De `TK-101`, o mais próximo é `TK-102` (distância: 20 m).
3. De `TK-102`, o mais próximo é `TK-103` (distância: 45 m).
4. De `TK-103`, os candidatos restantes são `HEX-201` (25 m) e `DISP-300` (40 m). O NN escolhe gulosamente `HEX-201` (25 m).
5. De `HEX-201`, o único local restante é `DISP-300` (distância: 35 m).
6. De `DISP-300`, o AGV é obrigado a fechar o ciclo retornando ao `LAB-100` (distância: **110 m**!).

$$\text{Distância total NN} = 45 + 20 + 45 + 25 + 35 + 110 = 280{,}0\,\text{m}$$

**Ação Corretiva da Busca Local 2-Opt:**
O 2-Opt detecta que a rota NN sofre do clássico salto longo final (`DISP-300 → LAB-100 = 110 m`). O algoritmo testa a inversão da ordem de visitação dos dois últimos postos (`HEX-201` e `DISP-300`):

$$\text{Rota 2-Opt}: \text{LAB-100} \to \text{TK-101} \to \text{TK-102} \to \text{TK-103} \to \text{DISP-300} \to \text{HEX-201} \to \text{LAB-100}$$

- Trecho `TK-103 → DISP-300`: 40 m
- Trecho `DISP-300 → HEX-201`: 35 m
- Retorno `HEX-201 → LAB-100`: **75 m** (ao invés de 110 m!)

$$\text{Distância total 2-Opt} = 45 + 20 + 45 + 40 + 35 + 75 = 260{,}0\,\text{m}$$

**Economia líquida:** $20{,}0\,\text{m}$ (redução de $7{,}1\%$ no percurso total por ciclo de amostragem), eliminando o cruzamento de trajetórias no pátio.

---

## 4. Atividades de Investigação

1. Calcule por força bruta o custo de todas as $5! = 120$ permutações possíveis (fixando `LAB-100` como origem) e confirme se a rota de $260{,}0\,\text{m}$ encontrada pelo 2-Opt é de fato o ótimo global da instância.
2. Execute o algoritmo do Vizinho Mais Próximo iniciando em um posto diferente (por exemplo, `DISP-300`, índice 5). A rota resultante coincide com a gerada a partir de `LAB-100`?
3. Calcule o custo de uma Árvore Geradora Mínima (MST) sobre essa matriz de distâncias (via Algoritmo de Prim ou Kruskal) e confirme empiricamente que $C(\text{MST}) \le 260{,}0\,\text{m}$.
4. Considerando que a norma SAE J2719 exige coleta e análise periódica a cada 12 horas de operação contínua, calcule a distância total percorrida pelo AGV em 1 ano de operação da estação com a rota 2-Opt vs. a rota NN.

---

## 5. Entregável da Aula 17

* **Módulo `RoteadorAGV_TSP` em Python:** Implementação completa da heurística do Vizinho Mais Próximo (*Nearest Neighbor*) integrada com busca local 2-Opt, matriz de distâncias dos postos de processo e relatório analítico de ganho logístico na Estação de Reabastecimento de Hidrogênio.
