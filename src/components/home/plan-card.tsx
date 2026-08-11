import { CheckIcon } from 'lucide-react';

import { Card } from '@/components/ui/card';
import type { InternetPlan, ServiceValue } from '@/data/home';
import { PlanSelectionButton } from '@/features/leads/plan-selection-button';
import { cn } from '@/lib/utils';

interface PlanCardProps {
  plan: InternetPlan;
  service: ServiceValue;
  className?: string;
}

function PlanCard({ plan, service, className }: PlanCardProps) {
  return (
    <Card
      className={cn(
        'relative max-w-[22rem] min-w-[82vw] snap-center gap-0 overflow-visible rounded-2xl px-5 py-6 shadow-[0_12px_34px_rgb(17_38_63/7%)] md:max-w-none md:min-w-0',
        plan.popular && 'border-primary shadow-[0_18px_45px_rgb(230_0_18/12%)] md:-translate-y-1',
        className
      )}
    >
      {plan.popular && (
        <span className="bg-primary text-primary-foreground shadow-primary absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1.5 text-[0.6875rem] font-extrabold whitespace-nowrap">
          Gói nổi bật
        </span>
      )}

      <h3 className="text-muted-foreground text-center text-xs font-extrabold tracking-[0.12em] uppercase">
        {plan.name}
      </h3>
      <p className="text-card-foreground mt-2 min-h-14 text-center text-xl leading-tight font-black">
        {plan.speed}
      </p>

      <ul className="my-6 grid gap-3">
        {plan.features.map((feature) => (
          <li
            key={feature}
            className="text-foreground/70 flex items-start gap-2.5 text-sm leading-relaxed"
          >
            <CheckIcon className="mt-0.5 size-4 shrink-0 text-emerald-600" aria-hidden="true" />
            {feature}
          </li>
        ))}
      </ul>

      <div className="mt-auto text-center">
        <strong className="text-foreground text-2xl font-black tracking-tight">{plan.price}</strong>
        <span className="text-muted-foreground text-xs">/tháng</span>
      </div>

      <PlanSelectionButton
        service={service}
        plan={plan.id}
        aria-label={`Đăng ký gói ${plan.name}`}
        variant={plan.popular ? 'primary' : 'outline'}
        className="mt-5 w-full"
      >
        Đăng ký ngay
      </PlanSelectionButton>
    </Card>
  );
}

export { PlanCard };
