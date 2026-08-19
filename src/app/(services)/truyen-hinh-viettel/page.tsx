import { TelevisionServicePage } from '@/components/services/television-service-page';
import { servicePages } from '@/content/services';
import { generateMetadata } from '@/lib/seo';

const content = servicePages.television;
export const metadata = generateMetadata({
  title: content.seoTitle,
  description: content.seoDescription,
  path: content.path,
  image: '/images/viettel-social-share.jpg',
});

export default function TelevisionPage() {
  return <TelevisionServicePage />;
}
