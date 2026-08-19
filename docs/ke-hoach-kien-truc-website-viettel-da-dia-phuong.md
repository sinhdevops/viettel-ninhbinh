# KẾ HOẠCH KIẾN TRÚC WEBSITE VIETTEL ĐA ĐỊA PHƯƠNG

**Ngày lập:** 12/08/2026
**Mục tiêu:** Xây dựng một website Viettel tổng quát ở trang chủ, có các trang dịch vụ toàn quốc và các landing page địa phương độc lập để SEO/chạy Google Ads bằng đúng URL của từng tỉnh.

## 1. Chốt lại mô hình đúng

Website không lấy Ninh Bình, Đà Nẵng hoặc bất kỳ địa phương nào làm ngữ cảnh mặc định.

- `/` là trang chủ Viettel tổng quát.
- `/viettel-ninh-binh` là landing page riêng cho Ninh Bình.
- `/viettel-da-nang` là landing page riêng cho Đà Nẵng.
- Mỗi page có SEO, nội dung, FAQ, ảnh chia sẻ, schema và form mang đúng ngữ cảnh của page đó.
- Khi chạy Google Ads Ninh Bình, final URL là `/viettel-ninh-binh`, không dùng Home.
- Slug dùng chữ thường, không dấu: `/viettel-ninh-binh`, không dùng `/viettel-ninh-bình`.

Website chỉ tập trung vào các nhóm dịch vụ:

1. Internet cáp quang.
2. Truyền hình/TV360 và combo Internet + TV.
3. Camera.
4. Internet và giải pháp cho doanh nghiệp.

Không đưa SIM, di động, điện thoại hoặc thiết bị bán lẻ vào Home nếu chưa nằm trong định hướng kinh doanh.

## 2. Sơ đồ URL

### Trang chung

| URL                      | Vai trò                             |
| ------------------------ | ----------------------------------- |
| `/`                      | Trang chủ Viettel tổng quát         |
| `/internet-viettel`      | Trang dịch vụ Internet toàn quốc    |
| `/truyen-hinh-viettel`   | Trang TV360/combo truyền hình       |
| `/camera-viettel`        | Trang dịch vụ camera                |
| `/internet-doanh-nghiep` | Trang gói và giải pháp doanh nghiệp |

### Landing địa phương

| URL                     | Mục đích                                     |
| ----------------------- | -------------------------------------------- |
| `/viettel-ninh-binh`    | SEO và Google Ads Ninh Bình                  |
| `/viettel-da-nang`      | SEO và Google Ads Đà Nẵng                    |
| `/viettel-<tinh-thanh>` | Mẫu URL cho địa phương được xuất bản sau này |

### Trang trust dùng chung toàn site

- `/gioi-thieu`
- `/lien-he`
- `/chinh-sach-bao-mat`
- `/dieu-khoan-su-dung`
- `/chinh-sach-dang-ky-lap-dat`
- `/quy-trinh-giai-quyet-khieu-nai`

Các trang trust không gắn với Ninh Bình hoặc Đà Nẵng. Chúng đại diện cho đơn vị vận hành toàn website.

## 3. Cấu trúc trang chủ `/`

Home là một “cổng dịch vụ” giống tư duy của website Viettel trong ảnh tham khảo, nhưng gọn hơn và chỉ giữ những nhóm dịch vụ đang bán.

### Thứ tự section đề xuất

1. **Header chung**
   - Logo về `/`.
   - Menu: Internet, Truyền hình, Camera, Doanh nghiệp, Khu vực lắp đặt, Hỗ trợ.
   - CTA gọi điện/Zalo/Đăng ký.

2. **Hero tổng quát**
   - H1 không chứa tỉnh thành.
   - Thông điệp: đăng ký Internet, truyền hình, camera và giải pháp doanh nghiệp Viettel.
   - CTA “Xem gói dịch vụ” và “Chọn khu vực lắp đặt”.

3. **Danh mục dịch vụ**
   - Bốn card: Internet, TV360, Camera, Doanh nghiệp.
   - Mỗi card dẫn đến trang dịch vụ tương ứng.

4. **Gói nổi bật**
   - Tabs theo nhóm dịch vụ.
   - Giá/gói lấy từ catalog dùng chung, không gắn tỉnh nếu chưa có chính sách theo tỉnh.
   - Luôn có ghi chú cần xác nhận theo hạ tầng và thời điểm đăng ký.

5. **Combo Internet – Truyền hình – Camera**
   - Giải thích nhu cầu phù hợp thay vì chỉ liệt kê giá.

6. **Giải pháp doanh nghiệp**
   - Internet doanh nghiệp, IP tĩnh và nhóm giải pháp liên quan có thật.

7. **Quy trình đăng ký**
   - Gửi nhu cầu → kiểm tra hạ tầng → xác nhận giá/thiết bị → hẹn lắp → bàn giao.

8. **Khu vực lắp đặt**
   - Danh sách/chọn tỉnh đã có landing page.
   - Link trực tiếp đến `/viettel-ninh-binh`, `/viettel-da-nang`.
   - Không tạo hàng loạt page tỉnh chưa có nội dung thực.

9. **Khối trust**
   - Vai trò đơn vị vận hành, điện thoại, Zalo, quy trình xử lý dữ liệu và liên kết chính sách.

10. **FAQ tổng quát và CTA cuối trang**
    - Câu hỏi chung về quy trình, phí, thiết bị và hỗ trợ.
    - Nếu dùng form trên Home, bắt buộc khách chọn tỉnh/thành; không tự gán một market.

## 4. Cấu trúc landing địa phương

Mỗi địa phương dùng chung một bộ component nhưng có content riêng. Không được tạo page bằng cách chỉ thay chữ “Ninh Bình” thành “Đà Nẵng”.

### Flow đề xuất cho `/viettel-ninh-binh`

1. Hero với H1, mô tả và CTA riêng cho Ninh Bình.
2. Form kiểm tra hạ tầng đã khóa market Ninh Bình.
3. Lợi ích và điểm khác biệt phù hợp nhu cầu tại địa phương.
4. Gói Internet có thể đăng ký tại khu vực.
5. Combo Internet + TV360.
6. Camera.
7. Gói doanh nghiệp.
8. Danh sách huyện/xã/phường hoặc nhóm khu vực phục vụ.
9. Quy trình kiểm tra hạ tầng và lắp đặt tại Ninh Bình.
10. Chính sách chi phí/thiết bị/khuyến mại áp dụng tại thời điểm đăng ký.
11. FAQ riêng của Ninh Bình.
12. CTA gọi, Zalo và form cuối trang.

Đà Nẵng có cùng bộ khung nhưng phải có intro, khu vực, FAQ, bằng chứng và nội dung địa phương riêng.

## 5. Kiến trúc source code

```text
src/
  app/
    page.tsx                         # Home tổng quát
    (services)/
      internet-viettel/page.tsx
      truyen-hinh-viettel/page.tsx
      camera-viettel/page.tsx
      internet-doanh-nghiep/page.tsx
    (locations)/
      [locationSlug]/page.tsx        # Renderer landing địa phương
    (trust)/                         # Các page trust dùng chung
  content/
    site.ts                          # Nội dung chung của Home
    services/
      internet.ts
      television.ts
      camera.ts
      business.ts
    locations/
      types.ts
      registry.ts
      viettel-ninh-binh.ts
      viettel-da-nang.ts
  components/
    home/                            # Section chỉ thuộc Home
    services/                        # Section trang dịch vụ
    locations/                       # Section/renderer landing địa phương
    forms/
    layout/
    tracking/
  config/
    site.ts                          # Identity, menu, contact chung
    commercial-policy.ts
```

Route động chỉ nhận slug nằm trong registry bằng `generateStaticParams()` và `dynamicParams = false`. URL lạ phải trả 404. Route tĩnh của service/trust vẫn được ưu tiên bình thường.

## 6. Mô hình content “giống WordPress”

Mỗi page địa phương là một content record độc lập:

```ts
interface LocationPageContent {
  slug: `viettel-${string}`;
  marketId: string;
  status: 'draft' | 'adsOnly' | 'indexed';
  locationName: string;
  areaServed: readonly string[];
  seo: {
    title: string;
    description: string;
    keywords: readonly string[];
    ogImage: string;
    noIndex?: boolean;
    lastModified: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    highlights: readonly string[];
  };
  enabledServices: readonly string[];
  coverageContent: readonly string[];
  localIntroduction: readonly string[];
  faq: readonly { question: string; answer: string }[];
}
```

Nguyên tắc nguồn dữ liệu:

- Catalog gói cước dùng chung chỉ khai báo một lần.
- Page địa phương tham chiếu ID gói và chỉ override khi chính sách địa phương thực sự khác.
- SEO/content dài nằm trong file content hoặc MDX, không nằm trong `.env`.
- `.env` chỉ dành cho domain, số điện thoại, Zalo, thông tin đơn vị vận hành, mã tracking và secret.
- Sau này có thể thay nguồn content local bằng headless CMS mà không đổi renderer.

## 7. SEO riêng cho từng page

### Home

- Title, description và H1 mang ý định dịch vụ Viettel tổng quát.
- Canonical tự trỏ `/`.
- Không chứa Ninh Bình/Đà Nẵng trong metadata mặc định.

### Trang dịch vụ

- Mỗi service có title/H1/content riêng theo đúng search intent.
- Ví dụ `/camera-viettel` không dùng title hoặc FAQ của Internet.

### Trang địa phương

- Title, description, H1, intro, FAQ, coverage và CTA riêng.
- Canonical tự trỏ đúng URL sạch.
- OG image riêng và phải tồn tại thật.
- Query UTM/GCLID không tạo canonical mới.
- Page chưa đủ content đặt `noIndex` và không đưa vào sitemap.
- Page `adsOnly` vẫn truy cập trực tiếp để chạy quảng cáo nhưng đặt `noIndex`; chỉ page `indexed` mới vào sitemap.

### Structured data

- Toàn site: `Organization` và `WebSite` với `@id` cố định theo domain.
- Home/service: `WebPage` và `Service` phù hợp.
- Landing địa phương: `WebPage`, `Service`, `BreadcrumbList`; `areaServed` đúng địa phương.
- Chỉ thêm `FAQPage` khi FAQ thực sự hiển thị.
- Không khai báo rating, review, địa chỉ, giá hoặc `LocalBusiness` khi chưa có căn cứ.

### Tránh SEO rác/doorway page

- Không sinh tự động 63 page chỉ bằng cách thay tên tỉnh.
- Mỗi page cần thông tin khu vực, nội dung, FAQ, hạ tầng/quy trình và bằng chứng riêng.
- Các page địa phương phải được liên kết từ mục “Khu vực lắp đặt”, không tồn tại như các page mồ côi chỉ dành cho Ads.

## 8. Cách dùng URL cho Google Ads

Ví dụ chiến dịch Ninh Bình:

```text
Final URL:
https://ten-mien-chung.vn/viettel-ninh-binh

Tracking template/Final URL suffix:
utm_source=google&utm_medium=cpc&utm_campaign=viettel_ninh_binh&utm_content={creative}&utm_term={keyword}
```

- Không đưa quảng cáo Ninh Bình về Home vì độ liên quan thấp hơn.
- Form trên landing tự gắn `marketId=ninh-binh`.
- Lưu `landingPath`, UTM, GCLID/GBRAID/WBRAID và referrer cùng lead.
- Chỉ bắn conversion khi server chấp nhận lead thật.
- Click gọi điện/Zalo là conversion phụ; lead đủ điều kiện hoặc lắp đặt thành công mới là conversion chính để tối ưu sâu.

## 9. Những thay đổi cần làm từ code hiện tại

1. Tách `/` khỏi `MarketLandingPage`; tạo `GlobalHomePage` riêng.
2. Cập nhật `AGENTS.md` để thương hiệu mặc định là site Viettel tổng quát, không còn bắt buộc “Viettel Ninh Bình”.
3. Đổi `daNangMarket.path` từ `/` thành `/viettel-da-nang`.
4. Giữ Ninh Bình ở `/viettel-ninh-binh`.
5. Mở rộng kiểu `MarketConfig.path`, không hard-code union chỉ có `/` và Ninh Bình.
6. Chuyển registry market hiện tại thành location content registry.
7. Đổi header/footer/logo để hoạt động được cả chế độ site chung và page địa phương.
8. Đổi SEO mặc định, manifest và JSON-LD sang identity chung, không import market làm mặc định.
9. Sinh sitemap từ Home + service pages + location registry + trust pages.
10. Form trên Home phải chọn tỉnh; form location tự điền market.
11. API lead cần xác thực đúng location/region và ghi nhận nguồn page/tracking.

## 10. Thứ tự triển khai

### Giai đoạn 1 — Nền tảng

- Chốt domain và identity chung.
- Tạo service catalog, location content type và registry.
- Refactor SEO/site config về trung lập.

### Giai đoạn 2 — Home tổng quát

- Xây Home mới theo 10 section.
- Header/footer chung.
- Responsive, accessibility và hiệu năng ảnh.

### Giai đoạn 3 — Landing địa phương

- Migrate Ninh Bình vào content module.
- Tạo content module Đà Nẵng.
- Tạo renderer động, static params và 404 allowlist.
- Kiểm tra form đúng tỉnh và khu vực.

### Giai đoạn 4 — Trang dịch vụ và trust

- Xây bốn trang service.
- Xây sáu trang trust dùng chung.
- Thêm consent form và đồng bộ thông tin liên hệ.

### Giai đoạn 5 — Tracking và lead

- Lưu UTM/click ID/landing path.
- Conversion sau success thật.
- Tracking gọi/Zalo.
- Chuẩn bị trạng thái qualified/installed để tối ưu Ads.

### Giai đoạn 6 — QA và phát hành

- `pnpm type-check`
- `pnpm lint`
- `pnpm format:check`
- `pnpm build`
- Kiểm tra mobile/desktop, keyboard, form, 404 và console.
- Kiểm tra metadata, canonical, sitemap, robots và schema từng URL.
- Test lead từ `/`, `/viettel-ninh-binh` và `/viettel-da-nang` không lẫn market.

## 11. Tiêu chí nghiệm thu

- Home không còn từ khóa hoặc nội dung mặc định nghiêng về một tỉnh.
- `/viettel-ninh-binh` và `/viettel-da-nang` đều truy cập trực tiếp, không redirect sang nhau.
- Mỗi page có title, description, canonical, OG và H1 độc lập.
- Logo trên mọi page về `/`.
- Form Ninh Bình không gửi market Đà Nẵng và ngược lại.
- Sitemap chỉ chứa page đã publish.
- Page URL sai hoặc location chưa publish trả 404.
- Google Ads có thể dùng URL Ninh Bình kèm tracking mà canonical vẫn sạch.
- Không có claim, giá, review hoặc thông tin pháp lý chưa được xác nhận.

## 12. Quyết định cần chốt trước khi code

1. Domain production phải mang tính chung. Nếu domain vẫn chứa `ninhbinh`, kiến trúc toàn quốc sẽ thiếu nhất quán về thương hiệu và SEO.
2. Home có nhận lead trực tiếp hay chỉ dẫn khách chọn dịch vụ/khu vực.
3. Có làm đủ bốn trang service ở lần đầu hay triển khai sau Home + hai location page.
4. Nội dung địa phương quản lý bằng TypeScript data hay MDX. Khuyến nghị bắt đầu bằng TypeScript có type chặt; chuyển MDX/CMS khi đội ngũ cần tự biên tập thường xuyên.
