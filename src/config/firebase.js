// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth} from "firebase/auth"
import {GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPR6NAnvEv_2wV0rcXlKEE2sG-EqfteHQ",
  authDomain: "contact-app-e3adf.firebaseapp.com",
  projectId: "contact-app-e3adf",
  storageBucket: "contact-app-e3adf.appspot.com",
  messagingSenderId: "719820285084",
  appId: "1:719820285084:web:956cb7d6a24ebf12683959"
};

export const app = initializeApp(firebaseConfig);

export const db= getFirestore(app);
 const auth=getAuth(app);
export const googleprovider= new GoogleAuthProvider();
export default auth