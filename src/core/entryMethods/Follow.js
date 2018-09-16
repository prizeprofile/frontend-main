import EntryMethod from './EntryMethod'

export default class Follow extends EntryMethod {
  async auto () {
    return this.intent()
  }

  async intent () {
    window.open('https://twitter.com/intent/user?screen_name='
      + this.tweet.promoter.screen_name)
  }

  name () {
    return 'like'
  }
}
