  
import firebase from "firebase/app";
import "firebase/database";

const config = {
    apiKey: "AIzaSyBuAsY4b6ahk78dfZ_iX1hM0M-YSm1oKAc",
    authDomain: "chatbot-61ad4.firebaseapp.com",
    databaseURL: "https://chatbot-61ad4-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "chatbot-61ad4",
    storageBucket: "chatbot-61ad4.appspot.com",
    messagingSenderId: "949519564463",
    appId: "1:949519564463:web:604888e78b5a61f4619e5a"
}

const db = firebase.initializeApp(config);
export default db;