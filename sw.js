const CACHE_NAME = 'conaplast-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './logo.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Devuelve el archivo del cache si existe (Modo Offline), o lo busca en internet
        return response || fetch(event.request);
      })
  );
});
