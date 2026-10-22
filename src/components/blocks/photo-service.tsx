import { ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type PhotoServiceProps = {
  id: string
  title: string
  image: string
  alt: string
  description: string
  reverse?: boolean
  eyebrow: string
  action: { label: string; href: string }
}

export function PhotoService({
  id,
  title,
  image,
  alt,
  description,
  reverse,
  eyebrow,
  action,
}: PhotoServiceProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="grid md:min-h-[540px] md:grid-cols-2"
    >
      <img
        src={image}
        alt={alt}
        loading="lazy"
        width={1000}
        height={1000}
        className={cn(
          'aspect-square size-full object-cover md:aspect-auto md:max-h-[650px]',
          reverse && 'md:order-2',
        )}
      />
      <div className="flex flex-col items-start justify-center gap-6 bg-muted px-8 py-16 md:px-16 lg:px-24">
        <p className="text-xs tracking-[0.2em] text-foreground/75 uppercase">
          {eyebrow}
        </p>
        <h2
          id={`${id}-title`}
          className="text-4xl font-medium tracking-tight md:text-5xl"
        >
          {title}
        </h2>
        <p className="max-w-md leading-relaxed text-foreground/75">
          {description}
        </p>
        <Button variant="outline" asChild>
          <a href={action.href}>
            {action.label}
            <ArrowUpRight data-icon="inline-end" />
          </a>
        </Button>
      </div>
    </section>
  )
}
