// firebase-config.js
// Firebase-Konfiguration
const firebaseConfig = {
    apiKey: "AIzaSyB_IoSZ3qjx7vy59MZiPNp1F5_6a9OEYYI",
    authDomain: "tvw-app-test.firebaseapp.com",
    projectId: "tvw-app-test",
    storageBucket: "tvw-app-test.firebasestorage.app",
    messagingSenderId: "114103141435",
    appId: "1:114103141435:web:824e76f9109218a1ef881e",
    measurementId: "G-G1E8WRYGG9"
};

// Initialisiere Firebase-App
firebase.initializeApp(firebaseConfig);

// Lade Firestore-Datenbank
const db = firebase.firestore();

// Optional: Initialisiere Auth-Modul, falls es benötigt wird
let auth = null;
if (typeof firebase.auth !== 'undefined') {
    auth = firebase.auth();
}