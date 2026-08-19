import { Container } from './container';

interface MobileSectionNavItem {
  href: `#${string}`;
  label: string;
}

interface MobileSectionNavProps {
  items: readonly MobileSectionNavItem[];
  label?: string;
}

function MobileSectionNav({ items, label = 'Điều hướng nhanh' }: MobileSectionNavProps) {
  return (
    <nav
      aria-label={label}
      className="sticky top-16 z-40 border-y border-slate-200 bg-white/95 py-2 shadow-[0_8px_24px_rgb(20_34_55/6%)] backdrop-blur-xl lg:hidden"
    >
      <Container>
        <div className="-mx-1 flex snap-x [scrollbar-width:none] gap-2 overflow-x-auto px-1 [&::-webkit-scrollbar]:hidden">
          {items.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              className={
                index === 0
                  ? 'bg-primary text-primary-foreground flex min-h-11 shrink-0 snap-start items-center rounded-full px-4 text-xs font-black'
                  : 'flex min-h-11 shrink-0 snap-start items-center rounded-full border border-slate-200 bg-white px-4 text-xs font-bold text-slate-700'
              }
            >
              {item.label}
            </a>
          ))}
        </div>
      </Container>
    </nav>
  );
}

export { MobileSectionNav };
export type { MobileSectionNavItem };
