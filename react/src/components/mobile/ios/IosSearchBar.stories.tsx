import type { Meta, StoryObj } from '@storybook/react-vite'
import { IosSearchBar, IosTextField } from './IosSearchBar'

const meta = {
  title: 'Mobile/iOS/Search Bar & Text Field',
  component: IosSearchBar,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [(Story) => <div className="w-[358px]">{Story()}</div>],
} satisfies Meta<typeof IosSearchBar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const WithCancel: Story = { args: { showCancel: true, value: 'Photos', onChange: () => {} } }
export const TextField: Story = { render: () => <IosTextField placeholder="Name" /> }
export const TextFieldWithLabel: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <IosTextField label="Email" placeholder="name@example.com" />
      <IosTextField label="Password" type="password" placeholder="Required" />
    </div>
  ),
}
