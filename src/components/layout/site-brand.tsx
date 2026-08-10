import Image from 'next/image';
import Link from 'next/link';

import { getMarketHashHref, type MarketConfig } from '@/config/markets';
import { IMAGE_PATHS } from '@/constants/images';
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
        'focus-visible:ring-ring/20 inline-flex shrink-0 items-center outline-none focus-visible:rounded-sm focus-visible:ring-3',
        className
      )}
    >
      <Image
        src={IMAGE_PATHS.logo}
        alt=""
        width={184}
        height={72}
        sizes="(min-width: 1024px) 120px, 112px"
        className={cn(
          'h-auto w-28 object-contain lg:w-[7.5rem]',
          inverse && 'brightness-0 invert md:brightness-100 md:invert-0'
        )}
      />
    </Link>
  );
}

export { SiteBrand };
