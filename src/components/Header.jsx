import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.headerWrapper}>   
      <div className={styles.headerContainer}>
        <img src="logo" alt="logo" />
      </div>
      
    </div>
  )
}

export default Header