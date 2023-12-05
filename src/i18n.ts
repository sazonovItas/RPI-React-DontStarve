import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// import locales
import local_en from "./assets/locales/en/translation.json";
import local_ru from "./assets/locales/ru/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: local_en,
    },
    ru: {
      translation: local_ru,
    },
  },
  lng: localStorage.getItem("lang")?.toString(),
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
