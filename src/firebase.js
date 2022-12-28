import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBid-cwk1I70POZWOHX_nfzPWWK_5usUfw",
  authDomain: "sg-fire-chat.firebaseapp.com",
  projectId: "sg-fire-chat",
  storageBucket: "sg-fire-chat.appspot.com",
  messagingSenderId: "161523391065",
  appId: "1:161523391065:web:fb19c2a83c775933c1ef48",
  measurementId: "G-7EMWTWY7XH",
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
