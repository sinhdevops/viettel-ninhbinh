'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { LoaderCircleIcon } from 'lucide-react';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import type { MarketConfig } from '@/config/markets';
import { cn } from '@/lib/utils';

import { leadSchema, type LeadFormValues } from './lead-schema';
import { submitLead } from './submit-lead';

const quickLeadSchema = leadSchema.pick({
  address: true,
  district: true,
  phone: true,
  website: true,
});

type QuickLeadValues = z.infer<typeof quickLeadSchema>;

interface QuickLeadFormProps {
  market: MarketConfig;
}

function QuickLeadForm({ market }: QuickLeadFormProps) {
  const [notice, setNotice] = useState<{ message: string; type: 'error' | 'success' } | null>(null);
  const form = useForm<QuickLeadValues>({
    resolver: zodResolver(quickLeadSchema),
    defaultValues: { address: '', district: '', phone: '', website: '' },
  });

  async function onSubmit(values: QuickLeadValues) {
    setNotice(null);

    try {
      const payload: LeadFormValues = {
        ...values,
        market: market.id,
        service: 'internet',
        plan: '',
      };
      const message = await submitLead(payload);
      setNotice({ message, type: 'success' });
      form.reset();
    } catch (error) {
      setNotice({
        message: error instanceof Error ? error.message : 'Chưa thể gửi thông tin lúc này.',
        type: 'error',
      });
    }
  }

  return (
    <form
      className="grid gap-2 lg:grid-cols-[1.2fr_1fr_0.85fr_auto]"
      onSubmit={form.handleSubmit(onSubmit)}
      noValidate
    >
      <Input
        required
        aria-label="Địa chỉ cần lắp đặt"
        placeholder="Nhập số nhà, tên đường"
        className="text-foreground border-0 bg-white"
        aria-invalid={Boolean(form.formState.errors.address)}
        {...form.register('address')}
      />

      <Controller
        control={form.control}
        name="district"
        render={({ field, fieldState }) => (
          <Select required value={field.value ?? ''} onValueChange={field.onChange}>
            <SelectTrigger
              aria-label="Chọn khu vực"
              aria-required="true"
              aria-invalid={fieldState.invalid}
              className="text-foreground border-0 bg-white"
            >
              <SelectValue placeholder="Chọn khu vực">{field.value}</SelectValue>
            </SelectTrigger>
            <SelectContent>
              {market.regions.map((region) => (
                <SelectItem key={region} value={region}>
                  {region}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      />

      <Input
        required
        type="tel"
        inputMode="tel"
        autoComplete="tel"
        aria-label="Số điện thoại"
        placeholder="Số điện thoại"
        className="text-foreground border-0 bg-white"
        aria-invalid={Boolean(form.formState.errors.phone)}
        {...form.register('phone')}
      />

      <Input
        tabIndex={-1}
        autoComplete="off"
        className="absolute -left-[9999px]"
        aria-hidden="true"
        {...form.register('website')}
      />

      <Button
        type="submit"
        className="bg-[#10263f] px-5 hover:bg-[#172f4d]"
        disabled={form.formState.isSubmitting}
      >
        {form.formState.isSubmitting && <LoaderCircleIcon className="animate-spin" />}
        {form.formState.isSubmitting ? 'Đang gửi...' : 'Đăng ký lắp đặt'}
      </Button>

      {(form.formState.errors.address ||
        form.formState.errors.district ||
        form.formState.errors.phone) && (
        <p className="rounded-lg bg-white/95 px-3 py-2 text-xs font-semibold text-red-700 lg:col-span-4">
          {form.formState.errors.address?.message ??
            form.formState.errors.district?.message ??
            form.formState.errors.phone?.message}
        </p>
      )}

      {notice && (
        <p
          role={notice.type === 'error' ? 'alert' : 'status'}
          className={cn(
            'rounded-lg bg-white/95 px-3 py-2 text-xs font-semibold lg:col-span-4',
            notice.type === 'success' ? 'text-emerald-700' : 'text-red-700'
          )}
        >
          {notice.message}
        </p>
      )}
    </form>
  );
}

export { QuickLeadForm };
