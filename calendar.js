// Importiere die benötigten Firestore-Funktionen
import { collection, getDocs, orderBy, query } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";
import { db } from "./firebase-config.js";

const calendarContainer = document.querySelector('.calendar-container');

async function loadCalendarEvents() {
    // Leere den Container, bevor neue Termine geladen werden
    calendarContainer.innerHTML = '';
    
    // Eine Abfrage erstellen, die Termine nach Datum sortiert
    const q = query(collection(db, "termine"), orderBy("date"));
    
    // Die Daten aus der Datenbank abrufen
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
        calendarContainer.innerHTML = '<p>Es sind keine Termine vorhanden.</p>';
        return;
    }
    
    // Termine durchgehen und für jeden ein HTML-Element erstellen
    querySnapshot.forEach((doc) => {
        const eventData = doc.data();
        const eventDate = new Date(eventData.date);
        
        // Deutsche Wochentage und Monate für die Anzeige
        const options = { weekday: 'long', day: 'numeric', month: 'long' };
        const formattedDate = eventDate.toLocaleDateString('de-DE', options);

        const eventDiv = document.createElement('div');
        eventDiv.classList.add('calendar-day');
        eventDiv.innerHTML = `
            <h3>${formattedDate}</h3>
            <div class="calendar-event">
                <strong>${eventData.opponent}</strong><br>
                <strong>Zeit:</strong> ${eventData.time} Uhr<br>
                <strong>Ort:</strong> ${eventData.location}
            </div>
        `;
        calendarContainer.appendChild(eventDiv);
    });
}

// Skript ausführen, sobald die Seite geladen ist
loadCalendarEvents();