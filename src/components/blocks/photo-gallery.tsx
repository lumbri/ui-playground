import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

type Photo = { src: string; alt: string }
type PhotoGalleryProps = {
  id: string
  title: string
  description?: string
  photos: Photo[]
}

export function PhotoGallery({
  id,
  title,
  description,
  photos,
}: PhotoGalleryProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`}>
      <div className="mx-auto flex max-w-7xl items-end justify-between gap-4 px-6 pb-8 md:px-12">
        <h2 id={`${id}-title`} className="text-3xl font-medium tracking-tight">
          {title}
        </h2>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4">
        {photos.map((photo, index) => (
          <Dialog key={`${photo.src}-${index}`}>
            <DialogTrigger asChild>
              <button
                type="button"
                aria-label={`View photograph ${index + 1}: ${photo.alt}`}
                className="group overflow-hidden outline-offset-[-4px] focus-visible:outline-4 focus-visible:outline-ring"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  width={600}
                  height={600}
                  className="aspect-square w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
                />
              </button>
            </DialogTrigger>
            <DialogContent className="max-h-[92svh] overflow-auto sm:max-w-4xl">
              <DialogHeader>
                <DialogTitle>Photograph {index + 1}</DialogTitle>
                <DialogDescription>{photo.alt}</DialogDescription>
              </DialogHeader>
              <img
                src={photo.src}
                alt={photo.alt}
                className="max-h-[72svh] w-full object-contain"
              />
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </section>
  )
}
