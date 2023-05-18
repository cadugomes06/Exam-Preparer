import React, { useState } from 'react'
import styles from './Menu.module.css';
import { Link } from 'react-router-dom';

const Menu = () => {
const [toggleMenu, setToggleMenu ] = useState(true)

  return (
    <div className={styles.menuWrapper}>
        <div className={toggleMenu 
                      ?styles.menuContainer 
                      :styles.menuContainerClose}>
                        
           <div className={styles.titleMenu}>
                <h3>Guia da 
                    <br />
                 <span className={styles.titleMain}>RECEPÇÃO</span>
                </h3>  
            </div>

            <div 
               className={styles.openCloseMenu}
               onClick={() => setToggleMenu(!toggleMenu)}>
                🡘
            </div>

            <div className={styles.documentList}>
                <ul>
                    <li><Link to='/'> Preparador de exames </Link></li>
                    <li><Link to='/termos'>Termos e formulários</Link></li>
                    <li><Link to='/tiss'>Tiss / SADT</Link></li>
                    <li><Link to='/links'> Resultados / Convênios</Link></li>
                    <li><Link to='/contatos'> E-mails e Ramal</Link></li>
                </ul>
            </div>


        </div>
   </div>
  )
}

export default Menu