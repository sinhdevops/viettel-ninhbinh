import { NextResponse } from 'next/server';

import { getMarketById } from '@/config/markets';
import { planOptions, serviceOptions } from '@/data/home';
import { leadSchema } from '@/features/leads/lead-schema';
import { sendLeadToTelegram, TelegramConfigurationError } from '@/features/leads/server/telegram';

const MAX_REQUEST_SIZE_BYTES = 10_000;

function jsonMessage(message: string, status = 200) {
  return NextResponse.json({ message }, { status });
}

export async function POST(request: Request) {
  let payload: unknown;

  try {
    const body = await request.text();

    if (new TextEncoder().encode(body).byteLength > MAX_REQUEST_SIZE_BYTES) {
      return jsonMessage('Dữ liệu gửi lên vượt quá giới hạn cho phép.', 413);
    }

    payload = JSON.parse(body) as unknown;
  } catch {
    return jsonMessage('Dữ liệu gửi lên không hợp lệ.', 400);
  }

  const result = leadSchema.safeParse(payload);

  if (!result.success) {
    return jsonMessage(result.error.issues[0]?.message ?? 'Vui lòng kiểm tra lại thông tin.', 422);
  }

  const { market: marketId, service, plan, address, district, phone, website } = result.data;

  // Honeypot: silently accept automated submissions without forwarding personal data.
  if (website) {
    return jsonMessage('Đã ghi nhận yêu cầu.');
  }

  const market = getMarketById(marketId);

  if (!market.regions.some((region) => region === district)) {
    return jsonMessage('Khu vực đã chọn không hợp lệ.', 422);
  }

  const selectedPlan = plan
    ? planOptions.find((option) => option.value === plan && option.service === service)
    : undefined;

  if (plan && !selectedPlan) {
    return jsonMessage('Gói cước không phù hợp với loại dịch vụ đã chọn.', 422);
  }

  const serviceLabel = serviceOptions.find((option) => option.value === service)?.label ?? service;
  const planLabel = selectedPlan?.label ?? 'Chưa chọn gói';
  const normalizedPhone = phone.replace(/[ .-]/g, '');

  try {
    await sendLeadToTelegram({
      market: market.siteName,
      service: serviceLabel,
      plan: planLabel,
      address,
      district,
      phone: normalizedPhone,
    });

    return jsonMessage('Đã ghi nhận thông tin. Chúng tôi sẽ liên hệ lại sớm.');
  } catch (error) {
    if (error instanceof TelegramConfigurationError) {
      return jsonMessage(
        'Kênh tiếp nhận đang được cấu hình. Vui lòng gọi hotline để được hỗ trợ.',
        503
      );
    }

    return jsonMessage('Chưa thể gửi yêu cầu lúc này. Vui lòng thử lại hoặc gọi hotline.', 502);
  }
}
