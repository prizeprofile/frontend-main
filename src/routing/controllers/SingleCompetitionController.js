import Controller from './Controller'
import { VIEW_COMPETITION } from '@/store/types'

export default class SingleCompetitionControler extends Controller {

  /**
   * @inheritdoc
   */
  async gleam ({ to }) {
    return this.$store.dispatch(VIEW_COMPETITION, {
      id: to.params.id,
      feed: 'gleam'
    })
  }
}
