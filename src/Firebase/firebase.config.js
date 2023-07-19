// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// here all the firebaseConfig will be change project by project
const firebaseConfig = {

  apiKey: "AIzaSyDXsmS_D5NZ6MBIDFgVME9C4DyxiLdl7cE",

  authDomain: "client-23b8b.firebaseapp.com",

  projectId: "client-23b8b",

  storageBucket: "client-23b8b.appspot.com",

  messagingSenderId: "76731829723",

  appId: "1:76731829723:web:1df2ec2cb7f7cdcd9cebfe"

};


// Initialize Firebase
// app must be export
export const app = initializeApp(firebaseConfig);