import type { Meta, StoryObj } from '@storybook/angular'
import { RatingComponent } from '@/shared/extended/rating.component'

const meta: Meta<RatingComponent> = {
  title: 'Rating',
  component: RatingComponent,
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Rating (extended, hand-built). Same API as the React Rating: two-way `value`, `max`, `size` sm / default / lg, `readOnly`, `disabled`.' } } },
  argTypes: {
    size: { control: 'inline-radio', options: ['sm', 'default', 'lg'] },
    max: { control: { type: 'number', min: 1, max: 10 } },
    readOnly: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  args: { value: 3, max: 5, size: 'default', readOnly: false, disabled: false },
  render: (args) => ({
    props: args,
    template: `<ui-rating [(value)]="value" [max]="max" [size]="size" [readOnly]="readOnly" [disabled]="disabled" />`,
  }),
}
export default meta
type Story = StoryObj<RatingComponent>

export const Default: Story = {}
export const ReadOnly: Story = { args: { value: 4, readOnly: true } }
export const Disabled: Story = { args: { disabled: true } }
export const Sizes: Story = {
  render: () => ({
    template: `<div class="flex flex-col gap-3">
      <ui-rating size="sm" [value]="2" />
      <ui-rating [value]="3" />
      <ui-rating size="lg" [value]="4" />
    </div>`,
  }),
}
