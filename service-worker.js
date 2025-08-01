
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("capiarte-cache").then(cache => {
      return cache.addAll([
        "/index.html",
        "/style.css",
        "/manifest.json",
        "/images/icon.png"
      ]);
    })
  );
});
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
