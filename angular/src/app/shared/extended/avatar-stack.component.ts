import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core'
import { ZardAvatarComponent } from '@/shared/components/avatar/avatar.component'

export interface AvatarStackItem {
  name: string
  src?: string
}

/** Avatar Group. Overlapping avatars with a "+N" overflow bubble, composed from ZardUI Avatar. Mirrors the React AvatarStack. */
@Component({
  selector: 'ui-avatar-stack',
  imports: [ZardAvatarComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex -space-x-2',
    role: 'group',
    '[attr.aria-label]': 'items().length + " people"',
    '[attr.data-slot]': '"avatar-stack"',
  },
  template: `
    @for (item of visible(); track item.name) {
      <z-avatar class="ring-2 ring-background" [zSize]="size()" [zFallback]="initials(item.name)" [zSrc]="item.src ?? ''" [zAlt]="item.name" [attr.title]="item.name" />
    }
    @if (extra() > 0) {
      <z-avatar data-slot="avatar-stack-count" class="ring-2 ring-background" [zSize]="size()" [zFallback]="'+' + extra()" />
    }
  `,
})
export class AvatarStackComponent {
  readonly items = input<AvatarStackItem[]>([])
  readonly max = input(4)
  readonly size = input<'sm' | 'default' | 'lg'>('default')
  protected readonly visible = computed(() => this.items().slice(0, this.max()))
  protected readonly extra = computed(() => this.items().length - this.visible().length)

  protected initials(name: string) {
    return name
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((p) => p[0]?.toUpperCase())
      .join('')
  }
}
