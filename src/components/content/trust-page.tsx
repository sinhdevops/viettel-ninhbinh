import { ChevronRightIcon, PhoneIcon } from 'lucide-react';
import Link from 'next/link';

import { Container, FloatingContact, SiteFooter, SiteHeader } from '@/components/layout';
import { siteConfig } from '@/config/site';
import type { TrustPageContent } from '@/content/trust-pages';
import { TrustPageJsonLd } from '@/lib/structured-data';

function TrustPage({ content }: { content: TrustPageContent }) {
  return (
    <>
      <TrustPageJsonLd
        title={content.title}
        description={content.description}
        path={`/${content.slug}`}
      />
      <SiteHeader />
      <main id="main-content" className="flex-1" tabIndex={-1}>
        <header className="border-border bg-secondary/55 border-b py-10 sm:py-14">
          <Container>
            <nav
              aria-label="Đường dẫn"
              className="text-muted-foreground flex items-center gap-1.5 text-xs"
            >
              <Link href="/">Trang chủ</Link>
              <ChevronRightIcon className="size-3.5" aria-hidden="true" />
              <span>{content.title}</span>
            </nav>
            <p className="text-primary mt-7 text-xs font-black tracking-[0.14em] uppercase">
              {content.eyebrow}
            </p>
            <h1 className="mt-2 max-w-4xl text-3xl font-black tracking-tight sm:text-4xl">
              {content.title}
            </h1>
            <p className="text-muted-foreground mt-4 max-w-3xl leading-7">{content.description}</p>
            <p className="text-muted-foreground mt-3 text-xs">Cập nhật lần cuối: 12/08/2026</p>
          </Container>
        </header>
        <Container className="grid gap-8 py-10 lg:grid-cols-[15rem_minmax(0,1fr)] lg:py-14">
          <nav
            aria-label="Mục lục"
            className="border-border h-fit rounded-2xl border p-4 lg:sticky lg:top-24"
          >
            <p className="text-sm font-black">Nội dung trang</p>
            <ol className="mt-3 grid gap-1">
              {content.sections.map((section, index) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="text-muted-foreground hover:bg-accent hover:text-primary flex rounded-lg px-2.5 py-2 text-xs leading-5"
                  >
                    {index + 1}. {section.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
          <article className="space-y-5">
            {content.sections.map((section) => (
              <section
                id={section.id}
                key={section.id}
                className="border-border scroll-mt-24 rounded-2xl border p-5 sm:p-7"
              >
                <h2 className="text-xl font-black tracking-tight">{section.title}</h2>
                <div className="text-muted-foreground mt-3 space-y-3 text-sm leading-7">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.items && section.items.length > 0 && (
                    <ul className="space-y-1 pl-5">
                      {section.items.map((item) => (
                        <li key={item} className="list-disc">
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </section>
            ))}
            <div className="bg-accent border-primary/15 rounded-2xl border p-5 sm:flex sm:items-center sm:justify-between">
              <p className="font-black">Cần được giải thích thêm?</p>
              <a
                href={siteConfig.phone.href}
                className="bg-primary text-primary-foreground mt-3 inline-flex min-h-11 items-center gap-2 rounded-lg px-4 text-sm font-black sm:mt-0"
              >
                <PhoneIcon className="size-4" />
                {siteConfig.phone.display}
              </a>
            </div>
          </article>
        </Container>
      </main>
      <SiteFooter />
      <FloatingContact />
    </>
  );
}

export { TrustPage };
