import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import { FacebookPixel } from '@/components/tracking/FacebookPixel';
import { GoogleTagManager, GoogleTagManagerNoscript } from '@/components/tracking/GoogleTagManager';
import { defaultMetadata } from '@/lib/seo';
import { OrganizationJsonLd, WebSiteJsonLd } from '@/lib/structured-data';

import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap', // Prevent FOIT (Flash of Invisible Text)
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  ...defaultMetadata,
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#ee0033', // Viettel brand color
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="vi" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />

        {/* Structured Data */}
        <OrganizationJsonLd />
        <WebSiteJsonLd />
      </head>
      <body className="flex min-h-full flex-col">
        <GoogleTagManagerNoscript />
        {children}

        {/* Tracking scripts - loaded after page interactive */}
        <GoogleTagManager />
        <FacebookPixel />
      </body>
    </html>
  );
}
