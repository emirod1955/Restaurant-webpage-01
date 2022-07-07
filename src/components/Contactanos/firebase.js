import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAMqbE-T00QgZhd9h3IjgNRMKalNdYnECE",
    authDomain: "restaurante01-2e6b3.firebaseapp.com",
    projectId: "restaurante01-2e6b3",
    storageBucket: "restaurante01-2e6b3.appspot.com",
    messagingSenderId: "751136637814",
    appId: "1:751136637814:web:3ab7163004d4827f143057"
});

var db = firebaseApp.firestore();

export { db };