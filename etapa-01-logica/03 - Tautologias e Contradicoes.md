# Representação Simbólica das Regras de Processo e Intertravamentos[cite: 5]

No contexto do controle lógico de processos da Estação de Reabastecimento de Hidrogênio, a análise de tautologias e contradições garante que as equações booleanas dos intertravamentos (SIS) sejam consistentes e seguras[cite: 5], mitigando falhas sistêmicas e assegurando o atendimento estrito aos parâmetros normativos internacionais de segurança operacional e integridade de plantas industriais automatizadas.

## A. Intertrava de Trip de Emergência do Banco de Armazenamento (Setor 100)[cite: 5]

A válvula de corte rápido do banco de armazenamento ($v_{1,X}$, XV-10X {1-3}) deve ser imediatamente FECHADA ($\neg v_{1,X}$) e o alarme geral acionado ($a_1$) e a respectiva sinalização ($s_{1,X}$ ,SL-10X) caso haja sobrepressão, sobretemperatura, vazamento de gás ou acionamento manual de emergência, operando sob uma filosofia estrita de falha segura (*fail-safe*)[cite: 5].

* **Condição de Falha / Evento Crítico ($F_1$):**[cite: 5]

$$F_{1,X}  \equiv p_{1,X} \lor t_{1,X} \lor g_{1,X} \lor e_1$$

* **Equação Lógica de Intertravamento:**[cite: 5]

$$F_{1,X} \rightarrow (\neg v_{1,X} \land S_{1,x} \land a_1)$$[cite: 5]

$$F_{1,X}  \equiv F_1 $$[cite: 5]

Adicionalmente, a válvula de alívio ($r_1$, PSV-101) atua especificamente em caso de sobrepressão, de forma independente do fechamento de $v_1$, garantindo alívio mecânico autônomo e redundância de proteção contra pressões excessivas nos vasos:[cite: 5]

$$p_{1,x} \rightarrow r_{1,x}$$

* **Exemplo para o tanque 1:**[cite: 5]

$$F_{1,1}  \equiv p_{1,1} \lor t_{1,1} \lor g_{1,1} \lor e_1$$[cite: 5]

$$F_{1,1} \rightarrow (\neg v_{1,1} \land S_{1,1} \land a_1)$$[cite: 5]

$$p_{1,1} \rightarrow r_{1,1}$$[cite: 5]

## B. Abastecimento dos tanques (Setor 100)[cite: 5]

A ordem de abastecimento é tanque 3 $$\rightarrow$$ tanque 2 $$\rightarrow$$ tanque 1, sendo comandado sequencialmente pelos sensores de pressão ($p_{1,X}$ , PT-10X {4-6}) para otimizar o gradiente de transferência de massa na cascata de alta pressão:[cite: 5]

$$\neg p_{1,6} \rightarrow ( v_{1,3} \land \neg v_{1,2} \land \neg v_{1,1})$$[cite: 5]

$$p_{1,6} \land \neg p_{1,5} \rightarrow (\neg v_{1,3} \land v_{1,2} \land \neg v_{1,1})$$[cite: 5]

$$p_{1,6} \land p_{1,5} \land \neg p_{1,4} \rightarrow (\neg v_{1,3} \land \neg v_{1,2} \land v_{1,1})$$[cite: 5]

## C. Loop de Controle do Chiller (Setor 200)[cite: 5]

Enquanto a pressão e a temperatura do fluido refrigerante não atingirem os patamares nominais exigidos para a operação criogênica, o chiller deve se manter acionado de forma contínua até acumular a energia térmica e a pressão adequada no buffer do sistema:[cite: 5]

$$XV_{3,1} \rightarrow (p_{2,1} \land t_{2,1})$$[cite: 5]

### D. Permissivo de Abertura do Dispensador / Início de Abastecimento (Setor 300)[cite: 5]

A válvula de dispensação ($v_{3,1}$, XV-301) só pode abrir se: o operador tiver acionado o comando de início ($h_{3,1}$), a comunicação com o veículo estiver estabelecida ($c_{3,1}$), o acoplamento breakaway estiver íntegro ($bv_{3,1}$), o condicionamento do gás estiver adequado (pré-resfriamento $t_{3,1}$, pressão de buffer $p_{3,1}$ e chiller operacional $m_{2,1}$), e não houver vazamento de H₂ em nenhuma das duas zonas de detecção ($g_{1,X}$, $g_{3,1}$) nem parada de emergência ativa ($e_1$).[cite: 5]

* **Condição de Permissivo de Abertura ($P_{disp}$):**[cite: 5]

$$P_{disp} \equiv h_{3,1} \land c_{3,1} \land bv_{3,1} \land \lnot t_{3,1} \land p_{3,1} \land m_{2,1} \land \lnot g_{1,X} \land \lnot g_{3,1} \land \lnot e_1$$[cite: 5]

* **Regra Operacional:**[cite: 5]

$$P_{disp} \rightarrow v_{3,1}$$[cite: 5]

## E. Trip de Abastecimento — Fechamento Imediato do Dispensador (Setor 300)[cite: 5]

A válvula de dispensação ($v_3$) deve ser imediatamente fechada ($\neg v_3$) se a temperatura no ponto de recepção do veículo exceder o limite seguro, se houver vazamento de H₂ detectado na área do dispensador, se o *breakaway* se desconectar mecanicamente, ou se a parada de emergência for acionada pelo operador.[cite: 5]

* **Condição de Falha de Abastecimento ($F_3$):**[cite: 5]

$$F_3 \equiv t_{3,1} \lor g_{3,1} \lor \neg bv_{3,1} \lor e_1$$[cite: 5]

* **Regra de Bloqueio:**[cite: 5]

$$F_3 \rightarrow \neg v_{3,1}$$[cite: 5]

---

# Validação Formal por Prova Lógica (Tautologia de Segurança)[cite: 5]

## Prova 1 — Segurança do Banco de Armazenamento[cite: 5]

Para demonstrar ao motor do SCADA-Core que a planta nunca entrará em estado de risco de explosão por sobrepressão mantendo a válvula de saída do armazenamento aberta, constrói-se a prova formal do teorema de segurança matemática.[cite: 5]

* **Afirmação de Segurança:** "Não é possível ter sobrepressão no armazenamento ($p_{1,X}$) E manter a válvula de saída $v_{1,X}$ aberta simultaneamente."[cite: 5]
* **Proposição do Estado de Risco ($S_{risco,1}$):**[cite: 5]

$$S_{risco,1} \equiv p_{1,X} \land v_{1,X}$$[cite: 5]

Da regra de intertravamento A, sabe-se que $F_{1,X} \rightarrow (\neg v_{1,X} \land a_{1,1})$, e que $p_{1,X} \rightarrow F_{1,X}$ (pois $p_{1,X}$ é um dos disjuntos de $F_{1,X}$). Por silogismo hipotético, obtém-se a regra derivada implementada no controlador lógico:[cite: 5]

$$p_{1,X} \rightarrow \neg v_{1,X}$$[cite: 5]

Aplica-se a equivalência lógica do condicional material ($\mathbf{A} \rightarrow \mathbf{B} \equiv \neg \mathbf{A} \lor \mathbf{B}$):[cite: 5]

$$p_{1,X} \rightarrow \neg v_{1,X} \equiv \neg p_{1,X} \lor \neg v_{1,X}$$[cite: 5]

Substituindo o estado de risco sob a premissa de que a regra $p_{1,X} \rightarrow \neg v_{1,X}$ é estritamente VERDADEIRA (restringindo formalmente o espaço de estados viáveis):[cite: 5]

$$S_{risco,1} \land (\neg p_{1,X} \lor \neg v_{1,X})$$[cite: 5]

$$(p_{1,X} \land v_{1,X}) \land (\neg p_{1,X} \lor \neg v_{1,X})$$[cite: 5]

Distribuindo a conjunção $(p_{1,X} \land v_{1,X})$ sobre os termos da disjunção:[cite: 5]

$$\big((p_{1,X} \land v_{1,X}) \land \neg p_{1,X}\big) \lor \big((p_{1,X} \land v_{1,X}) \land \neg v_{1,X}\big)$$[cite: 5]

$$(Falso \land v_{1,X}) \lor (p_{1,X} \land Falso)$$[cite: 5]

$$Falso \lor Falso \equiv \text{FALSO}$$[cite: 5]

O estado de risco $S_{risco,1}$ é, portanto, uma **contradição lógica** sob a regra de intertravamento vigente — demonstrando formalmente que o controlador nunca permitirá que esse arranjo de estados perigosos seja alcançado em campo.[cite: 5]

*(Exemplo aplicado ao tanque 1: substituindo $X \to 1$, obtém-se $S_{risco,1,1} \equiv p_{1,1} \land v_{1,1}$, configurando igualmente uma contradição matemática, validada pela mesma dedução analítica).*[cite: 5]

## Prova 2 — Segurança do Dispensador[cite: 5]

Analogamente, demonstra-se por meio de dedução proposicional rigorosa que a planta nunca executará o processo de abastecimento de um veículo na presença de vazamento de gás hidrogênio detectado na área de dispensação.[cite: 5]

* **Afirmação de Segurança:** "Não é possível ter vazamento de H₂ ativo no dispensador ($g_{3,1}$) E manter a válvula de dispensação $v_{3,1}$ aberta."[cite: 5]
* **Proposição do Estado de Risco ($S_{risco,3}$):**[cite: 5]

$$S_{risco,3} \equiv g_{3,1} \land v_{3,1}$$[cite: 5]

Da regra de intertravamento E, sabe-se que $F_3 \rightarrow \neg v_{3,1}$, e que $g_{3,1} \rightarrow F_3$ (visto que $g_{3,1}$ é um dos componentes disjuntos da condição de falha $F_3$). Por silogismo hipotético aplicado:[cite: 5]

$$g_{3,1} \rightarrow \neg v_{3,1} \equiv \neg g_{3,1} \lor \neg v_{3,1}$$[cite: 5]

Substituindo o estado de risco na fórmula analítica de validação:[cite: 5]

$$S_{risco,3} \land (\neg g_{3,1} \lor \neg v_{3,1})$$[cite: 5]

$$(g_{3,1} \land v_{3,1}) \land (\neg g_{3,1} \lor \neg v_{3,1})$$[cite: 5]

Aplicando a propriedade distributiva sobre a conjunção:[cite: 5]

$$\big((g_{3,1} \land v_{3,1}) \land \neg g_{3,1}\big) \lor \big((g_{3,1} \land v_{3,1}) \land \neg v_{3,1}\big)$$[cite: 5]

$$(Falso \land v_{3,1}) \lor (g_{3,1} \land Falso)$$[cite: 5]

$$Falso \lor Falso \equiv \text{FALSO}$$[cite: 5]

O estado de risco $S_{risco,3}$ é de igual modo uma **contradição** formal: comprova-se analiticamente que o SCADA-Core possui garantias lógicas inegociáveis que impedem o suprimento de combustível sob condições de vazamento detectado.[cite: 5]
