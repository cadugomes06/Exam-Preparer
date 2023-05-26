import React, { useContext, useEffect, useState } from "react";
import styles from "./Header.module.css";
import logoHemo from "../assets/logo-hemo.png";
import userIcon from "../assets/user.svg";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [submenu, setSubmenu] = useState(false);

  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  function handleSignOutAccount() {
    setUser(null);
    navigate("/login");
    window.localStorage.clear()
  }

  function handleToggleSubmenu() {
    setSubmenu(!submenu);
  }

  return (
    <div className={styles.headerWrapper}>
      <div className={styles.headerLogo}>
        <img src={logoHemo} alt="logo" />
      </div>

      <div className={styles.headerUser}>
        <img
          src={userIcon}
          alt="icone-usuario"
          onClick={(e) => handleToggleSubmenu()}
        />
      </div>

      {submenu ? (
        <div className={styles.infoUserIcon}>
          <ul>
            <li onClick={handleSignOutAccount}>Sair</li>
            <li disabled>Configurações</li>
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Header;
