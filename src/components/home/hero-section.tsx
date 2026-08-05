import { CheckIcon, MessageCircleIcon } from 'lucide-react';

import { Container } from '@/components/layout/container';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import { LeadForm } from '@/features/leads/lead-form';

import { BenefitStrip } from './benefit-strip';

const highlights = [
  'Tốc độ mạnh, ổn định 24/7',
  'Trang bị Wi-Fi chuẩn mới, tối ưu cho mọi thiết bị',
  'Hỗ trợ kỹ thuật nhanh chóng',
  'Miễn phí lắp đặt, hòa mạng',
] as const;

function HeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_82%_20%,#fff_0%,#f8fafc_35%,transparent_58%),linear-gradient(180deg,#f8faff_0%,#fff_100%)] py-10 sm:py-14 lg:py-16"
    >
      <div className="bg-primary/5 pointer-events-none absolute -top-52 -right-40 size-[30rem] rounded-full" />
      <Container className="relative">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-6 xl:gap-8">
          <div className="lg:col-span-7 xl:pr-12">
            <p className="text-primary mb-3 text-xs font-black tracking-[0.14em] uppercase">
              Internet cáp quang tốc độ cao
            </p>
            <h1 className="text-foreground text-4xl leading-[1.08] font-black tracking-[-0.05em] sm:text-5xl lg:text-[3.5rem] xl:text-6xl">
              Lắp Internet <span className="text-primary">Viettel</span>
              <br /> tại <span className="text-primary">Ninh Bình</span>
              <br /> và các tỉnh khác
            </h1>
            <p className="text-muted-foreground mt-4 max-w-xl text-base leading-relaxed sm:text-lg">
              Kết nối siêu tốc – Ổn định – Phủ sóng rộng khắp
            </p>

            <ul className="mt-6 grid gap-3">
              {highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="text-foreground/75 flex items-center gap-3 text-sm font-medium"
                >
                  <span className="bg-primary text-primary-foreground grid size-5 shrink-0 place-items-center rounded-full">
                    <CheckIcon className="size-3" aria-hidden="true" />
                  </span>
                  {highlight}
                </li>
              ))}
            </ul>

            <div className="mt-7 flex items-baseline gap-2">
              <span className="text-foreground text-sm font-bold">Giá từ chỉ</span>
              <strong className="text-primary text-3xl font-black tracking-tight">195.000đ</strong>
              <span className="text-muted-foreground text-sm">/tháng</span>
            </div>

            <div className="mt-6 flex flex-col gap-3 min-[420px]:flex-row">
              <Button asChild size="lg">
                <a href="#plans">Xem gói cước</a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={siteConfig.zaloUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircleIcon />
                  Liên hệ Zalo
                </a>
              </Button>
            </div>
          </div>

          <div className="order-2 lg:col-span-5 lg:w-full lg:max-w-[26rem] lg:justify-self-end">
            <LeadForm />
          </div>
        </div>

        <div className="mt-8 lg:mt-10">
          <BenefitStrip />
        </div>
      </Container>
    </section>
  );
}

export { HeroSection };
