import Feed from './Feed'

export default class GleamFeed extends Feed {
  /** @var {any} */
  get defaultFilters () {
    return {
      sourceId: 1,
      notGaming: true
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

  /** @var {any} */
  get welcome () {
    return {
      title: '👋&nbsp;&nbsp;New to PrizeProfile?',
      description: 'PrizeProfile finds all the best Gleam competitions so you don’t have to. Connect your Twitter and start entering giveaways in one click!'
    }
  }
}
