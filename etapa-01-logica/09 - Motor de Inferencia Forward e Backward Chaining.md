# Aula 09: Motores de Inferência — Encadeamento para Frente e para Trás

## 1. Fundamentos Matemáticos: Algoritmos de Inferência em Lógica de Produção

Um **Motor de Inferência (Inference Engine)** é o algoritmo formal responsável por aplicar as regras da base de conhecimento ($\mathcal{R}$) sobre os fatos ativos ($\mathcal{F}$) para produzir novas deduções ou provar hipóteses.

### 1.1. Encadeamento para Frente (*Forward Chaining* — Data-Driven)
* **Princípio:** Inicia com os **fatos conhecidos** (telemetria em tempo real) e dispara todas as regras cujos antecedentes são verdadeiros (*Modus Ponens* sucessivo), adicionando os consequentes à base de fatos até alcançar um ponto fixo (*Fixed Point*).

### 1.2. Encadeamento para Trás (*Backward Chaining* — Goal-Driven)
* **Princípio:** Inicia com uma **hipótese/meta** (ex: "Houve explosão iminente?") e busca recursivamente quais regras poderiam provar essa meta.

---

## 2. Entregável da Aula 09

* **Motor Híbrido de Inferência em Python:** Implementação orientada a objetos dos algoritmos *Forward Chaining* e *Backward Chaining* com rastreamento completo da árvore de inferência (*Audit Trail*).

---

## 3. Estrutura do Notebook

O notebook reaproveita as 14 regras de diagnóstico da Estação de Reabastecimento de Hidrogênio já definidas na Aula 08, agora reescritas em um formato de produção simplificado ($SE\ antecedentes \Rightarrow ENTÃO\ consequente$), e as encapsula em um motor de inferência único capaz de operar nos dois sentidos.

A modelagem se apoia em três classes. `RegraProducao` é um *dataclass* que representa uma regra individual, guardando o conjunto de antecedentes, o fato consequente, uma descrição textual do diagnóstico associado e uma prioridade numérica usada para desempate entre regras concorrentes. `BaseConhecimento` mantém a lista de regras e expõe o método `regras_que_concluem(meta)`, que filtra quais regras têm determinado fato como consequente — peça central do encadeamento para trás. `MotorInferencia` recebe uma base de conhecimento e implementa os dois algoritmos de inferência propriamente ditos.

O método `forward_chaining` parte de um conjunto de fatos iniciais e itera em ciclos: a cada passo, ordena as regras candidatas por prioridade decrescente e dispara a primeira cuja base de antecedentes seja subconjunto dos fatos já conhecidos e cujo consequente ainda não tenha sido inferido, registrando o disparo no histórico de auditoria. O laço se repete até que nenhum novo fato seja adicionado em uma iteração completa — o ponto fixo do Princípio 1.1 —, retornando tanto o conjunto final de fatos quanto a trilha de disparos.

O método `backward_chaining` implementa a busca recursiva descrita no Princípio 1.2. Para uma meta dada, o caso base é a meta já pertencer ao conjunto de fatos conhecidos (confirmação direta de campo); caso contrário, o algoritmo busca as regras que concluem essa meta e tenta provar recursivamente cada um de seus antecedentes, com proteção explícita contra ciclos por meio de um conjunto de metas já visitadas na cadeia corrente. A meta é dada como provada assim que uma regra tiver todos os seus antecedentes provados; caso nenhuma regra candidata seja bem-sucedida, ou não exista regra alguma que a conclua, a meta é reportada como não provada. Cada chamada devolve um booleano de prova e a trilha de auditoria correspondente, com nível de profundidade, regra aplicada e resultado (fato conhecido, provado, não provado ou ciclo detectado).

## 4. Demonstrações e Resultados

O notebook valida o motor com três cenários sobre a mesma base de 14 regras. No primeiro, o *forward chaining* recebe os fatos de campo `p1_3` (sobrepressão no Tanque de Alta Pressão) e `v1_3` (válvula aberta) e encadeia corretamente até `TRIP_TANQUE_ALTA`, confirmado por asserções sobre o conjunto final de fatos. No segundo, o *backward chaining* investiga a meta `TRIP_TANQUE_MEDIA` a partir dos fatos `p1_2` e `v1_2`, provando-a com sucesso ao percorrer a cadeia `SOBREPRESSAO_TANQUE_MEDIA → TRIP_TANQUE_MEDIA`. No terceiro, a mesma busca é aplicada à meta `FUGA_H2_TANQUE_ALTA` sem que o fato de vazamento (`g1_3`) esteja presente no campo, e o motor corretamente reporta a meta como não provada, evidenciando a diferença entre ausência de evidência e violação de regra.

Uma função auxiliar, `formatar_tabela`, converte cada trilha de auditoria (lista de dicionários) em uma tabela ASCII, usada para exibir de forma legível tanto o histórico de disparos do *forward chaining* quanto a árvore de decisão do *backward chaining* diretamente na saída do notebook.

.
