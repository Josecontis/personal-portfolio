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
