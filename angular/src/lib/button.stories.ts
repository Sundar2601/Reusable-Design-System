import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { DsButton } from './button'

const meta: Meta<DsButton & { label: string }> = {
  title: 'Components/Button',
  component: DsButton,
  tags: ['autodocs'],
  decorators: [moduleMetadata({ imports: [DsButton] })],
  argTypes: {
    variant: { control: 'select', options: ['default', 'outline', 'secondary', 'ghost', 'destructive', 'link'] },
    size: { control: 'select', options: ['xs', 'sm', 'default', 'lg'] },
    rounded: { control: 'boolean' },
  },
  args: { variant: 'default', size: 'default', rounded: false, label: 'Button' },
  render: ({ label, ...args }) => ({
    props: args,
    template: `<button dsButton [variant]="variant" [size]="size" [rounded]="rounded">${label}</button>`,
  }),
}
export default meta
type Story = StoryObj<DsButton & { label: string }>

export const Default: Story = {}
export const Outline: Story = { args: { variant: 'outline' } }
export const Secondary: Story = { args: { variant: 'secondary' } }
export const Ghost: Story = { args: { variant: 'ghost' } }
export const Destructive: Story = { args: { variant: 'destructive' } }
export const Link: Story = { args: { variant: 'link' } }
export const Rounded: Story = { args: { rounded: true } }
export const AllVariants: Story = {
  render: () => ({
    template: `<div class="flex flex-wrap items-center gap-3">
      @for (v of variants; track v) { <button dsButton [variant]="v">{{ v }}</button> }
    </div>`,
    props: { variants: ['default', 'outline', 'secondary', 'ghost', 'destructive', 'link'] },
  }),
}
