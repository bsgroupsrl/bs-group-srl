import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import your translation JSON files
import en from "./locales/en.json";
import fr from "./locales/fr.json";
import de from "./locales/de.json";
import it from "./locales/it.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    fr: {
      translation: fr,
    },
    de: {
      translation: de,
    },
    it: {
      translation: it,
    },
  },
  lng: localStorage.getItem("language") || "it",
  fallbackLng: "en", // Fallback language when translation is missing
  interpolation: {
    escapeValue: false, // React already escapes values
  },
});

export default i18n;
