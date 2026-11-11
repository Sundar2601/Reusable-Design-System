// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=13-130
// source=src/components/mobile/android/AndroidTopAppBar.tsx
// component=AndroidTopAppBar
import figma from 'figma'
const instance = figma.selectedInstance

const title = instance.getString('Title')
const variant = instance.getEnum('Variant', { small: 'small', 'center-aligned': 'center' })

export default {
  example: figma.code`<AndroidTopAppBar variant="${variant}" title="${title}" />`,
  imports: ["import { AndroidTopAppBar } from \"@bounteous/ui\""],
  id: "androidtopappbarset",
  metadata: { nestable: true },
}
