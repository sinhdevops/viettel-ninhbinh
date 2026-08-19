import { ArrowRightIcon, CheckCircle2Icon, MapPinnedIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Container } from '@/components/layout/container';
import { Button } from '@/components/ui/button';
import { IMAGE_PATHS } from '@/constants/images';

const highlights = [
  'Internet cáp quang và Wi-Fi Mesh',
  'Truyền hình TV360 và combo gia đình',
  'Camera cho nhà ở, cửa hàng và doanh nghiệp',
  'Kiểm tra hạ tầng theo địa chỉ trước đăng ký',
] as const;

function GlobalHeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[linear-gradient(135deg,#fff_0%,#f8faff_58%,#fff1f2_100%)] py-12 sm:py-16 lg:py-20"
    >
      <Container className="grid items-center gap-9 lg:grid-cols-2 lg:gap-14">
        <div>
          <p className="text-primary text-xs font-black tracking-[0.14em] uppercase">
            Dịch vụ kết nối cho gia đình và doanh nghiệp
          </p>
          <h1 className="text-foreground mt-3 text-4xl leading-[1.08] font-black tracking-[-0.05em] sm:text-5xl lg:text-6xl">
            Internet, truyền hình và camera <span className="text-primary">Viettel</span>
          </h1>
          <p className="text-muted-foreground mt-5 max-w-xl text-base leading-7 sm:text-lg">
            Tìm hiểu dịch vụ, chọn khu vực cần lắp đặt và nhận tư vấn theo nhu cầu thực tế.
          </p>
          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {highlights.map((highlight) => (
              <li
                key={highlight}
                className="text-foreground/75 flex items-start gap-2.5 text-sm font-semibold"
              >
                <CheckCircle2Icon
                  className="text-primary mt-0.5 size-4 shrink-0"
                  aria-hidden="true"
                />
                {highlight}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3 min-[420px]:flex-row">
            <Button asChild size="lg">
              <Link href="#locations">
                <MapPinnedIcon />
                Chọn khu vực cần lắp
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#services">
                Xem các dịch vụ
                <ArrowRightIcon />
              </Link>
            </Button>
          </div>
          <p className="text-muted-foreground mt-5 max-w-xl text-xs leading-5">
            Đây là website tiếp nhận nhu cầu tư vấn. Gửi yêu cầu không làm phát sinh hợp đồng hoặc
            chi phí; giá và lịch lắp đặt được xác nhận trước khi bạn quyết định.
          </p>
        </div>

        <div className="relative mx-auto aspect-[4/3] w-full max-w-2xl overflow-hidden rounded-[2rem] shadow-[0_28px_80px_rgb(25_44_72/18%)]">
          <Image
            src={IMAGE_PATHS.heroNetwork}
            alt="Giải pháp Internet và Wi-Fi Viettel cho gia đình"
            fill
            preload
            sizes="(max-width: 1023px) 100vw, 50vw"
            className="object-cover object-[65%_center]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#101d32]/55 via-transparent to-transparent" />
          <p className="absolute right-5 bottom-5 left-5 text-sm leading-6 font-bold text-white sm:text-base">
            Chọn tỉnh, thành phố cần lắp để xem khu vực hỗ trợ và gửi địa chỉ kiểm tra hạ tầng.
          </p>
        </div>
      </Container>
    </section>
  );
}

export { GlobalHeroSection };
