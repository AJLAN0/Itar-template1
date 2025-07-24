import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBXRFON2Ndqoc7rGzjRSkvfkJ4VVy8fvC4",
    authDomain: "itar-template1.firebaseapp.com",
    projectId: "itar-template1",
    storageBucket: "itar-template1.firebasestorage.app",
    messagingSenderId: "266023086175",
    appId: "1:266023086175:web:51d434437a990960d393ea",
    measurementId: "G-4M281TWTEK"
  };

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);