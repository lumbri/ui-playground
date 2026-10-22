import { AuthActions } from '@/components/blocks/auth-actions'
import { Button } from '@/components/ui/button'
import { Brand } from '@/components/blocks/brand'
import { SiteHeader } from '@/components/blocks/site-header'
import { SiteFooter } from '@/components/blocks/site-footer'
import { PageLayout } from '@/components/blocks/page-layout'
import { HomePage } from '@/pages/home-page'
import { AboutPage } from '@/pages/about-page'
import { site } from '@/config/site'

const currentYear = new Date().getFullYear()
export default function App({
  path,
  siteUrl = '',
}: {
  path: string
  siteUrl?: string
}) {
  const currentPath = path.replace(/\/$/, '') || '/'
  const page =
    currentPath === '/'
      ? {
          title: 'Liubov Kulyk | Photographer in Switzerland',
          description:
            'Portrait, studio, and commercial photography by Liubov Kulyk in Switzerland. More than 15 years of experience capturing your best memories.',
        }
      : currentPath === '/about'
        ? {
            title: 'About Liubov Kulyk | Photographer in Switzerland',
            description:
              'Meet Liubov Kulyk, a professional photographer in Switzerland with more than 15 years of shooting experience.',
          }
        : {
            title: 'Page not found | Liubov Kulyk',
            description: 'This page could not be found.',
          }
  const brand = <Brand name={site.name} href="/" />
  return (
    <>
      <title>{page.title}</title>
      <meta name="description" content={page.description} />
      <meta property="og:title" content={page.title} />
      <meta property="og:description" content={page.description} />
      <meta property="og:type" content="website" />
      {siteUrl && (
        <link rel="canonical" href={new URL(currentPath, siteUrl).href} />
      )}
      {siteUrl && (
        <meta property="og:url" content={new URL(currentPath, siteUrl).href} />
      )}
      {currentPath !== '/' && currentPath !== '/about' && (
        <meta name="robots" content="noindex" />
      )}
      <PageLayout
        header={
          <SiteHeader
            brand={brand}
            links={site.navigation}
            currentPath={currentPath}
            menuTitle="Liubov Kulyk"
            menuDescription="Portrait, studio, and commercial photography in Switzerland."
            action={<AuthActions />}
          />
        }
        footer={
          <SiteFooter
            brand={brand}
            copyright={`© ${currentYear} Liubov Kulyk. Photography in Switzerland.`}
            links={site.footer}
          />
        }
      >
        {currentPath === '/about' ? (
          <AboutPage />
        ) : currentPath === '/' ? (
          <HomePage />
        ) : (
          <section className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-24">
            <h1 className="text-4xl font-medium">Page not found</h1>
            <p className="text-muted-foreground">
              The page may have moved, or the address may be incorrect.
            </p>
            <Button asChild>
              <a href="/">Back to home</a>
            </Button>
          </section>
        )}
      </PageLayout>
    </>
  )
}
