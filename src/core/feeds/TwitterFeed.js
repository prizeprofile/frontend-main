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

  /** @var {any} */
  get welcome () {
    return {
      title: '👋&nbsp;&nbsp;New to PrizeProfile?',
      description: 'PrizeProfile finds all the best Twitter competitions so you don’t have to. Connect your Twitter and start entering giveaways in one click!'
    }
  }
}
