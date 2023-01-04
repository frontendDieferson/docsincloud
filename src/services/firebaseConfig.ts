import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import  "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDjFuINTkGc3cU4pmpRxAhMM28LuCzG8mc",
  authDomain: "docsincloud-b9d8c.firebaseapp.com",
  projectId: "docsincloud-b9d8c",
  storageBucket: "docsincloud-b9d8c.appspot.com",
  messagingSenderId: "258543407612",
  appId: "1:258543407612:web:2240473f7ea294f6286279",
  measurementId: "G-QMBV92YEJK",
};

firebase.initializeApp(firebaseConfig);
export default firebase;
