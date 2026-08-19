import { MessageCircleIcon, PhoneIcon } from 'lucide-react';
import Image from 'next/image';

import { TrackedContactLink } from '@/components/tracking/tracked-contact-link';
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
    <TrackedContactLink
      channel={color}
      placement="floating_contact"
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
          'relative grid size-12 place-items-center rounded-full border-[3px] border-white text-white shadow-xl transition-transform group-hover:-translate-y-0.5 group-hover:scale-105 before:absolute before:-inset-1.5 before:animate-ping before:rounded-full before:border-2 motion-reduce:before:animate-none md:size-[3.625rem]',
          color === 'zalo'
            ? 'bg-white before:border-[#0068ff]/45'
            : 'bg-primary before:border-primary/45'
        )}
      >
        {children}
      </span>
    </TrackedContactLink>
  );
}

function FloatingContact() {
  return (
    <>
      <nav
        aria-label="Liên hệ nhanh trên điện thoại"
        className="fixed inset-x-0 bottom-0 z-[60] grid grid-cols-2 gap-2 border-t border-slate-200 bg-white/95 px-3 pt-2 pb-[max(.5rem,env(safe-area-inset-bottom))] shadow-[0_-10px_30px_rgb(20_34_55/12%)] backdrop-blur-xl sm:hidden"
      >
        <TrackedContactLink
          channel="zalo"
          placement="mobile_contact_bar"
          href={siteConfig.zaloUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-12 items-center justify-center gap-2 rounded-xl border border-blue-200 bg-blue-50 px-3 text-sm font-black text-blue-700"
        >
          <MessageCircleIcon className="size-5" aria-hidden="true" />
          Chat Zalo
        </TrackedContactLink>
        <TrackedContactLink
          channel="phone"
          placement="mobile_contact_bar"
          href={siteConfig.phone.href}
          className="bg-primary text-primary-foreground flex min-h-12 items-center justify-center gap-2 rounded-xl px-3 text-sm font-black shadow-[0_8px_20px_rgb(230_0_18/20%)]"
        >
          <PhoneIcon className="size-5" aria-hidden="true" />
          Gọi tư vấn
        </TrackedContactLink>
      </nav>

      <nav
        aria-label="Liên hệ nhanh"
        className="floating-contact-bottom fixed right-6 z-[60] hidden gap-3 sm:grid"
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
    </>
  );
}

export { FloatingContact };
