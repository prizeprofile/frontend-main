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
      views: {
        feed: {
          title: '👋&nbsp;&nbsp;New to Gleam Competitions?',
          description: 'Find out how they work in our handy 4 step guide.'
        }
      },
      modal: {
        slides: [
          {
            image: '$/images/welcome/gleam/intro.png',
            heading: 'Get Free Stuff From Brands',
            text: 'Websites use Gleam Widgets to giveaway free stuff! We find the best competitions from blogs, websites and facebook pages so can enter them all at once.'
          },
          {
            image: '$/images/welcome/gleam/account-sign-in.png',
            heading: 'How to Enter Gleam Competitions',
            text: 'Gleam allows you to enter competitions for undertaking tasks, such as signing up to newsletters as well as liking, following, sharing a brands social media.'
          },
          {
            image: '$/images/welcome/gleam/entry-methods.png',
            heading: 'Do You Have To Complete All Tasks?',
            text: 'You <strong>don’t</strong> have to complete every task to enter the prize draw, just sign in using your email address or Twitter/Facebook account.'
          },
          {
            image: '$/images/welcome/gleam/picking-winner.png',
            heading: 'How Do You Know When You’ve Won?',
            text: 'Gleam chooses a random winner from all entries, and the promoter contacts the winner via email.'
          }
        ]
      }
    }
  }
}
