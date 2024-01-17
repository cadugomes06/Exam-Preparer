import { useState } from "react";
import styles from "./InfoExams.module.css";
import Header from "../components/Header";
import Menu from "../components/Menu";

export const InfoExams = () => {
  const [sectionON, setSectionOn] = useState(0);

  const infoExamsTypes = [
    "CRN",
    "Igesp",
    "Curvas",
    "Culturas",
    "Hepatites",
    "Função Reumática",
    "Cinética de Ferro",
  ];

  function setIndiceOfExame(index) {
    setSectionOn(index);
  }

  return (
    <section>
      <Header />
      <Menu />

      <div className={styles.wrapper}>
        <div className={styles.termosContainer}>
          <div className={styles.titleTermos}>
            <h1>Informações de Exames</h1>
          </div>

          <div className={styles.sectionInfoExam}>
            <div className={styles.examSelector}>
              <ul>
                {infoExamsTypes.map((title, index) => (
                  <li
                    key={title}
                    onClick={() => setIndiceOfExame(index)}
                    className={sectionON === index ? styles.btnAtivo : ""}
                  >
                    {title}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.sectionInfo}>

              <div
                name="infoExam"
                className={sectionON === 0 ? styles.ativo : ""}
              >
                <h4>Unimed</h4>
                <li>Apenas com pedido Transcrito!</li>
                <br />

                <h4>Petrobrás</h4>
                <li>Com o pedido médico. </li>
              </div>

              <div
                name="infoExam"
                className={sectionON === 1 ? styles.ativo : ""}
              >
                <h4>Igesp ( ige multiplos )</h4>

                <li>
                  <strong>EX2 </strong> <br />- Pelos de animais
                </li>
                <li>
                  <strong>EX1</strong>
                  <br /> - Epitélios de animais (caspa de gato, cavalo, vaca e
                  cão)
                </li>
                <li>
                  <strong>EX72</strong>
                  <br /> - Penas
                </li>
                <li>
                  <strong>MX2</strong>
                  <br /> - Fungos (penicilium, chrysogenum, notaum, aspegilos,
                  fungos do ar)
                </li>
                <li>
                  <strong>MX1</strong>
                  <br /> - Bolo e mofo
                </li>
                <li>
                  <strong>FX5</strong>
                  <br /> - Alimentos infantis (clara de ovo, leite, bacalhau,
                  trigo, amendoim, soja)
                </li>
                <li>
                  <strong>FX3</strong>
                  <br /> - Cereais (aveia, milho, gergelim, 2 tipos de trigo)
                </li>
                <li>
                  <strong>FX2</strong>
                  <br /> - Frutos do mar (marisco, peixe, bacalhau, camarão,
                  mexilhão, atum, salmão)
                </li>
                <li>
                  <strong>FX1</strong>
                  <br /> - Sementes oleaginosas (amendoim, avelã, castanha do
                  pará ou Brasil, pós do Brasil, amêndoas, coco)
                </li>
                <li>
                  <strong>GX2</strong>
                  <br /> - Polém gramíneas (cynodon dactylon, lolium perene,
                  phleum pratense, poa pratensis, sorghum halepense, paspalum
                  notatum)
                </li>
                <li>
                  <strong>GX1</strong> <br /> - Polém gramíneas: dactylis
                  glomeratal (capim dos pomares), festuca elatior, lolim perene
                  (capim inglês, grama centeio), phleum pratense (capim rabo de
                  gato), poa pratensis (capim juno, capim prado)
                </li>
                <li>
                  <strong>HX2</strong>
                  <br /> - Poeira ( poeira domiciliar )
                </li>
                <li>
                  <strong>Proteinas do leite</strong>
                  <br /> - Caseína, beta lactoglobulina, alpha lactoalbumina
                </li>
                <li>
                  <strong>C279</strong>
                  <br /> - Corante amarelo ou tartrazina
                </li>
                <li>
                  <strong>F340</strong> <br /> - Corante vermelho ou cochonilha
                </li>
                <li>
                  <strong>C312</strong>
                  <br /> - Lactose
                </li>
              </div>

              <div
                name="infoExam"
                className={sectionON === 2 ? styles.ativo : ""}
              >
                <h4>Curva glicêmica e insulínica</h4>

                <h5> Teste de tolerância a glicose ou TOTG </h5>
                <li>
                  {" "}
                  <strong>GLI </strong> + <strong>GLI50</strong> - (para
                  gestantes sem especificação médica)
                </li>
                <li>
                  {" "}
                  <strong>GLI </strong> + <strong>GLI75</strong> - (não
                  gestantes)
                </li>
                <li>
                  <strong>SUS</strong> - Cadastrar como <strong>G2</strong>{" "}
                </li>

                <h5> Teste de tolerância a glicose + 60 e 120min</h5>
                <li>
                  <strong>G3 </strong> - (Colocar na caixa de seleção os
                  horários de coleta solicitados pelo médico)
                </li>

                <h5>
                  {" "}
                  Curva 4 amostras | jejum, 30, 60, 120min | jejum, 60, 120,
                  180min
                </h5>
                <li>
                  <strong>G4</strong> - (Colocar na caixa de seleção os horários
                  de coleta solicitados pelo médico){" "}
                </li>

                <h5> Curva glicêmica </h5>
                <li>
                  <strong>G5 </strong> - (Colocar na caixa de seleção os
                  horários de coleta solicitados pelo médico)
                </li>
                <li>
                  <strong>Obs:</strong> Se não tiver especificado, cadastrar
                  como <strong>clássica nova.</strong>
                </li>
                <br />

                <h5> Curva Insulínica</h5>
                <li>
                  <strong>INSU5</strong> - ( Se a coleta for jejum, 30, 60, 120,
                  180min)
                </li>
                <li>
                  <strong>INS5</strong> - ( Se a coleta for jejum, 30, 60,
                  120min)
                </li>
                <li>
                  <strong>INS4</strong> - Curva insulínica com 4 amostras.
                </li>
                 <li>
                  <strong>INS3</strong> - Curva insulínica com 3 amostras.
                </li>
                <li>
                  <strong>INSU3</strong> - Pós dextrosol de insulina.
                </li>
                <li>
                  <strong>INSU2</strong> - Pós prandial.
                </li>
              </div>

              <div
                name="infoExam"
                className={sectionON === 3 ? styles.ativo : ""}
              >
                <h4>Exames com cultura</h4>

                <h5>Observação: Toda cultura tem TSA (antibiograma)</h5>
                <li>
                  <strong>CULFZ</strong>
                  <br /> - Fezes
                </li>
                <li>
                  <strong>CULUR</strong>
                  <br /> - Urina
                </li>
                <li>
                  <strong>CULMB</strong>
                  <br /> - Material biológico (secreção)
                </li>
                <li>
                  <strong>CULMS</strong>
                  <br /> - Material biológico (raspado)
                </li>
                <li>
                  <strong>CSSB</strong>
                  <br /> - Streptococcus agalactiae ou GBS (para gestante)
                </li>
                <li>
                  <strong>PESQF</strong>
                  <br /> - Exame micológico direto
                </li>
              </div>

              <div
                name="infoExam"
                className={sectionON === 4 ? styles.ativo : ""}
              >
                <h4>Exames de Hepatite </h4>
                <h5>Hepatite A:</h5>
                <li>
                  <strong>AHAVG</strong>
                </li>
                <li>
                  <strong>AHAVM</strong>
                </li>
                <h5>Hepatite B:</h5>
                <li>
                  <strong>HBS</strong>
                </li>
                <li>
                  <strong>AHBS</strong>
                </li>
                <li>
                  <strong>HBE</strong>
                </li>
                <li>
                  <strong>AHBE</strong>
                </li>
                <li>
                  <strong>AHBCG</strong>
                </li>
                <li>
                  <strong>AHBCM</strong>
                </li>
                <h5>Hepatite C:</h5>
                <li>
                  <strong>AHCV</strong>
                </li>
              </div>

              <div
                name="infoExam"
                className={sectionON === 5 ? styles.ativo : ""}
              >
                <h4>Função reumática</h4>
                <li>
                  <strong>PTCR</strong>
                </li>
                <li>
                  <strong>ASLO</strong>
                </li>
                <li>
                  <strong>A1GA</strong>
                </li>
                <li>
                  <strong>WR</strong>
                </li>
                <li>
                  <strong>FTR</strong>
                </li>
              </div>

              <div
                name="infoExam"
                className={sectionON === 6 ? styles.ativo : ""}
              >
                <h4>Cinética de Ferro</h4>
                <li><strong>FE</strong><br /> - Ferro</li>
                <li><strong>TRA</strong><br /> - Transferrina</li>
                <li><strong>CFF</strong><br /> - Saturação de transferrina</li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
