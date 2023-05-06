import React, { useEffect, useState, useRef } from "react";
import Header from "./Header";
import exames from "../data/exame";
import styles from "./Home.module.css";

const Home = () => {
  const [search, setSearch] = useState(""); //input value
  const [listExam, setListExame] = useState([]); //recebe exames filtrados
  const [boxOptions, setBoxOptions] = useState(false); //on/off modal de opcoes
  const [examsSelectBox, setExamsSelectBox] = useState([]); //Array de exames selecionados do boxOptions

  
  const allExames = exames;

  useEffect(() => {
    const examSelect = allExames.filter((exam) => {
      return (
        exam.name.toLowerCase().includes(search) ||
        exam.nick.toLowerCase().includes(search)
        );
    });
    openModalBoxOptions();
    setListExame(examSelect);
   
  }, [search]);
  
  function openModalBoxOptions() {
    setBoxOptions(!boxOptions);
  }

  function deleteExamFromList() {
    console.log()
  }
  
  //closeModel boxOptions
  useEffect(() => { 
    window.addEventListener('click', (event) => {
      if(event.target != boxOptions) {
        setBoxOptions(!boxOptions)
      }
    })
  }, [])


  function handleClickOnBox(event) {
    if(examsSelectBox.includes(event.innerHTML)) {
           window.alert(`Atenção!! o exame ${event.innerHTML}
            já está na lista`)
    } else {
      setExamsSelectBox((examsSelectBox) => 
      [...examsSelectBox, event.innerHTML]);
    }
    setBoxOptions(!boxOptions);
    cleanAndFocusField()
  }

  const inputRef = useRef()

  function cleanAndFocusField() {
    inputRef.current.focus()
    inputRef.current.value = ''
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
          <button type="button" value="Enter" >
            {" "}
            Selecionar
          </button>
        </div>

        {/*opcoes de exames clicaveis*/}
        {boxOptions ? (
          ""
        ) : (
          <div className={styles.examContainer}>
            <div className={styles.examList}>
              {listExam?.map((exam, index) => (
                <li key={index} 
                    onClick={(e) => handleClickOnBox(e.target)}>
                  {exam.name}
                </li>
              ))}
            </div>
          </div>
        )}

        <div className={styles.separator} />

          
        {examsSelectBox
          ? 
          examsSelectBox.map((exam, index) => (
              <ul key={index} className={styles.resultExames}>
                <li>
                  {exam}

                  <div className={styles.lixo}
                    />

                  </li>
              </ul>
            ))  
            
            : ""}
      </section>
    </>
  );
};

export default Home;
