export const IMAGE_PATHS = {
  logo: '/images/viettel-logo.png',
  zalo: '/images/zalo.svg',
  heroNetwork: '/images/hero-network.webp',
  screenshot: '/images/screenshot.png',
  tv360Entertainment: '/images/tv360-entertainment.webp',
  routerHero: '/images/router-hero-v2.webp',
  meshProduct: '/images/mesh-product-v2.webp',
  cameraProduct: '/images/camera-product-v2.webp',
} as const;

export type ImagePath = (typeof IMAGE_PATHS)[keyof typeof IMAGE_PATHS];
