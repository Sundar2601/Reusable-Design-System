import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Field, FieldDescription, FieldLabel } from './Field'
import { Input } from './Input'

describe('Input', () => {
  it('is a 32px-tall text field by default', () => {
    render(<Input aria-label="Name" />)
    const input = screen.getByRole('textbox', { name: 'Name' })
    expect(input).toHaveAttribute('type', 'text')
    expect(input).toHaveClass('h-8', 'w-80')
  })

  it('shows the placeholder and accepts typing', async () => {
    const user = userEvent.setup()
    render(<Input aria-label="Name" placeholder="Ada" />)
    const input = screen.getByRole('textbox', { name: 'Name' })
    expect(input).toHaveAttribute('placeholder', 'Ada')
    await user.type(input, 'Grace')
    expect(input).toHaveValue('Grace')
  })

  it('supports the invalid state through aria-invalid', () => {
    render(<Input aria-label="Name" aria-invalid />)
    expect(screen.getByRole('textbox')).toBeInvalid()
  })

  it('does not accept typing when disabled', async () => {
    const user = userEvent.setup()
    render(<Input aria-label="Name" disabled />)
    await user.type(screen.getByRole('textbox'), 'x')
    expect(screen.getByRole('textbox')).toHaveValue('')
  })

  it('rounded makes it a pill', () => {
    render(<Input aria-label="Name" rounded />)
    expect(screen.getByRole('textbox')).toHaveClass('rounded-full')
  })
})

describe('Field', () => {
  it('connects the label and the description to the input', () => {
    render(
      <Field>
        <FieldLabel htmlFor="e">Email</FieldLabel>
        <Input id="e" aria-describedby="e-d" />
        <FieldDescription id="e-d">We never share it.</FieldDescription>
      </Field>,
    )
    expect(screen.getByLabelText('Email')).toHaveAccessibleDescription('We never share it.')
  })

  it('marks required labels with an asterisk that screen readers skip', () => {
    render(<FieldLabel htmlFor="e" required>Email</FieldLabel>)
    expect(screen.getByText('*')).toHaveAttribute('aria-hidden', 'true')
  })

  it('dims a disabled label', () => {
    render(<FieldLabel disabled>Email</FieldLabel>)
    expect(screen.getByText('Email')).toHaveAttribute('data-disabled', 'true')
  })

  it('can right-align the description', () => {
    render(<FieldDescription align="right">Hint</FieldDescription>)
    expect(screen.getByText('Hint')).toHaveClass('text-right')
  })
})
