# Governance: ownership, support and how to change the system

This design system is the shared base for all Bounteous projects. This page says who decides, how to ask for a change, and how decisions are recorded.

## Ownership

| Role | Who | Does |
|---|---|---|
| Owner | **TODO: name** | Final say on tokens, components and releases. Holds the Figma and npm credentials. |
| Design maintainer | **TODO: name** | Keeps the Figma file in step with the code. |
| Engineering maintainer | **TODO: name** | Keeps React and Angular in step. Runs releases. |

Fill in the names once. Everything below assumes these roles exist.

## Where to ask

| You want to | Do this |
|---|---|
| Report a bug or a visual mismatch | Open an issue with a screenshot, the component, the framework (React or Angular) and the version. |
| Ask how to use something | Check Storybook and the Guidelines page in Figma first, then ask in the team channel. **TODO: channel name** |
| Request a new component, variant or token | Open a request issue (see below). |

## Requesting a change

1. **Check it doesn't exist.** Look at Storybook, `CLAUDE.md` (component index) and `COMPONENT-STATUS.md`.
2. **Open an issue** with: the problem, which project needs it, a screenshot or Figma link, and what you tried.
3. **Owner triages** within one week: accept, change, or decline with a reason.
4. **Design first.** An accepted change is drawn in Figma, with a description and token bindings, before code.
5. **Build both frameworks.** React and Angular ship together, or the gap is written in `COMPONENT-STATUS.md`.
6. **Record it.** Add an entry to the Changelog (Figma, Documentation page) and bump the version (see `RELEASING.md`).

## Decision rules

- Prefer a variant or a prop on an existing component over a new component.
- A new color needs the owner's approval and a token in Figma first. Never hard-code a value.
- Breaking changes (renamed props, removed variants) need a deprecation period of one minor version.
- Accessibility is not negotiable. A change that lowers contrast, removes a focus ring or breaks keyboard use is declined.

## What a component needs to be "Stable"

Figma component with description, variants and token bindings; React and Angular code; Storybook stories for every variant; a test; a Code Connect mapping for both; passes the accessibility test (`npm test`).
