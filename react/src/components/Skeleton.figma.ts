// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=120-421
// source=src/components/Skeleton.tsx
// component=Skeleton
//
// Shape sets the size classes. Shimmer=on adds the optional `shimmer` utility (src/theme/utilities.css).
import figma from 'figma'
const instance = figma.selectedInstance

const shape = instance.getEnum('Shape', { line: 'h-4 w-48', circle: 'size-10 rounded-full', block: 'h-24 w-full' })
const shimmer = instance.getEnum('Shimmer', { off: '', on: ' shimmer' })

export default {
  example: figma.code`<Skeleton className="${shape}${shimmer}" />`,
  imports: ['import { Skeleton } from "@bounteous/ui"'],
  id: 'skeleton',
  metadata: { nestable: true },
}
