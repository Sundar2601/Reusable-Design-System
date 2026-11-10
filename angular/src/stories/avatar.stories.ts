import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { ZardAvatarImports } from '@/shared/components/avatar/avatar.imports'
import { ZardAvatarComponent } from '@/shared/components/avatar/avatar.component'

const meta: Meta<ZardAvatarComponent> = {
  title: 'Avatar',
  component: ZardAvatarComponent,
  tags: ['autodocs'],
  decorators: [moduleMetadata({ imports: [...ZardAvatarImports] })],
  parameters: {
    docs: {
      description: {
        component:
          'Avatar (ZardUI). Same variants as the React Avatar: `zSize` sm 24 / default 32 / lg 40, `zFallback` text or count, `zShowBadge` status dot, and an avatar group.',
      },
    },
  },
  argTypes: {
    zSize: { name: 'size', control: 'inline-radio', options: ['sm', 'default', 'lg'] },
    zSrc: { table: { disable: true } },
    zAlt: { table: { disable: true } },
    zFallback: { name: 'fallback', control: 'text' },
    zShowBadge: { name: 'badge', control: 'boolean' },
  },
  args: { zSize: 'default', zFallback: 'AB', zShowBadge: false },
  render: (args) => ({
    props: args,
    template: `<z-avatar [zFallback]="zFallback" [zSize]="zSize" [zShowBadge]="zShowBadge" />`,
  }),
}
export default meta
type Story = StoryObj<ZardAvatarComponent>

export const Fallback: Story = {}
export const WithBadge: Story = { args: { zShowBadge: true } }
export const Sizes: Story = {
  render: () => ({
    template: `<div class="flex items-center gap-3">
      <z-avatar zFallback="AB" zSize="sm" /><z-avatar zFallback="AB" /><z-avatar zFallback="AB" zSize="lg" />
    </div>`,
  }),
}
export const Group: Story = {
  render: () => ({
    template: `<z-avatar-group>
      <z-avatar zFallback="AB" /><z-avatar zFallback="CD" /><z-avatar-group-count>+3</z-avatar-group-count>
    </z-avatar-group>`,
  }),
}
export const Image: Story = {
  render: () => ({ template: `<z-avatar zSrc="https://github.com/shadcn.png" zAlt="@shadcn" zFallback="CN" />` }),
}
