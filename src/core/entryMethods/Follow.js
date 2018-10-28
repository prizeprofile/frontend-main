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
    return this.progress || {
      type: 'fas',
      name: 'fa-user-plus'
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
      id: competition.promoter.resource_id
    }
  }

  /**
   * Manually enter the competition.
   *
   * @param {any} competition
   */
  async manual (competition) {
    open(`https://twitter.com/intent/user?screen_name=${competition.promoter.screen_name}`)
  }
}
