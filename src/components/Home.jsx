import React, { useEffect, useState } from 'react'
import Header from './Header'
import exame from '../data/exame'
import styles from './Home.module.css';

const Home = () => {
  const [search, setSearch] = useState([]);
  const [examesSelected, setExamesSelected] = useState([]);


  useEffect(() =>  {
    console.log(examesSelected)
  }, [examesSelected]);
  
  function listExames() {
    setExamesSelected(examesSelected => [...examesSelected, search])
  }

  return (
    <>
      <Header />

    <section className={styles.wrapperHome}>
      <div className={styles.searchArea}>
      <label htmlFor="exameSearch">Digite seus exames</label>
      <input type="search"
             name="exameSearch" 
             id=""
             onChange={(e) => setSearch(e.target.value)}
              />

      <button type="button"
             value="Enter"
             onClick={listExames}
              >
                Selecionar
      </button>      

      <ul>
    {examesSelected.map((exame, index) => (
        <li key={index}>{exame}</li> 
    ))}      
      </ul>

     </div>           
    </section>

  </>
  )
}

export default Home
