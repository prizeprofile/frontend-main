import EntryMethod from './EntryMethod'

export default class Follow extends EntryMethod {
  /**
   * The entry method name and idetified.
   *
   * @var {string}
   */
  get name () {
    return 'follow'
  }

  /**
   * The entry method display icons.
   *
   * @var {any}
   */
  get icon () {
    return {
      type: 'fas',
      name: 'fa-user-plus'
    }
  }

  /**
   * Automatically enter the competition.
   *
   * @param {any} competition
   */
  async auto (competition) {
    throw new Error('Not Implemented')
  }

  /**
   * Manually enter the competition.
   *
   * @param {any} competition
   */
  async manual (competition) {
    open(`https://twitter.com/intent/tweet?in_reply_to=${competition.tweet_id}`)
  }
}
