import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import { FloatingContact, SiteFooter, SiteHeader } from '@/components/layout';
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

const hasGoogleTracking = Boolean(process.env.NEXT_PUBLIC_GTM_ID || process.env.NEXT_PUBLIC_GA_ID);
const hasFacebookTracking = Boolean(process.env.NEXT_PUBLIC_FB_PIXEL_ID);

export const metadata: Metadata = {
  ...defaultMetadata,
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#e60012',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="vi" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        {hasGoogleTracking && (
          <>
            <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
            <link rel="dns-prefetch" href="https://www.google-analytics.com" />
            <link
              rel="preconnect"
              href="https://www.googletagmanager.com"
              crossOrigin="anonymous"
            />
          </>
        )}
        {hasFacebookTracking && <link rel="dns-prefetch" href="https://connect.facebook.net" />}

        {/* Structured Data */}
        <OrganizationJsonLd />
        <WebSiteJsonLd />
      </head>
      <body className="flex min-h-full flex-col">
        <GoogleTagManagerNoscript />
        <a
          href="#main-content"
          className="bg-primary text-primary-foreground fixed top-3 left-3 z-[100] -translate-y-20 rounded-md px-4 py-2 text-sm font-bold transition-transform focus:translate-y-0"
        >
          Chuyển đến nội dung chính
        </a>
        <SiteHeader />
        <div id="main-content" className="flex flex-1 flex-col" tabIndex={-1}>
          {children}
        </div>
        <SiteFooter />
        <FloatingContact />

        {/* Tracking scripts - loaded after page interactive */}
        <GoogleTagManager />
        <FacebookPixel />
      </body>
    </html>
  );
}
