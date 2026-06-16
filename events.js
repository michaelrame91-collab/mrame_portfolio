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



const img = document.getElementById("gaster-img");

if (img) {

    img.addEventListener("click", function () {

        let r = Math.random();

        if (r < 0.08) {
            document.body.style.backgroundImage = "url('tv.gif')";
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

        const root = document.documentElement;

        let glitchInterval = null;
        let spinInterval = null;
        let shakeInterval = null;

        function reset() {

            clearInterval(glitchInterval);
            clearInterval(spinInterval);
            clearInterval(shakeInterval);

            root.style.transition = "none";
            root.style.transform = "none";
            root.style.filter = "none";

            img.style.filter = "none";
            img.style.transform = "none";

            requestAnimationFrame(() => {
                root.style.transform = "none";
            });
        }

        function clearVisualEffects() {
            clearInterval(glitchInterval);

            root.style.transform = "none";
            root.style.filter = "none";
        }

        // Effet initial
        img.style.filter = "contrast(2) saturate(0) hue-rotate(180deg)";
        img.style.transform = "scale(1.1) rotate(2deg)";
        root.style.filter = "invert(1)";

        glitchInterval = setInterval(() => {

            const x = (Math.random() - 0.5) * 8;
            const y = (Math.random() - 0.5) * 8;
            const hue = Math.random() * 360;

            root.style.transform = `translate(${x}px, ${y}px)`;
            root.style.filter =
                `invert(1) hue-rotate(${hue}deg) contrast(1.5)`;

        }, 40);

        const step1 = confirm("👁️ Une présence t’observe...");

        if (!step1) {
            alert("...");
            console.log("...")
            reset();
            return;
        }

        clearVisualEffects();

        const step2 = confirm("👁️ Continue à cliquer...");

        if (!step2) {

            alert("👁️ Tu as reculé...");
            console.log("👁️ Tu aurais pu aller plus loin...")

            root.style.filter = "none";
            root.style.transition = "transform 0.3s ease";
            root.style.transformOrigin = "center";
            root.style.transform = "rotate(180deg)";

            setTimeout(() => {

                root.style.transition = "none";
                root.style.transform = "none";

                alert("👁️ Cela me fait presque tourner la tête...");
                reset();

            }, 3000);

            return;
        }

        clearVisualEffects();

        const step3 = confirm("👁️ Tu y es presque...");

        if (!step3) {

            const style = document.createElement("style");

            style.textContent = `
                @font-face {
                    font-family: "WingdingsCustom";
                    src: url("Fonts/wingding.ttf");
                }

                * {
                    font-family: "WingdingsCustom" !important;
                    font-size: 0.94em !important;
                    line-height: 1.4 !important;
                }
            `;

            document.head.appendChild(style);

            alert("👁️ Presque... mais non.");
            console.log("👁️ J'en suis un peu déçue que tu aies abandonné...")

            setTimeout(() => {
                style.remove();
            }, 4000);

            reset();
            return;
        }

        clearVisualEffects();

        const step4 = confirm("👁️ N'aie pas peur...");

        if (!step4) {

            alert("👁️ Trop tard pour fuir...");

            shakeInterval = setInterval(() => {

                const x = (Math.random() - 0.5) * 8;
                const y = (Math.random() - 0.5) * 8;

                root.style.transform = `translate(${x}px, ${y}px)`;
                root.style.filter = "invert(1)";

            }, 30);

            setTimeout(() => {

                clearInterval(shakeInterval);

                root.style.transform = "none";
                root.style.filter = "none";

                alert("👁️ Je t'ai eu...");
                console.log("👁️ Amusant, n'est-ce pas ?")

                reset();

            }, 3100);

            return;
        }

        // Cas final

        let angle = 0;

        spinInterval = setInterval(() => {

            angle += 1;

            const x = Math.cos(angle * 0.2) * 4;
            const y = Math.sin(angle * 0.2) * 4;

            root.style.transform =
                `translate(${x}px, ${y}px) rotate(${angle}deg)`;

        }, 16);

        setTimeout(() => {

            clearInterval(spinInterval);

            reset();

            alert(
                "❄︎◆︎ ♏︎⬧︎ ❑︎◆︎♏︎●︎❑︎◆︎🕯︎◆︎■︎ ♎︎🕯︎♋︎⬧︎⬧︎♏︎⌘︎ ♍︎◆︎❒︎♓︎♏︎◆︎⌧︎📪︎ ■︎🕯︎♏︎⬧︎⧫︎📫︎♍︎♏︎ ◻︎♋︎⬧︎ ✍︎"
            );

        }, 4000);

    });

}