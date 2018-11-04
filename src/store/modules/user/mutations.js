import Vue from 'vue'
import { USER_SET_TOKEN, USER_UPDATE, USER_CLEAR } from '@/store/types'

export default {
  /**
   * Sets a token for user.
   *
   * @param {object} user
   * @param {object[]} payload
   * @return {void}
   */
  [USER_SET_TOKEN]: (user, payload) => {
    Vue.set(user.tokens, payload.key, payload.value)
  },

  /**
   * Sets the user info.
   *
   * @param {object} user
   * @param {object[]} payload
   * @return {void}
   */
  [USER_UPDATE]: (user, payload) => {
    Vue.set(user, 'info', payload)
  },

  /**
   * Sets a user info.
   *
   * @param {object} state
   * @param {object[]} payload
   * @return {void}
   */
  [USER_CLEAR]: (user) => {
    Vue.set(user, 'tokens', {})
    Vue.set(user, 'info', {})
  }
}
