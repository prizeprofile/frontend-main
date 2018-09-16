import Controller from './Controller'
import { LOAD_COMPETITIONS, RESET_COMPETITIONS } from '@/store/types'

export default class HomeController extends Controller {
  /**
   * Load competitions based on filters from the URL.
   */
  async index ({ to, from }) {
    await this.$store.dispatch(RESET_COMPETITIONS)

    this.$store.dispatch(LOAD_COMPETITIONS, to.query)
  }
}
