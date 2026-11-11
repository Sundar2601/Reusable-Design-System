// url=https://www.figma.com/design/AngMCoShsZnEBQ4B1xMObF/Reusable-Design-System?node-id=11-639
// source=src/components/NotificationItem.tsx
// component=NotificationItem
import figma from 'figma'
const instance = figma.selectedInstance

const title = instance.getString('Title')
const unread = instance.getEnum('State', { unread: ' unread', read: '' })

export default {
  example: figma.code`<NotificationItem title="${title}"${unread} />`,
  imports: ["import { NotificationItem } from \"@bounteous/ui\""],
  id: "notificationitem",
  metadata: { nestable: true },
}
