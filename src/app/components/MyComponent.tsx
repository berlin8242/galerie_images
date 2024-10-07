// src/components/MyComponent.tsx
'use client';
import React from 'react';
import { useTranslation } from 'react-i18next';

const MyComponent: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div>
            <h1>{t('key')}</h1> {/* Affiche la valeur de la clé de traduction */}
        </div>
    );
};

export default MyComponent;
