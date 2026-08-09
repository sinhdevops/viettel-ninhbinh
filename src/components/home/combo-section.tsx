import { CheckIcon } from 'lucide-react';
import Image from 'next/image';

import { Container } from '@/components/layout/container';
import type { MarketConfig } from '@/config/markets';
import { IMAGE_PATHS } from '@/constants/images';
import { comboPlans } from '@/data/home';

import { PlanCard } from './plan-card';
import { SectionHeading } from './section-heading';

const comboBenefits = [
  'Internet tốc độ cao hoặc không giới hạn',
  'Kho nội dung TV360 phong phú',
  'Xem lại, tua lại tiện lợi',
  'Tặng kèm hệ thống Modem Wi-Fi theo gói',
] as const;

interface ComboSectionProps {
  market: MarketConfig;
}

function ComboSection({ market }: ComboSectionProps) {
  return (
    <section
      id="combo"
      className="scroll-mt-20 border-y border-red-50 bg-[linear-gradient(90deg,#fff_0%,#fff5f5_52%,#fff_100%)] py-16 sm:py-20"
    >
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
          <div>
            <SectionHeading
              eyebrow="Giải trí trọn vẹn"
              title={`Combo Internet + Truyền hình tại ${market.locationName}`}
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

        <div className="-mx-4 mt-10 flex snap-x snap-mandatory [scrollbar-width:none] gap-4 overflow-x-auto px-4 pt-3 pb-5 sm:-mx-6 sm:px-6 md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0 lg:grid-cols-3 xl:grid-cols-5 [&::-webkit-scrollbar]:hidden">
          {comboPlans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} service="combo" />
          ))}
        </div>
      </Container>
    </section>
  );
}

export { ComboSection };
