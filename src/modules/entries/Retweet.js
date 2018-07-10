import EntryMethod from './EntryMethod'

export default class Retweet extends EntryMethod {
  async auto () {
    return this.intent()
  }

  async intent () {
    window.open('https://twitter.com/intent/retweet?tweet_id=' + this.tweet)
  }

  name () {
    return 'retweet'
  }
}
