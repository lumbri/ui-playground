import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { HeroSection } from '@/components/blocks/hero-section'
import { ContentSection } from '@/components/blocks/content-section'
import { photography } from '@/content/photography'

export function AboutPage() {
  return (
    <>
      <HeroSection
        id="about-hero-title"
        eyebrow="Behind the lens"
        title={
          <>
            Liubov Kulyk.
            <br />
            <span className="text-primary">Your story, in focus.</span>
          </>
        }
        description="Professional portrait, studio, and commercial photography in Switzerland. More than 15 years of experience, and a passion for capturing the moments that matter."
        aside={
          <img
            src={photography.portrait}
            alt="Liubov Kulyk, photographer"
            className="mx-auto aspect-square w-full max-w-sm rounded-3xl object-cover"
          />
        }
        actions={
          <Button size="lg" asChild>
            <a href={`mailto:${photography.email}`}>
              Let’s talk about your session
              <ArrowRight data-icon="inline-end" />
            </a>
          </Button>
        }
      />
      <ContentSection
        id="our-story"
        eyebrow="About me"
        title="My work is my passion."
      >
        {photography.introduction.map((p) => (
          <p key={p} className="max-w-lg leading-relaxed text-muted-foreground">
            {p}
          </p>
        ))}
      </ContentSection>
      <ContentSection
        id="your-session"
        eyebrow="Made around you"
        title="A session that feels like you."
      >
        <p className="max-w-lg leading-relaxed text-muted-foreground">
          From open-air portraits to studio sessions and commercial photography,
          we can find the setting and approach that fit your story.
        </p>
        <Button asChild variant="outline">
          <a href="/#photographs">
            View photographs
            <ArrowRight data-icon="inline-end" />
          </a>
        </Button>
      </ContentSection>
    </>
  )
}
