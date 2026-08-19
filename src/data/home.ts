export type ServiceValue = 'internet' | 'combo' | 'camera' | 'business';

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
}

export interface ComboPlan extends InternetPlan {
  service: 'combo';
}

export const serviceOptions = [
  { value: 'internet', label: 'Internet cáp quang' },
  { value: 'combo', label: 'Internet + Truyền hình' },
  { value: 'camera', label: 'Camera Viettel' },
  { value: 'business', label: 'Internet doanh nghiệp' },
] as const satisfies readonly ServiceOption[];

export const consumerPricingReference = {
  updatedAt: '24/03/2026',
  scope: 'nhóm 32 tỉnh và ngoại thành Hà Nội, TP.HCM',
  sourceUrl:
    'https://www.vietteltelecom.vn/tin-tuc/chi-tiet/lap-dat-wifi-tai-nghe-an-gia-cuoc-re-khuyen-mai-lon-tu-viettel-telecom/16749248',
} as const;

export const internetPlans = [
  {
    id: 'netvt1',
    name: 'NETVT1',
    speed: '300 Mbps',
    price: '195.000đ',
    features: ['01 modem Wi-Fi 6', 'Tốc độ 300 Mbps', 'Phù hợp nhu cầu Internet cơ bản'],
  },
  {
    id: 'netvt2',
    name: 'NETVT2',
    speed: '500 Mbps–1 Gbps',
    price: '240.000đ',
    features: ['01 modem Wi-Fi 6', 'Từ 500 Mbps đến 1 Gbps', 'Xác nhận tốc độ theo hạ tầng'],
  },
  {
    id: 'meshvt1',
    name: 'MESHVT1',
    speed: '300 Mbps',
    price: '210.000đ',
    features: ['01 modem Wi-Fi 6 + 01 Mesh', 'Tốc độ 300 Mbps', 'Có thêm một điểm phát Wi-Fi'],
  },
  {
    id: 'meshvt2',
    name: 'MESHVT2',
    speed: '500 Mbps–1 Gbps',
    price: '245.000đ',
    features: [
      '01 modem Wi-Fi 6 + 02 Mesh',
      'Từ 500 Mbps đến 1 Gbps',
      'Có thêm hai điểm phát Wi-Fi',
    ],
  },
  {
    id: 'meshvt3',
    name: 'MESHVT3',
    speed: '500 Mbps–1 Gbps',
    price: '299.000đ',
    features: [
      '01 modem Wi-Fi 6 + 03 Mesh',
      'Từ 500 Mbps đến 1 Gbps',
      'Có thêm ba điểm phát Wi-Fi',
    ],
  },
] as const satisfies readonly InternetPlan[];

export const comboPlans = [
  {
    id: 'combo-netvt1',
    name: 'NETVT1 + TV360 Box',
    speed: '300 Mbps',
    price: '235.000đ',
    features: [
      '01 modem Wi-Fi 6',
      'Gói Giải trí TV360 Box',
      'Xác nhận nội dung tại thời điểm đăng ký',
    ],
    service: 'combo',
  },
  {
    id: 'combo-netvt2',
    name: 'NETVT2 + TV360 Box',
    speed: '500 Mbps–1 Gbps',
    price: '280.000đ',
    features: ['01 modem Wi-Fi 6', 'Gói Giải trí TV360 Box', 'Xác nhận tốc độ theo hạ tầng'],
    service: 'combo',
  },
  {
    id: 'combo-meshvt1',
    name: 'MESHVT1 + TV360 Box',
    speed: '300 Mbps',
    price: '250.000đ',
    features: [
      '01 modem Wi-Fi 6 + 01 Mesh',
      'Gói Giải trí TV360 Box',
      'Có thêm một điểm phát Wi-Fi',
    ],
    service: 'combo',
  },
  {
    id: 'combo-meshvt2',
    name: 'MESHVT2 + TV360 Box',
    speed: '500 Mbps–1 Gbps',
    price: '285.000đ',
    features: [
      '01 modem Wi-Fi 6 + 02 Mesh',
      'Gói Giải trí TV360 Box',
      'Có thêm hai điểm phát Wi-Fi',
    ],
    service: 'combo',
  },
  {
    id: 'combo-meshvt3',
    name: 'MESHVT3 + TV360 Box',
    speed: '500 Mbps–1 Gbps',
    price: '339.000đ',
    features: [
      '01 modem Wi-Fi 6 + 03 Mesh',
      'Gói Giải trí TV360 Box',
      'Có thêm ba điểm phát Wi-Fi',
    ],
    service: 'combo',
  },
] as const satisfies readonly ComboPlan[];

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
];
