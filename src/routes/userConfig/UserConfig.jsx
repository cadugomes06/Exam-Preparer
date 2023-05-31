import React from 'react'
import Header from '../../components/Header'
import Menu from '../../components/Menu';
import styles from './UserConfig.module.css'

const UserConfig = () => {
  return (
    <section>
        <Header />
        <Menu />


      <div className={styles.wrapper}>
        <div className={styles.termosContainer}>
          <div className={styles.titleTermos}>
            <h1> Configurações</h1>
          </div>
        </div>
      </div>
  

    </section>
  )
}

export default UserConfig