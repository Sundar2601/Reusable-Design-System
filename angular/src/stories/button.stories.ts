import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { ZardButtonComponent } from '@/shared/components/button'

const meta: Meta<ZardButtonComponent & { label: string }> = {
  title: 'Button',
  component: ZardButtonComponent,
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Button (ZardUI). Same variants and sizes as the React Button: `zType` default / outline / secondary / ghost / destructive / link, `zSize` xs / sm / default / lg.' } } },
  decorators: [moduleMetadata({ imports: [ZardButtonComponent] })],
  argTypes: {
    zType: { control: 'select', options: ['default', 'outline', 'secondary', 'ghost', 'destructive', 'link'] },
    zSize: { control: 'select', options: ['xs', 'sm', 'default', 'lg'] },
    zShape: { control: 'inline-radio', options: ['default', 'circle', 'square'] },
    zDisabled: { control: 'boolean' },
    zLoading: { control: 'boolean' },
  },
  args: { zType: 'default', zSize: 'default', zShape: 'default', zDisabled: false, zLoading: false, label: 'Button' },
  render: ({ label, ...args }) => ({
    props: args,
    template: `<button z-button [zType]="zType" [zSize]="zSize" [zShape]="zShape" [zDisabled]="zDisabled" [zLoading]="zLoading">${label}</button>`,
  }),
}
export default meta
type Story = StoryObj<ZardButtonComponent & { label: string }>

export const Default: Story = {}
export const Outline: Story = { args: { zType: 'outline' } }
export const Secondary: Story = { args: { zType: 'secondary' } }
export const Ghost: Story = { args: { zType: 'ghost' } }
export const Destructive: Story = { args: { zType: 'destructive' } }
export const Link: Story = { args: { zType: 'link' } }
export const Rounded: Story = {
  render: ({ label, ...args }) => ({
    props: args,
    template: `<button z-button class="rounded-full" [zType]="zType" [zSize]="zSize">${label}</button>`,
  }),
}
export const Disabled: Story = { args: { zDisabled: true } }
export const Loading: Story = { args: { zLoading: true } }
export const AllVariants: Story = {
  render: () => ({
    props: { variants: ['default', 'outline', 'secondary', 'ghost', 'destructive', 'link'] },
    template: `<div class="flex flex-wrap items-center gap-3">
      @for (v of variants; track v) { <button z-button [zType]="$any(v)">{{ v }}</button> }
    </div>`,
  }),
}
