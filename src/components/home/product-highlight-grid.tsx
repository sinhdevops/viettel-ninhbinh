import { CheckIcon } from 'lucide-react';
import Image from 'next/image';

import { Container } from '@/components/layout/container';
import { IMAGE_PATHS } from '@/constants/images';
import { PlanSelectionButton } from '@/features/leads/plan-selection-button';

const highlights = [
  {
    title: 'Phủ sóng Wi-Fi Mesh',
    description: 'Bố trí điểm phát theo diện tích, số tầng và vật cản.',
    image: IMAGE_PATHS.meshProduct,
    alt: 'Hai thiết bị Wi-Fi Mesh minh họa',
    items: [
      'Thêm điểm phát tại khu vực sóng yếu',
      'Dùng chung một hệ thống Wi-Fi',
      'Xác nhận số thiết bị theo gói',
    ],
    service: 'internet' as const,
  },
  {
    title: 'Camera Viettel',
    description: 'Chọn thiết bị, vị trí quan sát và hình thức lưu trữ.',
    image: IMAGE_PATHS.cameraProduct,
    alt: 'Camera trong nhà minh họa',
    items: [
      'Trong nhà hoặc ngoài trời',
      'Xem lại theo gói lưu trữ',
      'Khảo sát vị trí trước khi lắp',
    ],
    service: 'camera' as const,
  },
] as const;

function ProductHighlightGrid() {
  return (
    <section className="py-12 sm:py-16">
      <Container className="grid gap-5 lg:grid-cols-2">
        {highlights.map((item) => (
          <article
            key={item.title}
            className="relative min-h-[20rem] overflow-hidden rounded-3xl border border-[#e9eef5] bg-[#f5f9ff] p-6 shadow-[0_14px_40px_rgb(25_44_72/7%)] sm:p-8"
          >
            <div className="relative z-10 max-w-full sm:max-w-[55%]">
              <h2 className="text-2xl font-black tracking-tight text-[#14233b]">{item.title}</h2>
              <p className="text-muted-foreground mt-2 text-sm leading-6">{item.description}</p>
              <ul className="mt-5 grid gap-2.5">
                {item.items.map((text) => (
                  <li
                    key={text}
                    className="flex items-start gap-2 text-xs font-semibold text-[#45536a]"
                  >
                    <CheckIcon
                      className="text-primary mt-0.5 size-3.5 shrink-0"
                      aria-hidden="true"
                    />
                    {text}
                  </li>
                ))}
              </ul>
              <PlanSelectionButton
                service={item.service}
                variant="outline"
                size="sm"
                className="mt-5"
              >
                Tìm hiểu thêm
              </PlanSelectionButton>
            </div>
            <Image
              src={item.image}
              alt={item.alt}
              fill
              sizes="(max-width: 1023px) 100vw, 50vw"
              className="object-cover object-[72%_center] opacity-35 sm:object-center sm:opacity-100"
            />
            <div className="pointer-events-none absolute inset-0 z-[1] bg-[#f5f9ff]/55 sm:bg-gradient-to-r sm:from-[#f5f9ff] sm:via-[#f5f9ff]/90 sm:to-transparent" />
          </article>
        ))}
      </Container>
    </section>
  );
}

export { ProductHighlightGrid };
