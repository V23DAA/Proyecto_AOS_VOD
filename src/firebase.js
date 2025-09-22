import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Iniciar BD
const db = getFirestore(app);
const analytics = getAnalytics(app);
