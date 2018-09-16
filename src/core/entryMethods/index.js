import Like from './Like'
import Follow from './Follow'
import Comment from './Comment'
import Retweet from './Retweet'
import Mention from './Mention'

const methods = {
  like: Like,
  follow: Follow,
  comment: Comment,
  retweet: Retweet,
  mention: Mention
}

const enter = (entries, tweet) => {
  const client = null

  return entries.map(entry => new methods[entry](tweet, client).enter())
}

export { methods, enter }
