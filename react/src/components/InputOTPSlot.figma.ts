// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=6-231
// source=src/components/InputOtp.tsx
// component=InputOTPSlot
import figma from 'figma'

export default {
  example: figma.code`<InputOTP maxLength={6}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
  </InputOTPGroup>
</InputOTP>`,
  imports: ["import { InputOTP, InputOTPGroup, InputOTPSlot } from \"@bounteous/ui\""],
  id: "inputotpslot",
  metadata: { nestable: true },
}
