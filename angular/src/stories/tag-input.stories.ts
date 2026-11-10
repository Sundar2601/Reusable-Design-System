import type { Meta, StoryObj } from '@storybook/angular'
import { TagInputComponent } from '@/shared/extended/tag-input.component'

const meta: Meta<TagInputComponent> = {
  title: 'Tag Input',
  component: TagInputComponent,
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Tag Input (extended, hand-built). Same API as the React TagInput: two-way `value`, `placeholder`, `max`, `disabled`, `invalid`. Enter or comma adds a tag.' } } },
  argTypes: { disabled: { control: 'boolean' }, invalid: { control: 'boolean' }, max: { control: { type: 'number', min: 1 } } },
  args: { value: [], placeholder: 'Add a tag', disabled: false, invalid: false },
  render: (args) => ({
    props: args,
    template: `<ui-tag-input [(value)]="value" [placeholder]="placeholder" [max]="max" [disabled]="disabled" [invalid]="invalid" />`,
  }),
}
export default meta
type Story = StoryObj<TagInputComponent>

export const Empty: Story = {}
export const WithTags: Story = { args: { value: ['design', 'system', 'angular'] } }
export const MaxTags: Story = { args: { value: ['one', 'two'], max: 3, placeholder: 'Up to 3 tags' } }
export const Invalid: Story = { args: { value: ['bad'], invalid: true } }
export const Disabled: Story = { args: { value: ['locked'], disabled: true } }
