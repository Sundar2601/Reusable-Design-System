// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=11-494
// source=src/components/Banner.tsx
// component=Banner
import figma from 'figma'
const instance = figma.selectedInstance

const variant = instance.getEnum('Variant', { info: 'info', warning: 'warning', success: 'success', destructive: 'destructive' })
const message = instance.getString('Message')

export default {
  example: figma.code`<Banner variant="${variant}" title="${message}" />`,
  imports: ["import { Banner } from \"@bounteous/ui\""],
  id: "banner",
  metadata: { nestable: true },
}
