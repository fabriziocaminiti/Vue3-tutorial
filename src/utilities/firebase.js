import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

var firebaseConfig = {
    apiKey: "AIzaSyBwb589BmK2AZbWuPof9YtwBK34619AS0U",
    authDomain: "vue3-firstproject.firebaseapp.com",
    projectId: "vue3-firstproject",
    storageBucket: "vue3-firstproject.appspot.com",
    messagingSenderId: "906194651310",
    appId: "1:906194651310:web:2a63b568b0c30148e8c53f"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
export const chatsRef = db.ref("chats");

export default firebase;