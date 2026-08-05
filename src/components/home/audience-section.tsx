import {
  BriefcaseBusinessIcon,
  Building2Icon,
  Gamepad2Icon,
  HouseIcon,
  StoreIcon,
  UserIcon,
} from 'lucide-react';

import { Container } from '@/components/layout/container';
import { Card } from '@/components/ui/card';

import { SectionHeading } from './section-heading';

const audiences = [
  { icon: UserIcon, title: 'Cá nhân', description: 'Lướt web, mạng xã hội' },
  { icon: HouseIcon, title: 'Gia đình', description: 'Học tập, giải trí' },
  { icon: Gamepad2Icon, title: 'Game thủ', description: 'Chơi game mượt mà' },
  { icon: BriefcaseBusinessIcon, title: 'Làm việc tại nhà', description: 'Họp, làm việc online' },
  { icon: StoreIcon, title: 'Kinh doanh nhỏ', description: 'Ổn định, tiết kiệm' },
  { icon: Building2Icon, title: 'Doanh nghiệp', description: 'Hiệu suất cao' },
] as const;

function AudienceSection() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Dễ dàng lựa chọn"
          title="Chọn gói theo nhu cầu"
          description="Đa dạng gói cước phù hợp cho mọi nhu cầu sử dụng"
        />

        <div className="mt-9 grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-6">
          {audiences.map(({ icon: Icon, title, description }) => (
            <Card
              key={title}
              className="group hover:border-primary/30 items-center gap-3 rounded-2xl px-3 py-5 text-center shadow-none transition-[border-color,box-shadow,transform] hover:-translate-y-1 hover:shadow-[0_14px_35px_rgb(230_0_18/8%)] sm:px-4 sm:py-6"
            >
              <span className="bg-accent text-primary group-hover:bg-primary group-hover:text-primary-foreground grid size-12 place-items-center rounded-2xl transition-colors">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-card-foreground text-sm font-extrabold">{title}</h3>
                <p className="text-muted-foreground mt-1 text-xs leading-relaxed">{description}</p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

export { AudienceSection };
