import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const overlayVariants = cva('absolute inset-0', {
  variants: {
    tone: {
      default:
        'bg-linear-to-b from-background/40 via-background/65 to-background/90',
      strong: 'bg-background/90',
    },
  },
  defaultVariants: { tone: 'default' },
})

type ImageBackdropProps = VariantProps<typeof overlayVariants> & {
  src: string
  alt?: string
  priority?: boolean
  className?: string
}

/** Parent supplies positioning and a theme; decorative images use an empty alt. */
export function ImageBackdrop({
  src,
  alt = '',
  priority = false,
  tone,
  className,
}: ImageBackdropProps) {
  return (
    <>
      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        className={cn('absolute inset-0 size-full object-cover', className)}
      />
      <div aria-hidden="true" className={overlayVariants({ tone })} />
    </>
  )
}
