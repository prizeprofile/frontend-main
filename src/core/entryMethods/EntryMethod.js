
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
