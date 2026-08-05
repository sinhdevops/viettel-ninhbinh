const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://viettel-ninhbinh.vn').replace(
  /\/+$/,
  ''
);

export const seoConfig = {
  url: siteUrl,
  name: 'Viettel Ninh Bình',
  locale: 'vi_VN',
  language: 'vi-VN',
  title: 'Lắp mạng Viettel Ninh Bình | Internet & TV360',
  description:
    'Đăng ký lắp mạng Viettel tại Ninh Bình: Internet cáp quang, Wi-Fi Mesh, TV360 và gói doanh nghiệp. Kiểm tra hạ tầng, chọn gói từ 195.000đ/tháng.',
  keywords: [
    'lắp mạng Viettel Ninh Bình',
    'Internet Viettel Ninh Bình',
    'cáp quang Viettel Ninh Bình',
    'Wi-Fi Mesh Viettel',
    'TV360 Ninh Bình',
    'Internet doanh nghiệp Ninh Bình',
  ],
} as const;

export function absoluteUrl(path = '/') {
  return new URL(path, `${seoConfig.url}/`).toString();
}
