import { useEffect, type ReactNode } from 'react'

type PageLayoutProps = {
  header: ReactNode
  footer: ReactNode
  children: ReactNode
}

export function PageLayout({ header, footer, children }: PageLayoutProps) {
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1))
    if (id) document.getElementById(id)?.scrollIntoView()
  }, [])
  return (
    <div id="top" className="flex min-h-svh flex-col">
      <a href="#main" className="sr-only focus:not-sr-only focus:p-4">
        Skip to content
      </a>
      {header}
      <main id="main" tabIndex={-1} className="flex flex-1 flex-col">
        {children}
      </main>
      {footer}
    </div>
  )
}
