import firebase from 'firebase/app'
import 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAy43JEA-WXv5KnVqCkybz-7MIgv8re4Ng",
    authDomain: "rutevisi-67a50.firebaseapp.com",
    databaseURL: "https://rutevisi-67a50.firebaseio.com",
    projectId: "rutevisi-67a50",
    storageBucket: "rutevisi-67a50.appspot.com",
    messagingSenderId: "654949802986",
    appId: "1:654949802986:web:ca7b2b0e467a3fddc50893",
    measurementId: "G-CQK0QLKX2R"
};


try {
    firebase.initializeApp(firebaseConfig);
} catch (err) {
    if (!/already exists/.test(err.message)) {
        console.error('Firebase initialization error', err.stack)
    }
}

const storage = firebase.storage();

export  {
    storage, firebase as default
}