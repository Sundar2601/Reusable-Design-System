import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '../Button'
import { Field, FieldDescription, FieldLabel } from '../Field'
import { Input } from '../Input'

/**
 * Direction. The shadcn Direction provider sets text direction for a subtree. In this system set
 * `dir="rtl"` on an ancestor: layout uses logical properties (`ps-`, `me-`, `start-`) so components
 * mirror automatically, and Radix reads `dir` for keyboard navigation.
 */
const meta = {
  title: 'Utilities/Direction',
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Right-to-left support. Set `dir` on an ancestor; components mirror.' } } },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

function Form({ dir }: { dir: 'ltr' | 'rtl' }) {
  const rtl = dir === 'rtl'
  return (
    <div dir={dir} className="flex w-80 flex-col gap-4 rounded-lg border border-border p-4">
      <Field>
        <FieldLabel htmlFor={`email-${dir}`}>{rtl ? 'البريد الإلكتروني' : 'Email'}</FieldLabel>
        <Input id={`email-${dir}`} placeholder={rtl ? 'name@example.com' : 'name@example.com'} />
        <FieldDescription>{rtl ? 'لن نشاركه مع أحد.' : 'We never share it.'}</FieldDescription>
      </Field>
      <Button>{rtl ? 'إرسال' : 'Submit'}</Button>
    </div>
  )
}

export const LeftToRight: Story = { render: () => <Form dir="ltr" /> }
export const RightToLeft: Story = { render: () => <Form dir="rtl" /> }
