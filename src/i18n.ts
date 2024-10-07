// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next'; // Import correct

i18n
    .use(initReactI18next) // Connecte i18n à React
    .init({
        resources: {
            en: {
                translation: {
                    allTypes: "All Types",
                    fire: "Fire",
                    water: "Water",
                },
            },
            fr: {
                translation: {
                    allTypes: "Tous les types",
                    fire: "Feu",
                    water: "Eau",
                },
            },
        },
        lng: 'en', // Langue par défaut
        fallbackLng: 'en', // Langue de secours
        interpolation: {
            escapeValue: false, // React gère l'échappement par défaut
        },
    });

export default i18n;
