import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration

 const firebaseConfig = {
  apiKey: "AIzaSyB5Y_HL4CZ5Q2uMQTotDnACm5N8JNzpscY",
  authDomain: "todolist-f6b35.firebaseapp.com",
  projectId: "todolist-f6b35",
  storageBucket: "todolist-f6b35.appspot.com",
  messagingSenderId: "770189740557",
  appId: "1:770189740557:web:3d0a386e01e95316892344"

};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };