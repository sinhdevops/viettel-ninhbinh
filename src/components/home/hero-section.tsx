import { CheckIcon, MessageCircleIcon, ShieldCheckIcon } from 'lucide-react';
import Image from 'next/image';

import { Container } from '@/components/layout/container';
import { Button } from '@/components/ui/button';
import type { MarketConfig } from '@/config/markets';
import { siteConfig } from '@/config/site';
import { IMAGE_PATHS } from '@/constants/images';
import { consumerPricingReference } from '@/data/home';
import { LeadForm } from '@/features/leads/lead-form';

import { BenefitStrip } from './benefit-strip';

interface HeroSectionProps {
  market: MarketConfig;
}

function HeroSection({ market }: HeroSectionProps) {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-red-50 bg-[linear-gradient(135deg,#fff_0%,#fff_58%,#fff6f7_100%)] py-8 sm:py-11"
    >
      <div className="pointer-events-none absolute top-0 right-[18%] size-[32rem] rounded-full bg-red-50/70 blur-3xl" />
      <Container className="relative">
        <div className="grid items-center gap-7 lg:grid-cols-[1.08fr_0.92fr_0.86fr] lg:gap-5 xl:gap-8">
          <div className="order-1">
            <p className="inline-flex rounded-full bg-red-50 px-3 py-1.5 text-[0.6875rem] font-bold text-red-700">
              Internet cáp quang · Wi-Fi 6 · Kiểm tra theo địa chỉ
            </p>
            <h1 className="mt-4 text-4xl leading-[1.05] font-black tracking-[-0.045em] text-[#14233b] sm:text-5xl lg:text-[3.35rem]">
              Lắp Internet Viettel tại <span className="text-primary">{market.locationName}</span>
            </h1>
            <p className="text-muted-foreground mt-4 max-w-xl text-sm leading-6 sm:text-base">
              {market.hero.description}
            </p>

            <ul className="mt-5 grid gap-2.5">
              {market.hero.highlights.slice(0, 4).map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-2.5 text-xs font-semibold text-[#45536a]"
                >
                  <span className="text-primary mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-red-50">
                    <CheckIcon className="size-3" aria-hidden="true" />
                  </span>
                  {highlight}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap items-baseline gap-x-2 gap-y-1">
              <span className="text-xs font-bold text-[#45536a]">Internet tham khảo từ</span>
              <strong className="text-primary text-3xl font-black tracking-tight">195.000đ</strong>
              <span className="text-muted-foreground text-xs">/tháng</span>
            </div>
            <p className="text-muted-foreground mt-1 text-[0.6875rem] leading-4">
              Cập nhật {consumerPricingReference.updatedAt}; xác nhận lại theo địa chỉ.
            </p>

            <div className="mt-5 flex flex-col gap-2.5 min-[420px]:flex-row">
              <Button asChild>
                <a href="#coverage">Kiểm tra hạ tầng</a>
              </Button>
              <Button asChild variant="outline">
                <a href={siteConfig.zaloUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircleIcon />
                  Tư vấn gói phù hợp
                </a>
              </Button>
            </div>
          </div>

          <div className="relative order-3 mx-auto hidden aspect-[4/3] w-full max-w-md sm:block lg:order-2">
            <Image
              src={IMAGE_PATHS.routerHero}
              alt="Thiết bị router Wi-Fi minh họa cho dịch vụ Internet"
              fill
              loading="eager"
              fetchPriority="high"
              sizes="(max-width: 1023px) 90vw, 32vw"
              className="object-contain"
            />
          </div>

          <div className="order-2 lg:order-3 lg:max-w-[24rem] lg:justify-self-end">
            <LeadForm market={market} />
          </div>
        </div>

        <div className="mt-7 grid gap-3 lg:grid-cols-[1fr_auto] lg:items-center">
          <BenefitStrip />
          <div className="flex items-start gap-2 rounded-xl border border-red-100 bg-white px-4 py-3 shadow-sm">
            <ShieldCheckIcon className="text-primary mt-0.5 size-4 shrink-0" aria-hidden="true" />
            <p className="text-muted-foreground max-w-xs text-[0.6875rem] leading-4">
              Gửi yêu cầu không phát sinh hợp đồng hoặc chi phí.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export { HeroSection };
