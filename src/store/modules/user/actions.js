import axios from 'axios'
import config from 'config'
import {
  USER_SET_TOKEN,
  USER_CONNECT_TWITTER,
  USER_AUTHORISE_TWITTER,
  USER_UPDATE_TIMESTAMPS
} from '@/store/types'

export default {
  /**
   * Commits action to update updated_at and populate created_at.
   * @type {String}
   */
  [USER_UPDATE_TIMESTAMPS]: ({ commit }) => {
    return commit(USER_UPDATE_TIMESTAMPS, Date.now())
  },

  /**
   * Makes an API request to AWS lambda for oauth token and opens Twitter auth
   * page.
   *
   * @return {Promise<void>}
   */
  [USER_CONNECT_TWITTER]: ({ commit }) => {
    // TODO: Implement loading.
    // TODO: Implement error handling.
    return axios.post(config.api.oauth, { type: 'request_token' })
      .then(({ data }) => {
        // Saves token.
        commit(USER_SET_TOKEN, { key: 'token_secret', value: data.token_secret })

        // Redirects user to Twitter to approve PrizeProfile.
        window.location = config.twitter.oauth + data.token
      })
  },

  /**
   * Makes an API request to AWS lambda for acces token.
   *
   * @return {Promise<void>}
   */
  [USER_AUTHORISE_TWITTER]: ({ commit }, payload) => {
    // TODO: Implement loading.
    // TODO: Implement error handling.

    return axios.post(config.api.oauth, {
      type: 'access_token',
      token: payload.token,
      verifier: payload.verifier,
      token_secret: payload.token_secret
    }).then(({ data }) => {
      // TODO: Create a new cognito identity and save the tokens there.
      // commit(USER_SET_TOKEN, { key: 'access_token', value: data.access_token })
      // commit(USER_SET_TOKEN, { key: 'access_token_secret', value: data.access_token_secret })
    })
  }
}
