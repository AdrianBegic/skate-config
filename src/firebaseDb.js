import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAP1AG9ew0g_S60cuXMXNXZDBpYwckoHS0",
  
  authDomain: "skateboard-config.firebaseapp.com",

  projectId: "skateboard-config",

  storageBucket: "skateboard-config.appspot.com",

  messagingSenderId: "577855410890",

  appId: "1:577855410890:web:7eec579dc7829defa25a33",

  measurementId: "G-2D0ZFH2NXT"
}

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();