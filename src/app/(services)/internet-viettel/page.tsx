import { ServiceDetailPage } from '@/components/services/service-detail-page';
import { servicePages } from '@/content/services';
import { generateMetadata } from '@/lib/seo';

const content = servicePages.internet;
export const metadata = generateMetadata({
  title: content.seoTitle,
  description: content.seoDescription,
  path: content.path,
  image: '/images/viettel-social-share.jpg',
});

export default function InternetPage() {
  return <ServiceDetailPage content={content} />;
}
