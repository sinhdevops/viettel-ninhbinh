'use client';

import { createContext, use, useCallback, useMemo, useState, useSyncExternalStore } from 'react';

import { planOptions, serviceOptions, type ServiceValue } from '@/data/home';

interface LeadSelection {
  service: ServiceValue;
  plan?: string;
  requestId: number;
}

interface LeadSelectionContextValue {
  selection: LeadSelection | null;
  selectPlan: (service: ServiceValue, plan?: string) => void;
}

function subscribeToLocation(callback: () => void) {
  window.addEventListener('popstate', callback);
  return () => window.removeEventListener('popstate', callback);
}

const LeadSelectionContext = createContext<LeadSelectionContextValue | null>(null);

function LeadSelectionProvider({ children }: React.PropsWithChildren) {
  const locationSearch = useSyncExternalStore(
    subscribeToLocation,
    () => window.location.search,
    () => ''
  );
  const locationSelection = useMemo<LeadSelection | null>(() => {
    const params = new URLSearchParams(locationSearch);
    const requestedService = params.get('service');
    const service = serviceOptions.find((option) => option.value === requestedService)?.value;

    if (!service) return null;

    const requestedPlan = params.get('plan');
    const plan = planOptions.find(
      (option) => option.value === requestedPlan && option.service === service
    )?.value;

    return { service, plan, requestId: 0 };
  }, [locationSearch]);
  const [selection, setSelection] = useState<LeadSelection | null>(null);

  const selectPlan = useCallback((service: ServiceValue, plan?: string) => {
    setSelection((current) => ({
      service,
      plan,
      requestId: (current?.requestId ?? 0) + 1,
    }));
  }, []);

  const value = useMemo(
    () => ({ selection: selection ?? locationSelection, selectPlan }),
    [locationSelection, selection, selectPlan]
  );

  return <LeadSelectionContext value={value}>{children}</LeadSelectionContext>;
}

function useLeadSelection() {
  const context = use(LeadSelectionContext);

  if (!context) {
    throw new Error('useLeadSelection must be used within LeadSelectionProvider.');
  }

  return context;
}

export { LeadSelectionProvider, useLeadSelection };
