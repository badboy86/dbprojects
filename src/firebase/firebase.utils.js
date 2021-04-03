import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
    apiKey: "AIzaSyDJD5Atj1QzRP3A_0thVyF2O0IBGaah7bs",
    authDomain: "ai-app-2233b.firebaseapp.com",
    projectId: "ai-app-2233b",
    storageBucket: "ai-app-2233b.appspot.com",
    messagingSenderId: "1079587988443",
    appId: "1:1079587988443:web:fd7970f2d2ef8ef0dcbdfe",
    measurementId: "G-SZSHJK4VE4"
  };

  firebase.initializeApp(config);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;