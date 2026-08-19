import { FloatingContact, MobileSectionNav, SiteFooter, SiteHeader } from '@/components/layout';
import type { MarketConfig } from '@/config/markets';
import { LeadSelectionProvider } from '@/features/leads/lead-selection-context';
import { MarketPageJsonLd } from '@/lib/structured-data';

import { AudienceSection } from './audience-section';
import { BottomCta } from './bottom-cta';
import { BusinessSection } from './business-section';
import { ComboSection } from './combo-section';
import { FaqSection } from './faq-section';
import { HeroSection } from './hero-section';
import { InstallationProcessSection } from './installation-process-section';
import { InternetPlansSection } from './internet-plans-section';
import { ProductHighlightGrid } from './product-highlight-grid';

interface MarketLandingPageProps {
  market: MarketConfig;
}

function MarketLandingPage({ market }: MarketLandingPageProps) {
  return (
    <>
      <MarketPageJsonLd market={market} />
      <SiteHeader market={market} />
      <LeadSelectionProvider>
        <main id="main-content" className="flex flex-1 flex-col overflow-x-clip" tabIndex={-1}>
          <HeroSection market={market} />
          <MobileSectionNav
            items={[
              { href: '#plans', label: 'Gói Internet' },
              { href: '#combo', label: 'Combo TV360' },
              { href: '#business', label: 'Doanh nghiệp' },
              { href: '#process', label: 'Quy trình' },
              { href: '#quick-register', label: 'Đăng ký' },
            ]}
          />
          <AudienceSection />
          <InternetPlansSection market={market} />
          <ComboSection market={market} />
          <ProductHighlightGrid />
          <BusinessSection />
          <InstallationProcessSection market={market} />
          <FaqSection market={market} />
          <BottomCta market={market} />
        </main>
      </LeadSelectionProvider>
      <SiteFooter market={market} />
      <FloatingContact />
    </>
  );
}

export { MarketLandingPage };
