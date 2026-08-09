export const marketIds = ['da-nang', 'ninh-binh'] as const;

export type MarketId = (typeof marketIds)[number];

export interface MarketConfig {
  id: MarketId;
  path: '/' | '/viettel-ninh-binh';
  locationName: string;
  siteName: string;
  regions: readonly string[];
  areaServed: readonly string[];
  seo: {
    title: string;
    description: string;
    keywords: readonly string[];
  };
}
