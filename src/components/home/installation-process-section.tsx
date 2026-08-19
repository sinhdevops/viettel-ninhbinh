import {
  BadgeCheckIcon,
  Building2Icon,
  ClipboardPenLineIcon,
  HeadsetIcon,
  IdCardIcon,
  PhoneCallIcon,
  RouterIcon,
} from 'lucide-react';

import { Container } from '@/components/layout/container';
import type { MarketConfig } from '@/config/markets';

import { SectionHeading } from './section-heading';

const steps = [
  {
    icon: ClipboardPenLineIcon,
    title: 'Gửi địa chỉ',
    description: 'Cho biết phường, xã và địa chỉ dự kiến lắp.',
  },
  {
    icon: PhoneCallIcon,
    title: 'Kiểm tra hạ tầng',
    description: 'Xác minh khả năng cung cấp tại vị trí cụ thể.',
  },
  {
    icon: BadgeCheckIcon,
    title: 'Xác nhận phương án',
    description: 'Làm rõ gói, thiết bị, chi phí và điều kiện.',
  },
  {
    icon: RouterIcon,
    title: 'Ký hồ sơ & hẹn lịch',
    description: 'Hoàn tất hồ sơ theo hướng dẫn và thống nhất lịch.',
  },
  {
    icon: HeadsetIcon,
    title: 'Lắp đặt & nghiệm thu',
    description: 'Kỹ thuật viên triển khai theo lịch đã xác nhận.',
  },
] as const;

const documents = [
  {
    icon: IdCardIcon,
    title: 'Cá nhân',
    document: 'Giấy tờ tùy thân còn hiệu lực',
    note: 'Chuẩn bị theo hướng dẫn; không gửi ảnh giấy tờ qua form',
  },
  {
    icon: Building2Icon,
    title: 'Doanh nghiệp',
    document: 'Hồ sơ doanh nghiệp và người đại diện',
    note: 'Có thể cần giấy ủy quyền; xác nhận cụ thể khi tư vấn',
  },
] as const;

interface InstallationProcessSectionProps {
  market: MarketConfig;
}

function InstallationProcessSection({ market }: InstallationProcessSectionProps) {
  return (
    <section id="process" className="scroll-mt-24 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Nhanh chóng, thuận tiện"
          title={`Quy trình lắp đặt Internet Viettel tại ${market.locationName}`}
        />

        <p className="text-muted-foreground mt-7 text-xs font-semibold md:hidden">
          Vuốt ngang để xem đủ 5 bước
        </p>
        <ol className="relative -mx-4 mt-4 flex snap-x snap-mandatory [scrollbar-width:none] gap-4 overflow-x-auto px-4 pb-4 before:absolute before:top-9 before:right-[10%] before:left-[10%] before:hidden before:border-t before:border-dashed before:border-red-200 md:mx-0 md:grid md:grid-cols-5 md:gap-2 md:overflow-visible md:px-0 md:before:block [&::-webkit-scrollbar]:hidden">
          {steps.map(({ icon: Icon, title, description }, index) => (
            <li
              key={title}
              className="border-border bg-background relative grid min-w-[78vw] snap-center grid-cols-[3.5rem_1fr] gap-x-4 rounded-2xl border p-4 md:block md:min-w-0 md:border-0 md:bg-transparent md:px-2 md:text-center"
            >
              <span className="bg-background text-primary relative z-10 row-span-2 grid size-14 place-items-center rounded-full border border-red-200 shadow-[0_8px_25px_rgb(230_0_18/8%)] md:mx-auto md:size-[4.5rem]">
                <Icon className="size-5 md:size-6" aria-hidden="true" />
                <b className="bg-primary text-primary-foreground absolute -right-1 -bottom-1 grid size-5 place-items-center rounded-full text-[0.625rem]">
                  {index + 1}
                </b>
              </span>
              <h3 className="text-foreground self-end text-sm font-black md:mt-4">{title}</h3>
              <p className="text-muted-foreground mt-1 text-xs leading-relaxed md:mt-2">
                {description}
              </p>
            </li>
          ))}
        </ol>

        <h3 className="text-foreground mt-12 text-center text-2xl font-black tracking-tight">
          Hồ sơ có thể cần chuẩn bị
        </h3>
        <div className="mx-auto mt-6 grid max-w-4xl gap-4 md:grid-cols-2">
          {documents.map(({ icon: Icon, title, document, note }) => (
            <article
              key={title}
              className="border-border bg-background flex items-center gap-4 rounded-2xl border p-5 sm:p-6"
            >
              <span className="bg-accent text-primary grid size-12 shrink-0 place-items-center rounded-xl">
                <Icon className="size-6" aria-hidden="true" />
              </span>
              <div>
                <h4 className="text-foreground font-black">{title}</h4>
                <p className="text-foreground/75 mt-1 text-sm font-semibold">{document}</p>
                <p className="text-muted-foreground mt-1 text-xs">{note}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export { InstallationProcessSection };
