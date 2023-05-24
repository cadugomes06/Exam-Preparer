import React, { useState} from "react";

export const UserContext =  React.createContext();

export const UserStorage = ({ children }) => {
  const [ email, setEmail] = useState("");
  const [ password, setPassword] = useState("");

  console.log(email, password)


  
  return (
    <UserContext.Provider
      value={{ setEmail, setPassword }}
    >
      {children}
    </UserContext.Provider>
  );

  };

