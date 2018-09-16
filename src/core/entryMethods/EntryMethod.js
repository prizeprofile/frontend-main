
export default class EntryMethod {
  /**
   * Class constructor
   *
   * @param {any} tweet
   * @param {any} user
   */
  constructor (tweet, user) {
    this.tweet = tweet
    this.user = user
  }

  enter () {
    this.job = this.user ? this.auto() : this.intent()

    return this
  }

  auto () {
    throw new Error('Not Implemented')
  }

  intent () {
    throw new Error('Not Implemented')
  }

  name () {
    throw new Error('Not Implemented')
  }
}
