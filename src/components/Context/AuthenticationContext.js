import React, { useState, createContext } from "react";
import fire from "../../config/fire";
export const AuthenticationContext = createContext();

export const AuthenticationState = ({ children }) => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputValues = () => {
    setEmail("");
    setPassword("");
  }

  const handleUserSignup = (e) => {
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(function (error) {
        // Handle Errors here.
        console.log(error);
      });
    
    // Clear the input values after the user submits the form
    clearInputValues();
  };

  const handleUserSignin = (e) => {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(function (error) {
        // Handle Errors here.
        console.log(error);
      });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        setUser,
        email,
        setEmail,
        password,
        setPassword,
        hasAccount,
        setHasAccount,
        handleUserSignup,
        handleUserSignin
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
