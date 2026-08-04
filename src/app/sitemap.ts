import type { MetadataRoute } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://viettel-ninhbinh.vn';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    // Add more static pages here as you build them
    // {
    //   url: `${SITE_URL}/bang-gia`,
    //   lastModified: now,
    //   changeFrequency: 'weekly',
    //   priority: 0.8,
    // },
    // {
    //   url: `${SITE_URL}/lien-he`,
    //   lastModified: now,
    //   changeFrequency: 'monthly',
    //   priority: 0.6,
    // },
  ];

  return staticPages;
}
