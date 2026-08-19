import {
  ArrowRightIcon,
  CheckCircle2Icon,
  ChevronDownIcon,
  ClapperboardIcon,
  FilmIcon,
  Gamepad2Icon,
  LaptopIcon,
  MonitorPlayIcon,
  PhoneCallIcon,
  PlayCircleIcon,
  RadioTowerIcon,
  ShieldCheckIcon,
  SmartphoneIcon,
  SparklesIcon,
  TrophyIcon,
  TvIcon,
  UsersIcon,
  WifiIcon,
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
import { servicePages } from '@/content/services';
import { televisionFaqItems } from '@/content/television-service';
import { ServicePageJsonLd } from '@/lib/structured-data';

import { TelevisionPricingSection } from './television-pricing-section';

const televisionContent = servicePages.television;

const entertainmentItems = [
  {
    icon: RadioTowerIcon,
    title: 'Truyền hình trực tuyến',
    description: 'Theo dõi các kênh trong và ngoài nước theo quyền của gói đang dùng.',
  },
  {
    icon: TrophyIcon,
    title: 'Thể thao',
    description: 'Giải đấu và lịch phát phụ thuộc bản quyền nội dung tại từng thời điểm.',
  },
  {
    icon: FilmIcon,
    title: 'Phim và chương trình',
    description: 'Kho nội dung được cập nhật theo chính sách của TV360 và từng gói.',
  },
  {
    icon: Gamepad2Icon,
    title: 'Nội dung gia đình',
    description: 'Lựa chọn chương trình phù hợp cho nhiều thành viên trong gia đình.',
  },
] as const;

const processItems = [
  ['01', 'Chọn nhu cầu', 'App, Box hoặc combo Internet + Truyền hình.'],
  ['02', 'Kiểm tra thiết bị', 'Xác định Smart TV, TV thường và đường truyền đang dùng.'],
  ['03', 'Xác nhận gói', 'Làm rõ nội dung, thiết bị, giá và điều kiện trước khi đồng ý.'],
  ['04', 'Cài đặt & sử dụng', 'Kích hoạt ứng dụng hoặc lắp TV360 Box và hướng dẫn sử dụng.'],
] as const;

function TelevisionServicePage() {
  return (
    <>
      <ServicePageJsonLd content={televisionContent} />
      <SiteHeader />
      <main id="main-content" className="flex-1 overflow-x-clip" tabIndex={-1}>
        <section
          id="top"
          className="overflow-hidden bg-[radial-gradient(circle_at_82%_22%,rgba(230,0,18,.2),transparent_26%),linear-gradient(125deg,#071426_0%,#102641_55%,#172f4f_100%)] text-white"
        >
          <Container className="grid min-h-[570px] items-center gap-9 py-12 lg:grid-cols-[0.9fr_1.1fr] lg:py-16">
            <div className="relative z-20 max-w-xl">
              <p className="text-[0.6875rem] font-black tracking-[0.15em] text-red-400 uppercase">
                Truyền hình TV360
              </p>
              <h1 className="mt-4 text-4xl leading-[1.08] font-black tracking-[-0.035em] sm:text-5xl lg:text-[3.5rem]">
                Giải trí trọn vẹn trên <span className="text-red-400">mọi màn hình</span>
              </h1>
              <p className="mt-4 max-w-lg text-base leading-7 text-white/70 sm:text-lg">
                Xem truyền hình, thể thao, phim và chương trình giải trí trên TV, điện thoại, máy
                tính bảng hoặc máy tính.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  'Lựa chọn dùng App hoặc TV360 Box',
                  'Xem trên nhiều loại thiết bị',
                  'Có gói Truyền hình riêng',
                  'Có combo Internet + TV360',
                ].map((item) => (
                  <p key={item} className="flex items-center gap-2 text-xs font-bold text-white/85">
                    <CheckCircle2Icon className="size-4 shrink-0 text-red-400" aria-hidden="true" />
                    {item}
                  </p>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 min-[430px]:flex-row">
                <Button asChild size="lg">
                  <a href="#goi-cuoc">
                    Xem gói TV360 <ArrowRightIcon />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/60 bg-transparent text-white hover:bg-white hover:text-[#10263f]"
                >
                  <a href="#khu-vuc">Kiểm tra tại địa chỉ</a>
                </Button>
              </div>
              <p className="mt-5 text-xs leading-5 text-white/55">
                Nội dung và quyền xem được xác nhận theo gói tại thời điểm đăng ký.
              </p>
            </div>

            <div className="relative mx-auto aspect-[16/11] w-full max-w-3xl">
              <div className="absolute inset-[6%] rounded-full bg-red-500/15 blur-3xl" />
              <Image
                src="/images/tv360-entertainment.webp"
                alt="Truyền hình TV360 trên TV cùng thiết bị đầu thu và điều khiển"
                fill
                preload
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="relative z-10 rounded-[2rem] object-contain drop-shadow-[0_30px_50px_rgb(0_0_0/35%)]"
              />
              <div className="absolute right-4 bottom-4 left-4 z-20 flex items-center justify-between gap-3 rounded-2xl border border-white/15 bg-slate-950/75 p-3 backdrop-blur sm:left-auto sm:w-80">
                <div className="flex items-center gap-3">
                  <span className="bg-primary grid size-10 place-items-center rounded-full">
                    <PlayCircleIcon className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-black">TV360</p>
                    <p className="mt-0.5 text-[0.625rem] text-white/60">App · Smart TV · Box</p>
                  </div>
                </div>
                <SparklesIcon className="size-5 text-amber-300" aria-hidden="true" />
              </div>
            </div>
          </Container>
        </section>

        <MobileSectionNav
          items={[
            { href: '#goi-cuoc', label: 'Gói TV360' },
            { href: '#noi-dung', label: 'Nội dung' },
            { href: '#quy-trinh', label: 'Quy trình' },
            { href: '#faq', label: 'Hỏi đáp' },
            { href: '#khu-vuc', label: 'Đăng ký' },
          ]}
        />

        <section className="relative z-20 -mt-3 pb-4 sm:-mt-8">
          <Container className="max-w-6xl">
            <div className="-mx-4 flex snap-x snap-mandatory [scrollbar-width:none] overflow-x-auto rounded-2xl border border-slate-200 bg-white px-4 shadow-[0_20px_55px_rgb(20_34_55/10%)] sm:mx-0 sm:grid sm:grid-cols-2 sm:px-0 lg:grid-cols-4 [&::-webkit-scrollbar]:hidden">
              {[
                [TvIcon, 'TV360 App', 'Dùng trên thiết bị hỗ trợ'],
                [MonitorPlayIcon, 'TV360 Box', 'Phương án cho TV cần đầu thu'],
                [UsersIcon, 'Nhiều thành viên', 'Chọn quyền xem theo gói'],
                [ShieldCheckIcon, 'Hỗ trợ thuê bao', 'Kênh kỹ thuật chính thức'],
              ].map(([Icon, title, description]) => (
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
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section id="noi-dung" className="scroll-mt-24 py-16 sm:py-20">
          <Container className="max-w-6xl">
            <div className="text-center">
              <p className="text-primary text-[0.6875rem] font-black tracking-[0.14em] uppercase">
                Giải trí theo sở thích
              </p>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-[#10263f] sm:text-4xl">
                Một dịch vụ, nhiều lựa chọn nội dung
              </h2>
              <p className="text-muted-foreground mx-auto mt-3 max-w-2xl text-sm leading-6">
                Danh sách kênh, phim và giải đấu có thể thay đổi theo gói và bản quyền từng thời
                điểm.
              </p>
            </div>

            <div className="mt-9 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="relative min-h-[390px] overflow-hidden rounded-3xl bg-[#071426]">
                <Image
                  src="/images/tv360-entertainment.webp"
                  alt="Kho nội dung truyền hình và giải trí minh họa trên TV360"
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover object-center opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071426] via-transparent to-transparent" />
                <div className="absolute right-6 bottom-6 left-6 text-white">
                  <p className="text-xs font-black tracking-[0.12em] text-red-300 uppercase">
                    Kho nội dung TV360
                  </p>
                  <h3 className="mt-2 text-2xl font-black">
                    Chọn chương trình phù hợp cho cả gia đình
                  </h3>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {entertainmentItems.map(({ icon: Icon, title, description }) => (
                  <article
                    key={title}
                    className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                  >
                    <span className="grid size-11 shrink-0 place-items-center rounded-full bg-blue-50 text-blue-700">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-black text-[#10263f]">{title}</h3>
                      <p className="text-muted-foreground mt-2 text-sm leading-6">{description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-[#fbfcfe] py-16 sm:py-20">
          <Container className="max-w-5xl">
            <div className="text-center">
              <p className="text-primary text-[0.6875rem] font-black tracking-[0.14em] uppercase">
                Chọn hình thức xem
              </p>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-[#10263f] sm:text-4xl">
                TV360 App hay TV360 Box?
              </h2>
            </div>
            <div className="mt-9 grid gap-5 md:grid-cols-2">
              <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_16px_45px_rgb(20_34_55/7%)]">
                <SmartphoneIcon className="text-primary size-9" aria-hidden="true" />
                <h3 className="mt-5 text-2xl font-black text-[#10263f]">TV360 App</h3>
                <p className="text-muted-foreground mt-3 text-sm leading-6">
                  Phù hợp Smart TV, điện thoại, máy tính bảng hoặc thiết bị đã hỗ trợ ứng dụng.
                </p>
                <div className="mt-6 flex flex-wrap gap-3 text-xs font-bold text-slate-600">
                  <span className="flex items-center gap-1.5">
                    <TvIcon className="text-primary size-4" /> Smart TV
                  </span>
                  <span className="flex items-center gap-1.5">
                    <SmartphoneIcon className="text-primary size-4" /> Điện thoại
                  </span>
                  <span className="flex items-center gap-1.5">
                    <LaptopIcon className="text-primary size-4" /> Máy tính
                  </span>
                </div>
              </article>
              <article className="rounded-3xl border border-red-200 bg-white p-7 shadow-[0_16px_45px_rgb(230_0_18/8%)]">
                <MonitorPlayIcon className="text-primary size-9" aria-hidden="true" />
                <h3 className="mt-5 text-2xl font-black text-[#10263f]">TV360 Box</h3>
                <p className="text-muted-foreground mt-3 text-sm leading-6">
                  Phù hợp TV cần đầu thu riêng và trải nghiệm điều khiển trực tiếp trên màn hình TV.
                </p>
                <div className="mt-6 flex flex-wrap gap-3 text-xs font-bold text-slate-600">
                  <span className="flex items-center gap-1.5">
                    <ClapperboardIcon className="text-primary size-4" /> Đầu thu
                  </span>
                  <span className="flex items-center gap-1.5">
                    <TvIcon className="text-primary size-4" /> TV gia đình
                  </span>
                  <span className="flex items-center gap-1.5">
                    <WifiIcon className="text-primary size-4" /> Kết nối Internet
                  </span>
                </div>
              </article>
            </div>
          </Container>
        </section>

        <TelevisionPricingSection />

        <section id="quy-trinh" className="scroll-mt-24 py-16 sm:py-20">
          <Container className="max-w-6xl">
            <div className="text-center">
              <p className="text-primary text-[0.6875rem] font-black tracking-[0.14em] uppercase">
                Quy trình đăng ký
              </p>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-[#10263f]">
                Bốn bước để bắt đầu xem TV360
              </h2>
            </div>
            <ol className="-mx-4 mt-10 flex snap-x snap-mandatory [scrollbar-width:none] gap-4 overflow-x-auto px-4 pb-4 md:mx-0 md:grid md:grid-cols-4 md:overflow-visible md:px-0 [&::-webkit-scrollbar]:hidden">
              {processItems.map(([number, title, description], index) => (
                <li
                  key={number}
                  className="relative min-w-[76vw] snap-center rounded-2xl border border-slate-200 bg-white p-5 text-center md:min-w-0 md:border-0 md:bg-transparent md:p-0"
                >
                  {index < processItems.length - 1 && (
                    <span className="absolute top-8 left-[64%] hidden w-[72%] border-t-2 border-dotted border-slate-200 md:block" />
                  )}
                  <span className="bg-primary relative mx-auto grid size-16 place-items-center rounded-full text-lg font-black text-white shadow-[0_12px_30px_rgb(230_0_18/18%)]">
                    {number}
                  </span>
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
                Thông tin cần biết về TV360
              </h2>
            </div>
            <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              {televisionFaqItems.map((item) => (
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
                    Kiểm tra Truyền hình Viettel tại địa chỉ
                  </h2>
                  <p className="mt-3 max-w-xl text-sm leading-6 text-white/80">
                    Chọn địa phương để kiểm tra hạ tầng, thiết bị và gói TV360 phù hợp với TV đang
                    sử dụng.
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
                        <Link href={`${market.path}?service=combo`}>
                          TV360 {market.locationName}
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

export { TelevisionServicePage };
