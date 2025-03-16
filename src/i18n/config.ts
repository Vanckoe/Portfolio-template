export type Locale = (typeof locales)[number];

export const locales = ['ru', 'cn'] as const;
export const defaultLocale: Locale = 'ru';
