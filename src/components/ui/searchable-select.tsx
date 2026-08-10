'use client';

import { CheckIcon, ChevronsUpDownIcon } from 'lucide-react';
import { useId, useState } from 'react';

import { cn } from '@/lib/utils';

import { Command, CommandEmpty, CommandInput, CommandItem, CommandList } from './command';
import { Popover, PopoverContent, PopoverTrigger } from './popover';

interface SearchableSelectProps {
  options: readonly string[];
  value?: string;
  onValueChange: (value: string) => void;
  id?: string;
  placeholder?: string;
  searchPlaceholder?: string;
  emptyMessage?: string;
  className?: string;
  disabled?: boolean;
  required?: boolean;
  'aria-label'?: string;
  'aria-describedby'?: string;
  'aria-invalid'?: boolean;
}

function normalizeSearchValue(value: string) {
  return value
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .replace(/đ/gi, 'd')
    .toLocaleLowerCase('vi')
    .trim();
}

function SearchableSelect({
  options,
  value,
  onValueChange,
  id,
  placeholder = 'Chọn một mục',
  searchPlaceholder = 'Tìm kiếm...',
  emptyMessage = 'Không tìm thấy kết quả.',
  className,
  disabled,
  required,
  ...ariaProps
}: SearchableSelectProps) {
  const [open, setOpen] = useState(false);
  const listId = useId();

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          id={id}
          type="button"
          role="combobox"
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-controls={listId}
          aria-required={required}
          disabled={disabled}
          className={cn(
            'border-input bg-background text-foreground focus-visible:border-ring focus-visible:ring-ring/10 disabled:bg-muted aria-invalid:border-destructive aria-invalid:ring-destructive/10 flex h-11 w-full items-center justify-between gap-2 rounded-md border px-3.5 text-left text-sm shadow-xs outline-none focus-visible:ring-3 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-60 aria-invalid:ring-3',
            className
          )}
          {...ariaProps}
        >
          <span className={cn('min-w-0 flex-1 truncate', !value && 'text-muted-foreground')}>
            {value || placeholder}
          </span>
          <ChevronsUpDownIcon
            className="text-muted-foreground size-4 shrink-0"
            aria-hidden="true"
          />
        </button>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        side="bottom"
        avoidCollisions={false}
        collisionPadding={12}
        className="w-[var(--radix-popover-trigger-width)] p-0"
      >
        <Command
          filter={(option, search) =>
            normalizeSearchValue(option).includes(normalizeSearchValue(search)) ? 1 : 0
          }
        >
          <CommandInput placeholder={searchPlaceholder} aria-label={searchPlaceholder} />
          <CommandList id={listId}>
            <CommandEmpty>{emptyMessage}</CommandEmpty>
            {options.map((option) => (
              <CommandItem
                key={option}
                value={option}
                onSelect={() => {
                  onValueChange(option);
                  setOpen(false);
                }}
              >
                <CheckIcon
                  className={cn(
                    'text-primary mr-2 size-4 shrink-0',
                    value === option ? 'opacity-100' : 'opacity-0'
                  )}
                  aria-hidden="true"
                />
                <span className="min-w-0 flex-1 truncate">{option}</span>
              </CommandItem>
            ))}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export { SearchableSelect };
