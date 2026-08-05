import type { Thing, WithContext } from 'schema-dts';

import { absoluteUrl, seoConfig } from '@/config/seo';
import { siteConfig } from '@/config/site';

interface JsonLdProps<T extends Thing> {
  data: WithContext<T>;
}

const organizationId = `${seoConfig.url}/#organization`;
const websiteId = `${seoConfig.url}/#website`;
const webpageId = `${seoConfig.url}/#webpage`;

function JsonLd<T extends Thing>({ data }: JsonLdProps<T>) {
  const json = JSON.stringify(data).replaceAll('<', '\\u003c');

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}

function OrganizationJsonLd() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'Organization',
        '@id': organizationId,
        name: seoConfig.name,
        url: seoConfig.url,
        logo: {
          '@type': 'ImageObject',
          url: absoluteUrl('/icon.svg'),
        },
        image: absoluteUrl('/images/hero-network.png'),
        description: seoConfig.description,
        telephone: '+84325610016',
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+84325610016',
          contactType: 'sales',
          availableLanguage: ['Vietnamese'],
          areaServed: 'VN',
        },
        areaServed: ['Ninh Bình', 'Hà Nam', 'Nam Định'],
        sameAs: [siteConfig.zaloUrl],
      }}
    />
  );
}

function WebSiteJsonLd() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': websiteId,
        name: seoConfig.name,
        url: seoConfig.url,
        inLanguage: seoConfig.language,
        publisher: { '@id': organizationId },
      }}
    />
  );
}

function HomePageJsonLd() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        '@id': webpageId,
        url: seoConfig.url,
        name: seoConfig.title,
        description: seoConfig.description,
        inLanguage: seoConfig.language,
        isPartOf: { '@id': websiteId },
        about: { '@id': organizationId },
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: absoluteUrl('/images/hero-network.png'),
        },
      }}
    />
  );
}

export { HomePageJsonLd, OrganizationJsonLd, WebSiteJsonLd };
