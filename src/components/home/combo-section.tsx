import { CheckIcon } from 'lucide-react';
import Image from 'next/image';

import { Container } from '@/components/layout/container';
import type { MarketConfig } from '@/config/markets';
import { IMAGE_PATHS } from '@/constants/images';
import { comboPlans, consumerPricingReference } from '@/data/home';

import { PlanCard } from './plan-card';
import { SectionHeading } from './section-heading';

const comboBenefits = [
  'Internet từ 300 Mbps theo nhóm gói',
  'Mức giá dưới đây áp dụng cho phương án TV360 Box',
  'Thiết bị Wi-Fi 6 hoặc Wi-Fi 6 + Mesh theo gói',
  'Nội dung TV360 được xác nhận tại thời điểm đăng ký',
] as const;

interface ComboSectionProps {
  market: MarketConfig;
}

function ComboSection({ market }: ComboSectionProps) {
  return (
    <section
      id="combo"
      className="scroll-mt-20 border-y border-red-50 bg-[linear-gradient(90deg,#fff_0%,#fff5f5_52%,#fff_100%)] py-12 sm:py-16"
    >
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
          <div>
            <SectionHeading
              eyebrow="Internet kết hợp TV360"
              title={`Combo Internet + Truyền hình tại ${market.locationName}`}
              description="So sánh rõ tốc độ, số điểm phát và hình thức sử dụng TV360 trước khi chọn."
              align="left"
            />
            <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {comboBenefits.map((benefit) => (
                <li key={benefit} className="text-foreground/75 flex items-center gap-2.5 text-sm">
                  <CheckIcon className="text-primary size-4 shrink-0" aria-hidden="true" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mx-auto aspect-[16/10] w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-[0_20px_55px_rgb(23_35_58/12%)]">
            <Image
              src={IMAGE_PATHS.tv360Entertainment}
              alt="Smart TV và đầu thu cho dịch vụ truyền hình TV360"
              fill
              sizes="(max-width: 1023px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        <p className="text-muted-foreground mt-8 text-xs font-semibold md:hidden">
          Vuốt ngang để xem các gói còn lại
        </p>
        <div className="-mx-4 mt-3 flex snap-x snap-mandatory [scrollbar-width:none] gap-4 overflow-x-auto px-4 pt-3 pb-5 sm:-mx-6 sm:px-6 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0 [&::-webkit-scrollbar]:hidden">
          {comboPlans.slice(0, 3).map((plan) => (
            <PlanCard key={plan.id} plan={plan} service="combo" />
          ))}
        </div>

        <p className="text-muted-foreground mt-1 text-center text-xs leading-relaxed">
          Giá TV360 Box tham khảo cho {consumerPricingReference.scope}, cập nhật ngày{' '}
          {consumerPricingReference.updatedAt}. Quyền nội dung, thiết bị, thuế và mức áp dụng cuối
          cùng được xác nhận theo địa chỉ.
        </p>
      </Container>
    </section>
  );
}

export { ComboSection };
