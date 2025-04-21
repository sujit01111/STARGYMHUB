const CACHE_NAME = 'star-gym-cache-v1';
const urlsToCache = [
 "/",
  "/index.html",
  "html/blogs.html",
  "html/class.html",
  "html/products.html",
  "js/app.js",
  "script/index.js",
  "style/blogs.css",
  "style/class.css",
  "style/products.css",
  "style/desktop-view.css",
  "style/mobile-view.css",
  "images/alina-chernysheva.webp",
"images/Anais-Louis.webp",
"images/anastase-marago.webp",
"images/Beginner-Level.webp",
"images/biceps.webp",
"images/bruce-mars.webp",
"images/couple-training.webp",
"images/cycling.webp",
"images/dylan-gillis.webp",
"images/fitness-club.webp",
"images/fitness_logo.webp",
"images/fitnish-media.webp",
"images/ft.webp",
"images/gm.webp",
"images/gym-kit.webp",
"images/hamburger.webp",
"images/heidi-erickson.webp",
"images/hypertrophy.webp",
"images/james.webp",
"images/John-Smith.webp",
"images/keagan-henman.webp",
"images/logo.webp",
"images/logo1.webp",
"images/mark-adriane.webp",
"images/MB-STRAWBERRY.webp",
"images/Mixed-Level-Excello.webp",
"images/Multivitamins.webp",
"images/pexels-bamboo.webp",
"images/pexels-leon.webp",
"images/pexels-taryn.webp",
"images/pexels-tima.webp",
"images/pg.webp",
"images/Phil-heath.webp",
"images/PowerExcello.webp",
"images/preworkout.webp",
"images/running.webp",
"images/training.webp",
"images/weight-pound.webp",
"images/yoga.webp"


];

// Install event
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Fetch event
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response =>
      response || fetch(event.request)
    )
  );
});
