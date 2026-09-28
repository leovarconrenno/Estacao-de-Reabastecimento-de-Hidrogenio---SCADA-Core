# Aula 15: Simulação de Vazamentos e Desvio Automático de H2

## 1. Fundamentos Matemáticos: Reconfiguração Dinâmica de Grafos em Tempo Real

Na detecção de um vazamento em um segmento de duto de alta pressão $(u, v)$ (ex: `TK-102` até `MAN-101`), o sistema SCADA executa a punição topológica $W(u, v) \leftarrow \infty$ e recalcula instantaneamente a rota via Dijkstra para comutação das válvulas de contingência (desviando para o banco de baixa pressão).

## 2. Aprofundamento Teórico

### 2.1. Grafos Dinâmicos e o Conceito de Reponderação
Um **grafo dinâmico** é aquele cujo conjunto de arestas ou pesos varia ao longo do tempo, $G_t = (V, E_t, W_t)$. A reponderação — atribuir $W(u,v) \leftarrow \infty$ a um trecho isolado por falha ou manutenção — modela uma mudança topológica sem alterar a estrutura de dados raiz (a tubulação continua existindo fisicamente, apenas está temporariamente indisponível).

### 2.2. Tempo de Decisão em Ambientes Críticos (ATEX)
O gás hidrogênio ($H_2$) possui uma ampla faixa de inflamabilidade (4% a 75% no ar). Em um sistema de intertravamento de segurança (SIS), o tempo entre a detecção de uma queda brusca de pressão e o recálculo de rota deve ser mínimo. O recálculo do Dijkstra na ordem de frações de milissegundo garante que o gargalo de segurança da planta esteja puramente no tempo mecânico de fechamento das válvulas, não no tempo computacional do SCADA.

### 2.3. Conectividade, Pontes e Vértices de Articulação
**Quais trechos, se isolados, param completamente a estação?** Um trecho cuja remoção aumenta o número de componentes conexos do grafo é chamado de **ponte** (*bridge*). Se houver vazamento na tubulação única entre o Eletrolisador (`E-101`) e o Compressor (`C-101`), o abastecimento externo ou produção para. Essa análise topológica pauta a construção de malhas industriais resilientes ($k$-aresta-conexas).

## 3. Exemplo Resolvido

**Pergunta:** Se o trecho `TK-102 -> MAN-101` (Linha HP de 700 bar) vazar, o que ocorre com o abastecimento do veículo?

**Resolução:** O sensor de pressão reporta a anomalia e o algoritmo de roteamento define o custo dessa aresta como $\infty$. O caminho mínimo é recalculado automaticamente para usar a linha de média pressão (`TK-101 -> MAN-101`), acionando um protocolo de *bypass* para que a recarga do veículo (mesmo que a uma pressão inferior) não seja abruptamente interrompida.

## 4. Entregável da Aula 15

* **Simulador de Desvio de Vazamento:** Motor capaz de receber injeção de falhas (rompimento de duto) e retornar, em milissegundos, a rota secundária segura de reabastecimento.
