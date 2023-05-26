import React, { useContext, useState } from "react";
import styles from "./ChangePassword.module.css";
import { Link } from "react-router-dom";
import heroLogin from "../../assets/heroLogin.png";
import { UserContext } from "../../context/UserContext";

import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { auth } from "../../services/firebaseConfig";

const ChangePassword = () => {
  const { email, setEmail } = useContext(UserContext);

  const [ success, setSuccess ] = useState('')

  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);

  async function updatePasswordFromEmail(e) {
    e.preventDefault();
    try {
      const success = await sendPasswordResetEmail(email);
      if (success) {
       setSuccess('Email enviado com sucesso!')
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <section className={styles.loginWrapper}>
      <div className={styles.loginContainer}>
        <div className={styles.heroLogin}>
          <img src={heroLogin} alt="imagem-de-login" />
        </div>

        <div className={styles.formWrapper}>
          <div className={styles.formContainer}>
            <div>
              <h1>
                Redefina sua <span>Senha</span>
              </h1>
            </div>

            <div className={styles.formulario}>
              <form action="">
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  name="name"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                {sending ? (
                  <button type="submit" className={styles.btnLogin}>
                    Enviando...
                  </button>
                ) : (
                  <button
                    type="submit"
                    className={styles.btnLogin}
                    onClick={updatePasswordFromEmail}
                  > 
                    Solicitar
                  </button>
                )}

              </form>
              {error ? (
                <p className={styles.error}>Login ou Senha incorretos!</p>
              ) : (
                ""
              )}
              {success ? <p className={styles.success}>Enviado com sucesso</p> : ''}
            </div>

            <div className={styles.register}>
              <h4>Voltar para o login</h4>
              <button>
                <Link to="/login">Voltar</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChangePassword;
