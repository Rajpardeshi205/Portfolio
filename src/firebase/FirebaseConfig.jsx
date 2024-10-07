import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAOYCfU_wbtAsgBM5gX4YyfYS4tl6xW5FU",
  authDomain: "portfolio-bc990.firebaseapp.com",
  projectId: "portfolio-bc990",
  storageBucket: "portfolio-bc990.appspot.com",
  messagingSenderId: "1002590553684",
  appId: "1:1002590553684:web:cc1d1b4895e87029a80fc1",
};

const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { fireDB, auth, db };
