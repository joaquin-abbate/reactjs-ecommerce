import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBAQ_yMR--k_NDDugzquPgcwBx2yLC1nfk",
  authDomain: "shopstar-2ebbd.firebaseapp.com",
  projectId: "shopstar-2ebbd",
  storageBucket: "shopstar-2ebbd.appspot.com",
  messagingSenderId: "293206559234",
  appId: "1:293206559234:web:f415d72a7705e616a6b51b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);

export default app;
