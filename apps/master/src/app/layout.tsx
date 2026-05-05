import type { Metadata, Viewport } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import './globals.css';
import ClientBoot from '@/components/ClientBoot';

export const metadata: Metadata = {
  title: 'Autmzr Command',
  description: 'All your VPS and CLIs in one mobile interface.',
};
export const viewport: Viewport = {
  width: 'device-width', initialScale: 1, maximumScale: 1, userScalable: false,
  viewportFit: 'cover', themeColor: '#0b0b0d',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await getLocale();
  const messages = await getMessages();
  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `(function(){var t=localStorage.getItem('pc_theme')||'soft';document.documentElement.setAttribute('data-theme',t)})()`
        }} />
      </head>
      <body className="h-dvh overflow-hidden">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ClientBoot />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
