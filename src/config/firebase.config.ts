import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAeo177dvPakZ25SWks_DiryEvyu4r9s2I",
  authDomain: "capstone-users.firebaseapp.com",
  projectId: "capstone-users",
  storageBucket: "capstone-users.appspot.com",
  messagingSenderId: "418480254942",
  appId: "1:418480254942:web:1854fb1f01e97a9ccd774f"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);