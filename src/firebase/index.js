import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBMp77vHQtNUH0f9I-WGG5WPkeD5QsMQt0",
  authDomain: "upe-s-project.firebaseapp.com",
  projectId: "upe-s-project",
  storageBucket: "upe-s-project.firebasestorage.app",
  messagingSenderId: "866894254409",
  appId: "1:866894254409:web:563a088d14b8567d194a98",
  measurementId: "G-NVCN9L7M13"
};


const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app)

export {auth}