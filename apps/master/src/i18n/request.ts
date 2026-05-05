import { cookies } from 'next/headers';
import { getRequestConfig } from 'next-intl/server';
import { DEFAULT_LOCALE, LOCALE_COOKIE, isLocale } from './locales';

/**
 * Серверный resolver locale: cookie pc_locale → default 'en'.
 * Accept-Language НЕ учитывается — лендинг всегда открывается на en
 * для нового посетителя, локаль меняется только через LocaleSwitch.
 */
export default getRequestConfig(async () => {
  const jar = await cookies();
  const cookieLocale = jar.get(LOCALE_COOKIE)?.value;
  const locale = isLocale(cookieLocale) ? cookieLocale : DEFAULT_LOCALE;

  const messages = (await import(`../../messages/${locale}.json`)).default;
  return { locale, messages };
});
