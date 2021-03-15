import * as firebase from 'firebase';
import 'firebase/firebase-firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAnFipaez4nxLfLHjydmm3IvfTxdFeZwlI",
    authDomain: "artally-92aa7.firebaseapp.com",
    projectId: "artally-92aa7",
    storageBucket: "artally-92aa7.appspot.com",
    messagingSenderId: "292896528398",
    appId: "1:292896528398:web:97a10b0da1053f136fc45f",
    measurementId: "G-581P4NZHC6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firestore;