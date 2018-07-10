import EntryMethod from './EntryMethod'

export default class Comment extends EntryMethod {
  async auto () {
    return this.intent()
  }

  async intent () {
    throw new Error()
    // window.open('https://twitter.com/intent/tweet?in_reply_to=' + this.tweet)
  }

  name () {
    return 'comment'
  }
}
