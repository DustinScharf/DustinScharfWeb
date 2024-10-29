document.getElementById('sidebar').innerHTML = `
    <div style="height: 100vh; overflow-y: auto; display: flex; flex-direction: column; justify-content: space-between; padding: 0;">
        <ul style="list-style-type: none; padding: 0; margin-bottom: 60px;">
            <li><a href="index.html" style="font-weight: bold; text-decoration: none;">Start</a></li>
            <li style="height: 20px;"></li> <!-- Platzhalter -->

            <li><a href="projekt1.html" style="display: flex; flex-direction: column; align-items: center; padding: 10px; text-decoration: none;">
                <span>Projekt 1</span>
                <small style="color: gray; font-size: 12px; margin-top: 5px;">Interessen Umfrage</small>
            </a></li>

            <li><a href="projekt2.html" style="display: flex; flex-direction: column; align-items: center; padding: 10px; text-decoration: none;">
                <span>Projekt 2</span>
                <small style="color: gray; font-size: 12px; margin-top: 5px;">ChatGPT nutzen</small>
            </a></li>

            <li><a href="projekt3.html" style="display: flex; flex-direction: column; align-items: center; padding: 10px; text-decoration: none;">
                <span>Projekt 3</span>
                <small style="color: gray; font-size: 12px; margin-top: 5px;">Facharbeit schneller schreiben</small>
            </a></li>

            <li><a href="projekt4.html" style="display: flex; flex-direction: column; align-items: center; padding: 10px; text-decoration: none;">
                <span>Projekt 4</span>
                <small style="color: gray; font-size: 12px; margin-top: 5px;">Zeugnisnote berechnen</small>
            </a></li>

            <li><a href="projekt5.html" style="display: flex; flex-direction: column; align-items: center; padding: 10px; text-decoration: none;">
                <span>Projekt 5</span>
                <small style="color: gray; font-size: 12px; margin-top: 5px;">KI easy selbst coden</small>
            </a></li>

            <li style="height: 20px;"></li> <!-- Platzhalter -->
            
            <li><a href="hilfe.html" style="font-weight: bold; text-decoration: none;">Bin am Ende und brauch Hilfe</a></li>
            <li style="height: 20px;"></li> <!-- Platzhalter -->
        </ul>
        
        <!-- Fester Footer-Bereich mit Name, E-Mail, Impressum und Datenschutz -->
        <div style="position: sticky; bottom: 0; background-color: white; padding: 10px 10px 25px; text-align: center;">
            <a href="index.html" style="font-weight: bold; text-decoration: none;">DUSTIN SCHARF</a>
            <br>
            <small style="color: gray; font-size: 12px; text-decoration: none;">dustin.scharf.info@gmail.com</small>
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
