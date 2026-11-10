import type { Meta, StoryObj } from '@storybook/react-vite'
import { Bell, Plane, Wifi } from 'lucide-react'
import { IosList, IosListRow } from './IosList'
import { IosSwitch } from './IosSwitch'

const meta = {
  title: 'Mobile/iOS/List',
  component: IosList,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [(Story) => <div className="w-[390px] bg-muted p-4">{Story()}</div>],
} satisfies Meta<typeof IosList>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { header: 'Settings' },
  render: (args) => (
    <IosList {...args}>
      <IosListRow title="Airplane Mode" leading={<Plane />} accessory={<IosSwitch aria-label="Airplane Mode" />} />
      <IosListRow title="Wi-Fi" leading={<Wifi />} value="Home" chevron />
      <IosListRow title="Notifications" leading={<Bell />} chevron />
    </IosList>
  ),
}
export const WithSubtitleAndFooter: Story = {
  args: { header: 'Account', footer: 'Changes sync across your devices.' },
  render: (args) => (
    <IosList {...args}>
      <IosListRow title="Apple ID" subtitle="name@example.com" chevron />
      <IosListRow title="Sign Out" destructive />
    </IosList>
  ),
}
