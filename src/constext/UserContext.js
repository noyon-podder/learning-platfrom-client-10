import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
export const AuthContext = createContext();

const auth = getAuth(app);
const UserContext = ({children}) => {
    const [user, setUser] = useState(false);
    const [loading, setLoading] = useState(true);

    //new user create 
    const newUserCreate = (email, password) => {
        setLoading(false);
        return createUserWithEmailAndPassword(auth, email, password);
    } 

    // user profile update
    const userProfileUpdate = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }

    //log out 
    const logout = () => {
        setLoading(false)
        return signOut(auth);
    }

     // user login 
     const login = (email, password) => {
        setLoading(false)
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
    const authInfo = {user, newUserCreate, userProfileUpdate, logout, login, loading}
    return (
        <div>
        <AuthContext.Provider value={authInfo}> 
            {children}
        </AuthContext.Provider>
        </div>
    );
};

export default UserContext;