import 'server-only';

const TELEGRAM_API_TIMEOUT_MS = 8_000;

interface TelegramApiResponse {
  ok: boolean;
  description?: string;
}

interface TelegramLead {
  market: string;
  service: string;
  plan: string;
  address: string;
  district: string;
  phone: string;
  landingPath?: string;
  referrer?: string;
  attribution: {
    utmSource?: string;
    utmMedium?: string;
    utmCampaign?: string;
    utmContent?: string;
    utmTerm?: string;
    gclid?: string;
    gbraid?: string;
    wbraid?: string;
  };
}

export class TelegramConfigurationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'TelegramConfigurationError';
  }
}

export class TelegramDeliveryError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'TelegramDeliveryError';
  }
}

function escapeHtml(value: string) {
  return value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
}

function getMessageThreadId() {
  const rawThreadId = process.env.TELEGRAM_MESSAGE_THREAD_ID?.trim();

  if (!rawThreadId) return undefined;

  const threadId = Number(rawThreadId);

  if (!Number.isSafeInteger(threadId) || threadId <= 0) {
    throw new TelegramConfigurationError('TELEGRAM_MESSAGE_THREAD_ID must be a positive integer.');
  }

  return threadId;
}

function formatSubmittedAt(date: Date) {
  return new Intl.DateTimeFormat('vi-VN', {
    dateStyle: 'short',
    timeStyle: 'medium',
    timeZone: 'Asia/Ho_Chi_Minh',
  }).format(date);
}

function buildTelegramMessage(lead: TelegramLead) {
  const attributionLines = [
    lead.landingPath && `<b>Landing:</b> ${escapeHtml(lead.landingPath)}`,
    lead.attribution.utmCampaign && `<b>Campaign:</b> ${escapeHtml(lead.attribution.utmCampaign)}`,
    lead.attribution.utmSource && `<b>UTM source:</b> ${escapeHtml(lead.attribution.utmSource)}`,
    lead.attribution.utmMedium && `<b>UTM medium:</b> ${escapeHtml(lead.attribution.utmMedium)}`,
    lead.attribution.utmContent && `<b>UTM content:</b> ${escapeHtml(lead.attribution.utmContent)}`,
    lead.attribution.utmTerm && `<b>UTM term:</b> ${escapeHtml(lead.attribution.utmTerm)}`,
    lead.attribution.gclid && `<b>GCLID:</b> <code>${escapeHtml(lead.attribution.gclid)}</code>`,
    lead.attribution.gbraid && `<b>GBRAID:</b> <code>${escapeHtml(lead.attribution.gbraid)}</code>`,
    lead.attribution.wbraid && `<b>WBRAID:</b> <code>${escapeHtml(lead.attribution.wbraid)}</code>`,
    lead.referrer && `<b>Referrer:</b> ${escapeHtml(lead.referrer)}`,
  ].filter(Boolean);

  return [
    '🔔 <b>YÊU CẦU LẮP ĐẶT MỚI</b>',
    '━━━━━━━━━━━━━━',
    `<b>Khu vực website:</b> ${escapeHtml(lead.market)}`,
    `<b>Dịch vụ:</b> ${escapeHtml(lead.service)}`,
    `<b>Gói cước:</b> ${escapeHtml(lead.plan)}`,
    `<b>Địa chỉ:</b> ${escapeHtml(lead.address)}`,
    `<b>Khu vực:</b> ${escapeHtml(lead.district)}`,
    `<b>Điện thoại:</b> <code>${escapeHtml(lead.phone)}</code>`,
    `<b>Thời gian:</b> ${escapeHtml(formatSubmittedAt(new Date()))}`,
    `<b>Nguồn:</b> Website ${escapeHtml(lead.market)}`,
    ...attributionLines,
  ].join('\n');
}

export async function sendLeadToTelegram(lead: TelegramLead) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN?.trim();
  const chatId = process.env.TELEGRAM_CHAT_ID?.trim();

  if (!botToken || !chatId) {
    throw new TelegramConfigurationError('Telegram credentials are missing.');
  }

  const messageThreadId = getMessageThreadId();
  const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text: buildTelegramMessage(lead),
      parse_mode: 'HTML',
      link_preview_options: { is_disabled: true },
      ...(messageThreadId ? { message_thread_id: messageThreadId } : {}),
    }),
    cache: 'no-store',
    signal: AbortSignal.timeout(TELEGRAM_API_TIMEOUT_MS),
  });

  let result: TelegramApiResponse | undefined;

  try {
    result = (await response.json()) as TelegramApiResponse;
  } catch {
    // A non-JSON response is never a valid Telegram Bot API success response.
  }

  if (!response.ok || result?.ok !== true) {
    throw new TelegramDeliveryError(
      `Telegram rejected the message (${response.status}${result?.description ? `: ${result.description}` : ''}).`
    );
  }
}
