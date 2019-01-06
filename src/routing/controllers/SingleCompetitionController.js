import Controller from './Controller'
import { getFeed } from '@/core/feeds'
import { VIEW_COMPETITION, SET_FEED } from '@/store/types'

export default class SingleCompetitionControler extends Controller {
  /**
   * @inheritdoc
   */
  async index ({ to }) {
    try {
      await this.$store.dispatch(VIEW_COMPETITION, to.params)

      const feed = getFeed(to.params.feed)

      if (feed.isActive) {
        return
      }

      feed
        .addFilter('sort', 'endDate,asc')
        .addFilter('onlyRecent', '')
        .fetch(SET_FEED)
    } catch (_) {
      return this.$router.push('/')
    }
  }
}
