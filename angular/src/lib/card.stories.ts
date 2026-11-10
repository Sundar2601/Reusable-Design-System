import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { DsButton } from './button'
import { DS_CARD, DsCard } from './card'

const meta: Meta<DsCard> = {
  title: 'Components/Card',
  component: DsCard,
  tags: ['autodocs'],
  decorators: [moduleMetadata({ imports: [...DS_CARD, DsButton] })],
  argTypes: { size: { control: 'inline-radio', options: ['default', 'sm'] } },
  args: { size: 'default' },
  render: (args) => ({
    props: args,
    template: `<ds-card [size]="size">
      <ds-card-header>
        <ds-card-title>Create project</ds-card-title>
        <ds-card-description>Deploy your new project in one click.</ds-card-description>
        <ds-card-action><button dsButton size="sm">Sign up</button></ds-card-action>
      </ds-card-header>
      <ds-card-content>Card content goes here.</ds-card-content>
      <ds-card-footer>
        <button dsButton>Deploy</button>
        <button dsButton variant="outline">Cancel</button>
      </ds-card-footer>
    </ds-card>`,
  }),
}
export default meta
type Story = StoryObj<DsCard>

export const Default: Story = {}
export const Small: Story = { args: { size: 'sm' } }
