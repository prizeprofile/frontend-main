import Vue from 'vue'
import { USER_SET_TOKEN, USER_UPDATE } from '@/store/types'

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
   * Sets a user info.
   *
   * @param {object} user
   * @param {object[]} payload
   * @return {void}
   */
  [USER_UPDATE]: (user, payload) => {
    Vue.set(user, 'info', payload)
  }
}
