import { ChevronDownIcon } from 'lucide-react';

import { internetPlans } from '@/data/home';
import { cn } from '@/lib/utils';

interface ComparisonTableProps {
  className?: string;
}

function ComparisonTable({ className }: ComparisonTableProps) {
  const displayedPlans = internetPlans.slice(0, 3);
  return (
    <div className={cn('overflow-x-auto rounded-xl border border-red-100', className)}>
      <table className="w-full min-w-[760px] border-collapse text-xs">
        <thead>
          <tr>
            <th className="bg-[#17243a] px-4 py-3 text-left font-extrabold text-white">Gói cước</th>
            {displayedPlans.map((plan) => (
              <th
                key={plan.id}
                className={cn(
                  'bg-primary text-primary-foreground px-4 py-3 text-center font-extrabold'
                )}
              >
                {plan.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="bg-accent text-accent-foreground border-t border-red-100 px-4 py-3 text-left font-extrabold">
              Tốc độ
            </th>
            {displayedPlans.map((plan) => (
              <td
                key={plan.id}
                className="bg-card border-t border-l border-red-100 px-4 py-3 text-center"
              >
                {plan.speed}
              </td>
            ))}
          </tr>
          <tr>
            <th className="bg-accent text-accent-foreground border-t border-red-100 px-4 py-3 text-left font-extrabold">
              Thiết bị
            </th>
            {displayedPlans.map((plan) => (
              <td
                key={plan.id}
                className="bg-card border-t border-l border-red-100 px-4 py-3 text-center"
              >
                {plan.features[0]}
              </td>
            ))}
          </tr>
          <tr>
            <th className="bg-accent text-accent-foreground border-t border-red-100 px-4 py-3 text-left font-extrabold">
              Giá cước
            </th>
            {displayedPlans.map((plan) => (
              <td
                key={plan.id}
                className="bg-card text-primary border-t border-l border-red-100 px-4 py-3 text-center font-black"
              >
                {plan.price}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function InternetComparison() {
  return (
    <>
      <details className="group bg-card mt-8 rounded-2xl border border-red-100 p-4 shadow-[0_12px_35px_rgb(230_0_18/7%)] md:hidden">
        <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-3 font-extrabold [&::-webkit-details-marker]:hidden">
          So sánh nhanh các gói
          <ChevronDownIcon className="text-primary size-5 transition-transform group-open:rotate-180" />
        </summary>
        <ComparisonTable className="mt-4" />
      </details>

      <div className="bg-card mt-8 hidden rounded-2xl border border-red-100 p-6 shadow-[0_12px_35px_rgb(230_0_18/7%)] md:block">
        <h3 className="text-foreground mb-4 text-lg font-black">So sánh nhanh các gói Internet</h3>
        <ComparisonTable />
      </div>
    </>
  );
}

export { InternetComparison };
