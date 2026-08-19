import {
  ArrowRightIcon,
  BellRingIcon,
  CalendarCheck2Icon,
  CameraIcon,
  CheckCircle2Icon,
  ChevronDownIcon,
  CloudIcon,
  EyeIcon,
  HeadphonesIcon,
  MapPinnedIcon,
  Mic2Icon,
  PhoneCallIcon,
  ShieldCheckIcon,
  SmartphoneIcon,
  UsersIcon,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import {
  Container,
  FloatingContact,
  MobileSectionNav,
  SiteFooter,
  SiteHeader,
} from '@/components/layout';
import { Button } from '@/components/ui/button';
import { locationPages } from '@/config/markets';
import { siteConfig } from '@/config/site';
import { cameraFaqItems } from '@/content/camera-service';
import { servicePages } from '@/content/services';
import { ServicePageJsonLd } from '@/lib/structured-data';

import { CameraPricingSection } from './camera-pricing-section';
import { CameraUseCaseTabs } from './camera-use-case-tabs';

const cameraContent = servicePages.camera;

const processItems = [
  {
    icon: MapPinnedIcon,
    number: '01',
    title: 'Kiểm tra vị trí',
    description: 'Xác nhận hạ tầng, góc quan sát và khu vực cần lắp.',
  },
  {
    icon: CalendarCheck2Icon,
    number: '02',
    title: 'Đặt lịch lắp đặt',
    description: 'Thống nhất loại Camera, gói Cloud, chi phí và thời gian.',
  },
  {
    icon: CameraIcon,
    number: '03',
    title: 'Lắp đặt Camera',
    description: 'Kỹ thuật lắp đặt, kết nối và kiểm tra hình ảnh thực tế.',
  },
  {
    icon: SmartphoneIcon,
    number: '04',
    title: 'Kích hoạt & sử dụng',
    description: 'Cấu hình tài khoản và hướng dẫn các thao tác cần thiết.',
  },
] as const;

function PhonePreview() {
  return (
    <div className="absolute right-[3%] bottom-[4%] z-20 hidden h-[76%] w-[29%] rounded-[2rem] border-[7px] border-[#111827] bg-white p-2 shadow-[0_28px_55px_rgb(16_24_40/28%)] sm:block">
      <div className="absolute top-1.5 left-1/2 z-10 h-3 w-14 -translate-x-1/2 rounded-full bg-[#111827]" />
      <div className="relative h-[46%] overflow-hidden rounded-[1.35rem] bg-slate-100">
        <Image
          src="/images/camera-family-v1.webp"
          alt=""
          fill
          sizes="(max-width: 1024px) 25vw, 15vw"
          className="object-cover"
        />
      </div>
      <div className="grid grid-cols-3 gap-2 px-1 pt-3">
        {[CameraIcon, Mic2Icon, BellRingIcon, EyeIcon, ShieldCheckIcon, CloudIcon].map(
          (Icon, index) => (
            <span
              key={index}
              className="grid aspect-square place-items-center rounded-full bg-slate-50 text-[#10263f]"
            >
              <Icon className="size-3" aria-hidden="true" />
            </span>
          )
        )}
      </div>
      <p className="mt-3 text-center text-[0.5rem] font-black text-[#10263f]">CAMERA CỦA TÔI</p>
    </div>
  );
}

function CameraServicePage() {
  return (
    <>
      <ServicePageJsonLd content={cameraContent} />
      <SiteHeader />
      <main id="main-content" className="flex-1 overflow-x-clip" tabIndex={-1}>
        <section
          id="top"
          className="overflow-hidden bg-[radial-gradient(circle_at_84%_25%,rgba(255,190,199,.55),transparent_26%),linear-gradient(125deg,#f7fbff_0%,#fff_52%,#fff3f5_100%)]"
        >
          <Container className="grid min-h-[570px] items-center gap-9 py-12 lg:grid-cols-[0.9fr_1.1fr] lg:py-16">
            <div className="relative z-20 max-w-xl">
              <p className="text-primary text-[0.6875rem] font-black tracking-[0.15em] uppercase">
                Home Camera Viettel
              </p>
              <h1 className="mt-4 text-4xl leading-[1.08] font-black tracking-[-0.035em] text-[#10263f] sm:text-5xl lg:text-[3.45rem]">
                Quan sát ngôi nhà, cửa hàng{' '}
                <span className="text-primary">ngay trên điện thoại</span>
              </h1>
              <p className="text-muted-foreground mt-4 text-lg leading-7">
                Xem trực tiếp. An tâm mọi lúc.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  'Cảnh báo chuyển động thông minh',
                  'Đàm thoại hai chiều',
                  'Lưu trữ Cloud an toàn',
                  'Quản lý và xem dễ dàng',
                ].map((item) => (
                  <p
                    key={item}
                    className="flex items-center gap-2 text-xs font-bold text-slate-700"
                  >
                    <CheckCircle2Icon className="text-primary size-4 shrink-0" aria-hidden="true" />
                    {item}
                  </p>
                ))}
              </div>

              <div className="mt-7 flex flex-col gap-3 min-[430px]:flex-row">
                <Button asChild size="lg">
                  <a href="#khu-vuc">Kiểm tra khả năng lắp đặt</a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="#bang-gia">Xem gói cước</a>
                </Button>
              </div>

              <p className="text-muted-foreground mt-5 text-xs leading-5">
                Gửi yêu cầu tư vấn không làm phát sinh hợp đồng hoặc chi phí.
              </p>
              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-[0.6875rem] font-bold text-slate-500">
                <span className="flex items-center gap-1.5">
                  <ShieldCheckIcon className="size-4" /> Dữ liệu an toàn
                </span>
                <span className="flex items-center gap-1.5">
                  <HeadphonesIcon className="size-4" /> Hỗ trợ kỹ thuật
                </span>
                <span className="flex items-center gap-1.5">
                  <CameraIcon className="size-4" /> Camera trong và ngoài trời
                </span>
              </div>
            </div>

            <div className="relative mx-auto aspect-[16/11] w-full max-w-3xl">
              <div className="absolute inset-[8%] rounded-full border border-red-100 bg-red-50/50" />
              <div className="absolute inset-[16%] rounded-full border border-red-100" />
              <div className="absolute inset-y-0 left-0 z-10 w-[78%] overflow-hidden rounded-[2rem]">
                <Image
                  src="/images/camera-product-v2.webp"
                  alt="Camera an ninh trong nhà và giao diện xem trên điện thoại"
                  fill
                  preload
                  sizes="(max-width: 1024px) 78vw, 43vw"
                  className="object-cover object-right mix-blend-multiply"
                />
              </div>
              <PhonePreview />
            </div>
          </Container>
        </section>

        <MobileSectionNav
          items={[
            { href: '#bang-gia', label: 'Gói Cloud' },
            { href: '#tinh-nang', label: 'Tính năng' },
            { href: '#phuong-an', label: 'Chọn Camera' },
            { href: '#quy-trinh', label: 'Quy trình' },
            { href: '#khu-vuc', label: 'Đăng ký' },
          ]}
        />

        <section className="relative z-20 -mt-3 pb-4 sm:-mt-8">
          <Container className="max-w-6xl">
            <div className="-mx-4 flex snap-x snap-mandatory [scrollbar-width:none] overflow-x-auto rounded-2xl border border-slate-200 bg-white px-4 shadow-[0_20px_55px_rgb(20_34_55/10%)] sm:mx-0 sm:grid sm:grid-cols-2 sm:px-0 lg:grid-cols-4 [&::-webkit-scrollbar]:hidden">
              {[
                [UsersIcon, 'Khách hàng tin dùng', 'Tư vấn theo nhu cầu'],
                [ShieldCheckIcon, 'An tâm dữ liệu', 'Cloud theo chu kỳ'],
                [CloudIcon, 'Lưu trữ Cloud', 'Xem lại từ xa'],
                [HeadphonesIcon, 'Hỗ trợ thuê bao', 'Kênh kỹ thuật chính thức'],
              ].map(([Icon, title, description], index) => (
                <div
                  key={title as string}
                  className="flex min-w-[78vw] snap-center items-center gap-4 border-slate-100 p-5 sm:min-w-0 sm:border-r sm:last:border-r-0"
                >
                  <span className="text-primary grid size-11 shrink-0 place-items-center rounded-xl bg-red-50">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-black text-[#10263f]">{title as string}</p>
                    <p className="text-muted-foreground mt-1 text-xs">{description as string}</p>
                  </div>
                  <span className="sr-only">Mục {index + 1}</span>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section id="tinh-nang" className="scroll-mt-24 py-16 sm:py-20">
          <Container className="max-w-6xl">
            <div className="text-center">
              <p className="text-primary text-[0.6875rem] font-black tracking-[0.14em] uppercase">
                Tính năng nổi bật
              </p>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-[#10263f] sm:text-4xl">
                Mọi thứ bạn cần để luôn an tâm
              </h2>
            </div>

            <div className="mt-9 grid gap-4 lg:grid-cols-[1.05fr_0.85fr_0.95fr] lg:grid-rows-2">
              <article className="relative min-h-[390px] overflow-hidden rounded-3xl border border-slate-200 lg:row-span-2">
                <Image
                  src="/images/camera-family-v1.webp"
                  alt="Không gian gia đình được Camera hỗ trợ quan sát"
                  fill
                  sizes="(max-width: 1024px) 100vw, 36vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/15 to-slate-950/15" />
                <div className="relative p-6">
                  <span className="text-primary rounded-md border border-red-200 bg-white/85 px-2 py-1 text-[0.625rem] font-black uppercase">
                    Nổi bật
                  </span>
                  <h3 className="mt-4 text-2xl font-black text-[#10263f]">Hình ảnh Full HD</h3>
                  <p className="mt-2 max-w-xs text-sm leading-6 text-slate-600">
                    Độ phân giải cao, hình ảnh rõ nét trong điều kiện phù hợp.
                  </p>
                </div>
              </article>

              <article className="relative min-h-48 overflow-hidden rounded-3xl border border-slate-200 bg-[linear-gradient(145deg,#fff,#eaf4ff)] p-6 lg:row-span-2">
                <span className="text-primary rounded-md border border-red-200 bg-white px-2 py-1 text-[0.625rem] font-black uppercase">
                  Nổi bật
                </span>
                <h3 className="mt-4 text-xl font-black text-[#10263f]">Lưu trữ Cloud an toàn</h3>
                <p className="text-muted-foreground mt-2 text-sm leading-6">
                  Dữ liệu được mã hóa và lưu theo chu kỳ Cloud đã chọn.
                </p>
                <div className="absolute right-5 bottom-5 left-5 grid h-40 place-items-center rounded-[2rem] bg-[radial-gradient(circle,#d6eaff,#edf6ff_65%,transparent_66%)]">
                  <CloudIcon className="size-24 fill-blue-100 text-blue-500" aria-hidden="true" />
                  <ShieldCheckIcon className="absolute size-11 text-[#10263f]" aria-hidden="true" />
                </div>
              </article>

              {[
                [
                  BellRingIcon,
                  'Cảnh báo chuyển động',
                  'Phát hiện chuyển động và gửi cảnh báo tức thì.',
                ],
                [Mic2Icon, 'Đàm thoại hai chiều', 'Nói chuyện trực tiếp qua Camera dễ dàng.'],
              ].map(([Icon, title, description]) => (
                <article
                  key={title as string}
                  className="flex min-h-40 items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-blue-50 text-blue-700">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-black text-[#10263f]">{title as string}</h3>
                    <p className="text-muted-foreground mt-2 text-sm leading-6">
                      {description as string}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section id="phuong-an" className="scroll-mt-24 bg-[#fbfcfe] py-16 sm:py-20">
          <Container className="max-w-5xl">
            <div className="text-center">
              <p className="text-primary text-[0.6875rem] font-black tracking-[0.14em] uppercase">
                Chọn đúng nhu cầu
              </p>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-[#10263f] sm:text-4xl">
                Không phải vị trí nào cũng dùng cùng một Camera
              </h2>
            </div>
            <CameraUseCaseTabs />
          </Container>
        </section>

        <CameraPricingSection />

        <section id="quy-trinh" className="scroll-mt-24 py-16 sm:py-20">
          <Container className="max-w-6xl">
            <div className="text-center">
              <p className="text-primary text-[0.6875rem] font-black tracking-[0.14em] uppercase">
                Lắp đặt chỉ trong 4 bước
              </p>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-[#10263f]">
                Quy trình rõ ràng, dễ theo dõi
              </h2>
            </div>
            <ol className="-mx-4 mt-10 flex snap-x snap-mandatory [scrollbar-width:none] gap-4 overflow-x-auto px-4 pb-4 md:mx-0 md:grid md:grid-cols-4 md:overflow-visible md:px-0 [&::-webkit-scrollbar]:hidden">
              {processItems.map(({ icon: Icon, number, title, description }, index) => (
                <li
                  key={number}
                  className="relative min-w-[76vw] snap-center rounded-2xl border border-slate-200 bg-white p-5 text-center md:min-w-0 md:border-0 md:bg-transparent md:p-0"
                >
                  {index < processItems.length - 1 && (
                    <span className="absolute top-8 left-[64%] hidden w-[72%] border-t-2 border-dotted border-slate-200 md:block" />
                  )}
                  <div className="relative mx-auto grid size-16 place-items-center rounded-full border border-red-100 bg-white shadow-[0_10px_30px_rgb(20_34_55/8%)]">
                    <Icon className="size-6 text-[#10263f]" aria-hidden="true" />
                    <span className="bg-primary absolute -top-1 -left-1 grid size-7 place-items-center rounded-full text-[0.625rem] font-black text-white">
                      {number}
                    </span>
                  </div>
                  <h3 className="mt-5 font-black text-[#10263f]">{title}</h3>
                  <p className="text-muted-foreground mx-auto mt-2 max-w-52 text-xs leading-5">
                    {description}
                  </p>
                </li>
              ))}
            </ol>
          </Container>
        </section>

        <section id="faq" className="scroll-mt-24 bg-[#f7f9fc] py-16 sm:py-20">
          <Container className="max-w-4xl">
            <div className="text-center">
              <p className="text-primary text-[0.6875rem] font-black tracking-[0.14em] uppercase">
                Câu hỏi thường gặp
              </p>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-[#10263f]">
                Thông tin cần biết trước khi lắp
              </h2>
            </div>
            <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              {cameraFaqItems.map((item) => (
                <details
                  key={item.question}
                  className="group border-b border-slate-100 px-5 last:border-b-0 open:bg-red-50/20"
                >
                  <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-3 text-sm font-black text-[#10263f] outline-none focus-visible:ring-2 focus-visible:ring-red-500/30 [&::-webkit-details-marker]:hidden">
                    {item.question}
                    <ChevronDownIcon
                      className="text-primary size-4 shrink-0 transition-transform group-open:rotate-180"
                      aria-hidden="true"
                    />
                  </summary>
                  <p className="text-muted-foreground border-t border-slate-100 py-4 text-sm leading-6">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </Container>
        </section>

        <section id="khu-vuc" className="scroll-mt-24 py-14 sm:py-16">
          <Container className="max-w-6xl">
            <div className="relative overflow-hidden rounded-[2rem] bg-[linear-gradient(120deg,#df0012,#ff2338)] p-7 text-white shadow-[0_25px_65px_rgb(230_0_18/22%)] sm:p-10">
              <div className="absolute -right-20 -bottom-32 size-80 rounded-full border border-white/15" />
              <div className="relative grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <p className="text-[0.6875rem] font-black tracking-[0.14em] uppercase">
                    Chọn khu vực
                  </p>
                  <h2 className="mt-2 text-3xl font-black tracking-tight">
                    Chọn khu vực cần lắp Camera
                  </h2>
                  <p className="mt-3 max-w-xl text-sm leading-6 text-white/80">
                    Nhập địa chỉ để kiểm tra hạ tầng và nhận tư vấn đúng loại Camera, Cloud và chi
                    phí dự kiến.
                  </p>
                  <a
                    href={siteConfig.phone.href}
                    className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-full border border-white/50 px-5 font-black"
                  >
                    <PhoneCallIcon className="size-5" /> {siteConfig.phone.display}
                  </a>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {locationPages
                    .filter((market) => market.status !== 'draft')
                    .map((market) => (
                      <Button
                        key={market.id}
                        asChild
                        size="lg"
                        className="bg-white text-[#10263f] shadow-none hover:bg-white/90"
                      >
                        <Link href={`${market.path}?service=camera`}>
                          Camera {market.locationName}
                          <ArrowRightIcon />
                        </Link>
                      </Button>
                    ))}
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <SiteFooter />
      <FloatingContact />
    </>
  );
}

export { CameraServicePage };
