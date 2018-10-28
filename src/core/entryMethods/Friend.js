import EntryMethod from './EntryMethod'

export default class Friend extends EntryMethod {
  /**
   * The entry method name and idetified.
   *
   * @var {string}
   */
  get name () {
    return 'friend'
  }

  /**
   * The entry method display icons.
   *
   * @var {any}
   */
  get icon () {
    return this.progress || {
      type: 'fas',
      name: 'fa-at'
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
