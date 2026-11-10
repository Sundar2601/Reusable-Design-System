import { clsx, type ClassValue } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

/**
 * Our text styles (text-heading-h1, text-body-small, text-button-large, ...) set font size,
 * weight and line height. Without this, tailwind-merge mistakes them for text colors and
 * drops the real color class next to them.
 */
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': [
        {
          text: [
            'heading-h1',
            'heading-h2',
            'heading-h3',
            'heading-h4',
            'body-large',
            'body-medium',
            'body-small',
            'button-large',
            'button-medium',
            'button-small',
          ],
        },
      ],
    },
  },
})

/** Join class names and resolve Tailwind conflicts (later classes win). */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
