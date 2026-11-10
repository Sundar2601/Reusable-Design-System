import { Component, Directive, input } from '@angular/core'

@Component({
  selector: 'ds-card',
  host: {
    'data-slot': 'card',
    '[attr.data-size]': 'size()',
    class:
      "group/card relative flex w-96 flex-col gap-4 overflow-hidden rounded-xl bg-card py-4 text-sm text-card-foreground after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:border after:border-border after:content-[''] has-data-[slot=card-footer]:pb-0 has-data-[slot=card-image]:pt-0",
  },
  template: `<ng-content />`,
})
export class DsCard {
  readonly size = input<'default' | 'sm'>('default')
}

@Directive({ selector: 'ds-card-image', host: { 'data-slot': 'card-image', class: 'block h-54 w-full shrink-0 overflow-hidden bg-muted [&>img]:size-full [&>img]:object-cover' } })
export class DsCardImage {}

@Directive({ selector: 'ds-card-header', host: { 'data-slot': 'card-header', class: 'grid auto-rows-min items-start gap-1 px-4 has-data-[slot=card-action]:grid-cols-[1fr_auto]' } })
export class DsCardHeader {}

@Directive({ selector: 'ds-card-title', host: { 'data-slot': 'card-title', class: 'block text-base font-medium text-card-foreground group-data-[size=sm]/card:text-sm' } })
export class DsCardTitle {}

@Directive({ selector: 'ds-card-description', host: { 'data-slot': 'card-description', class: 'block text-sm text-muted-foreground' } })
export class DsCardDescription {}

@Directive({ selector: 'ds-card-action', host: { 'data-slot': 'card-action', class: 'col-start-2 row-span-2 row-start-1 self-start justify-self-end' } })
export class DsCardAction {}

@Directive({ selector: 'ds-card-content', host: { 'data-slot': 'card-content', class: 'block px-4 text-sm text-card-foreground' } })
export class DsCardContent {}

@Directive({ selector: 'ds-card-footer', host: { 'data-slot': 'card-footer', class: 'flex flex-col gap-2 bg-muted p-4 shadow-[inset_0_1px_0_0_var(--border)]' } })
export class DsCardFooter {}

export const DS_CARD = [DsCard, DsCardImage, DsCardHeader, DsCardTitle, DsCardDescription, DsCardAction, DsCardContent, DsCardFooter] as const
