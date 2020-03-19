import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-xhr-backend";

import LanguageDetector from "i18next-browser-languagedetector";

const Languages = ["pt", "en"];
const debugging = process.env.NODE_ENV === "development";
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "pt",
    debug: debugging,
    whitelist: Languages,

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
