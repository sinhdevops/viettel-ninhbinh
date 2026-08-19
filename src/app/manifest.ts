import type { MetadataRoute } from 'next';

import { seoConfig } from '@/config/seo';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: seoConfig.name,
    short_name: 'Dịch vụ Viettel',
    description: seoConfig.description,
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
