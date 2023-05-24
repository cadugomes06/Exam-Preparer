import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
  
  const firebaseConfig = {
    apiKey: 'AIzaSyDCjIjWpJocLdoL63lCEx2vWhTKtrQzlns',
    authDomain: "exam-preparer01.firebaseapp.com",
    projectId: "exam-preparer01",
    storageBucket: "exam-preparer01.appspot.com",
    messagingSenderId: "491914924517",
    appId: "1:491914924517:web:84712ab4ab012fe6cb9f0c",
    measurementId: "G-V3CF3RQMDB"
  };
  
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
