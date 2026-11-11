// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=12-174
// source=src/components/mobile/ios/IosList.tsx
// component=IosListRow
import figma from 'figma'
const instance = figma.selectedInstance

const label = instance.getString('Label')
const variant = instance.getEnum('Variant', { default: '', value: ' value="Value"', toggle: ' trailing={<IosSwitch />}' })

export default {
  example: figma.code`<IosList>
  <IosListRow title="${label}"${variant} />
</IosList>`,
  imports: ["import { IosList, IosListRow } from \"@bounteous/ui\"","import { IosSwitch } from \"@bounteous/ui\""],
  id: "ioslistrow",
  metadata: { nestable: true },
}
