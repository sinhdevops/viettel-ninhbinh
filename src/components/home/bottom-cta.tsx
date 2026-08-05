import { Container } from '@/components/layout/container';
import { QuickLeadForm } from '@/features/leads/quick-lead-form';

function BottomCta() {
  return (
    <section className="pb-16 sm:pb-20">
      <Container>
        <div className="grid items-center gap-6 rounded-2xl bg-[linear-gradient(105deg,#e50012,#fa1526)] px-5 py-7 text-white shadow-[0_16px_38px_rgb(230_0_18/20%)] sm:px-8 lg:grid-cols-[0.8fr_1.6fr] lg:gap-8">
          <div>
            <h2 className="text-xl font-black">Đăng ký lắp đặt ngay</h2>
            <p className="mt-1 text-sm text-white/85">Viettel luôn sẵn sàng đồng hành cùng bạn</p>
          </div>
          <QuickLeadForm />
        </div>
      </Container>
    </section>
  );
}

export { BottomCta };
