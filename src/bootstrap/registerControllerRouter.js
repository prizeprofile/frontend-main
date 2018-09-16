import router from '@/router'

/**
 * Intercept each route with a controller call if there is an existing one.
 */
router.beforeEach((to, from, next) => {
  const globalMiddleware = router.options.globalMiddleware || []
  const controller = to.meta.controller
  const middleware = globalMiddleware.concat(to.meta.middleware || [])
  const request = { to, from }

  // Reduce all the middleware assigned to the route. If a middleware wants to
  // change the destination, it rejects its own promise. This promise then
  // bubbles all the way down to the last 'next' call.
  middleware.reduce((carry, mw) => {
    return carry.then(mw).then(() => request)
  }, Promise.resolve(request))
    // If there is a controller, call it and resolve the route with the
    // controller response.
    .then(request => controller ? Promise.resolve(request) : Promise.reject())
    .then(request => new controller[0]()[controller[1]](request))
    .then(next, next)
})
