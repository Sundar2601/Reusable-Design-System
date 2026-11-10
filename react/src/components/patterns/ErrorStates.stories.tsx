import type { Meta, StoryObj } from '@storybook/react-vite'
import { CircleAlert, TriangleAlert } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '../Alert'
import { Banner } from '../Banner'
import { Button } from '../Button'
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from '../Empty'
import { FormField } from '../FormField'
import { Input } from '../Input'

const meta = {
  title: 'Patterns/Error states',
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Error state pattern at three scopes: a single field, a whole page, and the whole app (connectivity). Composed from FormField, Alert, Empty, Banner and Button.' } } },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const InlineFieldError: Story = {
  render: () => (
    <FormField label="Username" error="That username is already taken.">
      {(c) => <Input {...c} defaultValue="ada" />}
    </FormField>
  ),
}

export const PageLevelErrorWithRetry: Story = {
  render: () => (
    <div className="flex w-[28rem] flex-col gap-4">
      <Alert variant="destructive">
        <CircleAlert />
        <AlertTitle>Could not load your invoices</AlertTitle>
        <AlertDescription>Something went wrong on our side. Your data is safe.</AlertDescription>
      </Alert>
      <Empty className="border">
        <EmptyHeader>
          <EmptyMedia variant="icon"><TriangleAlert /></EmptyMedia>
          <EmptyTitle>Something went wrong</EmptyTitle>
          <EmptyDescription>We could not load this page. Try again in a moment.</EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button>Try again</Button>
        </EmptyContent>
      </Empty>
    </div>
  ),
}

export const OfflineBanner: Story = {
  render: () => (
    <div className="w-[40rem]">
      <Banner variant="warning" title="You are offline." action={<Button size="sm" variant="outline">Retry</Button>}>
        Changes will sync when your connection returns.
      </Banner>
    </div>
  ),
}
