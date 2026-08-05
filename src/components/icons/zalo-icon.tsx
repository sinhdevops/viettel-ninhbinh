import { cn } from '@/lib/utils';

function ZaloIcon({ className, ...props }: React.ComponentProps<'span'>) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        'inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-current text-[8px] font-black tracking-tight text-white',
        className
      )}
      {...props}
    >
      <span className="text-white">Zalo</span>
    </span>
  );
}

export { ZaloIcon };
