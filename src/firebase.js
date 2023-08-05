
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBesJ436jaMt4CXYrVIUS4xu7lVdwkzsNE",
    authDomain: "hackaton-crea.firebaseapp.com",
    projectId: "hackaton-crea",
    storageBucket: "hackaton-crea.appspot.com",
    messagingSenderId: "450386955899",
    appId: "1:450386955899:web:04cef9acdaa01bfaf59cde",
    measurementId: "G-JKM586C24D"
};



const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const googleProvider = new GoogleAuthProvider(); // Nova importação do GoogleAuthProvider
export default app;