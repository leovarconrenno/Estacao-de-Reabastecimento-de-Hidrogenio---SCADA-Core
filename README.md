[JOAO PEDRO](mailto:d2022005016@unifei.edu.br) &bull;
[MARCELO CANDELARIA](mailto:d2023010164@unifei.edu.br) &bull;
[LUCA AUGUSTO](mailto:d2024004671@unifei.edu.br) &bull;
[LEO VARGAS](mailto:d2024006120@unifei.edu.br)

# <img src="assets/images/hydrogen.gif" height="32px" />  Estação de Reabastecimento de Hidrogênio <img src="assets/images/hydrogen.gif" height="32px" />

[SITE](https://leovarconrenno.github.io/Estacao-de-Reabastecimento-de-Hidrogenio---SCADA-Core/) &bull;
[SLIDE I](assets/slide/Estacao_H2_SCADA_Core.pdf) &bull;
[SLIDE II](assets/slide/Etapa02_Grafos_SCADA_H2.pdf) &bull;
[SLIDE III](assets/slide/Etapa03_Arvores_SCADA_H2.pdf)

## INTRODUÇÂO

Este projeto consiste no desenvolvimento de um sistema **SCADA** ([Supervisory Control and Data Acquisition](https://en.wikipedia.org/wiki/SCADA)) para supervisão e controle de uma planta industrial. O sistema será responsável por centralizar as informações provenientes dos dispositivos de campo, monitorar as principais variáveis do processo, controlar equipamentos e válvulas e fornecer ao operador uma visão integrada do estado da planta.

Como aplicação para o sistema, foi definida uma estação de reabastecimento de hidrogênio ([H₂](https://pt.wikipedia.org/wiki/Hidrog%C3%A9nio)) destinada ao abastecimento de veículos movidos a célula de combustível. A planta envolve etapas de armazenamento, condicionamento, pressurização e transferência de hidrogênio, além de diferentes equipamentos, sensores e dispositivos voltados à segurança da operação.

O **SCADA** será desenvolvido para simular e supervisionar o ciclo operacional da estação, desde a preparação para o abastecimento até sua finalização. Durante a simulação, o sistema deverá representar o estado dos equipamentos e das principais variáveis do processo, permitindo acompanhar a sequência de operação e a atuação dos dispositivos de controle. O sistema também deverá tratar situações anormais por meio de alarmes, intertravamentos e procedimentos de segurança, reproduzindo no ambiente de supervisão as diferentes condições que podem ocorrer durante a operação da planta.

## ETAPA 03 — ESTRUTURAS EM ÁRVORE NO SCADA-CORE

* 📄 **Apresentação em PDF (Slide III):** [Etapa03_Arvores_SCADA_H2.pdf](assets/slide/Etapa03_Arvores_SCADA_H2.pdf)
* 🎞️ **Apresentação Interativa (Reveal.js):** [Etapa03_Arvores_SCADA_H2.html](https://leovarconrenno.github.io/Estacao-de-Reabastecimento-de-Hidrogenio---SCADA-Core/assets/slide/Etapa03_Arvores_SCADA_H2.html)
* 📡 **Sala Interativa ao Vivo (WebRTC):** [Etapa03_Sala_WebRTC.html](https://leovarconrenno.github.io/Estacao-de-Reabastecimento-de-Hidrogenio---SCADA-Core/assets/slide/Etapa03_Sala_WebRTC.html)

### Tópicos da Etapa 03
1. **Topologia Mínima e Redes Industriais:** Otimização de leitos de tubulação/cabos via **Kruskal e Prim (MST 66 m)** e resiliência Ethernet L2 com **RSTP (IEEE 802.1w)**.
2. **Compressão, Segurança e Historiadores:** Telemetria *lossless* com **Árvore de Huffman (-76,3% de banda)**, intertravamento SIS **BDT O(1)**, indexação temporal **AVL O(log N)** e detecção de anomalias 4D por **KD-Tree**.
3. **Verificação Formal e Controle Reativo:** Prova formal com **Redes de Petri / Karp-Miller ($\omega$)**, planejamento seguro SAE J2601 via **Kinodynamic RRT** e orquestração por **Behavior Trees**.
4. **Diagnóstico Automático e Integração:** Classificação auditável (**ID3, C4.5 e CART**) e simulador integrado **`SCADACoreModulo3`**.

<sub>Last updated by Github Actions on 01 Sep, 2026.</sub>
