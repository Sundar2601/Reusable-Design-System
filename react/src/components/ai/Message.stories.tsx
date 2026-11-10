import type { Meta, StoryObj } from '@storybook/react-vite'
import { Bubble, BubbleGroup, ChatThread, Message, MessageAvatar, MessageContent, MessageFooter, MessageHeader } from './Message'

const meta = {
  title: 'AI Elements/Message & Bubble',
  component: Message,
  tags: ['autodocs'],
  argTypes: { align: { control: 'inline-radio', options: ['start', 'end'] } },
} satisfies Meta<typeof Message>

export default meta
type Story = StoryObj<typeof meta>

export const Assistant: Story = {
  render: (args) => (
    <Message {...args}>
      <MessageAvatar fallback="AI" />
      <MessageContent>
        <MessageHeader>Assistant</MessageHeader>
        <Bubble variant="ghost">Sure. Here is a short summary of the document you attached.</Bubble>
        <MessageFooter>10:42</MessageFooter>
      </MessageContent>
    </Message>
  ),
}

export const User: Story = {
  args: { align: 'end' },
  render: (args) => (
    <Message {...args}>
      <MessageContent>
        <Bubble>Can you summarize this for me?</Bubble>
        <MessageFooter>10:41</MessageFooter>
      </MessageContent>
    </Message>
  ),
}

export const BubbleVariants: Story = {
  render: () => (
    <div className="flex flex-col items-start gap-2">
      {(['default', 'secondary', 'muted', 'outline', 'ghost', 'destructive'] as const).map((variant) => (
        <Bubble key={variant} variant={variant}>
          {variant}
        </Bubble>
      ))}
    </div>
  ),
}

export const Thread: Story = {
  render: () => (
    <ChatThread className="w-120">
      <Message align="end">
        <MessageContent>
          <Bubble>What is the capital of Australia?</Bubble>
        </MessageContent>
      </Message>
      <Message>
        <MessageAvatar fallback="AI" />
        <MessageContent>
          <BubbleGroup>
            <Bubble variant="muted">The capital of Australia is Canberra.</Bubble>
            <Bubble variant="muted">It was chosen as a compromise between Sydney and Melbourne.</Bubble>
          </BubbleGroup>
          <MessageFooter>Just now</MessageFooter>
        </MessageContent>
      </Message>
    </ChatThread>
  ),
}
