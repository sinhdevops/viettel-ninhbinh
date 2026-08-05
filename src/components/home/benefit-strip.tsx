import { Clock3Icon, GaugeIcon, ShieldCheckIcon, WifiIcon } from 'lucide-react';

const benefits = [
  {
    icon: GaugeIcon,
    title: 'Mạng Viettel tốc độ cao',
    description: 'Hạ tầng hiện đại, phủ rộng',
  },
  {
    icon: WifiIcon,
    title: 'Ổn định mọi lúc mọi nơi',
    description: 'Cam kết chất lượng đường truyền',
  },
  {
    icon: Clock3Icon,
    title: 'Hỗ trợ 24/7',
    description: 'Kỹ thuật viên có mặt nhanh',
  },
  {
    icon: ShieldCheckIcon,
    title: 'An toàn & bảo mật',
    description: 'Bảo vệ thiết bị và dữ liệu',
  },
] as const;

function BenefitStrip() {
  return (
    <div className="border-border bg-border grid grid-cols-2 gap-px overflow-hidden rounded-2xl border shadow-[0_14px_40px_rgb(22_35_54/7%)] lg:grid-cols-4">
      {benefits.map(({ icon: Icon, title, description }) => (
        <div key={title} className="bg-card flex items-center gap-3 p-4 sm:p-5">
          <span className="bg-accent text-primary grid size-10 shrink-0 place-items-center rounded-xl">
            <Icon className="size-5" aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <p className="text-card-foreground text-xs font-extrabold sm:text-sm">{title}</p>
            <p className="text-muted-foreground mt-0.5 hidden text-xs leading-relaxed sm:block">
              {description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export { BenefitStrip };
