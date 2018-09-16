import Vue from 'vue'

/**
 * Package plugins.
 */

//

/**
 * Custom plugins.
 */

import config from '@/config'

Vue.use({
  install: V => V.prototype.$config = config
})
