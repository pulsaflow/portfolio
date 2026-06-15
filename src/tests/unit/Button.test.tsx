import { render } from '@testing-library/react'
import Button from '@/components/ui/Button'

describe('Button', () => {
  it('applique rel noopener noreferrer par défaut en target _blank', () => {
    const { getByRole } = render(
      <Button href="https://example.com" target="_blank">
        Lien externe
      </Button>,
    )
    const link = getByRole('link', { name: 'Lien externe' })
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('conserve un rel explicite quand fourni', () => {
    const { getByRole } = render(
      <Button href="https://example.com" target="_blank" rel="external nofollow">
        Lien custom
      </Button>,
    )

    const link = getByRole('link', { name: 'Lien custom' })
    expect(link).toHaveAttribute('rel', 'external nofollow')
  })
})
