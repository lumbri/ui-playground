import type { ReactNode } from 'react'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { cn } from '@/lib/utils'

export type NavigationLink = { label: string; href: string }
type SiteHeaderProps = {
  brand: ReactNode
  links: NavigationLink[]
  currentPath: string
  action?: ReactNode
  menuTitle: string
  menuDescription: string
}

export function SiteHeader({
  brand,
  links,
  currentPath,
  action,
  menuTitle,
  menuDescription,
}: SiteHeaderProps) {
  function navigation(label: string, mobile = false) {
    return (
      <nav
        aria-label={label}
        className={
          mobile
            ? 'flex flex-col gap-6 px-6 py-8'
            : 'hidden items-center gap-8 md:flex'
        }
      >
        {links.map(({ label, href }) => {
          const link = (
            <a
              href={href}
              aria-current={href === currentPath ? 'page' : undefined}
              className={cn(
                'rounded-sm text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring',
                href === currentPath && 'font-medium text-foreground',
              )}
            >
              {label}
            </a>
          )
          return mobile ? (
            <SheetClose key={href} asChild>
              {link}
            </SheetClose>
          ) : (
            <span key={href}>{link}</span>
          )
        })}
      </nav>
    )
  }
  return (
    <header className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-6 py-7 md:px-12">
      {brand}
      {navigation('Main navigation')}
      <div className="hidden md:block">{action}</div>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            className="md:hidden"
            variant="outline"
            size="icon"
            aria-label="Open navigation"
          >
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>{menuTitle}</SheetTitle>
            <SheetDescription>{menuDescription}</SheetDescription>
          </SheetHeader>
          {navigation('Mobile navigation', true)}
          <div className="px-6 pb-6">{action}</div>
        </SheetContent>
      </Sheet>
    </header>
  )
}
