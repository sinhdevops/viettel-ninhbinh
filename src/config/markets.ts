import { daNangRegions, ninhBinhRegions } from '@/data/regions';

import type { MarketConfig, MarketId } from './market-types';

export type { MarketConfig, MarketId } from './market-types';

function createMarket(config: Omit<MarketConfig, 'siteName' | 'seo'>): MarketConfig {
  const siteName = `Viettel ${config.locationName}`;

  return {
    ...config,
    siteName,
    seo: {
      title: `Lắp mạng Viettel ${config.locationName} | Internet & TV360`,
      description: `Đăng ký lắp mạng Viettel tại ${config.locationName}: Internet cáp quang, Wi-Fi Mesh, TV360 và gói doanh nghiệp. Kiểm tra hạ tầng, chọn gói từ 195.000đ/tháng.`,
      keywords: [
        `lắp mạng Viettel ${config.locationName}`,
        `Internet Viettel ${config.locationName}`,
        `cáp quang Viettel ${config.locationName}`,
        'Wi-Fi Mesh Viettel',
        `TV360 ${config.locationName}`,
        `Internet doanh nghiệp ${config.locationName}`,
      ],
    },
  };
}

export const daNangMarket = createMarket({
  id: 'da-nang',
  path: '/',
  locationName: 'Đà Nẵng',
  regions: daNangRegions,
  areaServed: ['Đà Nẵng'],
});

export const ninhBinhMarket = createMarket({
  id: 'ninh-binh',
  path: '/viettel-ninh-binh',
  locationName: 'Ninh Bình',
  regions: ninhBinhRegions,
  areaServed: ['Ninh Bình', 'Hà Nam', 'Nam Định'],
});

export const markets = {
  'da-nang': daNangMarket,
  'ninh-binh': ninhBinhMarket,
} as const satisfies Record<MarketId, MarketConfig>;

export function getMarketById(id: MarketId) {
  return markets[id];
}

export function getMarketHashHref(market: MarketConfig, hash: `#${string}`) {
  return market.path === '/' ? `/${hash}` : `${market.path}${hash}`;
}
