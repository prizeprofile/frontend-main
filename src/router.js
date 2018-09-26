import Vue from 'vue'
import Router from 'vue-router'

import HomeController from '@/routing/controllers/HomeController'

Vue.use(Router)

export default new Router({

  mode: 'history',
  linkActiveClass: 'is-active',

  globalMiddleware: [],

  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue'),
      meta: {
        controller: [HomeController, 'index']
      }
    }
  ]
})
