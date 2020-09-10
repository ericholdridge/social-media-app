import React, { useState, createContext } from "react";
import fire from "../../config/fire";
export const AuthenticationContext = createContext();

export const AuthenticationState = ({ children }) => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  // Handle the user sign up
  const handleUserSignup = (e) => {
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(function (error) {
        // Handle Errors here.
        console.log(error);
      });
    clearInputValues();
  };

  // Handle the user sign in
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

  // Handle the user log out
  const handleUserLogout = () => {
    setEmail("");
    setPassword("");
    fire.auth().signOut();
  };

  // Clear the input values after the user signs up
  const clearInputValues = () => {
    setEmail("");
    setPassword("");
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
        handleUserSignin,
        handleUserLogout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
