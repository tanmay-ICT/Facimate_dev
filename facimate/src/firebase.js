// import firebase from 'firebase';
// // import "firebase/auth";

//   const app = firebase.initializeApp({
//     apiKey: process.env.REACT_APP_FIREBASE_KEY,
//     authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
//     databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
//     appId: process.env.REACT_APP_FIREBASE_APP_ID,
//     measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
//   });

//  const database = app.firestore();

// //  export const auth = app.auth()
//  export default app;

import firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBr0SJ3Gt_YZi-i0HK4CfzgciwIT2Sf6zo",
    authDomain: "facimate-d449a.firebaseapp.com",
    projectId: "facimate-d449a",
    storageBucket: "facimate-d449a.appspot.com",
    messagingSenderId: "992161733426",
    appId: "1:992161733426:web:266fced535f9f846ef552b",
    measurementId: "G-LFZB032XZH"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

const peopleCollection = database.collection('people');
const auth = firebaseApp.auth()

export const createUserDocument = async (user, additionalData) => {
    if (!user) return;

    const userRef = database.doc(`people/${user.uid}`);

    const snapshot = await userRef.get();

    if (!snapshot.exists) {
        const {email} = user;
        const {
            displayName,
            age,
            gender,
            location,
            profilePicture,
            hobby1,
            hobby2,
            hobby3,
            proInt1,
            proInt2,
            proInt3,
            aboutMe,
            onelineTagline
        } = additionalData;

        try {
            await userRef.set({
                displayName,
                age,
                gender,
                location,
                profilePicture,
                hobby1,
                hobby2,
                hobby3,
                proInt1,
                proInt2,
                proInt3,
                aboutMe,
                onelineTagline,
                email,
                createdAt: new Date(),
            });
        } catch (error) {
            console.log('Error in creating user', error);
        }
    }
};


export {auth, peopleCollection}
export default database