import i18n from "i18next"
import { initReactI18next } from "react-i18next"

export type ActiveLang = "en" | "ua" | "ru"

export const initTranslations = (activeLang: ActiveLang) => {
  i18n.use(initReactI18next).init({
    resources: {
      en: {
        translation: require("./en.json"),
      },
      ua: {
        translation: require("./ua.json"),
      },
      ru: {
        translation: require("./ru.json"),
      },
    },
    lng: activeLang,
    fallbackLng: "en",

    interpolation: {
      escapeValue: false,
    },
  })
}
