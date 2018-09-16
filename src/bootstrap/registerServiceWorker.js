
// The service worker funcionality needs to be present in the current browser
// and we only register in on staging/production.
if ('serviceWorker' in navigator && process.env.NODE_ENV !== 'development') {
  navigator.serviceWorker.register(`${process.env.BASE_URL}service-worker.js`, { scope: '/' })
    .then((registration) => {
      // Update the service worker with every new push.
      registration.update()

      console.log('[SW] service worker registration succeeded.')
    })
    .catch(e => console.warn('[SW] service worker registration failed.', e))
} else {
  console.log('[SW] service workers are not supported in the current environment.')
}
