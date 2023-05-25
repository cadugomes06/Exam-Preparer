import React, { useState, useContext, useEffect } from "react";
import styles from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import heroLogin from "../../assets/heroLogin.png";

import { UserContext } from "../../context/UserContext";

const Login = () => {
  const {
    email,
    password,
    setEmail,
    setPassword,
    handleSignInAccount,
    loading,
    error,
    setErrorLogin,
    errorLogin,
    success,
    setSuccess
  } = useContext(UserContext);

  const navigate = useNavigate()

  // useEffect(() => {
  //   if (user) {
  //     navigate('/')
  //   }
  // }, [user])

  function handleActionSignIn(e) {
    e.preventDefault();

    if (email === "" || password === "") {
      return setErrorLogin("Preencha os campos corretamente");
    } else if (password.length < 6) {
      return setErrorLogin("Sua senha deve conter no mínimo 6 dígitos");
    } else {
      setSuccess("Login realizado com sucesso")
      setTimeout(() => {
        handleSignInAccount(email, password);
      }, 500)
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
                Faça seu <span>Login!</span>
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

                <label htmlFor="password">Senha</label>
                <input
                  type="password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                />

                {loading ? (
                  <button
                    type="submit"
                    className={styles.btnLogin}
                    onClick={handleSignInAccount}
                    disabled
                  >
                    Logando...
                  </button>
                ) : (
                  <button
                    type="submit"
                    className={styles.btnLogin}
                    onClick={handleActionSignIn}
                  >
                    Entrar
                  </button>
                )}
              </form>
              {error ? (
                <p className={styles.error}>Login ou Senha incorretos!</p>
              ) : (
                ""
              )}
              {errorLogin ? <p className={styles.error}>{errorLogin}</p> : ""}
              {success ? <p className={styles.success}>{success}</p> : ""}
            </div>

            <div className={styles.changePassword}>
              <p>
                <Link to="/login/changepassword">Esqueceu sua senha?</Link>
              </p>
            </div>
            <div className={styles.register}>
              <h4>Ainda não possui uma conta?</h4>
              <button>
                <Link to="/login/register">Registrar</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
   