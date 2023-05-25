import React, { useState} from "react";

export const UserContext =  React.createContext();

export const UserStorage = ({ children }) => {
  const [ email, setEmail] = useState("");
  const [ password, setPassword] = useState("");
  const [ user, setUser] = useState(null);
  const [ token, setToken] = useState(null);

  window.localStorage.setItem("AccessToken", token)

  
  return (
    <UserContext.Provider
      value={{ setEmail, setPassword, token, setUser, user }}
    >
      {children}
    </UserContext.Provider>
  );

  };

