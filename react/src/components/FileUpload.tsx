import * as React from 'react'
import { CloudUpload, File as FileIcon, X } from 'lucide-react'
import { cn } from '@/lib/utils'

/**
 * FileUpload. Extended component (beyond shadcn): drag and drop zone with a file list.
 * - `accept` / `multiple` -> same as the native file input
 * - `onFilesChange` -> called with the full list of selected files
 * - `disabled` -> not interactive
 */
export interface FileUploadProps extends Omit<React.ComponentProps<'div'>, 'onChange'> {
  accept?: string
  multiple?: boolean
  disabled?: boolean
  title?: string
  description?: string
  onFilesChange?: (files: File[]) => void
}

function formatSize(bytes: number) {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`
}

function FileUpload({
  className,
  accept,
  multiple = false,
  disabled = false,
  title = 'Click to upload or drag and drop',
  description = 'SVG, PNG, JPG or PDF (max. 10 MB)',
  onFilesChange,
  ...props
}: FileUploadProps) {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const [files, setFiles] = React.useState<File[]>([])
  const [dragging, setDragging] = React.useState(false)

  const update = (next: File[]) => {
    setFiles(next)
    onFilesChange?.(next)
  }
  const add = (list: FileList | null) => {
    if (!list || list.length === 0) return
    const incoming = Array.from(list)
    update(multiple ? [...files, ...incoming] : incoming.slice(0, 1))
  }

  return (
    <div data-slot="file-upload" className={cn('flex w-96 flex-col gap-3 text-sm', className)} {...props}>
      <button
        type="button"
        data-slot="file-upload-dropzone"
        data-dragging={dragging}
        disabled={disabled}
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => {
          e.preventDefault()
          if (!disabled) setDragging(true)
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => {
          e.preventDefault()
          setDragging(false)
          if (!disabled) add(e.dataTransfer.files)
        }}
        className={cn(
          'flex cursor-pointer flex-col items-center gap-2 rounded-lg bg-background px-6 py-8 text-center transition-colors',
          'inset-ring-1 inset-ring-border outline-none hover:bg-muted',
          'focus-visible:inset-ring-ring focus-visible:shadow-focus-ring',
          'data-[dragging=true]:bg-muted data-[dragging=true]:inset-ring-ring',
          'disabled:pointer-events-none disabled:opacity-50',
        )}
      >
        <span className="flex size-10 items-center justify-center rounded-full bg-muted text-muted-foreground">
          <CloudUpload className="size-5" />
        </span>
        <span className="font-medium text-foreground">{title}</span>
        <span className="text-xs text-muted-foreground">{description}</span>
      </button>
      <input
        ref={inputRef}
        type="file"
        className="hidden"
        accept={accept}
        multiple={multiple}
        disabled={disabled}
        onChange={(e) => {
          add(e.target.files)
          e.target.value = ''
        }}
      />
      {files.length > 0 && (
        <ul data-slot="file-upload-list" className="flex flex-col gap-2">
          {files.map((file, i) => (
            <li
              key={`${file.name}-${i}`}
              data-slot="file-upload-item"
              className="flex items-center gap-3 rounded-lg bg-background px-3 py-2 inset-ring-1 inset-ring-border"
            >
              <FileIcon className="size-4 shrink-0 text-muted-foreground" />
              <div className="flex min-w-0 flex-1 flex-col">
                <span className="truncate text-foreground">{file.name}</span>
                <span className="text-xs text-muted-foreground">{formatSize(file.size)}</span>
              </div>
              <button
                type="button"
                aria-label={`Remove ${file.name}`}
                onClick={() => update(files.filter((_, j) => j !== i))}
                className="cursor-pointer rounded-sm text-muted-foreground outline-none hover:text-foreground focus-visible:shadow-focus-ring"
              >
                <X className="size-4" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export { FileUpload }
