import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Radio, RadioGroup } from './Radio'

function Example() {
  return (
    <RadioGroup defaultValue="b">
      <Radio value="a" label="Option A" />
      <Radio value="b" label="Option B" description="Selected by default." />
      <Radio value="c" label="Option C" disabled />
    </RadioGroup>
  )
}

describe('Radio', () => {
  it('selects the option that matches the group value', () => {
    render(<Example />)
    expect(screen.getByRole('radio', { name: 'Option B' })).toBeChecked()
    expect(screen.getByRole('radio', { name: 'Option A' })).not.toBeChecked()
  })

  it('moves the selection when another option is clicked', async () => {
    const user = userEvent.setup()
    render(<Example />)
    await user.click(screen.getByText('Option A'))
    expect(screen.getByRole('radio', { name: 'Option A' })).toBeChecked()
    expect(screen.getByRole('radio', { name: 'Option B' })).not.toBeChecked()
  })

  it('cannot select a disabled option', async () => {
    const user = userEvent.setup()
    render(<Example />)
    await user.click(screen.getByText('Option C'))
    expect(screen.getByRole('radio', { name: 'Option C' })).not.toBeChecked()
    expect(screen.getByRole('radio', { name: 'Option C' })).toBeDisabled()
  })

  it('is a 16px control and supports aria-invalid', () => {
    render(
      <RadioGroup>
        <Radio value="a" aria-label="Plain" aria-invalid />
      </RadioGroup>,
    )
    const radio = screen.getByRole('radio', { name: 'Plain' })
    expect(radio).toHaveClass('size-4')
    expect(radio).toBeInvalid()
  })

  it('shows the description', () => {
    render(<Example />)
    expect(screen.getByText('Selected by default.')).toBeInTheDocument()
  })
})
