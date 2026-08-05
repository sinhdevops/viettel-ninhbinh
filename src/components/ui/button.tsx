import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm font-bold whitespace-nowrap transition-[color,background-color,border-color,box-shadow,transform] outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/15 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/15 [&_svg]:pointer-events-none [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        primary:
          'bg-primary text-primary-foreground shadow-primary hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-primary-hover',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/75',
        outline:
          'border border-primary bg-background text-primary hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground',
        ghost: 'text-foreground hover:bg-accent hover:text-accent-foreground',
        destructive:
          'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        sm: 'h-9 px-4 text-xs [&_svg:not([class*=size-])]:size-4',
        default: 'h-11 px-5 [&_svg:not([class*=size-])]:size-4',
        lg: 'h-12 px-6 text-base [&_svg:not([class*=size-])]:size-5',
        icon: 'size-11 p-0 [&_svg:not([class*=size-])]:size-5',
        'icon-sm': 'size-9 p-0 [&_svg:not([class*=size-])]:size-4',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
);

type ButtonProps = React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) {
  const Component = asChild ? Slot : 'button';

  return (
    <Component
      data-slot="button"
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { Button, buttonVariants };
export type { ButtonProps };
