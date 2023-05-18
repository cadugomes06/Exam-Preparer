import React from 'react';
import styles from './Header.module.css';
import logoHemo from '../assets/logo-hemo.png'

const Header = () => {
  return (
    <div className={styles.headerWrapper}>   
      <div className={styles.headerContainer}>
        <img src={logoHemo} alt="logo" />
      </div>
      
    </div>
  )
}

export default Header