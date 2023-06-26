import { useContext, useState } from "react";
import styles from "./Header.module.css";
import logoHemo from "../assets/logo-hemo.png";
import userIcon from "../assets/user.svg";
import { UserContext } from "../context/UserContext";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [submenu, setSubmenu] = useState(false);

  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  function handleSignOutAccount() {
    setUser(null);
    navigate("/login");
    window.localStorage.removeItem('UserAccount')
  }

  function handleToggleSubmenu() {
    setSubmenu(!submenu);
  }

   
  const userStorage = window.localStorage.getItem('UserUnitData')
  const userData = JSON.parse(userStorage)

  return (
    <div className={styles.headerWrapper}>
      <div className={styles.headerLogo}>
        <img src={logoHemo} alt="logo" />
      </div>

      <div className={styles.headerUser}>
      <p>{userData ? `Bem-vindo, ${userData.name}!` : ''}</p>
        <img
          src={userIcon}
          alt="icone-usuario"
          onClick={() => handleToggleSubmenu()}
        />
      </div>

      {submenu ? (
        <div className={styles.infoUserIcon}>
          <ul>
            <li onClick={handleSignOutAccount}>Sair</li>
            <li disabled><Link to="/userconfig">Configurações</Link></li>
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Header;
