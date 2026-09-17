const translations = {
  en: {
    langToggle: "العربية", // shows the language you can switch TO
    brand: "AATCO Elevators",
    tagline: "We lift up your experience",
    whatsapp: "Whatsapp",
    website: "Website",
    location: "Location",
    review: "Share Your Opinion",
  },
  ar: {
    langToggle: "English",
    brand: "مصاعد أتكو",
    tagline: "نرتقي بتجربتك",
    whatsapp: "واتساب",
    website: "الموقع الإلكتروني",
    location: "الموقع",
    review: "شاركنا رأيك",
  },
};

let currentLang = localStorage.getItem("lang") || "en";

function applyLanguage(lang) {
  const dict = translations[lang];
  const words = document.querySelectorAll("[data-i18n]");

  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  words.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  currentLang = lang;
  localStorage.setItem("lang", lang);
}

document.getElementById("lang-toggle").addEventListener("click", () => {
  applyLanguage(currentLang === "en" ? "ar" : "en");
});

applyLanguage(currentLang);
