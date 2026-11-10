// url=https://www.figma.com/design/LIBRARY_FILE_KEY/Design-System?node-id=8-42
// source=src/components/Button.tsx
// component=Button
//
// TODO before publishing: replace LIBRARY_FILE_KEY above with the key of the Figma file
// that hosts the "Design System" library (the part after /design/ in its URL).
// 8-42 is the Button component set in that file.
import figma from 'figma'
const instance = figma.selectedInstance

// Figma "Type" becomes the React prop "variant" ("type" is a native button attribute).
const variant = instance.getEnum('Type', {
  Primary: 'primary',
  Secondary: 'secondary',
  Ghost: 'ghost',
})
const size = instance.getEnum('Size', {
  Large: 'lg',
  Medium: 'md',
  Small: 'sm',
})
// Hover is a CSS state in code, so only Disabled becomes a prop.
const state = instance.getEnum('State', {
  Default: 'default',
  Hover: 'default',
  Disabled: 'disabled',
})
const label = instance.getString('Label')

export default {
  example: figma.code`<Button variant="${variant}" size="${size}"${state === 'disabled' ? ' disabled' : ''}>${label}</Button>`,
  imports: ['import { Button } from "@your-scope/ui"'],
  id: 'button',
  metadata: { nestable: true },
}
