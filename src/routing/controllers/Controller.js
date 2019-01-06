import store from '@/store'
import router from '@/router'

export default class {
  /**
   * Class constructor.
   */
  constructor () {
    this.$store = store
    this.$router = router
  }

  /**
   * 404 response shortcut.
   */
  notFound () {
    return {
      path: '/not-found'
    }
  }
}
