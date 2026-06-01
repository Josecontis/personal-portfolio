import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import enTranslations from "./locales/en/translations.json";
import esTranslations from "./locales/es/translations.json";
import frTranslations from "./locales/fr/translations.json";
import itTranslations from "./locales/it/translations.json";

const fallbackLng = ["en"];
const availableLanguages = ["en", "it", "fr", "es"];

const resources = {
  en: {
    translation: enTranslations,
  },
  it: {
    translation: itTranslations,
  },
  fr: {
    translation: frTranslations,
  },
  es: {
    translation: esTranslations,
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
