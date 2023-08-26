import React, { createContext, useContext, useEffect, useReducer, useState } from "react";
import { auth, storage } from "../firebase";
import { sendEmailVerification,createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateCurrentUser , updateProfile} from "firebase/auth";
import { Navigate } from "react-router-dom";
import { getDownloadURL, uploadBytes, ref } from "firebase/storage";


export const AuthContext = createContext();

export const AuthContextProvider = ({children})=>{
  const [currentUser, setCurrentUser] =  useState(JSON.parse(localStorage.getItem("currentUser")));
  const [verified, setverified] =  useState(currentUser?.emailVerified);
  
  const signup = (email,password)=>{
    createUserWithEmailAndPassword(auth,email,password)
  }

  const upProfile = (UserName) =>{
updateProfile(auth.currentUser,{
  displayName: UserName,
})
  }

  const emailVerify = ()=>{
    sendEmailVerification(currentUser);
  }


  const updatePhoto = (image) =>{
    const imageRef = ref(storage, `users/${currentUser.uid}/images/${currentUser.uid}`)
    uploadBytes(imageRef, image).then(()=>{
      getDownloadURL(imageRef).then((url)=>{
        updateProfile(auth.currentUser,{
          photoURL: url
        })
      })
    })
  }
  const login = (email,password)=>{
    signInWithEmailAndPassword(auth,email,password)
  }
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('currentUser'));
    if (items) {
     setCurrentUser(items);
    }
  }, []);



  const logout = ()=>{
    signOut(auth);
    localStorage.clear();
    <Navigate to="/login"/>
  }

  useEffect(()=>{
  const unsubscribe =  onAuthStateChanged(auth,(user)=>{
     setCurrentUser(user);
     localStorage.setItem("currentUser", JSON.stringify(user));
    })

    return ()=>{
      unsubscribe();
    }
  })


  const value = {
    signup,
    logout,
    login,
    upProfile,
    updatePhoto,
    emailVerify,
    verified,
    currentUser
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = ()=>useContext(AuthContext);

// //Prepares the dataLayer
// export const StateContext = createContext();

// //Wrap our app and provide the data layer
// export const StateProvider = ({ children }) =>{ 
  
//   const man = 22222222;
//   const value = {
//     man
//   }
//   return(
//   <StateContext.Provider value={value}>
//     {children}
//   </StateContext.Provider>
// )};

// // Pull information from the data layer
// export const useStateValue = () => useContext(StateContext);