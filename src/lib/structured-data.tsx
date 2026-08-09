import type { Thing, WithContext } from 'schema-dts';

import type { MarketConfig } from '@/config/markets';
import { absoluteUrl, seoConfig } from '@/config/seo';
import { siteConfig } from '@/config/site';

interface JsonLdProps<T extends Thing> {
  data: WithContext<T>;
}

function JsonLd<T extends Thing>({ data }: JsonLdProps<T>) {
  const json = JSON.stringify(data).replaceAll('<', '\\u003c');

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}

interface MarketJsonLdProps {
  market: MarketConfig;
}

function MarketPageJsonLd({ market }: MarketJsonLdProps) {
  const pageUrl = absoluteUrl(market.path);
  const organizationId = `${pageUrl}#organization`;
  const websiteId = `${pageUrl}#website`;
  const webpageId = `${pageUrl}#webpage`;

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          '@id': organizationId,
          name: market.siteName,
          url: pageUrl,
          logo: {
            '@type': 'ImageObject',
            url: absoluteUrl('/icon.svg'),
          },
          image: absoluteUrl('/images/hero-network.png'),
          description: market.seo.description,
          telephone: '+84325610016',
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+84325610016',
            contactType: 'sales',
            availableLanguage: ['Vietnamese'],
            areaServed: 'VN',
          },
          areaServed: [...market.areaServed],
          sameAs: [siteConfig.zaloUrl],
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          '@id': websiteId,
          name: market.siteName,
          url: pageUrl,
          inLanguage: seoConfig.language,
          publisher: { '@id': organizationId },
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          '@id': webpageId,
          url: pageUrl,
          name: market.seo.title,
          description: market.seo.description,
          inLanguage: seoConfig.language,
          isPartOf: { '@id': websiteId },
          about: { '@id': organizationId },
          primaryImageOfPage: {
            '@type': 'ImageObject',
            url: absoluteUrl('/images/hero-network.png'),
          },
        }}
      />
    </>
  );
}

export { MarketPageJsonLd };
