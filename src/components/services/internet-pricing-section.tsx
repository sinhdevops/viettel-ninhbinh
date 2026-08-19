import { ArrowRightIcon, CheckIcon, RouterIcon, WifiIcon } from 'lucide-react';

import { Container } from '@/components/layout';
import { Button } from '@/components/ui/button';
import { internetPlans } from '@/data/home';
import { cn } from '@/lib/utils';

function PlanCard({
  plan,
  featured = false,
}: {
  plan: (typeof internetPlans)[number];
  featured?: boolean;
}) {
  return (
    <article
      className={cn(
        'relative flex min-w-[82vw] snap-center flex-col rounded-2xl border bg-white p-6 shadow-[0_16px_45px_rgb(20_34_55/7%)] md:min-w-0',
        featured && 'border-primary shadow-[0_20px_55px_rgb(230_0_18/12%)] lg:-translate-y-2'
      )}
    >
      {featured && (
        <span className="bg-primary absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1.5 text-[0.625rem] font-black whitespace-nowrap text-white uppercase">
          Được quan tâm
        </span>
      )}
      <span className="text-primary grid size-11 place-items-center rounded-xl bg-red-50">
        {plan.name.startsWith('MESH') ? (
          <WifiIcon className="size-5" />
        ) : (
          <RouterIcon className="size-5" />
        )}
      </span>
      <h3 className="mt-5 text-xl font-black text-[#10263f]">{plan.name}</h3>
      <p className="text-muted-foreground mt-2 text-sm">{plan.speed}</p>
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
      <Button asChild variant={featured ? 'primary' : 'outline'} className="mt-7 w-full">
        <a href="#khu-vuc">
          Kiểm tra gói này <ArrowRightIcon />
        </a>
      </Button>
    </article>
  );
}

function InternetPricingSection() {
  const standardPlans = internetPlans.filter((plan) => plan.name.startsWith('NET'));
  const meshPlans = internetPlans.filter((plan) => plan.name.startsWith('MESH'));

  return (
    <section id="goi-cuoc" className="scroll-mt-24 bg-[#f7f9fc] py-16 sm:py-20">
      <Container className="max-w-6xl">
        <div className="text-center">
          <p className="text-primary text-[0.6875rem] font-black tracking-[0.14em] uppercase">
            Gói Internet gia đình
          </p>
          <h2 className="mt-2 text-3xl font-black tracking-tight text-[#10263f] sm:text-4xl">
            Chọn tốc độ theo nhu cầu sử dụng
          </h2>
          <p className="text-muted-foreground mx-auto mt-3 max-w-2xl text-sm leading-6">
            Gói không Mesh phù hợp vùng phủ đơn giản; số thiết bị thường xuyên sử dụng và mặt bằng
            thực tế quyết định gói phù hợp.
          </p>
        </div>

        <p className="text-muted-foreground mt-7 text-xs font-semibold md:hidden">
          Vuốt ngang để xem các gói
        </p>
        <div className="-mx-4 mt-4 flex snap-x snap-mandatory [scrollbar-width:none] gap-4 overflow-x-auto px-4 pt-3 pb-5 md:mx-auto md:grid md:max-w-3xl md:grid-cols-2 md:overflow-visible md:px-0 [&::-webkit-scrollbar]:hidden">
          {standardPlans.map((plan, index) => (
            <PlanCard key={plan.id} plan={plan} featured={index === 0} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-primary text-[0.6875rem] font-black tracking-[0.14em] uppercase">
            Internet + Wi-Fi Mesh
          </p>
          <h2 className="mt-2 text-3xl font-black tracking-tight text-[#10263f]">
            Thêm điểm phát cho nhà nhiều phòng, nhiều tầng
          </h2>
        </div>

        <p className="text-muted-foreground mt-7 text-xs font-semibold md:hidden">
          Vuốt ngang để xem các gói Mesh
        </p>
        <div className="-mx-4 mt-4 flex snap-x snap-mandatory [scrollbar-width:none] gap-4 overflow-x-auto px-4 pt-3 pb-5 lg:mx-0 lg:grid lg:grid-cols-3 lg:overflow-visible lg:px-0 [&::-webkit-scrollbar]:hidden">
          {meshPlans.map((plan, index) => (
            <PlanCard key={plan.id} plan={plan} featured={index === 1} />
          ))}
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_16px_45px_rgb(20_34_55/7%)]">
          <div className="border-b border-slate-100 p-5 sm:p-6">
            <h3 className="text-xl font-black text-[#10263f]">So sánh nhanh các gói Internet</h3>
            <p className="text-muted-foreground mt-1 text-sm">
              Vuốt ngang trên điện thoại để xem đầy đủ.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[780px] border-collapse text-left text-sm">
              <thead className="bg-[#10263f] text-white">
                <tr>
                  <th className="px-5 py-4">Gói</th>
                  <th className="px-5 py-4">Tốc độ</th>
                  <th className="px-5 py-4">Thiết bị</th>
                  <th className="px-5 py-4 text-right">Cước / tháng</th>
                </tr>
              </thead>
              <tbody>
                {internetPlans.map((plan) => (
                  <tr key={plan.id} className="border-b border-slate-100 last:border-0">
                    <td className="px-5 py-4 font-black">{plan.name}</td>
                    <td className="px-5 py-4">{plan.speed}</td>
                    <td className="text-muted-foreground px-5 py-4">{plan.features[0]}</td>
                    <td className="px-5 py-4 text-right font-black">{plan.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </section>
  );
}

export { InternetPricingSection };
