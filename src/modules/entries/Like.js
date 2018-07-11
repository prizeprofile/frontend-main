import EntryMethod from './EntryMethod'

export default class Like extends EntryMethod {
  async auto () {
    return this.intent()
  }

  async intent () {
    window.open('https://twitter.com/intent/like?tweet_id='
      + this.tweet.tweet_id)
  }

  name () {
    return 'like'
  }
}
