import { cn } from '@/lib/utils';

interface FormLabelProps extends React.ComponentProps<'label'> {
  isRequired?: boolean;
}

function FormLabel({ children, className, isRequired = false, ...props }: FormLabelProps) {
  return (
    <label className={cn('text-foreground mb-1.5 block text-xs font-bold', className)} {...props}>
      {children}
      {isRequired && (
        <>
          <span className="text-destructive ml-0.5" aria-hidden="true">
            *
          </span>
          <span className="sr-only"> (bắt buộc)</span>
        </>
      )}
    </label>
  );
}

export { FormLabel };
