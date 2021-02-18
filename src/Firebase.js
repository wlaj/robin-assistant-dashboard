import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const settings = {timestampsInSnapshots: true};

const config = {
  apiKey: "AIzaSyAjnRIilHFPivthAKKKvO9yIINvzsW_QG8",
    authDomain: "testproject-daa28.firebaseapp.com",
    databaseURL: "https://testproject-daa28-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "testproject-daa28",
    storageBucket: "testproject-daa28.appspot.com",
    messagingSenderId: "1093046964589",
    appId: "1:1093046964589:web:948a757b3c33902fee4a64"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export const auth = firebase.auth;
export default firebase;
