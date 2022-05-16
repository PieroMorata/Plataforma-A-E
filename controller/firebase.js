// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

/*import { 
  //auth,
  firebase
} from "https://www.gstatic.com/firebasejs/ui/6.0.1/firebase-ui-auth.js";
*/
//import "https://www.gstatic.com/firebasejs/ui/6.0.1/firebase-ui-auth.js";

import {
  getFirestore,
  collection,
  getDocs,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

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
export const firebaseApp = initializeApp(firebaseConfig);
export const analytics = getAnalytics(firebaseApp);

// Productos a utilizar
export const db = getFirestore(firebaseApp);
var ui = new firebaseui.auth.AuthUI(firebaseApp);
export const ui_auth = auth(firebaseApp);

ui.start('#firebaseui-auth-container', {
    signInOptions: [
      // List of OAuth providers supported.
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
    // Other config options...
  });

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
