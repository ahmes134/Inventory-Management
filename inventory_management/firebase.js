// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXBdxCfU2po_5JhGvI6xSXWW-31YlZwIs",
  authDomain: "inventory-management-339ad.firebaseapp.com",
  projectId: "inventory-management-339ad",
  storageBucket: "inventory-management-339ad.appspot.com",
  messagingSenderId: "657107183856",
  appId: "1:657107183856:web:8e19d33010789998a17a35",
  measurementId: "G-K26WHWHFP0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const firestore = getFirestore(app)
export { firestore } 