let fotonummer, fotobreedte, aantalfotos, fotoslider;

function setupFotoslider() {

    //alert("Ja, het script werkt!");
    fotonummer = 0;
    fotobreedte = 400; // Pas dit aan naar de breedte van jouw foto's
    fotoslider = document.getElementById("fotoslider")
    let volgendeKnop = document.getElementById("volgende-btn")
    let vorigeKnop = document.getElementById("vorige-btn")
    aantalfotos = fotoslider.children.length;
    vorigeKnop.addEventListener('click', vorigefoto)
    volgendeKnop.addEventListener('click', volgendefoto)
}

function volgendefoto() {
    //alert('volgende geklikt)
    // De variabele fotonummer met 1 ophogen (bij de eerste foto is fotonummer 0)
    // Bij de tweede foto wordt deze dus 1, bij de derde foto 2 enzovoorts.
    fotonummer += 1;
    // Als fotonummer gelijk is aan het aantal foto's willen we weer terug naar de eerste foto
    if (fotonummer == aantalfotos) {
        fotonummer = 0;
    }
    // Dit is de berekening die ik hierboven heb uitgelegd
    // Bereken aan de hand van het fotonummer hoe veel de slider naar links moet in de viewport
    let afstandNaarLinks = -1 * (fotonummer * fotobreedte)
    // Zet het style attribuut van de fotoslider (vergeet de px niet)
    fotoslider.style.left = afstandNaarLinks + "px";
}
function vorigefoto() {
    //alert('vorige geklikt')
    // De variabele fotonummer met 1 ophogen (bij de eerste foto is fotonummer 0)
    // Bij de tweede foto wordt deze dus 1, bij de derde foto 2 enzovoorts.
    fotonummer -= 1;

    if (fotonummer < 0) {
        fotonummer = aantalfotos - 1;
    }
    // Dit is de berekening die ik hierboven heb uitgelegd
    // Bereken aan de hand van het fotonummer hoe veel de slider naar links moet in de viewport
    let afstandNaarRechts = -1 * (fotonummer * fotobreedte)
    // Zet het style attribuut van de fotoslider (vergeet de px niet)
    fotoslider.style.right = afstandNaarRechts + "px";
}

window.addEventListener('DOMContentLoaded', setupFotoslider)