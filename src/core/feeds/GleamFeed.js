import Feed from './Feed'

export default class GleamFeed extends Feed {
  /** @var {any} */
  get defaultFilters () {
    return {
      sourceId: 1
    }
  }

  /** @var {string} */
  get slug () {
    return 'gleam'
  }

  /** @var {string[]} */
  get class () {
    return ['icon-gleam']
  }
}
