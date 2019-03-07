import firebase from 'firebase'
import 'firebase/firestore'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyBS7akFZnh8QFlSbxzaumf2jrybPF_pjko",
    authDomain: "makki-b4939.firebaseapp.com",
    databaseURL: "https://makki-b4939.firebaseio.com",
    projectId: "makki-b4939",
    storageBucket: "makki-b4939.appspot.com",
    messagingSenderId: "337225498650"
  })
}

export default firebase
