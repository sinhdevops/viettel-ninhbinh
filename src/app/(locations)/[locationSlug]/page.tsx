import { notFound } from 'next/navigation';

import { MarketLandingPage } from '@/components/home/market-landing-page';
import { getMarketBySlug, locationPages } from '@/config/markets';
import { generateMarketMetadata } from '@/lib/seo';

interface LocationPageProps {
  params: Promise<{ locationSlug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return locationPages
    .filter((market) => market.status !== 'draft')
    .map((market) => ({ locationSlug: market.slug }));
}

export async function generateMetadata({ params }: LocationPageProps) {
  const { locationSlug } = await params;
  const market = getMarketBySlug(locationSlug);

  if (!market) return {};

  return generateMarketMetadata(market);
}

export default async function LocationPage({ params }: LocationPageProps) {
  const { locationSlug } = await params;
  const market = getMarketBySlug(locationSlug);

  if (!market || market.status === 'draft') notFound();

  return <MarketLandingPage market={market} />;
}
