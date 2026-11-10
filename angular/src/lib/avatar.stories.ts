import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { DsAvatar, DsAvatarGroup, DsAvatarGroupCount } from './avatar'

const meta: Meta<DsAvatar> = {
  title: 'Components/Avatar',
  component: DsAvatar,
  tags: ['autodocs'],
  decorators: [moduleMetadata({ imports: [DsAvatar, DsAvatarGroup, DsAvatarGroupCount] })],
  argTypes: { size: { control: 'inline-radio', options: ['sm', 'default', 'lg'] } },
  args: { src: 'https://github.com/shadcn.png', alt: '@shadcn', fallback: 'CN', size: 'default', badge: false },
}
export default meta
type Story = StoryObj<DsAvatar>

export const Image: Story = {}
export const Fallback: Story = { args: { src: undefined } }
export const WithBadge: Story = { args: { badge: true } }
export const Group: Story = {
  render: () => ({
    template: `<ds-avatar-group>
      <ds-avatar fallback="AB" /><ds-avatar fallback="CD" /><ds-avatar-group-count>+3</ds-avatar-group-count>
    </ds-avatar-group>`,
  }),
}
