// Dev only. The React catalog (localhost:6006) loads this Storybook (localhost:6007) as a composed ref.
// Chrome rejects the dev server's `Access-Control-Allow-Origin: *` when the fetch sends credentials, so the
// composed catalog points at this proxy (localhost:6008), which echoes the caller's origin instead.
import http from 'node:http'
import net from 'node:net'

const TARGET = { host: 'localhost', port: 6007 }
const PORT = 6008
const allowed = (o) => typeof o === 'string' && /^http:\/\/(localhost|127\.0\.0\.1):\d+$/.test(o)

const server = http.createServer((req, res) => {
  const origin = req.headers.origin
  const upstream = http.request({ ...TARGET, path: req.url, method: req.method, headers: { ...req.headers, host: `${TARGET.host}:${TARGET.port}` } }, (up) => {
    const headers = { ...up.headers }
    delete headers['access-control-allow-origin']
    if (allowed(origin)) {
      headers['access-control-allow-origin'] = origin
      headers['access-control-allow-credentials'] = 'true'
      headers['vary'] = 'Origin'
    }
    res.writeHead(up.statusCode ?? 502, headers)
    up.pipe(res)
  })
  upstream.on('error', () => { res.writeHead(502); res.end('Angular Storybook (6007) is not ready yet') })
  req.pipe(upstream)
})

// Storybook's channel uses a websocket on the same origin as the page.
server.on('upgrade', (req, socket, head) => {
  const up = net.connect(TARGET.port, TARGET.host, () => {
    up.write(`${req.method} ${req.url} HTTP/1.1\r\n` + Object.entries({ ...req.headers, host: `${TARGET.host}:${TARGET.port}` }).map(([k, v]) => `${k}: ${v}`).join('\r\n') + '\r\n\r\n')
    up.write(head)
    socket.pipe(up).pipe(socket)
  })
  up.on('error', () => socket.destroy())
  socket.on('error', () => up.destroy())
})

server.listen(PORT, () => console.log(`CORS proxy for the Angular Storybook on http://localhost:${PORT}`))
