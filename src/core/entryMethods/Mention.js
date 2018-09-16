import EntryMethod from './EntryMethod'

export default class TagFriend extends EntryMethod {
  async auto () {
    return this.intent()
  }

  async intent () {
    window.open('https://twitter.com/intent/tweet?in_reply_to='
      + this.tweet.tweet_id)
  }

  name () {
    return 'tagfriend'
  }
}
