import {
  ArrowRightIcon,
  BriefcaseBusinessIcon,
  Building2Icon,
  CheckCircle2Icon,
  ChevronDownIcon,
  Globe2Icon,
  NetworkIcon,
  PhoneCallIcon,
  RouterIcon,
  ServerIcon,
  ShieldCheckIcon,
  StoreIcon,
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
import { businessInternetFaqItems } from '@/content/business-internet-service';
import { servicePages } from '@/content/services';
import { ServicePageJsonLd } from '@/lib/structured-data';

import { BusinessPricingSection } from './business-pricing-section';

const businessContent = servicePages.business;

const businessNeeds = [
  {
    icon: StoreIcon,
    title: 'Cửa hàng, văn phòng nhỏ',
    description: 'Vận hành bán hàng, hóa đơn, camera và các thiết bị làm việc hằng ngày.',
    recommendation: 'Bắt đầu với Pro1; kiểm tra thêm vùng phủ và số thiết bị.',
  },
  {
    icon: UsersIcon,
    title: 'Đội ngũ nhiều người dùng',
    description: 'Nhiều cuộc họp, tải dữ liệu và truy cập dịch vụ cloud diễn ra đồng thời.',
    recommendation: 'Cân nhắc Pro2 hoặc MeshPro2 theo mặt bằng văn phòng.',
  },
  {
    icon: Building2Icon,
    title: 'Văn phòng nhiều phòng, nhiều tầng',
    description: 'Có khu vực xa modem hoặc cần mở rộng vùng phủ Wi-Fi cho nhân sự.',
    recommendation: 'Khảo sát MeshPro1–2 và vị trí đặt từng điểm phát.',
  },
] as const;

const advancedSolutions = [
  {
    icon: ServerIcon,
    title: 'Internet IP tĩnh',
    description:
      'Dành cho máy chủ, VPN, camera hoặc hệ thống cần địa chỉ truy cập ổn định từ bên ngoài.',
    details: 'Xác nhận số IP, băng thông trong nước và quốc tế trước khi báo giá.',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Kênh truyền riêng',
    description:
      'Phương án kết nối có yêu cầu rõ về chất lượng, độ sẵn sàng và băng thông cho hệ thống quan trọng.',
    details: 'Thiết kế theo điểm kết nối, ứng dụng và mức cam kết dịch vụ.',
  },
  {
    icon: NetworkIcon,
    title: 'Kết nối nhiều chi nhánh',
    description: 'Tư vấn mạng kết nối trụ sở, kho và điểm bán để hỗ trợ vận hành tập trung.',
    details: 'Cần danh sách điểm, lưu lượng và hệ thống sử dụng giữa các chi nhánh.',
  },
] as const;

const processItems = [
  ['01', 'Tiếp nhận nhu cầu', 'Số người dùng, thiết bị, ứng dụng, mặt bằng và địa chỉ lắp đặt.'],
  ['02', 'Khảo sát hạ tầng', 'Kiểm tra khả năng cung cấp, vùng phủ Wi-Fi và yêu cầu kỹ thuật.'],
  ['03', 'Đề xuất & báo giá', 'Làm rõ gói, IP, thiết bị, phí, hợp đồng và lịch triển khai.'],
  [
    '04',
    'Triển khai & bàn giao',
    'Cấu hình, đo kiểm đường truyền và nghiệm thu cùng doanh nghiệp.',
  ],
] as const;

function BusinessInternetPage() {
  return (
    <>
      <ServicePageJsonLd content={businessContent} />
      <SiteHeader />
      <main id="main-content" className="flex-1 overflow-x-clip" tabIndex={-1}>
        <section
          id="top"
          className="overflow-hidden bg-[radial-gradient(circle_at_82%_22%,rgba(230,0,18,.18),transparent_30%),linear-gradient(125deg,#f6faff_0%,#fff_52%,#fff1f3_100%)]"
        >
          <Container className="grid min-h-[590px] items-center gap-10 py-12 lg:grid-cols-[0.92fr_1.08fr] lg:py-16">
            <div className="relative z-20 max-w-xl">
              <p className="text-primary text-[0.6875rem] font-black tracking-[0.15em] uppercase">
                Internet Viettel doanh nghiệp
              </p>
              <h1 className="mt-4 text-4xl leading-[1.08] font-black tracking-[-0.035em] text-[#10263f] sm:text-5xl lg:text-[3.5rem]">
                Kết nối ổn định cho <span className="text-primary">vận hành liên tục</span>
              </h1>
              <p className="text-muted-foreground mt-4 max-w-lg text-base leading-7 sm:text-lg">
                FTTH tốc độ tới 1 Gbps, băng thông quốc tế cam kết và lựa chọn Wi-Fi Mesh cho văn
                phòng nhiều phòng, nhiều tầng.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  'Tốc độ tối thiểu từ 400 Mbps',
                  'Băng thông quốc tế cam kết',
                  'Modem Wi-Fi 6 theo gói',
                  'Tư vấn IP tĩnh và mạng nhiều điểm',
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
                <span className="text-sm font-bold text-slate-600">Cước tham khảo từ</span>
                <strong className="text-primary text-4xl font-black tracking-tight">
                  350.000đ
                </strong>
                <span className="text-muted-foreground text-xs">/tháng</span>
              </div>

              <div className="mt-7 flex flex-col gap-3 min-[430px]:flex-row">
                <Button asChild size="lg">
                  <a href="#goi-cuoc">
                    Xem gói doanh nghiệp <ArrowRightIcon />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="#khu-vuc">Nhận tư vấn kỹ thuật</a>
                </Button>
              </div>
              <p className="text-muted-foreground mt-5 text-xs leading-5">
                Gửi yêu cầu không làm phát sinh hợp đồng hoặc chi phí.
              </p>
            </div>

            <div className="relative mx-auto aspect-[16/11] w-full max-w-3xl">
              <div className="absolute inset-[8%] rounded-full bg-red-100/80 blur-3xl" />
              <Image
                src="/images/router-hero-v2.webp"
                alt="Thiết bị Wi-Fi 6 cho kết nối Internet doanh nghiệp"
                fill
                preload
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="relative z-10 rounded-[2rem] object-contain drop-shadow-[0_28px_45px_rgb(20_34_55/18%)]"
              />
              <div className="absolute right-4 bottom-4 left-4 z-20 grid grid-cols-2 gap-3 rounded-2xl border border-white/80 bg-white/90 p-3 shadow-xl backdrop-blur sm:left-auto sm:w-80">
                <div>
                  <p className="text-primary text-lg font-black">Tới 1 Gbps</p>
                  <p className="text-muted-foreground text-[0.625rem]">Tốc độ trong nước</p>
                </div>
                <div className="border-l border-slate-200 pl-3">
                  <p className="text-lg font-black text-[#10263f]">2–5 Mbps</p>
                  <p className="text-muted-foreground text-[0.625rem]">Quốc tế theo gói</p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <MobileSectionNav
          items={[
            { href: '#goi-cuoc', label: 'Gói cước' },
            { href: '#nhu-cau', label: 'Cách chọn' },
            { href: '#giai-phap', label: 'Giải pháp' },
            { href: '#faq', label: 'Hỏi đáp' },
            { href: '#khu-vuc', label: 'Tư vấn' },
          ]}
        />

        <section className="relative z-20 -mt-3 pb-4 sm:-mt-8">
          <Container className="max-w-6xl">
            <div className="-mx-4 flex snap-x snap-mandatory [scrollbar-width:none] overflow-x-auto rounded-2xl border border-slate-200 bg-white px-4 shadow-[0_20px_55px_rgb(20_34_55/10%)] sm:mx-0 sm:grid sm:grid-cols-2 sm:px-0 lg:grid-cols-4 [&::-webkit-scrollbar]:hidden">
              {[
                [BriefcaseBusinessIcon, 'Cho doanh nghiệp', 'Gói theo mô hình vận hành'],
                [RouterIcon, 'Wi-Fi 6', 'Thiết bị theo chính sách'],
                [WifiIcon, 'Wi-Fi Mesh', 'Mở rộng vùng phủ'],
                [Globe2Icon, 'Kết nối quốc tế', 'Băng thông cam kết theo gói'],
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

        <section id="nhu-cau" className="scroll-mt-24 py-16 sm:py-20">
          <Container className="max-w-6xl">
            <div className="text-center">
              <p className="text-primary text-[0.6875rem] font-black tracking-[0.14em] uppercase">
                Chọn theo quy mô vận hành
              </p>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-[#10263f] sm:text-4xl">
                Gói phù hợp bắt đầu từ người dùng và mặt bằng
              </h2>
              <p className="text-muted-foreground mx-auto mt-3 max-w-2xl text-sm leading-6">
                Cần xét đồng thời số thiết bị, ứng dụng cloud, vùng phủ và nhu cầu truy cập quốc tế.
              </p>
            </div>
            <div className="-mx-4 mt-9 flex snap-x snap-mandatory [scrollbar-width:none] gap-4 overflow-x-auto px-4 pb-4 lg:mx-0 lg:grid lg:grid-cols-3 lg:overflow-visible lg:px-0 [&::-webkit-scrollbar]:hidden">
              {businessNeeds.map(({ icon: Icon, title, description, recommendation }) => (
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

        <BusinessPricingSection />

        <section id="giai-phap" className="scroll-mt-24 py-16 sm:py-20">
          <Container className="max-w-6xl">
            <div className="text-center">
              <p className="text-primary text-[0.6875rem] font-black tracking-[0.14em] uppercase">
                Nhu cầu chuyên biệt
              </p>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-[#10263f] sm:text-4xl">
                Tư vấn cấu hình thay vì chọn gói đại trà
              </h2>
            </div>
            <div className="-mx-4 mt-9 flex snap-x snap-mandatory [scrollbar-width:none] gap-4 overflow-x-auto px-4 pb-4 lg:mx-0 lg:grid lg:grid-cols-3 lg:overflow-visible lg:px-0 [&::-webkit-scrollbar]:hidden">
              {advancedSolutions.map(({ icon: Icon, title, description, details }) => (
                <article
                  key={title}
                  className="min-w-[82vw] snap-center rounded-3xl border border-slate-200 bg-[linear-gradient(145deg,#fff,#f8faff)] p-6 shadow-[0_16px_45px_rgb(20_34_55/7%)] sm:p-7 lg:min-w-0"
                >
                  <span className="text-primary grid size-12 place-items-center rounded-xl bg-red-50">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-xl font-black text-[#10263f]">{title}</h3>
                  <p className="text-muted-foreground mt-3 text-sm leading-6">{description}</p>
                  <p className="mt-5 border-t border-slate-200 pt-5 text-sm leading-6 font-semibold">
                    {details}
                  </p>
                  <Button asChild variant="outline" className="mt-6 w-full">
                    <a href="#khu-vuc">Trao đổi nhu cầu</a>
                  </Button>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section id="quy-trinh" className="scroll-mt-24 bg-[#f7f9fc] py-16 sm:py-20">
          <Container className="max-w-6xl">
            <div className="text-center">
              <p className="text-primary text-[0.6875rem] font-black tracking-[0.14em] uppercase">
                Quy trình triển khai
              </p>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-[#10263f]">
                Bốn bước từ nhu cầu đến nghiệm thu
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
                  <p className="text-muted-foreground mx-auto mt-2 max-w-56 text-xs leading-5">
                    {description}
                  </p>
                </li>
              ))}
            </ol>
          </Container>
        </section>

        <section id="faq" className="scroll-mt-24 py-16 sm:py-20">
          <Container className="max-w-4xl">
            <div className="text-center">
              <p className="text-primary text-[0.6875rem] font-black tracking-[0.14em] uppercase">
                Câu hỏi thường gặp
              </p>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-[#10263f]">
                Thông tin cần biết trước khi triển khai
              </h2>
            </div>
            <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              {businessInternetFaqItems.map((item) => (
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

        <section id="khu-vuc" className="scroll-mt-24 pb-16">
          <Container className="max-w-6xl">
            <div className="relative overflow-hidden rounded-[2rem] bg-[linear-gradient(120deg,#df0012,#ff2338)] p-7 text-white shadow-[0_25px_65px_rgb(230_0_18/22%)] sm:p-10">
              <div className="absolute -right-20 -bottom-32 size-80 rounded-full border border-white/15" />
              <div className="relative grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <p className="text-[0.6875rem] font-black tracking-[0.14em] uppercase">
                    Tư vấn theo địa chỉ
                  </p>
                  <h2 className="mt-2 text-3xl font-black tracking-tight">
                    Kiểm tra Internet cho doanh nghiệp
                  </h2>
                  <p className="mt-3 max-w-xl text-sm leading-6 text-white/80">
                    Chọn địa phương để gửi nhu cầu, kiểm tra hạ tầng và nhận phương án phù hợp với
                    mặt bằng vận hành.
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
                        <Link href={`${market.path}?service=business`}>
                          Doanh nghiệp {market.locationName}
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

export { BusinessInternetPage };
