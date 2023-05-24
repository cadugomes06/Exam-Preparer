import React, { useState, useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import heroLogin from "../../assets/heroLogin.png";
import styles from "./Register.module.css";

import { UserContext } from "../../context/UserContext";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../services/firebaseConfig";

const Register = () => {
  const { setEmail, setPassword } = useContext(UserContext);

  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [errorRegister, setErrorRegister] = useState("");
  const [success, setSuccess] = useState("");

  const [createUserWithEmailAndPassword, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  async function handleCreateAccount(e) {
    e.preventDefault();
    setEmail(emailValue);
    setPassword(passwordValue);
    setErrorRegister("");
    setSuccess("");

    if (emailRef.current.value === "" || passwordRef.current.value === "") {
      return setErrorRegister("Preencha os campos corretamente");
    } else if (passwordValue.length < 6) {
      return setErrorRegister("Sua senha deve conter no mínimo 6 dígitos");
    }

    try {
      const res = await createUserWithEmailAndPassword(
        emailValue,
        passwordValue
      );
      if (res) {
        setErrorRegister("");
        setSuccess("Sua conta foi criada com sucesso ");
        setTimeout(() => {
          alert("Sua conta foi criado com sucesso! Faça seu login");
          navigate("/login");
        }, 1000);
      } else {
        throw new Error("Erro ao criar usuário!");
      }
    } catch (error) {
      setErrorRegister(
        "Ops.. Algo deu errado! Provavelmente esse e-mail ja está cadastrado."
      );
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
                  name="name"
                  placeholder="exemplo@email.com"
                  ref={emailRef}
                  value={emailValue}
                  onChange={(e) => setEmailValue(e.target.value)}
                />

                <label htmlFor="password">Senha</label>
                <input
                  type="password"
                  name="password"
                  placeholder="*********"
                  ref={passwordRef}
                  value={passwordValue}
                  onChange={(e) => setPasswordValue(e.target.value)}
                />

                {loading ? (
                  <button type="submit" className={styles.btnLogin} disabled>
                    Cadastrando novo usuário
                  </button>
                ) : (
                  <button
                    type="submit"
                    className={styles.btnLogin}
                    onClick={handleCreateAccount}
                  >
                    Criar
                  </button>
                )}
              </form>
              {/* {error ? 
                // <p className={styles.error}>
                //   Houve um erro... verifique se o email já está cadastrado
                // </p>
                {errorRegister}
               : 
                ""
              } */}
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
