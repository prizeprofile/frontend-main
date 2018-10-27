import Controller from './Controller'
import { LOAD_COMPETITIONS, RESET_COMPETITIONS, APPEND_COMPETITIONS } from '@/store/types'

export default class HomeController extends Controller {
  /**
   * Load competitions based on filters from the URL.
   */
  async index ({ to, from }) {
    if (to.query.page && from.query.page !== to.query.page) {
      this.$store.dispatch(APPEND_COMPETITIONS, to.query)

      return
    }

    await this.$store.dispatch(RESET_COMPETITIONS)

    this.$store.dispatch(LOAD_COMPETITIONS, to.query)
  }
}
