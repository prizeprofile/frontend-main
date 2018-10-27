import Like from '@/core/entryMethods/Like'
import Follow from '@/core/entryMethods/Follow'
import Comment from '@/core/entryMethods/Comment'
import Friend from '@/core/entryMethods/Friend'
import Retweet from '@/core/entryMethods/Retweet'

export default {
  data () {
    return {
      entryMethods: {
        retweet: new Retweet(),
        comment: new Comment(),
        like: new Like(),
        follow: new Follow(),
        friend: new Friend()
      }
    }
  },

  methods: {
    /**
     * Enter the competition via the provided methods.
     *
     * @param {any} competition
     * @param {string[]} methods
     */
    async enterCompetition (competition, methods) {
      const loggedIn = false

      // Redo for auto.
      methods.map((method) => {
        // Pick the correct instance
        const entryMethod = this.entryMethods[method]

        // Call the accurate entry method.
        return loggedIn
          ? entryMethod.auto(competition)
          : entryMethod.manual(competition)
      })
    }
  }
}
