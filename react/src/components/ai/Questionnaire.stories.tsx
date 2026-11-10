import type { Meta, StoryObj } from '@storybook/react-vite'
import { Questionnaire, type QuestionnaireItem } from './Questionnaire'

const items: QuestionnaireItem[] = [
  {
    name: 'tone',
    title: 'Which tone should the answer use?',
    description: 'Pick one.',
    required: true,
    choices: [
      { value: 'formal', label: 'Formal', description: 'Professional and precise' },
      { value: 'friendly', label: 'Friendly' },
      { value: 'concise', label: 'Concise' },
    ],
  },
  {
    name: 'topics',
    title: 'Which topics should it cover?',
    multiple: true,
    allowCustom: true,
    choices: [
      { value: 'pricing', label: 'Pricing' },
      { value: 'security', label: 'Security' },
      { value: 'roadmap', label: 'Roadmap', disabled: true },
    ],
  },
]

const meta = {
  title: 'AI Elements/Questionnaire',
  component: Questionnaire,
  tags: ['autodocs'],
  args: { items },
  argTypes: { shortcuts: { control: 'inline-radio', options: ['none', 'numbers', 'letters'] } },
} satisfies Meta<typeof Questionnaire>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const WithShortcuts: Story = { args: { shortcuts: 'numbers' } }
export const SingleQuestion: Story = { args: { items: [items[0]], submitLabel: 'Send answer' } }
