import firebase from 'firebase';

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
  
  export default database;