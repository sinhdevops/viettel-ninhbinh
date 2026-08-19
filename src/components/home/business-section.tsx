import { ArrowRightIcon, Building2Icon, Globe2Icon, NetworkIcon, UsersIcon } from 'lucide-react';

import { Container } from '@/components/layout/container';
import { Card } from '@/components/ui/card';
import { PlanSelectionButton } from '@/features/leads/plan-selection-button';

import { SectionHeading } from './section-heading';

const businessRequirements = [
  {
    icon: UsersIcon,
    title: 'Quy mô sử dụng',
    description:
      'Số nhân sự, thiết bị và ứng dụng dùng đồng thời là cơ sở để xác định băng thông phù hợp.',
  },
  {
    icon: Globe2Icon,
    title: 'Kết nối quốc tế',
    description:
      'Làm rõ nhu cầu cloud, họp trực tuyến, truyền dữ liệu hoặc truy cập hệ thống ở nước ngoài.',
  },
  {
    icon: NetworkIcon,
    title: 'IP tĩnh và hệ thống nội bộ',
    description:
      'Xác nhận số IP, VPN, camera, máy chủ hoặc nhiều điểm bán trước khi xây dựng phương án.',
  },
] as const;

function BusinessSection() {
  return (
    <section
      id="business"
      className="scroll-mt-20 border-y border-red-50 bg-[linear-gradient(90deg,#fff_0%,#fff6f6_52%,#fff_100%)] py-16 sm:py-20"
    >
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Dành cho tổ chức"
            title="Tư vấn Internet theo mô hình vận hành"
            description="Gói doanh nghiệp cần được xác nhận theo địa chỉ, số người dùng, băng thông quốc tế và yêu cầu IP; website không hiển thị bảng giá cũ khi chưa kiểm chứng."
            align="left"
          />
          <PlanSelectionButton service="business" className="w-full sm:w-auto">
            Gửi yêu cầu tư vấn
            <ArrowRightIcon />
          </PlanSelectionButton>
        </div>

        <p className="text-muted-foreground mt-7 text-xs font-semibold md:hidden">
          Vuốt ngang để xem các nhu cầu doanh nghiệp
        </p>
        <div className="-mx-4 mt-4 flex snap-x snap-mandatory [scrollbar-width:none] gap-4 overflow-x-auto px-4 pb-4 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0 [&::-webkit-scrollbar]:hidden">
          {businessRequirements.map(({ icon: Icon, title, description }) => (
            <Card
              key={title}
              className="min-w-[82vw] snap-center gap-4 rounded-2xl p-5 shadow-none sm:p-6 md:min-w-0"
            >
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

        <div className="border-border bg-background mt-5 flex items-start gap-3 rounded-2xl border p-5">
          <Building2Icon className="text-primary mt-0.5 size-5 shrink-0" aria-hidden="true" />
          <p className="text-muted-foreground text-sm leading-6">
            Báo giá cuối cùng chỉ được lập sau khi hai bên xác nhận nhu cầu kỹ thuật, khả năng cung
            cấp và điều kiện hợp đồng tại địa chỉ doanh nghiệp.
          </p>
        </div>
      </Container>
    </section>
  );
}

export { BusinessSection };
