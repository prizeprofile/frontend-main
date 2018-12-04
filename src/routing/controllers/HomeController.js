import Controller from './Controller'
import {
  TwitterFeed,
  GleamFeed
} from '@/core/feeds'
import { SET_FEED } from '@/store/types'

export default class HomeController extends Controller {
  /**
   * @inheritdoc
   */
  async twitter ({ to, from }) {
    await TwitterFeed.fetch(SET_FEED)
  }

  /**
   * @inheritdoc
   */
  async gleam ({ to, from }) {
    await GleamFeed.fetch(SET_FEED)
  }
}
