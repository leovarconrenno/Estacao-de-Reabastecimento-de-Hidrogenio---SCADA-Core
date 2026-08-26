1. Formalização Matemática: Domínios e Predicados
Domínios da Rede ($U$)
$S_{100} = \{ \text{PT-101}, \text{PT-102}, \text{PT-103}, \text{TT-101}, \text{TT-102}, \text{TT-103}, \text{AT-101}, \text{AT-102}, \text{AT-103} \}$
  
$S_{200} = \{ \text{TT-201}, \text{PT-201}, \text{M-201}, \text{XV-201} \}$
  
$S_{300} = \{ \text{HS-301}, \text{COM-301}, \text{BV-301}, \text{XV-301}, \text{PT-301}, \text{TT-301}, \text{AT-301} \}$
  
$S_{\text{rede}} = S_{100} \cup S_{200} \cup S_{300}$
  
Definição dos Predicados Críticos
Pressão Excedida ($P_{\text{crit}}(x)$):
$$P_{\text{crit}}(x) \iff \begin{cases} P(x) > 400\text{ bar}, & \text{se } x = \text{PT-101} \\ P(x) > 700\text{ bar}, & \text{se } x = \text{PT-102} \\ P(x) > 1000\text{ bar}, & \text{se } x = \text{PT-103} \end{cases}$$
  
Temperatura Excedida ($T_{\text{crit}}(x)$):
$$T_{\text{crit}}(x) \iff T(x) > 85^\circ\text{C}, \quad \forall x \in \{\text{TT-101}, \text{TT-102}, \text{TT-103}, \text{TT-301}\}$$
  
Vazamento Detectado ($G_{\text{crit}}(x)$):
$$G_{\text{crit}}(x) \iff C(x) > 25\%\text{ LIE}, \quad \forall x \in \{\text{AT-101}, \text{AT-102}, \text{AT-103}, \text{AT-301}\}$$
  
Pré-resfriamento Adequado ($R_{\text{ok}}(x)$):
$$R_{\text{ok}}(\text{TT-201}) \iff T(\text{TT-201}) \leq -40^\circ\text{C}$$
  
2. Expressões Lógicas Quantificadas
2.1 Condição Existencial para Acionamento do SIS e Alarme Geral ($\text{ALM-101}$)
O alarme geral é ativado se existir pelo menos um sensor no Setor 100 em estado crítico de pressão, temperatura ou vazamento, ou se o botão de emergência $\text{ESD-100}$ for pressionado:  
$$\text{TRIP}_{\text{SIS}} \iff \exists x \in S_{100} \big( P_{\text{crit}}(x) \lor T_{\text{crit}}(x) \lor G_{\text{crit}}(x) \big) \lor e_{1,1}$$
  
2.2 Condição Universal para Integridade do Armazenamento
O Setor 100 está seguro se e somente se todos os seus sensores operarem abaixo dos limites de emergência:  
$$\text{Armazenamento}_{\text{OK}} \iff \forall x \in S_{100} \big( \neg P_{\text{crit}}(x) \land \neg T_{\text{crit}}(x) \land \neg G_{\text{crit}}(x) \big)$$
  
2.3 Permissivo de Abastecimento para a Válvula Dispensadora ($\text{XV-301}$)
A dispensação ($v_{3,1}$) só é habilitada se todos os sensores da rede estiverem fora de estado de falha, o pré-resfriador estiver na temperatura correta ($T \leq -40^\circ\text{C}$), a comunicação via protocolo J2799 estiver estabelecida ($c_{3,1}$), a mangueira $\text{BV-301}$ estiver acoplada ($bv_{3,1}$) e o operador pressionar o botão de início ($h_{3,1}$):  
$$\text{Permissivo}_{\text{XV-301}} \iff \Big( \forall x \in S_{100} \big(\neg P_{\text{crit}}(x) \land \neg T_{\text{crit}}(x) \land \neg G_{\text{crit}}(x)\big) \Big) \land R_{\text{ok}}(\text{TT-201}) \land c_{3,1} \land bv_{3,1} \land h_{3,1} \land \neg e_{1,1}$$
