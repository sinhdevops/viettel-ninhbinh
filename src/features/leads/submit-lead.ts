import type { LeadFormValues } from './lead-schema';

interface LeadResponse {
  message?: string;
  accepted?: boolean;
}

function getAttribution() {
  if (typeof window === 'undefined') return {};

  const params = new URLSearchParams(window.location.search);
  return {
    landingPath: `${window.location.pathname}${window.location.search}`.slice(0, 300),
    referrer: document.referrer.slice(0, 500),
    utmSource: params.get('utm_source')?.slice(0, 120),
    utmMedium: params.get('utm_medium')?.slice(0, 120),
    utmCampaign: params.get('utm_campaign')?.slice(0, 160),
    utmContent: params.get('utm_content')?.slice(0, 160),
    utmTerm: params.get('utm_term')?.slice(0, 160),
    gclid: params.get('gclid')?.slice(0, 300),
    gbraid: params.get('gbraid')?.slice(0, 300),
    wbraid: params.get('wbraid')?.slice(0, 300),
  };
}

async function submitLead(values: LeadFormValues) {
  const response = await fetch('/api/leads', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...values, ...getAttribution() }),
  });
  const payload = (await response.json()) as LeadResponse;

  if (!response.ok) {
    throw new Error(payload.message || 'Chưa thể gửi thông tin lúc này.');
  }

  if (payload.accepted) {
    window.dataLayer?.push({
      event: 'lead_submitted',
      market: values.market,
      service: values.service,
    });
  }

  return payload.message || 'Đã ghi nhận thông tin. Chúng tôi sẽ liên hệ lại sớm.';
}

export { submitLead };
