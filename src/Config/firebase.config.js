// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: "AIzaSyCzt7e0Z8LHP60iINtYxGHx90cndK9jzP4",
    // authDomain: "rhythm-fusion-client.firebaseapp.com",
    // projectId: "rhythm-fusion-client",
    // storageBucket: "rhythm-fusion-client.appspot.com",
    // messagingSenderId: "1027695373349",
    // appId: "1:1027695373349:web:eaead179f0ecd0bd4263cc"
    apiKey: import.meta.env.VITE_APIKEY,
    authDomain: import.meta.env.VITE_AUTHDOMAIN,
    projectId: import.meta.env.VITE_PROJECTID,
    storageBucket: import.meta.env.VITE_STORAGEBUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
    appId: import.meta.env.VITE_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;