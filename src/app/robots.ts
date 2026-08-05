import type { MetadataRoute } from 'next';

import { seoConfig } from '@/config/seo';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
    ],
    sitemap: `${seoConfig.url}/sitemap.xml`,
    host: seoConfig.url,
  };
}
