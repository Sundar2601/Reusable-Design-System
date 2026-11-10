import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { ZardAccordionImports } from '@/shared/components/accordion/accordion.imports'
import { ZardAccordionComponent } from '@/shared/components/accordion/accordion.component'

const items = `
  <z-accordion-item zValue="item-1" zTitle="Is it accessible?">Yes. It adheres to the WAI-ARIA design pattern.</z-accordion-item>
  <z-accordion-item zValue="item-2" zTitle="Is it styled?">Yes. It comes with default styles that match the other components.</z-accordion-item>
  <z-accordion-item zValue="item-3" zTitle="Is it disabled?" zDisabled>No.</z-accordion-item>`

const meta: Meta<ZardAccordionComponent> = {
  title: 'Accordion',
  component: ZardAccordionComponent,
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Accordion (ZardUI). Same as the React Accordion: `zType` single / multiple, `zCollapsible`, `zDefaultValue`, items with `zTitle` and `zValue`.' } } },
  decorators: [moduleMetadata({ imports: [...ZardAccordionImports] })],
}
export default meta
type Story = StoryObj<ZardAccordionComponent>

export const Single: Story = {
  render: () => ({ template: `<z-accordion class="w-96" zType="single" zDefaultValue="item-1">${items}</z-accordion>` }),
}
export const Multiple: Story = {
  render: () => ({
    template: `<z-accordion class="w-96" zType="multiple" [zDefaultValue]="['item-1', 'item-2']">${items}</z-accordion>`,
  }),
}
