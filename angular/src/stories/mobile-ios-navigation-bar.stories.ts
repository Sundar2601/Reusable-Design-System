import type { Meta, StoryObj } from '@storybook/angular'
import { IosNavigationBarComponent } from '@/shared/extended/ios-navigation-bar.component'

const meta: Meta<IosNavigationBarComponent> = {
  title: 'Mobile/iOS/Navigation Bar',
  component: IosNavigationBarComponent,
  tags: ['autodocs'],
  parameters: { layout: 'centered', docs: { description: { component: 'iOS Navigation Bar (extended, hand-built). Same as the React IosNavigationBar: `title`, `largeTitle`, `backLabel`, `(back)`; trailing actions are projected content.' } } },
  args: { title: 'Settings', largeTitle: false },
  render: (args) => ({ props: args, template: `<div class="w-[390px] bg-background"><ios-navigation-bar [title]="title" [largeTitle]="largeTitle" [backLabel]="backLabel" /></div>` }),
}
export default meta
type Story = StoryObj<IosNavigationBarComponent>

export const Inline: Story = {}
export const WithBackButton: Story = {
  render: () => ({ template: `<div class="w-[390px] bg-background"><ios-navigation-bar title="General" backLabel="Settings"><span>Edit</span></ios-navigation-bar></div>` }),
}
export const LargeTitle: Story = {
  render: () => ({ template: `<div class="w-[390px] bg-background"><ios-navigation-bar title="Settings" [largeTitle]="true"><span>Edit</span></ios-navigation-bar></div>` }),
}
