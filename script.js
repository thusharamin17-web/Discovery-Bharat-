// 🌍 LANGUAGE SYSTEM
const translations = {
    en: {
        title: "Discovery Bharat",
        subtitle: "Explore India - States, Rivers & Culture",
        heroTitle: "Interactive India Map",
        heroText: "Click on any state to explore",
        home: "Home",
        lang: "Languages ▾",
        ut: "Union Territories",
        river: "Rivers",
        mountain: "Mountains",
        about: "About",
        contact: "Contact",
        footer: "© 2026 Discovery Bharat & T&Team"
    },

    hi: {
        title: "भारत खोज",
        subtitle: "भारत के राज्य, नदियाँ और संस्कृति जानें",
        heroTitle: "इंटरएक्टिव भारत मानचित्र",
        heroText: "किसी भी राज्य पर क्लिक करें",
        home: "होम",
        lang: "भाषाएँ ▾",
        ut: "केंद्र शासित प्रदेश",
        river: "नदियाँ",
        mountain: "पर्वत",
        about: "हमारे बारे में",
        contact: "संपर्क",
        footer: "© 2026 भारत खोज & T&Team"
    },

    kn: {
        title: "ಭಾರತ ಅನ್ವೇಷಣೆ",
        subtitle: "ಭಾರತದ ರಾಜ್ಯಗಳು, ನದಿಗಳು ಮತ್ತು ಸಂಸ್ಕೃತಿ ತಿಳಿಯಿರಿ",
        heroTitle: "ಇಂಟರಾಕ್ಟಿವ್ ಭಾರತ ನಕ್ಷೆ",
        heroText: "ಯಾವುದೇ ರಾಜ್ಯದ ಮೇಲೆ ಕ್ಲಿಕ್ ಮಾಡಿ",
        home: "ಮುಖಪುಟ",
        lang: "ಭಾಷೆಗಳು ▾",
        ut: "ಕೇಂದ್ರಾಡಳಿತ ಪ್ರದೇಶಗಳು",
        river: "ನದಿಗಳು",
        mountain: "ಪರ್ವತಗಳು",
        about: "ನಮ್ಮ ಬಗ್ಗೆ",
        contact: "ಸಂಪರ್ಕ",
        footer: "© 2026 ಭಾರತ ಅನ್ವೇಷಣೆ & T&Team"
    }
};


// 🌐 LANGUAGE SWITCH FUNCTION (SAFE VERSION)
function setLanguage(lang) {
    if (!translations[lang]) return;

    const t = translations[lang];

    document.getElementById("title").innerText = t.title;
    document.getElementById("subtitle").innerText = t.subtitle;
    document.getElementById("hero-title").innerText = t.heroTitle;
    document.getElementById("hero-text").innerText = t.heroText;

    document.getElementById("nav-home").innerText = t.home;
    document.getElementById("nav-lang").innerText = t.lang;
    document.getElementById("nav-ut").innerText = t.ut;
    document.getElementById("nav-river").innerText = t.river;
    document.getElementById("nav-mountain").innerText = t.mountain;
    document.getElementById("nav-about").innerText = t.about;
    document.getElementById("nav-contact").innerText = t.contact;

    document.getElementById("footer-text").innerText = t.footer;

    // ✅ Close dropdown after selecting language
    document.querySelector(".dropdown").style.display = "none";
}


// 🟡 DROPDOWN CLICK CONTROL (LEFT CLICK ONLY)
const langBtn = document.getElementById("nav-lang");
const dropdown = document.querySelector(".dropdown");

langBtn.addEventListener("click", function (e) {
    e.preventDefault();

    dropdown.style.display =
        dropdown.style.display === "block" ? "none" : "block";
});


// 🔴 CLOSE DROPDOWN WHEN CLICKING OUTSIDE
document.addEventListener("click", function (e) {
    if (!langBtn.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.style.display = "none";
    }
});


// 🍔 HAMBURGER MENU TOGGLE
const hamburger = document.getElementById("navHamburger");
const navMenu = document.getElementById("navMenu");

if (hamburger && navMenu) {
    hamburger.addEventListener("click", function () {
        const isOpen = navMenu.classList.toggle("open");
        hamburger.classList.toggle("open", isOpen);
        hamburger.setAttribute("aria-expanded", isOpen);
    });

    // Close mobile menu when a nav link is clicked
    navMenu.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            if (window.innerWidth <= 768) {
                navMenu.classList.remove("open");
                hamburger.classList.remove("open");
                hamburger.setAttribute("aria-expanded", "false");
            }
        });
    });
}