import Controller from './Controller'
import {
  TwitterFeed,
  GleamFeed
} from '@/core/feeds'

export default class HomeController extends Controller {
  /**
   * @inheritdoc
   */
  async twitter ({ to, from }) {
    await TwitterFeed.fetch()
  }

  /**
   * @inheritdoc
   */
  async gleam ({ to, from }) {
    await GleamFeed.fetch()
  }
}
