const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const root = path.join(__dirname, 'dist');
const types = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.jpg':'image/jpeg','.png':'image/png','.ttf':'font/ttf'};
const server = http.createServer((req, res) => {
  let file;
  try {
    file = path.resolve(root, '.' + decodeURIComponent(new URL(req.url, 'http://localhost').pathname));
  } catch {
    res.writeHead(400); return res.end('Bad request');
  }
  if (file !== root && !file.startsWith(root + path.sep)) {
    res.writeHead(403); return res.end('Forbidden');
  }
  if (file === root) file = path.join(root, 'index.html');
  fs.readFile(file, (err, data) => {
    if (err) {res.writeHead(404); return res.end('Not found');}
    res.writeHead(200, {'Content-Type': types[path.extname(file)] || 'application/octet-stream', 'Cache-Control':'no-store'});
    res.end(data);
  });
});
server.on('error', err => {console.error(err.message); process.exit(1);});
// Loopback only: the storefront is accessible on this Mac.
server.listen(3000, '127.0.0.1', () => console.log('Website: http://127.0.0.1:3000'));
