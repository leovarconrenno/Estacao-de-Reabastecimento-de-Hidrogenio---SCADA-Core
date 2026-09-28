# Aula 17: Problemas Hamiltonianos e Roteamento Logístico de AGVs (TSP)

## 1. Fundamentos Matemáticos: Ciclos Hamiltonianos e o Caixeiro-Viajante (TSP)

O **Problema do Caixeiro-Viajante (TSP - Traveling Salesperson Problem)** busca o Ciclo Hamiltoniano de menor custo que visita todos os vértices (nós) de um grafo exatamente uma única vez, retornando à base.

---

## 2. Aprofundamento Teórico

### 2.1. TSP na Manutenção da Estação de H2
Enquanto o problema Euleriano (Aula 16) exigia visitar todas as *tubulações* (arestas), o problema Hamiltoniano exige visitar todos os *equipamentos* (vértices). 
Na Estação de Reabastecimento de Hidrogênio, os sensores ultrassônicos de chama e sensores de pressão dependem de **calibração física periódica**. Um AGV logístico (ou um técnico humano) precisa planejar uma rota que parta da casa de controle (Base), visite cada compressor, tanque e dispenser uma única vez, e volte à base, caminhando a menor distância possível pelo pátio.

### 2.2. Por que o TSP é Computacionalmente Difícil
O TSP pertence à classe de problemas **NP-difícil**. Isso significa que testar todas as possibilidades (força bruta) exige calcular $O(n!)$ permutações. Para uma planta com muitos equipamentos espalhados, isso se torna inviável. Portanto, recorre-se a *heurísticas* que entregam ótimos resultados rapidamente.

### 2.3. Heurística do Vizinho Mais Próximo (Nearest Neighbor) e 2-Opt
* **Nearest Neighbor:** O AGV simplesmente olha para o equipamento não calibrado mais próximo de onde ele está e vai até ele. É rápido ($O(n^2)$), mas costuma deixar um "salto" muito longo no final para voltar à base.
* **Busca Local 2-Opt:** Analisa a rota gerada pelo Vizinho Mais Próximo e procura "cruzamentos" na trajetória geométrica. Se achar duas linhas que se cruzam, ele destrói e religa as arestas, otimizando o custo final. A combinação de ambos é a estratégia ideal.

## 3. Entregável da Aula 17

* **Otimizador Logístico (AGV / Técnico) em Python:** Implementação heurística para definir a menor trajetória a pé ou veículo não-tripulado pelo parque da Estação H2.
