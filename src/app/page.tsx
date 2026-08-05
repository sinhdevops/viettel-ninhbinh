import {
  AudienceSection,
  BottomCta,
  BusinessSection,
  ComboSection,
  FaqSection,
  HeroSection,
  InstallationProcessSection,
  InternetPlansSection,
  MeshSection,
  TestimonialsSection,
} from '@/components/home';
import { LeadSelectionProvider } from '@/features/leads/lead-selection-context';
import { HomePageJsonLd } from '@/lib/structured-data';

export default function HomePage() {
  return (
    <>
      <HomePageJsonLd />
      <LeadSelectionProvider>
        <main className="overflow-hidden">
          <HeroSection />
          <AudienceSection />
          <InternetPlansSection />
          <ComboSection />
          <MeshSection />
          <BusinessSection />
          <InstallationProcessSection />
          <TestimonialsSection />
          <FaqSection />
          <BottomCta />
        </main>
      </LeadSelectionProvider>
    </>
  );
}
