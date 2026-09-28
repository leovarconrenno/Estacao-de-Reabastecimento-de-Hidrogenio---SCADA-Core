# Aula 16: Problemas Eulerianos e Inspeção Autônoma de Infraestrutura H2

## 1. Fundamentos Matemáticos: Teorema de Euler e Circuitos Eulerianos

Um **Circuito Euleriano** em um grafo não-dirigido conexo existe se e somente se **todos os vértices tiverem grau par**. Ele permite percorrer todas as arestas de uma rede exatamente uma única vez e retornar ao ponto inicial.

---

## 2. Aprofundamento Teórico

### 2.1. Contexto em Estações de Hidrogênio
Na indústria de fertilizantes, a inspeção busca corrosão. Na Estação de Hidrogênio, a missão é ainda mais crítica: buscar **microvazamentos de $H_2$** usando um robô autônomo móvel ou *drone* classificado como ATEX (à prova de explosão) equipado com sensores acústicos e "sniffers" de gás. Para garantir a segurança, o drone precisa sobrevoar/acompanhar **todas as tubulações da planta** sem desperdiçar bateria repetindo trechos longos desnecessariamente.

### 2.2. O Algoritmo de Hierholzer
Desenvolvido em 1873, este algoritmo construtivo resolve o problema de encontrar o circuito Euleriano de forma eficiente em $O(|E|)$. Ele utiliza uma estratégia de **pilha explícita com remoção de arestas visitadas**:
1. Empilha o vértice inicial.
2. Avança para vizinhos que tenham conexões não visitadas, removendo a aresta.
3. Quando chega em um nó sem saídas não visitadas, desempilha para o circuito final.
4. O resultado final, quando invertido, dá a rota exata, cobrindo 100% da malha de hidrogênio.

### 2.3. O Problema do Carteiro Chinês
Se a topologia da Estação de Hidrogênio tiver equipamentos conectados de tal forma que gerem graus ímpares (ex: um nó de purga em extremidade cega), o grafo não é Euleriano puro. Nesse cenário recai-se no **Problema do Carteiro Chinês**, em que será matematicamente obrigatório passar duas vezes por alguns tubos.

## 3. Entregável da Aula 16

* **Algoritmo de Rota de Inspeção Euleriana:** Mapeamento de um circuito de anel da malha da Estação e cálculo do voo ótimo de inspeção do drone de detecção de vazamentos.
