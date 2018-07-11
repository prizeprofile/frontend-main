import Like from './Like'
import Follow from './Follow'
import Comment from './Comment'
import Retweet from './Retweet'
import TagFriend from './TagFriend'

const methods = {
  like: Like,
  follow: Follow,
  comment: Comment,
  retweet: Retweet,
  tagfriend: TagFriend
}

export default (entries, tweet) => {
  const client = null

  return entries.map(entry => new methods[entry](tweet, client).enter())
}
