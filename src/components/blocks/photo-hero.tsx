import { useState } from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel'
import { ImageBackdrop } from './image-backdrop'
import { useCarouselSelection } from '@/hooks/use-carousel-selection'
import { Button } from '@/components/ui/button'

type PhotoSlide = {
  image: string
  alt: string
  title: string
  subtitle: string
}
type PhotoHeroProps = {
  slides: PhotoSlide[]
  eyebrow: string
  label: string
  action: { label: string; href: string }
  phone: string
  phoneHref: string
  email: string
}

export function PhotoHero({
  slides,
  eyebrow,
  label,
  action,
  phone,
  phoneHref,
  email,
}: PhotoHeroProps) {
  const [api, setApi] = useState<CarouselApi>()
  const selected = useCarouselSelection(api)
  if (!slides.length) return null
  return (
    <section className="dark relative text-foreground">
      <Carousel aria-label={label} setApi={setApi} opts={{ loop: true }}>
        <CarouselContent className="ml-0">
          {slides.map((slide, index) => (
            <CarouselItem
              key={slide.image}
              className="relative h-[78svh] min-h-[540px] pl-0 md:h-[88svh]"
              aria-label={`${index + 1} of ${slides.length}`}
              aria-hidden={selected !== index}
              inert={selected !== index}
            >
              <ImageBackdrop
                src={slide.image}
                alt={slide.alt}
                priority={index === 0}
              />
              <div className="absolute inset-0 mx-auto flex max-w-4xl flex-col items-center justify-center gap-5 px-12 text-center text-foreground">
                <p className="text-xs font-medium tracking-[0.3em] uppercase">
                  {eyebrow}
                </p>
                {index === 0 ? (
                  <h1 className="max-w-3xl text-5xl leading-tight font-medium tracking-tight md:text-7xl">
                    {slide.title}
                  </h1>
                ) : (
                  <h2 className="max-w-3xl text-5xl leading-tight font-medium tracking-tight md:text-7xl">
                    {slide.title}
                  </h2>
                )}
                <p className="text-lg">{slide.subtitle}</p>
                <div className="flex flex-col items-center gap-1 text-sm">
                  <a href={phoneHref} className="hover:underline">
                    {phone}
                  </a>
                  <a href={`mailto:${email}`} className="hover:underline">
                    {email}
                  </a>
                </div>
                <Button asChild variant="secondary" size="lg" className="mt-3">
                  <a href={action.href}>{action.label}</a>
                </Button>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 md:left-8" />
        <CarouselNext className="right-4 md:right-8" />
        <div
          className="absolute inset-x-0 bottom-7 flex items-center justify-center gap-3"
          aria-label="Choose a slide"
        >
          {slides.map((slide, index) => (
            <Button
              key={slide.image}
              size="icon-sm"
              variant={selected === index ? 'secondary' : 'outline'}
              aria-label={`Go to slide ${index + 1}`}
              aria-pressed={selected === index}
              onClick={() => api?.scrollTo(index)}
            >
              {index + 1}
            </Button>
          ))}
        </div>
      </Carousel>
    </section>
  )
}
