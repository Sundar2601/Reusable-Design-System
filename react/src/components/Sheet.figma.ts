// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=9-315
// source=src/components/Sheet.tsx
// component=Sheet
import figma from 'figma'
const instance = figma.selectedInstance

export default {
  example: figma.code`<Sheet>
  <SheetTrigger asChild><Button>Open</Button></SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Title</SheetTitle>
      <SheetDescription>Description</SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>`,
  imports: ["import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription } from \"@bounteous/ui\"","import { Button } from \"@bounteous/ui\""],
  id: "sheet",
  metadata: { nestable: true },
}
