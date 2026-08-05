import { ExpandIcon, RouterIcon, WifiIcon, WorkflowIcon } from 'lucide-react';
import Image from 'next/image';

import { Container } from '@/components/layout/container';
import { IMAGE_PATHS } from '@/constants/images';
import { PlanSelectionButton } from '@/features/leads/plan-selection-button';

import { SectionHeading } from './section-heading';

const meshBenefits = [
  { icon: WifiIcon, label: 'Phủ sóng toàn bộ ngôi nhà' },
  { icon: WorkflowIcon, label: 'Chuyển vùng liền mạch' },
  { icon: RouterIcon, label: 'Kết nối nhiều thiết bị cùng lúc' },
  { icon: ExpandIcon, label: 'Dễ dàng mở rộng khi cần' },
] as const;

function MeshSection() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl lg:aspect-[16/11]">
            <Image
              src={IMAGE_PATHS.heroNetwork}
              alt="Hệ thống Wi-Fi Mesh phủ sóng nhiều phòng"
              fill
              sizes="(max-width: 1023px) 100vw, 50vw"
              className="object-cover object-[67%_center]"
            />
            <div className="to-background/30 absolute inset-0 bg-gradient-to-r from-transparent via-transparent" />
          </div>

          <div>
            <SectionHeading
              eyebrow="Kết nối không giới hạn"
              title="Phủ sóng thông minh với Wi-Fi Mesh"
              description="Loại bỏ điểm chết Wi-Fi – Sóng đồng đều mọi không gian"
              align="left"
            />
            <ul className="mt-7 grid gap-4 sm:grid-cols-2">
              {meshBenefits.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="text-foreground/75 flex items-center gap-3 text-sm font-semibold"
                >
                  <span className="bg-accent text-primary grid size-10 shrink-0 place-items-center rounded-xl">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  {label}
                </li>
              ))}
            </ul>
            <PlanSelectionButton
              service="internet"
              plan="meshvt2"
              variant="outline"
              className="mt-8 w-full sm:w-auto"
            >
              Tìm hiểu Wi-Fi Mesh
            </PlanSelectionButton>
          </div>
        </div>
      </Container>
    </section>
  );
}

export { MeshSection };
