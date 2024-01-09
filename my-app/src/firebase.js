import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAwIJa1yLj0WDO7PBczPdzg-PDOaa9lilM",
    authDomain: "everydaymotivation-31781.firebaseapp.com",
    databaseURL: "https://everydaymotivation-31781-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "everydaymotivation-31781",
    storageBucket: "everydaymotivation-31781.appspot.com",
    messagingSenderId: "473316059085",
    appId: "1:473316059085:web:891f0d931bdfdc25958684",
    measurementId: "G-KGGJSQZKLV"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });