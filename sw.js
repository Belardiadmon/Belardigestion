// Service worker mínimo para Belardi Jardinería.
// Su única función es cumplir el requisito de Android/Chrome para que la
// app se instale como una PWA de verdad (con su propio icono), en vez de
// como un simple acceso directo con la figurita de Chrome superpuesta.
// No cachea nada: cada visita sigue pidiendo la última versión al servidor.

self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  // Sin caché: deja pasar todas las peticiones tal cual, directas a la red.
  event.respondWith(fetch(event.request));
});
