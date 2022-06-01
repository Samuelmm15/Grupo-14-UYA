
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDX5udFNtGuuFL6IB68JesXSaZX_Oc0OAI",
  authDomain: "uya-grupo14.firebaseapp.com",
  databaseURL: "https://uya-grupo14-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "uya-grupo14",
  storageBucket: "uya-grupo14.appspot.com",
  messagingSenderId: "838191518369",
  appId: "1:838191518369:web:e0f035f02b029b7b0ed6e0",
  measurementId: "G-2FCQH5EGGE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

export const guardarDatos = (datos) => {
    addDoc(collection(db, 'task'), {nombre: datos.nombre, 
        email: datos.email, año: datos.año, dni: datos.dni,
        metodo_pago: datos.metodo_pago, cuenta: datos.cuenta,
        contraseña: datos.contraseña})
}