
/**
 * Prechached assets, always available cache-first.
 */

workbox.precaching.precacheAndRoute(self.__precacheManifest, {})

/**
 * Workbox routes.
 */

// workbox.routing.registerRoute(
//   new RegExp('https://fonts.gstatic.com/.*'),
//   workbox.strategies.staleWhileRevalidate({
//     cacheName: 'fonts'
//   })
// )

// This line of code makes sure that we always fall back to the spa router when
// someone refreshes on a non '/' route.
workbox.routing.registerNavigationRoute('/index.html', {
  blacklist: [
    /\/robots\.txt/,
    /\/sitemaps\/.*/
  ]
})
