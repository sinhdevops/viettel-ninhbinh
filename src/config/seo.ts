import { daNangMarket } from './markets';

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://viettel-ninhbinh.vn').replace(
  /\/+$/,
  ''
);

export const seoConfig = {
  url: siteUrl,
  name: daNangMarket.siteName,
  locale: 'vi_VN',
  language: 'vi-VN',
  title: daNangMarket.seo.title,
  description: daNangMarket.seo.description,
  keywords: daNangMarket.seo.keywords,
} as const;

export function absoluteUrl(path = '/') {
  return new URL(path, `${seoConfig.url}/`).toString();
}
