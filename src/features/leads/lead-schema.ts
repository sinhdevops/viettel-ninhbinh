import { z } from 'zod';

export const leadSchema = z.object({
  service: z.enum(['internet', 'combo', 'business'], {
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
  website: z.string().optional(),
});

export type LeadFormValues = z.infer<typeof leadSchema>;
