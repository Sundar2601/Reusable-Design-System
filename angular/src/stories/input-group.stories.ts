import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { ZardInputGroupImports } from '@/shared/components/input-group/input-group.imports'
import { ZardInputGroupComponent } from '@/shared/components/input-group/input-group.component'
import { ZardInputComponent } from '@/shared/components/input'
import { ZardTextareaComponent } from '@/shared/components/textarea'

const meta: Meta<ZardInputGroupComponent> = {
  title: 'Input Group',
  component: ZardInputGroupComponent,
  tags: ['autodocs'],
  decorators: [moduleMetadata({ imports: [...ZardInputGroupImports, ZardInputComponent, ZardTextareaComponent] })],
  parameters: { docs: { description: { component: 'Input Group (ZardUI). `z-input-group` with `z-input-group-addon` (`zAlign` inline-start / inline-end / block-start / block-end), `z-input-group-text` and `button[z-input-group-button]`, like the React InputGroup.' } } },
  render: () => ({
    template: `<z-input-group class="w-80">
      <input z-input placeholder="Search..." />
      <z-input-group-addon><span z-input-group-text>Search</span></z-input-group-addon>
    </z-input-group>`,
  }),
}
export default meta
type Story = StoryObj<ZardInputGroupComponent>

export const WithText: Story = {
  render: () => ({
    template: `<z-input-group class="w-80">
      <z-input-group-addon><span z-input-group-text>https://</span></z-input-group-addon>
      <input z-input placeholder="example.com" />
      <z-input-group-addon zAlign="inline-end"><span z-input-group-text>.com</span></z-input-group-addon>
    </z-input-group>`,
  }),
}
export const WithButton: Story = {
  render: () => ({
    template: `<z-input-group class="w-80">
      <input z-input value="https://design.example/share" readonly />
      <z-input-group-addon zAlign="inline-end"><button z-input-group-button zVariant="secondary">Copy</button></z-input-group-addon>
    </z-input-group>`,
  }),
}
export const Invalid: Story = {
  render: () => ({
    template: `<z-input-group class="w-80">
      <z-input-group-addon><span z-input-group-text>@</span></z-input-group-addon>
      <input z-input aria-invalid="true" placeholder="you@example.com" />
    </z-input-group>`,
  }),
}
export const Disabled: Story = {
  render: () => ({
    template: `<z-input-group class="w-80 opacity-50">
      <z-input-group-addon><span z-input-group-text>@</span></z-input-group-addon>
      <input z-input disabled placeholder="you@example.com" />
    </z-input-group>`,
  }),
}
export const WithTextarea: Story = {
  render: () => ({
    template: `<z-input-group class="w-80">
      <textarea z-textarea placeholder="Write a comment..." rows="3"></textarea>
      <z-input-group-addon zAlign="block-end">
        <span z-input-group-text>0 / 280</span>
        <button z-input-group-button zVariant="default" class="ms-auto">Send</button>
      </z-input-group-addon>
    </z-input-group>`,
  }),
}
