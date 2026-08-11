# KẾ HOẠCH TRIỂN KHAI TRUST PAGES VÀ XỬ LÝ CÁC VẤN ĐỀ TIN CẬY

**Ngày lập:** 11/08/2026
**Phạm vi:** website Viettel Ninh Bình, route quảng cáo chính /viettel-ninh-binh
**Trạng thái:** kế hoạch triển khai; chưa thay đổi mã nguồn production

## 1. Mục tiêu

Sau khi hoàn tất, website phải:

- Công khai đúng đơn vị vận hành và đúng quan hệ với Viettel.
- Có sáu trang trust/pháp lý thật, không còn liên kết giả về anchor.
- Dùng một nguồn sự thật cho tên đơn vị, số điện thoại, Zalo, địa chỉ và giờ làm việc.
- Dùng một nguồn sự thật có ngày hiệu lực cho giá, phí, thiết bị và khuyến mại.
- Không còn nhận diện Đà Nẵng trên domain Ninh Bình.
- Thu thập số điện thoại/địa chỉ với thông báo và đồng thuận rõ ràng.
- Chỉ hiển thị bằng chứng, đánh giá và giấy tờ có thật, có quyền công bố.
- Có metadata, canonical, sitemap và structured data đúng cho từng route.
- Đạt type-check, lint, format, build, accessibility và kiểm tra mobile/desktop.

Kế hoạch này không tự bịa dữ liệu còn thiếu. Không merge placeholder như “Tên công ty ABC”, địa chỉ giả, giấy ủy quyền giả, SLA chưa xác nhận hoặc giá không có nguồn.

---

## 2. Các quyết định phải khóa trước khi code

### 2.1. Hồ sơ đơn vị vận hành

Chủ website phải cung cấp và duyệt:

| Dữ liệu                              |       Bắt buộc | Ghi chú                                                    |
| ------------------------------------ | -------------: | ---------------------------------------------------------- |
| Tên pháp lý/cá nhân vận hành         |             Có | Đúng với hồ sơ thực tế                                     |
| Tên hiển thị                         |             Có | Không gây hiểu nhầm là Viettel Telecom nếu không phải      |
| Loại chủ thể                         |             Có | Doanh nghiệp, hộ kinh doanh hay cá nhân                    |
| Mã số thuế/đăng ký kinh doanh        |    Tùy chủ thể | Chỉ công bố dữ liệu được phép                              |
| Địa chỉ liên hệ/trụ sở               |             Có | Không dùng địa chỉ cửa hàng Viettel nếu không thuộc đơn vị |
| Điện thoại                           |             Có | Một số chuẩn dùng toàn site                                |
| Zalo                                 | Có nếu sử dụng | Phải đúng chủ thể tư vấn                                   |
| Email                                |             Có | Nên dùng email theo domain                                 |
| Giờ làm việc                         |             Có | Dùng cho CTA và kỳ vọng phản hồi                           |
| Người/kênh phụ trách dữ liệu cá nhân |             Có | Email hoặc kênh tiếp nhận                                  |
| Kênh khiếu nại                       |             Có | Điện thoại/email/Zalo phù hợp                              |

### 2.2. Quan hệ với Viettel

Phải chọn đúng một trường hợp và có câu chữ được duyệt:

1. Chi nhánh/đơn vị chính thức của Viettel.
2. Đại lý/điểm bán được ủy quyền.
3. Nhân viên hoặc cộng tác viên bán hàng.
4. Đơn vị tư vấn độc lập.

Nếu có ủy quyền:

- Xác nhận tên gọi được phép dùng.
- Xác nhận phạm vi địa lý/dịch vụ.
- Xác nhận quyền dùng logo, hình ảnh, tên miền và tài liệu.
- Chuẩn bị tài liệu chứng minh; chỉ công bố bản đã che dữ liệu nhạy cảm và được phép.

Nếu không có ủy quyền chính thức:

- Không dùng “website chính thức”, “chi nhánh Viettel Ninh Bình” hoặc structured data mang tên tổ chức Viettel Ninh Bình.
- Hiển thị rõ website do đơn vị/cá nhân nào vận hành.
- Có câu giải thích đây là kênh tư vấn/tiếp nhận đăng ký, không phải cổng chăm sóc khách hàng chính thức, nếu đó là thực tế.

### 2.3. Chính sách thương mại

Cần một bảng đã duyệt:

- Mã gói, tốc độ, giá tháng và VAT.
- Phí hòa mạng/lắp đặt.
- Quyền sở hữu hoặc hình thức cấp thiết bị.
- Số modem/Mesh, App/Box.
- Điều kiện trả trước.
- Quy trình hủy/thay đổi trước và sau khi tạo đơn.
- Điều kiện hoàn tiền nếu có.
- Khuyến mại, ngày bắt đầu/kết thúc và địa bàn.
- Thời gian triển khai thực tế.
- Kênh hỗ trợ sau bán.
- Nguồn văn bản và người chịu trách nhiệm duyệt.

### 2.4. Luồng dữ liệu

Phải xác nhận đúng hệ thống đang nhận dữ liệu:

- Hosting.
- Telegram.
- CRM/database dự kiến.
- Google Tag Manager/Google Ads/Google Analytics.
- Meta Pixel nếu bật.
- Đơn vị sales/kỹ thuật nhận lead.
- Thời gian lưu lead.
- Quy trình yêu cầu truy cập, sửa hoặc xóa dữ liệu.
- Có hay không chuyển dữ liệu ra ngoài Việt Nam.

Trang chính sách bảo mật phải mô tả hệ thống thật, không mô tả kiến trúc “dự kiến”.

---

## 3. Kiến trúc code đề xuất

### 3.1. Routes

Tạo route group để dùng chung layout nhưng không làm thay đổi URL:

    src/app/(trust)/
      layout.tsx
      gioi-thieu/page.tsx
      lien-he/page.tsx
      chinh-sach-bao-mat/page.tsx
      dieu-khoan-su-dung/page.tsx
      chinh-sach-dang-ky-lap-dat/page.tsx
      quy-trinh-giai-quyet-khieu-nai/page.tsx

URL public:

- /gioi-thieu
- /lien-he
- /chinh-sach-bao-mat
- /dieu-khoan-su-dung
- /chinh-sach-dang-ky-lap-dat
- /quy-trinh-giai-quyet-khieu-nai

Tất cả page mặc định là React Server Component. Không thêm use client vì nội dung tĩnh, link gọi/Zalo không cần state.

### 3.2. Component dùng chung

Tạo tối thiểu:

    src/components/content/trust-page-shell.tsx

Trách nhiệm:

- Header/Footer dùng ninhBinhMarket.
- Breadcrumb.
- H1 duy nhất.
- Mô tả mở đầu.
- Ngày hiệu lực/cập nhật.
- Mục lục cho trang dài nếu cần.
- Vùng CTA liên hệ cuối trang.
- Chiều rộng đọc phù hợp, typography và focus state.

Không tách từng đoạn văn thành component. Mỗi page tự chứa semantic article/section để dễ kiểm tra nội dung pháp lý.

### 3.3. Nguồn sự thật cho dữ liệu công khai

Tạo:

    src/config/business.ts
    src/config/commercial-policy.ts

business.ts chứa dữ liệu đã xác nhận:

- legalName.
- displayName.
- operatorType.
- relationshipWithViettel.
- relationshipDisclosure.
- taxCode nếu được công bố.
- address.
- phone raw/display/E.164.
- Zalo.
- email.
- businessHours.
- serviceArea.
- privacyContact.
- complaintContact.
- allowedBrandAssets.
- authorizationEvidence nếu có và được phép công bố.

commercial-policy.ts chứa:

- effectiveFrom/effectiveTo.
- verifiedAt.
- verifiedBy.
- sourceReference.
- installationFee và điều kiện.
- plan/pricing data.
- equipment terms.
- prepayment terms.
- cancellation terms.
- promotion terms.

Hero, plan cards, FAQ, metadata và trang chính sách đăng ký phải đọc cùng cấu hình. Không hard-code “195.000đ”, “miễn phí”, “300.000đ” ở nhiều component.

### 3.4. Navigation

NavigationItem hiện chỉ nhận hash. Cần:

- Giữ primary navigation trỏ về section trên /viettel-ninh-binh.
- Thêm kiểu FooterLink hỗ trợ đường dẫn nội bộ.
- Footer liên kết thật đến sáu route.
- Xóa “Tin tức”, “Tuyển dụng” nếu chưa có page thật.
- “Giới thiệu” và “Liên hệ” không được trỏ về #top/#footer.

Không tạo link placeholder hoặc route rỗng.

---

## 4. Đặc tả từng page

## 4.1. /gioi-thieu

### Mục tiêu

Trả lời ngay:

- Ai vận hành website?
- Website có quan hệ gì với Viettel?
- Đơn vị chịu trách nhiệm phần nào?
- Khách đang đăng ký qua kênh nào?

### Nội dung

1. Tên pháp lý và tên hiển thị.
2. Loại hình đơn vị/cá nhân.
3. Quan hệ với Viettel bằng câu chữ chính xác.
4. Phạm vi phục vụ.
5. Vai trò trong flow: tiếp nhận, tư vấn, kiểm tra hạ tầng, chuyển yêu cầu, theo dõi.
6. Những nội dung không thuộc trách nhiệm nếu có.
7. Quy tắc minh bạch giá/điều kiện.
8. Bằng chứng thật được phép công bố.
9. Thông tin liên hệ.
10. Ngày cập nhật.

### Trust evidence

Chỉ hiển thị nếu có thật:

- Ảnh đội ngũ.
- Ảnh điểm làm việc.
- Giấy ủy quyền/hợp tác đã che dữ liệu nhạy cảm.
- Mã số thuế/đăng ký kinh doanh.
- Hồ sơ nhân sự/đại lý được phép công khai.

Không tạo review, số khách, số năm kinh nghiệm hoặc chứng nhận giả.

### Acceptance criteria

- Có một H1.
- Danh tính và quan hệ thương hiệu nhìn thấy trước khi cuộn dài.
- Không có từ “chính thức/chi nhánh/ủy quyền” nếu thiếu bằng chứng.
- Structured data dùng tên đơn vị vận hành thật.

---

## 4.2. /lien-he

### Nội dung

1. Tên đơn vị.
2. Địa chỉ.
3. Điện thoại.
4. Zalo.
5. Email.
6. Giờ làm việc.
7. Khu vực phục vụ.
8. Kênh cho đăng ký mới.
9. Kênh cho khiếu nại.
10. Kênh cho yêu cầu dữ liệu cá nhân.

### UI

- CTA gọi, Zalo và email có vùng chạm tối thiểu.
- Hiển thị số và href tel: lấy cùng nguồn.
- Chỉ thêm bản đồ khi địa chỉ thật và được phép công bố.
- Không nhúng widget bản đồ nặng nếu link Google Maps đủ dùng.
- Không hứa “phản hồi 5 phút” nếu SLA chưa đạt.

### Structured data

- ContactPage/WebPage.
- ContactPoint lấy từ business config.
- Không hard-code số điện thoại trong JSON-LD.

### Acceptance criteria

- Số hiển thị = số gọi = số Zalo = số trong JSON-LD, trừ khi có giải thích rõ các kênh khác nhau.
- Giờ làm việc khớp CTA/call asset.
- Không dùng địa chỉ Viettel không thuộc quyền vận hành.

---

## 4.3. /chinh-sach-bao-mat

### Nội dung tối thiểu

1. Đơn vị kiểm soát/xử lý dữ liệu.
2. Dữ liệu thu thập:
   - Số điện thoại.
   - Địa chỉ/khu vực.
   - Dịch vụ/gói quan tâm.
   - Thời điểm gửi.
   - GCLID/GBRAID/WBRAID/UTM nếu triển khai.
   - Dữ liệu kỹ thuật/cookie thực sự thu.
3. Mục đích:
   - Kiểm tra hạ tầng.
   - Tư vấn và liên hệ.
   - Tạo/chuyển yêu cầu lắp đặt.
   - Đo lường quảng cáo nếu có đồng thuận phù hợp.
4. Căn cứ và cách ghi nhận sự đồng ý.
5. Bên nhận dữ liệu:
   - Đơn vị vận hành.
   - Sales/kỹ thuật/Viettel theo flow thật.
   - Hosting/CRM/Telegram/Google/Meta nếu thực sự dùng.
6. Thời gian lưu theo từng loại dữ liệu.
7. Biện pháp bảo vệ ở mức có thể công khai.
8. Quyền truy cập, sửa, rút đồng ý, phản đối/hạn chế xử lý và yêu cầu xóa.
9. Cách gửi yêu cầu và thời gian phản hồi đã cam kết.
10. Cookie/analytics/advertising.
11. Chuyển dữ liệu xuyên biên giới nếu có.
12. Dữ liệu trẻ em.
13. Cập nhật chính sách.
14. Kênh báo cáo sự cố/quyền riêng tư.

Luật Bảo vệ dữ liệu cá nhân số 91/2025/QH15 có hiệu lực từ 01/01/2026. Nội dung phải được người phụ trách pháp lý rà soát trước production.

Nguồn:

- https://vanban.chinhphu.vn/?docid=214590&pageid=27160
- https://vanban.chinhphu.vn/?classid=1&docid=216387&pageid=27160
- https://xaydungchinhsach.chinhphu.vn/nhung-quy-dinh-dang-chu-y-trong-luat-bao-ve-du-lieu-ca-nhan-2025-119251225084154179.htm

### Thay đổi form

Ngay dưới form:

- Link tới chính sách bảo mật.
- Checkbox không tick sẵn cho việc xử lý dữ liệu nhằm tư vấn yêu cầu hiện tại.
- Nếu có marketing về sau, dùng checkbox riêng và tùy chọn; không gộp với yêu cầu lắp đặt.
- aria-describedby liên kết mô tả và lỗi.
- Server nhận trạng thái consent, phiên bản chính sách và thời điểm đồng ý.

Không gửi số điện thoại, địa chỉ hoặc nội dung form vào GA/GTM/Meta.

### Cookie/tracking

Trước khi bật analytics/advertising:

- Có lựa chọn Chấp nhận/Từ chối/Tùy chỉnh.
- Không preselect consent.
- Lưu lựa chọn.
- Google Consent Mode dùng trạng thái phù hợp.
- GTM/GA/Meta không được tải hoặc không được cấp storage trước consent theo thiết kế đã duyệt.
- Người dùng có cách thay đổi lựa chọn.

### Acceptance criteria

- Page công khai, dễ đọc trên mobile.
- Form không submit nếu consent bắt buộc chưa được chọn.
- Version và thời điểm consent được lưu cùng lead.
- Chính sách phản ánh đúng Telegram/CRM/tracking đang dùng.

---

## 4.4. /dieu-khoan-su-dung

### Nội dung

1. Chủ thể vận hành.
2. Mục đích website.
3. Vai trò của website trong quá trình đăng ký.
4. Điều kiện sử dụng.
5. Nghĩa vụ cung cấp thông tin chính xác.
6. Quyền sở hữu nội dung và thương hiệu.
7. Phạm vi sử dụng logo/tài liệu Viettel.
8. Thông tin giá/chính sách có ngày hiệu lực.
9. Hạ tầng và lịch lắp phải được xác nhận.
10. Liên kết/kênh bên thứ ba.
11. Giới hạn trách nhiệm hợp lý, không loại bỏ quyền hợp pháp của người dùng.
12. Cách thay đổi điều khoản.
13. Luật áp dụng và kênh liên hệ.

### Acceptance criteria

- Không dùng điều khoản để che một claim sai.
- Không viết “website chính thức” nếu không đúng.
- Có link sang chính sách đăng ký, bảo mật và khiếu nại.
- Có ngày hiệu lực.

---

## 4.5. /chinh-sach-dang-ky-lap-dat

### Nội dung

1. Đối tượng và khu vực áp dụng.
2. Quy trình kiểm tra hạ tầng.
3. Điều kiện xác nhận đơn.
4. Bảng giá có ngày hiệu lực hoặc link tới gói được duyệt.
5. Phí hòa mạng/lắp đặt và trường hợp phát sinh.
6. Thiết bị cấp kèm, quyền sở hữu/hoàn trả.
7. Điều kiện trả trước.
8. Chương trình khuyến mại và thời hạn.
9. Hồ sơ/thông tin cần cung cấp.
10. Thời gian dự kiến và yếu tố ảnh hưởng.
11. Thay đổi/hủy trước khi tạo đơn.
12. Thay đổi/hủy sau khi tạo đơn.
13. Hoàn tiền/đối soát nếu có.
14. Nghiệm thu và kênh hỗ trợ.
15. Khiếu nại.

### Code

Nội dung giá, phí, thiết bị và khuyến mại phải render từ commercial-policy.ts. Khi chính sách hết hạn:

- Không tiếp tục hiển thị promotion cũ.
- Hiển thị yêu cầu liên hệ xác nhận.
- Ghi nhận cảnh báo trong quy trình release.

### Acceptance criteria

- Không còn mâu thuẫn “miễn phí” với “300.000đ”.
- Mọi con số có nguồn và ngày hiệu lực.
- Điều kiện viết cạnh claim, không giấu ở cuối trang.
- Có link từ plan cards/FAQ/footer.

---

## 4.6. /quy-trinh-giai-quyet-khieu-nai

### Nội dung

1. Phạm vi yêu cầu tiếp nhận.
2. Kênh gửi khiếu nại.
3. Thông tin khách cần cung cấp.
4. Cấp mã tiếp nhận/ticket nếu hệ thống có.
5. Thời gian xác nhận đã nhận.
6. Các bước xác minh.
7. Thời gian phản hồi/giải quyết đã được đội ngũ duyệt.
8. Trường hợp cần phối hợp/chuyển Viettel.
9. Cách thông báo kết quả.
10. Cơ chế phản hồi hoặc escalations.
11. Cách xử lý dữ liệu trong khiếu nại.
12. Kênh liên hệ cơ quan có thẩm quyền nếu phù hợp và đã được pháp lý duyệt.

Không tự hứa SLA 24 giờ/48 giờ nếu chưa có người và quy trình đáp ứng.

### Acceptance criteria

- Kênh hoạt động thật.
- Có owner.
- Có thời gian tiếp nhận rõ.
- Không khiến khách nhầm kênh bán hàng là tổng đài kỹ thuật chính thức.

---

## 5. Xử lý các issue trên landing hiện tại

## 5.1. Danh tính đơn vị vận hành

### Hiện tại

- JSON-LD tự khai Organization theo market.siteName.
- Header/footer chỉ hiển thị logo Viettel.
- Chưa có tên pháp lý/tư cách.

### Thay đổi

- JSON-LD Organization dùng business.legalName/displayName.
- Header hoặc vùng dưới hero có disclosure ngắn và link /gioi-thieu.
- Footer có tên đơn vị, địa chỉ, liên hệ và tư cách.
- Logo Viettel chỉ dùng khi allowedBrandAssets cho phép.
- Nếu không có quyền, dùng nhận diện riêng và mô tả dịch vụ Viettel bằng nội dung chữ phù hợp.

### Pass

- Người dùng hiểu ai sẽ gọi họ trước khi submit.
- Google Ads reviewer thấy được danh tính và quan hệ thương hiệu.

## 5.2. Thông tin liên hệ thống nhất

### Hiện tại

- display phone hard-code.
- tel:/Zalo lấy env.
- JSON-LD hard-code E.164.

### Thay đổi

- business config là nguồn duy nhất.
- Tạo formatter/normalizer dùng lại cho display, tel và E.164.
- siteConfig, header, footer, form, Zalo và JSON-LD cùng đọc nguồn này.
- Xóa số hard-code khỏi structured-data.tsx.

### Pass

- Automated test/QA so sánh bốn vị trí.
- Gọi và mở Zalo đúng.

## 5.3. Bằng chứng thật

### Assets

    public/images/trust/

Chỉ thêm file có quyền:

- team.webp.
- office.webp.
- authorization-redacted.webp/pdf nếu được phép.

Mỗi evidence có:

- Caption chính xác.
- Ngày chụp/cập nhật.
- Nguồn.
- Alt text.
- Trạng thái phê duyệt.

Không thêm rating schema hoặc testimonial khi chưa có dữ liệu và sự đồng ý.

## 5.4. Giá và cam kết nhất quán

### Xóa/đổi trước khi có xác nhận

- “Miễn phí lắp đặt, hòa mạng”.
- “Được chọn nhiều nhất”.
- “Cam kết chất lượng đường truyền”.
- “Kỹ thuật viên có mặt nhanh”.
- “Loại bỏ điểm chết Wi-Fi”.
- “Ổn định mọi lúc mọi nơi”.
- “Không giới hạn” nếu catalog không dùng thuật ngữ đó.

### Copy an toàn hơn

- “Kiểm tra phí và điều kiện theo địa chỉ”.
- “Gợi ý cho nhà nhiều tầng” nếu dựa trên nhu cầu.
- “Hỗ trợ mở rộng vùng phủ WiFi”.
- “Tiếp nhận yêu cầu trong giờ làm việc”.
- Tốc độ/thiết bị chỉ lấy catalog đã duyệt.

### Code

- Thay dữ liệu hard-code trong hero-section.tsx, benefit-strip.tsx, home.ts, combo-section.tsx, mesh-section.tsx và plan-card.tsx.
- FAQ lấy commercial policy.
- Metadata “từ 195.000đ” chỉ giữ khi giá được duyệt cho Ninh Bình.

## 5.5. Nhận diện Ninh Bình

Giả định repo/domain chỉ phục vụ Ninh Bình:

- / redirect vĩnh viễn đến /viettel-ninh-binh.
- defaultMetadata và seoConfig dùng ninhBinhMarket.
- manifest dùng Ninh Bình, start_url là /viettel-ninh-binh.
- sitemap bỏ trang Đà Nẵng, thêm sáu trust pages.
- Structured data và areaServed dùng dữ liệu Ninh Bình đã duyệt.
- Xóa “và các tỉnh khác” khỏi H1.
- Xóa nội dung public Đà Nẵng.
- Sau khi xác nhận không cần multi-market, xóa daNangMarket/daNangRegions hoặc cô lập khỏi bundle public/API.

Nếu cần giữ nhiều thị trường, phải dùng domain/host-based config riêng; không để domain Ninh Bình có root Đà Nẵng.

## 5.6. Địa giới hiện hành

- Thay 23 huyện/thành phố cũ bằng 129 xã/phường hiện hành từ nguồn Chính phủ.
- Không bỏ hành vi tìm tên cũ.
- Đổi SearchableSelect từ string sang RegionOption:
  - value/label là đơn vị hiện hành.
  - aliases/searchTerms chứa tên địa danh cũ.
- Server whitelist value hiện hành.
- Telegram/CRM lưu cả regionId và label.

Tên cũ phục vụ tìm kiếm, không được submit như địa giới chính thức.

## 5.7. Đồng thuận dữ liệu

- Thêm consent checkbox vào LeadForm và QuickLeadForm.
- Schema client/server cùng validate.
- Payload có policyVersion, consentedAt.
- Form có link /chinh-sach-bao-mat.
- Không dùng một consent để ép nhận marketing.
- Chính sách phải nói rõ Telegram/CRM/analytics thực tế.
- Xoay Telegram bot token trước production vì token đã xuất hiện trong output audit nội bộ.

## 5.8. Cam kết có thể kiểm chứng

Tạo claim inventory trước code:

| Claim | Nguồn | Người duyệt | Hiệu lực | Nơi dùng |
| ----- | ----- | ----------- | -------- | -------- |

Quy tắc:

- Không nguồn: không hiển thị.
- Hết hiệu lực: ẩn.
- Có điều kiện: điều kiện ở gần claim.
- Popular/review: cần dữ liệu thật.
- Thời gian phản hồi/lắp: cần dashboard chứng minh.

---

## 6. SEO và structured data

Mỗi page:

- Metadata title/description riêng.
- Canonical chính xác.
- Một H1.
- Open Graph image tồn tại.
- Breadcrumb hiển thị.
- Internal links đến landing và các policy liên quan.
- Server-rendered content.

Sitemap:

- /viettel-ninh-binh priority chính.
- /gioi-thieu và /lien-he.
- Bốn trang policy với priority thấp hơn.
- Không có URL Đà Nẵng.

Structured data:

- Organization: đơn vị vận hành thật.
- ContactPage cho /lien-he.
- WebPage/AboutPage khi phù hợp.
- Không khai LocalBusiness nếu không có địa điểm kinh doanh thật.
- Không khai review/rating.
- Không dùng logo/brand relation không được phép.

---

## 7. Chia phase triển khai

## Phase 0 — Business/legal sign-off

**Owner:** chủ website + người phụ trách pháp lý/kinh doanh
**Thời lượng:** 0,5–2 ngày tùy dữ liệu

Deliverables:

- Hồ sơ operator.
- Câu chữ quan hệ Viettel.
- Contact sheet.
- Commercial policy.
- Data-flow inventory.
- Complaint SLA.
- Evidence assets.

Gate: không bắt đầu copy production khi dữ liệu cốt lõi còn thiếu.

## Phase 1 — Foundation và nhận diện

**Ước lượng:** 0,5–1 ngày

- business.ts.
- commercial-policy.ts.
- Root redirect.
- SEO/manifest/sitemap Ninh Bình.
- Phone/Zalo/JSON-LD single source.
- Footer link model.
- Gỡ dummy links.

Gate:

- Không còn nhận diện Đà Nẵng public.
- Contact consistency test đạt.

## Phase 2 — Sáu trust pages

**Ước lượng:** 1,5–2 ngày

- TrustPageShell.
- Sáu route.
- Metadata/canonical.
- Breadcrumb/internal links.
- Page-specific semantic content.
- Contact CTA.

Gate:

- Sáu page trả 200.
- Nội dung được owner/legal duyệt.
- Không placeholder.

## Phase 3 — Landing trust remediation

**Ước lượng:** 1–1,5 ngày

- Operator disclosure.
- Claim cleanup.
- Commercial policy integration.
- Privacy consent trên hai form.
- Footer trust links.
- Evidence section nếu có asset thật.
- Localize hero và địa giới.

Gate:

- Không claim mâu thuẫn.
- Form consent chạy client/server.
- Region hiện hành.

## Phase 4 — Consent/tracking integration

**Ước lượng:** 0,5–1 ngày, chưa gồm CRM lớn

- Cookie/analytics choice.
- Consent state.
- GTM/GA/Meta behavior theo consent.
- Không PII trong analytics.
- Lưu policy version/time với lead.

Gate:

- Tag Assistant xác nhận không bắn tag trái lựa chọn.
- Form conversion chỉ sau lead accepted thật khi tracking được triển khai.

## Phase 5 — QA và release

**Ước lượng:** 0,5–1 ngày

- Type/lint/format/build.
- Mobile/desktop.
- Keyboard/screen reader basics.
- Metadata/JSON-LD.
- Link checker.
- Live 200/HTTPS.
- Legal/business sign-off cuối.

Tổng thời gian code/QA dự kiến: 4–6 ngày làm việc sau khi nhận đủ dữ liệu, chưa tính thời gian xin giấy tờ/duyệt pháp lý.

---

## 8. File dự kiến tạo/sửa

### Tạo

- src/app/(trust)/layout.tsx
- src/app/(trust)/gioi-thieu/page.tsx
- src/app/(trust)/lien-he/page.tsx
- src/app/(trust)/chinh-sach-bao-mat/page.tsx
- src/app/(trust)/dieu-khoan-su-dung/page.tsx
- src/app/(trust)/chinh-sach-dang-ky-lap-dat/page.tsx
- src/app/(trust)/quy-trinh-giai-quyet-khieu-nai/page.tsx
- src/components/content/trust-page-shell.tsx
- src/config/business.ts
- src/config/commercial-policy.ts
- public/images/trust/* chỉ khi có asset thật

### Sửa

- src/app/page.tsx
- src/app/manifest.ts
- src/app/sitemap.ts
- src/config/seo.ts
- src/config/site.ts
- src/config/markets.ts
- src/config/market-types.ts nếu bỏ Đà Nẵng
- src/data/regions.ts
- src/data/home.ts
- src/lib/seo.ts
- src/lib/structured-data.tsx
- src/components/home/hero-section.tsx
- src/components/home/benefit-strip.tsx
- src/components/home/combo-section.tsx
- src/components/home/mesh-section.tsx
- src/components/home/plan-card.tsx
- src/components/home/market-landing-page.tsx
- src/components/layout/site-footer.tsx
- src/features/leads/lead-schema.ts
- src/features/leads/lead-form.tsx
- src/features/leads/quick-lead-form.tsx
- src/features/leads/submit-lead.ts
- src/app/api/leads/route.ts
- .env.example nếu còn biến public cần thiết

Không thêm dependency mới cho phần trust pages.

---

## 9. Test plan

## 9.1. Automated

Chạy:

    pnpm type-check
    pnpm lint
    pnpm format:check
    pnpm build

Thêm test phù hợp nếu dự án có test runner; nếu chưa có, không cài cả test stack chỉ cho nội dung tĩnh. Có thể tạo validation thuần TypeScript cho:

- Commercial policy còn hiệu lực.
- Contact fields hợp lệ.
- Phone display/tel/E.164 cùng nguồn.
- Không promotion hết hạn.

## 9.2. Route/SEO

- Sáu route + landing trả 200.
- / redirect đúng.
- Canonical đúng.
- Sitemap không có Đà Nẵng.
- OG image trả 200.
- Một H1 mỗi page.
- Structured data parse được.
- Không Organization giả danh Viettel.

## 9.3. Content

Tìm toàn repo:

- “Đà Nẵng”.
- “Miễn phí lắp đặt”.
- “Được chọn nhiều nhất”.
- “Loại bỏ điểm chết”.
- Số điện thoại hard-code.
- Link #faq dùng thay privacy.
- Link #coverage dùng thay terms.

Mọi kết quả còn lại phải có chủ đích và được duyệt.

## 9.4. Forms/data

Cases:

1. Submit thiếu consent.
2. Submit hợp lệ.
3. Consent version/time được lưu.
4. District alias tìm được nhưng value submit là địa giới hiện hành.
5. Bot honeypot không tạo lead/conversion.
6. API error không mất nội dung form vô lý.
7. Telegram lỗi không được giả báo success; khi có CRM, lead vẫn được lưu.
8. Không có PII trong dataLayer/network analytics.

## 9.5. UX/accessibility

- Mobile 360/390/430px.
- Desktop 1280/1440px.
- Keyboard toàn bộ navigation/form.
- Focus-visible.
- Heading order.
- Label/error/aria-describedby.
- Contrast WCAG AA.
- Floating phone/Zalo không che consent hoặc nút submit.
- Chính sách dài vẫn đọc được, có mục lục hợp lý.

## 9.6. Manual trust review

Một người chưa biết dự án phải trả lời được trong 30 giây:

1. Ai vận hành?
2. Có quan hệ gì với Viettel?
3. Ai sẽ nhận dữ liệu?
4. Giá/phí áp dụng khi nào?
5. Khi có vấn đề liên hệ ai?
6. Làm sao yêu cầu xóa dữ liệu?

Nếu không trả lời được, trust chưa đạt.

---

## 10. Definition of Done

Chỉ coi là hoàn thành khi:

- Sáu trang có nội dung thật và được duyệt.
- Không còn dummy footer links.
- Root/SEO/manifest/sitemap không còn xung đột Đà Nẵng.
- Operator identity xuất hiện rõ trên About, Contact, Footer và JSON-LD.
- Quan hệ Viettel đúng tài liệu.
- Phone/Zalo/address/hours đồng nhất.
- Price/fee/promotion từ một source có hiệu lực.
- Không còn claim không chứng minh được.
- Form có consent đúng và link privacy.
- Chính sách bảo mật phản ánh flow dữ liệu thật.
- 129 xã/phường hiện hành được dùng; tên cũ chỉ là alias.
- Type-check, lint, format và build đạt.
- Mobile, desktop, keyboard và links đã test.
- Người phụ trách kinh doanh và pháp lý ký duyệt.
- Chỉ sau đó mới dùng /viettel-ninh-binh làm destination Google Ads.

---

## 11. Lưu ý pháp lý ngoài code

- Luật Bảo vệ dữ liệu cá nhân số 91/2025/QH15 có hiệu lực từ 01/01/2026.
- Nghị định 356/2025/NĐ-CP quy định chi tiết một số nội dung về bảo vệ dữ liệu cá nhân; consent không được tick sẵn, cần tách mục đích tư vấn hiện tại với marketing và lưu bằng chứng đồng ý.
- Luật Thương mại điện tử 122/2025/QH15 và Nghị định 248/2026/NĐ-CP có hiệu lực từ 01/07/2026. Website cung ứng/xúc tiến dịch vụ có thể thuộc diện phải thực hiện thủ tục thương mại điện tử tùy mô hình. Chủ website cần xác nhận với người phụ trách pháp lý và Bộ Công Thương/online.gov.vn.
- Nếu form chỉ tạo yêu cầu tư vấn, UI và response phải nói đúng là “yêu cầu tư vấn/kiểm tra hạ tầng”, không nói đã tạo hợp đồng.
- Nếu form thực sự tạo đơn hàng/hợp đồng, cần bổ sung bước cho khách xem lại, sửa, xác nhận và lưu/tải nội dung giao dịch theo yêu cầu được pháp lý xác nhận.
- Chỉ hiển thị logo “Đã thông báo/đăng ký Bộ Công Thương” sau khi thủ tục thật sự hoàn tất.
- Nội dung trong code không thay thế tư vấn pháp lý chuyên nghiệp.

Nguồn tham khảo chính thức:

- https://vanban.chinhphu.vn/?docid=214590&pageid=27160
- https://vanban.chinhphu.vn/?classid=1&docid=216387&pageid=27160
- https://vanban.chinhphu.vn/?classid=1&docid=216503&pageid=27160&typegroupid=3
- https://vanban.chinhphu.vn/?docid=218747&orggroupid=2&pageid=27160
- https://vanban.chinhphu.vn/?docid=208363&pageid=27160
- https://xaydungchinhsach.chinhphu.vn/nhung-quy-dinh-dang-chu-y-trong-luat-bao-ve-du-lieu-ca-nhan-2025-119251225084154179.htm
- https://moit.gov.vn/tin-tuc/bao-chi-voi-nguoi-dan/doanh-nghiep-can-luu-y-khi-dang-ky-thong-bao-website-thuong-mai-dien-tu-voi-bo-cong-thuong.html
