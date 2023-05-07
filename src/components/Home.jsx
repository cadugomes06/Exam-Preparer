import React, { useEffect, useState, useRef } from "react";
import Header from "./Header";
import exames from "../data/exame";
import styles from "./Home.module.css";
import garbage from "../assets/garbage.svg";
import examsPDF from "../reports/examsPDF";

const Home = () => {
  const [search, setSearch] = useState(""); //input value
  const [listExam, setListExame] = useState([]); //recebe exames filtrados
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

  function deleteExamFromList() {
    console.log("funcionou");
  }

  const inputRef = useRef();

  function cleanAndFocusField() {
    inputRef.current.focus();
    inputRef.current.value = "";
  }

  return (
    <>
      <Header />

      <section className={styles.wrapperHome}>
        <div className={styles.searchArea}>
          <label>
            Digite seus exames
            <input
              type="search"
              name=""
              id=""
              onChange={(e) => setSearch(e.target.value)}
              ref={inputRef}
            />
          </label>

          {/*Gerar documento dinamico com preparo*/}
          <button className={styles.btn} onClick={deleteExamFromList}>
            Gerar PDF
          </button>
        </div>

        {/*opcoes de exames clicaveis*/}
        {boxOptions ? (
          <div className={styles.examContainer}>
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

        {/*Exames selecionados no boxOptions  */}
        {examsSelectBox
          ? examsSelectBox.map((exam, index) => {
              return (
                <ul key={exam.name} className={styles.resultExames}>
                  <li>
                    {exam.name}
                    <div className={styles.lixo} onClick={() => {}}>
                      <img
                        src={garbage}
                        alt="lixeira"
                        className={styles.iconLixo}
                        value={index}
                      />
                      {index}
                    </div>
                  </li>
                </ul>
              );
            })
          : ""}
      </section>
    </>
  );
};

export default Home;
