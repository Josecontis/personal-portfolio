import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const fallbackLng = ["en"];
const availableLanguages = ["en", "it", "fr", "es"];

const resources = {
  en: {
    translation: require("./locales/en/translations.json"),
  },
  it: {
    translation: require("./locales/it/translations.json"),
  },
  fr: {
    translation: require("./locales/fr/translations.json"),
  },
  es: {
    translation: require("./locales/es/translations.json"),
  },
};

i18n
  .use(LanguageDetector) // detect user language
  .use(initReactI18next) // pass the i18n instance to react-i18next
  .init({
    resources, //supported languages
    fallbackLng, // fallback language is english.
    detection: {
      checkWhitelist: true,
    },
    debug: false,
    whitelist: availableLanguages,
  });

i18n.changeLanguage("it");
export default i18n;
