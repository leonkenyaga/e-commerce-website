// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCa458AwktXVvpHxLRCXxoN7URC7GqYKNo",
  authDomain: "e-commerce-b7834.firebaseapp.com",
  projectId: "e-commerce-b7834",
  storageBucket: "e-commerce-b7834.appspot.com",
  messagingSenderId: "295224517207",
  appId: "1:295224517207:web:57c5eed3101224979f3912",
  measurementId: "G-DFQ5Q7SS61"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);