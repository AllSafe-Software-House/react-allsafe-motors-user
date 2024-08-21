// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/en/translation.json';
import translationAr from './locales/ar/translation.json';

// the translations
const resources = {
  en: {
    global: translationEN
  },
  ar: {
    global: translationAr
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en', // fallback language if the current language is not available

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
