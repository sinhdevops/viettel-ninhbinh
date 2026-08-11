import { Building2Icon, CctvIcon, TvIcon, WifiIcon } from 'lucide-react';
import Link from 'next/link';

import { Container } from '@/components/layout/container';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { internetPlans } from '@/data/home';

import { SectionHeading } from './section-heading';

function GlobalOffersSection() {
  return (
    <>
      <section id="plans" className="bg-secondary/55 scroll-mt-20 py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Internet cáp quang"
            title="Một số gói Internet đang được quan tâm"
            description="Giá hiển thị để tham khảo; khả năng áp dụng được xác nhận theo địa chỉ và thời điểm đăng ký."
          />
          <div className="mt-9 grid gap-4 md:grid-cols-3">
            {internetPlans.slice(0, 3).map((plan) => (
              <Card key={plan.id} className="gap-4 rounded-2xl p-5 sm:p-6">
                <div className="flex items-center justify-between gap-4">
                  <span className="bg-accent text-primary grid size-11 place-items-center rounded-xl">
                    <WifiIcon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="text-muted-foreground text-xs font-black tracking-wide uppercase">
                    {plan.name}
                  </span>
                </div>
                <h3 className="text-foreground text-2xl font-black">{plan.speed}</h3>
                <ul className="text-muted-foreground grid gap-2 text-sm">
                  {plan.features.map((feature) => (
                    <li key={feature}>• {feature}</li>
                  ))}
                </ul>
                <p>
                  <strong className="text-primary text-2xl font-black">{plan.price}</strong>
                  <span className="text-muted-foreground text-xs">/tháng</span>
                </p>
              </Card>
            ))}
          </div>
          <div className="mt-7 text-center">
            <Button asChild variant="outline">
              <Link href="/internet-viettel">Xem dịch vụ Internet</Link>
            </Button>
          </div>
        </Container>
      </section>

      <section id="combo" className="scroll-mt-20 py-16 sm:py-20">
        <Container>
          <div className="grid gap-4 lg:grid-cols-3">
            <Card className="gap-4 rounded-2xl p-6 lg:col-span-1">
              <TvIcon className="text-primary size-7" aria-hidden="true" />
              <h2 className="text-xl font-black">Internet + TV360</h2>
              <p className="text-muted-foreground text-sm leading-6">
                Kết hợp đường truyền và nội dung giải trí; quyền lợi được xác nhận theo từng gói.
              </p>
              <Link href="/truyen-hinh-viettel" className="text-primary text-sm font-black">
                Tìm hiểu TV360 →
              </Link>
            </Card>
            <Card id="camera" className="scroll-mt-20 gap-4 rounded-2xl p-6 lg:col-span-1">
              <CctvIcon className="text-primary size-7" aria-hidden="true" />
              <h2 className="text-xl font-black">Camera Viettel</h2>
              <p className="text-muted-foreground text-sm leading-6">
                Tư vấn thiết bị, vị trí quan sát và lưu trữ theo không gian thực tế.
              </p>
              <Link href="/camera-viettel" className="text-primary text-sm font-black">
                Tìm hiểu camera →
              </Link>
            </Card>
            <Card id="business" className="scroll-mt-20 gap-4 rounded-2xl p-6 lg:col-span-1">
              <Building2Icon className="text-primary size-7" aria-hidden="true" />
              <h2 className="text-xl font-black">Giải pháp doanh nghiệp</h2>
              <p className="text-muted-foreground text-sm leading-6">
                Chọn đường truyền, băng thông quốc tế và IP theo quy mô vận hành.
              </p>
              <Link href="/internet-doanh-nghiep" className="text-primary text-sm font-black">
                Xem gói doanh nghiệp →
              </Link>
            </Card>
          </div>
        </Container>
      </section>
    </>
  );
}

export { GlobalOffersSection };
