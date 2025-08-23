// Importiere die benötigten Firebase-Funktionen
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // NEU: Firestore importieren

// Deine Firebase-Web-App-Konfiguration
const firebaseConfig = {
    apiKey: "AIzaSyB_IoSZ3qjx7vy59MZiPNp1F5_6a9OEYYI",
    authDomain: "tvw-app-test.firebaseapp.com",
    projectId: "tvw-app-test",
    storageBucket: "tvw-app-test.firebasestorage.app",
    messagingSenderId: "114103141435",
    appId: "1:114103141435:web:824e76f9109218a1ef881e",
    measurementId: "G-G1E8WRYGG9"
};

// Initialisiere Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Exportiere die Firestore-Datenbank
export const db = getFirestore(app);