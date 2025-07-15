
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDP1dqrYUrPwvUPJMyBM7xpL4bOPP4c6ZI",
  authDomain: "lusionbeatz.firebaseapp.com",
  projectId: "lusionbeatz",
  storageBucket: "lusionbeatz.firebasestorage.app",
  messagingSenderId: "381803620622",
  appId: "1:381803620622:web:1833d8066dcf75a5f80f5f",
  measurementId: "G-JXH5KCP33Q"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
