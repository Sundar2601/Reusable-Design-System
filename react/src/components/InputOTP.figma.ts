// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=53-784
// source=src/components/InputOtp.tsx
// component=InputOTP
import figma from 'figma'
const instance = figma.selectedInstance

export default {
  example: figma.code`<InputOTP maxLength={6}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
  </InputOTPGroup>
</InputOTP>`,
  imports: ["import { InputOTP, InputOTPGroup, InputOTPSlot } from \"@bounteous/ui\""],
  id: "inputotp",
  metadata: { nestable: true },
}
