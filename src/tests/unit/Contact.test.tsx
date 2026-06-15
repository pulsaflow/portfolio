import { render } from '@testing-library/react'
import Contact from '@/components/sections/Contact'

vi.mock('@formspree/react', () => ({
  useForm: () => [{ succeeded: false, submitting: false, errors: [] }, vi.fn()],
  ValidationError: () => null,
}))

describe('Contact', () => {
  it('applique des contraintes de validation sur les champs', () => {
    const { getByLabelText } = render(<Contact />)

    const nameInput = getByLabelText('Nom')
    const emailInput = getByLabelText('Email')
    const messageInput = getByLabelText('Message')

    expect(nameInput).toHaveAttribute('minLength', '2')
    expect(nameInput).toHaveAttribute('maxLength', '80')
    expect(emailInput).toHaveAttribute('type', 'email')
    expect(emailInput).toHaveAttribute('maxLength', '120')
    expect(messageInput).toHaveAttribute('minLength', '10')
    expect(messageInput).toHaveAttribute('maxLength', '2000')
  })
})
