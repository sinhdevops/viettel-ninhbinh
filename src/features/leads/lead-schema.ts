import { z } from 'zod';

import { marketIds } from '@/config/market-types';

export const leadSchema = z.object({
  market: z.enum(marketIds),
  service: z.enum(['internet', 'combo', 'camera', 'business'], {
    message: 'Vui lòng chọn loại dịch vụ.',
  }),
  plan: z.string().max(120, 'Gói cước không hợp lệ.').optional(),
  address: z
    .string()
    .trim()
    .min(5, 'Vui lòng nhập địa chỉ cụ thể hơn.')
    .max(200, 'Địa chỉ không được vượt quá 200 ký tự.'),
  district: z.string().trim().min(1, 'Vui lòng chọn khu vực.'),
  phone: z
    .string()
    .trim()
    .min(9, 'Vui lòng nhập số điện thoại.')
    .max(16, 'Số điện thoại không hợp lệ.')
    .regex(/^(?:\+84|0)[\d .-]{8,13}$/, 'Số điện thoại không đúng định dạng.'),
  privacyConsent: z.boolean().refine(Boolean, {
    message: 'Vui lòng đồng ý chính sách bảo mật để gửi yêu cầu.',
  }),
  landingPath: z.string().trim().max(300).optional(),
  referrer: z.string().trim().max(500).optional(),
  utmSource: z.string().trim().max(120).optional(),
  utmMedium: z.string().trim().max(120).optional(),
  utmCampaign: z.string().trim().max(160).optional(),
  utmContent: z.string().trim().max(160).optional(),
  utmTerm: z.string().trim().max(160).optional(),
  gclid: z.string().trim().max(300).optional(),
  gbraid: z.string().trim().max(300).optional(),
  wbraid: z.string().trim().max(300).optional(),
  website: z.string().optional(),
});

export type LeadFormValues = z.infer<typeof leadSchema>;
