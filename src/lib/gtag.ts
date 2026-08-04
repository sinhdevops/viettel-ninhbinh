export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || '';
export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || '';

/**
 * Track page views for Google Analytics / Google Ads.
 */
export function pageview(url: string) {
  if (typeof window === 'undefined' || !GA_MEASUREMENT_ID) return;

  window.gtag?.('config', GA_MEASUREMENT_ID, {
    page_path: url,
  });
}

/**
 * Track custom events for Google Analytics / Google Ads conversion.
 *
 * @example
 * ```ts
 * // Track a lead form submission
 * gtagEvent({
 *   action: 'generate_lead',
 *   category: 'engagement',
 *   label: 'homepage_form',
 *   value: 1,
 * });
 *
 * // Track Google Ads conversion
 * gtagEvent({
 *   action: 'conversion',
 *   category: 'ads',
 *   label: 'AW-XXXXXXXXX/XXXXXXXXX',
 * });
 * ```
 */
export function gtagEvent({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) {
  if (typeof window === 'undefined') return;

  window.gtag?.('event', action, {
    event_category: category,
    event_label: label,
    value,
  });
}

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: Record<string, unknown>[];
    fbq?: (...args: unknown[]) => void;
  }
}
