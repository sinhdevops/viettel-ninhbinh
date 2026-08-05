'use client';

import { Button, type ButtonProps } from '@/components/ui/button';
import type { ServiceValue } from '@/data/home';

import { useLeadSelection } from './lead-selection-context';

interface PlanSelectionButtonProps extends Omit<ButtonProps, 'asChild' | 'onClick' | 'type'> {
  service: ServiceValue;
  plan?: string;
}

function PlanSelectionButton({ service, plan, children, ...props }: PlanSelectionButtonProps) {
  const { selectPlan } = useLeadSelection();
  const searchParams = new URLSearchParams({ service });
  if (plan) searchParams.set('plan', plan);

  return (
    <Button asChild {...props}>
      <a
        href={`/?${searchParams.toString()}#coverage`}
        onClick={(event) => {
          event.preventDefault();
          selectPlan(service, plan);
        }}
      >
        {children}
      </a>
    </Button>
  );
}

export { PlanSelectionButton };
