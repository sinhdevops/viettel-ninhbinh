import { cn } from '@/lib/utils';

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'border-input bg-background text-foreground placeholder:text-muted-foreground file:text-foreground focus-visible:border-ring focus-visible:ring-ring/10 disabled:bg-muted aria-invalid:border-destructive aria-invalid:ring-destructive/10 flex h-11 w-full min-w-0 rounded-md border px-3.5 py-2 text-sm shadow-xs transition-[color,box-shadow,border-color] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-3 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-60 aria-invalid:ring-3 md:text-sm',
        className
      )}
      {...props}
    />
  );
}

export { Input };
