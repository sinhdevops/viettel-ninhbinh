import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'max-w-2xl',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className
      )}
    >
      <p className="text-primary mb-2 text-xs font-black tracking-[0.14em] uppercase">{eyebrow}</p>
      <h2 className="text-foreground text-3xl leading-tight font-black tracking-[-0.04em] sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground mt-3 text-sm leading-relaxed sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}

export { SectionHeading };
