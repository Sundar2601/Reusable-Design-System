import { ChangeDetectionStrategy, Component, input } from '@angular/core'
import { ZardAvatarComponent } from '@/shared/components/avatar/avatar.component'

/** Notification Item. One row of a notification list. Mirrors the React NotificationItem. Project buttons with the `actions` attribute. */
@Component({
  selector: 'ui-notification-item',
  imports: [ZardAvatarComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex w-96 items-start gap-3 rounded-lg p-3 text-sm transition-colors hover:bg-muted',
    '[class.bg-muted/50]': 'unread()',
    '[attr.data-slot]': '"notification-item"',
    '[attr.data-unread]': 'unread()',
  },
  template: `
    <z-avatar [zFallback]="avatarFallback()" [zSrc]="avatarSrc()" />
    <div class="flex min-w-0 flex-1 flex-col gap-1">
      <div class="flex items-baseline justify-between gap-2">
        <span class="font-medium text-foreground">{{ heading() }}</span>
        @if (time()) {
          <span class="shrink-0 text-xs text-muted-foreground">{{ time() }}</span>
        }
      </div>
      @if (description()) {
        <span class="text-muted-foreground">{{ description() }}</span>
      }
      <div class="mt-1 flex items-center gap-2 empty:hidden"><ng-content select="[actions]" /></div>
    </div>
    @if (unread()) {
      <span data-slot="notification-item-dot" aria-label="Unread" class="mt-1.5 size-2 shrink-0 rounded-full bg-primary"></span>
    }
  `,
})
export class NotificationItemComponent {
  readonly heading = input('')
  readonly description = input('')
  readonly time = input('')
  readonly unread = input(false)
  readonly avatarSrc = input('')
  readonly avatarFallback = input('?')
}
