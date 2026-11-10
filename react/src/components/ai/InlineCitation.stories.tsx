import type { Meta, StoryObj } from '@storybook/react-vite'
import { InlineCitation, InlineCitationCard, InlineCitationCardBody, InlineCitationCardTrigger, InlineCitationSource, InlineCitationText } from './InlineCitation'

const meta = {
  title: 'AI Elements/Inline Citation',
  component: InlineCitation,
  tags: ['autodocs'],
  render: (args) => (
    <p className="w-96 text-sm leading-relaxed">
      <InlineCitation {...args}>
        <InlineCitationText>Server components render on the server and ship no JavaScript for themselves.</InlineCitationText>
        <InlineCitationCard>
          <InlineCitationCardTrigger index={1} />
          <InlineCitationCardBody>
            <InlineCitationSource
              title="Server Components - React"
              url="https://react.dev/reference/rsc/server-components"
              description="Server Components are a new type of component that renders ahead of time, before bundling, in an environment separate from your client app."
            />
          </InlineCitationCardBody>
        </InlineCitationCard>
      </InlineCitation>
    </p>
  ),
} satisfies Meta<typeof InlineCitation>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
