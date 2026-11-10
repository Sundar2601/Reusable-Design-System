import type { Meta, StoryObj } from '@storybook/angular'
import { NumberInputComponent } from '@/shared/extended/number-input.component'

const meta: Meta<NumberInputComponent> = {
  title: 'Number Input',
  component: NumberInputComponent,
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Number Input (extended, hand-built). Same API as the React NumberInput: two-way `value`, `min`, `max`, `step`, `disabled`, `invalid`.' } } },
  argTypes: { min: { control: 'number' }, max: { control: 'number' }, step: { control: 'number' }, disabled: { control: 'boolean' }, invalid: { control: 'boolean' } },
  args: { value: 1, step: 1, disabled: false, invalid: false },
  render: (args) => ({
    props: args,
    template: `<ui-number-input [(value)]="value" [min]="min ?? -999999" [max]="max ?? 999999" [step]="step" [disabled]="disabled" [invalid]="invalid" />`,
  }),
}
export default meta
type Story = StoryObj<NumberInputComponent>

export const Default: Story = {}
export const WithLimits: Story = { args: { value: 5, min: 0, max: 10 } }
export const Step: Story = { args: { value: 0, step: 5 } }
export const Invalid: Story = { args: { value: 99, invalid: true } }
export const Disabled: Story = { args: { disabled: true } }
