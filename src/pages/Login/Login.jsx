import React, { useState, useContext } from 'react';
import styles from './Login.module.css';
import { Link, useNavigate } from 'react-router-dom';
import heroLogin from '../../assets/heroLogin.png'

import { auth } from '../../services/firebaseConfig'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { UserContext } from '../../context/UserContext';

const Login =  () => {

  const { setToken, setUser } =  useContext(UserContext)

  const [email, setEmail ] = useState("");
  const [password, setPassword ] = useState("");
  const [errorLogin, setErrorLogin ] = useState("");
  const [success, setSuccess ] = useState("");

  const navigate = useNavigate()

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  async function handleSignInAccount(e) {
    e.preventDefault()
    setErrorLogin("")
    setSuccess("")

    if (email === "" || password === "") {
      return setErrorLogin("Preencha os campos corretamente");
    } else if (password.length < 6) {
      return setErrorLogin("Sua senha deve conter no mínimo 6 dígitos");
    }
    
    try {
      const res = await signInWithEmailAndPassword(email, password)
      if (error) {
        return;
      }
      if (res) {
        setUser(res)
        setSuccess("Login realizado com sucesso!")
        setTimeout(() => {
          navigate("/")
        }, 1000)
      }
    } catch (error) {
      throw new Error("Houve um erro inesperado!")
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
                    <h1>Faça seu <span>Login!</span></h1>
                </div>

              <div className={styles.formulario}>
               <form action="">
                    <label htmlFor='name'>E-mail</label>
                    <input type="email"
                           name="name" 
                           onChange={(e) => setEmail(e.target.value)}
                             />
                
                    <label htmlFor="password">Senha</label>
                    <input type="password"
                           name="password" 
                           onChange={(e) => setPassword(e.target.value)}
                            />

                    {loading ? 
                        <button type="submit"
                        className={styles.btnLogin}
                        onClick={handleSignInAccount}
                        disabled
                         >
                        Logando...
                        </button>
                        : (
                          <button type="submit"
                          className={styles.btnLogin}
                          onClick={handleSignInAccount}
                           >
                          Entrar
                  </button>
                        )
                    }
                  
                </form> 
                {error ? <p className={styles.error}>Login ou Senha incorretos!</p> : ''}
                {errorLogin ? <p className={styles.error}>{errorLogin}</p> : ''}
                {success ? <p className={styles.success}>{success}</p> : ''}
               </div>

                  <div className={styles.changePassword}>
                    <p >
                      <Link to='/login/changepassword'>Esqueceu sua senha?</Link>
                    </p>
                  </div>
                 <div className={styles.register}>

                    <h4>Ainda não possui uma conta?</h4>
                    <button><Link to="/register" >Registrar</Link ></button>
                 </div>

               </div>
            </div>

          </div>
            
        </section>
    )
}

export default Login