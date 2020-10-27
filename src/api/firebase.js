import firebase from 'firebase/app'
import '@firebase/firestore' // 👈 If you're using firestore
import 'firebase/auth'
import 'firebase/database'
import ReduxSagaFirebase from 'redux-saga-firebase'

export const firebaseConfig = {
    apiKey: "AIzaSyB4Z9COf6faFWYtegu0sMGilEOhAwcLiws",
    authDomain: "snipcode-new.firebaseapp.com",
    databaseURL: "https://snipcode-new.firebaseio.com",
    projectId: "snipcode-new",
    storageBucket: "snipcode-new.appspot.com",
    messagingSenderId: "424517960196",
    appId: "1:424517960196:web:4de8330d790f0964ee2b51",
    measurementId: "G-VRCNYLQ4E9"
}; 
export const myFirebaseApp = firebase.initializeApp(firebaseConfig);
export const reduxSagaFirebase = new ReduxSagaFirebase(myFirebaseApp)