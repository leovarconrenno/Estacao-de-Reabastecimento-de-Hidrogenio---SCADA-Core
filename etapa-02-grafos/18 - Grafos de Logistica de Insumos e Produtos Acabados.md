# Aula 18: Grafos de Logística de Insumos, Processo e Produtos Acabados

## 1. Situação-problema

Nas aulas anteriores, focamos exclusivamente na malha de processo (tubulações de gás hidrogênio) e rotas de inspeção de pátio. No entanto, uma Estação de Reabastecimento de Hidrogênio é um empreendimento logístico que interage com o mundo exterior. Precisamos de grafos para mapear como a matéria prima chega e como os veículos de clientes transitam pela infraestrutura.

## 2. Fundamentos Teóricos: Redes Multicamada

Para evitar colisões de modelos (por exemplo, calcular a rota de um carro cliente passando "por dentro" de um tubo de alta pressão), precisamos trabalhar com Redes Multicamada (*Multilayer Networks*), sobrepondo grafos sob a mesma planta física:

| Grafo | Vértices | Arestas | Aplicação no Projeto de H2 |
| --- | --- | --- | --- |
| $G_M$ — Fluxo de Materiais | Eletrolisador, Tanques, Manifolds | Dutos direcionados | Desde a rede de água pura/energia até o dispenser. Este é um Grafo Acíclico Dirigido (DAG). |
| $G_V$ — Circulação de Veículos | Portaria, Baias, Dispenser, Saída | Pistas asfálticas da Estação | O circuito do carro FCEV cliente do posto. |

### 2.1. O Fluxo de Materiais como um DAG
O fluxo $G_M$ vai da concessionária de saneamento (água) até a produção da molécula no Eletrolisador, sendo enviada para compressão. É irreversível no fluxo de produção padrão, configurando um **Grafo Acíclico Dirigido (DAG)**.

### 2.2. O Anel Viário como Circuito Direcionado
O grafo de circulação do cliente ($G_V$) fecha um circuito físico: ele entra no posto e sai do posto passando por barreiras, zonas de pagamento e ilhas de abastecimento.

## 3. Entregável da Aula 18

* **Modelo `GrafoLogistico` em Python:** Solução multicamada isolando de forma computacional as tubulações físicas da infraestrutura rodoviária civil da própria estação de serviço.
