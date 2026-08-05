import { StarIcon } from 'lucide-react';

import { Container } from '@/components/layout/container';
import { Card } from '@/components/ui/card';

import { SectionHeading } from './section-heading';

const testimonials = [
  {
    initials: 'AN',
    name: 'Anh Minh',
    location: 'Hoa Lư, Ninh Bình',
    quote: 'Đường truyền ổn định, tốc độ nhanh, hỗ trợ kỹ thuật rất nhiệt tình.',
  },
  {
    initials: 'CH',
    name: 'Chị Hương',
    location: 'Tam Điệp, Ninh Bình',
    quote: 'Lắp đặt nhanh chóng, Wi-Fi mạnh khắp nhà, cả gia đình rất hài lòng.',
  },
  {
    initials: 'AT',
    name: 'Anh Tuấn',
    location: 'Nho Quan, Ninh Bình',
    quote: 'Gói cước hợp lý, nhiều ưu đãi, dịch vụ chăm sóc khách hàng tốt.',
  },
] as const;

function TestimonialsSection() {
  return (
    <section className="bg-secondary py-16 sm:py-20">
      <Container>
        <SectionHeading eyebrow="Trải nghiệm thực tế" title="Khách hàng nói gì về Viettel" />
        <div className="mt-9 grid gap-4 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="gap-5 rounded-2xl p-5 sm:p-6">
              <div className="flex gap-1 text-amber-400" aria-label="5 trên 5 sao">
                {Array.from({ length: 5 }, (_, index) => (
                  <StarIcon key={index} className="size-4 fill-current" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="text-foreground/70 min-h-16 text-sm leading-relaxed italic">
                “{testimonial.quote}”
              </blockquote>
              <div className="flex items-center gap-3">
                <span className="grid size-11 place-items-center rounded-full bg-[linear-gradient(135deg,#173252,#e60012)] text-xs font-black text-white">
                  {testimonial.initials}
                </span>
                <div>
                  <p className="text-foreground text-sm font-black">{testimonial.name}</p>
                  <p className="text-muted-foreground mt-0.5 text-xs">{testimonial.location}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

export { TestimonialsSection };
