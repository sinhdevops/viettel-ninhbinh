import type { MetadataRoute } from 'next';

import { locationPages } from '@/config/markets';
import { absoluteUrl } from '@/config/seo';
import { servicePages } from '@/content/services';

const trustPaths = [
  '/gioi-thieu',
  '/lien-he',
  '/chinh-sach-bao-mat',
  '/dieu-khoan-su-dung',
  '/chinh-sach-dang-ky-lap-dat',
  '/quy-trinh-giai-quyet-khieu-nai',
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: absoluteUrl('/'),
      changeFrequency: 'weekly',
      priority: 1,
      images: [absoluteUrl('/images/hero-network.png')],
    },
    ...Object.values(servicePages).map((service) => ({
      url: absoluteUrl(service.path),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...locationPages
      .filter((market) => market.status === 'indexed')
      .map((market) => ({
        url: absoluteUrl(market.path),
        lastModified: market.seo.lastModified,
        changeFrequency: 'weekly' as const,
        priority: 0.9,
        images: [absoluteUrl(market.seo.ogImage)],
      })),
    ...trustPaths.map((path) => ({
      url: absoluteUrl(path),
      changeFrequency: 'yearly' as const,
      priority: 0.4,
    })),
  ];
}
