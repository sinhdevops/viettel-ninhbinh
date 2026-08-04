import type { Thing, WithContext } from 'schema-dts';

interface JsonLdProps<T extends Thing> {
  data: WithContext<T>;
}

/**
 * Renders JSON-LD structured data for SEO (Google Rich Results).
 *
 * @example
 * ```tsx
 * <JsonLd<Organization> data={{
 *   '@context': 'https://schema.org',
 *   '@type': 'Organization',
 *   name: 'Viettel Ninh Bình',
 * }} />
 * ```
 */
export function JsonLd<T extends Thing>({ data }: JsonLdProps<T>) {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

/**
 * Pre-built Organization schema for Viettel Ninh Bình.
 * Place this in your root layout for site-wide structured data.
 */
export function OrganizationJsonLd() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'Viettel Ninh Bình',
        description:
          'Đăng ký lắp đặt mạng Internet, truyền hình Viettel tại Ninh Bình. Ưu đãi hấp dẫn, lắp đặt miễn phí trong 24h.',
        url: process.env.NEXT_PUBLIC_SITE_URL || 'https://viettel-ninhbinh.vn',
        telephone: process.env.NEXT_PUBLIC_PHONE || '',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Ninh Bình',
          addressRegion: 'Ninh Bình',
          addressCountry: 'VN',
        },
        sameAs: [
          // Add social media URLs here
        ],
      }}
    />
  );
}

/**
 * WebSite schema with SearchAction for Google Sitelinks Search Box.
 */
export function WebSiteJsonLd() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://viettel-ninhbinh.vn';

  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Viettel Ninh Bình',
        url: siteUrl,
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${siteUrl}/search?q={search_term_string}`,
          },
          'query-input': 'required name=search_term_string',
        } as never,
      }}
    />
  );
}
