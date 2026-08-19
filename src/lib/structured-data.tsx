import type { Thing, WithContext } from 'schema-dts';

import type { MarketConfig } from '@/config/markets';
import { absoluteUrl, seoConfig } from '@/config/seo';
import { siteConfig } from '@/config/site';
import type { ServicePageContent } from '@/content/services';

interface JsonLdProps<T extends Thing> {
  data: WithContext<T>;
}

function JsonLd<T extends Thing>({ data }: JsonLdProps<T>) {
  const json = JSON.stringify(data).replaceAll('<', '\\u003c');
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}

const organizationId = `${absoluteUrl('/')}#organization`;
const websiteId = `${absoluteUrl('/')}#website`;

function OrganizationJsonLd() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'Organization',
        '@id': organizationId,
        name: siteConfig.name,
        url: absoluteUrl('/'),
        logo: absoluteUrl('/icon.svg'),
        description: siteConfig.description,
        telephone: siteConfig.phone.href.replace('tel:', ''),
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: siteConfig.phone.href.replace('tel:', ''),
          contactType: 'sales',
          areaServed: 'VN',
          availableLanguage: ['Vietnamese'],
        },
        sameAs: [siteConfig.zaloUrl],
      }}
    />
  );
}

function SitePageJsonLd() {
  const pageUrl = absoluteUrl('/');
  return (
    <>
      <OrganizationJsonLd />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          '@id': websiteId,
          name: seoConfig.name,
          url: pageUrl,
          inLanguage: seoConfig.language,
          publisher: { '@id': organizationId },
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          '@id': `${pageUrl}#webpage`,
          url: pageUrl,
          name: seoConfig.title,
          description: seoConfig.description,
          inLanguage: seoConfig.language,
          isPartOf: { '@id': websiteId },
        }}
      />
    </>
  );
}

function MarketPageJsonLd({ market }: { market: MarketConfig }) {
  const pageUrl = absoluteUrl(market.path);
  return (
    <>
      <OrganizationJsonLd />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          '@id': `${pageUrl}#service`,
          name: market.seo.title,
          description: market.seo.description,
          url: pageUrl,
          provider: { '@id': organizationId },
          areaServed: market.areaServed.map((name) => ({ '@type': 'AdministrativeArea', name })),
          serviceType: ['Internet', 'Television', 'Camera', 'Business Internet'],
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Trang chủ', item: absoluteUrl('/') },
            { '@type': 'ListItem', position: 2, name: market.siteName, item: pageUrl },
          ],
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          '@id': `${pageUrl}#webpage`,
          url: pageUrl,
          name: market.seo.title,
          description: market.seo.description,
          inLanguage: seoConfig.language,
          isPartOf: { '@id': websiteId },
          about: { '@id': `${pageUrl}#service` },
        }}
      />
    </>
  );
}

function ServicePageJsonLd({ content }: { content: ServicePageContent }) {
  const pageUrl = absoluteUrl(content.path);
  return (
    <>
      <OrganizationJsonLd />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          '@id': `${pageUrl}#service`,
          name: content.title,
          description: content.description,
          url: pageUrl,
          provider: { '@id': organizationId },
          areaServed: { '@type': 'Country', name: 'Việt Nam' },
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Trang chủ', item: absoluteUrl('/') },
            { '@type': 'ListItem', position: 2, name: content.title, item: pageUrl },
          ],
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          '@id': `${pageUrl}#webpage`,
          url: pageUrl,
          name: content.seoTitle,
          description: content.seoDescription,
          inLanguage: seoConfig.language,
          isPartOf: { '@id': websiteId },
          about: { '@id': `${pageUrl}#service` },
        }}
      />
    </>
  );
}

interface TrustPageJsonLdProps {
  title: string;
  description: string;
  path: `/${string}`;
}

function TrustPageJsonLd({ title, description, path }: TrustPageJsonLdProps) {
  const pageUrl = absoluteUrl(path);

  return (
    <>
      <OrganizationJsonLd />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Trang chủ', item: absoluteUrl('/') },
            { '@type': 'ListItem', position: 2, name: title, item: pageUrl },
          ],
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          '@id': `${pageUrl}#webpage`,
          url: pageUrl,
          name: title,
          description,
          inLanguage: seoConfig.language,
          isPartOf: { '@id': websiteId },
        }}
      />
    </>
  );
}

export { MarketPageJsonLd, ServicePageJsonLd, SitePageJsonLd, TrustPageJsonLd };
