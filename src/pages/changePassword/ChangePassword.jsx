import React, { useContext } from 'react'
import styles from './ChangePassword.module.css'
import { Link, useNavigate } from "react-router-dom";
import heroLogin from  '../../assets/heroLogin.png';
import { UserContext } from '../../context/UserContext';

const ChangePassword = () => {

  const { email, loading, error, setEmail } = useContext(UserContext)

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

                {loading ? (
                  <button
                    type="submit"
                    className={styles.btnLogin}
                    disabled
                  >
                    Logando...
                  </button>
                ) : (
                  <button
                    type="submit"
                    className={styles.btnLogin}
                    onClick={() => {}}
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
}

export default ChangePassword