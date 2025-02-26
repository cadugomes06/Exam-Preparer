import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

  const firebaseConfig = {
    apiKey: import.meta.env.VITE_SECRET_API_KEY,
    authDomain: "exam-preparer01.firebaseapp.com",
    projectId: "exam-preparer01",
    storageBucket: "exam-preparer01.appspot.com",
    messagingSenderId: "491914924517",
    appId: import.meta.VITE_SECRETE_APP_ID,
    measurementId: "G-V3CF3RQMDB"
  };
  
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
