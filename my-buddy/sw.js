// Bump VERSION whenever you upload a changed index.html so phones pick up the update.
const VERSION = "my-buddy-v1";
const SHELL = ["./", "index.html", "manifest.webmanifest", "icon-192.png", "icon-512.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
// Serve from cache instantly (works offline), refresh the cache in the background.
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(caches.match(e.request, { ignoreSearch: true }).then(hit => {
    const net = fetch(e.request).then(r => {
      if (r && (r.ok || r.type === "opaque")) {
        const copy = r.clone();
        caches.open(VERSION).then(c => c.put(e.request, copy));
      }
      return r;
    }).catch(() => hit || (e.request.mode === "navigate" ? caches.match("index.html") : undefined));
    return hit || net;
  }));
});
