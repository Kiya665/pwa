var CACHE_NAME  = "MKit-cache-v1";
var urlsToCache = [
    "https://app.saitama-cmcc.ac.jp/saitama-pwa/notify2/index.html",
    "https://app.saitama-cmcc.ac.jp/saitama-pwa/notify2/serviceWorker.js",
    "https://app.saitama-cmcc.ac.jp/saitama-pwa/notify2/images/icon192.png",
    "https://app.saitama-cmcc.ac.jp/saitama-pwa/notify2/notify.js",
];

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(
            function(cache){
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
        .then(
        function (response) {
            if (response) {
                return response;
            }
            return fetch(event.request);
        })
    );
});

self.addEventListener('message', function (event) {
    console.log(event.data);
    self.registration.showNotification(event.data);
  });