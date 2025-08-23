import { db } from "./firebase-config.js"; // NEU: `db` importieren
import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";

// Formular-Elemente abrufen
const form = document.getElementById('event-form');
const messageDiv = document.getElementById('message');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Eingabewerte abrufen
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const opponent = document.getElementById('opponent').value;
    const location = document.getElementById('location').value;

    try {
        // Daten in der 'termine' Sammlung in Firestore speichern
        await addDoc(collection(db, "termine"), {
            date: date,
            time: time,
            opponent: opponent,
            location: location,
            timestamp: serverTimestamp()
        });

        messageDiv.textContent = 'Termin erfolgreich gespeichert!';
        messageDiv.style.color = 'green';
        form.reset();
        
    } catch (e) {
        console.error("Fehler beim Hinzufügen des Dokuments: ", e);
        messageDiv.textContent = 'Fehler beim Speichern des Termins.';
        messageDiv.style.color = 'red';
    }
});