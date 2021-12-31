import firebase from "firebase/compat/app";
import "firebase/database";                                


const firebaseConfig = {
  apiKey: "AIzaSyAl2F2TJHnybKJ4x-pb6PDh7d5yw1sSWGE",
  authDomain: "contact-form-2ce28.firebaseapp.com",
  databaseURL: "https://contact-form-2ce28-default-rtdb.firebaseio.com",
  projectId: "contact-form-2ce28",
  storageBucket: "contact-form-2ce28.appspot.com",
  messagingSenderId: "352846305820",
  appId: "1:352846305820:web:542260c9c0e52501021dd9"
};

const fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();