export interface NavigationItem {
  label: string;
  href: `#${string}`;
}

const phoneNumber = process.env.NEXT_PUBLIC_PHONE || '0325610016';

export const siteConfig = {
  brandName: 'viettel',
  tagline: 'Theo cách của bạn',
  description: 'Kết nối số, kiến tạo tương lai.',
  phone: {
    display: '0325.610.016',
    href: `tel:${phoneNumber.replace(/[^\d+]/g, '')}`,
  },
  zaloUrl: `https://zalo.me/${phoneNumber.replace(/\D/g, '')}`,
  navigation: [
    { label: 'Trang chủ', href: '#top' },
    { label: 'Internet', href: '#plans' },
    { label: 'Internet + Truyền hình', href: '#combo' },
    { label: 'Doanh nghiệp', href: '#business' },
    { label: 'Hỗ trợ', href: '#faq' },
  ] satisfies readonly NavigationItem[],
  footerNavigation: {
    services: [
      { label: 'Internet', href: '#plans' },
      { label: 'Internet + Truyền hình', href: '#combo' },
      { label: 'Gói doanh nghiệp', href: '#business' },
    ],
    support: [
      { label: 'Hướng dẫn sử dụng', href: '#process' },
      { label: 'Câu hỏi thường gặp', href: '#faq' },
      { label: 'Chính sách bảo mật', href: '#faq' },
      { label: 'Điều khoản sử dụng', href: '#coverage' },
    ],
    about: [
      { label: 'Giới thiệu', href: '#top' },
      { label: 'Tin tức', href: '#top' },
      { label: 'Tuyển dụng', href: '#top' },
      { label: 'Liên hệ', href: '#footer' },
    ],
  },
} as const;
