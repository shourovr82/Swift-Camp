import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../../authentications/firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  const createUser = (email, password) => {
    setLoading(true);
    console.log(email, password);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  }

  const verifyEmail = () => {
    return sendEmailVerification(auth.currentUser);
  }

  const logOutHandle = () => {
    setLoading(true);
    return signOut(auth)
  }

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleLogIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  }

  const handleGithubLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  }


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (user === null || currentUser.emailVerified) {
        setUser(currentUser)
      }
      setLoading(false)
    })
    return () => {
      unsubscribe();
    }
  }, [])

  const authInfo = {
    user,
    createUser,
    loginUser,
    verifyEmail,
    logOutHandle,
    handleGoogleLogIn,
    handleGithubLogin,
    loading,


  }

  return (
    <div>
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;