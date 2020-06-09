import * as firebase from "firebase";

let firebaseConfig = {
  apiKey: "AIzaSyAzvP0DT_fKVAiBsB_ulwCb2bJTEHy-SBI",
  authDomain: "d3-project1-5e90d.firebaseapp.com",
  databaseURL: "https://d3-project1-5e90d.firebaseio.com",
  projectId: "d3-project1-5e90d",
  storageBucket: "d3-project1-5e90d.appspot.com",
  messagingSenderId: "606564502204",
  appId: "1:606564502204:web:b1735745196f8ac11e5eb9",
  measurementId: "G-33D1BS44SD",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;
