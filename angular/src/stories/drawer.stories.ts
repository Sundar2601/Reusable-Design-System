import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { ZardButtonComponent } from '@/shared/components/button'
import { ZardDrawerComponent, ZardDrawerImports } from '@/shared/components/drawer'

const meta: Meta<ZardDrawerComponent> = {
  title: 'Drawer',
  component: ZardDrawerComponent,
  tags: ['autodocs'],
  parameters: { layout: 'centered', docs: { description: { component: 'Drawer (ZardUI). A swipeable panel. `z-drawer` with `[(zVisible)]`, `zPlacement` = bottom / top / left / right, and `zHandle` for the grab handle. Flick it away to dismiss.' } } },
  decorators: [moduleMetadata({ imports: [...ZardDrawerImports, ZardButtonComponent] })],
}
export default meta
type Story = StoryObj<ZardDrawerComponent>

export const Default: Story = {
  render: () => ({
    props: { open: false },
    template: `<button z-button zType="outline" (click)="open = true">Open drawer</button>
    <z-drawer [(zVisible)]="open" zPlacement="bottom" [zHandle]="true">
      <z-drawer-header>
        <z-drawer-title>Move goal</z-drawer-title>
        <z-drawer-description>Set your daily activity goal.</z-drawer-description>
      </z-drawer-header>
      <div class="p-4 text-center text-5xl font-bold tracking-tighter">350</div>
      <z-drawer-footer>
        <button z-button z-drawer-close>Submit</button>
        <button z-button zType="outline" z-drawer-close>Cancel</button>
      </z-drawer-footer>
    </z-drawer>`,
  }),
}

export const Right: Story = {
  render: () => ({
    props: { open: false },
    template: `<button z-button zType="outline" (click)="open = true">Open right</button>
    <z-drawer [(zVisible)]="open" zPlacement="right">
      <z-drawer-header>
        <z-drawer-title>Side drawer</z-drawer-title>
        <z-drawer-description>Swipe or drag to dismiss.</z-drawer-description>
      </z-drawer-header>
      <z-drawer-footer><button z-button zType="outline" z-drawer-close>Close</button></z-drawer-footer>
    </z-drawer>`,
  }),
}
