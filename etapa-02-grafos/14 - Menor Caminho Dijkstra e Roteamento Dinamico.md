# Aula 14: Menor Caminho — Algoritmo de Dijkstra e Roteamento Dinâmico de H2

## 1. Fundamentos Matemáticos: Algoritmo Guloso de Dijkstra

Dado um dígrafo ponderado com pesos não-negativos $G = (V, E, W)$, o **Algoritmo de Dijkstra** calcula o caminho de custo mínimo entre um vértice fonte $s$ e os nós $v \in V$ em $O((\vert{}V\vert{} + \vert{}E\vert{}) \log \vert{}V\vert{})$ com Min-Heap.  

Na Estação de Reabastecimento de Hidrogênio, esse algoritmo é crucial para definir a rota de menor **perda de carga** ou **distância física** no envio de $H_2$ sob alta pressão (até 700 bar) aos dispensers, otimizando o gasto energético dos compressores.

## 2. Aprofundamento Teórico

### 2.1. O Princípio de Relaxação de Arestas no Escoamento de Gás
O conceito central do algoritmo é a **operação de relaxação**: para cada trecho de tubulação $(u, v)$ com perda de carga $w(u,v)$, se a perda provisória até $u$ mais a perda da aresta for menor que a perda provisória conhecida até $v$, atualizamos:

$$\text{se } d[u] + w(u,v) < d[v] \implies d[v] \leftarrow d[u] + w(u,v), \quad \text{pred}[v] \leftarrow u$$

Repetir essa relaxação sistematicamente garante o caminho que exige menos trabalho de compressão, poupando energia no Eletrolisador (`E-101`) e nos estágios subsequentes.

### 2.2. Por Que a Estratégia Gulosa Funciona
A correção do algoritmo depende crucialmente da hipótese de **pesos não-negativos**. Em termodinâmica de fluidos, o comprimento do duto e a perda de pressão por fricção são sempre positivos (não existe "ganho" de pressão no duto sem passar por um compressor ativo). Logo, a suposição fundamental de Dijkstra é validada na física do sistema.

### 2.3. Reconstrução do Caminho via Vetor de Predecessores
O algoritmo mantém um vetor `pred[v]`. Ao final, a rota ótima (ex: Eletrolisador $\rightarrow$ Dispenser) é reconstruída por retropropagação, orientando o SCADA sobre a sequência exata de comutação das válvulas `XV`.

## 3. Exemplo Resolvido

**Pergunta:** Qual o benefício da rota Dijkstra (`E-101 -> C-101 -> TK-101 -> MAN-101 -> D-101`) em comparação com a busca em largura (BFS)?

**Resolução:** A BFS conta o número de válvulas de bloqueio (foco em confiabilidade de atuação). O algoritmo de Dijkstra considera a distância real em metros ou perda de carga real. Em caso de restrição de tempo de abastecimento rápido (protocolo SAE J2601), Dijkstra assegura a rota de menor resistência de escoamento, acelerando a entrega do gás.

## 4. Entregável da Aula 14

* **Módulo Roteador Dijkstra:** Implementação capaz de eleger rotas dinâmicas minimizando perdas ao longo do layout da Estação de Hidrogênio.
