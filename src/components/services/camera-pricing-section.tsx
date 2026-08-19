import {
  ArrowRightIcon,
  CheckIcon,
  CloudIcon,
  RadioTowerIcon,
  VideoIcon,
  WifiIcon,
} from 'lucide-react';

import { Container } from '@/components/layout';
import { Button } from '@/components/ui/button';
import { cameraCloudPlans } from '@/content/camera-service';
import { cn } from '@/lib/utils';

const displayedPlans = cameraCloudPlans.filter((plan) =>
  ['07 ngày', '15 ngày', '30 ngày'].includes(plan.retention)
);

function CameraPricingSection() {
  return (
    <section id="bang-gia" className="scroll-mt-24 bg-[#f7f9fc] py-16 sm:py-20">
      <Container className="max-w-6xl">
        <div className="text-center">
          <p className="text-primary text-[0.6875rem] font-black tracking-[0.14em] uppercase">
            Chọn gói phù hợp
          </p>
          <h2 className="mt-2 text-3xl font-black tracking-tight text-[#10263f] sm:text-4xl">
            Chọn thời gian cần xem lại
          </h2>
          <p className="text-muted-foreground mt-3 text-sm leading-6">
            Cước Cloud tính theo 01 Camera mỗi tháng.
          </p>
        </div>

        <div className="mx-auto mt-6 flex max-w-xl items-center rounded-xl border border-slate-200 bg-white p-1 text-xs font-bold sm:text-sm">
          {displayedPlans.map((plan) => (
            <a
              key={plan.retention}
              href={`#cloud-${plan.retention.replace(' ', '-')}`}
              className={cn(
                'flex min-h-10 flex-1 items-center justify-center rounded-lg px-2 transition-colors',
                plan.retention === '15 ngày'
                  ? 'bg-primary text-white'
                  : 'text-slate-500 hover:bg-slate-50'
              )}
            >
              {plan.retention}
            </a>
          ))}
        </div>

        <p className="text-muted-foreground mt-7 text-xs font-semibold lg:hidden">
          Vuốt ngang để so sánh thời gian lưu trữ
        </p>
        <div className="-mx-4 mt-4 flex snap-x snap-mandatory [scrollbar-width:none] gap-4 overflow-x-auto px-4 pt-3 pb-5 lg:mx-0 lg:grid lg:grid-cols-3 lg:overflow-visible lg:px-0 [&::-webkit-scrollbar]:hidden">
          {displayedPlans.map((plan, index) => {
            const featured = plan.retention === '15 ngày';
            const names = ['Gói Cơ bản', 'Gói Tiêu chuẩn', 'Gói Nâng cao'];

            return (
              <article
                key={plan.retention}
                id={`cloud-${plan.retention.replace(' ', '-')}`}
                className={cn(
                  'relative flex min-w-[82vw] snap-center scroll-mt-28 flex-col rounded-2xl border bg-white p-6 shadow-[0_16px_45px_rgb(20_34_55/7%)] sm:p-7 lg:min-w-0',
                  featured &&
                    'border-primary shadow-[0_20px_55px_rgb(230_0_18/12%)] lg:-translate-y-2'
                )}
              >
                {featured && (
                  <span className="bg-primary absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1.5 text-[0.625rem] font-black whitespace-nowrap text-white uppercase">
                    Phổ biến nhất
                  </span>
                )}
                <CloudIcon className="text-primary size-6" aria-hidden="true" />
                <h3 className="mt-4 text-xl font-black text-[#10263f]">{names[index]}</h3>
                <p className="text-muted-foreground mt-1 text-sm">Xem lại {plan.retention}</p>
                <p className="text-primary mt-5 text-3xl font-black tracking-tight">
                  {plan.price}
                  <span className="text-muted-foreground ml-1 text-xs font-semibold">/tháng</span>
                </p>
                <ul className="mt-6 grid flex-1 gap-3 text-sm text-slate-600">
                  {[
                    'Lưu và xem lại theo chu kỳ đã chọn',
                    'Quản lý Camera trên ứng dụng',
                    'Dữ liệu không chỉ nằm tại thiết bị',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckIcon
                        className="text-primary mt-0.5 size-4 shrink-0"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button asChild variant={featured ? 'primary' : 'outline'} className="mt-7 w-full">
                  <a href="#khu-vuc">Chọn gói này</a>
                </Button>
              </article>
            );
          })}
        </div>

        <div className="mt-7 grid gap-5 rounded-2xl border border-red-100 bg-white p-5 shadow-[0_16px_45px_rgb(20_34_55/7%)] lg:grid-cols-[auto_1fr_auto] lg:items-center lg:p-6">
          <div className="flex items-center gap-3">
            <span className="text-primary grid size-12 place-items-center rounded-full bg-red-50">
              <WifiIcon className="size-5" aria-hidden="true" />
            </span>
            <span className="text-primary text-2xl font-black">+</span>
            <span className="text-primary grid size-12 place-items-center rounded-full bg-red-50">
              <VideoIcon className="size-5" aria-hidden="true" />
            </span>
          </div>
          <div>
            <h3 className="text-lg font-black text-[#10263f]">Combo Internet + Camera</h3>
            <p className="text-muted-foreground mt-1 text-sm leading-6">
              Kết hợp đường truyền, thiết bị Camera và Cloud trên cùng nhu cầu đăng ký.
            </p>
            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-xs font-bold text-slate-600">
              <span className="flex items-center gap-1.5">
                <RadioTowerIcon className="text-primary size-4" aria-hidden="true" /> Internet cáp
                quang
              </span>
              <span className="flex items-center gap-1.5">
                <CloudIcon className="text-primary size-4" aria-hidden="true" /> Cloud theo gói
              </span>
              <span className="flex items-center gap-1.5">
                <VideoIcon className="text-primary size-4" aria-hidden="true" /> Camera được xác
                nhận
              </span>
            </div>
          </div>
          <Button asChild size="lg">
            <a href="#khu-vuc">
              Xem combo <ArrowRightIcon />
            </a>
          </Button>
        </div>
      </Container>
    </section>
  );
}

export { CameraPricingSection };
