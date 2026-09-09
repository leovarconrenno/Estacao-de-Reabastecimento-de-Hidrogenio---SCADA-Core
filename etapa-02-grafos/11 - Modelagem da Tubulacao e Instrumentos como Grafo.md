# Aula 11: Teoria dos Grafos — Modelagem de Tubulações e Instrumentos

## 1. Fundamentos Matemáticos: Definição Formal de Dígrafos Ponderados

Um **Grafo Dirigido e Ponderado (Dígrafo)** é formalmente definido pela tripla:
$$G = (V, E, W)$$

Onde:
1. **$V = \{v_1, v_2, \dots, v_n\}$** é o conjunto finito de **vértices (nós)**: eletrolisador, compressores, tanques de armazenamento, chillers, manifolds e dispensers.
2. **$E \subseteq V \times V$** é o conjunto de **arestas dirigidas (arcos)** de tubulação com sentido de fluxo permitido.
3. **$W: E \rightarrow \mathbb{R}^+$** é a **função de ponderação**, que associa a cada duto um custo operacional (comprimento físico $L\text{ [m]}$ ou perda de carga $\Delta P$).

```mermaid
graph LR
    E101["E-101: Eletrolisador"] -->|5m (XV-101)| C101["C-101: Compressor 1 Estágio"]
    C101 -->|10m (XV-102)| TK101["TK-101: Tanque Baixa Pressão (LP)"]
    C101 -->|15m (XV-103)| C102["C-102: Compressor 2 Estágio"]
    C102 -->|8m (XV-104)| TK102["TK-102: Tanque Alta Pressão (HP)"]
    TK101 -->|12m (XV-105)| MAN101["MAN-101: Manifold do Dispenser"]
    TK102 -->|15m (XV-106)| MAN101
    CH101["CH-101: Chiller (Resfriador)"] -->|6m (XV-107)| MAN101
    MAN101 -->|4m (XV-108)| D101["D-101: Dispenser (Bico de Abastecimento)"]
```

---

## 2. Entregável da Aula 11

* **Classe `GrafoTubulacao` em Python:** Estrutura orientada a objetos com suporte a nós ISA-5.1, inserção de tubulações com peso e válvula associada, e exportação das matrizes de adjacência para o sistema SCADA da Estação de Reabastecimento de Hidrogênio.
