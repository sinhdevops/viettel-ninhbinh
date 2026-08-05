import Link from 'next/link';

import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

interface SiteBrandProps {
  className?: string;
  inverse?: boolean;
}

function SiteBrand({ className, inverse = false }: SiteBrandProps) {
  return (
    <Link
      href="/#top"
      aria-label={`${siteConfig.name} - Trang chủ`}
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
