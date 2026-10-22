import { photography } from '@/content/photography'
import { PhotoHero } from '@/components/blocks/photo-hero'
import { ProfileIntro } from '@/components/blocks/profile-intro'
import { PhotoGallery } from '@/components/blocks/photo-gallery'
import { PhotoService } from '@/components/blocks/photo-service'
import { PhotoBanner } from '@/components/blocks/photo-banner'

export function HomePage() {
  return (
    <>
      <PhotoHero
        slides={photography.slides}
        label="Featured photography"
        eyebrow={`${photography.location} · Portrait & lifestyle photography`}
        action={{ label: 'View photographs', href: '/#photographs' }}
        phone={photography.phone}
        phoneHref={photography.phoneHref}
        email={photography.email}
      />
      <ProfileIntro
        id="about-photographer"
        name={photography.name}
        role={photography.role}
        portrait={photography.portrait}
        paragraphs={photography.introduction}
      />
      <PhotoGallery
        id="photographs"
        title="Selected photographs"
        description="A few moments, kept forever."
        photos={photography.photos}
      />
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-6 pt-20 pb-10 md:px-12">
        <p className="text-xs tracking-[0.2em] text-primary uppercase">
          In front of the lens
        </p>
        <h2 className="text-3xl font-medium tracking-tight">
          Your moments. Your way.
        </h2>
      </div>
      <div className="mx-auto w-full max-w-7xl pb-20">
        {photography.services.map((service, index) => (
          <PhotoService
            key={service.id}
            {...service}
            eyebrow={`${String(index + 1).padStart(2, '0')} / Photography sessions`}
            reverse={index % 2 === 1}
            action={{
              label: 'Enquire about a session',
              href: `mailto:${photography.email}?subject=${encodeURIComponent(service.title)}`,
            }}
          />
        ))}
      </div>
      <PhotoBanner
        id="memories"
        image={photography.closingImage}
        title="You create memories, I capture them"
      />
      <PhotoBanner
        id="contacts"
        image={photography.contactImage}
        title="Let’s make memories."
        tone="strong"
      >
        <div className="flex flex-col gap-3 text-foreground">
          <p className="text-sm tracking-widest uppercase">
            Contacts · {photography.location}
          </p>
          <a
            href={photography.phoneHref}
            className="text-2xl underline-offset-4 hover:underline"
          >
            {photography.phone}
          </a>
          <a
            href={`mailto:${photography.email}`}
            className="text-lg underline-offset-4 hover:underline"
          >
            {photography.email}
          </a>
        </div>
      </PhotoBanner>
    </>
  )
}
