// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCdz4iR4NMJ7yofa02JC6LfZXe-VFf87_E",
  authDomain: "nextfire-885fa.firebaseapp.com",
  projectId: "nextfire-885fa",
  storageBucket: "nextfire-885fa.appspot.com",
  messagingSenderId: "138849439876",
  appId: "1:138849439876:web:97fcb744a70d012b87f2d1",
  measurementId: "G-80CPDFXHNS",
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const fromMillis = firebase.firestore.Timestamp.fromMillis;
export const firestore = firebase.firestore();
export const storage = firebase.storage();
export const STATE_CHANGED = firebase.storage.TaskEvent.STATE_CHANGED;
export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;
export const increment = firebase.firestore.FieldValue.increment;

/**`
 * Gets a users/{uid} document with username
 * @param  {string} username
 */
export async function getUserWithUsername(username) {
  const usersRef = firestore.collection("users");
  const query = usersRef.where("username", "==", username).limit(1);
  const userDoc = (await query.get()).docs[0];
  return userDoc;
}

/**`
 * Converts a firestore document to JSON
 * @param  {DocumentSnapshot} doc
 */
export function postToJSON(doc) {
  const data = doc.data();
  return {
    ...data,
    // Gotcha! firestore timestamp NOT serializable to JSON. Must convert to milliseconds
    createdAt: data.createdAt.toMillis(),
    updatedAt: data.updatedAt.toMillis(),
  };
}
