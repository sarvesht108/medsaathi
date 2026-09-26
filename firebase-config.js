import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyD5TNqVUZO2JtrX5TDKhIztbN0JxHWWRLs",
  authDomain: "medsaathi-223a0.firebaseapp.com",
  projectId: "medsaathi-223a0",
  storageBucket: "medsaathi-223a0.firebasestorage.app",
  messagingSenderId: "392812235298",
  appId: "1:392812235298:web:625b44f363d2fbff2d987b",
  measurementId: "G-37M2KNM7TS"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db, onAuthStateChanged };
