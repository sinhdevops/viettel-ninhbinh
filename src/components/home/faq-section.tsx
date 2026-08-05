import { PlusIcon } from 'lucide-react';

import { Container } from '@/components/layout/container';
import { faqItems } from '@/data/home';

import { SectionHeading } from './section-heading';

function FaqSection() {
  return (
    <section id="faq" className="scroll-mt-24 py-16 sm:py-20">
      <Container className="max-w-5xl">
        <SectionHeading eyebrow="Giải đáp nhanh" title="Câu hỏi thường gặp" />

        <div className="mt-9 grid items-start gap-3 md:grid-cols-2 md:gap-x-5">
          {faqItems.map((item, index) => (
            <details
              key={item.question}
              className="group border-border bg-background overflow-hidden rounded-xl border"
            >
              <summary className="text-foreground hover:bg-secondary focus-visible:bg-secondary flex min-h-14 cursor-pointer list-none items-center gap-2.5 px-4 py-3.5 text-sm font-extrabold transition-colors outline-none [&::-webkit-details-marker]:hidden">
                <span className="text-primary">{index + 1}.</span>
                <span>{item.question}</span>
                <PlusIcon
                  className="text-primary ml-auto size-4 shrink-0 transition-transform group-open:rotate-45"
                  aria-hidden="true"
                />
              </summary>
              <p className="text-muted-foreground px-4 pb-4 pl-10 text-sm leading-6">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}

export { FaqSection };
