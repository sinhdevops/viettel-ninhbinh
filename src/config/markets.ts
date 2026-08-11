export type { MarketConfig, MarketId } from './market-types';
export {
  daNangMarket,
  getMarketById,
  getMarketBySlug,
  locationPages,
  markets,
  ninhBinhMarket,
} from '@/content/locations/registry';

import type { MarketConfig } from './market-types';

export function getMarketHashHref(market: MarketConfig | undefined, hash: `#${string}`) {
  return market ? `${market.path}${hash}` : `/${hash}`;
}
