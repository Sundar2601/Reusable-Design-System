import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { DsInput } from './input'

const meta: Meta<DsInput & { placeholder: string; disabled: boolean }> = {
  title: 'Components/Input',
  component: DsInput,
  tags: ['autodocs'],
  decorators: [moduleMetadata({ imports: [DsInput] })],
  args: { placeholder: 'Email', rounded: false, invalid: false, disabled: false },
  render: (args) => ({
    props: args,
    template: `<input dsInput [placeholder]="placeholder" [rounded]="rounded" [invalid]="invalid" [disabled]="disabled" />`,
  }),
}
export default meta
type Story = StoryObj<DsInput & { placeholder: string; disabled: boolean }>

export const Default: Story = {}
export const Invalid: Story = { args: { invalid: true } }
export const Disabled: Story = { args: { disabled: true } }
export const Rounded: Story = { args: { rounded: true } }
