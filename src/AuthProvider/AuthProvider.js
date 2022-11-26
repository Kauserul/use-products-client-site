import React, { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth'
import app from '../firebase/firebase.config';

export const AuthContext = createContext()
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    
    const userRegister = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userLogIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogIn = () =>{
        return signInWithPopup(auth, googleProvider)
    }

    const authInfo = {userRegister, userLogIn, googleLogIn}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;