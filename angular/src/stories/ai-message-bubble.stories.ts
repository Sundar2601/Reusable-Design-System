import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { ZardMessageImports } from '@/shared/components/message/message.imports'
import { ZardBubbleImports } from '@/shared/components/bubble/bubble.imports'
import { ZardMessageComponent } from '@/shared/components/message/message.component'

const meta: Meta<ZardMessageComponent> = {
  title: 'AI Elements/Message & Bubble',
  component: ZardMessageComponent,
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Message & Bubble (ZardUI). Same as the React Message / Bubble: `zAlign` start / end, `zVariant` default / secondary / muted / tinted / outline / ghost / destructive, `zHeader`, `zFooter`, avatar via `zFallback` / `zSrc`.' } } },
  decorators: [moduleMetadata({ imports: [...ZardMessageImports, ...ZardBubbleImports] })],
  argTypes: {
    zAlign: { control: 'inline-radio', options: ['start', 'end'] },
    zVariant: { control: 'select', options: ['default', 'secondary', 'muted', 'tinted', 'outline', 'ghost', 'destructive'] },
  },
  args: { zAlign: 'start', zVariant: 'muted' },
  render: (args) => ({
    props: args,
    template: `<z-message class="w-120" [zAlign]="zAlign" [zVariant]="zVariant" zFallback="AI" zHeader="Assistant" zFooter="10:42">Sure. Here is a short summary of the document you attached.</z-message>`,
  }),
}
export default meta
type Story = StoryObj<ZardMessageComponent>

export const Assistant: Story = {}
export const User: Story = {
  args: { zAlign: 'end', zVariant: 'default' },
  render: (args) => ({
    props: args,
    template: `<z-message class="w-120" [zAlign]="zAlign" [zVariant]="zVariant" zFooter="10:41">Can you summarize this for me?</z-message>`,
  }),
}
export const BubbleVariants: Story = {
  render: () => ({
    template: `<div class="flex flex-col items-start gap-2">
      @for (v of ['default','secondary','muted','tinted','outline','ghost','destructive']; track v) {
        <z-bubble [zVariant]="$any(v)"><span z-bubble-content>{{ v }}</span></z-bubble>
      }
    </div>`,
  }),
}
export const Thread: Story = {
  render: () => ({
    template: `<z-message-group class="w-120">
      <z-message zAlign="end" zVariant="default">What is the capital of Australia?</z-message>
      <z-message zFallback="AI" zVariant="muted" zFooter="Just now">The capital of Australia is Canberra.</z-message>
    </z-message-group>`,
  }),
}
