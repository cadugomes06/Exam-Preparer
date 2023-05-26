import React, { useEffect, useState } from "react";
import styles from "./Menu.module.css";
import { Link } from "react-router-dom";
import iconEmail from '../assets/email.svg'
import iconForm from '../assets/forms.svg'
import iconHome from '../assets/home.svg'
import iconLinks from '../assets/link.svg'
import iconLoupe from '../assets/loupe.svg'


const Menu = () => {
  const [toggleMenu, setToggleMenu] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const imgs = [iconLoupe, iconForm, iconHome, iconLinks, iconEmail]

  const { innerWidth: width } = window
  
 useEffect(() => {
  if(width < 700) {
    setIsMobile(true)
  }
 }, [width])

  return (
    <div className={styles.menuWrapper}>

      <div>
      <div
        className={
          toggleMenu ? styles.menuContainer : styles.menuContainerClose}
        id="menu"
      >
        <div className={styles.titleMenu}>
          <h3>
            Guia da
            <br />
            <span className={styles.titleMain}>RECEPÇÃO</span>
          </h3>
        </div>

        <div
          className={styles.openCloseMenu}
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          🡘
        </div>

        <div className={styles.documentList}>
          <ul>
            <li className="link">
              <Link to="/"> Preparador de exames </Link>
            </li>
            <li className="link">
              <Link to="/termos">Termos e formulários</Link>
            </li>
            <li className="link">
              <Link to="/tiss">Tiss / SADT</Link>
            </li>
            <li className="link">
              <Link to="/links">Convênios</Link>
            </li>
            <li className="link">
              <Link to="/contatos"> E-mails e Ramal</Link>
            </li>
          </ul>
        </div>

          <div className={styles.menuMobile}>
        {isMobile && toggleMenu ?     
          imgs.map((img) => (
            <li><img src={img} alt="icon" /></li>
            ))            
            : <></>}
            </div>

        </div>
        </div>

     
    </div>
  );
};

export default Menu;
