import { FloatingContact, SiteFooter, SiteHeader } from '@/components/layout';
import { SitePageJsonLd } from '@/lib/structured-data';

import { GlobalHeroSection } from './global-hero-section';
import { GlobalOffersSection } from './global-offers-section';
import { LocationDirectorySection } from './location-directory-section';
import { ServiceDirectorySection } from './service-directory-section';

function GlobalHomePage() {
  return (
    <>
      <SitePageJsonLd />
      <SiteHeader />
      <main id="main-content" className="flex flex-1 flex-col overflow-hidden" tabIndex={-1}>
        <GlobalHeroSection />
        <ServiceDirectorySection />
        <GlobalOffersSection />
        <LocationDirectorySection />
      </main>
      <SiteFooter />
      <FloatingContact />
    </>
  );
}

export { GlobalHomePage };
