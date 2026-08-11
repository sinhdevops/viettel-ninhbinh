import 'server-only';

function optionalEnv(name: string) {
  const value = process.env[name]?.trim();
  return value || undefined;
}

const connectionFee = Number(process.env.CONNECTION_FEE_VND ?? '300000');

export const commercialPolicy = {
  connectionFee:
    Number.isFinite(connectionFee) && connectionFee >= 0
      ? `${new Intl.NumberFormat('vi-VN').format(connectionFee)}đ`
      : undefined,
  equipment:
    'Thiết bị Wi-Fi Mesh được cấp hoặc cho mượn tùy gói cước, hạ tầng và chính sách tại thời điểm đăng ký.',
  prepayment: optionalEnv('PREPAYMENT_POLICY'),
  cancellation: optionalEnv('CANCELLATION_POLICY'),
  promotion:
    optionalEnv('PROMOTION_POLICY') ?? 'Đóng trước 12 tháng cước được tặng thêm 1 tháng cước.',
  promotionValidity: optionalEnv('PROMOTION_VALIDITY'),
} as const;
