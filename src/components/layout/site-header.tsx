import { MessageCircleIcon, PhoneIcon } from 'lucide-react';

import { TrackedContactLink } from '@/components/tracking/tracked-contact-link';
import { Button } from '@/components/ui/button';
import type { MarketConfig } from '@/config/markets';
import { siteConfig } from '@/config/site';

import { Container } from './container';
import { DesktopNavigation } from './desktop-navigation';
import { MobileNavigation } from './mobile-navigation';
import { ScrollProgress } from './scroll-progress';
import { SiteBrand } from './site-brand';

interface SiteHeaderProps {
  market?: MarketConfig;
}

function SiteHeader({ market }: SiteHeaderProps) {
  return (
    <header className="border-border/80 bg-background/95 supports-[backdrop-filter]:bg-background/85 sticky top-0 z-50 border-b shadow-[0_3px_16px_rgb(20_34_55/4%)] backdrop-blur-xl">
      <Container className="flex h-16 items-stretch justify-between gap-3 lg:h-[74px] lg:gap-6">
        <div className="flex items-center">
          <SiteBrand />
        </div>

        <DesktopNavigation market={market} className="hidden gap-5 lg:flex xl:gap-7" />

        <div className="flex items-center gap-2">
          <TrackedContactLink
            channel="phone"
            placement="header"
            href={siteConfig.phone.href}
            className="text-primary hover:text-primary-hover focus-visible:ring-ring/20 hidden items-center gap-1.5 text-sm font-extrabold whitespace-nowrap outline-none focus-visible:rounded-md focus-visible:ring-3 xl:inline-flex"
          >
            <PhoneIcon className="size-4" aria-hidden="true" />
            {siteConfig.phone.display}
          </TrackedContactLink>
          <Button asChild size="sm" className="hidden md:inline-flex">
            <TrackedContactLink
              channel="zalo"
              placement="header"
              href={siteConfig.zaloUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircleIcon />
              Liên hệ ngay
            </TrackedContactLink>
          </Button>
          <MobileNavigation market={market} />
        </div>
      </Container>
      <ScrollProgress />
    </header>
  );
}

export { SiteHeader };
