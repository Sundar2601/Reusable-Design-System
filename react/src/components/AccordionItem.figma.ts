// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=8-182
// source=src/components/Accordion.tsx
// component=AccordionItem
import figma from 'figma'
const instance = figma.selectedInstance

const title = instance.getString('Title')
const open = instance.getEnum('Open', { false: '', true: ' defaultValue="item"' })

export default {
  example: figma.code`<Accordion type="single" collapsible${open}>
  <AccordionItem value="item">
    <AccordionTrigger>${title}</AccordionTrigger>
    <AccordionContent>Content</AccordionContent>
  </AccordionItem>
</Accordion>`,
  imports: ["import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from \"@bounteous/ui\""],
  id: "accordionitem",
  metadata: { nestable: true },
}
