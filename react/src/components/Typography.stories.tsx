import type { Meta, StoryObj } from '@storybook/react-vite'
import { Blockquote, H1, H2, H3, H4, InlineCode, Large, Lead, Muted, P, Small } from './Typography'

const meta = {
  title: 'Components/Typography',
  tags: ['autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Headings: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <H1>Heading 1</H1>
      <H2>Heading 2</H2>
      <H3>Heading 3</H3>
      <H4>Heading 4</H4>
    </div>
  ),
}

export const Paragraph: Story = {
  render: () => <P>The king, seeing how much happier his subjects were, realized the error of his ways.</P>,
}
export const LeadText: Story = { render: () => <Lead>A modal dialog that interrupts the user with important content.</Lead> }
export const LargeText: Story = { render: () => <Large>Are you absolutely sure?</Large> }
export const SmallText: Story = { render: () => <Small>Email address</Small> }
export const MutedText: Story = { render: () => <Muted>Enter your email address.</Muted> }
export const Code: Story = { render: () => <InlineCode>@radix-ui/react-alert-dialog</InlineCode> }
export const Quote: Story = {
  render: () => <Blockquote>&quot;After all,&quot; he said, &quot;everyone enjoys a good joke.&quot;</Blockquote>,
}
