import { Container } from '@/components/layout/container';
import type { MarketConfig } from '@/config/markets';
import { consumerPricingReference, internetPlans } from '@/data/home';

import { InternetComparison } from './internet-comparison';
import { PlanCard } from './plan-card';
import { SectionHeading } from './section-heading';

interface InternetPlansSectionProps {
  market: MarketConfig;
}

function InternetPlansSection({ market }: InternetPlansSectionProps) {
  return (
    <section
      id="plans"
      className="scroll-mt-20 bg-[linear-gradient(180deg,#f8faff_0%,#fff_100%)] py-12 sm:py-16"
    >
      <Container>
        <SectionHeading
          eyebrow="Bảng giá tham khảo"
          title="So sánh tốc độ, thiết bị và chi phí"
          description={`Mức tham khảo cho ${consumerPricingReference.scope}; chọn gói rồi gửi địa chỉ để xác nhận khả năng áp dụng.`}
        />

        <p className="text-muted-foreground mt-8 text-xs font-semibold md:hidden">
          Vuốt ngang để xem các gói còn lại
        </p>
        <div className="-mx-4 mt-7 flex snap-x snap-mandatory [scrollbar-width:none] gap-4 overflow-x-auto px-4 pt-3 pb-5 sm:-mx-6 sm:px-6 md:mx-auto md:grid md:max-w-5xl md:grid-cols-3 md:overflow-visible md:px-0 [&::-webkit-scrollbar]:hidden">
          {internetPlans.slice(0, 3).map((plan) => (
            <PlanCard key={plan.id} plan={plan} service="internet" />
          ))}
        </div>

        <p className="text-muted-foreground mt-1 text-center text-xs leading-relaxed">
          Thông tin cập nhật ngày {consumerPricingReference.updatedAt} theo{' '}
          <a
            href={consumerPricingReference.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-bold underline underline-offset-2"
          >
            Viettel Telecom
          </a>
          . Giá, thuế, tốc độ, thiết bị, chu kỳ thanh toán và khả năng áp dụng tại{' '}
          {market.locationName} được xác nhận trước khi ký hồ sơ.
        </p>
        <InternetComparison />
      </Container>
    </section>
  );
}

export { InternetPlansSection };
