/**Ne sers qu'à ajouter des évènements aléatoires pas vraiments importants*/
document.querySelectorAll('.superlink').forEach(function(link) {
    link.addEventListener("click", function() {

    let r = Math.random(); /**Génère aléatoirement entre 0 et 0.999999999999999... */

    if (r < 0.1) {
        // Changer le fond en tv.gif
        document.body.style.backgroundImage = "url('tv.gif')";
        return;
    }
    });
});

document.getElementById("gaster-img").addEventListener("click", function () {

    let r = Math.random(); /**Génère aléatoirement entre 0 et 0.999999999999999... */

    if (r < 0.08) {
        // Changer le fond en tv.gif
        document.body.style.backgroundImage = "url('tv.gif')";
        // Ouvrir le lien
        window.open("https://undertale.fandom.com/fr/wiki/W._D._Gaster", "_blank");
        return;
    }

    if (r < 0.20) {
        window.open("https://undertale.fandom.com/wiki/Sans", "_blank");
        return;
    }

    if (r < 0.35) {
        window.open("https://undertale.fandom.com/fr/wiki/Papyrus", "_blank");
        return;
    }

    if (r < 0.53) {
        window.open("https://fr.wikipedia.org/wiki/Undertale", "_blank");
        return;
    }

    if (r < 0.71) {
        window.open("https://fr.wikipedia.org/wiki/Deltarune", "_blank");
        return;
    }

    if (r < 0.91) {
        window.open("Mystère.txt", "_blank");
        return;
    }

    window.open("Gaster.png", "_blank");
});
