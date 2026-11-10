import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '../Button'
import { Plan, PlanContent, PlanFooter, PlanHeader } from './Plan'

const meta = {
  title: 'AI Elements/Plan',
  component: Plan,
  tags: ['autodocs'],
  args: { className: 'w-96' },
  render: (args) => (
    <Plan {...args}>
      <PlanHeader
        isStreaming={args.isStreaming}
        title="Migrate the checkout form"
        description="Move the form to the shared field components in four steps."
      />
      <PlanContent>
        <ol className="list-decimal space-y-1 pl-5">
          <li>Audit the existing fields</li>
          <li>Replace inputs with Field + Input</li>
          <li>Port validation to the new schema</li>
          <li>Update the tests</li>
        </ol>
      </PlanContent>
      <PlanFooter>
        <Button variant="outline" size="sm">Edit</Button>
        <Button size="sm">Build</Button>
      </PlanFooter>
    </Plan>
  ),
} satisfies Meta<typeof Plan>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Streaming: Story = { args: { isStreaming: true } }
export const Collapsed: Story = { args: { defaultOpen: false } }
