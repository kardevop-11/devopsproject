import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAa4hM_u8ndfOI8Dc5TBvOT4xgN8MBwWEg",
  authDomain: "playfix-devops1.firebaseapp.com",
  projectId: "playfix-devops1",
  storageBucket: "playfix-devops1.firebasestorage.app",
  messagingSenderId: "762201966595",
  appId: "1:762201966595:web:bc5b0c1ff7f6eb796f2636",
  measurementId: "G-FSZ1EFVVRL",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(FirebaseApp);
const analytics = getAnalytics(FirebaseApp);