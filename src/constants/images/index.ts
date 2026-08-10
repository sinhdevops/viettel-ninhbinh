export const IMAGE_PATHS = {
  logo: '/images/viettel-logo.png',
  zalo: '/images/zalo.svg',
  heroNetwork: '/images/hero-network.png',
  screenshot: '/images/screenshot.png',
  tv360Entertainment: '/images/tv360-entertainment.webp',
} as const;

export type ImagePath = (typeof IMAGE_PATHS)[keyof typeof IMAGE_PATHS];
