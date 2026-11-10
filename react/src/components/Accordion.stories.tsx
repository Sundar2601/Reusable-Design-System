import type { Meta, StoryObj } from '@storybook/react-vite'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './Accordion'

const meta = {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  args: { type: 'single', collapsible: true },
} satisfies Meta<typeof Accordion>

export default meta
type Story = StoryObj<typeof meta>

const items = (
  <>
    <AccordionItem value="item-1">
      <AccordionTrigger>Is it accessible?</AccordionTrigger>
      <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>Is it styled?</AccordionTrigger>
      <AccordionContent>Yes. It comes with default styles that match the other components.</AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3" disabled>
      <AccordionTrigger>Is it disabled?</AccordionTrigger>
      <AccordionContent>No.</AccordionContent>
    </AccordionItem>
  </>
)

export const Single: Story = {
  render: () => (
    <Accordion type="single" collapsible defaultValue="item-1" className="w-96">
      {items}
    </Accordion>
  ),
}

export const Multiple: Story = {
  render: () => (
    <Accordion type="multiple" defaultValue={['item-1', 'item-2']} className="w-96">
      {items}
    </Accordion>
  ),
}
