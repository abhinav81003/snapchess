import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBuJiKIoNY4jVGfRgDOml_dQdi2ltnWo7s",
    authDomain: "snapchess-bbee1.firebaseapp.com",
    projectId: "snapchess-bbee1",
    storageBucket: "snapchess-bbee1.appspot.com",
    messagingSenderId: "739805357160",
    appId: "1:739805357160:web:239a1c14b1225a021247dd",
    measurementId: "G-39N4V8E884"
};

const app = initializeApp(firebaseConfig);
export default app;