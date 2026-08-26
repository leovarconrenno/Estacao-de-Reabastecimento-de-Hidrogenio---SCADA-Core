# 06 - Quantificadores e Predicados em Redes de Sensores

---

## 1. Definição de Domínios e Predicados

### Domínios da Rede ($U$)
* **Setor 100 (Armazenamento):** $S_{100} = \{\text{PT-101}, \text{PT-102}, \text{PT-103}, \text{PT-104}, \text{PT-105}, \text{PT-106}, \text{TT-101}, \text{TT-102}, \text{TT-103}, \text{AT-101}, \text{AT-102}, \text{AT-103}\}$
* **Setor 200 (Condicionamento):** $S_{200} = \{\text{TT-201}, \text{PT-201}, \text{M-201}, \text{XV-201}\}$
* **Setor 300 (Dispensação):** $S_{300} = \{\text{HS-301}, \text{COM-301}, \text{BV-301}, \text{XV-301}, \text{PT-301}, \text{TT-301}, \text{AT-301}\}$

### Predicados Lógicos de Processo

* **Pressão Crítica de Alarme ($P_{\text{crit}}(x)$):**
  $$P_{\text{crit}}(x) \iff \begin{cases} P(x) > 400\text{ bar}, & x = \text{PT-101} \\ P(x) > 700\text{ bar}, & x = \text{PT-102} \\ P(x) > 1000\text{ bar}, & x = \text{PT-103} \end{cases}$$

* **Temperatura Crítica ($T_{\text{crit}}(x)$):**
  $$T_{\text{crit}}(x) \iff T(x) > 85^\circ\text{C}, \quad \forall x \in \{\text{TT-101}, \text{TT-102}, \text{TT-103}, \text{TT-301}\}$$

* **Vazamento de Hidrogênio ($G_{\text{crit}}(x)$):**
  $$G_{\text{crit}}(x) \iff C(x) > 25\%\text{ LIE}, \quad \forall x \in \{\text{AT-101}, \text{AT-102}, \text{AT-103}, \text{AT-301}\}$$

* **Pré-resfriamento Adequado ($R_{\text{ok}}(x)$):**
  $$R_{\text{ok}}(\text{TT-201}) \iff T(\text{TT-201}) \leq -40^\circ\text{C}$$

---

## 2. Expressões Lógicas Quantificadas

### 2.1 Condição Existencial para Trip de Emergência ($\text{TRIP}_{\text{SIS}}$)
O alarme geral ($\text{ALM-101}$) e o shutdown do SIS são ativados se **existir pelo menos um** sensor no Setor 100 em estado crítico de pressão, temperatura ou gás, ou se a parada de emergência manual ($\text{ESD-100}$) for acionada:

$$\text{TRIP}_{\text{SIS}} \iff \exists x \in S_{100} \big( P_{\text{crit}}(x) \lor T_{\text{crit}}(x) \lor G_{\text{crit}}(x) \big) \lor e_{1,1}$$

### 2.2 Condição Universal de Integridade
O banco de cilindros do Setor 100 opera com segurança se e somente se **todos** os instrumentos do setor estiverem dentro da faixa segura:

$$\text{Armazenamento}_{\text{OK}} \iff \forall x \in S_{100} \big( \neg P_{\text{crit}}(x) \land \neg T_{\text{crit}}(x) \land \neg G_{\text{crit}}(x) \big)$$

### 2.3 Permissivo de Abastecimento ($\text{XV-301}$)
A abertura da válvula dispensadora $\text{XV-301}$ ($v_{3,1}$) exige integridade universal do Setor 100, pré-resfriador com $T \leq -40^\circ\text{C}$, motor $M_{201}$ operando, comunicação $COM_{301}$ ativa, trava de ruptura $BV_{301}$ conectada e comando do operador em $HS_{301}$:

$$\text{Permissivo}_{\text{XV-301}} \iff \Big( \forall x \in S_{100} \big(\neg P_{\text{crit}}(x) \land \neg T_{\text{crit}}(x) \land \neg G_{\text{crit}}(x)\big) \Big) \land R_{\text{ok}}(\text{TT-201}) \land m_{2,1} \land c_{3,1} \land bv_{3,1} \land h_{3,1} \land \neg e_{1,1}$$
