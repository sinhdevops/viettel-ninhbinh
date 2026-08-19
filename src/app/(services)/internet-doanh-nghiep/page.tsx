import { BusinessInternetPage } from '@/components/services/business-internet-page';
import { servicePages } from '@/content/services';
import { generateMetadata } from '@/lib/seo';

const content = servicePages.business;
export const metadata = generateMetadata({
  title: content.seoTitle,
  description: content.seoDescription,
  path: content.path,
  image: '/images/viettel-social-share.jpg',
});

export default function BusinessInternetRoute() {
  return <BusinessInternetPage />;
}
