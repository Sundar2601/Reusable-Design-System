// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=53-796
// source=src/components/Accordion.tsx
// component=Accordion
import figma from 'figma'

export default {
  example: figma.code`<Accordion type="single" collapsible>
  <AccordionItem value="one">
    <AccordionTrigger>Question</AccordionTrigger>
    <AccordionContent>Answer</AccordionContent>
  </AccordionItem>
</Accordion>`,
  imports: ["import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from \"@bounteous/ui\""],
  id: "accordionheader",
  metadata: { nestable: true },
}
