import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
import HeaderMain from '@/components/header';
import Footer from '@/components/footer';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import QueryProvider from '@/components/QueryProvider';
import PosthogLandingTracker from './PosthogLandingTracker';

const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Adil Talasbek — Frontend Developer',
  description:
    'Portfolio of frontend developer Adil Talasbek. React, Next.js, interactive interfaces and production web applications.',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  // Providing all messages to the client
  const messages = await getMessages();

  return (
    <html lang={locale === 'cn' ? 'en' : locale}>
      <head>
        <link rel="icon" href="/Favicon140.ico" sizes="any" />
        <link rel="icon" href="/Favicon140.png" type="image/png" />
        <link rel="icon" href="/Favicon140.svg" type="image/svg+xml" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${manrope.className} relative flex min-h-screen min-w-80 flex-col overflow-x-clip bg-[radial-gradient(circle_at_78%_8%,rgba(58,157,203,0.12),transparent_26rem)] bg-ink text-portfolio-text antialiased selection:bg-portfolio-accent selection:text-ink before:pointer-events-none before:fixed before:inset-0 before:-z-10 before:bg-[url('/tool/nooice.png')] before:opacity-[0.025]`}>
        <QueryProvider>
          <NextIntlClientProvider messages={messages}>
            <HeaderMain />
            {children}
            <Footer />
            <PosthogLandingTracker />
          </NextIntlClientProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
