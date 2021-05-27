import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
    // exports.createUser = functions.auth.user().onCreate((user) => {
    //   const { uid } = user;
    //   const functions = require("firebase-functions");
    //   const peopleCollection = database.collection("people");
    
    //   peopleCollection.doc(uid).set({
    //     // age: age,
    //     // distance: distance,
    //     // location: location,
    //     // name: name,
    //     // url: url,
    //     // verified: verified
    //     email:email,
    //     password:password
    //   });
    // });
    
    // //deconstruct the users details we will need these later
    // const {age,distance,location,name,url,verified, email, password} = userDetails
    // return () => {
    //   //user firebase using the appropriate firebase method
    // 	firebase.auth().createUserWithEmailAndPassword(email, password)
    //     .then(() => {
    //         //Once the user creation has happened successfully, we can add the currentUser into firestore
    //         //with the appropriate details.
    //         firebase.firestore().collection('people').doc(firebase.auth().currentUser.uid)
    //         .set({
    // 			age: age,
    // 			distance: distance,
    // 			location: location,
    // 	        	name: name,
    // 		        url: url,
    // 		        verified: verified
    //           })
    //       })
    //   }
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return auth.signOut();
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email);
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}