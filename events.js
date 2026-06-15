/**Sers pour le menu burger*/
document.addEventListener('click', function(event) {
    const toggle = document.getElementById('menu-toggle');
    const burger = document.querySelector('.burger');
    const menu = document.getElementById('menu');

    const clickOnBurger =
        burger.contains(event.target) ||
        event.target === toggle;

    if (
        toggle.checked &&
        !clickOnBurger &&
        !menu.contains(event.target)
    ) {
        toggle.checked = false;
    }
});





/**Ne sers qu'à ajouter des easters eggs*/
document.querySelectorAll('.superlink').forEach(function(link) {
    link.addEventListener("click", function() {

    let r = Math.random(); /**Génère aléatoirement entre 0 et 0.999999999999999... */

    if (r < 0.08) {
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

    if (r < 0.80) {
        window.open("Mystère.txt", "_blank");
        return;
    }



    const img = document.getElementById("gaster-img");

    let glitchInterval = null;

    // Effet sur l'image
    img.style.filter = "contrast(2) saturate(0) hue-rotate(180deg)";
    img.style.transform = "scale(1.1) rotate(2deg)";

    // Effet global
    document.documentElement.style.filter = "invert(1)";

    // 🔧 RESET UNIQUE (accessible partout)
    function reset() {
        clearInterval(glitchInterval);

        img.style.filter = "none";
        img.style.transform = "none";

        document.documentElement.style.filter = "none";
        document.documentElement.style.transform = "none";
    }

    // 🔥 GLITCH JS ACTIF
    glitchInterval = setInterval(() => {
        const x = (Math.random() - 0.5) * 8;
        const y = (Math.random() - 0.5) * 8;
        const hue = Math.random() * 360;

        document.documentElement.style.transform = `translate(${x}px, ${y}px)`;
        document.documentElement.style.filter = `invert(1) hue-rotate(${hue}deg) contrast(1.5)`;
    }, 40);

    // ---- STEPS ----

    const step1 = confirm("👁️ Une présence t’observe...");
    if (!step1) {
        alert("...");
        console.log("...");
        reset();
        return;
    }

    const step2 = confirm("👁️ Continue à cliquer...");
    if (!step2) {
        alert("👁️ Tu as reculé...");
        console.log("👁️ Si tôt...");
        reset();
        return;
    }

    const step3 = confirm("👁️ Tu y es presque...");
    if (!step3) {
        alert("👁️ Presque... mais non.");
        console.log("👁️ Quelle déception...");
        reset();
        return;
    }

    const step4 = confirm("👁️ N'aie pas peur...");
    if (!step4) {
        alert("👁️ Trop tard pour fuir...");
        console.log("👁️ En plein milieu du chemin...");

        reset();

        // 🔥 AJOUT : petit tremblement même après reset
        let shake = setInterval(() => {
            const x = (Math.random() - 0.5) * 20;
            const y = (Math.random() - 0.5) * 20;
            document.documentElement.style.transform = `translate(${x}px, ${y}px)`;
        }, 30);

        setTimeout(() => {
            clearInterval(shake);
            document.documentElement.style.transform = "none";
            alert("👁️ Je t'ai eu...")
        }, 3100);
        return;
    }



    // arrêt automatique
    setTimeout(() => {
        reset();
        alert("❄︎◆︎ ♏︎⬧︎ ❑︎◆︎♏︎●︎❑︎◆︎🕯︎◆︎■︎ ♎︎🕯︎♋︎⬧︎⬧︎♏︎⌘︎ ♍︎◆︎❒︎♓︎♏︎◆︎⌧︎📪︎ ■︎🕯︎♏︎⬧︎⧫︎📫︎♍︎♏︎ ◻︎♋︎⬧︎ ✍︎")
    }, 4000);
});
