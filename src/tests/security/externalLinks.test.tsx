import { render } from '@testing-library/react'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Projects from '@/components/sections/Projects'

describe('Sécurité des liens externes', () => {
  it('applique rel noopener noreferrer à tous les liens target _blank', () => {
    const { container } = render(
      <>
        <Hero />
        <Projects />
        <Footer />
      </>,
    )

    const externalLinks = container.querySelectorAll('a[target="_blank"]')
    expect(externalLinks.length).toBeGreaterThan(0)

    externalLinks.forEach((link) => {
      const rel = (link as HTMLAnchorElement).getAttribute('rel') ?? ''
      expect(rel).toContain('noopener')
      expect(rel).toContain('noreferrer')
    })
  })
})
