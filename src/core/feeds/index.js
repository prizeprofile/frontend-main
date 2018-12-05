import store from '@/store'
import axios from 'axios'
import TwitterFeedClass from './TwitterFeed'
import GleamFeedClass from './GleamFeed'

const httpClient = axios.create({
  headers: { 'Cache-Control': 'max-age: 300' }
})

export const feeds = [
  new TwitterFeedClass(store, httpClient),
  new GleamFeedClass(store, httpClient)
]

export const [
  TwitterFeed,
  GleamFeed
 ] = feeds
