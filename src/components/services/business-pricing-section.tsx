import { ArrowRightIcon, CheckIcon, NetworkIcon, WifiIcon } from 'lucide-react';

import { Container } from '@/components/layout';
import { Button } from '@/components/ui/button';
import { businessInternetPlans } from '@/content/business-internet-service';
import { cn } from '@/lib/utils';

function BusinessPlanCard({ plan }: { plan: (typeof businessInternetPlans)[number] }) {
  return (
    <article
      className={cn(
        'relative flex min-w-[82vw] snap-center flex-col rounded-2xl border bg-white p-6 shadow-[0_16px_45px_rgb(20_34_55/7%)] md:min-w-0',
        plan.featured && 'border-primary shadow-[0_20px_55px_rgb(230_0_18/12%)] lg:-translate-y-2'
      )}
    >
      {plan.featured && (
        <span className="bg-primary absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1.5 text-[0.625rem] font-black whitespace-nowrap text-white uppercase">
          Được quan tâm
        </span>
      )}
      <span className="text-primary grid size-11 place-items-center rounded-xl bg-red-50">
        {plan.id.startsWith('mesh') ? (
          <WifiIcon className="size-5" aria-hidden="true" />
        ) : (
          <NetworkIcon className="size-5" aria-hidden="true" />
        )}
      </span>
      <h3 className="mt-5 text-xl font-black text-[#10263f]">{plan.name}</h3>
      <p className="text-muted-foreground mt-2 min-h-10 text-sm leading-5">{plan.speed}</p>
      <p className="text-primary mt-5 text-3xl font-black tracking-tight">
        {plan.price}
        <span className="text-muted-foreground ml-1 text-xs font-semibold">/tháng</span>
      </p>
      <ul className="mt-6 grid flex-1 gap-3 text-sm text-slate-600">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5">
            <CheckIcon className="text-primary mt-0.5 size-4 shrink-0" aria-hidden="true" />
            {feature}
          </li>
        ))}
      </ul>
      <Button asChild variant={plan.featured ? 'primary' : 'outline'} className="mt-7 w-full">
        <a href="#khu-vuc">
          Yêu cầu tư vấn <ArrowRightIcon />
        </a>
      </Button>
    </article>
  );
}

function BusinessPricingSection() {
  return (
    <section id="goi-cuoc" className="scroll-mt-24 bg-[#f7f9fc] py-16 sm:py-20">
      <Container className="max-w-6xl">
        <div className="text-center">
          <p className="text-primary text-[0.6875rem] font-black tracking-[0.14em] uppercase">
            Gói FTTH doanh nghiệp
          </p>
          <h2 className="mt-2 text-3xl font-black tracking-tight text-[#10263f] sm:text-4xl">
            Chọn đường truyền theo mặt bằng vận hành
          </h2>
          <p className="text-muted-foreground mx-auto mt-3 max-w-2xl text-sm leading-6">
            Pro tập trung vào đường truyền; MeshPro bổ sung điểm phát cho văn phòng nhiều phòng hoặc
            nhiều tầng.
          </p>
        </div>

        <p className="text-muted-foreground mt-7 text-xs font-semibold md:hidden">
          Vuốt ngang để xem các gói doanh nghiệp
        </p>
        <div className="-mx-4 mt-4 flex snap-x snap-mandatory [scrollbar-width:none] gap-4 overflow-x-auto px-4 pt-3 pb-5 md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0 lg:grid-cols-4 [&::-webkit-scrollbar]:hidden">
          {businessInternetPlans.map((plan) => (
            <BusinessPlanCard key={plan.id} plan={plan} />
          ))}
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_16px_45px_rgb(20_34_55/7%)]">
          <div className="border-b border-slate-100 p-5 sm:p-6">
            <h3 className="text-xl font-black text-[#10263f]">Bảng so sánh gói doanh nghiệp</h3>
            <p className="text-muted-foreground mt-1 text-sm">
              Vuốt ngang trên điện thoại để xem đầy đủ.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[820px] border-collapse text-left text-sm">
              <thead className="bg-[#10263f] text-white">
                <tr>
                  <th className="px-5 py-4">Gói</th>
                  <th className="px-5 py-4">Tốc độ trong nước</th>
                  <th className="px-5 py-4">Quốc tế cam kết</th>
                  <th className="px-5 py-4">Thiết bị Mesh</th>
                  <th className="px-5 py-4 text-right">Cước / tháng</th>
                </tr>
              </thead>
              <tbody>
                {businessInternetPlans.map((plan) => (
                  <tr key={plan.id} className="border-b border-slate-100 last:border-0">
                    <td className="px-5 py-4 font-black">{plan.name}</td>
                    <td className="px-5 py-4">{plan.speed}</td>
                    <td className="px-5 py-4 font-bold">{plan.internationalBandwidth}</td>
                    <td className="text-muted-foreground px-5 py-4">{plan.meshDevices}</td>
                    <td className="px-5 py-4 text-right font-black">{plan.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p className="text-muted-foreground mt-4 text-center text-xs leading-5">
          Mức cước đã gồm VAT theo chính sách công bố; phí hòa mạng, thiết bị và điều kiện áp dụng
          được xác nhận theo địa chỉ doanh nghiệp.
        </p>
      </Container>
    </section>
  );
}

export { BusinessPricingSection };
