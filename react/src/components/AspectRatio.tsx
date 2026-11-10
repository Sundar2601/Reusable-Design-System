import * as React from 'react'
import { AspectRatio as AspectRatioPrimitive } from 'radix-ui'

/**
 * Aspect Ratio. Figma component "Aspect Ratio". `ratio` is width / height (16 / 9, 1, 4 / 3).
 */
function AspectRatio(props: React.ComponentProps<typeof AspectRatioPrimitive.Root>) {
  return <AspectRatioPrimitive.Root data-slot="aspect-ratio" {...props} />
}

export { AspectRatio }
