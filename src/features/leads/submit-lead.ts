import type { LeadFormValues } from './lead-schema';

interface LeadResponse {
  message?: string;
}

async function submitLead(values: LeadFormValues) {
  const response = await fetch('/api/leads', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(values),
  });
  const payload = (await response.json()) as LeadResponse;

  if (!response.ok) {
    throw new Error(payload.message || 'Chưa thể gửi thông tin lúc này.');
  }

  return payload.message || 'Đã ghi nhận thông tin. Chúng tôi sẽ liên hệ lại sớm.';
}

export { submitLead };
