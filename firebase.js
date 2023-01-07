import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCAjSDz-19gJeMaDKASKV1Z3LcCtoJK1jw",
    authDomain: "nextjs-medium-clone.firebaseapp.com",
    projectId: "nextjs-medium-clone",
    storageBucket: "nextjs-medium-clone.appspot.com",
    messagingSenderId: "264224863255",
    appId: "1:264224863255:web:df53cc2a857c2b716b9852"
};

const app = initializeApp(firebaseConfig);
const auth  = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db }