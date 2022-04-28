import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const app = firebase.initializeApp({
    apiKey: "AIzaSyDiBucllLQkhBaJz9_CTUBa50j_vMiKWoM",
    authDomain: "auth-backend-node.firebaseapp.com",
    projectId: "auth-backend-node",
    storageBucket: "auth-backend-node.appspot.com",
    messagingSenderId: "715223083043",
    appId: "1:715223083043:web:d0918f4085021afe946996"
})

export const auth = firebase.auth()


export default app;