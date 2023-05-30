import React from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import styles from "./Contatos.module.css";

const Contatos = () => {
  return (
    <div>
      <Header />
      <Menu />

      <div className={styles.wrapper}>
        <div className={styles.termosContainer}>
          <div className={styles.titleTermos}>
            <h1>Contatos</h1>
          </div>

          <div className={styles.sectionTiss}>
            <ul>
              <li>
                <strong>Estoque - </strong>
                <a href="mailto:estoque@hemolabes.com">estoque@hemolabes.com</a>
              </li>
              <li>
                <strong>Matriz - </strong>{" "}
                <a href="mailto:matriz@hemolabes.com">matriz@hemolabes.com</a>
              </li>
              <li>
                <strong>Cavaleiros - </strong>{" "}
                <a href="mailto:cavaleiros@hemolabes.com">
                  {" "}
                  cavaleiros@hemolabes.com
                </a>
              </li>
              <li>
                <strong>Solar - </strong>{" "}
                <a href="mailto:solar@hemolabes.com">solar@hemolabes.com</a>
              </li>
              <li>
                <strong>Aeroporto - </strong>{" "}
                <a href="mailto:aeroporto@hemolabes.com">
                  aeroporto@hemolabes.com
                </a>
              </li>
              <li>
                <strong>São João - </strong>{" "}
                <a href="mailto:sjb@hemolabes.com">sjb@hemolabes.com</a>
              </li>
              <li>
                <strong>Same - </strong>
                <a href="mailto:filialsame@hemolabes.com">
                  filialsame@hemolabes.com
                </a>
              </li>
              <li>
                <strong>Faturamento - </strong>
                <a href="mailto:faturamento@hemolabes.com">
                  faturamento@hemolabes.com
                </a>
              </li>
              <li>
                <strong>Administrativo - </strong>
                <a href="mailto:adm@hemolabes.com">adm@hemolabes.com</a>
              </li>
              <li>
                <strong>Contato - </strong>
                <a href="mailto:contato@hemolabes.com">contato@hemolabes.com</a>
              </li>
              <li>
                <strong>Suporte Técnico - </strong>
                <a href="mailto:suporte@hemolabes.com">suporte@hemolabes.com</a>
              </li>

              <h2>Ramal</h2>

              <li>
                <strong>2000 | 2001</strong> Recepção ADM{" "}
              </li>
              <li>
                <strong>2002</strong> T.I
              </li>
              <li>
                <strong>2003</strong> RH/ Genrentes
              </li>
              <li>
                <strong>2004</strong> Faturamento
              </li>
              <li>
                <strong>2009</strong> Diretoria/Ulli/Elizete
              </li>
              <li>
                <strong>2011</strong> Diretoria/Yan
              </li>
              <li>
                <strong>2012</strong> Qualidade
              </li>
              <li>
                <strong>2013</strong> Matriz
              </li>
              <li>
                <strong>2014 | 2026</strong> CPD
              </li>
              <li>
                <strong>2015</strong> Técnica
              </li>
              <li>
                <strong>2017</strong> Solar das Clínicas
              </li>
              <li>
                <strong>2020</strong> Cavaleiros
              </li>
              <li>
                <strong>2023</strong> Esterilização
              </li>
              <li>
                <strong>2024</strong> São João
              </li>
              <li>
                <strong>2025</strong> Hugo/DB
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contatos;
