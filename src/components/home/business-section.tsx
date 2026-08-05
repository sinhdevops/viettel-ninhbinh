import { ArrowRightIcon, Globe2Icon, NetworkIcon } from 'lucide-react';

import { Container } from '@/components/layout/container';
import { Card } from '@/components/ui/card';
import { businessPlans } from '@/data/home';
import { PlanSelectionButton } from '@/features/leads/plan-selection-button';

import { SectionHeading } from './section-heading';

function getBusinessPlanName(id: string) {
  return id.replaceAll('-', ' ').toUpperCase();
}

function BusinessSection() {
  return (
    <section
      id="business"
      className="scroll-mt-20 border-y border-red-50 bg-[linear-gradient(90deg,#fff_0%,#fff6f6_52%,#fff_100%)] py-16 sm:py-20"
    >
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Dành cho tổ chức"
            title="Gói Internet Viettel cho doanh nghiệp"
            description="Đường truyền tốc độ cao, băng thông quốc tế và IP tĩnh theo nhu cầu."
            align="left"
          />
          <PlanSelectionButton service="business" className="w-full sm:w-auto">
            Đăng ký tư vấn
            <ArrowRightIcon />
          </PlanSelectionButton>
        </div>

        <p className="text-muted-foreground mt-8 text-xs font-semibold md:hidden">
          Vuốt ngang để xem thêm gói cước
        </p>
        <div className="-mx-4 mt-3 flex snap-x snap-mandatory [scrollbar-width:none] gap-4 overflow-x-auto px-4 pb-5 sm:-mx-6 sm:px-6 md:hidden [&::-webkit-scrollbar]:hidden">
          {businessPlans.map((plan) => (
            <Card
              key={plan.id}
              className="max-w-[22rem] min-w-[82vw] snap-center gap-0 overflow-hidden rounded-2xl py-0 shadow-[0_12px_30px_rgb(23_35_58/9%)]"
            >
              <div className="bg-[linear-gradient(135deg,#17233a,#304967)] px-5 py-4 text-white">
                <p className="text-lg font-black">{getBusinessPlanName(plan.id)}</p>
                <p className="mt-1 text-xs text-white/65">Gói Internet doanh nghiệp</p>
              </div>
              <div className="bg-border grid grid-cols-2 gap-px">
                <div className="bg-card col-span-2 p-4">
                  <p className="text-muted-foreground text-[0.625rem] font-extrabold tracking-wide uppercase">
                    Tốc độ trong nước
                  </p>
                  <p className="mt-1 font-bold">{plan.domesticSpeed}</p>
                </div>
                <div className="bg-card p-4">
                  <Globe2Icon className="text-primary size-4" aria-hidden="true" />
                  <p className="text-muted-foreground mt-2 text-[0.625rem] font-extrabold tracking-wide uppercase">
                    Quốc tế
                  </p>
                  <p className="mt-1 text-sm font-bold">{plan.internationalSpeed}</p>
                </div>
                <div className="bg-card p-4">
                  <NetworkIcon className="text-primary size-4" aria-hidden="true" />
                  <p className="text-muted-foreground mt-2 text-[0.625rem] font-extrabold tracking-wide uppercase">
                    IP tĩnh
                  </p>
                  <p className="mt-1 text-sm font-bold">{plan.staticIp}</p>
                </div>
              </div>
              <div className="bg-accent/65 flex items-center justify-between gap-3 p-4">
                <div>
                  <strong className="text-primary text-xl font-black">{plan.price}</strong>
                  <span className="text-muted-foreground text-xs">/tháng</span>
                </div>
                <PlanSelectionButton service="business" plan={plan.id} size="sm">
                  Đăng ký
                </PlanSelectionButton>
              </div>
            </Card>
          ))}
        </div>
        <p className="text-muted-foreground text-center text-xs leading-relaxed md:hidden">
          Giá cước có thể thay đổi theo hạ tầng và chính sách tại thời điểm đăng ký. Vui lòng liên
          hệ để được tư vấn chính xác.
        </p>

        <div className="border-border bg-card mt-9 hidden overflow-hidden rounded-2xl border shadow-[0_16px_40px_rgb(23_35_58/9%)] md:block">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px] border-collapse text-sm">
              <thead>
                <tr className="bg-[#263850] text-left text-xs tracking-wide text-white uppercase">
                  <th className="px-5 py-4">Gói cước</th>
                  <th className="px-5 py-4">Trong nước</th>
                  <th className="px-5 py-4">Quốc tế</th>
                  <th className="px-5 py-4">IP</th>
                  <th className="bg-primary px-5 py-4">Giá/tháng</th>
                  <th className="px-5 py-4 text-center">Đăng ký</th>
                </tr>
              </thead>
              <tbody>
                {businessPlans.map((plan) => (
                  <tr
                    key={plan.id}
                    className="border-border even:bg-muted/35 hover:bg-secondary/70 border-t"
                  >
                    <th className="px-5 py-4 text-left font-black">
                      {getBusinessPlanName(plan.id)}
                    </th>
                    <td className="text-foreground/70 px-5 py-4">{plan.domesticSpeed}</td>
                    <td className="text-foreground/70 px-5 py-4">{plan.internationalSpeed}</td>
                    <td className="text-foreground/70 px-5 py-4">{plan.staticIp}</td>
                    <td className="bg-accent/50 text-primary px-5 py-4 font-black">{plan.price}</td>
                    <td className="px-5 py-3 text-center">
                      <PlanSelectionButton
                        service="business"
                        plan={plan.id}
                        variant="outline"
                        size="sm"
                      >
                        Đăng ký
                      </PlanSelectionButton>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="border-border bg-muted/40 text-muted-foreground border-t px-5 py-3 text-xs leading-relaxed">
            Giá cước có thể thay đổi theo hạ tầng và chính sách tại thời điểm đăng ký. Vui lòng liên
            hệ để được tư vấn chính xác.
          </p>
        </div>
      </Container>
    </section>
  );
}

export { BusinessSection };
