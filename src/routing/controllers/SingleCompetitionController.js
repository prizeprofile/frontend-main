import Controller from './Controller'
import { VIEW_COMPETITION, SET_FEED } from '@/store/types'

export default class SingleCompetitionControler extends Controller {

  /**
   * @inheritdoc
   */
  async index ({ to }) {
    try {
      await this.$store.dispatch(VIEW_COMPETITION, to.params)

      // TODO: Refactor.
      await this.$store.dispatch(SET_FEED, {
        data: { content: [], last: false, number: 0 },
        slug: to.params.feed
      })
    } catch(_) {
      return this.$router.push('/')
    }
  }
}
