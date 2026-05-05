/**
 * Список поддерживаемых локалей. Default = en (международный продукт).
 *
 * Cookie-based стратегия: пользователь выбирает локаль в LocaleSwitch,
 * она пишется в cookie pc_locale, сервер читает её при рендере.
 * URL не меняется — single канонический URL для всех языков.
 */

export const LOCALES = ['en', 'ru', 'zh'] as const;
export type Locale = typeof LOCALES[number];

export const DEFAULT_LOCALE: Locale = 'en';
export const LOCALE_COOKIE = 'pc_locale';

export const LOCALE_LABELS: Record<Locale, { code: string; native: string }> = {
  en: { code: 'en', native: 'English' },
  ru: { code: 'ru', native: 'Русский' },
  zh: { code: 'cn', native: '中文' },
};

export function isLocale(s: string | undefined | null): s is Locale {
  return !!s && (LOCALES as readonly string[]).includes(s);
}

/**
 * Auto-detect по Accept-Language. Возвращает первую совпадающую с нашими
 * locale, иначе DEFAULT_LOCALE.
 */
export function detectLocaleFromAcceptLanguage(acceptLanguage: string | null | undefined): Locale {
  if (!acceptLanguage) return DEFAULT_LOCALE;
  const candidates = acceptLanguage
    .split(',')
    .map((s) => s.split(';')[0].trim().toLowerCase());
  for (const c of candidates) {
    const base = c.split('-')[0];
    if (isLocale(base)) return base;
  }
  return DEFAULT_LOCALE;
}
