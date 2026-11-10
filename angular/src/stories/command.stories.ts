import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { ZardCommandComponent, ZardCommandImports } from '@/shared/components/command'

const meta: Meta<ZardCommandComponent> = {
  title: 'Command',
  component: ZardCommandComponent,
  tags: ['autodocs'],
  parameters: { layout: 'centered', docs: { description: { component: 'Command (ZardUI). A searchable command palette: `z-command` with `z-command-input`, `z-command-list`, and `z-command-option` (optionally grouped with `z-command-option-group`). Arrow keys move, Enter selects.' } } },
  decorators: [moduleMetadata({ imports: [...ZardCommandImports] })],
}
export default meta
type Story = StoryObj<ZardCommandComponent>

export const Default: Story = {
  render: () => ({
    template: `<z-command class="w-96 rounded-lg shadow-md ring-1 ring-border">
      <z-command-input placeholder="Type a command or search..." />
      <z-command-list>
        <z-command-option-group zLabel="Suggestions">
          <z-command-option zLabel="Calendar" zValue="calendar" />
          <z-command-option zLabel="Search Emoji" zValue="emoji" />
          <z-command-option zLabel="Calculator" zValue="calculator" [zDisabled]="true" />
        </z-command-option-group>
        <z-command-divider />
        <z-command-option-group zLabel="Settings">
          <z-command-option zLabel="Profile" zValue="profile" zShortcut="⌘P" />
          <z-command-option zLabel="Billing" zValue="billing" zShortcut="⌘B" />
          <z-command-option zLabel="Settings" zValue="settings" zShortcut="⌘S" />
        </z-command-option-group>
      </z-command-list>
    </z-command>`,
  }),
}
