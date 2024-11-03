document.getElementById('sidebar').innerHTML = `
    <div style="height: 100%; overflow-y: auto; display: flex; flex-direction: column; justify-content: space-between; padding: 0;">
        <ul style="list-style-type: none; padding: 0; margin-bottom: 60px;">
        
            <li><a href="index.html" style="display: flex; flex-direction: column; align-items: center; padding: 10px; text-decoration: none;">
                <span><strong>Startseite</strong></span>
            </a></li>
                                    
            <li><a href="slides.html" style="display: flex; flex-direction: column; align-items: center; padding: 10px; text-decoration: none;">
                <span>Präsentation</span>
                <small style="color: gray; font-size: 12px; margin-top: 5px;">Präsi zum Download</small>
            </a></li>

            <li style="height: 1px; background-color: #ccc; margin: 10px;"></li> <!-- Divider -->
            
            <li><a href="projekt1.html" style="display: flex; flex-direction: column; align-items: center; padding: 10px; text-decoration: none;">
                <span>Projekt 1</span>
                <small style="color: gray; font-size: 12px; margin-top: 5px;">ChatGPT nutzen</small>
            </a></li>

            <li><a href="projekt2.html" style="display: flex; flex-direction: column; align-items: center; padding: 10px; text-decoration: none;">
                <span>Projekt 2</span>
                <small style="color: gray; font-size: 12px; margin-top: 5px;">Facharbeit einfach schreiben</small>
            </a></li>

            <li><a href="projekt3.html" style="display: flex; flex-direction: column; align-items: center; padding: 10px; text-decoration: none;">
                <span>Projekt 3</span>
                <small style="color: gray; font-size: 12px; margin-top: 5px;">Zeugnisnote berechnen</small>
            </a></li>

            <li><a href="projekt4.html" style="display: flex; flex-direction: column; align-items: center; padding: 10px; text-decoration: none;">
                <span>Projekt 4</span>
                <small style="color: gray; font-size: 12px; margin-top: 5px;">KI easy selbst coden</small>
            </a></li>

            <li style="height: 1px; background-color: #ccc; margin: 10px;"></li> <!-- Divider -->
            
            <li><a href="umfrage.html" style="display: flex; flex-direction: column; align-items: center; padding: 10px; text-decoration: none;">
                <span>Umfrage</span>
                <small style="color: gray; font-size: 12px; margin-top: 5px;">Für personalisierte Aufgaben</small>
            </a></li>
            
            <li><a href="feedback.html" style="display: flex; flex-direction: column; align-items: center; padding: 10px; text-decoration: none;">
                <span>Feedback</span>
                <small style="color: gray; font-size: 12px; margin-top: 5px;">Gib mir ein Feedback</small>
            </a></li>
            
            <li style="height: 1px; background-color: #ccc; margin: 10px;"></li> <!-- Divider -->
            
            <li><a href="hilfe.html" style="display: flex; flex-direction: column; align-items: center; padding: 10px; text-decoration: none;">
                <span>Hilfe</span>
                <small style="color: gray; font-size: 12px; margin-top: 5px;">Kontakt und Tipps</small>
            </a></li>
            
        </ul>
        
        <!-- Fester Footer-Bereich mit Name, E-Mail, Impressum und Datenschutz -->
        <div style="position: sticky; bottom: 0; background-color: white; padding: 10px 10px 25px;text-align: center;">
            <a href="index.html" style="font-weight: bold; text-decoration: none;">DUSTIN SCHARF</a>
            <br>
            <small style="color: gray; font-size: 12px; text-decoration: none;">help@dustin-scharf.com</small>
            <div style="display: flex; justify-content: center; gap: 10px; margin-top: 5px;">
                <a href="impressum.html" style="color: gray; font-size: 12px; text-decoration: none;">Impressum</a>
                <a href="datenschutz.html" style="color: gray; font-size: 12px; text-decoration: none;">Datenschutz</a>
            </div>
        </div>
    </div>

    <style>
        /* Verstecke die Scrollleiste */
        #sidebar div::-webkit-scrollbar {
            display: none;
        }
        /* Optional: Für Firefox */
        #sidebar div {
            scrollbar-width: none;
        }
    </style>
`;
