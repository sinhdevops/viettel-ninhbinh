'use client';

import { ChevronRightIcon, MenuIcon, MessageCircleIcon, PhoneIcon } from 'lucide-react';
import Link from 'next/link';

import { TrackedContactLink } from '@/components/tracking/tracked-contact-link';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import type { MarketConfig } from '@/config/markets';
import { siteConfig } from '@/config/site';

import { SiteBrand } from './site-brand';

interface MobileNavigationProps {
  market?: MarketConfig;
}

function MobileNavigation({ market }: MobileNavigationProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Mở menu điều hướng">
          <MenuIcon />
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="w-[min(22rem,90vw)]">
        <SheetHeader className="border-border border-b px-5 py-4 pr-16">
          <SiteBrand />
          <SheetTitle className="sr-only">Menu điều hướng</SheetTitle>
          <SheetDescription className="sr-only">
            Điều hướng dịch vụ và liên hệ {market?.siteName ?? siteConfig.name}
          </SheetDescription>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto px-4 py-6">
          <p className="text-primary mb-3 px-3 text-xs font-extrabold tracking-[0.14em] uppercase">
            Khám phá dịch vụ
          </p>
          <nav aria-label="Điều hướng trên thiết bị di động" className="grid gap-1.5">
            {siteConfig.navigation.map((item, index) => (
              <SheetClose key={item.href} asChild>
                <Link
                  href={item.href}
                  className="group text-foreground hover:bg-accent hover:text-accent-foreground focus-visible:bg-accent focus-visible:text-accent-foreground flex min-h-14 items-center gap-3 rounded-xl px-3 text-[0.9375rem] font-bold transition-colors outline-none"
                >
                  <span className="bg-secondary text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground group-focus-visible:bg-primary group-focus-visible:text-primary-foreground grid size-8 shrink-0 place-items-center rounded-lg text-xs font-extrabold transition-colors">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span>{item.label}</span>
                  <ChevronRightIcon className="text-muted-foreground group-hover:text-primary ml-auto size-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </SheetClose>
            ))}
          </nav>
        </div>

        <SheetFooter className="border-border bg-muted/45 border-t">
          <div>
            <p className="text-foreground text-sm font-bold">Cần tư vấn lắp đặt?</p>
            <p className="text-muted-foreground mt-1 text-xs">
              Liên hệ để được hỗ trợ nhanh chóng.
            </p>
          </div>
          <Button asChild className="w-full">
            <TrackedContactLink
              channel="phone"
              placement="mobile_menu"
              href={siteConfig.phone.href}
            >
              <PhoneIcon />
              Gọi {siteConfig.phone.display}
            </TrackedContactLink>
          </Button>
          <Button asChild variant="outline" className="w-full">
            <TrackedContactLink
              channel="zalo"
              placement="mobile_menu"
              href={siteConfig.zaloUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircleIcon />
              Chat Zalo
            </TrackedContactLink>
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export { MobileNavigation };
