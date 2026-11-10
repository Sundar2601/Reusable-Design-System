import { Toaster as SonnerToaster, toast, type ToasterProps } from 'sonner'

/**
 * Sonner (toast). Figma component "Sonner".
 * Render <Toaster /> once near the app root, then call `toast(...)`,
 * `toast.success(...)`, `toast.error(...)` and so on from anywhere.
 */
function Toaster({ ...props }: ToasterProps) {
  return (
    <SonnerToaster
      data-slot="sonner"
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            'group toast !rounded-lg !bg-popover !text-popover-foreground !shadow-md !border-0 !inset-ring-1 !inset-ring-border',
          description: '!text-muted-foreground',
          actionButton: '!bg-primary !text-primary-foreground',
          cancelButton: '!bg-muted !text-muted-foreground',
        },
      }}
      {...props}
    />
  )
}

export { Toaster, toast }
