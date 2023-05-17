import React, { useEffect, useState, useRef } from "react";
import Header from "./Header";
import exames from "../data/exame";
import styles from "./Home.module.css";
import garbage from "../assets/garbage.svg";
import loupe from "../assets/loupe.svg";
import pdf from "../assets/pdf.svg";
import { PDFDownloadLink } from "@react-pdf/renderer";
import ExamsPDF from "../reports/examsPDF";

const Home = () => {
  const inputRef = useRef();
  const [search, setSearch] = useState(""); //input value
  const [listExam, setListExame] = useState([]); // exames filtrados
  const [boxOptions, setBoxOptions] = useState(false); //on/off modal
  const [examsSelectBox, setExamsSelectBox] = useState([]); //Array de exames selecionados do boxOptions

  const allExames = exames;

  useEffect(() => {
    const examSelect = allExames.filter((exam) => {
      return (
        exam.name.toLowerCase().includes(search) ||
        exam.nick.toLowerCase().includes(search)
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

      <section className={styles.wrapperHome}>
        <div className={styles.titleH1}>
          <h1>
            Encontre seus exames!
            </h1>
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

            <img src={loupe} 
                 alt="loupe"
                 className={styles.loupe} 
             />


            {/*Gerar documento dinamico com preparo*/}    
            {examsSelectBox.length > 0 ? 
                  <PDFDownloadLink document={<ExamsPDF allExams={examsSelectBox} />}
                  fileName="examsEmPDF">
                    {({loading, error}) => (loading ? 
                                      'Carregando exames...'  : 
                           <button className={styles.btn}>
                               <img src={pdf} alt="pdf-logo" />
                           </button> )}           
                  </PDFDownloadLink>
                            : ''
              }      
          </div>
        </div>

        {/*opcoes de exames clicaveis*/}
        {boxOptions ? (
          <div className={styles.examContainer}>
            <div className={styles.examList} >
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
          </div>
        ) : (
          ""
        )}
      </section>
    </>
  );
};

export default Home;
