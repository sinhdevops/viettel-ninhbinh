export type ServiceValue = 'internet' | 'combo' | 'business';

export interface ServiceOption {
  value: ServiceValue;
  label: string;
}

export interface InternetPlan {
  id: string;
  name: string;
  speed: string;
  price: string;
  features: readonly string[];
  popular?: boolean;
}

export interface ComboPlan extends InternetPlan {
  service: 'combo';
}

export interface BusinessPlan {
  id: string;
  domesticSpeed: string;
  internationalSpeed: string;
  staticIp: string;
  price: string;
}

export const serviceOptions = [
  { value: 'internet', label: 'Internet cáp quang' },
  { value: 'combo', label: 'Internet + Truyền hình' },
  { value: 'business', label: 'Internet doanh nghiệp' },
] as const satisfies readonly ServiceOption[];

export const internetPlans = [
  {
    id: 'netvt1',
    name: 'NETVT1',
    speed: '300 Mbps',
    price: '195.000đ',
    features: ['1 modem Wi-Fi', 'Tốc độ 300 Mbps', 'Phù hợp cá nhân, gia đình'],
  },
  {
    id: 'netvt2',
    name: 'NETVT2',
    speed: 'Không giới hạn',
    price: '240.000đ',
    features: ['1 modem Wi-Fi', 'Băng thông không giới hạn', 'Tối ưu giải trí, làm việc'],
  },
  {
    id: 'meshvt1',
    name: 'MESHVT1',
    speed: '300 Mbps',
    price: '210.000đ',
    features: ['2 modem Wi-Fi', 'Tốc độ 300 Mbps', 'Phủ sóng nhà nhiều phòng'],
  },
  {
    id: 'meshvt2',
    name: 'MESHVT2',
    speed: 'Không giới hạn',
    price: '245.000đ',
    features: ['3 modem Wi-Fi*', 'Băng thông không giới hạn', 'Phủ sóng nhà nhiều tầng'],
    popular: true,
  },
  {
    id: 'meshvt3',
    name: 'MESHVT3',
    speed: 'Không giới hạn',
    price: '299.000đ',
    features: ['4 modem Wi-Fi*', 'Băng thông không giới hạn', 'Phủ sóng diện tích lớn'],
  },
] as const satisfies readonly InternetPlan[];

export const comboPlans = [
  {
    id: 'combo-netvt1',
    name: 'NETVT1',
    speed: '300 Mbps + TV360',
    price: '235.000đ',
    features: ['1 modem Wi-Fi', 'Truyền hình TV360', 'Kho phim, thể thao và giải trí'],
    service: 'combo',
  },
  {
    id: 'combo-netvt2',
    name: 'NETVT2',
    speed: 'Không giới hạn + TV360',
    price: '280.000đ',
    features: ['1 modem Wi-Fi', 'Truyền hình TV360', 'Kho phim, thể thao và giải trí'],
    service: 'combo',
  },
  {
    id: 'combo-meshvt1',
    name: 'MESHVT1',
    speed: '300 Mbps + TV360',
    price: '250.000đ',
    features: ['2 modem Wi-Fi', 'Truyền hình TV360', 'Kho phim, thể thao và giải trí'],
    service: 'combo',
  },
  {
    id: 'combo-meshvt2',
    name: 'MESHVT2',
    speed: 'Không giới hạn + TV360',
    price: '285.000đ',
    features: ['3 modem Wi-Fi*', 'Truyền hình TV360', 'Kho phim, thể thao và giải trí'],
    service: 'combo',
    popular: true,
  },
  {
    id: 'combo-meshvt3',
    name: 'MESHVT3',
    speed: 'Không giới hạn + TV360',
    price: '339.000đ',
    features: ['4 modem Wi-Fi*', 'Truyền hình TV360', 'Kho phim, thể thao và giải trí'],
    service: 'combo',
  },
] as const satisfies readonly ComboPlan[];

export const businessPlans = [
  {
    id: 'pro1',
    domesticSpeed: '400–1000 Mbps',
    internationalSpeed: '2 Mbps',
    staticIp: 'Không',
    price: '350.000đ',
  },
  {
    id: 'pro2',
    domesticSpeed: '500–1000 Mbps',
    internationalSpeed: '5 Mbps',
    staticIp: 'Không',
    price: '500.000đ',
  },
  {
    id: 'meshpro1',
    domesticSpeed: '400–1000 Mbps',
    internationalSpeed: '2 Mbps',
    staticIp: 'Không',
    price: '400.000đ',
  },
  {
    id: 'meshpro2',
    domesticSpeed: '500–1000 Mbps',
    internationalSpeed: '5 Mbps',
    staticIp: 'Không',
    price: '600.000đ',
  },
  {
    id: 'vip200',
    domesticSpeed: '200 Mbps',
    internationalSpeed: '5 Mbps',
    staticIp: '1 IP',
    price: '880.000đ',
  },
  {
    id: 'f200n',
    domesticSpeed: '300 Mbps',
    internationalSpeed: '4 Mbps',
    staticIp: '1 IP',
    price: '1.100.000đ',
  },
  {
    id: 'vip500',
    domesticSpeed: '500 Mbps',
    internationalSpeed: '10 Mbps',
    staticIp: '1 IP',
    price: '1.900.000đ',
  },
  {
    id: 'f200-plus',
    domesticSpeed: '300 Mbps',
    internationalSpeed: '12 Mbps',
    staticIp: '1 IP',
    price: '4.400.000đ',
  },
  {
    id: 'vip600',
    domesticSpeed: '600 Mbps',
    internationalSpeed: '30 Mbps',
    staticIp: '1 IP',
    price: '6.600.000đ',
  },
  {
    id: 'f500-plus',
    domesticSpeed: '500 Mbps',
    internationalSpeed: '25 Mbps',
    staticIp: '1 IP',
    price: '17.600.000đ',
  },
] as const satisfies readonly BusinessPlan[];

export const planOptions = [
  ...internetPlans.map((plan) => ({
    value: plan.id,
    label: `${plan.name} — ${plan.price}/tháng`,
    service: 'internet' as const,
  })),
  ...comboPlans.map((plan) => ({
    value: plan.id,
    label: `${plan.name} — ${plan.price}/tháng`,
    service: 'combo' as const,
  })),
  ...businessPlans.map((plan) => ({
    value: plan.id,
    label: `${plan.id.toUpperCase()} — ${plan.price}/tháng`,
    service: 'business' as const,
  })),
];

export function getFaqItems(locationName: string) {
  return [
    {
      question: 'Làm sao để đăng ký lắp đặt tại địa chỉ của tôi?',
      answer: `Điền địa chỉ và số điện thoại vào biểu mẫu. Nhân viên Viettel ${locationName} sẽ liên hệ xác nhận hạ tầng và tư vấn gói phù hợp.`,
    },
    {
      question: 'Thời gian lắp đặt mất bao lâu?',
      answer:
        'Thông thường từ 12–24 giờ sau khi hoàn tất đăng ký, tùy điều kiện hạ tầng và lịch hẹn của khách hàng.',
    },
    {
      question: 'Chi phí lắp đặt có mất phí không?',
      answer: 'Chi phí ban đầu = 300.000đ phí hòa mạng + (cước tháng × số tháng đăng ký).',
    },
    {
      question: 'Tôi có thể thay đổi gói cước sau khi đăng ký không?',
      answer:
        'Có. Bạn có thể nâng hoặc chuyển gói theo nhu cầu và chính sách áp dụng tại thời điểm yêu cầu.',
    },
    {
      question: 'Viettel có hỗ trợ kỹ thuật 24/7 không?',
      answer: 'Có. Tổng đài kỹ thuật 1800 8119 hỗ trợ miễn phí 24/7.',
    },
    {
      question: 'Có những hình thức thanh toán cước nào?',
      answer:
        'Bạn có thể thanh toán qua Viettel Money, ngân hàng, điểm giao dịch hoặc các kênh thanh toán trực tuyến.',
    },
  ] as const;
}
