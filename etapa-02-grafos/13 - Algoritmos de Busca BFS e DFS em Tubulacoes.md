# Aula 13: Algoritmos de Busca (BFS e DFS) em Malhas de Tubulação

## 1. Fundamentos Matemáticos: Travessia em Grafos

1. **Busca em Largura (BFS):** Utiliza fila FIFO. Encontra o caminho com o **menor número de arestas/válvulas** ($O(|V| + |E|)$).
2. **Busca em Profundidade (DFS):** Utiliza recursão/pilha LIFO. Permite detectar ciclos e enumerar todos os caminhos alternativos de contingência.

---

## 2. Aprofundamento Teórico

### 2.1. Busca em Largura (BFS) — Definição Formal

O algoritmo BFS explora o grafo **por camadas**: a partir de um vértice origem $s$, visita primeiro todos os vértices a distância $1$ (medida em número de arestas/válvulas), depois todos os vértices a distância $2$, e assim sucessivamente. Formalmente, seja $d(s, v)$ a distância mínima (em número de arestas) de $s$ até $v$. O BFS garante a seguinte invariante ao processar a fila:

$$\text{Se } v \text{ é retirado da fila antes de } u, \text{ então } d(s, v) \leq d(s, u).$$

Essa invariante é o que garante que **o primeiro caminho encontrado até um vértice é necessariamente o mais curto em número de arestas** — daí o uso na automação da Estação de Reabastecimento de Hidrogênio para encontrar a rota com menor quantidade de válvulas a comutar (`XV-101` a `XV-108`), mesmo que ela não seja a rota de menor comprimento físico ou menor perda de carga (critérios tratados com algoritmos ponderados como Dijkstra).

**Complexidade:** cada equipamento ($v \in V$) é enfileirado exatamente uma vez ($O(V)$) e cada tubulação ($e \in E$) é examinada exatamente uma vez ($O(E)$) ao expandir seus vizinhos, resultando em $O(|V| + |E|)$ — complexidade linear no tamanho da planta.

### 2.2. Busca em Profundidade (DFS) — Definição Formal

O DFS explora o grafo **aprofundando-se ao máximo** por um ramo da malha de tubulação antes de retroceder (*backtrack*). Ao processar as arestas durante uma DFS no dígrafo da estação de hidrogênio, cada tubulação é classificada em uma de quatro categorias, conforme o "tempo de descoberta" e "tempo de finalização" dos vértices envolvidos:

| Tipo de aresta | Definição | Interpretação na planta de hidrogênio |
| --- | --- | --- |
| **Aresta de árvore** (*tree edge*) | leva a um equipamento ainda não visitado | trecho principal do percurso de transferência de gás ($H_2$) |
| **Aresta de retorno** (*back edge*) | leva a um ancestral na árvore de busca | indica um **ciclo** no dígrafo (linha de recirculação ou alívio) |
| **Aresta de avanço** (*forward edge*) | leva a um descendente já visitado | atalho/bypass (ex.: alimentação direta sem passar por estágio intermediário) |
| **Aresta de cruzamento** (*cross edge*) | leva a um equipamento em outro ramo | conecta linhas de subsistemas distintos (ex.: chiller `CH-101` alimentando o manifold) |

A detecção de uma aresta de retorno durante a DFS é o critério formal usado para provar que um dígrafo **não é um DAG** (grafo acíclico dirigido) — uma verificação de segurança crucial no SCADA Core, pois ciclos não mapeados podem resultar em recirculação não controlada de gás pressurizado.

**Complexidade:** idêntica à BFS, $O(|V| + |E|)$, pois cada equipamento e tubulação são examinados uma única vez.

### 2.3. BFS vs. DFS: Quando Usar Cada Um

| Critério | BFS | DFS |
| --- | --- | --- |
| Garante caminho mínimo em nº de arestas | Sim | Não |
| Uso de memória no pior caso | $O(|V|)$ (toda a fronteira de equipamentos na fila) | $O(\text{profundidade máxima})$, geralmente menor |
| Enumeração de todos os caminhos | Possível, mas custosa | Natural (usada para listar todas as rotas de contingência até o dispenser `D-101`) |
| Detecção de ciclos em dígrafo | Não direta | Direta, via arestas de retorno (*back edges*) |
| Aplicação típica na planta | Rota com menos válvulas a comutar (menor risco operacional de falha mecânica de atuador) | Análise de contingência: enumerar *todas* as rotas de abastecimento e purga antes da manobra |

### 2.4. Bloqueio Dinâmico de Nós como Simulação de Falha

A implementação do motor de busca topológica aceita um conjunto `nos_bloqueados`, que remove temporariamente equipamentos da busca — uma forma simples e eficaz de simular a falha ou manutenção de um equipamento (por exemplo, o compressor de 1º estágio `C-101` ou o chiller `CH-101` tripado) sem alterar a estrutura física permanente do grafo. Do ponto de vista de complexidade, essa técnica preserva a ordem assintótica do algoritmo em $O(|V| + |E|)$, adicionando apenas uma verificação de pertencimento ao conjunto com custo amortizado $O(1)$ em Python (`set`).

---

## 3. Exemplo Resolvido

**Pergunta:** Na Estação de Reabastecimento de Hidrogênio, por que a BFS executada a partir de `E-101` (Eletrolisador) até `MAN-101` (Manifold) retorna a rota `E-101 -> C-101 -> TK-101 -> MAN-101` (3 arestas / válvulas `XV-101`, `XV-102`, `XV-105`) como a rota de menor número de válvulas, ao invés da rota via 2º estágio `C-102` e banco HP `TK-102` (`E-101 -> C-101 -> C-102 -> TK-102 -> MAN-101`, 4 arestas / válvulas `XV-101`, `XV-103`, `XV-104`, `XV-106`), mesmo que a rota HP seja a necessária para atingir a pressão final de 700 bar exigida pelo veículo?

**Resolução:** A BFS opera exclusivamente sobre a **contagem de arestas** (número de válvulas de bloqueio atravessadas), ignorando os níveis de pressão (350 bar vs. 700 bar) ou perdas de carga associadas a cada duto. Trata-se de uma escolha deliberada de modelagem no SCADA: minimizar o número de válvulas ativadas reduz a probabilidade de falha mecânica em atuadores solenoides/pneumáticos durante o alinhamento da linha, representando um critério de **confiabilidade e rapidez na comutação**. Caso o requisito operacional seja a pressão máxima ou o menor comprimento físico da linha, utilizam-se algoritmos de menor caminho ponderado (Dijkstra, abordado na Aula 14). Ambas as abordagens se complementam na inteligência de controle da estação.

---

## 4. Atividades de Investigação

1. Execute manualmente a BFS a partir de `E-101` (Eletrolisador PEM) até o `D-101` (Dispenser veicular) e determine a camada (distância $d(s, v)$ em número de arestas) de cada equipamento visitado na topologia nominal da planta.
2. Classifique as arestas percorridas pela DFS ao enumerar as rotas alternativas entre os bancos de estocagem (`TK-101` e `TK-102`) e o dispenser `D-101`: identifique se existem arestas de avanço (*forward edges*) ou de cruzamento (*cross edges*). Justifique por que a topologia nominal da estação é um DAG (grafo acíclico dirigido).
3. Simule uma parada de emergência no compressor de 1º estágio adicionando `C-101` ao conjunto de `nos_bloqueados`. Execute a BFS de `E-101` até `D-101`. O algoritmo retorna `None`? Qual o significado físico desse resultado para o supervisório SCADA da planta?
4. Modifique o algoritmo DFS para interromper a busca assim que encontrar as 2 primeiras rotas de contingência viáveis, e compare a complexidade prática com a enumeração completa do espaço de caminhos.

---

## 5. Entregável da Aula 13

* **Motor de Busca Topológica em Python:** Implementação das classes `BFS_Router` e `DFS_PathFinder` com suporte a nós bloqueados e intertravamentos de segurança ISA-5.1 para a Estação de Reabastecimento de Hidrogênio.
