import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Navbar from '@/components/layout/Navbar'

vi.mock('@/hooks/useScrollSpy', () => ({
  useScrollSpy: () => 'about',
}))

describe('Navbar', () => {
  it('affiche les liens principaux', () => {
    const { getByRole } = render(<Navbar />)

    expect(getByRole('link', { name: 'À propos' })).toBeInTheDocument()
    expect(getByRole('link', { name: 'Compétences' })).toBeInTheDocument()
    expect(getByRole('link', { name: 'Projets' })).toBeInTheDocument()
    expect(getByRole('link', { name: 'Contact' })).toBeInTheDocument()
  })

  it('ouvre le menu mobile au clic', async () => {
    const user = userEvent.setup()
    const { getByRole, getAllByRole } = render(<Navbar />)

    const trigger = getByRole('button', { name: 'Ouvrir le menu' })
    await user.click(trigger)

    expect(getByRole('button', { name: 'Fermer le menu' })).toBeInTheDocument()
    expect(getAllByRole('link', { name: 'Contact' }).length).toBeGreaterThan(0)
  })
})
