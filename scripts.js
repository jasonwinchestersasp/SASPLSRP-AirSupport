/*====================================================
  SASP - AIR SUPPORT DIVISION
====================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=========================
      Apparition au scroll
    =========================*/

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {
        threshold: 0.15
    });

    document.querySelectorAll(".card, .about, .stats, .page-title, .page").forEach(el => {

        el.classList.add("hidden");

        observer.observe(el);

    });

    /*=========================
      Recherche des SOP
    =========================*/

    const search = document.getElementById("searchInput");

    if (search) {

        search.addEventListener("keyup", function () {

            const value = this.value.toLowerCase();

            document.querySelectorAll(".card").forEach(card => {

                const texte = card.textContent.toLowerCase();

                card.style.display = texte.includes(value) ? "" : "none";

            });

        });

    }

    /*=========================
      Bouton retour en haut
    =========================*/

    const topButton = document.createElement("button");

    topButton.innerHTML = "↑";

    topButton.className = "top-button";

    document.body.appendChild(topButton);

    topButton.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {

            topButton.classList.add("show-top");

        } else {

            topButton.classList.remove("show-top");

        }

    });

    /*=========================
      Header dynamique
    =========================*/

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 80) {

            header.classList.add("header-scroll");

        } else {

            header.classList.remove("header-scroll");

        }

    });

    /*=========================
      Compteurs animés
    =========================*/

    const counters = document.querySelectorAll(".stat h2");

    counters.forEach(counter => {

        const texte = counter.innerText;

        const nombre = parseInt(texte);

        if (isNaN(nombre)) return;

        let valeur = 0;

        const vitesse = Math.max(10, Math.floor(1500 / nombre));

        const timer = setInterval(() => {

            valeur++;

            counter.innerText = valeur;

            if (valeur >= nombre) {

                clearInterval(timer);

                counter.innerText = texte;

            }

        }, vitesse);

    });

    /*=========================
      Hover cartes
    =========================*/

    document.querySelectorAll(".card").forEach(card => {

        card.addEventListener("mousemove", (e) => {

            const rect = card.getBoundingClientRect();

            const x = e.clientX - rect.left;

            const y = e.clientY - rect.top;

            card.style.background =
                `radial-gradient(circle at ${x}px ${y}px,
                rgba(200,163,75,.15),
                #121820 60%)`;

        });

        card.addEventListener("mouseleave", () => {

            card.style.background = "#121820";

        });

    });

});

/*====================================================
  Console
====================================================*/

console.clear();

console.log("%cSASP AIR SUPPORT DIVISION", "color:#C8A34B;font-size:24px;font-weight:bold;");
console.log("%cDocumentation officielle chargée.", "color:white;");
