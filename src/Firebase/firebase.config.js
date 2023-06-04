// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6u1Id56gW-zA8ePFKhgxoMk499KkEEQ8",
  authDomain: "sur-20.firebaseapp.com",
  projectId: "sur-20",
  storageBucket: "sur-20.appspot.com",
  messagingSenderId: "22211213029",
  appId: "1:22211213029:web:b54d61c26df2025450860c",
  measurementId: "G-192HH2V82B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);
export default {app, storage };