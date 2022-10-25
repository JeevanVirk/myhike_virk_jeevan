//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyDWrBZMNi3MEv4ZiyEcLSG3IbhXbmDFiZY",

  authDomain: "comp1800-2022-32bd2.firebaseapp.com",

  projectId: "comp1800-2022-32bd2",

  storageBucket: "comp1800-2022-32bd2.appspot.com",

  messagingSenderId: "1078757206",

  appId: "1:1078757206:web:a4fb61984ecbc6c5e6b8f7",

  measurementId: "G-0HYLF2BT18"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();