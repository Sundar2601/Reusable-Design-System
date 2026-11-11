// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=12-35
// source=src/components/mobile/ios/IosNavigationBar.tsx
// component=IosNavigationBar
import figma from 'figma'
const instance = figma.selectedInstance

const title = instance.getString('Title')
const variant = instance.getEnum('Variant', { inline: '', large: ' large' })

export default {
  example: figma.code`<IosNavigationBar title="${title}"${variant} />`,
  imports: ["import { IosNavigationBar } from \"@bounteous/ui\""],
  id: "iosnavigationbarset",
  metadata: { nestable: true },
}
