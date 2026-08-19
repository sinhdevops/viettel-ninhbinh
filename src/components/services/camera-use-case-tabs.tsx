'use client';

import { Building2Icon, CheckCircle2Icon, HouseIcon, StoreIcon } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

import { cn } from '@/lib/utils';

const useCases = [
  {
    id: 'home',
    label: 'Gia đình',
    icon: HouseIcon,
    title: 'Bảo vệ tổ ấm của bạn mỗi ngày',
    description: 'Theo dõi những khu vực quan trọng ngay cả khi bạn đang ở xa.',
    benefits: [
      'Quan sát người già, trẻ nhỏ khi ở nhà',
      'Theo dõi thú cưng khi bạn vắng nhà',
      'Nhận cảnh báo khi có chuyển động bất thường',
      'Xem lại tình huống theo chu kỳ Cloud đã chọn',
    ],
  },
  {
    id: 'store',
    label: 'Cửa hàng',
    icon: StoreIcon,
    title: 'Nắm tình hình cửa hàng từ xa',
    description: 'Bố trí góc quan sát phù hợp cho lối vào, quầy thu ngân và kho hàng.',
    benefits: [
      'Theo dõi hoạt động trong giờ mở cửa',
      'Xem lại tình huống cần đối soát',
      'Chia sẻ quyền xem cho người quản lý',
      'Chọn thời gian lưu trữ theo quy trình vận hành',
    ],
  },
  {
    id: 'office',
    label: 'Văn phòng',
    icon: Building2Icon,
    title: 'Quản lý nhiều khu vực rõ ràng hơn',
    description: 'Khảo sát số điểm lắp, kết nối và quyền truy cập trước khi triển khai.',
    benefits: [
      'Theo dõi lối ra vào và khu vực chung',
      'Phân quyền xem cho người phụ trách',
      'Cân đối số Camera theo mặt bằng thực tế',
      'Xác nhận nguồn điện và Wi-Fi tại từng vị trí',
    ],
  },
] as const;

function CameraUseCaseTabs() {
  const [activeId, setActiveId] = useState<(typeof useCases)[number]['id']>('home');
  const activeUseCase = useCases.find((item) => item.id === activeId) ?? useCases[0];

  return (
    <div className="mt-8">
      <div
        className="grid grid-cols-3 overflow-hidden rounded-2xl border border-slate-200 bg-white p-1 shadow-sm"
        role="tablist"
        aria-label="Chọn nhu cầu lắp Camera"
      >
        {useCases.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            type="button"
            role="tab"
            aria-selected={id === activeId}
            aria-controls="camera-use-case-panel"
            onClick={() => setActiveId(id)}
            className={cn(
              'flex min-h-12 items-center justify-center gap-2 rounded-xl px-2 text-xs font-black transition-colors outline-none focus-visible:ring-3 focus-visible:ring-red-500/20 sm:text-sm',
              id === activeId ? 'bg-primary text-white' : 'text-slate-600 hover:bg-slate-50'
            )}
          >
            <Icon className="size-4" aria-hidden="true" />
            {label}
          </button>
        ))}
      </div>

      <div
        id="camera-use-case-panel"
        role="tabpanel"
        className="mt-5 grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_18px_55px_rgb(20_34_55/8%)] lg:grid-cols-[1.05fr_0.95fr]"
      >
        <div className="relative min-h-64 lg:min-h-[340px]">
          <Image
            src="/images/camera-family-v1.webp"
            alt="Gia đình sử dụng giải pháp Camera để theo dõi ngôi nhà"
            fill
            sizes="(max-width: 1024px) 100vw, 52vw"
            className="object-cover"
          />
        </div>
        <div className="p-6 sm:p-8 lg:p-10">
          <p className="text-primary text-xs font-black tracking-[0.12em] uppercase">
            {activeUseCase.label}
          </p>
          <h3 className="mt-2 text-2xl font-black tracking-tight text-[#10263f] sm:text-3xl">
            {activeUseCase.title}
          </h3>
          <p className="text-muted-foreground mt-3 text-sm leading-6">
            {activeUseCase.description}
          </p>
          <ul className="mt-6 grid gap-3">
            {activeUseCase.benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-2.5 text-sm font-semibold">
                <CheckCircle2Icon
                  className="text-primary mt-0.5 size-4 shrink-0"
                  aria-hidden="true"
                />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export { CameraUseCaseTabs };
