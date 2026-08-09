import { ArrowRightIcon } from 'lucide-react';
import Link from 'next/link';

import { getMarketHashHref, type MarketConfig } from '@/config/markets';
import { siteConfig, type NavigationItem } from '@/config/site';
import { cn } from '@/lib/utils';

import { Container } from './container';
import { SiteBrand } from './site-brand';

interface FooterNavigationProps {
  market: MarketConfig;
  title: string;
  items: readonly NavigationItem[];
  className?: string;
}

function FooterNavigation({ market, title, items, className }: FooterNavigationProps) {
  return (
    <nav
      aria-label={title}
      className={cn(
        'flex min-w-0 flex-col gap-3 rounded-xl border border-white/10 bg-white/5 p-4 md:rounded-none md:border-0 md:bg-transparent md:p-0',
        className
      )}
    >
      <h2 className="md:text-foreground border-b border-white/10 pb-3 text-sm font-bold md:border-0 md:pb-0">
        {title}
      </h2>
      {items.map((item) => (
        <Link
          key={`${item.label}-${item.href}`}
          href={getMarketHashHref(market, item.href)}
          className="before:bg-primary md:text-muted-foreground md:hover:text-primary md:focus-visible:text-primary flex items-center gap-2 text-xs leading-relaxed text-white/70 outline-none before:size-1 before:shrink-0 before:rounded-full hover:text-white focus-visible:text-white md:before:hidden"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}

interface SiteFooterProps {
  market: MarketConfig;
}

function SiteFooter({ market }: SiteFooterProps) {
  return (
    <footer
      id="footer"
      className="border-border md:bg-background md:text-foreground mt-auto border-t bg-[linear-gradient(155deg,#101b30_0%,#172743_100%)] pt-9 text-white md:bg-none md:pt-12"
    >
      <Container>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-[1.25fr_0.75fr_0.75fr_0.75fr_1.15fr] md:gap-7">
          <div className="col-span-2 px-1 pb-2 md:col-span-1 md:px-0">
            <SiteBrand market={market} inverse />
            <p className="md:text-muted-foreground mt-4 max-w-60 text-sm leading-relaxed text-white/65 md:text-xs">
              {market.siteName} – {siteConfig.description}
            </p>
          </div>

          <FooterNavigation
            market={market}
            title="Dịch vụ"
            items={siteConfig.footerNavigation.services}
          />
          <FooterNavigation
            market={market}
            title="Hỗ trợ"
            items={siteConfig.footerNavigation.support}
          />
          <FooterNavigation
            market={market}
            title="Về Viettel"
            items={siteConfig.footerNavigation.about}
            className="col-span-2 grid grid-cols-2 md:col-span-1 md:flex"
          />

          <div className="md:bg-card md:text-card-foreground md:shadow-card col-span-2 rounded-2xl bg-[linear-gradient(135deg,#ed1b2f,#c90015)] p-5 shadow-[0_14px_32px_rgb(0_0_0/22%)] md:col-span-1 md:bg-none">
            <p className="md:text-muted-foreground text-xs font-semibold text-white/80">
              Tư vấn lắp đặt
            </p>
            <a
              href={siteConfig.zaloUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary md:text-primary md:focus-visible:ring-ring/20 mt-2 flex min-h-11 items-center justify-between gap-2 rounded-xl bg-white px-3 text-sm font-extrabold outline-none focus-visible:ring-3 focus-visible:ring-white/50 md:bg-transparent md:px-0"
            >
              <span>
                Chat Zalo <strong>{siteConfig.phone.display}</strong>
              </span>
              <span className="bg-primary/10 grid size-7 place-items-center rounded-full">
                <ArrowRightIcon className="size-4" aria-hidden="true" />
              </span>
            </a>
            <p className="md:text-muted-foreground mt-2 text-xs text-white/70">
              Phản hồi nhanh trong giờ làm việc
            </p>
          </div>
        </div>

        <p className="md:border-border md:text-muted-foreground mt-6 border-t border-white/10 py-5 text-center text-xs leading-relaxed text-white/50 md:mt-10">
          © {new Date().getFullYear()} {market.siteName}. Mọi quyền được bảo lưu.
        </p>
      </Container>
    </footer>
  );
}

export { SiteFooter };
