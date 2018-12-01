import config from '@/config'
import {
  APPEND_TO_FEED,
  SET_FEED
} from '@/store/types'

export default /* abstract */ class Feed {
  /** @var {any} _filters */
  /** @var {string} slug */
  /** @var {string[]} class */
  /** @var {any} defaultFilters */

  /** @var {Boolean} */
  get isActive () {
    return this.$store.getters.activeFeedSlug === this.slug
  }

  /**
   * Class constructor.
   *
   * @param {vuex} store
   * @param {axios} axios
   */
  constructor (store, axios) {
    this.$store = store

    this.axios = axios

    this.resetFilters()
  }

  /**
   * Fetches content from APIs and saves it to store.
   *
   * @param {String} action Content can be appended or it can replace current one.
   *
   * @return {Promise<void>}
   */
  async fetch (action = APPEND_TO_FEED) {
    const { data } = await this.axios.get(this.buildUrl())

    await this.$store.dispatch(action, {
      data, feed: this.slug
    })
  }

  /**
   * Refreshes the feed after set interval. This is used to apply filters.
   *
   * @return {void}
   */
  refreshFeed () {
    if (!this.isActive) {
      return
    }

    clearTimeout(this.refreshFeedInterval)

    this.refreshFeedInterval = setTimeout(() => this.fetch(SET_FEED), config.filters.applyDelay)
  }

  /**
   * @return {Feed}
   */
  resetFilters () {
    this.filters = new Proxy({
      sort: 'createdAt,desc',
      ...this.defaultFilters
    }, {
      set: (state, key, value) => {
        state[key] = value

        this.refreshFeed()

        return true
      }
    })

    return this
  }

  /**
   * @param {String} key
   *
   * @return {Feed}
   */
  removeFilter (key) {
    delete this.filters[key]

    return this
  }

  /**
   * @param {String} key
   *
   * @return {Boolean}
   */
  getFilter (key) {
    return this.filters[key]
  }

  /**
   * @param {String} key
   * @param {String|Number} value
   *
   * @return {Feed}
   */
  addFilter (key, value) {
    this.filters[key] = value

    return this
  }

  /**
   * Appends filters to the API endpoint url.
   *
   * @return {URL}
   */
  buildUrl () {
    const url = new URL(config.api.competitions)

    for (let key in this.filters) {
      url.searchParams.set(key, this.filters[key])
    }

    return url
  }
}
