import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyD_7UNRoB5qtJ_UeLZhnR9w10XdCudYDxs",
    authDomain: "crwn-db-a2d58.firebaseapp.com",
    projectId: "crwn-db-a2d58",
    storageBucket: "crwn-db-a2d58.appspot.com",
    messagingSenderId: "392079334174",
    appId: "1:392079334174:web:d1f844b49d484ec318070f",
    measurementId: "G-WKKZ6802TE"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;