import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBAXZwwao0oa0efinQ60wnz0pNShlv6eaA",
  authDomain: "store-9faad.firebaseapp.com",
  projectId: "store-9faad",
  storageBucket: "store-9faad.appspot.com",
  messagingSenderId: "531474414793",
  appId: "1:531474414793:web:bee60462c5a0bcbf0e2118",
  measurementId: "G-1D5NFJVBDQ",
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
