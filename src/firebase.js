import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA6nC1Hrc09k7D5cl4bz4TevUVB9Gh_Lao",
  authDomain: "hotstar-disney-clone.firebaseapp.com",
  projectId: "hotstar-disney-clone",
  storageBucket: "hotstar-disney-clone.appspot.com",
  messagingSenderId: "91581125759",
  appId: "1:91581125759:web:899396f6bcb219f7fb5b4a",
  measurementId: "G-K8M0FZG5QB",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
