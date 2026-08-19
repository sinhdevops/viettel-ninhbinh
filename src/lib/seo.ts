import type { Metadata } from 'next';

import type { MarketConfig } from '@/config/markets';
import { absoluteUrl, seoConfig } from '@/config/seo';

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
  keywords?: string[];
  siteName?: string;
}

/**
 * Generate comprehensive SEO metadata for any page.
 * Includes Open Graph, Twitter Card, canonical URL, and robots config.
 *
 * @example
 * ```ts
 * export const metadata = generateMetadata({
 *   title: 'Đăng ký mạng Viettel',
 *   description: 'Đăng ký lắp mạng Viettel tại địa phương...',
 *   path: '/dang-ky',
 *   keywords: ['viettel', 'ninh bình', 'lắp mạng'],
 * });
 * ```
 */
export function generateMetadata({
  title,
  description,
  path = '',
  image = '/images/viettel-social-share.jpg',
  noIndex = false,
  keywords = [],
  siteName = seoConfig.name,
}: SEOProps): Metadata {
  const url = absoluteUrl(path || '/');
  const ogImage = image ? absoluteUrl(image) : undefined;
  const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION;
  const facebookVerification = process.env.NEXT_PUBLIC_FB_DOMAIN_VERIFICATION;

  return {
    title: { absolute: title },
    description,
    keywords,
    applicationName: siteName,
    authors: [{ name: siteName, url: absoluteUrl('/') }],
    creator: siteName,
    publisher: siteName,
    category: 'technology',
    metadataBase: new URL(seoConfig.url),
    alternates: {
      canonical: url,
      languages: {
        'vi-VN': url,
      },
    },
    openGraph: {
      type: 'website',
      locale: seoConfig.locale,
      url,
      title,
      description,
      siteName,
      ...(ogImage
        ? {
            images: [
              {
                url: ogImage,
                width: 1200,
                height: 630,
                alt: title,
                type: 'image/jpeg',
              },
            ],
          }
        : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      ...(ogImage ? { images: [ogImage] } : {}),
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
          },
        },
    verification:
      googleVerification || facebookVerification
        ? {
            ...(googleVerification ? { google: googleVerification } : {}),
            ...(facebookVerification
              ? { other: { 'facebook-domain-verification': facebookVerification } }
              : {}),
          }
        : undefined,
  };
}

export function generateMarketMetadata(market: MarketConfig): Metadata {
  return generateMetadata({
    title: market.seo.title,
    description: market.seo.description,
    path: market.path,
    image: '/images/viettel-social-share.jpg',
    keywords: [...market.seo.keywords],
    siteName: market.siteName,
    noIndex: market.status === 'adsOnly',
  });
}

/**
 * Default metadata for the site root.
 */
export const defaultMetadata = generateMetadata({
  title: seoConfig.title,
  description: seoConfig.description,
  path: '/',
  image: '/images/viettel-social-share.jpg',
  keywords: [...seoConfig.keywords],
});
