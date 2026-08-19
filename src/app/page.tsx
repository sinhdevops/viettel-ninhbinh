import { GlobalHomePage } from '@/components/home/global-home-page';
import { generateMetadata } from '@/lib/seo';

export const metadata = generateMetadata({
  title: 'Internet, Truyền hình, Camera & Giải pháp Viettel',
  description:
    'Tìm hiểu Internet cáp quang, Wi-Fi Mesh, TV360, camera và giải pháp doanh nghiệp Viettel. Chọn khu vực để kiểm tra hạ tầng và đăng ký.',
  path: '/',
  image: '/images/viettel-social-share.jpg',
  keywords: ['Internet Viettel', 'Wi-Fi Mesh Viettel', 'camera Viettel', 'TV360'],
});

export default function HomePage() {
  return <GlobalHomePage />;
}
