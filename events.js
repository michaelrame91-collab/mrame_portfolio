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





/**Ne sers qu'à ajouter des Easter eggs*/
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


// ================================
// POPUP CUSTOM : MYSTERY MAN
// ================================

const mysteryStyle = document.createElement("style");

mysteryStyle.textContent = `
#mystery-popup {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.75);
    display: none;
    align-items: center;
    justify-content: center;
    z-index: 999999;
    font-family: monospace;
}

#mystery-window {
    background: black;
    color: white;
    border: 2px solid white;
    width: 350px;
    padding: 20px;
    box-shadow: 0 0 20px white;
    text-align: center;
}

#mystery-title {
    font-size: 22px;
    margin-bottom: 20px;
    letter-spacing: 3px;
}

#mystery-message {
    margin-bottom: 25px;
}

.mystery-btn {
    background: black;
    color: white;
    border: 1px solid white;
    padding: 8px 25px;
    margin: 5px;
    cursor: pointer;
    font-family: monospace;
}

.mystery-btn:hover {
    background: white;
    color: black;
}
`;

document.head.appendChild(mysteryStyle);


const mysteryPopup = document.createElement("div");

mysteryPopup.id = "mystery-popup";

mysteryPopup.innerHTML = `
<div id="mystery-window">

    <div id="mystery-title">
        Mystery Man
    </div>

    <div id="mystery-message"></div>

    <button id="mystery-yes" class="mystery-btn">
        Oui
    </button>

    <button id="mystery-no" class="mystery-btn">
        Non
    </button>

</div>
`;

document.body.appendChild(mysteryPopup);


function mysteryConfirm(text, yesText = "Continuer", noText = "Refuser") {

    return new Promise(resolve => {

        const message =
            document.getElementById("mystery-message");

        const yes =
            document.getElementById("mystery-yes");

        const no =
            document.getElementById("mystery-no");


        message.textContent = text;

        yes.textContent = yesText;
        no.textContent = noText;

        yes.style.display = "inline-block";
        no.style.display = "inline-block";

        mysteryPopup.style.display = "flex";


        yes.onclick = () => {

            mysteryPopup.style.display = "none";
            resolve(true);

        };


        no.onclick = () => {

            mysteryPopup.style.display = "none";
            resolve(false);

        };

    });

}



function mysteryAlert(text) {

    return new Promise(resolve => {

        const message =
            document.getElementById("mystery-message");

        const yes =
            document.getElementById("mystery-yes");

        const no =
            document.getElementById("mystery-no");


        message.textContent = text;

        yes.textContent = "Suivant";

        yes.style.display = "inline-block";
        no.style.display = "none";


        mysteryPopup.style.display = "flex";


        yes.onclick = () => {

            mysteryPopup.style.display = "none";
            yes.textContent = "Oui";

            resolve();

        };

    });

}

const img = document.getElementById("gaster-img");

if (img) {

    img.addEventListener("click", async function () {

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
                `invert(1)`;

        }, 40);

        const step1 = await mysteryConfirm(
            `👁️ Une présence t’observe...`,
            "L'accepter",
            "Reculer"
        );

        if (!step1) {
            reset();
            function mysteryClockAlert() {

                return new Promise(resolve => {

                    const message =
                        document.getElementById("mystery-message");

                    const yes =
                        document.getElementById("mystery-yes");

                    const no =
                        document.getElementById("mystery-no");


                    function updateClock() {

                        message.textContent =
                            `👁️ Il est ${new Date().toLocaleTimeString([], {
                                hour: "2-digit",
                                minute: "2-digit",
                                second: "2-digit"
                            })} à l'endroit où tu te trouves...`;

                    }


                    updateClock();

                    const clockInterval = setInterval(updateClock, 100);


                    yes.textContent = "Suivant";

                    yes.style.display = "inline-block";
                    no.style.display = "none";


                    mysteryPopup.style.display = "flex";


                    yes.onclick = () => {

                        clearInterval(clockInterval);

                        mysteryPopup.style.display = "none";
                        yes.textContent = "Oui";

                        resolve();

                    };

                });

            }
            await mysteryClockAlert();
            console.log("...")
            return;
        }

        clearVisualEffects();

        const step2 = await mysteryConfirm(`👁️ Continue à cliquer...`);

        if (!step2) {

            await mysteryAlert(`👁️ Tu as \"tourné\" les talons...`);
            console.log("👁️ Tu aurais pu aller plus loin...")

            root.style.filter = "none";
            root.style.transition = "transform 0.3s ease";
            root.style.transformOrigin = "center";
            root.style.transform = "rotate(180deg)";

            setTimeout(async () => {

                root.style.transition = "none";
                root.style.transform = "none";

                await mysteryAlert(`👁️ Cela me fait presque tourner la tête...`);
                reset();

            }, 3000);

            return;
        }

        clearVisualEffects();

        const step3 = await mysteryConfirm(`👁️ Tu y es presque...`);

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

            await mysteryAlert(`👁️ Presque... mais non.`);
            console.log("👁️ J'en suis un peu déçue que tu aies abandonné...")

            setTimeout(async () => {
                style.remove();
            }, 3000);

            reset();
            return;
        }

        clearVisualEffects();

        const step4 = await mysteryConfirm(`👁️ N'aie pas peur...`);

        if (!step4) {

            await mysteryAlert(`👁️ Trop tard pour fuir...`);

            shakeInterval = setInterval(() => {

                const x = (Math.random() - 0.5) * 13;
                const y = (Math.random() - 0.5) * 13;

                root.style.transform = `translate(${x}px, ${y}px)`;
                root.style.filter = "invert(1)";

            }, 30);

            setTimeout(async () => {

                clearInterval(shakeInterval);

                root.style.transform = "none";
                root.style.filter = "none";

                await mysteryAlert(`👁️ Je t'ai eu...`, `Sortir`);
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

        setTimeout(async () => {

            clearInterval(spinInterval);

            reset();

            function mysteryAlert(text) {
                return new Promise(resolve => {

                    const message =
                        document.getElementById("mystery-message");
                    const yes =
                        document.getElementById("mystery-yes");
                    const no =
                        document.getElementById("mystery-no");


                    // Chargement de Wingdings
                    const style = document.createElement("style");

                    style.textContent = `
                        @font-face {
                            font-family: "WingdingsCustom";
                            src: url("Fonts/wingding.ttf") format("truetype");
                        }

                        .wingding-mode {
                            font-family: "WingdingsCustom" !important;
                        }
                    `;

                    document.head.appendChild(style);


                    // Application de Wingdings uniquement au message
                    message.classList.add("wingding-mode");

                    message.textContent = text;


                    yes.textContent = "Suivant";
                    yes.style.display = "inline-block";
                    no.style.display = "none";


                    mysteryPopup.style.display = "flex";


                    yes.onclick = () => {

                        mysteryPopup.style.display = "none";

                        message.classList.remove("wingding-mode");

                        style.remove();

                        yes.textContent = "Oui";

                        resolve();

                    };

                });

            }

            // Utilisation
            await mysteryAlert(
                "Tu es quelqu'un d'assez curieux, n'est-ce pas ?"
            );

        }, 4000);

    });

}