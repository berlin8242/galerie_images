// src/@types/react-i18next.d.ts

declare module 'react-i18next' {
    import { i18n } from 'i18next';
    import React from 'react';

    export interface UseTranslationOptions {
        keyPrefix?: string;
        ns?: string | string[];
    }

    export function useTranslation(
        ns?: string | string[],
        options?: UseTranslationOptions
    ): {
        t: (key: string, options?: any) => string;
        i18n: i18n;
    };

    export const I18nextProvider: React.FC<{ i18n: i18n }>;
}
