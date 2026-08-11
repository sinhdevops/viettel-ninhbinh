export type ServicePageId = 'business' | 'camera' | 'internet' | 'television';

export interface ServicePageContent {
  id: ServicePageId;
  path: `/${string}`;
  eyebrow: string;
  title: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  highlights: readonly string[];
  useCases: readonly { title: string; description: string }[];
}

export const servicePages = {
  internet: {
    id: 'internet',
    path: '/internet-viettel',
    eyebrow: 'Internet cáp quang',
    title: 'Internet Viettel cho gia đình và cá nhân',
    description:
      'Tìm hiểu nhóm gói Internet, Wi-Fi Mesh và cách kiểm tra khả năng cung cấp tại địa chỉ cần lắp đặt.',
    seoTitle: 'Internet Viettel | Gói cáp quang & Wi-Fi Mesh',
    seoDescription:
      'Thông tin Internet cáp quang và Wi-Fi Mesh Viettel cho gia đình. Chọn khu vực để kiểm tra hạ tầng, thiết bị và gói phù hợp.',
    highlights: [
      'Internet cáp quang',
      'Wi-Fi Mesh',
      'Gói theo nhu cầu',
      'Kiểm tra hạ tầng theo địa chỉ',
    ],
    useCases: [
      {
        title: 'Căn hộ và nhà nhỏ',
        description: 'Chọn gói theo số người và thiết bị thường xuyên kết nối.',
      },
      {
        title: 'Nhà nhiều phòng',
        description: 'Cân nhắc Wi-Fi Mesh dựa trên diện tích và kết cấu thực tế.',
      },
      {
        title: 'Học tập và làm việc',
        description: 'Tư vấn tốc độ theo nhu cầu họp, tải dữ liệu và giải trí.',
      },
    ],
  },
  television: {
    id: 'television',
    path: '/truyen-hinh-viettel',
    eyebrow: 'Truyền hình TV360',
    title: 'Internet kết hợp truyền hình Viettel',
    description:
      'Khám phá nhóm combo Internet + TV360 và xác nhận nội dung, thiết bị, quyền lợi theo gói đăng ký.',
    seoTitle: 'Truyền hình Viettel TV360 | Combo Internet + TV',
    seoDescription:
      'Tìm hiểu truyền hình TV360 và combo Internet Viettel. Kiểm tra gói, thiết bị và khả năng cung cấp theo khu vực.',
    highlights: [
      'TV360',
      'Combo Internet + TV',
      'Nội dung giải trí',
      'Xác nhận quyền lợi theo gói',
    ],
    useCases: [
      {
        title: 'Gia đình',
        description: 'Kết hợp Internet và nội dung giải trí trên cùng nhu cầu đăng ký.',
      },
      { title: 'Smart TV', description: 'Tư vấn hình thức sử dụng phù hợp với thiết bị đang có.' },
      {
        title: 'Nhiều thành viên',
        description: 'Chọn gói dựa trên thói quen xem và số thiết bị kết nối.',
      },
    ],
  },
  camera: {
    id: 'camera',
    path: '/camera-viettel',
    eyebrow: 'Camera Viettel',
    title: 'Giải pháp camera cho gia đình và kinh doanh',
    description:
      'Tư vấn thiết bị, vùng quan sát, lưu trữ và phương án lắp đặt dựa trên mặt bằng thực tế.',
    seoTitle: 'Camera Viettel | Gia đình, Cửa hàng & Doanh nghiệp',
    seoDescription:
      'Tư vấn camera Viettel cho gia đình, cửa hàng và doanh nghiệp. Xác nhận thiết bị, lưu trữ và phương án lắp đặt theo nhu cầu.',
    highlights: [
      'Tư vấn vị trí lắp',
      'Phương án lưu trữ',
      'Gia đình và cửa hàng',
      'Khảo sát theo nhu cầu',
    ],
    useCases: [
      { title: 'Gia đình', description: 'Quan sát lối ra vào và khu vực cần thiết theo nhu cầu.' },
      {
        title: 'Cửa hàng',
        description: 'Tư vấn vị trí phù hợp với quầy, kho và mặt bằng kinh doanh.',
      },
      { title: 'Doanh nghiệp', description: 'Xác định số lượng và phạm vi quan sát theo quy mô.' },
    ],
  },
  business: {
    id: 'business',
    path: '/internet-doanh-nghiep',
    eyebrow: 'Kết nối doanh nghiệp',
    title: 'Internet Viettel cho doanh nghiệp',
    description:
      'Tìm hiểu nhóm đường truyền doanh nghiệp, băng thông quốc tế và IP tĩnh theo quy mô vận hành.',
    seoTitle: 'Internet Viettel Doanh nghiệp | Đường truyền & IP tĩnh',
    seoDescription:
      'Tư vấn Internet Viettel cho doanh nghiệp: đường truyền, băng thông quốc tế và IP tĩnh theo nhu cầu và khu vực.',
    highlights: [
      'Đường truyền doanh nghiệp',
      'Băng thông quốc tế',
      'Tùy chọn IP tĩnh',
      'Tư vấn theo quy mô',
    ],
    useCases: [
      { title: 'Văn phòng nhỏ', description: 'Cân đối tốc độ và số người dùng thường xuyên.' },
      {
        title: 'Cửa hàng và chuỗi điểm bán',
        description: 'Tư vấn kết nối theo quy mô và ứng dụng vận hành.',
      },
      {
        title: 'Doanh nghiệp lớn',
        description: 'Làm rõ băng thông, IP và yêu cầu kỹ thuật trước khi báo phương án.',
      },
    ],
  },
} as const satisfies Record<ServicePageId, ServicePageContent>;
