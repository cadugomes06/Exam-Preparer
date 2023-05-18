import React from 'react'
import Header from '../components/Header'
import Menu from '../components/Menu'
import styles from './Tiss.module.css'
import { assim, caberj, cac, gama, golden, interNotre, sulAmerica,} from '../documents/index';

const Tiss = () => {
  
    return (
      <div>
        <Header />
        <Menu />
  
        <div className={styles.wrapper}>
          <div className={styles.termosContainer}>
  
            <div className={styles.titleTermos}>
              <h1> TISS</h1>
            </div>
  
            <div className={styles.sectionTiss}>
              <ul>
                <li><a href={assim} target='_blank'>Assim saúde</a></li>
                <li><a href={caberj} target='_blank'>Caberj saúde</a></li>
                <li><a href={cac} target='_blank'>Cac saúde</a></li>
                <li><a href={gama} target='_blank'>Gama saúde</a></li>
                <li><a href={golden} target='_blank'>Golden Cross saúde</a></li>
                <li><a href={interNotre} target='_blank'>Notredame / Intermédica saúde</a></li>
                <li><a href={sulAmerica} target='_blank'>Sul América saúde</a></li>
              </ul>
            </div>
  
          </div>
        </div>
      </div>
    )
  
}

export default Tiss