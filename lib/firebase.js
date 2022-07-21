import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyB64C6vyRwABqxF7NomZCIUPPyu0gOviK0",
    authDomain: "teslaclone2.firebaseapp.com",
    projectId: "teslaclone2",
    storageBucket: "teslaclone2.appspot.com",
    messagingSenderId: "1093534832788",
    appId: "1:1093534832788:web:46ea1cfb9f49966b803c81",
    measurementId: "G-M3KSPJMPM0"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;