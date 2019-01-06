import config from '@/config'
import {
  APPEND_TO_FEED,
  SET_FEED
} from '@/store/types'

export default /* abstract */ class Feed {
  /** @var {any} filters */
  /** @var {String} slug */
  /** @var {String[]} class */
  /** @var {Number} page */
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
    this.page = this.$store.getters.feed.page
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
    this.loading = true

    try {
      if (action === SET_FEED) {
        await this.$store.dispatch(action, {
          data: { content: [], last: false, number: 0 },
          slug: this.slug
        })
      }

      const { data } = await this.axios.get(this.buildUrl())

      await this.$store.dispatch(action, {
        data, slug: this.slug
      })
    } catch (_) {
      await this.$store.dispatch(SET_FEED, {
        data: { content: [], last: true, number: 0 },
        slug: this.slug
      })
    } finally {
      this.loading = false
    }
  }

  /**
   * Refreshes the feed after set interval. This is used to apply filters.
   *
   * @return {void}
   */
  refreshFeed (action = SET_FEED) {
    if (!this.isActive) {
      return
    }

    clearTimeout(this.refreshFeedInterval)

    this.refreshFeedInterval = setTimeout(() => {
      this.page = 0

      this.fetch(action)
    }, config.filters.applyDelay)
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
        if (state[key] === value) {
          return true
        }

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

    if (this.page) {
      url.searchParams.set('page', this.page)
    }

    for (let key in this.filters) {
      url.searchParams.set(key, this.filters[key])
    }

    return url
  }
}
