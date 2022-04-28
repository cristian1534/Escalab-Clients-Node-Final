import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../database/firebase";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = (props) => {
  const [currentUser, setCurrentUser] = useState({});
  

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
  }, []);

  const signUp = (email, password, displayName) => {
    return auth.createUserWithEmailAndPassword(email, password, displayName);
  };

  const logIn = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  const logOut = () => auth.signOut();

  const value = { signUp, logIn, logOut, currentUser };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};
