import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { ZardMessageImports } from '@/shared/components/message/message.imports'
import { AiMessageScrollerComponent } from '@/shared/extended/ai-message-scroller.component'

const thread = (count: number) => `
  <z-message-group class="p-4">
    @for (i of range(${count}); track i) {
      @if (i % 2 === 0) {
        <z-message zAlign="end" zVariant="default">Question number {{ i / 2 + 1 }}</z-message>
      } @else {
        <z-message zFallback="AI" zVariant="muted">Answer number {{ (i + 1) / 2 }}. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</z-message>
      }
    }
  </z-message-group>`

const meta: Meta<AiMessageScrollerComponent> = {
  title: 'AI Elements/Message Scroller',
  component: AiMessageScrollerComponent,
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Message Scroller (extended, hand-built). Same as the React MessageScroller: scroll region with a "scroll to latest" button once scrolled up (`scrollToBottomLabel`).' } } },
  decorators: [moduleMetadata({ imports: [...ZardMessageImports] })],
  render: () => ({
    props: { range: (n: number) => Array.from({ length: n }, (_, i) => i) },
    template: `<ui-ai-message-scroller class="h-80 w-120 rounded-2xl border border-border">${thread(14)}</ui-ai-message-scroller>`,
  }),
}
export default meta
type Story = StoryObj<AiMessageScrollerComponent>

export const Default: Story = {}
export const ShortThread: Story = {
  render: () => ({
    props: { range: (n: number) => Array.from({ length: n }, (_, i) => i) },
    template: `<ui-ai-message-scroller class="h-80 w-120 rounded-2xl border border-border">${thread(2)}</ui-ai-message-scroller>`,
  }),
}
