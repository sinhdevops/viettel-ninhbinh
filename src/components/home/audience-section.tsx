import {
  BriefcaseBusinessIcon,
  Building2Icon,
  Gamepad2Icon,
  HouseIcon,
  StoreIcon,
  UserIcon,
} from 'lucide-react';
import Link from 'next/link';

import { Container } from '@/components/layout/container';
import { Card } from '@/components/ui/card';

import { SectionHeading } from './section-heading';

const audiences = [
  { icon: UserIcon, title: 'Cá nhân', description: 'Ít thiết bị, nhu cầu cơ bản', href: '#plans' },
  { icon: HouseIcon, title: 'Gia đình', description: 'Nhiều người dùng cùng lúc', href: '#plans' },
  {
    icon: Gamepad2Icon,
    title: 'Game và giải trí',
    description: 'Cần xem cả tốc độ và độ phủ',
    href: '#plans',
  },
  {
    icon: BriefcaseBusinessIcon,
    title: 'Làm việc tại nhà',
    description: 'Họp video, tải dữ liệu',
    href: '#plans',
  },
  {
    icon: StoreIcon,
    title: 'Cửa hàng',
    description: 'Internet, camera, bán hàng',
    href: '#business',
  },
  {
    icon: Building2Icon,
    title: 'Doanh nghiệp',
    description: 'Băng thông và IP theo vận hành',
    href: '#business',
  },
] as const;

function AudienceSection() {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <SectionHeading
          eyebrow="Gợi ý trước khi chọn"
          title="Bắt đầu từ cách bạn sử dụng Internet"
          description="Chọn nhóm gần với nhu cầu của bạn để xem phần thông tin liên quan."
        />

        <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-6">
          {audiences.map(({ icon: Icon, title, description, href }) => (
            <Link key={title} href={href} className="group rounded-2xl outline-none">
              <Card className="group-hover:border-primary/30 group-focus-visible:border-primary/30 h-full items-center gap-3 rounded-2xl px-3 py-5 text-center shadow-none transition-[border-color,box-shadow,transform] group-hover:-translate-y-1 group-hover:shadow-[0_14px_35px_rgb(230_0_18/8%)] group-focus-visible:ring-3 group-focus-visible:ring-red-100 sm:px-4 sm:py-6">
                <span className="bg-accent text-primary group-hover:bg-primary group-hover:text-primary-foreground grid size-12 place-items-center rounded-2xl transition-colors">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-card-foreground text-sm font-extrabold">{title}</h3>
                  <p className="text-muted-foreground mt-1 text-xs leading-relaxed">
                    {description}
                  </p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

export { AudienceSection };
