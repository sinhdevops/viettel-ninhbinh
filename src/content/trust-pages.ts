import 'server-only';

import { businessConfig } from '@/config/business';
import { commercialPolicy } from '@/config/commercial-policy';
import { siteConfig } from '@/config/site';

export type TrustPageSlug =
  | 'chinh-sach-bao-mat'
  | 'chinh-sach-dang-ky-lap-dat'
  | 'dieu-khoan-su-dung'
  | 'gioi-thieu'
  | 'lien-he'
  | 'quy-trinh-giai-quyet-khieu-nai';

export interface TrustPageContent {
  slug: TrustPageSlug;
  eyebrow: string;
  title: string;
  description: string;
  sections: readonly {
    id: string;
    title: string;
    paragraphs: readonly string[];
    items?: readonly string[];
  }[];
}

function compact(values: Array<string | undefined>) {
  return values.filter((value): value is string => Boolean(value));
}

export function getTrustPages(): Record<TrustPageSlug, TrustPageContent> {
  return {
    'gioi-thieu': {
      slug: 'gioi-thieu',
      eyebrow: 'Về chúng tôi',
      title: 'Giới thiệu đơn vị vận hành',
      description: 'Thông tin về vai trò, phạm vi hỗ trợ và nguyên tắc vận hành website.',
      sections: [
        {
          id: 'don-vi',
          title: 'Đơn vị vận hành',
          paragraphs: [
            `${businessConfig.displayName} là đầu mối tiếp nhận yêu cầu phát sinh từ website.`,
          ],
          items: compact([
            businessConfig.legalName && `Tên pháp lý/cá nhân: ${businessConfig.legalName}`,
            businessConfig.address && `Địa chỉ: ${businessConfig.address}`,
            businessConfig.taxId && `Mã số thuế: ${businessConfig.taxId}`,
          ]),
        },
        {
          id: 'quan-he',
          title: 'Quan hệ với Viettel',
          paragraphs: compact([
            businessConfig.relationship,
            businessConfig.authorizationReference
              ? 'Thông tin ủy quyền được đối chiếu theo mã/tham chiếu công bố bên dưới.'
              : 'Người vận hành cho biết có giấy ủy quyền nhưng website chưa công bố mã tham chiếu. Website này không phải cổng thương mại điện tử chính thức của Viettel Telecom.',
          ]),
          items: compact([
            businessConfig.authorizationReference &&
              `Mã/tham chiếu ủy quyền: ${businessConfig.authorizationReference}`,
          ]),
        },
        {
          id: 'pham-vi',
          title: 'Phạm vi hỗ trợ',
          paragraphs: [
            `Hỗ trợ tư vấn gói, kiểm tra hạ tầng, tiếp nhận đăng ký và phối hợp lịch lắp đặt. Khu vực tiếp nhận: ${businessConfig.serviceArea}.`,
          ],
        },
        {
          id: 'minh-bach',
          title: 'Nguyên tắc minh bạch',
          paragraphs: [
            'Giá, thiết bị, khuyến mại và thời gian lắp đặt cần được xác nhận theo địa chỉ và chính sách tại thời điểm đăng ký. Website không tự quyết định sự cố kỹ thuật hoặc nghiệp vụ của thuê bao đang hoạt động.',
            'Gửi biểu mẫu chỉ là yêu cầu được liên hệ; không tự động tạo hợp đồng, thu phí hoặc bảo đảm hạ tầng có sẵn.',
          ],
        },
      ],
    },
    'lien-he': {
      slug: 'lien-he',
      eyebrow: 'Kết nối với chúng tôi',
      title: 'Thông tin liên hệ',
      description: 'Các kênh tư vấn đăng ký và tiếp nhận yêu cầu của khách hàng.',
      sections: [
        {
          id: 'kenh',
          title: 'Kênh liên hệ',
          paragraphs: ['Khách hàng có thể gọi điện hoặc nhắn Zalo để được tiếp nhận nhu cầu.'],
          items: compact([
            `Điện thoại/Zalo: ${siteConfig.phone.display}`,
            businessConfig.email && `Email: ${businessConfig.email}`,
            businessConfig.address && `Địa chỉ: ${businessConfig.address}`,
          ]),
        },
        {
          id: 'thoi-gian',
          title: 'Thời gian và khu vực',
          paragraphs: [
            `Thời gian tiếp nhận: ${businessConfig.workingHours}.`,
            `Khu vực phục vụ: ${businessConfig.serviceArea}.`,
          ],
        },
        {
          id: 'ho-tro',
          title: 'Nội dung hỗ trợ',
          paragraphs: [
            'Tư vấn Internet, TV360, Wi-Fi Mesh, camera, dịch vụ doanh nghiệp; kiểm tra hạ tầng theo địa chỉ và phối hợp đăng ký.',
          ],
        },
        {
          id: 'ky-thuat',
          title: 'Sự cố thuê bao đang sử dụng',
          paragraphs: [
            'Với lỗi đường truyền hoặc thiết bị của thuê bao đang hoạt động, vui lòng gọi tổng đài kỹ thuật Viettel 1800 8119.',
          ],
        },
      ],
    },
    'chinh-sach-bao-mat': {
      slug: 'chinh-sach-bao-mat',
      eyebrow: 'Quyền riêng tư',
      title: 'Chính sách bảo mật và xử lý dữ liệu',
      description:
        'Cách website thu thập, sử dụng, lưu giữ và hỗ trợ quyền của khách hàng đối với dữ liệu cá nhân.',
      sections: [
        {
          id: 'du-lieu',
          title: 'Dữ liệu được thu thập',
          paragraphs: [
            'Biểu mẫu thu số điện thoại, phường/xã, địa chỉ chi tiết nếu khách hàng tự nguyện nhập và dịch vụ hoặc gói quan tâm. Hệ thống có thể xử lý trang gửi yêu cầu, nguồn truy cập và mã đo lường khi các công cụ tương ứng được cấu hình.',
          ],
        },
        {
          id: 'muc-dich',
          title: 'Mục đích xử lý',
          paragraphs: [
            'Dữ liệu được dùng để kiểm tra khả năng cung cấp, liên hệ tư vấn, hỗ trợ đăng ký, phối hợp lắp đặt, xử lý phản hồi và phòng chống yêu cầu tự động.',
          ],
        },
        {
          id: 'chia-se',
          title: 'Lưu trữ và bên nhận',
          paragraphs: [
            'Yêu cầu được chuyển tới kênh thông báo Telegram do người vận hành quản lý; website hiện không có cơ sở dữ liệu khách hàng riêng. Dữ liệu có thể được chuyển cho bộ phận Viettel liên quan trong phạm vi cần thiết để kiểm tra hạ tầng và hoàn tất yêu cầu.',
          ],
        },
        { id: 'thoi-han', title: 'Thời gian lưu', paragraphs: [businessConfig.dataRetention] },
        {
          id: 'quyen',
          title: 'Quyền của khách hàng',
          paragraphs: [
            `Khách hàng có thể yêu cầu xem, sửa, rút yêu cầu tư vấn hoặc xóa dữ liệu bằng cách liên hệ ${businessConfig.privacyContact}.`,
          ],
        },
      ],
    },
    'dieu-khoan-su-dung': {
      slug: 'dieu-khoan-su-dung',
      eyebrow: 'Quy định website',
      title: 'Điều khoản sử dụng website',
      description:
        'Quy định áp dụng khi truy cập, tham khảo thông tin hoặc gửi yêu cầu qua website.',
      sections: [
        {
          id: 'pham-vi',
          title: 'Phạm vi áp dụng',
          paragraphs: [
            'Điều khoản áp dụng khi người dùng truy cập website, gọi điện, mở Zalo hoặc gửi biểu mẫu yêu cầu tư vấn.',
          ],
        },
        {
          id: 'vai-tro',
          title: 'Vai trò website',
          paragraphs: [
            businessConfig.relationship,
            'Website không phải cổng thương mại điện tử chính thức của Viettel Telecom. Gửi biểu mẫu là yêu cầu được liên hệ, không tự động tạo hợp đồng, thu phí hoặc bảo đảm hạ tầng có sẵn.',
          ],
        },
        {
          id: 'nguoi-dung',
          title: 'Trách nhiệm người dùng',
          paragraphs: [
            'Người dùng cần cung cấp thông tin chính xác, thuộc quyền sử dụng hợp pháp và không gửi nội dung giả mạo hoặc gây nhiễu hệ thống.',
          ],
        },
        {
          id: 'dich-vu',
          title: 'Thông tin dịch vụ',
          paragraphs: [
            'Giá, thiết bị, khuyến mại, vùng phủ và lịch lắp có thể thay đổi theo chính sách và điều kiện tại địa chỉ. Xác nhận cuối cùng được thông báo trước khi khách hàng đồng ý đăng ký.',
          ],
        },
        {
          id: 'gioi-han',
          title: 'Giới hạn trách nhiệm',
          paragraphs: [
            'Người vận hành chịu trách nhiệm tiếp nhận trong phạm vi tư vấn. Sự cố thuê bao, hóa đơn và nghiệp vụ cần quyền truy cập hệ thống được chuyển đến kênh Viettel phù hợp.',
          ],
        },
      ],
    },
    'chinh-sach-dang-ky-lap-dat': {
      slug: 'chinh-sach-dang-ky-lap-dat',
      eyebrow: 'Thông tin đăng ký',
      title: 'Chính sách đăng ký và lắp đặt',
      description: 'Quy trình, phí ban đầu, thiết bị, trả trước, khuyến mại và thay đổi dịch vụ.',
      sections: [
        {
          id: 'quy-trinh',
          title: 'Quy trình đăng ký',
          paragraphs: [
            'Khách hàng gửi nhu cầu; nhân viên kiểm tra hạ tầng; hai bên xác nhận gói, chi phí, thiết bị và lịch dự kiến; Viettel thực hiện đăng ký và lắp đặt theo điều kiện thực tế.',
          ],
        },
        {
          id: 'chi-phi',
          title: 'Chi phí ban đầu',
          paragraphs: [
            `Phí hòa mạng tham khảo từ ${commercialPolicy.connectionFee ?? 'mức được xác nhận khi tư vấn'}/thuê bao. Tổng chi phí còn phụ thuộc dịch vụ, thiết bị, địa chỉ, hình thức và số tháng thanh toán.`,
          ],
        },
        { id: 'thiet-bi', title: 'Thiết bị', paragraphs: [commercialPolicy.equipment] },
        {
          id: 'khuyen-mai',
          title: 'Trả trước và khuyến mại',
          paragraphs: compact([
            commercialPolicy.promotion,
            commercialPolicy.promotionValidity &&
              `Thời gian áp dụng: ${commercialPolicy.promotionValidity}.`,
            commercialPolicy.promotion && !commercialPolicy.promotionValidity
              ? 'Thời gian và phạm vi áp dụng khuyến mại chưa được công bố trên website; chỉ áp dụng sau khi được xác nhận tại thời điểm đăng ký.'
              : undefined,
            commercialPolicy.prepayment ??
              'Điều kiện trả trước được xác nhận theo gói tại thời điểm tư vấn.',
          ]),
        },
        {
          id: 'huy',
          title: 'Hủy hoặc thay đổi',
          paragraphs: [
            commercialPolicy.cancellation ??
              'Điều kiện hủy, đổi gói, hoàn trả thiết bị và khoản phí liên quan được xác nhận theo hồ sơ thuê bao tại thời điểm yêu cầu.',
          ],
        },
      ],
    },
    'quy-trinh-giai-quyet-khieu-nai': {
      slug: 'quy-trinh-giai-quyet-khieu-nai',
      eyebrow: 'Hỗ trợ khách hàng',
      title: 'Quy trình tiếp nhận và giải quyết khiếu nại',
      description: 'Kênh tiếp nhận, các bước xử lý và trường hợp cần chuyển đến tổng đài Viettel.',
      sections: [
        {
          id: 'tiep-nhan',
          title: 'Kênh tiếp nhận',
          paragraphs: [
            `Gọi hoặc nhắn Zalo số ${businessConfig.complaintContact}. Vui lòng nêu số điện thoại, địa chỉ và nội dung cần xử lý.`,
          ],
        },
        {
          id: 'thoi-gian',
          title: 'Thời gian phản hồi',
          paragraphs: [
            'Mục tiêu phản hồi ban đầu trong khoảng 5 phút khi người vận hành đang trực. Đây không phải thời hạn giải quyết cuối cùng.',
          ],
        },
        {
          id: 'cac-buoc',
          title: 'Các bước xử lý',
          paragraphs: [
            'Tiếp nhận và xác minh; phân loại yêu cầu; xử lý trong phạm vi phụ trách hoặc chuyển đúng kênh; thông báo kết quả hoặc bước tiếp theo.',
          ],
        },
        {
          id: 'chuyen-viettel',
          title: 'Trường hợp chuyển Viettel',
          paragraphs: [
            'Với lỗi đường truyền, thiết bị hoặc sự cố thuê bao đang sử dụng, gọi tổng đài kỹ thuật 1800 8119. Vấn đề hóa đơn/tài khoản có thể cần bộ phận có quyền truy cập hệ thống.',
          ],
        },
      ],
    },
  };
}
