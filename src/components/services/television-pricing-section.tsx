import { ArrowRightIcon, CheckIcon, TvIcon, WifiIcon } from 'lucide-react';

import { Container } from '@/components/layout';
import { Button } from '@/components/ui/button';
import { televisionComboPlans, televisionPlans } from '@/content/television-service';
import { cn } from '@/lib/utils';

function TelevisionPricingSection() {
  return (
    <section id="goi-cuoc" className="scroll-mt-24 bg-[#f7f9fc] py-16 sm:py-20">
      <Container className="max-w-6xl">
        <div className="text-center">
          <p className="text-primary text-[0.6875rem] font-black tracking-[0.14em] uppercase">
            Gói Truyền hình TV360
          </p>
          <h2 className="mt-2 text-3xl font-black tracking-tight text-[#10263f] sm:text-4xl">
            Chọn App hoặc Box theo thiết bị đang có
          </h2>
          <p className="text-muted-foreground mx-auto mt-3 max-w-2xl text-sm leading-6">
            Gói App dùng trực tiếp trên thiết bị hỗ trợ; gói Box có thêm đầu thu theo điều kiện cung
            cấp.
          </p>
        </div>

        <p className="text-muted-foreground mt-7 text-xs font-semibold md:hidden">
          Vuốt ngang để xem các gói TV360
        </p>
        <div className="-mx-4 mt-4 flex snap-x snap-mandatory [scrollbar-width:none] gap-4 overflow-x-auto px-4 pt-3 pb-5 md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0 xl:grid-cols-4 [&::-webkit-scrollbar]:hidden">
          {televisionPlans.map((plan) => (
            <article
              key={plan.name}
              className={cn(
                'relative flex min-w-[82vw] snap-center flex-col rounded-2xl border bg-white p-6 shadow-[0_16px_45px_rgb(20_34_55/7%)] md:min-w-0',
                plan.featured && 'border-primary shadow-[0_18px_50px_rgb(230_0_18/12%)]'
              )}
            >
              {plan.featured && (
                <span className="bg-primary absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1.5 text-[0.625rem] font-black whitespace-nowrap text-white uppercase">
                  Dễ sử dụng
                </span>
              )}
              <span className="text-primary grid size-11 place-items-center rounded-xl bg-red-50">
                <TvIcon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-xl font-black text-[#10263f]">{plan.name}</h3>
              <p className="text-primary mt-3 text-3xl font-black tracking-tight">
                {plan.price}
                <span className="text-muted-foreground ml-1 text-xs font-semibold">/tháng</span>
              </p>
              <p className="text-muted-foreground mt-3 min-h-16 text-sm leading-6">
                {plan.description}
              </p>
              <ul className="mt-5 grid flex-1 gap-3 text-sm text-slate-600">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <CheckIcon className="text-primary mt-0.5 size-4 shrink-0" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                asChild
                variant={plan.featured ? 'primary' : 'outline'}
                className="mt-7 w-full"
              >
                <a href="#khu-vuc">Chọn gói này</a>
              </Button>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-primary text-[0.6875rem] font-black tracking-[0.14em] uppercase">
            Combo Internet + Truyền hình
          </p>
          <h2 className="mt-2 text-3xl font-black tracking-tight text-[#10263f]">
            Một đường truyền cho kết nối và giải trí
          </h2>
        </div>

        <p className="text-muted-foreground mt-7 text-xs font-semibold lg:hidden">
          Vuốt ngang để xem các gói combo
        </p>
        <div className="-mx-4 mt-4 flex snap-x snap-mandatory [scrollbar-width:none] gap-4 overflow-x-auto px-4 pt-3 pb-5 lg:mx-0 lg:grid lg:grid-cols-3 lg:overflow-visible lg:px-0 [&::-webkit-scrollbar]:hidden">
          {televisionComboPlans.map((plan) => (
            <article
              key={plan.name}
              className={cn(
                'relative min-w-[82vw] snap-center rounded-2xl border bg-white p-6 shadow-[0_16px_45px_rgb(20_34_55/7%)] lg:min-w-0',
                plan.featured && 'border-primary lg:-translate-y-2'
              )}
            >
              {plan.featured && (
                <span className="bg-primary absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1.5 text-[0.625rem] font-black whitespace-nowrap text-white uppercase">
                  Có Wi-Fi Mesh
                </span>
              )}
              <div className="flex items-center gap-3">
                <span className="text-primary grid size-10 place-items-center rounded-full bg-red-50">
                  <WifiIcon className="size-4" aria-hidden="true" />
                </span>
                <span className="text-primary font-black">+</span>
                <span className="text-primary grid size-10 place-items-center rounded-full bg-red-50">
                  <TvIcon className="size-4" aria-hidden="true" />
                </span>
              </div>
              <h3 className="mt-5 text-lg font-black text-[#10263f]">{plan.name}</h3>
              <p className="text-muted-foreground mt-2 text-sm">{plan.speed}</p>
              <p className="text-muted-foreground mt-4 min-h-12 text-sm leading-6">
                {plan.equipment}
              </p>
              <p className="text-primary mt-5 text-3xl font-black tracking-tight">
                {plan.price}
                <span className="text-muted-foreground ml-1 text-xs font-semibold">/tháng</span>
              </p>
              <Button
                asChild
                className="mt-6 w-full"
                variant={plan.featured ? 'primary' : 'outline'}
              >
                <a href="#khu-vuc">
                  Kiểm tra tại địa chỉ <ArrowRightIcon />
                </a>
              </Button>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export { TelevisionPricingSection };
