const CACHE_NAME = 'tvw-app-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/calendar.html',
  '/tables.html',
  '/admin.html',
  '/order.html',
  '/bestell.html',
  '/head.png',
  '/favicon.png',
  '/android-chrome-192x192.png',
  '/android-chrome-512x512.png'
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
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});