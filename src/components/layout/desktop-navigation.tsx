import Link from 'next/link';

import type { MarketConfig } from '@/config/markets';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

interface DesktopNavigationProps {
  market?: MarketConfig;
  className?: string;
}

function DesktopNavigation({ className }: DesktopNavigationProps) {
  return (
    <nav aria-label="Điều hướng chính" className={cn('items-stretch', className)}>
      {siteConfig.navigation.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="group text-foreground/85 hover:text-primary focus-visible:text-primary relative inline-flex items-center px-1 text-sm font-semibold whitespace-nowrap transition-colors outline-none"
        >
          {item.label}
          <span
            aria-hidden="true"
            className="bg-primary absolute right-1/2 bottom-0 left-1/2 h-0.5 transition-[left,right] duration-200 group-hover:right-0 group-hover:left-0 group-focus-visible:right-0 group-focus-visible:left-0"
          />
        </Link>
      ))}
    </nav>
  );
}

export { DesktopNavigation };
