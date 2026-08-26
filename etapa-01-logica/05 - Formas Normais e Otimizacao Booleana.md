# Aula 05: Formas Normais (FND/FNC) e Otimização Booleana

## 1. Fundamentos Matemáticos: Formas Canônicas e Minimização

Na álgebra proposicional de Boole-Shannon, qualquer função booleana $f(x_1, x_2, \dots, x_n)$ de $n$ variáveis de processo pode ser representada em duas formas canônicas padronizadas:

1. **Forma Normal Disjuntiva (FND / Soma de Produtos — SOP):**
   - Expressa como a **disjunção ($\lor$) de mintermos** (conjunções contendo todas as $n$ variáveis na forma direta ou negada).
   - $$f = \bigvee_{m \in \text{Mintermos}} m$$
   - Representa o mapeamento exaustivo de todos os estados de entrada em que a saída do sistema de controle é **Verdadeira ($1$)** (permissivo liberado ou trip ativado).

2. **Forma Normal Conjuntiva (FNC / Produto de Somas — POS):**
   - Expressa como a **conjunção ($\land$) de maxtermos** (disjunções contendo todas as $n$ variáveis na forma direta ou negada).
   - $$f = \bigwedge_{M \in \text{Maxtermos}} M$$
   - Representa o isolamento de todas as combinações de falha em que a saída é **Falsa ($0$)**.

3. **Minimização Booleana por Adjacência Lógica (Algoritmo de Quine-McCluskey):**
   - Utiliza a propriedade fundamental de redução por adjacência lógica:
     $$(A \land B) \lor (A \land \neg B) \equiv A \land (B \lor \neg B) \equiv A \land \mathbf{T} \equiv A$$
   - O algoritmo identifica pares de termos que diferem por exatamente $1\text{ bit}$ (distância de Hamming = 1), combina-os eliminando a variável redundante (substituída pelo caractere *don't care* `-`) e extrai os **implicantes primos**. Em seguida, seleciona a **cobertura mínima essencial** de mintermos.

---

## 2. Aplicação em Engenharia: Otimização do Tempo de Scan no SCADA e CLP

Em sistemas de automação industrial (CLPs de alta disponibilidade e motores SCADA operando sob as normas **IEC 61131-3** e **IEC 61511**), a avaliação de expressões lógicas ocorre continuamente a cada ciclo de varredura (*scan rate* de $10\text{ ms}$ a $100\text{ ms}$).

Expressões canônicas não otimizadas aumentam o número de operações lógicas em CPU e a latência de resposta a falhas críticas. A minimização booleana garante a menor complexidade computacional com equivalência lógica rigorosa.

```mermaid
graph LR
    TruthTable["Tabela-Verdade de Segurança (2^n estados)"] --> Extração["Extração de Mintermos (Saída=1) e Maxtermos (Saída=0)"]
    Extração --> QM["Algoritmo Quine-McCluskey (Adjacência Lógica: A·B + A·¬B = A)"]
    QM --> Cobertura["Seleção de Implicantes Primos Essenciais & Cobertura Mínima"]
    Cobertura --> FND_FNC["Geração de FND e FNC Minimizadas"]
    FND_FNC --> Validação["Validação Exaustiva de Equivalência Lógica (100% Match)"]
    Validação --> SCADA["Execução Otimizada no Scan do SCADA / CLP"]
```

---

## 3. Aplicações Práticas na Estação de Reabastecimento de Hidrogênio

No notebook [`05 - Formas Normais e Otimizacao Booleana.ipynb`](./05%20-%20Formas%20Normais%20e%20Otimizacao%20Booleana.ipynb), a classe `OtimizadorBooleano` foi desenvolvida e applied às equações lógicas do projeto SCADA-Core.

### 3.1. Validação do Otimizador em Exemplo de 3 Variáveis

Antes de processar equações complexas, o otimizador foi validado na função de permissivo simplificado $f(p_1, t_1, m_1) = \neg p_1 \land \neg t_1 \land m_1$:

* **FND Canônica:** $(\neg p_1 \land \neg t_1 \land m_1)$ (1 mintermo).
* **FNC Canônica:** Conjunção dos 7 maxtermos complementarmente falsos.
* **FND Minimizada:** $(\neg p_1 \land \neg t_1 \land m_1)$ (já mínima por ter apenas 1 mintermo).
* **FNC Minimizada:** $(\neg p_1) \land (\neg t_1) \land (m_1)$ (redução de 7 maxtermos trinomiais para 3 cláusulas monomiais).

### 3.2. Aplicação 1: Trip do Banco de Armazenamento ($F_{1,X}$, Setor 100)

O trip do banco de armazenamento de H₂ é definido por uma disjunção pura de 4 variáveis de falha:
$$F_{1,X} \equiv p_{1,X} \lor t_{1,X} \lor g_{1,X} \lor e_{1,1}$$

* **Espaço de Estados:** $2^4 = 16$ combinações ($15\text{ mintermos}$ e $1\text{ maxtermo}$).
* **FND Canônica:** Expressão composta por 15 mintermos quadrinomialmente completos.
* **FND Minimizada:**
  $$(t_{1,X}) \lor (e_{1,1}) \lor (p_{1,X}) \lor (g_{1,X})$$
  *Resultado:* O algoritmo de Quine-McCluskey elimina com sucesso todas as variáveis redundantes dos 15 mintermos, reconduzindo a FND exatamente à disjunção pura de 4 literais originais (comprovando que não há termos superfluos).
* **FNC Minimizada:**
  $$(p_{1,X} \lor t_{1,X} \lor g_{1,X} \lor e_{1,1})$$
  (Cláusula única coincidente com a FNC canônica do único maxtermo).

### 3.3. Aplicação 2: Permissivo do Dispensador ($P_{disp}$, Setor 300)

O permissivo de abertura do dispensador de hidrogênio (Setor 300) combina 9 variáveis operacionais e de segurança:
$$P_{disp} \equiv h_{3,1} \land c_{3,1} \land bv_{3,1} \land \neg t_{3,1} \land p_{3,1} \land m_{2,1} \land \neg g_{1,X} \land \neg g_{3,1} \land \neg e_{1,1}$$

* **Espaço de Estados:** $2^9 = 512$ combinações ($1\text{ mintermo}$ e $511\text{ maxtermos}$).
* **FND Minimizada:**
  $$(h_{3,1} \land c_{3,1} \land bv_{3,1} \land \neg t_{3,1} \land p_{3,1} \land m_{2,1} \land \neg g_{1,X} \land \neg g_{3,1} \land \neg e_{1,1})$$
  *(Múltiplo de 9 literais — já é mínima em FND).*
* **FNC Minimizada:**
  Redução de **511 maxtermos canônicos** para apenas **9 cláusulas disjuntivas** simplificadas:
  $$(\neg h_{3,1}) \lor (\neg c_{3,1}) \lor (\neg bv_{3,1}) \lor (t_{3,1}) \lor (\neg p_{3,1}) \lor (\neg m_{2,1}) \lor (g_{1,X}) \lor (g_{3,1}) \lor (e_{1,1})$$
  demais combinações agrupadas via leis De Morgan sobre o produto complementar.

---

## 4. Validação Formal de Equivalência Lógica

Para cada equação minimizada, a classe `OtimizadorBooleano` executa a reavaliação exaustiva de todas as $2^n$ valorações de entrada:

```python
equivalente = all(
    OtimizadorBooleano.avaliar_fnd_minimizada(sel_fnd, variaveis, env) == funcao_original(env)
    for env in todos_os_estados
)
# Resultado: True (100% de equivalência lógica confirmada)
```

Essa verificação garante que nenhuma condição de segurança foi alterada, suprimida ou indevidamente combinada durante o processo de otimização booleana.

---

## 5. Entregável da Aula 05 (Notebook Python)

O arquivo [`05 - Formas Normais e Otimizacao Booleana.ipynb`](./05%20-%20Formas%20Normais%20e%20Otimizacao%20Booleana.ipynb) disponibiliza:

1. **Classe `OtimizadorBooleano`:**
   - `extrair_mintermos_maxtermos()`: Varredura de funções e tabelas-verdade.
   - `formatar_fnd_canonico()` e `formatar_fnc_canonico()`: Geração de formas canônicas completas.
   - `minimizar_fnd()` e `minimizar_fnc()`: Otimização por Quine-McCluskey (combinação por adjacência lógica + cobertura mínima).
   - `avaliar_fnd_minimizada()`: Motor de testes de equivalência lógica.
2. **Casos de Teste Industriais:**
   - Validação com exemplo de 3 variáveis.
   - Otimização do Trip $F_{1,X}$ (Setor 100, 4 variáveis).
   - Otimização do Permissivo $P_{disp}$ (Setor 300, 9 variáveis, 512 estados).
