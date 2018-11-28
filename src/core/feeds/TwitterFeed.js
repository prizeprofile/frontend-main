import Feed from './Feed'

export default class Twitter extends Feed {
  /** @var {any} */
  get defaultFilters () {
    return {
      sourceId: 0
    }
  }

  /** @var {string} */
  get slug () {
    return 'twitter'
  }

  /** @var {string[]} */
  get class () {
    return ['fab', 'fa-twitter', 'has-text-twitter']
  }
}
