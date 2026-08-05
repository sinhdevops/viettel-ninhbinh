import { Container } from '@/components/layout/container';
import { internetPlans } from '@/data/home';

import { InternetComparison } from './internet-comparison';
import { PlanCard } from './plan-card';
import { SectionHeading } from './section-heading';

function InternetPlansSection() {
  return (
    <section
      id="plans"
      className="scroll-mt-20 bg-[linear-gradient(180deg,#f8faff_0%,#fff_100%)] py-16 sm:py-20"
    >
      <Container>
        <SectionHeading
          eyebrow="Tốc độ mạnh mẽ"
          title="Gói Internet phổ biến"
          description="Tốc độ mạnh mẽ – Giá cước cạnh tranh"
        />

        <div className="-mx-4 mt-10 flex snap-x snap-mandatory [scrollbar-width:none] gap-4 overflow-x-auto px-4 pt-3 pb-5 sm:-mx-6 sm:px-6 md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0 lg:grid-cols-3 xl:grid-cols-5 [&::-webkit-scrollbar]:hidden">
          {internetPlans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} service="internet" />
          ))}
        </div>

        <p className="text-muted-foreground mt-1 text-center text-xs leading-relaxed">
          * Gói cước áp dụng cho khu vực Ninh Bình. Thiết bị và ưu đãi thực tế được xác nhận theo hạ
          tầng tại địa chỉ lắp đặt.
        </p>
        <InternetComparison />
      </Container>
    </section>
  );
}

export { InternetPlansSection };
