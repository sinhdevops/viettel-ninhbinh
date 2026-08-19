import { ArrowRightIcon } from 'lucide-react';
import Link from 'next/link';

import { TrackedContactLink } from '@/components/tracking/tracked-contact-link';
import type { MarketConfig } from '@/config/markets';
import { siteConfig, type FooterNavigationItem } from '@/config/site';
import { cn } from '@/lib/utils';

import { Container } from './container';
import { SiteBrand } from './site-brand';

interface FooterNavigationProps {
  title: string;
  items: readonly FooterNavigationItem[];
  className?: string;
}

function FooterNavigation({ title, items, className }: FooterNavigationProps) {
  return (
    <nav
      aria-label={title}
      className={cn(
        'border-border flex min-w-0 flex-col gap-2.5 rounded-xl border p-4 md:rounded-none md:border-0 md:p-0',
        className
      )}
    >
      <h2 className="text-foreground border-border border-b pb-3 text-sm font-bold md:border-0 md:pb-0">
        {title}
      </h2>
      {items.map((item) => (
        <Link
          key={`${item.label}-${item.href}`}
          href={item.href}
          className="before:bg-primary text-muted-foreground hover:text-primary focus-visible:text-primary flex min-h-11 items-center gap-2 text-xs leading-relaxed outline-none before:size-1 before:shrink-0 before:rounded-full md:min-h-8 md:before:hidden"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}

interface SiteFooterProps {
  market?: MarketConfig;
}

function SiteFooter({ market }: SiteFooterProps) {
  return (
    <footer
      id="footer"
      className="border-border bg-background text-foreground mt-auto border-t pt-10"
    >
      <Container>
        <div className="grid grid-cols-2 gap-5 md:grid-cols-[1.25fr_0.8fr_0.8fr_0.8fr_1.15fr] md:gap-7">
          <div className="col-span-2 px-1 pb-2 md:col-span-1 md:px-0">
            <SiteBrand inverse />
            <p className="text-muted-foreground mt-4 max-w-64 text-xs leading-relaxed">
              {siteConfig.name} – {siteConfig.description}
            </p>
            <p className="text-muted-foreground mt-3 max-w-64 text-[0.6875rem] leading-5">
              Website tiếp nhận nhu cầu tư vấn, không phải cổng thương mại điện tử chính thức của
              Viettel Telecom.
            </p>
          </div>

          <FooterNavigation title="Dịch vụ" items={siteConfig.footerNavigation.services} />
          <FooterNavigation title="Hỗ trợ" items={siteConfig.footerNavigation.support} />
          <FooterNavigation
            title="Về Viettel"
            items={siteConfig.footerNavigation.about}
            className="col-span-2 grid grid-cols-2 md:col-span-1 md:flex"
          />

          <div className="bg-card text-card-foreground shadow-card col-span-2 rounded-2xl p-5 md:col-span-1">
            <p className="text-muted-foreground text-xs font-semibold">Tư vấn lắp đặt</p>
            <TrackedContactLink
              channel="zalo"
              placement="footer"
              href={siteConfig.zaloUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary focus-visible:ring-ring/20 mt-2 flex min-h-11 items-center justify-between gap-2 rounded-xl px-1 text-sm font-extrabold outline-none focus-visible:ring-3"
            >
              <span>
                Chat Zalo <strong>{siteConfig.phone.display}</strong>
              </span>
              <span className="bg-primary/10 grid size-7 place-items-center rounded-full">
                <ArrowRightIcon className="size-4" aria-hidden="true" />
              </span>
            </TrackedContactLink>
            <p className="text-muted-foreground mt-2 text-xs">Tiếp nhận yêu cầu cả ngày</p>
            <a
              href={siteConfig.officialSupport.technicalPhone.href}
              className="text-muted-foreground hover:text-primary mt-3 flex min-h-11 items-center text-xs leading-5"
            >
              Hỗ trợ kỹ thuật thuê bao: {siteConfig.officialSupport.technicalPhone.display}
            </a>
          </div>
        </div>

        <p className="border-border text-muted-foreground mt-8 border-t py-5 text-center text-xs leading-relaxed">
          © {new Date().getFullYear()} {siteConfig.name}.{' '}
          {market
            ? `Trang thông tin dịch vụ tại ${market.locationName}.`
            : 'Thông tin giá và dịch vụ cần được xác nhận tại thời điểm đăng ký.'}
        </p>
      </Container>
    </footer>
  );
}

export { SiteFooter };
