import type { Meta, StoryObj } from '@storybook/react-vite'
import { Search } from 'lucide-react'
import { ChainOfThought, ChainOfThoughtSearchResult, ChainOfThoughtSearchResults, ChainOfThoughtStep } from './ChainOfThought'

const meta = {
  title: 'AI Elements/Chain of Thought',
  component: ChainOfThought,
  tags: ['autodocs'],
  render: (args) => (
    <ChainOfThought {...args} className="w-96">
      <ChainOfThoughtStep label="Understand the question" description="The user asks how to migrate a form library." status="complete" />
      <ChainOfThoughtStep label="Search the docs" icon={<Search />} status="complete">
        <ChainOfThoughtSearchResults>
          <ChainOfThoughtSearchResult>react-hook-form.com</ChainOfThoughtSearchResult>
          <ChainOfThoughtSearchResult>zod.dev</ChainOfThoughtSearchResult>
        </ChainOfThoughtSearchResults>
      </ChainOfThoughtStep>
      <ChainOfThoughtStep label="Compare migration paths" description="Weighing the incremental and the full rewrite approach." status="active" />
      <ChainOfThoughtStep label="Write the answer" status="pending" last />
    </ChainOfThought>
  ),
} satisfies Meta<typeof ChainOfThought>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Collapsed: Story = { args: { defaultOpen: false } }
