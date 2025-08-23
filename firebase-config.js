// Firebase-Konfiguration
var firebaseConfig = {
    apiKey: "AIzaSyB_IoSZ3qjx7vy59MZiPNp1F5_6a9OEYYI",
    authDomain: "tvw-app-test.firebaseapp.com",
    projectId: "tvw-app-test",
    storageBucket: "tvw-app-test.firebasestorage.app",
    messagingSenderId: "114103141435",
    appId: "1:114103141435:web:824e76f9109218a1ef881e",
    measurementId: "G-G1E8WRYGG9"
};

// Firebase-App initialisieren
firebase.initializeApp(firebaseConfig);

// Datenbank und Authentifizierung
var db = firebase.firestore();
var auth = firebase.auth();