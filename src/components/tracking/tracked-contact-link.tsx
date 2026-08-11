'use client';

import type { ComponentProps } from 'react';

interface TrackedContactLinkProps extends ComponentProps<'a'> {
  channel: 'phone' | 'zalo';
  placement: string;
}

function TrackedContactLink({ channel, placement, onClick, ...props }: TrackedContactLinkProps) {
  return (
    <a
      {...props}
      onClick={(event) => {
        window.dataLayer?.push({ event: 'contact_click', channel, placement });
        onClick?.(event);
      }}
    />
  );
}

export { TrackedContactLink };
