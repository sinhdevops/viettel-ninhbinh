import { TrustPage } from '@/components/content/trust-page';
import { getTrustPages } from '@/content/trust-pages';
import { generateMetadata } from '@/lib/seo';

const content = getTrustPages()['quy-trinh-giai-quyet-khieu-nai'];
export const metadata = generateMetadata({
  title: content.title,
  description: content.description,
  path: `/${content.slug}`,
});
export default function ComplaintPage() {
  return <TrustPage content={content} />;
}
