import store from 'vuex'
import axios from 'axios'

const httpClient = axios.create({
  headers: { 'Cache-Control': 'max-age: 300' }
})

export const feeds = [
  'TwitterFeed',
  'GleamFeed'
]
  .map((file) => new require(`./${file}`)(store, httpClient))

export const TwitterFeed = feeds.TwitterFeed
export const GleamFeed = feeds.GleamFeed
