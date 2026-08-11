import { ArrowRightIcon, MapPinnedIcon } from 'lucide-react';
import Link from 'next/link';

import { Container } from '@/components/layout/container';
import { Card } from '@/components/ui/card';
import { locationPages } from '@/config/markets';

import { SectionHeading } from './section-heading';

function LocationDirectorySection() {
  const publishedLocations = locationPages.filter((market) => market.status !== 'draft');

  return (
    <section
      id="locations"
      className="scroll-mt-20 border-y border-red-50 bg-[linear-gradient(90deg,#fff_0%,#fff5f5_50%,#fff_100%)] py-16 sm:py-20"
    >
      <Container>
        <SectionHeading
          eyebrow="Khu vực lắp đặt"
          title="Chọn đúng landing page địa phương"
          description="Mỗi trang có nội dung, khu vực và form riêng để kiểm tra hạ tầng chính xác hơn."
        />
        <div className="mx-auto mt-9 grid max-w-4xl gap-4 md:grid-cols-2">
          {publishedLocations.map((market) => (
            <Link key={market.id} href={market.path} className="group outline-none">
              <Card className="hover:border-primary/40 focus-within:border-primary/40 flex-row items-center gap-4 rounded-2xl p-5 shadow-none transition-[border-color,box-shadow,transform] group-hover:-translate-y-0.5 group-hover:shadow-[0_14px_35px_rgb(230_0_18/8%)]">
                <span className="bg-accent text-primary grid size-12 shrink-0 place-items-center rounded-xl">
                  <MapPinnedIcon className="size-5" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <h2 className="text-foreground font-black">Viettel {market.locationName}</h2>
                  <p className="text-muted-foreground mt-1 text-xs">
                    Kiểm tra hạ tầng và đăng ký theo địa chỉ
                  </p>
                </div>
                <ArrowRightIcon
                  className="text-primary ml-auto size-5 shrink-0 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

export { LocationDirectorySection };
