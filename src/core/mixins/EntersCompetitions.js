import Vue from 'vue'
import axios from 'axios'
import store from '@/store'
import { ENTER_COMPETITION } from '@/store/types'
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

      // Maps string methods to appropriate classes.
      methods = methods.map(method => this.entryMethods[method])

      // If user is not logged in, entering competitions is manual.
      if (!token) {
        return methods.map(method => method.manual(competition))
      }

      let res = false

      // Sets all methods to loading.
      methods.forEach(method => Vue.set(method, '_progress', true))

      try {
        // Tries to enter competition.
        res = await this.enterViaApi(competition, token, methods)

        // Saves the information about entering a competition to global state.
        store.dispatch(ENTER_COMPETITION, {
          id: competition.id,
          methods: competition.entry_methods,
          timestamp: Date.now()
        })
      } catch (_) {}

      // Removes loading icon from methods.
      methods.forEach(method => Vue.set(method, '_progress', false))

      return res || Promise.reject()
    },

    /**
     * Enters the competition with APIs.
     *
     * @param {any} competition
     * @param {string} token
     * @param {EntryMethod[]} methods
     */
    async enterViaApi (competition, token, methods) {
      // Picks only methods that can be auto entered.
      const actions = methods.map(method => method.auto(competition))
        .filter(job => !(job instanceof Promise))

      if (!actions.length) return true

      // TODO: Implement partial content.
      await axios.post(
        `${config.api.competitions}/${competition.id}/enter`,
        { actions },
        { headers: { 'Authorization': `Bearer ${token}` } }
      )

      return true
    }
  }
}
