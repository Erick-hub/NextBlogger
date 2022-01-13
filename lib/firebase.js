// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'



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
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
  
}

export const auth=firebase.auth();
export const googleAuthProvider= new firebase.auth.GoogleAuthProvider();
export const firestore =firebase.firestore();
export const storage =firebase.storage();