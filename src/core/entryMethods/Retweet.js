import EntryMethod from './EntryMethod'

export default class Retweet extends EntryMethod {
  /**
   * The entry method name and idetified.
   *
   * @var {string}
   */
  get name () {
    return 'retweet'
  }

  /**
   * The entry method display icons.
   *
   * @var {any}
   */
  get icon () {
    return this.progress || {
      type: 'fas',
      name: 'fa-retweet'
    }
  }

  /**
   * Automatically enter the competition.
   *
   * @param {any} competition
   */
  auto (competition) {
    return {
      method: this.name,
      id: competition.resource_id
    }
  }

  /**
   * Manually enter the competition.
   *
   * @param {any} competition
   */
  async manual (competition) {
    open(`https://twitter.com/intent/retweet?tweet_id=${competition.resource_id}`)
  }
}
