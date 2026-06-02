/**Ne sers qu'à ajouter des évènements aléatoires pas vraiments importants*/

document.getElementById("gaster-img").addEventListener("click", function () {

    let r = Math.random(); /**Génère aléatoirement entre 0 et 0.999999999999999... */

    if (r < 0.001) {
        window.open("https://undertale.fandom.com/fr/wiki/W._D._Gaster", "_blank");
        return;
    }

    if (r < 0.02) {
        window.open("https://undertale.fandom.com/wiki/Sans", "_blank");
        return;
    }

    if (r < 0.06) {
        window.open("https://undertale.fandom.com/fr/wiki/Papyrus", "_blank");
        return;
    }

    if (r < 0.11) {
        window.open("https://undertale.fandom.com/fr/wiki/Couveneige", "_blank");
        return;
    }

    if (r < 0.24) {
        window.open("https://fr.wikipedia.org/wiki/Undertale", "_blank");
        return;
    }

    if (r < 0.37) {
        window.open("https://fr.wikipedia.org/wiki/Deltarune", "_blank");
        return;
    }
    
    if (r < 0.71) {
        window.open("Mystère.txt", "_blank");
        return;
    }

    window.open("Gaster.png", "_blank");
});
