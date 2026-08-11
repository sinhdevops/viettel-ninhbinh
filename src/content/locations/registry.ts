import type { MarketConfig, MarketId } from '@/config/market-types';

import { daNangMarket } from './da-nang';
import { ninhBinhMarket } from './ninh-binh';

export const locationPages: readonly MarketConfig[] = [ninhBinhMarket, daNangMarket];

export const markets = {
  'da-nang': daNangMarket,
  'ninh-binh': ninhBinhMarket,
} as const satisfies Record<MarketId, MarketConfig>;

export function getMarketById(id: MarketId) {
  return markets[id];
}

export function getMarketBySlug(slug: string) {
  return locationPages.find((market) => market.slug === slug);
}

export { daNangMarket, ninhBinhMarket };
