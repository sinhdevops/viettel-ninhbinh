import Link from 'next/link';

import { getMarketHashHref, type MarketConfig } from '@/config/markets';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

interface SiteBrandProps {
  market: MarketConfig;
  className?: string;
  inverse?: boolean;
}

function SiteBrand({ market, className, inverse = false }: SiteBrandProps) {
  return (
    <Link
      href={getMarketHashHref(market, '#top')}
      aria-label={`${market.siteName} - Trang chủ`}
      className={cn(
        'text-primary focus-visible:ring-ring/20 inline-flex shrink-0 flex-col leading-none font-black tracking-[-0.05em] outline-none focus-visible:rounded-sm focus-visible:ring-3',
        className
      )}
    >
      <span className="text-[1.75rem]">{siteConfig.brandName}</span>
      <span
        className={cn(
          'text-muted-foreground mt-1 text-center text-[0.5rem] leading-none font-semibold tracking-normal',
          inverse && 'text-white/60'
        )}
      >
        {siteConfig.tagline}
      </span>
    </Link>
  );
}

export { SiteBrand };
