import type { ReactNode } from 'react'
import { Separator } from '@/components/ui/separator'
import type { NavigationLink } from './site-header'

type SiteFooterProps = {
  brand: ReactNode
  copyright: string
  links: NavigationLink[]
}

export function SiteFooter({ brand, copyright, links }: SiteFooterProps) {
  return (
    <footer id="resources" className="mx-auto w-full max-w-7xl px-6 md:px-12">
      <Separator />
      <div className="flex flex-col justify-between gap-6 py-8 sm:flex-row sm:items-center">
        <div className="flex flex-col gap-2">
          {brand}
          <p className="text-xs text-muted-foreground">{copyright}</p>
        </div>
        <nav aria-label="Footer navigation" className="flex flex-wrap gap-6">
          {links.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="rounded-sm text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
