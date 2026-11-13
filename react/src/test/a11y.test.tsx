import { render } from '@testing-library/react'
import axe from 'axe-core'
import { describe, expect, it } from 'vitest'
import { Alert, AlertDescription, AlertTitle } from '@/components/Alert'
import { Badge } from '@/components/Badge'
import { Button } from '@/components/Button'
import { Checkbox } from '@/components/Checkbox'
import { Field, FieldDescription, FieldLabel } from '@/components/Field'
import { Input } from '@/components/Input'
import { Switch } from '@/components/Switch'
import { Textarea } from '@/components/Textarea'

/**
 * Automated accessibility check (axe-core) for the core components.
 * Catches missing names, labels and roles. Color contrast needs a real browser, so jsdom skips it;
 * contrast is documented in Guidelines and checked in Storybook with the a11y addon.
 * Add a case here when you add a component.
 */
async function violationsOf(ui: React.ReactElement) {
  const { container } = render(ui)
  const result = await axe.run(container, { rules: { 'color-contrast': { enabled: false }, region: { enabled: false } } })
  return result.violations.map((v) => `${v.id}: ${v.help} (${v.nodes.length})`)
}

describe('accessibility (axe-core)', () => {
  it('Button with text', async () => {
    expect(await violationsOf(<Button>Save</Button>)).toEqual([])
  })

  it('Button disabled and destructive', async () => {
    expect(await violationsOf(<Button variant="destructive" disabled>Delete</Button>)).toEqual([])
  })

  it('Field with label, input and description', async () => {
    expect(
      await violationsOf(
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input id="email" aria-describedby="email-help" />
          <FieldDescription id="email-help">We never share it.</FieldDescription>
        </Field>,
      ),
    ).toEqual([])
  })

  it('Input in the invalid state keeps its label', async () => {
    expect(
      await violationsOf(
        <Field>
          <FieldLabel htmlFor="name">Name</FieldLabel>
          <Input id="name" aria-invalid />
        </Field>,
      ),
    ).toEqual([])
  })

  it('Textarea with a label', async () => {
    expect(
      await violationsOf(
        <Field>
          <FieldLabel htmlFor="msg">Message</FieldLabel>
          <Textarea id="msg" />
        </Field>,
      ),
    ).toEqual([])
  })

  it('Checkbox with a label', async () => {
    expect(
      await violationsOf(
        <div className="flex items-center gap-2">
          <Checkbox id="terms" />
          <label htmlFor="terms">Accept terms</label>
        </div>,
      ),
    ).toEqual([])
  })

  it('Switch with an accessible name', async () => {
    expect(await violationsOf(<Switch aria-label="Airplane mode" />)).toEqual([])
  })

  it('Alert', async () => {
    expect(
      await violationsOf(
        <Alert>
          <AlertTitle>Heads up</AlertTitle>
          <AlertDescription>You can add components with the CLI.</AlertDescription>
        </Alert>,
      ),
    ).toEqual([])
  })

  it('Badge', async () => {
    expect(await violationsOf(<Badge>New</Badge>)).toEqual([])
  })
})
