
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCTRom5QrMwursGKv75ykTEvFeKIc7EG2E",
    authDomain: "hackathoncrea-468c4.firebaseapp.com",
    projectId: "hackathoncrea-468c4",
    storageBucket: "hackathoncrea-468c4.appspot.com",
    messagingSenderId: "1088198864907",
    appId: "1:1088198864907:web:2c2bdd23be17ac59c3d70e",
    measurementId: "G-G5R3QZE37G"
  };

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider(); // Nova importação do GoogleAuthProvider
export default app;