import { MapPinnedIcon } from 'lucide-react';

import { Container } from '@/components/layout/container';
import type { MarketConfig } from '@/config/markets';

import { SectionHeading } from './section-heading';

interface LocationIntroductionSectionProps {
  market: MarketConfig;
}

function LocationIntroductionSection({ market }: LocationIntroductionSectionProps) {
  return (
    <section className="py-14 sm:py-16">
      <Container className="grid gap-7 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <SectionHeading
          eyebrow="Thông tin khu vực"
          title={`Dịch vụ Viettel tại ${market.locationName}`}
          description="Chọn đúng phường, xã và cung cấp địa chỉ dự kiến để đầu mối kiểm tra khả năng cung cấp."
          align="left"
        />
        <div className="border-border bg-card rounded-2xl border p-5 sm:p-7">
          <div className="flex items-start gap-3">
            <span className="bg-accent text-primary grid size-11 shrink-0 place-items-center rounded-xl">
              <MapPinnedIcon className="size-5" aria-hidden="true" />
            </span>
            <div className="space-y-3">
              {market.localIntroduction.map((paragraph) => (
                <p key={paragraph} className="text-muted-foreground text-sm leading-7">
                  {paragraph}
                </p>
              ))}
              <p className="text-foreground text-sm font-bold">
                Khu vực được chọn trong form sẽ được kiểm tra lại trước khi xác nhận đăng ký.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export { LocationIntroductionSection };
