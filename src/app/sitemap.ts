import type { MetadataRoute } from 'next';

import { absoluteUrl, seoConfig } from '@/config/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: seoConfig.url,
      changeFrequency: 'weekly',
      priority: 1,
      images: [
        absoluteUrl('/images/hero-network.png'),
        absoluteUrl('/images/tv360-entertainment.webp'),
      ],
    },
  ];
}
