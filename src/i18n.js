import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import es from "./locales/es.json";
import en from "./locales/en.json";
import cat from "./locales/cat.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      es: { translation: es },
      en: { translation: en },
      cat: { translation: cat }
    },
    lng: "es", // idioma inicial
    fallbackLng: "es",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
