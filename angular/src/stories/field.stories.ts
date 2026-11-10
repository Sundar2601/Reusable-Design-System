import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { ZardInputComponent } from '@/shared/components/input'
import { ZardFieldImports } from '@/shared/components/field/field.imports'
import { ZardFieldComponent } from '@/shared/components/field/field.component'

const meta: Meta<ZardFieldComponent> = {
  title: 'Field',
  component: ZardFieldComponent,
  tags: ['autodocs'],
  decorators: [moduleMetadata({ imports: [...ZardFieldImports, ZardInputComponent] })],
  parameters: { docs: { description: { component: 'Field (ZardUI). Label, control and description, like the React Field.' } } },
}
export default meta
type Story = StoryObj<ZardFieldComponent>

export const LabelAndDescription: Story = {
  render: () => ({
    template: `<z-field class="w-80">
      <label z-field-label for="name">Name</label>
      <input z-input id="name" placeholder="Ada Lovelace" />
      <p z-field-description>As it appears on your ID.</p>
    </z-field>`,
  }),
}
export const RequiredAndDisabled: Story = {
  render: () => ({
    template: `<div class="flex w-80 flex-col gap-6">
      <z-field><label z-field-label for="r">Required <span class="text-text-destructive">*</span></label><input z-input id="r" /></z-field>
      <z-field class="opacity-50"><label z-field-label for="d">Disabled</label><input z-input id="d" disabled /></z-field>
    </div>`,
  }),
}
