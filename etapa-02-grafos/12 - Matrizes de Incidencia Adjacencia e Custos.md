# Aula 12: Matrizes de Incidência, Adjacência e Balanço de Massa Matricial

## 1. Fundamentos Matemáticos: A Matriz de Incidência Vértice-Aresta ($B$)

Seja um dígrafo $G = (V, E)$ representando a malha hidráulica da Estação de Reabastecimento de Hidrogênio, com $|V| = n$ equipamentos/nós e $|E| = m$ tubulações dirigidas. A **Matriz de Incidência Vértice-Aresta** $B \in \{-1, 0, 1\}^{n \times m}$ é formalmente definida por:

$$B[i, j] = \begin{cases} -1, & \text{se a tubulação } e_j \text{ sai do equipamento } v_i \text{ (origem / jusante)} \\ +1, & \text{se a tubulação } e_j \text{ entra no equipamento } v_i \text{ (destino / montante)} \\ 0, & \text{se o equipamento } v_i \text{ não incide na tubulação } e_j \end{cases}$$

### Propriedades Formais:
1. **Soma por Coluna Estritamente Nula:** Cada aresta $e_j = (u, v)$ conecta exatamente dois vértices distintos, logo:
   $$\sum_{i=1}^n B[i, j] = 0, \quad \forall j \in \{1, \dots, m\}$$
2. **Equação de Balanço de Massa em Regime Permanente:** O produto matricial entre a matriz de incidência e o vetor de vazões mássicas $\vec{Q} \in \mathbb{R}^m$ resulta no vetor de fontes e sumidouros líquidos da planta $\vec{S} \in \mathbb{R}^n$:
   $$B \cdot \vec{Q} = \vec{S}$$

---

## 2. Aprofundamento Teórico

### 2.1. Interpretação Física da Propriedade da Soma Nula no Processo de Hidrogênio

A propriedade $\sum_{i=1}^n B[i,j] = 0$ traduz o princípio elementar da física clássica: **a matéria não é criada nem destruída na tubulação**. No escoamento de gás hidrogênio ($H_2$), cada trecho de tubulação $e_j$ conduz a massa que deixa um nó $u$ (sinal $-1$) até o nó de destino $v$ (sinal $+1$). 

Essa formulação constitui a versão discreta e matricial da **Primeira Lei de Kirchhoff** (conservação de corrente aplicada aqui a fluxos de fluidos). Em uma planta de hidrogênio sob pressões elevadíssimas (350 bar a 700 bar), a conservação estrita em cada duto garante que o sistema de supervisão SCADA detecte instantaneamente desvios entre medidores de vazão mássica (Coriolis).

### 2.2. Matriz de Incidência vs. Matriz de Adjacência

| Aspecto | Matriz de Incidência $B$ | Matriz de Adjacência $A$ (e Custos $W$) |
| :--- | :--- | :--- |
| **Dimensão** | $n \times m$ (vértices $\times$ arestas/dutos) | $n \times n$ (vértices $\times$ vértices) |
| **Domínio dos Elementos** | $\{-1, 0, +1\}$ (topologia estrutural pura) | Pesos reais $\mathbb{R}^+$ (metros, perda de carga $\Delta P$) ou $\{0,1\}$ |
| **Aplicação Principal no SCADA** | Balanço de massa de $H_2$, diagnóstico de vazamentos, conservação nodal | Roteamento ótimo, busca de caminhos (BFS/DFS, Dijkstra, Floyd-Warshall) |
| **Relação Algébrica Fundamental** | $L = B B^T$ é a **Matriz Laplaciana** da rede subjacente | $L = D - A$, onde $D$ é a matriz diagonal de graus |

A identidade $L = B B^T$ une a análise de circuitos e fluxo à conectividade topológica. Seus autovalores revelam a conectividade algébrica (número de Fiedler) da estação de recarga, sendo crucial para a determinação de pontos críticos de vulnerabilidade e ilhamento de subsistemas.

### 2.3. Posto (Rank) da Matriz de Incidência e o Espaço de Ciclos

Para um grafo conexo com $n$ vértices e $m$ arestas, o posto algébrico de $B$ sobre $\mathbb{R}$ é dado por:
$$\text{posto}(B) = n - 1$$

Pelo Teorema do Núcleo e da Imagem (Rank-Nullity Theorem), a dimensão do espaço nulo à direita ($\ker(B)$), denominado **Espaço de Ciclos**, é calculada por:
$$\dim(\ker(B)) = m - \text{posto}(B) = m - n + 1$$

Na topologia nominal da Estação de Reabastecimento de Hidrogênio modelada na Aula 11 ($n = 8$ equipamentos e $m = 8$ tubulações):
$$\dim(\ker(B)) = 8 - 8 + 1 = 1$$

O número de ciclos independentes da rede é exatamente **1**. Fisicamente, esse ciclo fundamental corresponde à **rota paralela de compressão e estocagem em cascata**:
$$\text{Ciclo: } C\text{-}101 \xrightarrow{e_2} TK\text{-}101 \xrightarrow{e_5} MAN\text{-}101 \xleftarrow{e_6} TK\text{-}102 \xleftarrow{e_4} C\text{-}102 \xleftarrow{e_3} C\text{-}101$$

Esse ciclo estrutural reflete a arquitetura industrial de recarga rápida de veículos elétricos a célula de combustível (FCEV - Fuel Cell Electric Vehicles): o hidrogênio pode fluir pelo banco intermediário de 350 bar (`TK-101`) ou ser re-comprimido pelo 2º estágio (`C-102`) para o banco de 700 bar (`TK-102`), convergindo no manifold de dosagem (`MAN-101`).

### 2.4. Balanço de Massa de Hidrogênio como Sistema Linear

A equação $B \cdot \vec{Q} = \vec{S}$ modela o regime permanente contínuo:
* $\vec{Q} = [Q_1, Q_2, \dots, Q_8]^T \in \mathbb{R}^8$: vetor com as vazões mássicas escoando pelas tubulações em $\text{kg/h}$ de $H_2$.
* $\vec{S} \in \mathbb{R}^8$: vetor de fontes e sumidouros líquidos em cada nó. Adota-se a convenção físico-química padrão:
  * $S_i < 0$: **Fonte externa** de massa (injeção de hidrogênio no sistema, ex.: Eletrolisador `E-101`);
  * $S_i > 0$: **Sumidouro de massa** (saída do sistema para consumidor, ex.: Dispenser veicular `D-101`);
  * $S_i = 0$: **Nó de trânsito ou conservação** (compressores, tanques e manifold em regime balanceado).

Para todos os equipamentos intermediários que não acumulam massa em regime estável ($\Delta M / \Delta t = 0$), a soma das correntes afluentes iguala exatamente a soma das correntes efluentes:
$$\sum Q_{\text{entra}} - \sum Q_{\text{sai}} = 0 \iff S_i = 0$$

Se o SCADA Core computar $S_i \neq 0$ em um nó intermediário (ex.: $S_{MAN-101} < 0$), tem-se um sintoma direto de **desbalanceamento mássico por vazamento na tubulação**, ativando os permissivos de segurança (intertravamento com sensores de hidrogênio `AT-101`/`AT-301` e corte rápido pelas válvulas solenoides `XV`).

### 2.5. Matriz de Custos (Adjacência Ponderada) Revisitada

A matriz de custos $W \in (\mathbb{R}^+ \cup \{\infty\})^{n \times n}$ generaliza a adjacência binária atribuindo a distância geométrica das tubulações em metros (ou perdas de carga localizadas $\Delta P$):

$$W[u, v] = \begin{cases} 0, & \text{se } u = v \\ L_{(u, v)}, & \text{se existe o duto } (u, v) \in E \\ \infty, & \text{caso contrário} \end{cases}$$

Essa matriz de distâncias serve como a estrutura de dados primária para os algoritmos de roteamento dinâmico:
* **Algoritmo de Dijkstra (Aula 14):** Calcula a rota de menor perda de carga a partir de uma fonte única em tempo $O(m + n \log n)$;
* **Algoritmo de Floyd-Warshall:** Determina os menores caminhos entre **todos os pares** de equipamentos da planta com complexidade assintótica $\Theta(n^3)$, permitindo pré-computar rotas de emergência e rotas de bypass no sistema SCADA.

---

## 3. Exemplo Resolvido

**Problema:** Analise a coluna $e_2$ (duto `C-101` $\rightarrow$ `TK-101`, controlado pela válvula $XV-102$) e a linha correspondente ao nó `C-101` da matriz de incidência $B$. Verifique a soma nula da coluna e monte a equação de conservação local de massa para o compressor de 1º estágio.

**Resolução:**

1. **Análise da Coluna $e_2$:**
   * A aresta $e_2$ se origina no nó `C-101` e termina no nó `TK-101`.
   * Portanto:
     $$B[\text{C-101}, e_2] = -1, \quad B[\text{TK-101}, e_2] = +1, \quad B[i, e_2] = 0 \text{ para todo } i \notin \{\text{C-101}, \text{TK-101}\}$$
   * Somando os elementos ao longo de todas as 8 linhas da coluna $e_2$:
     $$\sum_{i=1}^8 B[i, e_2] = (-1) + (+1) + 0 + 0 + 0 + 0 + 0 + 0 = 0 \quad \checkmark$$

2. **Equação Nodal de Conservação em `C-101`:**
   * Observando as arestas incidentes em `C-101`:
     * Aresta afluente: $e_1$ (`E-101` $\rightarrow$ `C-101`), logo $B[\text{C-101}, e_1] = +1$;
     * Arestas efluentes: $e_2$ (`C-101` $\rightarrow$ `TK-101`) e $e_3$ (`C-101` $\rightarrow$ `C-102`), logo $B[\text{C-101}, e_2] = -1$ e $B[\text{C-101}, e_3] = -1$.
   * A linha correspondente do produto $B \cdot \vec{Q}$ resulta em:
     $$S_{\text{C-101}} = (+1) \cdot Q_1 + (-1) \cdot Q_2 + (-1) \cdot Q_3 = Q_1 - (Q_2 + Q_3)$$
   * Em regime estável sem acúmulo no compressor ($S_{\text{C-101}} = 0$):
     $$Q_1 = Q_2 + Q_3$$
     Se o eletrolisador fornecer $Q_1 = 30.0\,\text{kg/h}$, a soma enviada ao tanque LP ($Q_2 = 10.0\,\text{kg/h}$) e ao compressor HP ($Q_3 = 20.0\,\text{kg/h}$) iguala exatamente $30.0\,\text{kg/h}$, comprovando a consistência física.

---

## 4. Atividades de Investigação

1. **Detecção de Vazamentos via Resíduo Algébrico:**
   Considere o vetor de vazões nominais em regime permanente:
   $$\vec{Q} = [30.0, 10.0, 20.0, 20.0, 10.0, 20.0, 0.0, 30.0]^T\,\text{kg/h}$$
   Suponha que um rompimento parcial de vedação na conexão do bico dispensador faça com que a vazão medida na saída $e_8$ caia para $Q_8 = 27.5\,\text{kg/h}$, enquanto as vazões a montante em $e_5$ e $e_6$ permanecem em $10.0\,\text{kg/h}$ e $20.0\,\text{kg/h}$. Calcule o novo vetor de resíduos $\vec{S} = B \cdot \vec{Q}$. Em qual nó o desbalanceamento se manifesta e qual ação de trip de emergência (ESD) o SCADA Core deve disparar?

2. **Propriedade Algébrica do Laplaciano:**
   Demonstre formalmente que $L = B B^T = D - A$ para o grafo não-dirigido da estação de hidrogênio. Calcule manualmente os elementos da diagonal $L_{ii}$ para os nós `C-101` e `MAN-101` e justifique fisicamente seu significado em termos do grau de interconexão desses equipamentos na planta.

3. **Expansão Topológica e Espaço de Ciclos:**
   Durante uma auditoria de segurança da planta, a equipe de engenharia propôs a instalação de uma 9ª tubulação ($e_9$): uma linha de alívio e retorno que liga a válvula de alívio de pressão `PSV-103` do tanque de alta pressão (`TK-102`) de volta à sucção do compressor de 1º estágio (`C-101`). Recalcule a dimensão do espaço de ciclos ($\dim(\ker(B)) = m - n + 1$) para a rede modificada ($m = 9, n = 8$) e descreva os dois ciclos físicos resultantes.

4. **Análise Assintótica de Roteamento no SCADA:**
   Em uma futura expansão da estação para um parque de abastecimento em grande escala com $n$ unidades modulares de geração e $m$ conexões de distribuição, discuta comparativamente o custo computacional entre:
   * (a) Executar o algoritmo de Dijkstra $n$ vezes (uma a partir de cada tanque/fonte);
   * (b) Executar o algoritmo de Floyd-Warshall uma única vez.
   Para qual densidade de tubulações (grafo esparso com $m \approx O(n)$ versus grafo denso com $m \approx O(n^2)$) cada abordagem é superior?

---

## 5. Entregável da Aula 12

* **Motor Matricial de Balanço de Massa:** Geração automatizada da Matriz de Incidência $B \in \mathbb{R}^{8 \times 8}$, comprovação da propriedade da soma nula de colunas e validação em tempo real da equação de conservação mássica $B \cdot \vec{Q} = \vec{S}$ para o sistema SCADA Core da Estação de Reabastecimento de Hidrogênio.
