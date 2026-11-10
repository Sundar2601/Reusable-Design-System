import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { ZardButtonComponent } from '@/shared/components/button'
import { ZardInputComponent } from '@/shared/components/input'
import { ZardSheetComponent, ZardSheetImports } from '@/shared/components/sheet'

const meta: Meta<ZardSheetComponent> = {
  title: 'Sheet',
  component: ZardSheetComponent,
  tags: ['autodocs'],
  parameters: { layout: 'centered', docs: { description: { component: 'Sheet (ZardUI). A panel that slides in from an edge. `z-sheet` with `[(zVisible)]` and `zSide` = top / right / bottom / left. `z-sheet-close` dismisses it.' } } },
  decorators: [moduleMetadata({ imports: [...ZardSheetImports, ZardButtonComponent, ZardInputComponent] })],
}
export default meta
type Story = StoryObj<ZardSheetComponent>

const sheet = (side: string) => ({
  props: { open: false },
  template: `<button z-button zType="outline" (click)="open = true">Open ${side}</button>
  <z-sheet [(zVisible)]="open" zSide="${side}">
    <z-sheet-header>
      <z-sheet-title>Edit profile</z-sheet-title>
      <z-sheet-description>Make changes to your profile here. Click save when you are done.</z-sheet-description>
    </z-sheet-header>
    <div class="grid gap-3 px-4">
      <label class="text-sm font-medium">Name</label>
      <input z-input value="Pedro Duarte" />
    </div>
    <z-sheet-footer><button z-button z-sheet-close>Save changes</button></z-sheet-footer>
  </z-sheet>`,
})

export const Right: Story = { render: () => sheet('right') }
export const Left: Story = { render: () => sheet('left') }
export const Top: Story = { render: () => sheet('top') }
export const Bottom: Story = { render: () => sheet('bottom') }
