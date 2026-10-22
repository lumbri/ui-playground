import type { ReactNode } from 'react'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

type HeroSectionProps = {
  id: string
  eyebrow: string
  title: ReactNode
  description: string
  actions?: ReactNode
  illustration?: ReactNode
  caption?: string
  aside?: ReactNode
}

export function HeroSection({
  id,
  eyebrow,
  title,
  description,
  actions,
  illustration,
  caption,
  aside,
}: HeroSectionProps) {
  return (
    <section
      aria-labelledby={id}
      className="relative mx-3 flex flex-1 flex-col justify-center overflow-hidden rounded-3xl bg-secondary px-6 py-20 sm:mx-6 md:px-16 md:py-28 lg:px-24"
    >
      {illustration}
      <div
        className={cn(
          'relative',
          aside &&
            'grid min-w-0 items-center gap-12 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]',
        )}
      >
        <div className="flex max-w-3xl min-w-0 flex-col items-start gap-8">
          <Badge variant="outline">
            <span
              aria-hidden="true"
              className="size-1.5 rounded-full bg-primary"
            />
            {eyebrow}
          </Badge>
          <h1
            id={id}
            className={cn(
              'text-5xl leading-[1.06] font-medium tracking-[-0.055em] sm:text-7xl',
              aside ? 'lg:text-6xl xl:text-7xl' : 'lg:text-8xl',
            )}
          >
            {title}
          </h1>
          <p className="max-w-md text-lg leading-relaxed text-muted-foreground">
            {description}
          </p>
          {actions && <div className="flex flex-wrap gap-3">{actions}</div>}
          {caption && (
            <p className="pt-6 text-xs tracking-widest text-muted-foreground uppercase">
              {caption}
            </p>
          )}
        </div>
        {aside && <div className="min-w-0">{aside}</div>}
      </div>
    </section>
  )
}
