import { siteConfig } from './site';

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://viettel-ninhbinh.vn').replace(
  /\/+$/,
  ''
);

export const seoConfig = {
  url: siteUrl,
  name: siteConfig.name,
  locale: 'vi_VN',
  language: 'vi-VN',
  title: 'Internet, Truyền hình, Camera & Giải pháp Viettel',
  description: siteConfig.description,
  keywords: ['Internet Viettel', 'TV360', 'Camera Viettel', 'Internet doanh nghiệp'],
} as const;

export function absoluteUrl(path = '/') {
  return new URL(path, `${seoConfig.url}/`).toString();
}
