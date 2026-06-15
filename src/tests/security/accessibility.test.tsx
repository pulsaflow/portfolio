import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import Navbar from '@/components/layout/Navbar'
import Contact from '@/components/sections/Contact'

vi.mock('@/hooks/useScrollSpy', () => ({
  useScrollSpy: () => 'about',
}))

vi.mock('@formspree/react', () => ({
  useForm: () => [{ succeeded: false, submitting: false, errors: [] }, vi.fn()],
  ValidationError: () => null,
}))

describe('Accessibilité', () => {
  it('Navbar ne présente pas de violation a11y évidente', async () => {
    const { container } = render(<Navbar />)
    const results = await axe(container)
    expect(results.violations).toHaveLength(0)
  })

  it('Contact ne présente pas de violation a11y évidente', async () => {
    const { container } = render(<Contact />)
    const results = await axe(container)
    expect(results.violations).toHaveLength(0)
  })
})
