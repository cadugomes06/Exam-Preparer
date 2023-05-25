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

  const [createUserWithEmailAndPassword, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [signInWithEmailAndPassword ] =
    useSignInWithEmailAndPassword(auth);

  async function handleCreateAccount() {
    setEmail(email);
    setPassword(password);
    setErrorRegister("");
    setSuccess("");
    try {
      const res = await createUserWithEmailAndPassword(email, password);
      if (res) {
        setUser(res)
        setErrorRegister("");
        setSuccess("Sua conta foi criada com sucesso");
        alert("Sua conta foi criado com sucesso!");
        navigate("/login");
      } else {
        throw new setErrorRegister("Erro ao criar usuário!");
      }
    } catch (error) {
      setErrorRegister(
        "Ops.. Algo deu errado! Provavelmente esse e-mail ja está cadastrado."
      );
    }
  }

  async function handleSignInAccount() {
    setErrorLogin("")
    setSuccess("")        
    try {
      const res = await signInWithEmailAndPassword(email, password)
      if (error) {
        return;
      }
      if (res) {
        setUser(res)
        navigate("/")
      }
    } catch (error) {
      throw new Error("Houve um erro inesperado!")
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
        errorLogin
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
