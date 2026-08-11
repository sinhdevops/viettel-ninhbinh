import { ArrowRightIcon, CheckCircle2Icon, MapPinnedIcon } from 'lucide-react';
import Link from 'next/link';

import { Container, FloatingContact, SiteFooter, SiteHeader } from '@/components/layout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { locationPages } from '@/config/markets';
import type { ServicePageContent } from '@/content/services';
import { ServicePageJsonLd } from '@/lib/structured-data';

interface ServiceDetailPageProps {
  content: ServicePageContent;
}

function ServiceDetailPage({ content }: ServiceDetailPageProps) {
  return (
    <>
      <ServicePageJsonLd content={content} />
      <SiteHeader />
      <main id="main-content" className="flex-1" tabIndex={-1}>
        <section
          id="top"
          className="bg-[linear-gradient(135deg,#fff_0%,#f8faff_62%,#fff1f2_100%)] py-14 sm:py-20"
        >
          <Container className="text-center">
            <p className="text-primary text-xs font-black tracking-[0.14em] uppercase">
              {content.eyebrow}
            </p>
            <h1 className="text-foreground mx-auto mt-3 max-w-4xl text-4xl leading-tight font-black tracking-tight sm:text-5xl">
              {content.title}
            </h1>
            <p className="text-muted-foreground mx-auto mt-5 max-w-2xl text-base leading-7">
              {content.description}
            </p>
            <div className="mt-7 flex flex-col justify-center gap-3 min-[420px]:flex-row">
              <Button asChild size="lg">
                <a href="#locations">
                  Chọn khu vực
                  <ArrowRightIcon />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/">Về trang chủ</Link>
              </Button>
            </div>
          </Container>
        </section>

        <section className="py-14 sm:py-16">
          <Container>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {content.highlights.map((item) => (
                <div
                  key={item}
                  className="border-border flex items-center gap-3 rounded-xl border p-4 text-sm font-bold"
                >
                  <CheckCircle2Icon className="text-primary size-4 shrink-0" aria-hidden="true" />
                  {item}
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-secondary/55 py-16 sm:py-20">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-primary text-xs font-black tracking-[0.14em] uppercase">
                Nhu cầu sử dụng
              </p>
              <h2 className="mt-2 text-3xl font-black tracking-tight">
                Chọn phương án theo tình huống thực tế
              </h2>
            </div>
            <div className="mt-9 grid gap-4 md:grid-cols-3">
              {content.useCases.map((useCase) => (
                <Card key={useCase.title} className="gap-2 rounded-2xl p-6 shadow-none">
                  <h3 className="font-black">{useCase.title}</h3>
                  <p className="text-muted-foreground text-sm leading-6">{useCase.description}</p>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        <section id="locations" className="scroll-mt-20 py-16 sm:py-20">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <MapPinnedIcon className="text-primary mx-auto size-8" aria-hidden="true" />
              <h2 className="mt-3 text-3xl font-black tracking-tight">Chọn khu vực cần lắp đặt</h2>
              <p className="text-muted-foreground mt-3 text-sm leading-6">
                Landing địa phương sẽ hiển thị đúng khu vực và form kiểm tra hạ tầng.
              </p>
            </div>
            <div className="mx-auto mt-8 grid max-w-3xl gap-4 sm:grid-cols-2">
              {locationPages
                .filter((market) => market.status !== 'draft')
                .map((market) => (
                  <Button key={market.id} asChild variant="outline" size="lg">
                    <Link
                      href={`${market.path}?service=${content.id === 'television' ? 'combo' : content.id}`}
                    >
                      Viettel {market.locationName}
                      <ArrowRightIcon />
                    </Link>
                  </Button>
                ))}
            </div>
          </Container>
        </section>
      </main>
      <SiteFooter />
      <FloatingContact />
    </>
  );
}

export { ServiceDetailPage };
