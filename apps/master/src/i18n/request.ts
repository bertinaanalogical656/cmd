import { cookies, headers } from 'next/headers';
import { getRequestConfig } from 'next-intl/server';
import { DEFAULT_LOCALE, LOCALE_COOKIE, detectLocaleFromAcceptLanguage, isLocale } from './locales';

/**
 * Серверный resolver locale: cookie pc_locale → Accept-Language → default 'en'.
 * Используется next-intl provider в root layout.
 */
export default getRequestConfig(async () => {
  const jar = await cookies();
  const cookieLocale = jar.get(LOCALE_COOKIE)?.value;
  let locale = isLocale(cookieLocale) ? cookieLocale : null;

  if (!locale) {
    const hdrs = await headers();
    locale = detectLocaleFromAcceptLanguage(hdrs.get('accept-language')) || DEFAULT_LOCALE;
  }

  const messages = (await import(`../../messages/${locale}.json`)).default;
  return { locale, messages };
});
