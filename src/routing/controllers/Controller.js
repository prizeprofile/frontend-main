import store from '@/store'

export default class {
  /**
   * Class constructor.
   */
  constructor () {
    this.$store = store
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
