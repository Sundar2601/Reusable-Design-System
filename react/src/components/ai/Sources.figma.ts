// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=51-498
// source=src/components/ai/Sources.tsx
// component=Sources
//
// Figma AI element has no properties yet; the example shows typical usage.
import figma from 'figma'
const instance = figma.selectedInstance

export default {
  example: figma.code`<Sources>
  <SourcesTrigger />
  <SourcesContent>
    <Source href="#" title="Source" />
  </SourcesContent>
</Sources>`,
  imports: ["import { Sources, SourcesTrigger, SourcesContent, Source } from \"@bounteous/ui\""],
  id: "sources",
  metadata: { nestable: true },
}
