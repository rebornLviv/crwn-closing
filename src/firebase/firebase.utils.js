import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
 var firebaseConfig = {
    apiKey: "AIzaSyBwK6qpkFhEWgqE-FmCnP2zUFA1PtVOiKs",
    authDomain: "crown-clothing-75ebb.firebaseapp.com",
    databaseURL: "https://crown-clothing-75ebb.firebaseio.com",
    projectId: "crown-clothing-75ebb",
    storageBucket: "crown-clothing-75ebb.appspot.com",
    messagingSenderId: "334134080617",
    appId: "1:334134080617:web:42d54f3049b9ff90471ef8"
  };

  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({'prompt':'select_account'});
  export const  signInWithGoogle = () => auth.signInWithPopup(provider);
  export default firebase;