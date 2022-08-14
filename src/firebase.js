
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyDCAddjw0A8fOUJnKW2Xldl3vtR18TxXtQ",
    authDomain: "whatsapp-clone-42bde.firebaseapp.com",
    projectId: "whatsapp-clone-42bde",
    storageBucket: "whatsapp-clone-42bde.appspot.com",
    messagingSenderId: "368334799298",
    appId: "1:368334799298:web:749b2eaa367324510e165b",
    measurementId: "G-14PQ59DSG4"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const  provider = new firebase.auth.GoogleAuthProvider();
 
  export {auth ,provider};
  export default db