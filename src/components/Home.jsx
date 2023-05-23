import React, { useEffect, useState, useRef } from "react";
import Header from "./Header";
import Menu from "./Menu";
import exames from "../data/exame";
import { formAcido, esclaAcido } from "../documents/index";
import styles from "./Home.module.css";
import garbage from "../assets/garbage.svg";
import loupe from "../assets/loupe.svg";
import pdf from "../assets/pdf.svg";
//import iconEmail from '../assets/email.svg'

import { PDFDownloadLink } from "@react-pdf/renderer";
import ExamsPDF from "../reports/examsPDF";

const Home = () => {
  const inputRef = useRef();
  const [search, setSearch] = useState(""); 
  const [listExam, setListExame] = useState([]); // exames filtrados
  const [boxOptions, setBoxOptions] = useState(false); //on/off modal
  const [examsSelectBox, setExamsSelectBox] = useState([]); //Exames selecionados boxOptions
  const [checkPD, setCheckPD] = useState(false); 
  const [checkSUS, setCheckSUS] = useState(false); 

  const allExames = exames;
  useEffect(() => {
    //filtar valores para mostrar caixa de opcoes
    const examSelect = allExames.filter((exam) => {
      return (
        exam.name.toLowerCase().includes(search.toLocaleLowerCase()) ||
        exam.nick.toLowerCase().includes(search.toLocaleLowerCase())
      );
    });
    setListExame(examSelect);
    if (search.length >= 1) {
      openModalBoxOptions();
    }
  }, [search]);

  function openModalBoxOptions() {
    setBoxOptions(true);
  }
  function closeModalBoxOptions() {
    setBoxOptions(false);
  }

  //fechar o modal ao click externo
  useEffect(() => {
    const handleClickOutbox = (e) => {
      const modal = document.getElementById("boxOptions");
      if (modal && !modal.contains(e.target)) {
        setBoxOptions(false);
        cleanAndFocusField();
      }
    };
    window.addEventListener("click", handleClickOutbox);

    return () => {
      window.removeEventListener("click", handleClickOutbox);
    };
  }, []);

  //Add exame na lista de exames
  function handleClickOnBox(event) {
    const itemFilter = allExames.filter((exam) => {
      return exam.name === event.innerHTML;
    });
    const isDuplicate = examsSelectBox.some(
      (exam) => exam.name === itemFilter[0].name
    );

    if (isDuplicate) {
      window.alert(`Atenção!! o exame ${event.innerHTML} já está na lista`);
    } else {
      setExamsSelectBox(() => [...examsSelectBox, ...itemFilter]);
    }
    closeModalBoxOptions();
    cleanAndFocusField();
  }

  function deleteExamFromList(index) {
    const updateExams = [...examsSelectBox];
    updateExams.splice(index, 1);
    setExamsSelectBox(updateExams);
  }

  function cleanAndFocusField() {
    inputRef.current.focus();
    inputRef.current.value = "";
  }

  return (
    <>
      <Header />
      <Menu />

      <section className={styles.wrapperHome}>
        <div className={styles.titleH1}>
          <h1>Encontre seus exames!</h1>
        </div>

        <div className={styles.searchArea}>
          <div className={styles.wrapperSearch}>
            <input
              type="search"
              name=""
              id=""
              onChange={(e) => setSearch(e.target.value)}
              ref={inputRef}
            />

            <img src={loupe} alt="loupe" className={styles.loupe} />

            {/*Gerar documento dinamico com preparo*/}
            {examsSelectBox.length > 0 ? (
              <PDFDownloadLink
                document={
                  <ExamsPDF
                    allExams={examsSelectBox}
                    status={checkPD}
                    sus={checkSUS}
                  />
                }
                fileName="exameEmPDF"
              >
                {({ loading, error }) =>
                  loading ? (
                    "Carregando exames..."
                  ) : (
                    <button className={styles.btn}>
                      <img src={pdf} alt="pdf-logo" />
                    </button>
                  )
                }
              </PDFDownloadLink>
            ) : (
              ""
            )}
          </div>
        </div>

        {/* Material PD ?*/}
        {examsSelectBox.length > 0 ? (
          <>
            <div className={styles.materialPD}>
              <div>
                <p>Material PD</p>
                <input
                  type="checkbox"
                  name="pd"
                  id=""
                  checked={checkPD}
                  onChange={(e) => setCheckPD(e.target.checked)}
                />
              </div>
              <div>
                <p>Marcação do sus</p>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  checked={checkSUS}
                  onChange={(e) => setCheckSUS(e.target.checked)}
                />
              </div>

              <div>
                {/*<p>Enviar por e-mail</p>
                 <img src={iconEmail}
                      alt="icon-letter"
                      className={styles.iconEmail}
                      onClick={() => handleClickModal()}
                />*/}
              </div>
            </div>
          </>
        ) : (
          ""
        )}

        {/* Modal para enviar por e-mail
        <div className={modal ? styles.modalWrapper :styles.modalWrapperClose}>

          <div className={styles.modalContainer}>
            <div className={styles.titleModal}>
              <h3>Enviar preparo por<br />E-MAIL</h3>
            </div>

            <div className={styles.closeModal}
                 onClick={() => handleClickClosemodal()}>
                  X
            </div>

            <form >
              <div className={styles.formContainer}>
                <label form="email">E-mail</label>
                <input
                  type="email"
                  name="email"
                  id=""
                  placeholder="exemplo@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <label form="file"></label>
                <input type="file"
                       name="file" 
                       value={file}
                       id=""
                       onChange={(e) => setFile(e.target.value)} />

                <button
                  type="submit"
                  value="Enviar"
                  className={styles.btnModal}
                >
                  Enviar{" "}
                </button>
              </div>
            </form>
          </div>
        </div>*/}

        {/*opcoes de exames clicaveis*/}
        {boxOptions ? (
          <div className={styles.examContainer} id="boxOptions">
            <div className={styles.examList}>
              {listExam?.map((exam, index) => (
                <li key={index} onClick={(e) => handleClickOnBox(e.target)}>
                  {exam.name}
                </li>
              ))}
            </div>
          </div>
        ) : (
          ""
        )}

        <div className={styles.separator} />
        <h3 className={styles.titleList}> Lista de exames</h3>

        <div className={styles.containerListExams}>
          {/*Exames selecionados no boxOptions  */}
          {examsSelectBox
            ? examsSelectBox.map((exam, index) => {
                return (
                  <ul key={exam.name} className={styles.resultExames}>
                    <li>
                      {exam.name}

                      <div
                        className={styles.lixo}
                        onClick={() => deleteExamFromList(index)}
                      >
                        <img
                          src={garbage}
                          alt="lixeira"
                          className={styles.iconLixo}
                        />
                      </div>
                    </li>
                  </ul>
                );
              })
            : ""}
        </div>

        {examsSelectBox ? (
          <div className={styles.containerInfoExams}>
            <p>
              {examsSelectBox.some((exam) => exam.jejum >= 8)
                ? `Jejum de 8 a 12 horas para esses exames!`
                : ""}
            </p>
            <p>
              {examsSelectBox.some((exam) => exam.diet != "")
                ? "Atenção! Os exames selecionados possui dieta específica."
                : ""}
            </p>
            <div>
              {examsSelectBox.some((exam) => exam.nick === "acido") ? (
                <ul>
                  <li>Imprima esses formulários</li>
                  <li>
                    <a href={formAcido} target="_blank">
                      Formulário para urina de 24h com ácido
                    </a>
                  </li>
                  <li>
                    <a href={esclaAcido} target="_blank">
                      Instrução para urina de 24h com ácido
                    </a>
                  </li>
                </ul>
              ) : (
                ""
              )}
            </div>
          </div>
        ) : (
          ""
        )}
      </section>
    </>
  );
};

export default Home;
