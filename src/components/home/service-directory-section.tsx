import { Building2Icon, CctvIcon, TvIcon, WifiIcon } from 'lucide-react';
import Link from 'next/link';

import { Container } from '@/components/layout/container';
import { Card } from '@/components/ui/card';

import { SectionHeading } from './section-heading';

const services = [
  {
    icon: WifiIcon,
    title: 'Internet Viettel',
    description: 'Internet cáp quang và Wi-Fi Mesh cho cá nhân, gia đình.',
    href: '/internet-viettel',
  },
  {
    icon: TvIcon,
    title: 'Truyền hình TV360',
    description: 'Combo Internet và nội dung truyền hình cho nhu cầu giải trí.',
    href: '/truyen-hinh-viettel',
  },
  {
    icon: CctvIcon,
    title: 'Camera Viettel',
    description: 'Giải pháp quan sát cho gia đình, cửa hàng và mặt bằng.',
    href: '/camera-viettel',
  },
  {
    icon: Building2Icon,
    title: 'Dịch vụ doanh nghiệp',
    description: 'Đường truyền, băng thông quốc tế và IP tĩnh theo nhu cầu.',
    href: '/internet-doanh-nghiep',
  },
] as const;

function ServiceDirectorySection() {
  return (
    <section id="services" className="scroll-mt-20 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Sản phẩm và dịch vụ"
          title="Chọn dịch vụ phù hợp nhu cầu"
          description="Xem tiêu chí lựa chọn, thông tin cần xác nhận và khu vực đang tiếp nhận yêu cầu cho từng dịch vụ."
        />
        <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-9 sm:gap-4 xl:grid-cols-4">
          {services.map(({ icon: Icon, title, description, href }) => (
            <Link key={href} href={href} className="group outline-none">
              <Card className="hover:border-primary/35 focus-within:border-primary/35 h-full gap-3 rounded-2xl p-4 shadow-none transition-[border-color,box-shadow,transform] group-hover:-translate-y-1 group-hover:shadow-[0_16px_38px_rgb(230_0_18/9%)] sm:gap-4 sm:p-6">
                <span className="bg-accent text-primary group-hover:bg-primary group-hover:text-primary-foreground grid size-12 place-items-center rounded-2xl transition-colors">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <div>
                  <h2 className="text-foreground text-lg font-black">{title}</h2>
                  <p className="text-muted-foreground mt-2 hidden text-sm leading-6 sm:block">
                    {description}
                  </p>
                  <p className="text-primary mt-4 text-sm font-black">Xem chi tiết →</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

export { ServiceDirectorySection };
