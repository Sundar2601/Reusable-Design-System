import type { Meta, StoryObj } from '@storybook/react-vite'
import { MessageScroller } from './MessageScroller'
import { Bubble, ChatThread, Message, MessageAvatar, MessageContent } from './Message'

const meta = {
  title: 'AI Elements/Message Scroller',
  component: MessageScroller,
  tags: ['autodocs'],
  args: { className: 'h-80 w-120 rounded-2xl inset-ring-1 inset-ring-border' },
} satisfies Meta<typeof MessageScroller>

export default meta
type Story = StoryObj<typeof meta>

const Thread = ({ count }: { count: number }) => (
  <ChatThread className="p-4">
    {Array.from({ length: count }, (_, i) =>
      i % 2 === 0 ? (
        <Message key={i} align="end">
          <MessageContent><Bubble>Question number {i / 2 + 1}</Bubble></MessageContent>
        </Message>
      ) : (
        <Message key={i}>
          <MessageAvatar fallback="AI" />
          <MessageContent><Bubble variant="muted">Answer number {(i + 1) / 2}. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Bubble></MessageContent>
        </Message>
      ),
    )}
  </ChatThread>
)

export const Default: Story = { render: (args) => <MessageScroller {...args}><Thread count={14} /></MessageScroller> }
export const ShortThread: Story = { render: (args) => <MessageScroller {...args}><Thread count={2} /></MessageScroller> }
export const NoAutoScroll: Story = { args: { autoScroll: false }, render: (args) => <MessageScroller {...args}><Thread count={14} /></MessageScroller> }
