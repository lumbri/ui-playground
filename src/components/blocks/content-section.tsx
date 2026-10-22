import type { ReactNode } from 'react'

type ContentSectionProps = {
  id: string
  eyebrow: string
  title: ReactNode
  children: ReactNode
}

export function ContentSection({
  id,
  eyebrow,
  title,
  children,
}: ContentSectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-14 md:grid-cols-2 md:gap-20 md:px-12 md:py-18"
    >
      <div className="flex flex-col gap-3">
        <p className="text-xs font-medium tracking-widest text-primary uppercase">
          {eyebrow}
        </p>
        <h2
          id={`${id}-title`}
          className="max-w-md text-3xl font-medium tracking-tight"
        >
          {title}
        </h2>
      </div>
      <div className="flex flex-col items-start gap-5">{children}</div>
    </section>
  )
}
