import { Container } from '@/components/layout/container';
import type { MarketConfig } from '@/config/markets';
import { QuickLeadForm } from '@/features/leads/quick-lead-form';

interface BottomCtaProps {
  market: MarketConfig;
}

function BottomCta({ market }: BottomCtaProps) {
  return (
    <section id="quick-register" className="scroll-mt-24 pb-16 sm:pb-20">
      <Container>
        <div className="grid items-center gap-6 rounded-2xl bg-[linear-gradient(105deg,#e50012,#fa1526)] px-5 py-7 text-white shadow-[0_16px_38px_rgb(230_0_18/20%)] sm:px-8 lg:grid-cols-[0.8fr_1.6fr] lg:gap-8">
          <div>
            <h2 className="text-xl font-black">Gửi yêu cầu kiểm tra hạ tầng</h2>
            <p className="mt-1 text-sm text-white/85">
              Chưa phát sinh hợp đồng hoặc chi phí khi gửi thông tin
            </p>
          </div>
          <QuickLeadForm market={market} />
        </div>
      </Container>
    </section>
  );
}

export { BottomCta };
