import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-xhr-backend";

import LanguageDetector from "i18next-browser-languagedetector";

export const Languages = [{ label: "Português", value: "pt" }, { label: "English", value: "en"}]

const debugging = process.env.NODE_ENV === "development";
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "pt",
    debug: debugging,
    whitelist: Languages.map(({ value }) => value),

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
