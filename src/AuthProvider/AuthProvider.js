import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../firebase/firebase.config';

export const AuthContext = createContext()
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const userRegister = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userLogIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogIn = () =>{
        return signInWithPopup(auth, googleProvider)
    }

    const userLogOut = () =>{
        return signOut(auth)
    }

    const updateUser = (userInfo) =>{
        return updateProfile(auth.currentUser, userInfo)
    }

    useEffect( () =>{
        const unSubscribe = () =>{
            return onAuthStateChanged(auth, currentUser =>{
                setUser(currentUser)
            })
        }
        return () =>{
            unSubscribe()
        }
    }, [])

    const authInfo = {user, userRegister, userLogIn, googleLogIn, updateUser, userLogOut}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;