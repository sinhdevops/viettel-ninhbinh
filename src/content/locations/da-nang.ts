import type { MarketConfig } from '@/config/market-types';
import { daNangRegions } from '@/data/regions';

export const daNangMarket = {
  id: 'da-nang',
  slug: 'viettel-da-nang',
  path: '/viettel-da-nang',
  status: 'indexed',
  locationName: 'Đà Nẵng',
  siteName: 'Viettel Đà Nẵng',
  regions: daNangRegions,
  areaServed: ['Đà Nẵng'],
  localIntroduction: [
    'Tiếp nhận nhu cầu lắp Internet, Wi-Fi Mesh, TV360, camera và đường truyền doanh nghiệp tại khu vực Đà Nẵng.',
    'Danh sách khu vực dùng để tiếp nhận yêu cầu; khả năng cung cấp thực tế vẫn được xác minh theo địa chỉ cụ thể.',
  ],
  hero: {
    eyebrow: 'Tư vấn dịch vụ Viettel tại Đà Nẵng',
    title: 'Kiểm tra hạ tầng Viettel tại Đà Nẵng',
    description:
      'Chọn dịch vụ theo nhu cầu gia đình hoặc doanh nghiệp và kiểm tra khả năng cung cấp tại địa chỉ trước khi đăng ký.',
    highlights: [
      'Internet cáp quang và Wi-Fi Mesh',
      'Truyền hình TV360 cho gia đình',
      'Camera và đường truyền doanh nghiệp',
      'Xác nhận hạ tầng, thiết bị và chi phí trước đăng ký',
    ],
  },
  faq: [
    {
      question: 'Làm sao đăng ký Internet Viettel tại Đà Nẵng?',
      answer:
        'Chọn gói quan tâm, nhập địa chỉ và số điện thoại. Nhân viên sẽ kiểm tra hạ tầng rồi liên hệ xác nhận thông tin.',
    },
    {
      question: 'Gói cước có áp dụng giống nhau ở mọi địa chỉ không?',
      answer:
        'Gói, thiết bị và ưu đãi có thể phụ thuộc hạ tầng và chính sách tại thời điểm đăng ký. Thông tin cuối cùng được xác nhận theo địa chỉ.',
    },
    {
      question: 'Có gói cho cửa hàng và doanh nghiệp không?',
      answer:
        'Có các nhóm Internet doanh nghiệp và giải pháp theo nhu cầu. Băng thông, IP tĩnh và thiết bị được tư vấn theo quy mô sử dụng.',
    },
    {
      question: 'Cần hỗ trợ kỹ thuật thì gọi số nào?',
      answer: 'Thuê bao đang sử dụng có thể gọi tổng đài kỹ thuật Viettel 1800 8119.',
    },
  ],
  seo: {
    title: 'Lắp mạng Viettel Đà Nẵng | Internet, TV360 & Camera',
    description:
      'Tư vấn lắp mạng Viettel tại Đà Nẵng: Internet cáp quang, Wi-Fi Mesh, TV360, camera và gói doanh nghiệp. Kiểm tra hạ tầng theo địa chỉ.',
    keywords: [
      'lắp mạng Viettel Đà Nẵng',
      'Internet Viettel Đà Nẵng',
      'Wi-Fi Mesh Viettel Đà Nẵng',
      'camera Viettel Đà Nẵng',
      'TV360 Đà Nẵng',
    ],
    ogImage: '/images/viettel-social-share.jpg',
    lastModified: '2026-08-12',
  },
} as const satisfies MarketConfig;
