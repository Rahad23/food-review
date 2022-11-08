import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { app } from './../firebase/Firebase';

const auth = getAuth(app);

const Googleprovider = new GoogleAuthProvider();

export const ProviderContext =createContext();
const ContextApi = ({children}) => {
    
    // user data
    const [userData, setUserData]= useState('');
    // loader set
    const [loader, setLoader]= useState(true);
    // create user with email and password
    const createUserEmialPassword=(email, password)=>{
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // update user
    const updateUserData=(data)=>{
        setLoader(true);
       return updateProfile(auth.currentUser, data);
    }

    // signin with email and password
    const loginEmailAndPassword=(email, password)=>{
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // signin with popup
    const signinWithPopup=()=>{
        setLoader(true);
        return signInWithPopup(auth, Googleprovider);
    }

    // userLogOut function
    const logout=()=>{
        return signOut(auth);
    }

    // user traking function
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, user=>{
            setLoader(false);
            setUserData(user);
        })
        return ()=>unsubscribe();
    },[])



    const dataProvider ={
        createUserEmialPassword,
        updateUserData,
        loginEmailAndPassword,
        signinWithPopup,
        userData,
        loader,
        logout
    }

    

    return (
        <div>
            <ProviderContext.Provider value={dataProvider}>
                {children}
            </ProviderContext.Provider>
        </div>
    );
};

export default ContextApi;