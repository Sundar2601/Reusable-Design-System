import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { IosButtonComponent } from '@/shared/extended/ios-button.component'

const meta: Meta<IosButtonComponent> = {
  title: 'Mobile/iOS/Button',
  component: IosButtonComponent,
  tags: ['autodocs'],
  parameters: { layout: 'centered', docs: { description: { component: 'iOS Button (extended, hand-built). Same as the React IosButton: `variant` filled / tinted / gray / plain, `size` large / medium / small, `destructive`. Use as `<button ios-button>`.' } } },
  decorators: [moduleMetadata({ imports: [IosButtonComponent] })],
  argTypes: {
    variant: { control: 'inline-radio', options: ['filled', 'tinted', 'gray', 'plain'] },
    size: { control: 'inline-radio', options: ['large', 'medium', 'small'] },
  },
  args: { variant: 'filled', size: 'medium', destructive: false },
  render: (args) => ({ props: args, template: `<button ios-button [variant]="variant" [size]="size" [destructive]="destructive">Continue</button>` }),
}
export default meta
type Story = StoryObj<IosButtonComponent>

export const Filled: Story = {}
export const Tinted: Story = { args: { variant: 'tinted' } }
export const Gray: Story = { args: { variant: 'gray' } }
export const Plain: Story = { args: { variant: 'plain' } }
export const Destructive: Story = { args: { destructive: true } }
export const Disabled: Story = { render: () => ({ template: `<button ios-button disabled>Continue</button>` }) }
export const Large: Story = { render: () => ({ template: `<div class="w-[358px]"><button ios-button size="large">Continue</button></div>` }) }
export const Sizes: Story = {
  render: () => ({ template: `<div class="flex items-center gap-3"><button ios-button size="medium">Medium</button><button ios-button size="small">Small</button></div>` }),
}
