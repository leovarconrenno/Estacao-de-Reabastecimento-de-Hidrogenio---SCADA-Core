# Modelagem e Análise Formal com Redes de Petri: Árvore de Atingibilidade e Árvore de Cobertura
## Estudo de Caso: Sistema de Compressão, Armazenamento em Cascata e Dispensação da Estação de Hidrogênio (HRS)

---

## 1. Introdução Didática: Por que Redes de Petri na Automação de Hidrogênio?

Em uma **Estação de Reabastecimento de Hidrogênio (HRS)** — envolvendo o **Setor 100 (`ELET-01`, `PURIF-01`, `TK-BP`, `COMP-01`)**, **Setor 200 (`TK-AP`, `RESF-01`)** e **Setor 300 (`DISP-01`)** — os eventos operacionais ocorrem de forma **concorrente, assíncrona e sob restrições físicas rígidas** (pressão máxima em `TK-BP` $< 400\text{ bar}$, linha `PT-201` $< 900\text{ bar}$, temperatura $< 85^\circ\text{C}$ e concentração atmosférica `AT-101` $< 40\%\text{ LFL}$).

Enquanto máquinas de estados finitos clássicas sofrem com explosão combinatória ao representar paralelismo, as **Redes de Petri (RdP)** permitem verificar formalmente propriedades críticas de segurança **antes** da implementação em CLP:
* **Limitação (*Boundedness*):** Garante que o banco de alta pressão `TK-AP` nunca excederá sua capacidade nominal de lotes comprimidos.
* **Ausência de Bloqueio (*Deadlock-freedom*):** Garante que o ciclo de compressão e abastecimento não travará aguardando válvulas ou permissivos mútuos.
* **Segurança (*Safety*):** Prova matematicamente que estados proibidos (ex.: compressor `COMP-01` ativo simultaneamente ao disparo de `ESD-100`) são **inatingíveis**.

---

## 2. Definição Formal da Rede de Petri Marcada

Uma Rede de Petri marcada é definida pela quíntupla:
$$N = (P, T, Pre, Post, M_0)$$

Onde:
* **$P = \{p_1, p_2, \dots, p_m\}$:** Conjunto finito de **Lugares** (condições operacionais, estados de equipamentos ou lotes de hidrogênio).
* **$T = \{t_1, t_2, \dots, t_n\}$:** Conjunto finito de **Transições** ($P \cap T = \emptyset$, eventos ou comandos SCADA).
* **$Pre: P \times T \to \mathbb{N}$:** Matriz de pré-incidência (pré-requisitos de disparo).
* **$Post: P \times T \to \mathbb{N}$:** Matriz de pós-incidência (efeitos após o disparo).
* **$M_0: P \to \mathbb{N}$:** Vetor de **Marcação Inicial** (*tokens* no instante $k = 0$).

### Regra de Habilitação e Equação de Estado
Uma transição $t_j \in T$ está **habilitada** em $M$ se, e somente se:
$$M(p_i) \ge Pre(p_i, t_j), \quad \forall p_i \in P$$

Ao disparar $t_j$, o sistema evolui para $M'$ pela equação fundamental:
$$M' = M + C \cdot \vec{e}_j$$
onde $C = Post - Pre$ é a **Matriz de Incidência** ($m \times n$) e $\vec{e}_j$ é o vetor canônico de $t_j$.

---

## 3. Modelagem Aplicada à Estação de Hidrogênio (HRS)

Modelamos o subsistema de **Purificação/Sucção em `TK-BP`, Compressão em `COMP-01`, Acúmulo no Banco `TK-AP` e Intertravamento `ESD-100`**.

### 3.1. Mapeamento dos Lugares ($P$) e Transições ($T$)

| Símbolo | Descrição Física na Estação HRS | Interpretação das Fichas (*Tokens*) |
| :---: | :--- | :--- |
| **$p_1$** | Compressor `COMP-01` Ocioso / Pronto | $1$ ficha = compressor despressurizado e disponível para ciclo. |
| **$p_2$** | Admissão de $\text{H}_2$ de `TK-BP` Liberada | $1$ ficha = válvula `XV-101` aberta e `PURIF-01` em regime. |
| **$p_3$** | Compressão em Curso (`COMP-01` Ativo) | $1$ ficha = compressão até $850\text{ bar}$ monitorada por `PT-101` / `TT-101`. |
| **$p_4$** | Banco de Alta Pressão `TK-AP` | $k$ fichas = lotes de $\text{H}_2$ comprimido acumulados para o `DISP-01`. |
| **$p_5$** | Falha / Intertravamento SIS (`ESD-100` / Fuga `AT-101`) | $1$ ficha = parada de emergência acionada (`XV-101=0`, `XV-301=0`). |

| Símbolo | Evento / Ação de Controle | Pré-condições ($Pre$) | Pós-condições ($Post$) |
| :---: | :--- | :--- | :--- |
| **$t_1$** | **Abrir Admissão `XV-101`** (Sucção `TK-BP`) | $p_1$ ($1$) | $p_2$ ($1$) |
| **$t_2$** | **Partir Compressor `COMP-01`** | $p_2$ ($1$) | $p_3$ ($1$) |
| **$t_3$** | **Concluir Compressão e Armazenar em `TK-AP`** | $p_3$ ($1$) | $p_1$ ($1$), $p_4$ ($1$) |
| **$t_4$** | **Disparar `ESD-100`** (Sobrepressão `PT-101` ou Fuga `AT-101`) | $p_3$ ($1$) | $p_5$ ($1$) |
| **$t_5$** | **Reset Manual após Inspeção e Purga com $\text{N}_2$** | $p_5$ ($1$) | $p_1$ ($1$) |

---

## 4. Parte A: Árvore de Atingibilidade (Subsistema Limitado)

Analisando primeiro o ciclo de controle do compressor sobre $\{p_1, p_2, p_3, p_5\}$ com $M_0 = [1, 0, 0, 0]^T$:

```
                    M0 = [1, 0, 0, 0]  (COMP-01 Pronto)
                           |
                          t1 (Abrir XV-101)
                           v
                    M1 = [0, 1, 0, 0]  (Admissão H2 Liberada)
                           |
                          t2 (Partir COMP-01)
                           v
                    M2 = [0, 0, 1, 0]  (Compressão Ativa)
                      /          \
         t3 (Normal) /            \ t4 (Trip SIS / AT-101)
                    v              v
       M3 = [1, 0, 0, 0]        M4 = [0, 0, 0, 1]  (ESD-100 Ativo)
          (Duplicado)                  |
                                      t5 (Purga N2 e Reset)
                                       v
                                M5 = [1, 0, 0, 0]
                                   (Duplicado)
```

### Diagnóstico de Engenharia (Parte A):
* **1-Limitada (*Safe*):** $R(N, M_0) = \{M_0, M_1, M_2, M_4\}$ é finito; nunca ocorrem duas partidas simultâneas de `COMP-01`.
* **Livre de *Deadlocks*:** Mesmo após um *trip* de segurança ($M_4$), existe retorno controlado ($t_5 \to M_0$).
* **Exclusão Mútua:** É matematicamente impossível ter $M(p_3) = 1$ e $M(p_5) = 1$ ao mesmo tempo.

---

## 5. Parte B: Árvore de Cobertura (Sistema Ilimitado e Símbolo $\omega$)

Ao incluir o banco `TK-AP` ($p_4$) sem acoplar o consumo do dispenser `DISP-01`, cada ciclo $t_1 \to t_2 \to t_3$ deposita um novo lote em $p_4$, gerando estados infinitos:
$$[1,0,0,0,0] \xrightarrow{t_1 t_2 t_3} [1,0,0,1,0] \xrightarrow{t_1 t_2 t_3} [1,0,0,2,0] \to \dots \to \infty$$

Pelo **Algoritmo de Karp-Miller**, quando uma marcação $M'$ domina um ancestral $M$ ($M' \ge M$ e $M' \neq M$), substituímos as coordenadas estritamente maiores por **$\omega$** ($\omega \pm c = \omega$):

* $M_0 = [1, 0, 0, 0, 0]^T \xrightarrow{t_1} M_1 = [0, 1, 0, 0, 0]^T \xrightarrow{t_2} M_2 = [0, 0, 1, 0, 0]^T$
* $M_2 \xrightarrow{t_3} M'_3 = [1, 0, 0, 1, 0]^T$. Como $M'_3 > M_0$ em $p_4$, temos $M_3 = [1, 0, 0, \omega, 0]^T$.
* O surgimento de $\omega$ em `TK-AP` prova formalmente **risco de sobrepressão por acúmulo ilimitado** caso não haja controle de capacidade máxima.

### Síntese de Controle (Lugar Complementar)
Para tornar a planta **$K$-limitada** e eliminar o risco de sobrepressão em `TK-AP`, adiciona-se o lugar complementar $p_6$ (`TKAP_ESPACO_LIVRE`) com $M_0(p_6) = K_{\max} = 2$ lotes, consumido por $t_3$ e devolvido pelo evento de dispensação $t_{\text{disp}}$ (`DISP-01`), garantindo o invariante estrutural:
$$M(p_4) + M(p_6) = K_{\max} = 2$$

---

## 6. Referências Técnicas

1. MURATA, T. **Petri Nets: Properties, Analysis and Applications**. Proceedings of the IEEE, v. 77, n. 4, p. 541–580, 1989.
2. KARP, R. M.; MILLER, R. E. **Parallel Program Schemata**. Journal of Computer and System Sciences, v. 3, n. 2, p. 147–195, 1969.
3. ISO 19880-1. **Gaseous Hydrogen — Fuelling Stations — Part 1: General Requirements**. Geneva: ISO, 2020.
