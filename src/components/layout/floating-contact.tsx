import { PhoneIcon } from 'lucide-react';
import Image from 'next/image';

import { siteConfig } from '@/config/site';
import { IMAGE_PATHS } from '@/constants/images';
import { cn } from '@/lib/utils';

interface ContactLinkProps {
  href: string;
  label: string;
  color: 'zalo' | 'phone';
  external?: boolean;
  children: React.ReactNode;
}

function ContactLink({ href, label, color, external = false, children }: ContactLinkProps) {
  return (
    <a
      href={href}
      aria-label={label}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="group focus-visible:ring-ring/30 relative flex items-center justify-end rounded-full outline-none focus-visible:ring-3"
    >
      <span className="pointer-events-none absolute right-[4.25rem] hidden w-max translate-x-2 rounded-lg bg-[#17243a] px-3 py-2 text-xs font-extrabold text-white opacity-0 shadow-lg transition-[opacity,transform] group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100 sm:block">
        {label}
      </span>
      <span
        className={cn(
          'relative grid size-14 place-items-center rounded-full border-[3px] border-white text-white shadow-xl transition-transform group-hover:-translate-y-0.5 group-hover:scale-105 before:absolute before:-inset-1.5 before:animate-ping before:rounded-full before:border-2 motion-reduce:before:animate-none md:size-[3.625rem]',
          color === 'zalo'
            ? 'bg-white before:border-[#0068ff]/45'
            : 'bg-primary before:border-primary/45'
        )}
      >
        {children}
      </span>
    </a>
  );
}

function FloatingContact() {
  return (
    <nav
      aria-label="Liên hệ nhanh"
      className="floating-contact-bottom fixed right-4 z-[60] grid gap-3 md:right-6"
    >
      <ContactLink href={siteConfig.zaloUrl} label="Chat Zalo" color="zalo" external>
        <Image src={IMAGE_PATHS.zalo} alt="" width={64} height={64} className="size-11" />
      </ContactLink>
      <ContactLink
        href={siteConfig.phone.href}
        label={`Gọi ${siteConfig.phone.display}`}
        color="phone"
      >
        <PhoneIcon className="size-6" aria-hidden="true" />
      </ContactLink>
    </nav>
  );
}

export { FloatingContact };
