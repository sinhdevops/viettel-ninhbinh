import { MarketLandingPage } from '@/components/home/market-landing-page';
import { daNangMarket } from '@/config/markets';
import { generateMarketMetadata } from '@/lib/seo';

export const metadata = generateMarketMetadata(daNangMarket);

export default function HomePage() {
  return <MarketLandingPage market={daNangMarket} />;
}
