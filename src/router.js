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
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('./views/pages/Contact.vue')
    },

    /**
     * Legal.
     */
    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: () => import('./views/pages/PrivacyPolicy.vue')
    },
    {
      path: '/terms-and-conditions',
      name: 'terms-and-conditions',
      component: () => import('./views/pages/TermsAndConditions.vue')
    }
  ]
})
