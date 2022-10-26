import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
export const AuthContext = createContext();

const auth = getAuth(app);
const UserContext = ({children}) => {
    const [user, setUser] = useState(false);

    //new user create 
    const newUserCreate = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    } 

    // user profile update
    const userProfileUpdate = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }

    //log out 
    const logout = () => {
        return signOut(auth);
    }

     // user login 
     const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
     }
    
    //get the current user 
    useEffect(() => {
        const unsubscribe =onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        })
        return () => unsubscribe()
    }, [])
    const authInfo = {user, newUserCreate, userProfileUpdate, logout, login}
    return (
        <div>
        <AuthContext.Provider value={authInfo}> 
            {children}
        </AuthContext.Provider>
        </div>
    );
};

export default UserContext;