import { Asterisk } from 'lucide-react'

type BrandProps = { name: string; href: string }

export function Brand({ name, href }: BrandProps) {
  return (
    <a
      href={href}
      aria-label={`${name} home`}
      className="flex items-center gap-2 font-semibold tracking-tight"
    >
      <Asterisk className="size-7" aria-hidden="true" />
      {name}
      <span className="text-primary">.</span>
    </a>
  )
}
