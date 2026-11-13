# Platforms and modalities beyond web and phone

Smartwatch, TV, AR/VR (spatial), car and voice. All of these are **Planned**: the rules and tokens exist, the components are not built. The per-surface numbers live in the `Surface` variable collection (one mode per device class) in the new Figma file (`Bounteous Design System`). Values marked **UNVERIFIED** need a check with the platform owner before you rely on them.

Researched 2026-11-13. Most figures come from official developer pages; secondary sources are named.

## Smartwatch (Wear OS, watchOS)

Glanceable, one task per screen. Design the smallest screen first.

| Topic | Rule | Token |
|---|---|---|
| Screens | Wear OS: round, large round, square, rectangular. Use percentage-based outer margins on round screens. | |
| Touch target | Wear OS 48 dp (40 dp allowed in some small-screen cases) | `watch/target-wearos`, `watch/target-wearos-small` |
| Touch target, watchOS | 44 pt, **UNVERIFIED** (SAP Fiori says 40, UI/UX Atlas cites Apple HIG 44) | `watch/target-watchos` |
| Components | Glance card, Complication, List row, Full-width primary button, Scroll indicator, Confirmation, Quick-reply chips | |

Sources: [Wear OS app quality](https://developer.android.com/develop/adaptive-apps/quality-guidelines/wear-app-quality), [a11y on Wear](https://goo.gle/a11y-on-wear).

## TV (tvOS, Android TV, Fire TV)

10-foot UI: read from a sofa, control with a remote. Focus is the cursor.

| Topic | Rule | Token |
|---|---|---|
| Overscan | Android TV 5%: 48 dp left and right, 27 dp top and bottom, on a 960x540 dp layout. Another Android page says 58 and 28; verify. | `tv/overscan-x`, `tv/overscan-y` |
| Safe zone | Fire TV: focused item and text inside the inner 90% | `tv/safe-zone` |
| Text | At least 28 px on a 1080p screen (third-party report of Amazon guidance; a floor) | `tv/text-min` |
| Focus | Always visible (scale and ring), predictable D-pad movement. No hover, no touch. | |
| Components | Focus ring and scale, Content rail, Hero banner, Tile card, Side navigation, Top tab bar, Large button, Player controls, On-screen keyboard | |

Not verified: Apple's tvOS safe area (a third party reports 60 pt), Apple's own text minimums.

Sources: [Android TV layouts](https://developer.android.com/training/tv/playback/compose/layouts), [Fire TV design guidelines](https://developer.amazon.com/appsandservices/solutions/devices/fire-tv/docs/design-and-user-experience-guidelines).

## Spatial: AR, VR, XR (visionOS, Meta Quest)

UI as panels in 3D space, controlled by gaze, hands or a ray.

| Topic | Rule | Token |
|---|---|---|
| visionOS target | 60 pt default and eye-target area, 28 pt minimum | `vision/control-default`, `vision/control-min` |
| Quest target | 48 dp hit area at panel scale (not the visual size) | `spatial/hit-target` |
| Angular size | About 2.5 to 3 degrees for touch and ray; gaze targets at least 3.0 degrees. World size = 2 x distance x tan(1.5 deg), about 5.2 cm at 1 m. | `spatial/angular-min`, `spatial/angular-gaze` |
| Panel size | Quest default 1024 x 640 dp, minimum 384 x 500 dp | `spatial/panel-*` |
| Distance | About 1 m, slightly below eye line. Touch 42 to 46 cm; ray casting 100 cm or more; avoid the middle range. | `spatial/touch-distance-*`, `spatial/ray-distance-min` |
| Text | At least 14 px, comfortable at 18 px (secondary sources) | `spatial/text-min`, `spatial/text-comfortable` |
| Rules | Always show hover (gaze or hand) and selected states. Do not rely on depth or color alone. Let users move and scale panels. | |
| Components | Spatial panel (glass), Ornament toolbar, Tab rail, Hover state, Pinch or ray cursor, Passthrough backdrop, Immersion controls, Floating action, Tooltip | |

Sources: [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/accessibility), [WWDC23 session 10073](https://developer.apple.com/videos/play/wwdc2023/10073/), [Meta hands UI best practices](https://developers.meta.com/horizon/design/hands-ui-best-practices/), [Meta eyes best practices](https://developers.meta.com/horizon/design/eyes-best-practices/), [Meta panel sizing](https://developers.meta.com/horizon/essentials/horizon-os-panel-sizing/).

## Car (Android Auto, Android Automotive, CarPlay)

| Topic | Rule | Token |
|---|---|---|
| Touch target | 76 x 76 dp minimum; targets must not overlap | `car/target-min` |
| Icons | 44 (primary), 36 (secondary), 24 (tertiary) dp | `car/icon-*` |
| Text | Primary 32 dp, secondary 24 dp. No video or auto-scrolling text while driving. | `car/text-*` |
| Time | Read and understand within 2 s; respond within 0.25 s; flows of 2 to 3 steps | `car/glance-seconds`, `car/response-seconds`, `car/task-steps-max` |
| CarPlay | Not verified in this research; check Apple CarPlay HIG first | |
| Components | List template, Grid template, Message template, Large button, Media controls, Map overlay | |

Sources: [Android Auto sizing](https://developers.google.com/cars/design/android-auto/design-system/sizing), [Android for Cars UX requirements](https://developer.android.com/design/ui/cars/guides/ux-requirements/overview), [Driving UX design principles](https://docs.partner.android.com/drivingux/foundations/design-principles).

## Smart displays and IoT (home hubs, appliance and wall panels, companion apps)

IoT apps are two things. The **companion app** on a phone or tablet uses the Phone and Tablet modes. The **screen on the device** (a smart display, a thermostat or appliance panel) uses the Smart display mode.

| Topic | Finding |
|---|---|
| Standards | Matter standardizes how devices communicate (discovery, commissioning, control). It does not define any UI, so each ecosystem designs its own. |
| Smart displays | Voice-first, stationary, often far from the user. Use large type and one focus at a time (Google Interactive Canvas guidance). Amazon's multimodal guide ties layout density to viewing distance (about 2 ft, 2 to 4 ft and 6 to 8 ft device classes). |
| Reserved header | Google Interactive Canvas reserves a header of 56 dp on mobile, 96 dp on Home Hub and 120 dp on Smart Display; keep content out of it. |
| Numeric minimums | **None found** for touch targets on Alexa or Nest Hub. The Smart display mode uses design defaults (target 56, control height 56, body 22, minimum text 18) and needs device testing. |
| Smart-device apps | The app is an extension of the physical product. Users switch between app, voice and on-device controls, and each needs its own interaction pattern (Nielsen Norman Group). |
| Components (planned) | Device card (state, offline, pending), Room and scene tile, Slider and dial control (large), Schedule row, Pairing and setup flow, Notification and alert banner, Voice-confirm toast, Energy and status chart |

Sources: [Google Interactive Canvas design guidelines](https://developers.google.cn/assistant/df-asdk/interactivecanvas/design/guidelines), [Amazon multimodal display guide](https://www.developer.amazon.com/docs/alexa-voice-service/ux-design-display.html), [Amazon APL density, grids and spacing](https://developer.amazon.com/en-US/alexa/alexa-haus/visual-design/apl-style-guide/density-grid-spacing), [NN/g smart device best practices](https://www.nngroup.com/articles/smart-device-best-practices/), [Matter brand guidelines](https://csa-iot.org/wp-content/uploads/2022/11/Matter_Brand-Guidelines_v1.6.pdf).

## Voice and multimodal

Design for failure first. These are practitioner guidelines; Amazon, Apple and Google conversation-design docs were not retrieved.

| Topic | Rule |
|---|---|
| Confirmation | Match it to the stakes: implicit (repeat what you understood) for low risk; explicit (ask yes or no) for money, health or deleting. |
| Error recovery | Own the mishearing ("I didn't catch that", not "please repeat"). After 3 failures in a row, offer "you can say" options. Allow barge-in, except during confirmation, error recovery and handoff. |
| With a screen | Show what was understood, especially names, numbers and addresses. Never voice-only: give visual or haptic feedback so deaf users are not blocked. |
| Components | Mic button (idle, listening, thinking, speaking, error), Listening indicator, Transcript bubble, "You can say" chips, Confirmation card, Error recovery sheet, Multimodal result card, Earcon spec (sounds) |

Sources: [Nielsen heuristics for voice UI](https://uxdesign.cc/10-usability-heuristics-for-voice-user-interface-design-69ad9ea4f166), [Microsoft speech UI best practices (archived)](https://learn.microsoft.com/en-us/previous-versions/office/developer/speech-technologies/ms994646(v=msdn.10)).

## Next steps

1. Confirm the UNVERIFIED values with the platform owners (Apple HIG for watchOS, tvOS and CarPlay especially).
2. Build the Planned components per surface in Figma, starting with the ones shared across surfaces (focus ring and scale, large button, confirmation, mic button).
3. Add a code target per surface when a project needs one (Wear Compose, tvOS SwiftUI, Android TV Compose, visionOS SwiftUI, Android Auto templates). Today the code covers web (React and Angular) only.
