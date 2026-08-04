import type { Metadata } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://viettel-ninhbinh.vn';
const SITE_NAME = 'Viettel Ninh Bình';

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
  const url = `${SITE_URL}${path}`;
  const ogImage = image || `${SITE_URL}/og-image.jpg`;

  return {
    title: {
      default: title,
      template: `%s | ${SITE_NAME}`,
    },
    description,
    keywords: [SITE_NAME, ...keywords],
    authors: [{ name: SITE_NAME }],
    creator: SITE_NAME,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'website',
      locale: 'vi_VN',
      url,
      title,
      description,
      siteName: SITE_NAME,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
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
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || '',
      // facebook domain verification for ads
      other: {
        'facebook-domain-verification': process.env.NEXT_PUBLIC_FB_DOMAIN_VERIFICATION || '',
      },
    },
  };
}

/**
 * Default metadata for the site root.
 */
export const defaultMetadata = generateMetadata({
  title: `${SITE_NAME} - Lắp mạng Viettel tại Ninh Bình`,
  description:
    'Đăng ký lắp đặt mạng Internet, truyền hình Viettel tại Ninh Bình. Ưu đãi hấp dẫn, tốc độ cao, lắp đặt miễn phí trong 24h.',
  keywords: [
    'lắp mạng viettel ninh bình',
    'internet viettel ninh bình',
    'truyền hình viettel',
    'viettel ninh bình',
    'đăng ký viettel',
  ],
});
