import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyApKNzSOR5VNvtUSjsH9-17itCsXJ_M_z4",
    authDomain: "messenger-clone-7a4fe.firebaseapp.com",
    databaseURL: "https://messenger-clone-7a4fe.firebaseio.com",
    projectId: "messenger-clone-7a4fe",
    storageBucket: "messenger-clone-7a4fe.appspot.com",
    messagingSenderId: "419264666893",
    appId: "1:419264666893:web:3bacc9968efe41808ae444",
    measurementId: "G-MDXSJQKV93"
});

const db = firebaseApp.firestore();

export default db ;