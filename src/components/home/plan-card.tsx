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
        className
      )}
    >
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
        aria-label={`Chọn gói ${plan.name}`}
        variant="outline"
        className="mt-5 w-full"
      >
        Chọn gói này
      </PlanSelectionButton>
    </Card>
  );
}

export { PlanCard };
