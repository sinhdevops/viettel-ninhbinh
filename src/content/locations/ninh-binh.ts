import type { MarketConfig } from '@/config/market-types';
import { ninhBinhRegions } from '@/data/regions';

export const ninhBinhMarket = {
  id: 'ninh-binh',
  slug: 'viettel-ninh-binh',
  path: '/viettel-ninh-binh',
  status: 'indexed',
  locationName: 'Ninh Bình',
  siteName: 'Viettel Ninh Bình',
  regions: ninhBinhRegions,
  areaServed: ['Ninh Bình', 'Hà Nam', 'Nam Định'],
  localIntroduction: [
    'Tiếp nhận nhu cầu lắp Internet, Wi-Fi Mesh, TV360, camera và đường truyền doanh nghiệp tại khu vực Ninh Bình.',
    'Khả năng cung cấp, thiết bị và lịch lắp đặt được kiểm tra theo từng địa chỉ trước khi khách hàng xác nhận đăng ký.',
  ],
  hero: {
    eyebrow: 'Tư vấn dịch vụ Viettel tại Ninh Bình',
    title: 'Lắp Internet Viettel tại Ninh Bình',
    description:
      'Kiểm tra hạ tầng theo địa chỉ, chọn gói theo nhu cầu và xác nhận rõ chi phí, thiết bị trước khi đăng ký.',
    highlights: [
      'Internet cáp quang và Wi-Fi Mesh',
      'Combo Internet + truyền hình TV360',
      'Camera và giải pháp cho doanh nghiệp',
      'Tiếp nhận yêu cầu tại các khu vực thuộc Ninh Bình',
    ],
  },
  faq: [
    {
      question: 'Làm sao kiểm tra địa chỉ tại Ninh Bình có hạ tầng Viettel?',
      answer:
        'Gửi địa chỉ và số điện thoại qua biểu mẫu. Nhân viên sẽ kiểm tra khả năng cung cấp theo vị trí trước khi xác nhận gói và lịch lắp đặt.',
    },
    {
      question: 'Phí hòa mạng tại Ninh Bình là bao nhiêu?',
      answer:
        'Phí hòa mạng hiện được tư vấn là 300.000đ. Tổng chi phí còn phụ thuộc gói cước, hình thức trả trước và chính sách tại thời điểm đăng ký.',
    },
    {
      question: 'Có thể đăng ký Wi-Fi Mesh hoặc TV360 không?',
      answer:
        'Có thể đăng ký theo gói phù hợp. Số lượng thiết bị và điều kiện sử dụng được xác nhận sau khi kiểm tra hạ tầng và nhu cầu tại địa chỉ.',
    },
    {
      question: 'Thuê bao đang sử dụng gặp lỗi liên hệ ở đâu?',
      answer:
        'Với sự cố kỹ thuật của thuê bao đang hoạt động, vui lòng gọi tổng đài Viettel 1800 8119.',
    },
  ],
  seo: {
    title: 'Lắp mạng Viettel Ninh Bình | Internet, TV360 & Camera',
    description:
      'Đăng ký lắp mạng Viettel tại Ninh Bình. Kiểm tra hạ tầng Internet cáp quang, Wi-Fi Mesh, TV360, camera và gói doanh nghiệp theo địa chỉ.',
    keywords: [
      'lắp mạng Viettel Ninh Bình',
      'Internet Viettel Ninh Bình',
      'Wi-Fi Mesh Viettel Ninh Bình',
      'camera Viettel Ninh Bình',
      'TV360 Ninh Bình',
    ],
    ogImage: '/images/viettel-social-share.jpg',
    lastModified: '2026-08-12',
  },
} as const satisfies MarketConfig;
