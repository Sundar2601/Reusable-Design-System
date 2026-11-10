import { ChangeDetectionStrategy, Component, input, model, output } from '@angular/core'

/** iOS Search Bar: 36px rounded field with magnifier, clear button and optional Cancel. Mirrors the React IosSearchBar. */
@Component({
  selector: 'ios-search-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'flex w-full items-center gap-3 font-[system-ui,-apple-system,sans-serif]', '[attr.data-slot]': '"ios-search-bar"' },
  template: `
    <label class="flex h-9 flex-1 items-center gap-1.5 rounded-[10px] bg-muted px-2 text-muted-foreground">
      <svg class="size-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
      <input
        type="search"
        class="min-w-0 flex-1 bg-transparent text-[17px] text-foreground outline-none placeholder:text-muted-foreground [&::-webkit-search-cancel-button]:hidden"
        [placeholder]="placeholder()"
        [value]="value()"
        (input)="value.set($any($event.target).value)"
      />
      @if (value()) {
        <button type="button" aria-label="Clear" class="cursor-pointer rounded-full bg-muted-foreground/60 p-0.5 text-background outline-none" (click)="value.set(''); cleared.emit()">
          <svg class="size-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
        </button>
      }
    </label>
    @if (showCancel()) {
      <button type="button" class="cursor-pointer text-[17px] text-[color:var(--ios-tint,#007aff)] outline-none" (click)="cancel.emit()">Cancel</button>
    }
  `,
})
export class IosSearchBarComponent {
  readonly value = model('')
  readonly placeholder = input('Search')
  readonly showCancel = input(false)
  readonly cancel = output<void>()
  readonly cleared = output<void>()
}

/** iOS Text Field: 44px field with optional leading label. Mirrors the React IosTextField. */
@Component({
  selector: 'ios-text-field',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex h-11 w-full items-center gap-3 rounded-[10px] bg-muted px-4 font-[system-ui,-apple-system,sans-serif] text-[17px]',
    '[attr.data-slot]': '"ios-text-field"',
  },
  template: `
    @if (label()) {
      <span class="w-24 shrink-0 text-foreground">{{ label() }}</span>
    }
    <input
      class="min-w-0 flex-1 bg-transparent text-foreground outline-none placeholder:text-muted-foreground"
      [type]="type()"
      [placeholder]="placeholder()"
      [attr.aria-label]="label() || placeholder()"
      [value]="value()"
      (input)="value.set($any($event.target).value)"
    />
  `,
})
export class IosTextFieldComponent {
  readonly value = model('')
  readonly label = input('')
  readonly placeholder = input('')
  readonly type = input('text')
}
