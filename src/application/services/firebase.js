import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

const config = {
    apiKey: "AIzaSyBlgzJ7oZx28r_0jWuc_KQ34enO3luRi08",
    authDomain: "wfv-matt.firebaseapp.com",
    projectId: "wfv-matt",
    storageBucket: "wfv-matt.appspot.com",
    messagingSenderId: "510506823341",
    appId: "1:510506823341:web:46294024de3f60429c6024",
    measurementId: "G-J5WTLGJF08",
    databaseURL: "https://wfv-matt-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

export const auth = firebase.auth();
export const db = firebase.database();
export const provider = new firebase.auth.GoogleAuthProvider();
