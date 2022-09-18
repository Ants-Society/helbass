const staticCacheName = 'site-static-v6';
const assets = [
  '/',
  '/index.html',
  '/app.js',
  '/style.css',
  '/img/goodbom.png',
  '/img/icon.svg',
  '/img/build.png',
  '/img/logo.svg',
  '/img/menu.svg',
  '/img/mobile-bg.png',
  '/img/money.svg',
  '/img/paper.svg',
  '/img/parana.png',
  '/img/roberto.png',
  '/img/search.svg',
  '/img/terra.png',
];
// install event
self.addEventListener('install', evt => {
  evt.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log('caching shell assets');
      cache.addAll(assets);
    })
  );
});
// activate event
self.addEventListener('activate', evt => {
  evt.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(keys
        .filter(key => key !== staticCacheName)
        .map(key => caches.delete(key))
      );
    })
  );
});
// fetch event
self.addEventListener('fetch', evt => {
  evt.respondWith(
    caches.match(evt.request).then(cacheRes => {
      return cacheRes || fetch(evt.request);
    })
  );
});
