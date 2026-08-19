import { ArrowRightIcon, HouseIcon, Layers3Icon, MonitorSmartphoneIcon } from 'lucide-react';
import Link from 'next/link';

import { Container } from '@/components/layout/container';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

import { SectionHeading } from './section-heading';

const decisionFactors = [
  {
    icon: MonitorSmartphoneIcon,
    title: 'Số người và thiết bị',
    description:
      'Liệt kê điện thoại, TV, máy tính, camera và các thiết bị thường dùng cùng lúc để chọn băng thông.',
  },
  {
    icon: HouseIcon,
    title: 'Diện tích và kết cấu nhà',
    description:
      'Nhà nhiều tầng, nhiều phòng hoặc tường dày có thể cần thêm điểm phát Wi-Fi thay vì chỉ tăng tốc độ.',
  },
  {
    icon: Layers3Icon,
    title: 'Dịch vụ cần dùng chung',
    description:
      'Xác định nhu cầu TV360, camera hoặc IP tĩnh để so sánh gói đơn lẻ với phương án kết hợp.',
  },
] as const;

function GlobalOffersSection() {
  return (
    <section id="plans" className="bg-secondary/55 scroll-mt-20 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Chọn theo nhu cầu"
          title="Ba thông tin cần biết trước khi xem giá"
          description="Giá và thiết bị phụ thuộc khu vực. Bắt đầu từ nhu cầu thực tế giúp tránh chọn gói quá thấp hoặc trả tiền cho phần không dùng đến."
        />
        <div className="mt-9 grid gap-4 md:grid-cols-3">
          {decisionFactors.map(({ icon: Icon, title, description }, index) => (
            <Card key={title} className="gap-4 rounded-2xl p-5 shadow-none sm:p-6">
              <div className="flex items-center gap-3">
                <span className="bg-accent text-primary grid size-11 place-items-center rounded-xl">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <span className="text-muted-foreground text-xs font-black tracking-wide uppercase">
                  Bước {index + 1}
                </span>
              </div>
              <h2 className="text-foreground text-xl font-black">{title}</h2>
              <p className="text-muted-foreground text-sm leading-6">{description}</p>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button asChild size="lg">
            <Link href="#locations">
              Chọn khu vực để xem gói áp dụng
              <ArrowRightIcon />
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}

export { GlobalOffersSection };
