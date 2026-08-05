# AGENTS.md

## Mục đích

Đây là bộ quy tắc bắt buộc cho mọi AI agent và mọi thay đổi mã nguồn trong dự án
`viettel-ninhbinh`. Phải đọc toàn bộ file này trước khi phân tích, đề xuất hoặc viết code.

Nếu yêu cầu của người dùng xung đột với file này, ưu tiên yêu cầu trực tiếp của người dùng.
Nếu một thư mục con có `AGENTS.md` riêng, áp dụng thêm các quy tắc của file gần mã nguồn đó nhất.

## Nguyên tắc làm việc

- Đọc cấu trúc và code liên quan trước khi sửa. Không đoán API, component hoặc convention chưa tồn tại.
- Giữ thay đổi đúng phạm vi yêu cầu; không tự ý refactor phần không liên quan.
- Ưu tiên giải pháp đơn giản, rõ ràng, dễ đọc và dễ bảo trì hơn abstraction phức tạp.
- Không sao chép logic. Khi một pattern thực sự lặp lại, tách thành component, hook hoặc utility phù hợp.
- Không tạo component/hook/helper chỉ để che giấu vài dòng code đơn giản hoặc chỉ được dùng một lần.
- Không để code chết, import thừa, log debug, TODO mơ hồ, magic number hoặc comment lặp lại điều code đã nói.
- Tên biến, hàm, type và component phải diễn đạt đúng mục đích. Code và identifier dùng tiếng Anh;
  nội dung giao diện dùng tiếng Việt tự nhiên, đúng chính tả.
- Không hard-code dữ liệu kinh doanh chưa được xác nhận như giá, khuyến mại, số điện thoại hoặc cam kết dịch vụ.
- Không thêm dependency nếu nền tảng hoặc dependency hiện có đã giải quyết tốt bài toán.
- Trước khi thêm thư viện, kiểm tra mức độ duy trì, bundle size, khả năng tree-shaking, accessibility,
  tương thích với phiên bản Next.js/React hiện tại và giấy phép sử dụng.

## Stack và kiến trúc mặc định

- Next.js App Router, React, TypeScript strict và Tailwind CSS.
- Mặc định dùng React Server Component. Chỉ thêm `'use client'` tại boundary nhỏ nhất thực sự cần
  state, effect, event handler hoặc browser API.
- Ưu tiên Server Actions hoặc Route Handler cho mutation tùy theo use case. Mọi input phải được
  kiểm tra lại ở server, kể cả khi client đã validate.
- Ưu tiên lấy dữ liệu trên server. Chỉ dùng client fetching khi cần polling, optimistic update,
  cache tương tác hoặc dữ liệu phụ thuộc trạng thái trình duyệt.
- Sử dụng `next/image`, `next/font`, `next/link`, Metadata API và các API tối ưu của Next.js đúng chỗ.
- Không dùng Pages Router, class component hoặc pattern lỗi thời cho code mới.
- Không dùng `any`. Nếu dữ liệu chưa biết kiểu, dùng `unknown` rồi thu hẹp kiểu an toàn.
- Ưu tiên type inference; chỉ khai báo type tường minh khi nó làm hợp đồng dữ liệu rõ hơn.
- Dùng named export cho component, hook và utility tái sử dụng. Route entry của Next.js được phép
  dùng default export theo convention framework.

## Tổ chức source code

Giữ cấu trúc theo trách nhiệm, không gom mọi thứ vào một component lớn:

```text
src/
  app/                    # route, layout, loading, error, metadata
  components/
    ui/                   # primitive UI tổng quát, không chứa nghiệp vụ
    layout/               # header, footer, navigation, container
    sections/             # section lớn của từng trang/landing page
    forms/                # form và field có thể tái sử dụng
    tracking/             # analytics và conversion tracking
  hooks/                  # custom client hooks có khả năng tái sử dụng
  lib/                    # utility, schema, formatter, constants, integrations
  types/                  # type dùng chung thực sự cần thiết
```

- Colocate component, schema, action và type gần feature nếu chúng chỉ thuộc một feature.
- `components/ui` chỉ chứa primitive dùng lại ở nhiều nơi; không đưa component nghiệp vụ vào đây.
- Page/layout giữ mỏng: composition và data loading, không chứa toàn bộ markup/logic của một trang dài.
- Tách component khi có trách nhiệm độc lập, được tái sử dụng, cần client boundary riêng hoặc giúp page
  dễ hiểu hơn. Không chia vụn giao diện đến mức phải nhảy qua quá nhiều file để đọc một luồng đơn giản.
- Tránh barrel export lớn vì có thể làm dependency graph khó hiểu và ảnh hưởng tree-shaking.
- Ưu tiên alias `@/` thay cho chuỗi đường dẫn tương đối dài.

## UI, design system và UX

- Giao diện phải responsive theo hướng mobile-first và hoạt động tốt ở các breakpoint phổ biến.
- Xây dựng design token nhất quán cho màu sắc, typography, spacing, radius, shadow và trạng thái tương tác.
- Tái sử dụng primitive thay vì viết lại button, input, dialog, tabs, accordion hoặc tooltip ở từng feature.
- Khi cần bổ sung UI library, ưu tiên shadcn/ui với Radix Primitives vì dễ sở hữu source và tùy biến.
  Chỉ cài component thực sự dùng, không kéo cả thư viện vào dự án.
- Icon mặc định ưu tiên `lucide-react`; không trộn nhiều bộ icon và không dùng emoji thay icon chức năng.
- Toast có thể dùng `sonner`. Animation phức tạp chỉ dùng `motion` khi CSS không đủ.
- Top loading chỉ thêm khi navigation/data transition thực sự cần phản hồi; ưu tiên giải pháp tương thích
  App Router như `nextjs-toploader` sau khi kiểm tra phiên bản hiện tại. Loading cục bộ ưu tiên
  `loading.tsx`, Suspense và skeleton đúng hình dạng nội dung.
- Mọi hành động async phải có trạng thái pending rõ ràng, chống submit lặp và có thông báo lỗi hữu ích.
- Không gây layout shift. Giữ kích thước ảnh/media, skeleton và vùng nội dung bất đồng bộ ổn định.
- Empty state, error state, disabled state, hover, focus-visible và success state phải được thiết kế đầy đủ.
- Copy giao diện ngắn gọn, rõ hành động; lỗi form phải chỉ ra cách người dùng sửa.
- Không dùng hiệu ứng hoặc animation làm chậm thao tác. Tôn trọng `prefers-reduced-motion`.

## Accessibility

- Dùng semantic HTML trước ARIA. Heading đúng thứ bậc và mỗi trang có một nội dung `h1` rõ ràng.
- Mọi chức năng phải sử dụng được bằng bàn phím; focus-visible không được bị xóa.
- Input luôn có label liên kết đúng; lỗi dùng `aria-invalid` và `aria-describedby` khi phù hợp.
- Button dùng cho hành động, link dùng cho điều hướng. Không biến `div` thành control tương tác.
- Dialog, dropdown và overlay phải quản lý focus, Escape, keyboard navigation và screen reader đúng chuẩn.
- Ảnh nội dung có alt có nghĩa; ảnh trang trí dùng alt rỗng.
- Độ tương phản và kích thước vùng chạm phải đáp ứng tối thiểu WCAG AA.

## Form: React Hook Form và Zod

- Form có logic hoặc validation phải dùng `react-hook-form` kết hợp `zod` và `@hookform/resolvers/zod`.
  Nếu dependency chưa có, chỉ cài khi bắt đầu triển khai form thực tế.
- Schema Zod là nguồn sự thật cho validation và type được suy ra bằng `z.infer`; không viết type trùng lặp.
- Schema dùng chung giữa client và server khi hợp lý, nhưng server luôn parse lại dữ liệu.
- Ưu tiên uncontrolled field và `register`. Chỉ dùng `Controller`/`useController` cho controlled component
  của bên thứ ba hoặc field thực sự cần nó.
- Dùng `FormProvider`/`useFormContext` cho form nhiều tầng; dùng `useFieldArray` cho danh sách động;
  dùng `useWatch` có chọn lọc để tránh render lại toàn form.
- Cấu hình validation mode theo trải nghiệm thực tế, tránh validate gây khó chịu ở mỗi phím gõ.
- Lỗi API phải được ánh xạ về field bằng `setError` nếu lỗi thuộc field; lỗi toàn form hiển thị ở vị trí chung.
- Submit async phải thể hiện pending bằng `formState.isSubmitting` hoặc transition phù hợp, khóa thao tác lặp
  và giữ/khôi phục dữ liệu hợp lý khi lỗi.
- Normalize dữ liệu như trim chuỗi, số điện thoại và giá trị rỗng trong schema hoặc boundary rõ ràng.
- Không tin dữ liệu form, query string, cookie, header hoặc response từ dịch vụ ngoài.

## State và data fetching

- Ưu tiên local state; sau đó mới đến URL state hoặc context. Chỉ dùng store toàn cục khi dữ liệu thực sự
  được chia sẻ qua nhiều nhánh component và các cách đơn giản hơn không phù hợp.
- Không lưu derived state nếu có thể tính trực tiếp hoặc memoize khi thực sự tốn kém.
- Không lạm dụng `useEffect`. Event logic đặt trong event handler; derived value tính trong render;
  data loading ưu tiên server hoặc thư viện chuyên dụng.
- Khi cần server-state phía client, ưu tiên TanStack Query. Khi cần URL state phức tạp, cân nhắc `nuqs`.
  Khi cần global client state nhỏ và độc lập, cân nhắc Zustand. Không cài các thư viện này theo mặc định.
- Custom hook phải có API nhỏ, tên bắt đầu bằng `use`, dependency ổn định và không che giấu side effect khó đoán.
- Chỉ dùng `useMemo`, `useCallback`, `memo` khi có lý do đo lường được hoặc cần ổn định reference;
  không thêm chúng như nghi thức tối ưu hóa.

## Performance

- Giảm JavaScript gửi xuống client: giữ Server Component mặc định và client boundary nhỏ.
- Lazy-load component nặng, widget bên thứ ba và code không cần cho lần render đầu.
- Tránh dependency lớn chỉ để dùng một tiện ích nhỏ. Import theo module có thể tree-shake.
- Ảnh phải có kích thước phù hợp, `sizes` chính xác và định dạng tối ưu. Chỉ dùng `priority`/preload cho
  tài nguyên thực sự quan trọng phía trên màn hình đầu tiên.
- Font phải giới hạn weight/subset cần thiết và tránh tải trùng.
- Tránh waterfall request; chạy tác vụ độc lập song song và đặt Suspense boundary có chủ đích.
- Cache/revalidate phải phản ánh độ mới dữ liệu. Không cache dữ liệu cá nhân hoặc dữ liệu nhạy cảm sai phạm vi.
- Script analytics/ads tải không chặn render và chỉ chạy khi có cấu hình, đồng thuận hoặc yêu cầu hợp lệ.
- Theo dõi Core Web Vitals; không đánh đổi khả năng sử dụng chỉ để đạt điểm benchmark hình thức.

## SEO và nội dung dự án

- Website mặc định dùng tiếng Việt và thương hiệu Viettel Ninh Bình.
- Mỗi route public cần metadata phù hợp, canonical chính xác và Open Graph image tồn tại thực tế.
- Structured data phải phản ánh nội dung/khả năng có thật. Không khai báo route tìm kiếm, đánh giá,
  giá hoặc thông tin doanh nghiệp không tồn tại.
- Sitemap và robots chỉ dùng một nguồn tạo rõ ràng, không để file tĩnh và route động xung đột.
- Giữ URL sạch, ổn định, chữ thường và có ý nghĩa. Nội dung quan trọng phải render được phía server.

## Bảo mật và dữ liệu

- Secret không dùng tiền tố `NEXT_PUBLIC_` và không được đưa vào client bundle hoặc commit lên Git.
- Biến môi trường public phải được coi là dữ liệu không tin cậy khi chèn vào script/URL.
- Không đưa raw user input vào `dangerouslySetInnerHTML`. Nếu bắt buộc render HTML bên ngoài, phải sanitize.
- Validate và authorize ở server cho mọi mutation; không dựa vào việc ẩn UI ở client.
- Link mở tab mới phải có `rel="noopener noreferrer"` khi phù hợp.
- Không log dữ liệu cá nhân, token, cookie, thông tin form hoặc secret.

## Tracking

- Mọi event có tên và payload nhất quán; gom helper tracking trong `src/lib` hoặc `components/tracking`.
- Tránh gửi cùng một pageview/event qua cả GTM và integration trực tiếp.
- Tracking không được làm hỏng luồng chính nếu script bên thứ ba lỗi hoặc bị chặn.
- Các CTA quan trọng cần điểm gọi event rõ ràng nhưng không trộn logic analytics sâu vào primitive UI.

## Chất lượng và kiểm tra

Trước khi bàn giao thay đổi, chạy các kiểm tra phù hợp với phạm vi:

```bash
pnpm type-check
pnpm lint
pnpm format:check
pnpm build
```

- Với thay đổi nhỏ, tối thiểu phải chạy type-check và lint. Với route, dependency, config, metadata hoặc
  thay đổi ảnh hưởng production, phải chạy build nếu môi trường cho phép.
- Test hành vi thay vì chi tiết implementation. Với logic quan trọng, bổ sung unit/integration test khi
  dự án có test runner hoặc khi việc thêm test infrastructure nằm trong phạm vi yêu cầu.
- Kiểm tra thủ công giao diện ở mobile và desktop, keyboard navigation, loading/error/empty states và console.
- Không tuyên bố đã kiểm tra thứ chưa chạy. Nếu một kiểm tra không thể chạy, nói rõ lý do.

## Quy trình khi thực hiện yêu cầu

1. Đọc `AGENTS.md`, code liên quan, dependency và trạng thái Git.
2. Xác định luồng hiện tại, phạm vi thay đổi và các edge case có ảnh hưởng người dùng.
3. Tận dụng component/pattern hiện có trước khi tạo mới.
4. Triển khai theo từng trách nhiệm nhỏ, giữ API và tên gọi dễ hiểu.
5. Kiểm tra type, lint, format và build theo mức độ rủi ro.
6. Tóm tắt phần đã thay đổi, file chính, kiểm tra đã chạy và mọi giới hạn còn lại.

## Điều cấm

- Không sửa hoặc xóa thay đổi của người dùng ngoài phạm vi nhiệm vụ.
- Không dùng `git reset --hard`, force push hoặc lệnh phá hủy dữ liệu nếu chưa được yêu cầu rõ ràng.
- Không thêm package, framework, state manager hoặc design system chỉ vì phổ biến.
- Không tạo một component khổng lồ chứa toàn bộ trang, nghiệp vụ, form và request.
- Không lạm dụng client component, context, effect, memoization hoặc global state.
- Không bỏ qua accessibility, responsive, trạng thái lỗi/loading hoặc server-side validation.
- Không để placeholder, dữ liệu giả hoặc link không tồn tại trong bản bàn giao production trừ khi người dùng
  yêu cầu rõ đó là prototype.
