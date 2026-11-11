# Relatório Técnico: Otimização Topológica de Estação de Reabastecimento de Hidrogênio (HRS)

**Dimensionamento Mínimo de Malha de Utilidades e Redes SCADA com Algoritmos de Kruskal e Prim**

### Informações do Projeto

| Parâmetro | Detalhe | 
| ----- | ----- | 
| **Unidade Industrial** | Estação de Reabastecimento de Hidrogênio (HRS - *Hydrogen Refueling Station*) | 
| **Aplicação** | Interconexão de Tubulações (Alta/Baixa Pressão) e Cabeamento de Controle SCADA | 
| **Método Formulado** | Árvore Geradora Mínima (MST — *Minimum Spanning Tree*) | 
| **Código do Projeto** | ECAA08-SISTEMA-SCADA-HRS | 

## 1. Contextualização e Objetivo de Engenharia

No dimensionamento eletromecânico e hidráulico de uma Estação de Reabastecimento de Hidrogênio (HRS), a otimização dos leitos de tubulação e dos barramentos de comunicação industrial SCADA representa um fator crítico. Tubulações de hidrogênio sob alta pressão requerem materiais dispendiosos (aço inox especial) e rotas precisas para mitigação de riscos, impactando diretamente no CAPEX (*Capital Expenditure*) e OPEX (*Operational Expenditure*).

O objetivo deste estudo é modelar o *layout* das unidades de geração, armazenamento e abastecimento como um grafo não direcionado e valorado $G = (V, E, w)$ e determinar a topologia de conexão de menor extensão linear contínua utilizando os algoritmos de **Kruskal** e **Prim**.

## 2. Formulação Matemática da Rede

A estação é representada por um conjunto de vértices $V$ (equipamentos de processo e controle) e arestas $E$ (rotas de interconexão viáveis), onde o peso $w(e)$ quantifica a distância física em metros entre os equipamentos:

* **Vértices (**$V$**):**

  * $v_1$: `ELET-01` — Eletrolisador (Geração)
  * $v_2$: `PURIF-01` — Purificador de $\text{H}_2$ (Tratamento)
  * $v_3$: `TK-BP` — Tanque de Baixa Pressão (Armazenamento)
  * $v_4$: `COMP-01` — Compressor Principal (Compressão)
  * $v_5$: `TK-AP` — Tanque de Alta Pressão (Armazenamento)
  * $v_6$: `RESF-01` — Sistema de Resfriamento / Chiller (Condicionamento)
  * $v_7$: `DISP-01` — Dispenser de Hidrogênio (Abastecimento)
  * $v_8$: `SCADA-01` — Centro de Controle SCADA (Automação)

## 3. Algoritmo de Kruskal (Abordagem Baseada em Arestas)

O algoritmo de Kruskal adota uma estratégia gulosa (*greedy*) baseada nas arestas do grafo. As arestas são ordenadas em ordem crescente de peso e inseridas na solução uma a uma, desde que não formem ciclos (verificado através da estrutura de dados *Union-Find*).

Para $\vert{}V\vert{} = 8$ vértices, a Árvore Geradora Mínima (MST) conterá exatamente $\vert{}V\vert{} - 1 = 7$ arestas.

| Ordem | Aresta $e$ | Trecho Conectado | Distância $w(e)$ | Ciclo Detectado? | Decisão de Projeto | 
| ----- | ----- | ----- | ----- | ----- | ----- | 
| 1 | $(v_1, v_2)$ | `ELET-01` $\leftrightarrow$ `PURIF-01` | $5\text{ m}$ | Não | **INCLUÍDA** | 
| 2 | $(v_6, v_7)$ | `RESF-01` $\leftrightarrow$ `DISP-01` | $5\text{ m}$ | Não | **INCLUÍDA** | 
| 3 | $(v_3, v_4)$ | `TK-BP` $\leftrightarrow$ `COMP-01` | $8\text{ m}$ | Não | **INCLUÍDA** | 
| 4 | $(v_2, v_3)$ | `PURIF-01` $\leftrightarrow$ `TK-BP` | $10\text{ m}$ | Não | **INCLUÍDA** | 
| 5 | $(v_4, v_5)$ | `COMP-01` $\leftrightarrow$ `TK-AP` | $12\text{ m}$ | Não | **INCLUÍDA** | 
| 6 | $(v_3, v_8)$ | `TK-BP` $\leftrightarrow$ `SCADA-01` | $15\text{ m}$ | Não | **INCLUÍDA** | 
| 7 | $(v_5, v_6)$ | `TK-AP` $\leftrightarrow$ `RESF-01` | $15\text{ m}$ | Não | **INCLUÍDA** | 
| 8 | $(v_4, v_8)$ | `COMP-01` $\leftrightarrow$ `SCADA-01` | $18\text{ m}$ | Sim (via `TK-BP`) | **REJEITADA** | 
| 9 | $(v_2, v_8)$ | `PURIF-01` $\leftrightarrow$ `SCADA-01` | $20\text{ m}$ | Sim (via `TK-BP`) | **REJEITADA** | 
| 10 | $(v_5, v_7)$ | `TK-AP` $\leftrightarrow$ `DISP-01` | $20\text{ m}$ | Sim (via `RESF-01`) | **REJEITADA** | 
| 11 | $(v_6, v_8)$ | `RESF-01` $\leftrightarrow$ `SCADA-01` | $22\text{ m}$ | Sim (via Rede) | **REJEITADA** | 
| 12 | $(v_1, v_8)$ | `ELET-01` $\leftrightarrow$ `SCADA-01` | $25\text{ m}$ | Sim (via Rede) | **REJEITADA** | 
| 13 | $(v_3, v_6)$ | `TK-BP` $\leftrightarrow$ `RESF-01` | $28\text{ m}$ | Sim (via `COMP-01`, `TK-AP`) | **REJEITADA** | 
| 14 | $(v_7, v_8)$ | `DISP-01` $\leftrightarrow$ `SCADA-01` | $30\text{ m}$ | Sim (via Rede) | **REJEITADA** | 

**Comprimento total da infraestrutura via Kruskal:**

$$
W_{\text{Kruskal}} = 5 + 5 + 8 + 10 + 12 + 15 + 15 = 70\text{ metros}
$$

## 4. Algoritmo de Prim (Abordagem Baseada em Vértices)

O algoritmo de Prim expande uma única arborescência a partir de um nó raiz inicial (definido como o eletrolisador $v_1$ / `ELET-01`), adicionando a cada passo a aresta de menor peso que conecta a árvore em crescimento a um nó da fronteira não visitado.

| Iteração | Vértices na Árvore ($S$) | Arestas de Corte Elegíveis | Aresta Selecionada | Nó Adicionado | Custo | 
| ----- | ----- | ----- | ----- | ----- | ----- | 
| **Inicial** | $\{v_1\}$ | $(v_1, v_2): 5$, $(v_1, v_8): 25$ | $(v_1, v_2)$ | $v_2$ (`PURIF-01`) | $5\text{ m}$ | 
| **1** | $\{v_1, v_2\}$ | $(v_2, v_3): 10$, $(v_2, v_8): 20, \dots$ | $(v_2, v_3)$ | $v_3$ (`TK-BP`) | $10\text{ m}$ | 
| **2** | $\{v_1, v_2, v_3\}$ | $(v_3, v_4): 8$, $(v_3, v_8): 15, \dots$ | $(v_3, v_4)$ | $v_4$ (`COMP-01`) | $8\text{ m}$ | 
| **3** | $\{v_1, v_2, v_3, v_4\}$ | $(v_4, v_5): 12$, $(v_4, v_8): 18, \dots$ | $(v_4, v_5)$ | $v_5$ (`TK-AP`) | $12\text{ m}$ | 
| **4** | $\{v_1, v_2, v_3, v_4, v_5\}$ | $(v_3, v_8): 15$, $(v_5, v_6): 15, \dots$ | $(v_3, v_8)$ | $v_8$ (`SCADA-01`) | $15\text{ m}$ | 
| **5** | $\{v_1, v_2, v_3, v_4, v_5, v_8\}$ | $(v_5, v_6): 15$, $(v_5, v_7): 20, \dots$ | $(v_5, v_6)$ | $v_6$ (`RESF-01`) | $15\text{ m}$ | 
| **6** | $\{v_1, v_2, v_3, v_4, v_5, v_6, v_8\}$ | $(v_6, v_7): 5$, $(v_5, v_7): 20, \dots$ | $(v_6, v_7)$ | $v_7$ (`DISP-01`) | $5\text{ m}$ | 

**Comprimento total da infraestrutura via Prim:**

$$
W_{\text{Prim}} = 5 + 10 + 8 + 12 + 15 + 15 + 5 = 70\text{ metros}
$$

## 5. Representação Esquemática da Rede e Otimização MST

![Figura 1](img/HRS_Kruskal_Prim.jpeg)
*Figura 1: Diagrama conceitual comparativo entre os algoritmos de Kruskal (orientado a arestas) e Prim (orientado a vértices) aplicados à otimização da malha da Estação de Reabastecimento de Hidrogênio.*

## 6. Análise Comparativa e Decisão Industrial

> 💡 **Recomendações de Aplicação Industrial (FEED vs. Montagem em Campo)**
>
> Ambos os métodos garantem equivalência no comprimento total de tubulações e leitos de cabos ($70\text{ metros}$). A escolha da metodologia depende da fase do projeto de engenharia:
>
> * **Algoritmo de Kruskal** $\mathcal{O}(\vert{}E\vert{} \log \vert{}E\vert{})$**:** É ideal para a fase de projeto conceitual e básico (*FEED - Front-End Engineering Design*), onde a matriz global de distâncias da planta da HRS pode ser analisada em software para estimar os quantitativos e o orçamento do aço inox de alta pressão.
>
> * **Algoritmo de Prim** $\mathcal{O}(\vert{}E\vert{} + \vert{}V\vert{} \log \vert{}V\vert{})$**:** É ideal para a etapa de execução e montagem eletromecânica em campo. Permite que a equipe de automação lance o barramento SCADA de forma contínua a partir da sala de controle ou da unidade geradora principal, expandindo a rede conectada sem deixar ilhas de comunicação pendentes.

## 7. Referências Técnicas

1. CORMEN, T. H. et al. **Algoritmos: Teoria e Prática**. 3. ed. Rio de Janeiro: Elsevier, 2012.

2. PETERS, M. S.; TIMMERHAUS, K. D. **Plant Design and Economics for Chemical Engineers**. 5th ed. New York: McGraw-Hill, 2003.
