import React, { useEffect, useState, useRef } from "react";
import Header from "./Header";
import exames from "../data/exame";
import styles from "./Home.module.css";
import garbage from '../assets/garbage.svg'

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
           window.alert(`Atenção!! o exame ${event.innerHTML} já está na lista`)
    } else {
      setExamsSelectBox((examsSelectBox) => 
      [...examsSelectBox, event.innerHTML]);
    }
    setBoxOptions(!boxOptions);
    cleanAndFocusField()
  }

  function deleteExamFromList(e) {
    let i = e.innerHTML
    let newListExams = [...examsSelectBox]
    newListExams.splice(i, 1)
    setExamsSelectBox(newListExams)
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

          <button className={styles.btn}>
            Gerar PDF
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

        <h3 className={styles.titleList}> Lista de exames</h3>
        {examsSelectBox
          ? 
          
          examsSelectBox.map((exam, index) => (
              <ul key={index} className={styles.resultExames}>
                <li>
                  {exam}
                  <div className={styles.lixo}
                       value={index}
                       onClick={(e) => deleteExamFromList(e.target)}
                    >
                      <img src={garbage} 
                           alt="lixeira"
                           className={styles.iconLixo}
                            />
                      <p>{index}</p>                    
                      </div>
                  </li>
              </ul>
          )) 
             : "" }
      </section>
    </>
  );
};

export default Home;
