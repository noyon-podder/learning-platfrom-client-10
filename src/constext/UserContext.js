import React from 'react';
import { createContext } from 'react';
import { AuthContext } from "./AuthContext";

const AuthProvider = createContext()
const UserContext = ({children}) => {
    return (
        <div>
          <AuthContext.Provider></AuthContext.Provider>
        </div>
    );
};

export default UserContext;