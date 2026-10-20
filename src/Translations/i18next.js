import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import enTranslations from "./locales/en/translations.json";
import itTranslations from "./locales/it/translations.json";

const fallbackLng = ["en"];
// Only Italian and English are active. The French and Spanish files in ./locales are kept:
// to bring them back, import them here and add "fr" and "es" to this list and to resources
export const availableLanguages = ["en", "it"];

const resources = {
  en: {
    translation: enTranslations,
  },
  it: {
    translation: itTranslations,
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
