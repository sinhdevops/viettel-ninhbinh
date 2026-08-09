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
    title: 'Đăng ký lắp đặt',
    description: 'Gửi thông tin địa chỉ và nhu cầu lắp đặt.',
  },
  {
    icon: PhoneCallIcon,
    title: 'Tư vấn & chọn gói',
    description: 'Nhân viên tư vấn gói cước phù hợp nhu cầu.',
  },
  {
    icon: BadgeCheckIcon,
    title: 'Đăng ký dịch vụ',
    description: 'Cung cấp thông tin và xác nhận đăng ký.',
  },
  {
    icon: RouterIcon,
    title: 'Lắp đặt & bàn giao',
    description: 'Kỹ thuật viên lắp đặt nhanh chóng.',
  },
  {
    icon: HeadsetIcon,
    title: 'Sử dụng & hỗ trợ',
    description: 'Hỗ trợ kỹ thuật trong suốt quá trình sử dụng.',
  },
] as const;

const documents = [
  {
    icon: IdCardIcon,
    title: 'Cá nhân',
    document: 'CMND/CCCD bản gốc',
    note: 'Thông tin đăng ký chính chủ',
  },
  {
    icon: Building2Icon,
    title: 'Doanh nghiệp',
    document: 'Giấy phép đăng ký kinh doanh',
    note: 'CMND/CCCD người đại diện',
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

        <ol className="relative mt-10 grid gap-4 before:absolute before:top-9 before:right-[10%] before:left-[10%] before:hidden before:border-t before:border-dashed before:border-red-200 md:grid-cols-5 md:gap-2 md:before:block">
          {steps.map(({ icon: Icon, title, description }, index) => (
            <li
              key={title}
              className="border-border bg-background relative grid grid-cols-[3.5rem_1fr] gap-x-4 rounded-2xl border p-4 md:block md:border-0 md:bg-transparent md:px-2 md:text-center"
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
          Chuẩn bị giấy tờ
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
