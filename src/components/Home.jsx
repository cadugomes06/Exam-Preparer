import React, { useEffect, useState } from 'react'
import Header from './Header'
import exames from '../data/exame'
import styles from './Home.module.css';


const Home = () => {
  const [search, setSearch] = useState('');
  const [listExam, setListExame] = useState([]);

  const allExames = exames

  useEffect(() => {

    const examSelect = allExames.filter(exam => {
      return (
        exam.name.toLowerCase().includes(search) ||
        exam.nick.toLowerCase().includes(search)
      )
    })
    console.log(examSelect)
    setListExame(examSelect)
  }, [search])


  return (
    <>
      <Header />
    <section className={styles.wrapperHome}>
      <div className={styles.searchArea}>

      <label htmlFor="">
        Digite seus exames

        <input type="search"
             name="" 
             id=""
             onChange={(e) => setSearch(e.target.value)}
         />
      </label> 
      <button type="button"
             value="Enter"
             onClick={() => {}}
              > Selecionar
      </button>  
     </div>    

     <div className={styles.examContainer}>
       <div className={styles.examList}>
           {listExam?.map((exam, index) => (
                <li key={index}>{exam.name}</li>
            ))}
       </div>
     </div> 

     
    </section>

  </>
  )
}

export default Home
