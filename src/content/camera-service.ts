export const cameraPricingReference = {
  updatedAt: '24/03/2026',
  scope: '32 tỉnh/thành phố và ngoại thành Hà Nội, TP.HCM',
  sourceUrl:
    'https://www.vietteltelecom.vn/tin-tuc/chi-tiet/lap-dat-wifi-tai-nghe-an-gia-cuoc-re-khuyen-mai-lon-tu-viettel-telecom/16749248',
} as const;

export const cameraCloudPlans = [
  { retention: '01 ngày', price: '20.000đ', featured: false },
  { retention: '03 ngày', price: '30.000đ', featured: false },
  { retention: '07 ngày', price: '40.000đ', featured: true },
  { retention: '15 ngày', price: '60.000đ', featured: false },
  { retention: '30 ngày', price: '90.000đ', featured: false },
] as const;

export const internetCameraPlans = [
  {
    name: 'NETVT1 + Camera',
    speed: '350 Mbps',
    equipment: '01 modem Wi-Fi 6 + 01 camera trong nhà',
    price: '215.000đ',
    featured: false,
  },
  {
    name: 'MESHVT1 + Camera',
    speed: '350 Mbps',
    equipment: '01 modem Wi-Fi 6 + 01 Mesh + 01 camera trong nhà',
    price: '230.000đ',
    featured: true,
  },
  {
    name: 'NETVT2 + Camera',
    speed: 'Từ 500 Mbps đến 1 Gbps',
    equipment: '01 modem Wi-Fi 6 + 01 camera trong nhà',
    price: '260.000đ',
    featured: false,
  },
  {
    name: 'MESHVT2 + Camera',
    speed: 'Từ 500 Mbps đến 1 Gbps',
    equipment: '01 modem Wi-Fi 6 + 02 Mesh + 01 camera trong nhà',
    price: '265.000đ',
    featured: false,
  },
] as const;

export const cameraFaqItems = [
  {
    question: 'Camera Viettel có cần dùng Internet Viettel không?',
    answer:
      'Có phương án dành cho khách lắp mới combo Internet + Camera và phương án bổ sung Camera cho thuê bao Internet Viettel đang hoạt động. Khả năng cung cấp, thiết bị và điều kiện áp dụng được xác nhận theo địa chỉ.',
  },
  {
    question: 'Dữ liệu Camera được lưu trong bao lâu?',
    answer:
      'Bạn có thể chọn chu kỳ xem lại 01, 03, 07, 15 hoặc 30 ngày. Video cũ hơn chu kỳ của gói sẽ được thay thế theo cơ chế lưu trữ của dịch vụ.',
  },
  {
    question: 'Mất Camera hoặc thẻ nhớ có mất video không?',
    answer:
      'Với gói Cloud, dữ liệu được lưu trên hạ tầng của Viettel thay vì chỉ nằm tại Camera. Vì vậy sự cố hoặc mất thiết bị không đồng nghĩa dữ liệu Cloud trong chu kỳ còn hiệu lực bị mất theo thiết bị.',
  },
  {
    question: 'Camera trong nhà và ngoài trời khác nhau thế nào?',
    answer:
      'Camera trong nhà phù hợp phòng khách, cửa ra vào hoặc khu vực có mái che. Camera ngoài trời dành cho vị trí chịu tác động thời tiết. Phương án ngoài trời có thể phát sinh phần chênh lệch thiết bị và cần khảo sát vị trí cấp nguồn, kết nối.',
  },
  {
    question: 'Gửi yêu cầu trên website có phát sinh hợp đồng không?',
    answer:
      'Không. Đây là yêu cầu để đầu mối tư vấn liên hệ, kiểm tra hạ tầng và làm rõ nhu cầu. Giá, phí, thiết bị, thời hạn Cloud và lịch lắp đặt chỉ có hiệu lực sau khi được xác nhận trước khi bạn đồng ý.',
  },
] as const;
