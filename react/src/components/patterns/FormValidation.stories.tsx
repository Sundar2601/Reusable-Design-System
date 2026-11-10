import type { Meta, StoryObj } from '@storybook/react-vite'
import { CircleAlert, CircleCheck } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '../Alert'
import { Button } from '../Button'
import { FormField } from '../FormField'
import { Input } from '../Input'

const meta = {
  title: 'Patterns/Form validation',
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Form validation pattern, composed from FormField, Input, Alert and Button. Errors show inline under the field, optionally summarised in an Alert above the form.' } } },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const InlineErrors: Story = {
  render: () => (
    <form className="flex w-80 flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
      <FormField label="Email" required error="Enter a valid email address.">
        {(c) => <Input {...c} type="email" defaultValue="ada@" />}
      </FormField>
      <FormField label="Password" required description="At least 8 characters." error="Password is too short.">
        {(c) => <Input {...c} type="password" defaultValue="abc" />}
      </FormField>
      <Button type="submit">Create account</Button>
    </form>
  ),
}

export const SummaryAlert: Story = {
  render: () => (
    <form className="flex w-96 flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
      <Alert variant="destructive">
        <CircleAlert />
        <AlertTitle>There are 2 problems with your submission</AlertTitle>
        <AlertDescription>Fix the highlighted fields and try again.</AlertDescription>
      </Alert>
      <FormField label="Full name" required error="Name is required.">
        {(c) => <Input {...c} />}
      </FormField>
      <FormField label="Email" required error="Enter a valid email address.">
        {(c) => <Input {...c} defaultValue="ada@" />}
      </FormField>
      <Button type="submit">Submit</Button>
    </form>
  ),
}

export const SuccessState: Story = {
  render: () => (
    <form className="flex w-96 flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
      <Alert>
        <CircleCheck />
        <AlertTitle>Profile saved</AlertTitle>
        <AlertDescription>Your changes have been applied.</AlertDescription>
      </Alert>
      <FormField label="Full name" required>
        {(c) => <Input {...c} defaultValue="Ada Lovelace" />}
      </FormField>
      <FormField label="Email" required>
        {(c) => <Input {...c} defaultValue="ada@example.com" />}
      </FormField>
      <Button type="submit">Save changes</Button>
    </form>
  ),
}
