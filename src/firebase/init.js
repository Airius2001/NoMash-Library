import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyA6WtQejjItqONrMu_CPMoo-wwHy3OFtzs",
    authDomain: "week7-patrick.firebaseapp.com",
    projectId: "week7-patrick",
    storageBucket: "week7-patrick.appspot.com",
    messagingSenderId: "945811937259",
    appId: "1:945811937259:web:7cccb0c20eaca956a06bae"
  };


initializeApp(firebaseConfig);
const db = getFirestore()
export default db