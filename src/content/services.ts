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
    title: 'Internet Viettel và Wi-Fi Mesh cho gia đình',
    description:
      'Tìm hiểu Internet cáp quang, modem Wi-Fi 6, Wi-Fi Mesh và cách chọn gói theo mặt bằng, số thiết bị tại nhà.',
    seoTitle: 'Internet Viettel | Wi-Fi 6, Mesh & Gói Cáp Quang',
    seoDescription:
      'So sánh gói Internet Viettel từ 300 Mbps, modem Wi-Fi 6 và Wi-Fi Mesh. Chọn khu vực để kiểm tra hạ tầng, giá và thiết bị.',
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
    title: 'Truyền hình TV360 và combo Internet Viettel',
    description:
      'Xem TV360 trên App hoặc Box, lựa chọn gói Truyền hình riêng và combo Internet + TV360 theo thiết bị đang sử dụng.',
    seoTitle: 'Truyền hình Viettel TV360 | App, Box & Combo Internet',
    seoDescription:
      'Tìm hiểu Truyền hình TV360 trên App, TV360 Box và combo Internet Viettel. So sánh gói, thiết bị và kiểm tra khả năng cung cấp.',
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
    title: 'Camera Viettel cho gia đình và kinh doanh',
    description:
      'Camera trong nhà, ngoài trời và lưu trữ Cloud. Tư vấn thiết bị, vùng quan sát và phương án lắp đặt dựa trên mặt bằng thực tế.',
    seoTitle: 'Camera Viettel | Trong nhà, Ngoài trời & Cloud',
    seoDescription:
      'Tìm hiểu Camera Viettel trong nhà, ngoài trời, lưu trữ Cloud và combo Internet Camera. Chọn khu vực để kiểm tra khả năng lắp đặt.',
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
    title: 'Internet Viettel cho doanh nghiệp và tổ chức',
    description:
      'Tìm hiểu nhóm đường truyền doanh nghiệp, băng thông quốc tế và IP tĩnh theo quy mô vận hành.',
    seoTitle: 'Internet Viettel Doanh nghiệp | Gói Pro, Mesh & IP tĩnh',
    seoDescription:
      'So sánh gói Internet Viettel doanh nghiệp Pro, MeshPro, băng thông quốc tế và giải pháp IP tĩnh. Kiểm tra hạ tầng theo địa chỉ.',
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
