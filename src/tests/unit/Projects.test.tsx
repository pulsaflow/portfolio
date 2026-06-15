import { render, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Projects from '@/components/sections/Projects'

describe('Projects', () => {
  it('filtre les projets par tag', async () => {
    const user = userEvent.setup()
    const { getByRole, getByText, queryByText } = render(<Projects />)

    await user.click(getByRole('button', { name: 'react' }))

    expect(getByText('Admin Analytics Dashboard')).toBeInTheDocument()
    await waitFor(() => {
      expect(queryByText('DevOps Starter Boilerplate')).not.toBeInTheDocument()
    })
  })

  it('ouvre et ferme la modale d’un projet', async () => {
    const user = userEvent.setup()
    const { getByText, getByRole, queryByText } = render(<Projects />)

    await user.click(getByText('Admin Analytics Dashboard'))
    expect(getByText('Stack technique')).toBeInTheDocument()

    await user.click(getByRole('button', { name: 'Fermer la modale du projet' }))
    await waitFor(() => {
      expect(queryByText('Stack technique')).not.toBeInTheDocument()
    })
  })
})
