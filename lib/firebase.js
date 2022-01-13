// Import the functions you need from the SDKs you need
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'



const firebaseConfig = {
  apiKey: "AIzaSyCdz4iR4NMJ7yofa02JC6LfZXe-VFf87_E",
  authDomain: "nextfire-885fa.firebaseapp.com",
  projectId: "nextfire-885fa",
  storageBucket: "nextfire-885fa.appspot.com",
  messagingSenderId: "138849439876",
  appId: "1:138849439876:web:97fcb744a70d012b87f2d1",
  measurementId: "G-80CPDFXHNS"
};

// Initialize Firebase
if(!firebase.app.lenght){
  firebase.initializeApp(firebaseConfig);
}

const auth=firebase.auth();
const firestore =firebase.firestore();
const storage =firebase.storage();