import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBMp7VvHQtNUH0f9I-WGG5WPkeD5QsMQT0",
  authDomain: "upe-s-project.firebaseapp.com",
  databaseURL: "https://upe-s-project-default-rtdb.firebaseio.com",
  projectId: "upe-s-project",
  storageBucket: "upe-s-project.appspot.com",
  messagingSenderId: "866894254409",
  appId: "1:866894254409:web:563a088d14b8567d194a98",
  measurementId: "G-NCVN9L7M13"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
