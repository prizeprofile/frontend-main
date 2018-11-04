import axios from 'axios'
import config from '@/config'
import {
  USER_UPDATE,
  USER_SET_TOKEN,
  USER_CONNECT_TWITTER,
  USER_AUTHORISE_TWITTER,
  USER_LOGOUT,
  USER_CLEAR
} from '@/store/types'

export default {
  /**
   * Makes an API request to AWS lambda for oauth token and opens Twitter auth
   * page.
   *
   * @return {Promise<void>}
   */
  [USER_CONNECT_TWITTER]: async ({ commit }) => {
    const { data } = await axios.get(config.api.requestToken)

    // Saves token.
    await commit(USER_SET_TOKEN, { key: 'token_secret', value: data.token_secret })

    // Redirects user to Twitter to approve PrizeProfile.
    window.location = config.twitter.oauth + data.token
  },

  /**
   * Makes an API request to AWS lambda for acces token.
   *
   * @return {Promise<void>}
   */
  [USER_AUTHORISE_TWITTER]: async ({ commit }, payload) => {
    const { data } = await axios.post(config.api.sync, {
      token: payload.token,
      verifier: payload.verifier,
      token_secret: payload.token_secret
    })

    await commit(USER_UPDATE, data.user)

    await commit(USER_SET_TOKEN, { key: 'service_token', value: data.token })
  },

  /**
   * Clears user localstorage info.
   *
   * @return {Promise<void>}
   */
  [USER_LOGOUT]: ({ commit }) => {
    return commit(USER_CLEAR)
  }
}
