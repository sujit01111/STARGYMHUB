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
  "images/alina-chernysheva.jpeg",
"images/Anais-Louis.jpeg",
"images/anastase-marago.jpeg",
"images/Beginner-Level.jpeg",
"images/biceps.png",
"images/bruce-mars.jpeg",
"images/couple-training.jpg",
"images/cycling.png",
"images/dylan-gillis.jpeg",
"images/fitness-club.jpeg",
"images/fitness_logo.png",
"images/fitnish-media.jpg",
"images/ft.png",
"images/gm.png",
"images/gym-kit.jpeg",
"images/hamburger.png",
"images/heidi-erickson.jpeg",
"images/hypertrophy.png",
"images/james.jpeg",
"images/John-Smith.jpeg",
"images/keagan-henman.jpeg",
"images/logo.png",
"images/logo1.png",
"images/mark-adriane.jpeg",
"images/MB-STRAWBERRY.jpeg",
"images/Mixed-Level-Excello.png",
"images/Multivitamins.jpeg",
"images/pexels-bamboo.jpeg",
"images/pexels-leon.jpg",
"images/pexels-taryn.jpeg",
"images/pexels-tima.jpeg",
"images/pg.jpeg",
"images/Phil-heath.jpeg",
"images/PowerExcello.jpeg",
"images/preworkout.jpeg",
"images/running.png",
"images/training.jpeg",
"images/weight-pound.png",
"images/yoga.png"

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
