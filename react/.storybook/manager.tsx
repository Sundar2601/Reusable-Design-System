
/**
 * Info box pinned to the bottom-left of the catalog sidebar.
 * Storybook 10 has no sidebar-bottom addon slot, so this is a plain fixed element in the manager page.
 */
const id = 'ds-react-info'
if (!document.getElementById(id)) {
  const box = document.createElement('div')
  box.id = id
  box.innerHTML = `
    <strong style="display:block;font-size:13px;margin-bottom:2px">React</strong>
    Main catalog · React components<br/>
    Angular components are under “Angular”.`
  Object.assign(box.style, {
    position: 'fixed',
    left: '12px',
    bottom: '64px',
    width: '232px',
    padding: '10px 12px',
    borderRadius: '8px',
    border: '1px solid rgba(128,128,128,.3)',
    background: 'rgba(255,255,255,.9)',
    color: '#2e3438',
    fontSize: '12px',
    lineHeight: '16px',
    zIndex: '10',
    pointerEvents: 'none',
  })
  document.body.appendChild(box)
}
