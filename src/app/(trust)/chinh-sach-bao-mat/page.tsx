import { TrustPage } from '@/components/content/trust-page';
import { getTrustPages } from '@/content/trust-pages';
import { generateMetadata } from '@/lib/seo';

const content = getTrustPages()['chinh-sach-bao-mat'];
export const metadata = generateMetadata({
  title: content.title,
  description: content.description,
  path: `/${content.slug}`,
});
export default function PrivacyPage() {
  return <TrustPage content={content} />;
}
