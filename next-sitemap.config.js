/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://viettel-ninhbinh.vn',
  generateRobotsTxt: false, // We use Next.js App Router robots.ts instead
  sitemapSize: 7000,
  changefreq: 'daily',
  priority: 0.7,
  exclude: ['/api/*'],
  generateIndexSitemap: false,
};
