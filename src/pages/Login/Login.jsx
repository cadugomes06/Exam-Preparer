import styles from './Login.module.css';
import heroLogin from '../../assets/heroLogin.png'

const Login =  () => {
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
                           id=""
                           placeholder='exemplo@email.com'
                             />
                
                    <label htmlFor="password">Senha</label>
                    <input type="password"
                           name="password" 
                           id=""
                           placeholder='*********' />


                    <button type="submit" value="" className={styles.btnLogin} >Entrar</button>
                </form> 
               </div>

                 <div className={styles.register}>
                    <p>Esqueceu sua senha?</p>

                    <h4>Ainda não possui uma conta?</h4>
                    <button>Registrar</button>
                 </div>

               </div>
            </div>

          </div>
            
        </section>
    )
}

export default Login