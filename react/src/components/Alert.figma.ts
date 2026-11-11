// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=7-225
// source=src/components/Alert.tsx
// component=Alert
//
// Code Alert has default and destructive; Figma success, warning and info map to default.
import figma from 'figma'
const instance = figma.selectedInstance

const variant = instance.getEnum('Variant', { default: 'default', destructive: 'destructive', success: 'default', warning: 'default', info: 'default' })
const title = instance.getString('Title')
const description = instance.getString('Description')

export default {
  example: figma.code`<Alert variant="${variant}">
  <AlertTitle>${title}</AlertTitle>
  <AlertDescription>${description}</AlertDescription>
</Alert>`,
  imports: ["import { Alert, AlertTitle, AlertDescription } from \"@bounteous/ui\""],
  id: "alert",
  metadata: { nestable: true },
}
