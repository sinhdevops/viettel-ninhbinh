import {
  ArrowRightIcon,
  CheckCircle2Icon,
  ChevronDownIcon,
  GaugeIcon,
  HouseIcon,
  NetworkIcon,
  PhoneCallIcon,
  RouterIcon,
  ShieldCheckIcon,
  SignalIcon,
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
import { internetFaqItems } from '@/content/internet-service';
import { servicePages } from '@/content/services';
import { consumerPricingReference } from '@/data/home';
import { ServicePageJsonLd } from '@/lib/structured-data';

import { InternetPricingSection } from './internet-pricing-section';

const internetContent = servicePages.internet;

const needItems = [
  {
    icon: SmartphoneIcon,
    title: 'Căn hộ, nhà nhỏ',
    description: 'Nhu cầu học tập, làm việc, xem phim và sử dụng các thiết bị cá nhân.',
    recommendation: 'Bắt đầu với NETVT1; xác nhận lại theo số thiết bị và mặt bằng.',
  },
  {
    icon: UsersIcon,
    title: 'Gia đình nhiều người',
    description: 'Nhiều thiết bị truy cập đồng thời, thường xuyên xem video hoặc làm việc từ xa.',
    recommendation: 'Cân nhắc NETVT2 hoặc gói Mesh dựa trên vùng phủ.',
  },
  {
    icon: HouseIcon,
    title: 'Nhà nhiều tầng',
    description: 'Có phòng xa modem, tường dày hoặc khu vực thường xuyên bị yếu sóng.',
    recommendation: 'Khảo sát MESHVT1–3 theo số tầng và vị trí đặt điểm phát.',
  },
] as const;

const processItems = [
  ['01', 'Gửi địa chỉ', 'Chọn địa phương, phường/xã và để lại số điện thoại liên hệ.'],
  ['02', 'Kiểm tra hạ tầng', 'Xác nhận khả năng cung cấp và công nghệ khả dụng tại địa chỉ.'],
  ['03', 'Chốt gói & chi phí', 'Làm rõ tốc độ, thiết bị, phí và lịch dự kiến trước khi đồng ý.'],
  ['04', 'Lắp đặt & nghiệm thu', 'Kỹ thuật cấu hình, kiểm tra kết nối và bàn giao dịch vụ.'],
] as const;

function InternetServicePage() {
  return (
    <>
      <ServicePageJsonLd content={internetContent} />
      <SiteHeader />
      <main id="main-content" className="flex-1 overflow-x-clip" tabIndex={-1}>
        <section
          id="top"
          className="overflow-hidden bg-[radial-gradient(circle_at_82%_22%,rgba(230,0,18,.16),transparent_28%),linear-gradient(125deg,#f7fbff_0%,#fff_54%,#fff2f4_100%)]"
        >
          <Container className="grid min-h-[570px] items-center gap-9 py-12 lg:grid-cols-[0.9fr_1.1fr] lg:py-16">
            <div className="relative z-20 max-w-xl">
              <p className="text-primary text-[0.6875rem] font-black tracking-[0.15em] uppercase">
                Internet cáp quang Viettel
              </p>
              <h1 className="mt-4 text-4xl leading-[1.08] font-black tracking-[-0.035em] text-[#10263f] sm:text-5xl lg:text-[3.5rem]">
                Kết nối tốc độ cao, <span className="text-primary">phủ sóng đúng nhu cầu</span>
              </h1>
              <p className="text-muted-foreground mt-4 max-w-lg text-base leading-7 sm:text-lg">
                Internet từ 300 Mbps, modem Wi‑Fi 6 và lựa chọn Mesh cho nhà nhiều phòng, nhiều
                tầng.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  'Gói Internet từ 300 Mbps',
                  'Trang bị modem Wi‑Fi 6 theo gói',
                  'Có phương án Wi‑Fi Mesh',
                  'Kiểm tra hạ tầng theo địa chỉ',
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

              <div className="mt-7 flex flex-wrap items-baseline gap-x-2">
                <span className="text-sm font-bold text-slate-600">Giá tham khảo từ</span>
                <strong className="text-primary text-4xl font-black tracking-tight">
                  195.000đ
                </strong>
                <span className="text-muted-foreground text-xs">/tháng</span>
              </div>
              <p className="text-muted-foreground mt-1 text-[0.6875rem] leading-5">
                {consumerPricingReference.scope}; cập nhật {consumerPricingReference.updatedAt}.
              </p>

              <div className="mt-7 flex flex-col gap-3 min-[430px]:flex-row">
                <Button asChild size="lg">
                  <a href="#goi-cuoc">
                    Xem gói Internet <ArrowRightIcon />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="#khu-vuc">Kiểm tra tại địa chỉ</a>
                </Button>
              </div>
              <p className="text-muted-foreground mt-5 text-xs leading-5">
                Gửi yêu cầu không làm phát sinh hợp đồng hoặc chi phí.
              </p>
            </div>

            <div className="relative mx-auto aspect-[16/10] w-full max-w-3xl overflow-hidden rounded-3xl bg-white/40 sm:aspect-[16/11] sm:overflow-visible sm:bg-transparent">
              <div className="absolute inset-[8%] rounded-full bg-red-100/70 blur-3xl" />
              <Image
                src="/images/router-hero-v2.webp"
                alt="Router Wi-Fi 6 minh họa cho dịch vụ Internet Viettel"
                fill
                preload
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="relative z-10 object-contain drop-shadow-[0_28px_45px_rgb(20_34_55/18%)] sm:rounded-[2rem]"
              />
              <div className="absolute right-3 bottom-3 left-3 z-20 flex items-center gap-3 rounded-2xl border border-white/80 bg-white/95 p-3 shadow-xl backdrop-blur sm:right-4 sm:bottom-4 sm:left-auto sm:w-80">
                <span className="text-primary grid size-10 shrink-0 place-items-center rounded-xl bg-red-50">
                  <RouterIcon className="size-5" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-black text-[#10263f]">Internet cho gia đình</p>
                  <p className="text-muted-foreground mt-0.5 text-[0.6875rem] leading-4">
                    Từ 300 Mbps · Modem Wi‑Fi 6 theo gói
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <MobileSectionNav
          items={[
            { href: '#goi-cuoc', label: 'Gói cước' },
            { href: '#nhu-cau', label: 'Cách chọn' },
            { href: '#faq', label: 'Hỏi đáp' },
            { href: '#khu-vuc', label: 'Đăng ký' },
          ]}
        />

        <section className="relative z-20 py-5 sm:-mt-8 sm:pt-0 sm:pb-4">
          <Container className="max-w-6xl">
            <div className="mb-3 sm:hidden">
              <h2 className="text-lg font-black tracking-tight text-[#10263f]">
                Những điểm chính của dịch vụ
              </h2>
              <p className="text-muted-foreground mt-1 text-xs leading-5">
                Xem nhanh trước khi so sánh từng gói cước.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2 rounded-2xl bg-[#f5f7fa] p-2 shadow-[0_14px_40px_rgb(20_34_55/7%)] sm:grid-cols-2 sm:gap-0 sm:border sm:border-slate-200 sm:bg-white sm:p-0 lg:grid-cols-4">
              {[
                [GaugeIcon, 'Từ 300 Mbps', 'Tốc độ tùy theo gói'],
                [RouterIcon, 'Modem Wi‑Fi 6', 'Thiết bị theo chính sách'],
                [SignalIcon, 'Có gói Wi‑Fi Mesh', 'Phù hợp nhà nhiều phòng'],
                [ShieldCheckIcon, 'Hỗ trợ kỹ thuật', 'Tổng đài 1800 8119'],
              ].map(([Icon, title, description]) => (
                <div
                  key={title as string}
                  className="rounded-xl border border-slate-200 bg-white p-3 sm:flex sm:items-center sm:gap-4 sm:rounded-none sm:border-0 sm:border-r sm:p-5 sm:last:border-r-0"
                >
                  <span className="text-primary grid size-9 shrink-0 place-items-center rounded-xl bg-red-50 sm:size-11">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <div className="mt-3 min-w-0 sm:mt-0">
                    <p className="text-xs leading-4 font-black text-[#10263f] sm:text-sm">
                      {title as string}
                    </p>
                    <p className="text-muted-foreground mt-1 text-[0.6875rem] leading-4 sm:text-xs">
                      {description as string}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section id="nhu-cau" className="scroll-mt-24 py-16 sm:py-20">
          <Container className="max-w-6xl">
            <div className="text-center">
              <p className="text-primary text-[0.6875rem] font-black tracking-[0.14em] uppercase">
                Chọn theo không gian sống
              </p>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-[#10263f] sm:text-4xl">
                Gói phù hợp bắt đầu từ mặt bằng và số thiết bị
              </h2>
              <p className="text-muted-foreground mx-auto mt-3 max-w-2xl text-sm leading-6">
                Không chỉ nhìn vào tốc độ: vùng phủ, tường, số tầng và vị trí đặt modem đều ảnh
                hưởng trải nghiệm Wi‑Fi.
              </p>
            </div>
            <div className="-mx-4 mt-9 flex snap-x snap-mandatory [scrollbar-width:none] gap-4 overflow-x-auto px-4 pb-4 lg:mx-0 lg:grid lg:grid-cols-3 lg:overflow-visible lg:px-0 [&::-webkit-scrollbar]:hidden">
              {needItems.map(({ icon: Icon, title, description, recommendation }) => (
                <article
                  key={title}
                  className="min-w-[82vw] snap-center rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_16px_45px_rgb(20_34_55/7%)] lg:min-w-0"
                >
                  <span className="text-primary grid size-12 place-items-center rounded-xl bg-red-50">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-xl font-black text-[#10263f]">{title}</h3>
                  <p className="text-muted-foreground mt-3 text-sm leading-6">{description}</p>
                  <div className="mt-5 border-t border-slate-100 pt-5">
                    <p className="text-[0.625rem] font-black tracking-[0.12em] text-slate-500 uppercase">
                      Gợi ý bắt đầu
                    </p>
                    <p className="mt-2 text-sm leading-6 font-semibold">{recommendation}</p>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-[#fbfcfe] py-16 sm:py-20">
          <Container className="max-w-6xl">
            <div className="text-center">
              <p className="text-primary text-[0.6875rem] font-black tracking-[0.14em] uppercase">
                Thiết bị phát Wi‑Fi
              </p>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-[#10263f] sm:text-4xl">
                Wi‑Fi 6 và Mesh giải quyết hai bài toán khác nhau
              </h2>
            </div>
            <div className="mt-9 grid gap-5 lg:grid-cols-2">
              <article className="grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_16px_45px_rgb(20_34_55/7%)] sm:grid-cols-[0.9fr_1.1fr]">
                <div className="relative min-h-64 bg-[linear-gradient(145deg,#fff,#f2f6fb)]">
                  <Image
                    src="/images/router-hero-v2.webp"
                    alt="Router Wi-Fi 6"
                    fill
                    sizes="(max-width: 1024px) 100vw, 24vw"
                    className="object-contain p-5"
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <RouterIcon className="text-primary size-8" />
                  <h3 className="mt-4 text-2xl font-black text-[#10263f]">Modem Wi‑Fi 6</h3>
                  <p className="text-muted-foreground mt-3 text-sm leading-6">
                    Thiết bị phát chính cho đường truyền, phù hợp khi một vị trí có thể phủ tốt
                    không gian sử dụng.
                  </p>
                  <ul className="mt-5 grid gap-3 text-sm font-semibold">
                    <li className="flex gap-2">
                      <CheckCircle2Icon className="text-primary size-4 shrink-0" />
                      Kết nối nhiều thiết bị theo điều kiện thực tế
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2Icon className="text-primary size-4 shrink-0" />
                      Dùng cho các gói NETVT và làm điểm phát chính của gói Mesh
                    </li>
                  </ul>
                </div>
              </article>
              <article className="grid overflow-hidden rounded-3xl border border-red-100 bg-white shadow-[0_16px_45px_rgb(230_0_18/8%)] sm:grid-cols-[0.9fr_1.1fr]">
                <div className="relative min-h-64 bg-[linear-gradient(145deg,#fff,#fff2f4)]">
                  <Image
                    src="/images/mesh-product-v2.webp"
                    alt="Thiết bị Wi-Fi Mesh"
                    fill
                    sizes="(max-width: 1024px) 100vw, 24vw"
                    className="object-contain p-5"
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <NetworkIcon className="text-primary size-8" />
                  <h3 className="mt-4 text-2xl font-black text-[#10263f]">Thiết bị Wi‑Fi Mesh</h3>
                  <p className="text-muted-foreground mt-3 text-sm leading-6">
                    Bổ sung điểm phát cho khu vực xa modem; số lượng cần thiết phụ thuộc diện tích
                    và kết cấu nhà.
                  </p>
                  <ul className="mt-5 grid gap-3 text-sm font-semibold">
                    <li className="flex gap-2">
                      <CheckCircle2Icon className="text-primary size-4 shrink-0" />
                      Phù hợp nhà nhiều phòng hoặc nhiều tầng
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2Icon className="text-primary size-4 shrink-0" />
                      Cần chọn vị trí đặt sau khi khảo sát vùng phủ
                    </li>
                  </ul>
                </div>
              </article>
            </div>
          </Container>
        </section>

        <InternetPricingSection />

        <section id="quy-trinh" className="scroll-mt-24 py-16 sm:py-20">
          <Container className="max-w-6xl">
            <div className="text-center">
              <p className="text-primary text-[0.6875rem] font-black tracking-[0.14em] uppercase">
                Quy trình lắp đặt
              </p>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-[#10263f]">
                Bốn bước từ kiểm tra đến nghiệm thu
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
                Thông tin cần biết trước khi lắp Internet
              </h2>
            </div>
            <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              {internetFaqItems.map((item) => (
                <details
                  key={item.question}
                  className="group border-b border-slate-100 px-5 last:border-b-0 open:bg-red-50/20"
                >
                  <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-3 text-sm font-black text-[#10263f] outline-none focus-visible:ring-2 focus-visible:ring-red-500/30 [&::-webkit-details-marker]:hidden">
                    {item.question}
                    <ChevronDownIcon className="text-primary size-4 shrink-0 transition-transform group-open:rotate-180" />
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
                    Kiểm tra Internet Viettel tại địa chỉ
                  </h2>
                  <p className="mt-3 max-w-xl text-sm leading-6 text-white/80">
                    Chọn địa phương để gửi phường/xã, kiểm tra hạ tầng và nhận tư vấn gói Internet
                    hoặc Mesh phù hợp.
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
                        <Link href={`${market.path}?service=internet`}>
                          Internet {market.locationName}
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

export { InternetServicePage };
