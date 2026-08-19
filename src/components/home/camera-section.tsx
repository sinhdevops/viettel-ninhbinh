import { Building2Icon, HomeIcon, ShieldCheckIcon, StoreIcon } from 'lucide-react';

import { Container } from '@/components/layout/container';
import { Card } from '@/components/ui/card';
import { PlanSelectionButton } from '@/features/leads/plan-selection-button';

import { SectionHeading } from './section-heading';

const cameraUses = [
  {
    icon: HomeIcon,
    title: 'Gia đình',
    description: 'Theo dõi các khu vực cần thiết trong nhà theo nhu cầu thực tế.',
  },
  {
    icon: StoreIcon,
    title: 'Cửa hàng',
    description: 'Hỗ trợ quan sát quầy, lối ra vào và khu vực kinh doanh.',
  },
  {
    icon: Building2Icon,
    title: 'Doanh nghiệp',
    description: 'Tư vấn số lượng và vị trí lắp đặt theo quy mô mặt bằng.',
  },
] as const;

function CameraSection() {
  return (
    <section id="camera" className="scroll-mt-20 py-16 sm:py-20">
      <Container>
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Quan sát chủ động"
            title="Camera Viettel cho gia đình và kinh doanh"
            description="Thiết bị, lưu trữ và phương án lắp đặt được tư vấn theo vị trí sử dụng."
            align="left"
          />
          <PlanSelectionButton service="camera" className="w-full sm:w-auto">
            Tư vấn camera
          </PlanSelectionButton>
        </div>
        <div className="mt-9 grid gap-4 md:grid-cols-3">
          {cameraUses.map(({ icon: Icon, title, description }) => (
            <Card key={title} className="gap-4 rounded-2xl p-5 shadow-none sm:p-6">
              <span className="bg-accent text-primary grid size-11 place-items-center rounded-xl">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-foreground font-black">{title}</h3>
                <p className="text-muted-foreground mt-2 text-sm leading-6">{description}</p>
              </div>
            </Card>
          ))}
        </div>
        <div className="bg-secondary mt-5 flex items-start gap-3 rounded-2xl p-5">
          <ShieldCheckIcon className="text-primary mt-0.5 size-5 shrink-0" aria-hidden="true" />
          <p className="text-muted-foreground text-sm leading-6">
            Giá, số lượng camera, phương thức lưu trữ và điều kiện lắp đặt chỉ được xác nhận sau khi
            khảo sát nhu cầu và vị trí thực tế.
          </p>
        </div>
      </Container>
    </section>
  );
}

export { CameraSection };
