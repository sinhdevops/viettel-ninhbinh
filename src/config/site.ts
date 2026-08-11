export interface NavigationItem {
  label: string;
  href: `#${string}`;
}

export interface FooterNavigationItem {
  label: string;
  href: string;
}

const phoneNumber = (process.env.NEXT_PUBLIC_PHONE || '0325610016').replace(/[^\d+]/g, '');
const phoneDigits = phoneNumber.replace(/\D/g, '');
const phoneDisplay =
  phoneDigits.length === 10
    ? `${phoneDigits.slice(0, 4)}.${phoneDigits.slice(4, 7)}.${phoneDigits.slice(7)}`
    : phoneNumber;

export const siteConfig = {
  name: 'Đăng ký dịch vụ Viettel',
  description: 'Internet, truyền hình, camera và giải pháp kết nối cho doanh nghiệp.',
  phone: {
    display: phoneDisplay,
    href: `tel:${phoneNumber}`,
  },
  zaloUrl: `https://zalo.me/${phoneDigits}`,
  navigation: [
    { label: 'Trang chủ', href: '#top' },
    { label: 'Internet', href: '#plans' },
    { label: 'Internet + Truyền hình', href: '#combo' },
    { label: 'Camera', href: '#camera' },
    { label: 'Doanh nghiệp', href: '#business' },
  ] satisfies readonly NavigationItem[],
  footerNavigation: {
    services: [
      { label: 'Internet Viettel', href: '/internet-viettel' },
      { label: 'Truyền hình Viettel', href: '/truyen-hinh-viettel' },
      { label: 'Camera Viettel', href: '/camera-viettel' },
      { label: 'Internet doanh nghiệp', href: '/internet-doanh-nghiep' },
    ] satisfies readonly FooterNavigationItem[],
    support: [
      { label: 'Chính sách bảo mật', href: '/chinh-sach-bao-mat' },
      { label: 'Điều khoản sử dụng', href: '/dieu-khoan-su-dung' },
      { label: 'Chính sách đăng ký', href: '/chinh-sach-dang-ky-lap-dat' },
      { label: 'Giải quyết khiếu nại', href: '/quy-trinh-giai-quyet-khieu-nai' },
    ] satisfies readonly FooterNavigationItem[],
    about: [
      { label: 'Giới thiệu', href: '/gioi-thieu' },
      { label: 'Liên hệ', href: '/lien-he' },
      { label: 'Viettel Ninh Bình', href: '/viettel-ninh-binh' },
      { label: 'Viettel Đà Nẵng', href: '/viettel-da-nang' },
    ] satisfies readonly FooterNavigationItem[],
  },
} as const;
