'use strict';
// CACHE_BUILD is stamped automatically by the repository GitHub Action.
// Keep sw.js at the same URL. Never change the editor's v1 database namespace for a cache update.
const CACHE_BUILD = 'auto-a36016e2e0bb';
const ROOT = new URL('./', self.location.href);
const CACHE_PREFIX = 'vf-story-shell:' + encodeURIComponent(ROOT.href) + ':';
const CACHE_NAME = CACHE_PREFIX + CACHE_BUILD;
const APP_FILES = [
  'index.html', 'site.webmanifest',
  'assets/icons/web-app-manifest-192x192.png',
  'assets/icons/web-app-manifest-512x512.png',
  'assets/icons/web-app-manifest-maskable-512x512.png'
];
const APP_URLS = APP_FILES.map(path => new URL(path, ROOT).href);
const INDEX_URL = APP_URLS[0];

self.addEventListener('install', event => {
  // addAll is atomic: a missing file prevents this worker from becoming ready.
  // No skipWaiting: an update waits until all existing editor clients have closed.
  event.waitUntil(caches.open(CACHE_NAME).then(cache =>
    cache.addAll(APP_URLS.map(url => new Request(url, {cache: 'reload'})))
  ));
});

self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(names => Promise.all(names
    .filter(name => name.startsWith(CACHE_PREFIX) && name !== CACHE_NAME)
    .map(name => caches.delete(name)))));
  // No clients.claim or forced reload; ongoing editing is never interrupted.
});

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== ROOT.origin) return;
  const isEntry = request.mode === 'navigate' &&
    (url.pathname === ROOT.pathname || url.pathname === new URL(INDEX_URL).pathname);
  const canonical = new URL(url.pathname, ROOT.origin).href;
  const key = isEntry ? INDEX_URL : APP_URLS.includes(canonical) ? canonical : null;
  // Do not cache other apps, external links, downloads or arbitrary requests.
  if (!key) return;
  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    const cached = await cache.match(key);
    return cached || fetch(request);
  })());
});


// The waiting worker reports its exact automatic cache identity without activating itself.
self.addEventListener('message',event=>{if(event.data?.type==='VF_BUILD_ID')event.ports?.[0]?.postMessage({build:CACHE_BUILD});});
