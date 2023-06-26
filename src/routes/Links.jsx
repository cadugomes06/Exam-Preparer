import Header from "../components/Header";
import Menu from "../components/Menu";
import styles from "./Links.module.css";

const Links = () => {
  
  return (
    <div>
      <Header />
      <Menu />

      <div className={styles.wrapper}>
        <div className={styles.termosContainer}>
          <div className={styles.titleTermos}>
            <h1>Links dos convênios</h1>
          </div>

          <div className={styles.sectionTiss}>
            <ul>
              <li>
                <a
                  href="https://www.laudoonline.com.br/hemolabes/"
                  target="_blank" rel='noreferrer'
                >
                  Resultado online
                </a>
              </li>
              <li>
                <a
                  href="http://appunimedvsf.com.br:8081/Account/Login?ReturnUrl=%2F"
                  target="_blank" rel='noreferrer'
                >
                  Autorizador Unimed
                </a>
              </li>
              <li>
                <a
                  href="https://www.orizonbrasil.com.br/acesso-restrito.html"
                  target="_blank" rel='noreferrer'
                >
                  Autorizador Orizon
                </a>
              </li>
              <li>
                <a
                  href="https://portaltiss.saudepetrobras.com.br"
                  target="_blank" rel='noreferrer'
                >
                  Autorizador AMS Petrobrás
                </a>
              </li>
              <li>
                <a href="https://credenciado.amil.com.br/login" target="_blank" rel='noreferrer'>
                  Autorizador Amil
                </a>
              </li>
              <li>
                <a
                  href="https://autorizadorintermedica.startiss.com.br/Login.aspx"
                  target="_blank" rel='noreferrer'
                >
                  Autorizador Intermédica/Notredame
                </a>
              </li>
              <li>
                <a
                  href="https://saude.sulamericaseguros.com.br/prestador/login/"
                  target="_blank" rel='noreferrer'
                >
                  Autorizador Sul América
                </a>
              </li>
              <li>
                <a
                  href="http://1907prd-painel.cloudmv.com.br/mvautorizadorguias/"
                  target="_blank" rel='noreferrer'
                >
                  Autorizador Cedae - CAC
                </a>
              </li>
              <li>
                <a href="https://rac.hat.totvs.com.br" target="_blank" rel='noreferrer'>
                  Autorizador Caberj/Integral
                </a>
              </li>
              <li>
                <a
                  href="http://portal.goldentiss.com.br/portaltiss/tiss/info/home.golden#" rel='noreferrer'
                  target="_blank"
                >
                  Autorizador Golden Cross
                </a>
              </li>
              <li>
                <a href="https://autorizador.assim.com.br/" target="_blank" rel='noreferrer'>
                  Autorizador Assim
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Links;
