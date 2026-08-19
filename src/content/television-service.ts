export const televisionPricingReference = {
  updatedAt: '05/05/2026',
  sourceUrl:
    'https://shop.viettel.vn/tin-tuc/chi-tiet/cap-nhat-chinh-sach-uu-dai-va-cap-nhat-gia-cuoc-goi-dang-cap-box-tv360/14559736',
  comboSourceUrl:
    'https://www.vietteltelecom.vn/tin-tuc/chi-tiet/lap-dat-wifi-tai-nghe-an-gia-cuoc-re-khuyen-mai-lon-tu-viettel-telecom/16749248',
} as const;

export const televisionPlans = [
  {
    name: 'Giải trí App',
    price: '20.000đ',
    description: 'Dùng ứng dụng TV360 trên Smart TV và thiết bị hỗ trợ.',
    features: ['Nội dung thuộc gói Giải trí', 'Đăng nhập nhiều thiết bị', 'Không kèm TV360 Box'],
    featured: false,
  },
  {
    name: 'Giải trí Box',
    price: '40.000đ',
    description: 'Phù hợp TV cần thiết bị TV360 Box để sử dụng dịch vụ.',
    features: [
      'Nội dung thuộc gói Giải trí',
      'TV360 Box cho TV đầu tiên theo điều kiện',
      'Điều khiển đi kèm',
    ],
    featured: true,
  },
  {
    name: 'Đẳng cấp App',
    price: '50.000đ',
    description: 'Mở rộng nội dung thể thao, phim và kênh theo quyền của gói.',
    features: [
      'Dùng trên ứng dụng TV360',
      'Nội dung Đẳng cấp',
      'Xem đồng thời theo chính sách gói',
    ],
    featured: false,
  },
  {
    name: 'Đẳng cấp Box',
    price: '80.000đ',
    description: 'Gói Đẳng cấp có TV360 Box cho đăng ký mới từ 05/05/2026.',
    features: [
      'Nội dung Đẳng cấp',
      'TV360 Box theo điều kiện cung cấp',
      'Áp dụng mức giá đăng ký mới',
    ],
    featured: false,
  },
] as const;

export const televisionComboPlans = [
  {
    name: 'NETVT1 + TV360 Box',
    speed: '300 Mbps',
    equipment: '01 modem Wi-Fi 6 + TV360 Box',
    price: '235.000đ',
    featured: false,
  },
  {
    name: 'MESHVT1 + TV360 Box',
    speed: '300 Mbps',
    equipment: '01 modem Wi-Fi 6 + 01 Mesh + TV360 Box',
    price: '250.000đ',
    featured: true,
  },
  {
    name: 'NETVT2 + TV360 Box',
    speed: 'Từ 500 Mbps đến 1 Gbps',
    equipment: '01 modem Wi-Fi 6 + TV360 Box',
    price: '280.000đ',
    featured: false,
  },
] as const;

export const televisionFaqItems = [
  {
    question: 'TV360 App và TV360 Box khác nhau thế nào?',
    answer:
      'Gói App phù hợp với Smart TV hoặc thiết bị đã hỗ trợ ứng dụng TV360. Gói Box có thêm thiết bị TV360 Box theo điều kiện cung cấp, phù hợp TV cần đầu thu để sử dụng thuận tiện hơn.',
  },
  {
    question: 'Có thể đăng ký Truyền hình khi đang dùng Internet Viettel không?',
    answer:
      'Có. Thuê bao Internet Viettel đang hoạt động có thể yêu cầu bổ sung dịch vụ Truyền hình. Gói, thiết bị và chi phí được xác nhận theo thuê bao và địa chỉ.',
  },
  {
    question: 'Một tài khoản TV360 xem được trên bao nhiêu thiết bị?',
    answer:
      'Số thiết bị đăng nhập và số thiết bị xem đồng thời phụ thuộc gói cụ thể. Nhân viên cần xác nhận quyền sử dụng hiện hành trước khi bạn đăng ký.',
  },
  {
    question: 'Nội dung thể thao và kênh quốc tế có trong mọi gói không?',
    answer:
      'Không. Quyền xem giải đấu, phim và kênh quốc tế thay đổi theo gói và bản quyền từng thời điểm. Website chỉ mô tả nhóm nội dung; danh sách cuối cùng cần kiểm tra trên TV360 trước khi đăng ký.',
  },
  {
    question: 'Gửi yêu cầu tư vấn có phát sinh hợp đồng không?',
    answer:
      'Không. Gửi yêu cầu chỉ để kiểm tra hạ tầng và nhận tư vấn. Hợp đồng, giá, thiết bị và lịch lắp đặt chỉ được xác lập sau khi bạn xem lại thông tin và đồng ý.',
  },
] as const;
