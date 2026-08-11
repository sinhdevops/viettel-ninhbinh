export const marketIds = ['da-nang', 'ninh-binh'] as const;

export type MarketId = (typeof marketIds)[number];

export interface MarketConfig {
  id: MarketId;
  slug: `viettel-${string}`;
  path: `/viettel-${string}`;
  status: 'adsOnly' | 'draft' | 'indexed';
  locationName: string;
  siteName: string;
  regions: readonly string[];
  areaServed: readonly string[];
  localIntroduction: readonly string[];
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    highlights: readonly string[];
  };
  faq: readonly {
    question: string;
    answer: string;
  }[];
  seo: {
    title: string;
    description: string;
    keywords: readonly string[];
    ogImage: string;
    lastModified: string;
  };
}
