import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.configs";

const  initializeAunthtication =() =>{

   return initializeApp(firebaseConfig);
}

export default initializeAunthtication;