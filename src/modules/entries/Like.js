import axios from 'axios'
import config from 'config'
import EntryMethod from './EntryMethod'

export default class Like extends EntryMethod {
  async auto () {
    const resource = config.twitter.methods.like

    return axios.post(resource, { id: this.tweet })
      .then(console.log)
      .catch(console.warn)
  }

  async intent () {
    window.open('https://twitter.com/intent/like?tweet_id=' + this.tweet)
  }

  name () {
    return 'like'
  }
}
