import Vue from 'vue'
import axios from 'axios'
import store from '@/store'
import config from '@/config'
import Like from '@/core/entryMethods/Like'
import Follow from '@/core/entryMethods/Follow'
import Friend from '@/core/entryMethods/Friend'
import Comment from '@/core/entryMethods/Comment'
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
     *
     * @return {Promise<void>}
     */
    async enterCompetition (competition, methods) {
      const token = store.getters.userToken('service_token')

      methods = methods.map(method => this.entryMethods[method])

      if (!token) {
        return methods.map(method => method.manual(competition))
      }

      let res = false

      methods.forEach(method => Vue.set(method, '_progress', true))

      try {
        res = await this.enterViaApi(competition, token, methods)
      } catch (_) {}

      methods.forEach(method => Vue.set(method, '_progress', false))

      return res
    },

    /**
     * Enters the competition with APIs.
     *
     * @param {any} competition
     * @param {string} token
     * @param {EntryMethod[]} methods
     */
    async enterViaApi (competition, token, methods) {
      const actions = methods.map(method => method.auto(competition))
        .filter(job => !(job instanceof Promise))

      if (!actions.length) return true

      await axios.post(
        `${config.api.competitions}/${competition.id}/enter`,
        { actions },
        { headers: { 'Authorization': `Bearer ${token}` } }
      )

      return true
    }
  }
}
