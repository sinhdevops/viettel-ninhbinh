import type { MetadataRoute } from 'next';

import { daNangMarket, ninhBinhMarket } from '@/config/markets';
import { absoluteUrl } from '@/config/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  return [daNangMarket, ninhBinhMarket].map((market) => ({
    url: absoluteUrl(market.path),
    changeFrequency: 'weekly',
    priority: market.path === '/' ? 1 : 0.9,
    images: [
      absoluteUrl('/images/hero-network.png'),
      absoluteUrl('/images/tv360-entertainment.webp'),
    ],
  }));
}
