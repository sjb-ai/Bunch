// script.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

// Optional: Export other Firebase modules if needed
export { 
  getFirestore, 
  getAuth 
};

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCPseMZmg-vFfdQdP0TFyJGT_d9MNg48t0",
  authDomain: "bunch-fdb1b.firebaseapp.com",
  projectId: "bunch-fdb1b",
  storageBucket: "bunch-fdb1b.firebasestorage.app",
  messagingSenderId: "97188801759",
  appId: "1:97188801759:web:7098a62e47f200bcb54d6a",
  measurementId: "G-785YEYMQ93"
};

// Initialize app only once
const app = initializeApp(firebaseConfig);

// Export initialized services
export const db = getFirestore(app);
export const auth = getAuth(app);
