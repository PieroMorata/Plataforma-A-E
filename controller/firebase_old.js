import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

//Inicializar Firebase
const firebaseApp = initializeApp({
  apiKey: "AIzaSyBb8okuGxQx_s33_Ue_RteDzGcyGXeHa-4",
  authDomain: "plataformaa-etest.firebaseapp.com",
  projectId: "plataformaa-etest",
  storageBucket: "plataformaa-etest.appspot.com",
  messagingSenderId: "892500764951",
  appId: "1:892500764951:web:29690fd500702db71def52",
  measurementId: "G-Q30PRLWL5J"
});

// Initialize Firebase
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

auth.languageCode = "es";
export const provider = new fb_auth.GoogleAuthProvider();

//Detectar estado de autenticación
onAuthStateChanged(auth, user => {
  if(user=!null){
    console.log("Sesión iniciada");
  }else{
    console.log("No hay usuario");
  }
});


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
