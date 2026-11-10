import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { ZardButtonComponent } from '@/shared/components/button'
import { ZardInputComponent } from '@/shared/components/input'
import { ZardPopoverDirective, ZardPopoverImports } from '@/shared/components/popover'

const meta: Meta<ZardPopoverDirective> = {
  title: 'Popover',
  component: ZardPopoverDirective,
  tags: ['autodocs'],
  parameters: { layout: 'centered', docs: { description: { component: 'Popover (ZardUI). Put the `zPopover` directive on a trigger and pass an `ng-template` as `zContent`; wrap the content in `z-popover`. `zPlacement` = top / right / bottom / left, `zAlign` = start / center / end.' } } },
  decorators: [moduleMetadata({ imports: [...ZardPopoverImports, ZardButtonComponent, ZardInputComponent] })],
}
export default meta
type Story = StoryObj<ZardPopoverDirective>

export const Default: Story = {
  render: () => ({
    template: `<button z-button zType="outline" zPopover [zContent]="content">Open popover</button>
    <ng-template #content>
      <z-popover class="w-72">
        <div z-popover-header>
          <h4 z-popover-title>Dimensions</h4>
          <p z-popover-description>Set the dimensions for the layer.</p>
        </div>
        <div class="mt-4 grid grid-cols-3 items-center gap-2">
          <label class="text-sm">Width</label><input z-input class="col-span-2" value="100%" />
          <label class="text-sm">Height</label><input z-input class="col-span-2" value="25px" />
        </div>
      </z-popover>
    </ng-template>`,
  }),
}

export const Sides: Story = {
  render: () => ({
    props: { sides: ['top', 'right', 'bottom', 'left'] },
    template: `<div class="flex gap-3">
      @for (side of sides; track side) {
        <button z-button zType="outline" class="capitalize" zPopover [zContent]="content" [zPlacement]="$any(side)">{{ side }}</button>
      }
    </div>
    <ng-template #content><z-popover class="w-48">Opens on the side you chose.</z-popover></ng-template>`,
  }),
}
