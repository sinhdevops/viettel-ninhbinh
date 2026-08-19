export const businessInternetPlans = [
  {
    id: 'pro1',
    name: 'Pro1',
    speed: 'Tối thiểu 400 Mbps, tối đa 1 Gbps',
    internationalBandwidth: '2 Mbps',
    meshDevices: 'Không kèm Mesh',
    price: '350.000đ',
    featured: false,
    features: ['Modem Wi-Fi 6', 'IP động', 'Hỗ trợ cấu hình ONT Bridge'],
  },
  {
    id: 'pro2',
    name: 'Pro2',
    speed: 'Tối thiểu 500 Mbps, tối đa 1 Gbps',
    internationalBandwidth: '5 Mbps',
    meshDevices: 'Không kèm Mesh',
    price: '500.000đ',
    featured: true,
    features: ['Modem Wi-Fi 6', 'IP động', 'Băng thông quốc tế cao hơn Pro1'],
  },
  {
    id: 'mesh-pro1',
    name: 'MeshPro1',
    speed: 'Tối thiểu 400 Mbps, tối đa 1 Gbps',
    internationalBandwidth: '2 Mbps',
    meshDevices: '01 thiết bị Mesh',
    price: '400.000đ',
    featured: false,
    features: ['Modem Wi-Fi 6', 'Thêm 01 điểm phát Mesh', 'Phù hợp mặt bằng nhiều phòng'],
  },
  {
    id: 'mesh-pro2',
    name: 'MeshPro2',
    speed: 'Tối thiểu 500 Mbps, tối đa 1 Gbps',
    internationalBandwidth: '5 Mbps',
    meshDevices: '02 thiết bị Mesh',
    price: '600.000đ',
    featured: false,
    features: ['Modem Wi-Fi 6', 'Thêm 02 điểm phát Mesh', 'Mở rộng vùng phủ văn phòng'],
  },
] as const;

export const businessInternetFaqItems = [
  {
    question: 'Gói Pro và MeshPro khác nhau như thế nào?',
    answer:
      'Gói Pro phù hợp khi modem có thể phủ tốt khu vực làm việc. MeshPro có thêm thiết bị Mesh để mở rộng vùng phủ cho văn phòng nhiều phòng, nhiều tầng hoặc có khu vực xa modem.',
  },
  {
    question: 'Băng thông quốc tế cam kết dùng cho nhu cầu nào?',
    answer:
      'Đây là phần băng thông dành cho kết nối tới hệ thống ở nước ngoài. Doanh nghiệp dùng cloud quốc tế, họp trực tuyến hoặc trao đổi dữ liệu với đối tác nên mô tả rõ ứng dụng và số người dùng để được tư vấn đúng cấu hình.',
  },
  {
    question: 'Doanh nghiệp cần IP tĩnh thì chọn gói nào?',
    answer:
      'Nhu cầu vận hành máy chủ, VPN, camera từ xa hoặc hệ thống cần địa chỉ cố định nên được tư vấn nhóm gói IP tĩnh. Số IP, băng thông và thiết bị được xác nhận theo thiết kế kỹ thuật trước khi báo giá.',
  },
  {
    question: 'Giá gói doanh nghiệp đã gồm VAT chưa?',
    answer:
      'Mức cước trong bảng đã gồm VAT theo chính sách công bố. Phí hòa mạng, thiết bị, khuyến mại và mức áp dụng cuối cùng cần được xác nhận theo địa chỉ và thời điểm ký hợp đồng.',
  },
  {
    question: 'Gửi yêu cầu tư vấn có phát sinh chi phí không?',
    answer:
      'Không. Yêu cầu trên website chỉ dùng để kiểm tra hạ tầng và trao đổi nhu cầu. Doanh nghiệp chỉ quyết định sau khi nhận phương án, chi phí và điều kiện hợp đồng cụ thể.',
  },
] as const;
