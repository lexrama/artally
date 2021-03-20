import * as firebase from 'firebase';
//import { firestore } from 'firebase';
import 'firebase/firebase-firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAEaSqYO_Et01ZMZbz_e7Z1PmHvgybGT3Y",
  authDomain: "artally-7081b.firebaseapp.com",
  projectId: "artally-7081b",
  storageBucket: "artally-7081b.appspot.com",
  messagingSenderId: "949115650095",
  appId: "1:949115650095:web:eb5e5cb32989e2369486da"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  const firestore = firebase.firestore(); // added

  export default firestore;