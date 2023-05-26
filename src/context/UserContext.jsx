import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from "../services/firebaseConfig";
import { useNavigate } from "react-router-dom";

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [errorRegister, setErrorRegister] = useState("");
  const [success, setSuccess] = useState("");
  const [errorLogin, setErrorLogin ] = useState("");

  const navigate = useNavigate();

  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);

  async function handleCreateAccount() {
    setErrorRegister("");
    setSuccess("");
    try {
      const res = await createUserWithEmailAndPassword(email, password);
      
        if (res) {
        setUser(res)
        setSuccess("Sua conta foi criada com sucesso");
        setErrorRegister("");
        setErrorLogin("")
        setTimeout(() => {
          alert("Sua conta foi criado com sucesso!");
          navigate("/login");
        }, 1000)
      } else {
        throw new setErrorRegister("Erro ao criar usuário!" + error);
      } 
    } catch (error) {
      setErrorRegister(
        "Ops.. Algo deu errado! Provavelmente esse e-mail ja está cadastrado."
      );
    }
  }

  const [signInWithEmailAndPassword, loading, error ] =
  useSignInWithEmailAndPassword(auth);

  async function handleSignInAccount() {
    setErrorLogin('')
    setSuccess('')
    try {
      const res = await signInWithEmailAndPassword(email, password)
       if (res) {
        setUser(res)
        setSuccess("Login realizado com sucesso!")
        window.localStorage.setItem("UserAccount", JSON.stringify(res.user.uid))
        setTimeout(() => {
          navigate("/");
          setSuccess('')
        }, 1000)
      }  else {
        throw new setErrorLogin("Houve um erro inesperado! " + error);
      } 
    } catch (error) {
      setErrorLogin("Verifique seu login/senha e tente novamente.")
    }
  }

  return (
    <UserContext.Provider
      value={{
        setEmail,
        setPassword,
        email,
        password,
        setUser,
        user,
        handleCreateAccount,
        errorRegister,
        setErrorRegister,
        success,
        setSuccess,
        loading,
        error,
        handleSignInAccount,
        setErrorLogin,
        errorLogin,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
