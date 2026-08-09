'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { AlertCircleIcon, CheckCircle2Icon, LoaderCircleIcon, WifiIcon } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { Controller, useForm, useWatch } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FormLabel } from '@/components/ui/form-label';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import type { MarketConfig } from '@/config/markets';
import { planOptions, serviceOptions, type ServiceValue } from '@/data/home';
import { cn } from '@/lib/utils';

import { leadSchema, type LeadFormValues } from './lead-schema';
import { useLeadSelection } from './lead-selection-context';
import { submitLead } from './submit-lead';

interface SubmissionNotice {
  type: 'success' | 'error';
  message: string;
}

interface FieldErrorProps {
  id: string;
  message?: string;
}

function FieldError({ id, message }: FieldErrorProps) {
  if (!message) return null;

  return (
    <p id={id} className="text-destructive mt-1.5 text-xs font-medium">
      {message}
    </p>
  );
}

interface LeadFormProps {
  market: MarketConfig;
}

function LeadForm({ market }: LeadFormProps) {
  const { selection } = useLeadSelection();
  const [notice, setNotice] = useState<SubmissionNotice | null>(null);
  const form = useForm<LeadFormValues>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      market: market.id,
      service: selection?.service ?? 'internet',
      plan: selection?.plan ?? '',
      address: '',
      district: '',
      phone: '',
      website: '',
    },
    mode: 'onBlur',
  });
  const selectedService = useWatch({ control: form.control, name: 'service' });
  const availablePlans = useMemo(
    () => planOptions.filter((plan) => plan.service === selectedService),
    [selectedService]
  );

  useEffect(() => {
    if (!selection) return;

    form.reset(
      {
        ...form.getValues(),
        service: selection.service,
        plan: selection.plan ?? '',
      },
      {
        keepDirty: true,
        keepErrors: true,
        keepTouched: true,
      }
    );

    window.requestAnimationFrame(() => {
      document.getElementById('coverage')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      document.getElementById('lead-plan')?.focus({ preventScroll: true });
    });
  }, [form, selection]);

  async function onSubmit(values: LeadFormValues) {
    setNotice(null);

    try {
      const message = await submitLead(values);

      setNotice({
        type: 'success',
        message,
      });
      form.reset({
        market: market.id,
        service: values.service,
        plan: '',
        address: '',
        district: '',
        phone: '',
        website: '',
      });
    } catch (error) {
      setNotice({
        type: 'error',
        message:
          error instanceof Error
            ? error.message
            : 'Chưa thể gửi thông tin. Vui lòng thử lại hoặc gọi hotline.',
      });
    }
  }

  return (
    <Card
      id="coverage"
      className={cn(
        'border-border/80 bg-background/95 scroll-mt-24 gap-5 rounded-2xl py-5 shadow-[0_20px_60px_rgb(17_38_63/14%)] backdrop-blur-sm transition-[border-color,box-shadow] duration-300 lg:py-6',
        selection && 'border-primary/35 shadow-[0_20px_60px_rgb(230_0_18/13%)]'
      )}
    >
      <CardHeader className="gap-2 px-5 lg:px-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <CardTitle className="text-lg">Đăng ký lắp đặt</CardTitle>
            <CardDescription className="mt-1">Phản hồi nhanh trong giờ làm việc</CardDescription>
          </div>
          <span className="bg-accent text-primary grid size-11 shrink-0 place-items-center rounded-xl">
            <WifiIcon className="size-5" aria-hidden="true" />
          </span>
        </div>
      </CardHeader>

      <CardContent className="px-5 lg:px-6">
        <form className="grid gap-4" onSubmit={form.handleSubmit(onSubmit)} noValidate>
          <input type="hidden" {...form.register('market')} />
          <div className="absolute -left-[9999px]" aria-hidden="true">
            <label htmlFor="website">Website</label>
            <Input id="website" tabIndex={-1} autoComplete="off" {...form.register('website')} />
          </div>

          <Controller
            control={form.control}
            name="service"
            render={({ field, fieldState }) => (
              <div>
                <FormLabel htmlFor="lead-service" isRequired>
                  Loại dịch vụ
                </FormLabel>
                <Select
                  required
                  value={field.value}
                  onValueChange={(value) => {
                    field.onChange(value as ServiceValue);
                    form.setValue('plan', '', { shouldDirty: true });
                  }}
                >
                  <SelectTrigger
                    id="lead-service"
                    aria-required="true"
                    aria-invalid={fieldState.invalid}
                    aria-describedby={fieldState.error ? 'lead-service-error' : undefined}
                  >
                    <SelectValue placeholder="Chọn loại dịch vụ">
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
                <FieldError id="lead-service-error" message={fieldState.error?.message} />
              </div>
            )}
          />

          <Controller
            control={form.control}
            name="plan"
            render={({ field, fieldState }) => (
              <div>
                <FormLabel htmlFor="lead-plan">Gói cước quan tâm</FormLabel>
                <Select value={field.value ?? ''} onValueChange={field.onChange}>
                  <SelectTrigger
                    id="lead-plan"
                    aria-invalid={fieldState.invalid}
                    aria-describedby={fieldState.error ? 'lead-plan-error' : undefined}
                  >
                    <SelectValue placeholder="Chọn gói cước (không bắt buộc)">
                      {availablePlans.find((plan) => plan.value === field.value)?.label}
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    {availablePlans.map((plan) => (
                      <SelectItem key={plan.value} value={plan.value}>
                        {plan.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FieldError id="lead-plan-error" message={fieldState.error?.message} />
              </div>
            )}
          />

          <div>
            <FormLabel htmlFor="lead-address" isRequired>
              Địa chỉ lắp đặt
            </FormLabel>
            <Input
              id="lead-address"
              required
              placeholder="Số nhà, tên đường"
              autoComplete="street-address"
              aria-invalid={Boolean(form.formState.errors.address)}
              aria-describedby={form.formState.errors.address ? 'lead-address-error' : undefined}
              {...form.register('address')}
            />
            <FieldError id="lead-address-error" message={form.formState.errors.address?.message} />
          </div>

          <Controller
            control={form.control}
            name="district"
            render={({ field, fieldState }) => (
              <div>
                <FormLabel htmlFor="lead-district" isRequired>
                  Khu vực
                </FormLabel>
                <Select required value={field.value ?? ''} onValueChange={field.onChange}>
                  <SelectTrigger
                    id="lead-district"
                    aria-required="true"
                    aria-invalid={fieldState.invalid}
                    aria-describedby={fieldState.error ? 'lead-district-error' : undefined}
                  >
                    <SelectValue placeholder="Chọn khu vực" />
                  </SelectTrigger>
                  <SelectContent>
                    {market.regions.map((region) => (
                      <SelectItem key={region} value={region}>
                        {region}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FieldError id="lead-district-error" message={fieldState.error?.message} />
              </div>
            )}
          />

          <div>
            <FormLabel htmlFor="lead-phone" isRequired>
              Số điện thoại
            </FormLabel>
            <Input
              id="lead-phone"
              required
              type="tel"
              inputMode="tel"
              placeholder="Số điện thoại liên hệ"
              autoComplete="tel"
              aria-invalid={Boolean(form.formState.errors.phone)}
              aria-describedby={form.formState.errors.phone ? 'lead-phone-error' : undefined}
              {...form.register('phone')}
            />
            <FieldError id="lead-phone-error" message={form.formState.errors.phone?.message} />
          </div>

          {notice && (
            <div
              role={notice.type === 'error' ? 'alert' : 'status'}
              className={cn(
                'flex items-start gap-2 rounded-lg border px-3 py-2.5 text-xs leading-relaxed font-semibold',
                notice.type === 'success'
                  ? 'border-emerald-200 bg-emerald-50 text-emerald-800'
                  : 'border-red-200 bg-red-50 text-red-800'
              )}
            >
              {notice.type === 'success' ? (
                <CheckCircle2Icon className="mt-0.5 size-4 shrink-0" />
              ) : (
                <AlertCircleIcon className="mt-0.5 size-4 shrink-0" />
              )}
              {notice.message}
            </div>
          )}

          <Button type="submit" className="mt-1 w-full" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting && <LoaderCircleIcon className="animate-spin" />}
            {form.formState.isSubmitting ? 'Đang gửi yêu cầu...' : 'Đăng ký lắp đặt'}
          </Button>
          <p className="text-muted-foreground text-center text-[0.6875rem] leading-relaxed">
            Điền thông tin để được tư vấn lắp đặt nhanh chóng
          </p>
        </form>
      </CardContent>
    </Card>
  );
}

export { LeadForm };
