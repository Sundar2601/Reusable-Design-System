import type { Meta, StoryObj } from '@storybook/react-vite'
import { Source, Sources, SourcesContent, SourcesTrigger } from './Sources'

const sources = [
  { href: 'https://react.dev/reference/react/use', title: 'use - React' },
  { href: 'https://developer.mozilla.org/docs/Web/API/Fetch_API', title: 'Fetch API - MDN' },
  { href: 'https://www.w3.org/WAI/ARIA/apg/', title: 'ARIA Authoring Practices Guide' },
]

const meta = {
  title: 'AI Elements/Sources',
  component: Sources,
  tags: ['autodocs'],
  render: (args) => (
    <Sources {...args} className="w-80">
      <SourcesTrigger count={sources.length} />
      <SourcesContent>
        {sources.map((s) => (
          <Source key={s.href} href={s.href} title={s.title} />
        ))}
      </SourcesContent>
    </Sources>
  ),
} satisfies Meta<typeof Sources>

export default meta
type Story = StoryObj<typeof meta>

export const Closed: Story = {}
export const Open: Story = { args: { defaultOpen: true } }
