import React, {  useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import heroLogin from "../../assets/heroLogin.png";
import styles from "./Register.module.css";

import { UserContext } from "../../context/UserContext";

const Register = () => {
  const {
    setEmail,
    setPassword,
    email,
    password,
    handleCreateAccount,
    loading,
    errorRegister,
    success,
    setErrorRegister,
  } = useContext(UserContext);

  const emailRef = useRef();
  const passwordRef = useRef();

  function handleActionCreate(e) {
    e.preventDefault();
    
    if (emailRef.current.value === "" || passwordRef.current.value === "") {
      return setErrorRegister("Preencha os campos corretamente");
    } else if (password.length < 6) {
      return setErrorRegister("Sua senha deve conter no mínimo 6 dígitos");
    } else {
      emailRef.current.value = "";
      passwordRef.current.value = "";
      handleCreateAccount(email, password);
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
                Registre sua <span>Conta</span>
              </h1>
            </div>

            <div className={styles.formulario}>
              <form action="">
                <label htmlFor="name">E-mail</label>
                <input
                  type="email"
                  name=""
                  id="name"
                  placeholder="exemplo@email.com"
                  ref={emailRef}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <label htmlFor="password">Senha</label>
                <input
                  type="password"
                  name=""
                  id="passsword"
                  placeholder="*********"
                  ref={passwordRef}
                  onChange={(e) => setPassword(e.target.value)}
                />

                  <button
                    type="submit"
                    className={styles.btnLogin}
                    onClick={handleActionCreate}>
                    Criar
                  </button>
                
              </form>
              {errorRegister ? (
                <p className={styles.error}>{errorRegister}</p>
              ) : (
                ""
              )}
              {success ? <p className={styles.success}>{success}</p> : ""}
            </div>

            <div className={styles.register}>
              <h4>Eu já tenho uma conta</h4>
              <button>
                <Link to="/login">Login</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
