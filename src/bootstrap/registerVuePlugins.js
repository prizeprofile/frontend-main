import Vue from 'vue'

/**
 * Package plugins.
 */

import VueVisible from 'vue-visible'
import VueAsyncComputed from 'vue-async-computed'

Vue.use(VueVisible)
Vue.use(VueAsyncComputed)

/**
 * Custom plugins.
 */

import config from '@/config'

Vue.use({
  install: V => V.prototype.$config = config
})
