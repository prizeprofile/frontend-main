import EntryMethod from './EntryMethod'

export default class Comment extends EntryMethod {
  /**
   * The entry method name and idetified.
   *
   * @var {string}
   */
  get name () {
    return 'comment'
  }

  /**
   * The entry method display icons.
   *
   * @var {any}
   */
  get icon () {
    return this.progress || {
      type: 'fas',
      name: 'fa-comment'
    }
  }

  /**
   * Automatically enter the competition.
   *
   * @param {any} competition
   */
  async auto (competition) {
    return this.manual(competition)
  }

  /**
   * Manually enter the competition.
   *
   * @param {any} competition
   */
  async manual (competition) {
    open(`https://twitter.com/intent/tweet?in_reply_to=${competition.resource_id}`)
  }
}
