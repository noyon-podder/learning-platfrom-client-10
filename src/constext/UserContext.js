import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
export const AuthContext = createContext();

const auth = getAuth(app);
const UserContext = ({children}) => {
    const [user, setUser] = useState(false);
    const [loading, setLoading] = useState(true);

    //new user create 
    const newUserCreate = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    } 

    // user profile update
    const userProfileUpdate = (profile) => {
        setLoading(true)
        return updateProfile(auth.currentUser, profile)
    }

    //log out 
    const logout = () => {
        setLoading(true)
        return signOut(auth);
    }

     // user login 
     const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
     }
    
    //get the current user 
    useEffect(() => {
        const unsubscribe =onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => unsubscribe()
    }, [])

    //google sign in
    const googleSignIn = (googleProvider) => {
        return signInWithPopup(auth, googleProvider);
    }

    //const github sign in 
    const githubSignIn = (githubProvider) => {
        return signInWithPopup(auth, githubProvider);
    }
    const authInfo = {user, newUserCreate, userProfileUpdate, logout, login, loading, googleSignIn, setUser, githubSignIn}
    return (
        <div>
        <AuthContext.Provider value={authInfo}> 
            {children}
        </AuthContext.Provider>
        </div>
    );
};

export default UserContext;