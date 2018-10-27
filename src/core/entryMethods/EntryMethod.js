
export default class EntryMethod {
  /**
   * The entry method name and idetified.
   *
   * @var {string}
   */
  get name () {
    throw new Error('Not Implemented')
  }

  /**
   * The entry method display icons.
   *
   * @var {any}
   */
  get icon () {
    throw new Error('Not Implemented')
  }

  /**
   * Progress icon.
   *
   * @var {any}
   */
  get progress () {
    return this._progress && { type: 'fas', name: 'fa-spinner fa-spin' }
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
    throw new Error('Not Implemented')
  }
}
