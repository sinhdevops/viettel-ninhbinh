import type { Metadata } from 'next';

import { absoluteUrl, seoConfig } from '@/config/seo';

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
  keywords?: string[];
}

/**
 * Generate comprehensive SEO metadata for any page.
 * Includes Open Graph, Twitter Card, canonical URL, and robots config.
 *
 * @example
 * ```ts
 * export const metadata = generateMetadata({
 *   title: 'Đăng ký mạng Viettel',
 *   description: 'Đăng ký lắp mạng Viettel Ninh Bình...',
 *   path: '/dang-ky',
 *   keywords: ['viettel', 'ninh bình', 'lắp mạng'],
 * });
 * ```
 */
export function generateMetadata({
  title,
  description,
  path = '',
  image,
  noIndex = false,
  keywords = [],
}: SEOProps): Metadata {
  const url = absoluteUrl(path || '/');
  const ogImage = image ? absoluteUrl(image) : undefined;
  const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION;
  const facebookVerification = process.env.NEXT_PUBLIC_FB_DOMAIN_VERIFICATION;

  return {
    title: {
      default: title,
      template: `%s | ${seoConfig.name}`,
    },
    description,
    keywords,
    applicationName: seoConfig.name,
    authors: [{ name: seoConfig.name, url: seoConfig.url }],
    creator: seoConfig.name,
    publisher: seoConfig.name,
    category: 'technology',
    metadataBase: new URL(seoConfig.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'website',
      locale: seoConfig.locale,
      url,
      title,
      description,
      siteName: seoConfig.name,
      ...(ogImage ? { images: [{ url: ogImage, alt: title }] } : {}),
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

/**
 * Default metadata for the site root.
 */
export const defaultMetadata = generateMetadata({
  title: seoConfig.title,
  description: seoConfig.description,
  keywords: [...seoConfig.keywords],
});
