import * as React from 'react'
import { OTPInput, OTPInputContext } from 'input-otp'
import { Minus } from 'lucide-react'
import { cn } from '@/lib/utils'

/**
 * Input OTP. Figma component "Input OTP": a one-time-code field split into slots.
 * Compose: InputOTP maxLength={6} > InputOTPGroup > InputOTPSlot index={n}, with InputOTPSeparator between groups.
 * - `aria-invalid` on a slot -> destructive ring; `disabled` on InputOTP. Active slot is shown by the focus ring.
 */
function InputOTP({
  className,
  containerClassName,
  ...props
}: React.ComponentProps<typeof OTPInput> & { containerClassName?: string }) {
  return (
    <OTPInput
      data-slot="input-otp"
      containerClassName={cn('flex items-center gap-2 has-disabled:opacity-50', containerClassName)}
      className={cn('disabled:cursor-not-allowed', className)}
      {...props}
    />
  )
}

function InputOTPGroup({ className, ...props }: React.ComponentProps<'div'>) {
  return <div data-slot="input-otp-group" className={cn('flex items-center', className)} {...props} />
}

function InputOTPSlot({
  index,
  className,
  ...props
}: React.ComponentProps<'div'> & { index: number }) {
  const inputOTPContext = React.useContext(OTPInputContext)
  const { char, hasFakeCaret, isActive } = inputOTPContext?.slots[index] ?? {}

  return (
    <div
      data-slot="input-otp-slot"
      data-active={isActive}
      className={cn(
        // 32px slots, joined: only the outer corners are rounded
        'relative flex size-8 items-center justify-center bg-background text-sm text-foreground',
        'inset-ring-1 inset-ring-control-border transition-[color,box-shadow] outline-none',
        'first:rounded-s-lg last:rounded-e-lg',
        'aria-invalid:inset-ring-text-destructive',
        'data-[active=true]:z-10 data-[active=true]:inset-ring-ring data-[active=true]:shadow-focus-ring',
        'data-[active=true]:aria-invalid:inset-ring-text-destructive data-[active=true]:aria-invalid:shadow-destructive-ring',
        className,
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-px animate-pulse bg-foreground [animation-duration:1s]" />
        </div>
      )}
    </div>
  )
}

function InputOTPSeparator(props: React.ComponentProps<'div'>) {
  return (
    <div data-slot="input-otp-separator" role="separator" {...props}>
      <Minus className="size-4 text-muted-foreground" />
    </div>
  )
}

export { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot }
