import { ChangeDetectionStrategy, Component, Directive, computed, input, signal } from '@angular/core'

/** Usage: `<ds-avatar src="..." fallback="SS" size="lg" [badge]="true" />` */
@Component({
  selector: 'ds-avatar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'data-slot': 'avatar',
    '[attr.data-size]': 'size()',
    class:
      'group/avatar relative flex shrink-0 rounded-full select-none data-[size=sm]:size-6 data-[size=default]:size-8 data-[size=lg]:size-10',
  },
  template: `
    @if (src() && !failed()) {
      <img data-slot="avatar-image" [src]="src()" [alt]="alt()" (error)="failed.set(true)" class="aspect-square size-full rounded-full object-cover" />
    } @else {
      <span data-slot="avatar-fallback" class="flex size-full items-center justify-center rounded-full bg-muted text-sm text-muted-foreground group-data-[size=sm]/avatar:text-xs">{{ fallback() }}</span>
    }
    @if (badge()) {
      <span data-slot="avatar-badge" class="absolute right-0 bottom-0 z-10 flex items-center justify-center rounded-full bg-green-600 inset-ring-1 inset-ring-white group-data-[size=sm]/avatar:size-2 group-data-[size=default]/avatar:size-2.5 group-data-[size=lg]/avatar:size-3"></span>
    }
  `,
})
export class DsAvatar {
  readonly src = input<string>()
  readonly alt = input('')
  readonly fallback = input('')
  readonly size = input<'sm' | 'default' | 'lg'>('default')
  readonly badge = input(false)
  protected readonly failed = signal(false)
}

@Directive({ selector: 'ds-avatar-group', host: { 'data-slot': 'avatar-group', class: 'flex -space-x-2' } })
export class DsAvatarGroup {}

@Directive({ selector: 'ds-avatar-group-count', host: { 'data-slot': 'avatar-group-count', class: 'relative flex size-8 shrink-0 items-center justify-center rounded-full bg-muted text-sm text-muted-foreground ring-1 ring-background' } })
export class DsAvatarGroupCount {}
