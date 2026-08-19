import { Clock3Icon, GaugeIcon, ShieldCheckIcon, WifiIcon } from 'lucide-react';

const benefits = [
  {
    icon: GaugeIcon,
    title: 'Nhiều lựa chọn tốc độ',
    description: 'Chọn theo nhu cầu thực tế',
  },
  {
    icon: WifiIcon,
    title: 'Kiểm tra theo địa chỉ',
    description: 'Xác nhận hạ tầng trước đăng ký',
  },
  {
    icon: Clock3Icon,
    title: 'Hỗ trợ thuê bao đang dùng',
    description: 'Tổng đài kỹ thuật Viettel 1800 8119',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Tư vấn minh bạch',
    description: 'Xác nhận phí và thiết bị',
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
