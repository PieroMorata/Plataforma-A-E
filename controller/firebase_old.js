// Import the functions you need from the SDKs you need
// <script src="../controller/firebase.js" type="module"></script>

import * as firebase from ".././firebase-sdk/firebase-app.js";
import * as fb_analytics from ".././firebase-sdk/firebase-analytics.js";
import * as fb_auth from ".././firebase-sdk/firebase-auth.js";
import * as fb_firestore from ".././firebase-sdk/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Configuración base de la App
const firebaseConfig = {
  apiKey: "AIzaSyBb8okuGxQx_s33_Ue_RteDzGcyGXeHa-4",
  authDomain: "plataformaa-etest.firebaseapp.com",
  projectId: "plataformaa-etest",
  storageBucket: "plataformaa-etest.appspot.com",
  messagingSenderId: "892500764951",
  appId: "1:892500764951:web:29690fd500702db71def52",
  measurementId: "G-Q30PRLWL5J"
};

// Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const analytics = fb_analytics.getAnalytics(firebaseApp);

// Productos a utilizar
export const db = fb_firestore.getFirestore(firebaseApp);
export const auth = fb_auth.getAuth();
auth.languageCode = "es";
export const provider = new fb_auth.GoogleAuthProvider();

//Autenticación
fb_auth.signInWithRedirect(auth, provider);

/**
 * Parámetros para nueva tarea
 * @param {string} title the title of the Task
 * @param {string} description the description of the Task
 */

export const saveTask = (title, description) =>
  addDoc(collection(db, "tasks"), { title, description });

export const onGetTasks = (callback) =>
  onSnapshot(collection(db, "tasks"), callback);

/**
 *
 * @param {string} id Task ID
 */

export const deleteTask = (id) => deleteDoc(doc(db, "tasks", id));

export const getTask = (id) => getDoc(doc(db, "tasks", id));

export const updateTask = (id, newFields) =>
  updateDoc(doc(db, "tasks", id), newFields);

export const getTasks = () => getDocs(collection(db, "tasks"));
