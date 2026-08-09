import type { MetadataRoute } from 'next';

import { daNangMarket } from '@/config/markets';
import { seoConfig } from '@/config/seo';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: daNangMarket.siteName,
    short_name: daNangMarket.siteName,
    description: daNangMarket.seo.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#e60012',
    lang: seoConfig.language,
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}
