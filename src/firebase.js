// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyDzypAYqMk3LX5e3rIacWoLkpq36HEBrk0',
    authDomain: 'tiktokui-aefb1.firebaseapp.com',
    projectId: 'tiktokui-aefb1',
    storageBucket: 'tiktokui-aefb1.appspot.com',
    messagingSenderId: '625130573340',
    appId: '1:625130573340:web:a4240c21e6ac20be6b99d9',
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
