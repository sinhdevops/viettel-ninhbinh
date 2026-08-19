import 'server-only';

import { siteConfig } from './site';

function optionalEnv(name: string) {
  const value = process.env[name]?.trim();
  return value || undefined;
}

export const businessConfig = {
  legalName: optionalEnv('BUSINESS_LEGAL_NAME'),
  displayName: optionalEnv('BUSINESS_DISPLAY_NAME') ?? 'Đầu mối tư vấn đăng ký dịch vụ Viettel',
  address: optionalEnv('BUSINESS_ADDRESS'),
  email: optionalEnv('BUSINESS_EMAIL'),
  taxId: optionalEnv('BUSINESS_TAX_ID'),
  authorizationReference: optionalEnv('BUSINESS_AUTHORIZATION_REFERENCE'),
  relationship:
    'Website do nhân viên tư vấn bán hàng Viettel vận hành trong phạm vi tiếp nhận nhu cầu, kiểm tra hạ tầng và hỗ trợ đăng ký dịch vụ.',
  workingHours: optionalEnv('BUSINESS_WORKING_HOURS') ?? 'Tiếp nhận yêu cầu cả ngày',
  serviceArea: optionalEnv('BUSINESS_SERVICE_AREA') ?? 'Toàn quốc',
  privacyContact: optionalEnv('BUSINESS_PRIVACY_CONTACT') ?? siteConfig.phone.display,
  complaintContact: optionalEnv('BUSINESS_COMPLAINT_CONTACT') ?? siteConfig.phone.display,
  dataRetention:
    optionalEnv('BUSINESS_DATA_RETENTION') ??
    'Dữ liệu được giữ trong kênh tiếp nhận cho đến khi hoàn tất mục đích tư vấn hoặc khi khách hàng yêu cầu xóa.',
} as const;
