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
      views: {
        feed: {
          title: '👋&nbsp;&nbsp;New to Twitter Competitions?',
          description: 'Find out how they work in our handy 4 step guide.'
        }
      },
      modal: {
        slides: [
          {
            image: '$/images/welcome/twitter/intro.png',
            heading: 'Get Free Stuff on Twitter',
            text: 'Brands are always giving away free stuff on Twitter. We scout out the best competitions so you can enter them all at once.'
          },
          {
            image: '$/images/welcome/twitter/entry-methods.gif',
            heading: 'One Click Enter - It’s Magic!',
            text: 'We’ve made things easy. Click the “Enter” button and we\'ll get to work completing the actions needed to enter the competition.'
          },
          {
            image: '$/images/welcome/twitter/account-connect.png',
            heading: 'Connect Your Account',
            text: 'For us to enter competitions on your behalf you will need to connect your Twitter account.'
          },
          {
            image: '$/images/welcome/twitter/any-suggestions.png',
            heading: 'Any Suggestions?',
            text: 'Have an idea on how we can make things easier? Drop us a message on our contact form and we will try our best to make it happen!'
          }
        ]
      }
    }
  }
}
