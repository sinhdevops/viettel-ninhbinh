'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { LoaderCircleIcon } from 'lucide-react';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { FormLabel } from '@/components/ui/form-label';
import { Input } from '@/components/ui/input';
import { SearchableSelect } from '@/components/ui/searchable-select';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import type { MarketConfig } from '@/config/markets';
import { serviceOptions, type ServiceValue } from '@/data/home';
import { cn } from '@/lib/utils';

import { leadSchema, type LeadFormValues } from './lead-schema';
import { submitLead } from './submit-lead';

const quickLeadSchema = leadSchema.pick({
  service: true,
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
    defaultValues: {
      service: 'internet',
      district: '',
      phone: '',
      website: '',
    },
  });

  async function onSubmit(values: QuickLeadValues) {
    setNotice(null);

    try {
      const payload: LeadFormValues = {
        ...values,
        market: market.id,
        plan: '',
        address: '',
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

  const firstError =
    form.formState.errors.service?.message ??
    form.formState.errors.district?.message ??
    form.formState.errors.phone?.message;

  return (
    <form
      className="grid gap-3 lg:grid-cols-[1.05fr_1.15fr_0.9fr_auto] lg:items-end"
      onSubmit={form.handleSubmit(onSubmit)}
      noValidate
    >
      <Controller
        control={form.control}
        name="service"
        render={({ field, fieldState }) => (
          <div>
            <FormLabel htmlFor="quick-service" className="text-white" isRequired>
              Dịch vụ
            </FormLabel>
            <Select
              value={field.value}
              onValueChange={(value) => field.onChange(value as ServiceValue)}
            >
              <SelectTrigger
                id="quick-service"
                className="text-foreground border-0 bg-white"
                aria-invalid={fieldState.invalid}
                aria-describedby={fieldState.error ? 'quick-error' : undefined}
              >
                <SelectValue placeholder="Chọn dịch vụ">
                  {serviceOptions.find((service) => service.value === field.value)?.label}
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                {serviceOptions.map((service) => (
                  <SelectItem key={service.value} value={service.value}>
                    {service.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}
      />

      <Controller
        control={form.control}
        name="district"
        render={({ field, fieldState }) => (
          <div>
            <FormLabel htmlFor="quick-district" className="text-white" isRequired>
              Phường, xã
            </FormLabel>
            <SearchableSelect
              id="quick-district"
              required
              value={field.value}
              options={market.regions}
              onValueChange={field.onChange}
              placeholder="Chọn phường, xã"
              searchPlaceholder="Tìm phường, xã..."
              emptyMessage="Không tìm thấy khu vực phù hợp."
              aria-invalid={fieldState.invalid}
              aria-describedby={fieldState.error ? 'quick-error' : undefined}
              className="text-foreground border-0 bg-white"
            />
          </div>
        )}
      />

      <div>
        <FormLabel htmlFor="quick-phone" className="text-white" isRequired>
          Số điện thoại
        </FormLabel>
        <Input
          id="quick-phone"
          required
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder="Số điện thoại"
          className="text-foreground border-0 bg-white"
          aria-invalid={Boolean(form.formState.errors.phone)}
          aria-describedby={form.formState.errors.phone ? 'quick-error' : undefined}
          {...form.register('phone')}
        />
      </div>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="quick-website">Website</label>
        <Input id="quick-website" tabIndex={-1} autoComplete="off" {...form.register('website')} />
      </div>
      <Button
        type="submit"
        className="bg-[#10263f] px-5 hover:bg-[#172f4d]"
        disabled={form.formState.isSubmitting}
      >
        {form.formState.isSubmitting && <LoaderCircleIcon className="animate-spin" />}
        {form.formState.isSubmitting ? 'Đang gửi...' : 'Gửi yêu cầu'}
      </Button>

      {firstError && (
        <p
          id="quick-error"
          role="alert"
          className="rounded-lg bg-white/95 px-3 py-2 text-xs font-semibold text-red-700 lg:col-span-4"
        >
          {firstError}
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
