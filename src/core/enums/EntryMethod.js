
export const RETWEET = {
  name: 'retweet',
  icon: { type: 'fas', name: 'fa-retweet' },

  async enter (tweet) {
    //
  }
}

export const COMMENT = {
  name: 'comment',
  icon: { type: 'fas', name: 'fa-comment' },

  async enter (tweet) {
    //
  }
}

export const LIKE = {
  name: 'like',
  icon: { type: 'fas', name: 'fa-heart' },

  async enter (tweet) {
    //
  }
}

export const FOLLOW = {
  name: 'follow',
  icon: { type: 'fas', name: 'fa-user-plus' },

  async enter (tweet) {
    //
  }
}

export const MENTION = {
  name: 'mention',
  icon: { type: 'fas', name: 'fa-at' },

  async enter (tweet) {
    //
  }
}

export const values = () => ['RETWEET', 'COMMENT', 'LIKE', 'FOLLOW', 'MENTION']
