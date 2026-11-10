import { ChangeDetectionStrategy, Component, ElementRef, input, output, signal, viewChild } from '@angular/core'

/** File Upload. Drag and drop zone with a file list. Mirrors the React FileUpload. */
@Component({
  selector: 'ui-file-upload',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'flex w-96 flex-col gap-3 text-sm', '[attr.data-slot]': '"file-upload"' },
  template: `
    <button
      type="button"
      data-slot="file-upload-dropzone"
      class="flex cursor-pointer flex-col items-center gap-2 rounded-lg bg-background px-6 py-8 text-center transition-colors inset-ring-1 inset-ring-border outline-none hover:bg-muted focus-visible:inset-ring-ring focus-visible:shadow-focus-ring disabled:pointer-events-none disabled:opacity-50"
      [class]="dragging() ? 'bg-muted inset-ring-ring' : ''"
      [disabled]="disabled()"
      (click)="fileInput().nativeElement.click()"
      (dragover)="onDragOver($event)"
      (dragleave)="dragging.set(false)"
      (drop)="onDrop($event)"
    >
      <span class="flex size-10 items-center justify-center rounded-full bg-muted text-muted-foreground">
        <svg class="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 13v8" /><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" /><path d="m8 17 4-4 4 4" /></svg>
      </span>
      <span class="font-medium text-foreground">{{ title() }}</span>
      <span class="text-xs text-muted-foreground">{{ description() }}</span>
    </button>
    <input
      #fileEl
      type="file"
      class="hidden"
      [attr.accept]="accept() || null"
      [multiple]="multiple()"
      [disabled]="disabled()"
      (change)="onChange($event)"
    />
    @if (files().length > 0) {
      <ul data-slot="file-upload-list" class="flex flex-col gap-2">
        @for (file of files(); track $index; let i = $index) {
          <li data-slot="file-upload-item" class="flex items-center gap-3 rounded-lg bg-background px-3 py-2 inset-ring-1 inset-ring-border">
            <svg class="size-4 shrink-0 text-muted-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" /><path d="M14 2v5a1 1 0 0 0 1 1h5" /></svg>
            <div class="flex min-w-0 flex-1 flex-col">
              <span class="truncate text-foreground">{{ file.name }}</span>
              <span class="text-xs text-muted-foreground">{{ formatSize(file.size) }}</span>
            </div>
            <button
              type="button"
              class="cursor-pointer rounded-sm text-muted-foreground outline-none hover:text-foreground focus-visible:shadow-focus-ring"
              [attr.aria-label]="'Remove ' + file.name"
              (click)="remove(i)"
            >
              <svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
            </button>
          </li>
        }
      </ul>
    }
  `,
})
export class FileUploadComponent {
  readonly accept = input('')
  readonly multiple = input(false)
  readonly disabled = input(false)
  readonly title = input('Click to upload or drag and drop')
  readonly description = input('SVG, PNG, JPG or PDF (max. 10 MB)')
  readonly filesChange = output<File[]>()

  protected readonly fileInput = viewChild.required<ElementRef<HTMLInputElement>>('fileEl')
  protected readonly files = signal<File[]>([])
  protected readonly dragging = signal(false)

  protected formatSize(bytes: number) {
    if (bytes < 1024) return `${bytes} B`
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
    return `${(bytes / 1024 / 1024).toFixed(1)} MB`
  }
  protected onDragOver(e: DragEvent) {
    e.preventDefault()
    if (!this.disabled()) this.dragging.set(true)
  }
  protected onDrop(e: DragEvent) {
    e.preventDefault()
    this.dragging.set(false)
    if (!this.disabled()) this.add(e.dataTransfer?.files ?? null)
  }
  protected onChange(e: Event) {
    const el = e.target as HTMLInputElement
    this.add(el.files)
    el.value = ''
  }
  private add(list: FileList | null) {
    if (!list || list.length === 0) return
    const incoming = Array.from(list)
    this.update(this.multiple() ? [...this.files(), ...incoming] : incoming.slice(0, 1))
  }
  protected remove(i: number) {
    this.update(this.files().filter((_, j) => j !== i))
  }
  private update(next: File[]) {
    this.files.set(next)
    this.filesChange.emit(next)
  }
}
