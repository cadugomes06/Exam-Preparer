import React, { useEffect, useState } from "react";
import styles from "./Menu.module.css";
import { Link } from "react-router-dom";
import iconContact from '../assets/contact.svg'
import iconFormcheck from '../assets/formcheck.svg'
import iconDocument from '../assets/document.svg'
import iconLinks from '../assets/link.svg'
import iconLoupe from '../assets/loupe.svg'
import iconArrow from '../assets/arrows.svg'
import iconExam from '../assets/exam.svg'


const Menu = () => {
  const [toggleMenu, setToggleMenu] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const imgs = [iconLoupe, iconFormcheck, iconDocument, iconLinks, iconContact, iconExam];
  const pages = ['/', '/termos', '/tiss', '/links', '/contatos', '/exames'];

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
          <img src={iconArrow} alt="icon-open-close-menu" />
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
            <li className="link">
              <Link to="/exames">Exames</Link>
            </li>
          </ul>
        </div>

          <div className={styles.menuMobile}>
        {isMobile  && toggleMenu ?     
          imgs.map((img, index) => (
            <li key={index}>
              <Link to={pages[index]}><img src={img} alt="icon" /></Link>
            </li>
            ))            
            : ''}
            </div>

        </div>
        </div>

     
    </div>
  );
};

export default Menu;
