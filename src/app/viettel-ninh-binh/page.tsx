import { MarketLandingPage } from '@/components/home/market-landing-page';
import { ninhBinhMarket } from '@/config/markets';
import { generateMarketMetadata } from '@/lib/seo';

export const metadata = generateMarketMetadata(ninhBinhMarket);

export default function ViettelNinhBinhPage() {
  return <MarketLandingPage market={ninhBinhMarket} />;
}
