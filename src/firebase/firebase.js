import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA_Vx814sYzacfxxoQ4HfD0JihR0YOcrZA",
    authDomain: "second-hand-a31d0.firebaseapp.com",
    databaseURL: "https://second-hand-a31d0.firebaseio.com",
    projectId: "second-hand-a31d0",
    storageBucket: "second-hand-a31d0.appspot.com",
    messagingSenderId: "1022561928356",
    appId: "1:1022561928356:web:a7c55c2ac3679ec9bf1231"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };