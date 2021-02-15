import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDlkwOtcb02a65CTw6jxsOFBBTviQ8HYzE",
    authDomain: "picture-app-684f6.firebaseapp.com",
    projectId: "picture-app-684f6",
    storageBucket: "picture-app-684f6.appspot.com",
    messagingSenderId: "6712193258",
    appId: "1:6712193258:web:28323a1bba734e81fe6793"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, storage, provider }