import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import en from "./locales/en/translations.json";
import es from "./locales/es/translations.json";
import fr from "./locales/fr/translations.json";
import it from "./locales/it/translations.json";

const fallbackLng = ["en"];
const availableLanguages = ["en", "it", "fr", "es"];

const resources = {
  en: { translation: en },
  it: { translation: it },
  fr: { translation: fr },
  es: { translation: es },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng,
    detection: {
      checkSupportedLanguages: true,
    },
    debug: false,
    supportedLngs: availableLanguages,
  });

export default i18n;
