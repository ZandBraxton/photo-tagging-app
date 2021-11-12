import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCuap9dtC0hQqMha2jGxs6zqtW6-8SD-Zk",
    authDomain: "photo-tagging-app-16bd5.firebaseapp.com",
    projectId: "photo-tagging-app-16bd5",
    storageBucket: "photo-tagging-app-16bd5.appspot.com",
    messagingSenderId: "548435647916",
    appId: "1:548435647916:web:892a90d7752d28797aee09",
    measurementId: "G-NGHR8K31P7"
  };


initializeApp(firebaseConfig);

const firestore = getFirestore()

export {firestore}