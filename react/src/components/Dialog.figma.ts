// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=9-288
// source=src/components/Dialog.tsx
// component=Dialog
import figma from 'figma'
const instance = figma.selectedInstance

const title = instance.getString('Title')
const description = instance.getString('Description')

export default {
  example: figma.code`<Dialog>
  <DialogTrigger asChild><Button>Open</Button></DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>${title}</DialogTitle>
      <DialogDescription>${description}</DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>`,
  imports: ["import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from \"@bounteous/ui\"","import { Button } from \"@bounteous/ui\""],
  id: "dialog",
  metadata: { nestable: true },
}
