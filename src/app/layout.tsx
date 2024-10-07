// src/app/layout.tsx
'use client';
import './styles/globals.css';
import { useEffect } from 'react';
import i18n from '@/i18n'; // Assurez-vous d'importer correctement i18n

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const userLang = navigator.language || navigator.language;
    i18n.changeLanguage(userLang.startsWith('fr') ? 'fr' : 'en'); // Changer la langue selon la langue du navigateur
  }, []);

  return (
    <html lang={i18n.language}>
      <body>
        {children}
      </body>
    </html>
  );
}
