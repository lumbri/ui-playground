import type { ReactNode } from 'react'
import { ImageBackdrop } from './image-backdrop'

type PhotoBannerProps = {
  id: string
  image: string
  title: string
  children?: ReactNode
  tone?: 'default' | 'strong'
}

export function PhotoBanner({
  id,
  image,
  title,
  children,
  tone = 'default',
}: PhotoBannerProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="dark relative isolate flex min-h-[480px] flex-col items-center justify-center gap-8 overflow-hidden px-6 py-24 text-center text-foreground"
    >
      <div className="absolute inset-0 -z-10">
        <ImageBackdrop src={image} tone={tone} />
      </div>
      <h2
        id={`${id}-title`}
        className="max-w-3xl text-4xl leading-tight font-medium tracking-tight text-foreground md:text-5xl"
      >
        {title}
      </h2>
      {children}
    </section>
  )
}
