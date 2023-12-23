// Fonction pour ajuster la position du bouton de fermeture
function adjustCloseButtonPosition() {
    var dropdownMenu = document.getElementById("dropdownMenu");
    var closeButton = document.querySelector('.close-btn');
    if (dropdownMenu && dropdownMenu.offsetHeight && dropdownMenu.style.display !== 'none') {
        closeButton.style.top = (dropdownMenu.offsetHeight + 20) + 'px';
    }
}

// Fonction pour basculer le menu déroulant
function toggleDropdown() {
    var dropdownMenu = document.getElementById("dropdownMenu");
    dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
    adjustCloseButtonPosition(); // Ajuster la position du bouton de fermeture
}

// Fonction pour basculer le contenu popup
function togglePopup() {
    var popup = document.getElementById("popupContent");
    popup.style.display = popup.style.display === 'block' ? 'none' : 'block';
}

// Fonction pour basculer la barre de navigation
function toggleNav() {
    var navbar = document.getElementById("navbar");
    navbar.style.display = navbar.style.display === "block" ? "none" : "block";
}

// Fonction pour basculer le menu burger et l'overlay
function toggleMenu() {
    var overlay = document.getElementById("myNav");
    var menu = document.querySelector(".menu-burger");

    if (overlay.style.height === "100%") {
        overlay.style.height = "0%";
        menu.classList.remove("change");
    } else {
        overlay.style.height = "100%";
        menu.classList.add("change");
    }
}

// Appliquer le gradient à chaque intervalle de temps
setInterval(applyGradient, 100);

// Ajuster la position du bouton de fermeture lors du redimensionnement de la fenêtre
window.onresize = adjustCloseButtonPosition;

// Lier la fonction toggleDropdown à l'événement de clic sur le bouton du menu
var dropdownToggle = document.getElementById("dropdownToggle");
if (dropdownToggle) {
    dropdownToggle.addEventListener('click', toggleDropdown);
}

// Lier la fonction togglePopup à l'événement de clic sur le bouton WhatsApp
var whatsappButton = document.querySelector('.whatsapp-logo');
if (whatsappButton) {
    whatsappButton.addEventListener('click', togglePopup);
}

// Fonction pour appliquer un gradient dynamique sur les textes rotatifs
function applyGradient() {
    const rotatingTexts = document.querySelectorAll('.rotate-text');
    const staticText = document.querySelector('.text-static');

    rotatingTexts.forEach(function(text) {
        const textRect = text.getBoundingClientRect();
        const staticTextRect = staticText.getBoundingClientRect();

        if (textRect.top <= staticTextRect.bottom && textRect.bottom >= staticTextRect.top) {
            text.style.background = 'linear-gradient(to right,#6e45e2, #88d3ce )';
            text.style.webkitBackgroundClip = 'text';
            text.style.backgroundClip = 'text';
            text.style.color = 'transparent';
        } else {
            text.style.background = 'none';
            text.style.color = '#aaa'; // ou la couleur originale
        }
    });
}

// Ajout de l'écouteur pour l'animation au défilement
document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', applyGradient);
    applyGradient(); // Appliquer initialement

    const sections = document.querySelectorAll('.section');

    const revealSection = function (entries, observer) {
        const [entry] = entries;

        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
    };

    const sectionObserver = new IntersectionObserver(revealSection, {
        root: null,
        threshold: 0.15,
    });

    sections.forEach(function (section) {
        sectionObserver.observe(section);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const stepsAndArrows = document.querySelectorAll('.processus-step, .arrow');

    const revealItem = function (entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        });
    };

    const observer = new IntersectionObserver(revealItem, {
        root: null,
        threshold: 0.15,
    });

    stepsAndArrows.forEach(item => {
        observer.observe(item);
    });
});
