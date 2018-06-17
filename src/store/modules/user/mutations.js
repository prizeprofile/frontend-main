import { USER_SET_TOKEN } from '@/store/types'

export default {
  /**
   * Sets a token for user.
   *
   * @param {object} state
   * @param {object[]} payload
   * @return {void}
   */
  [USER_SET_TOKEN]: (state, payload) => {
    window.localStorage.setItem(payload.key, payload.value)

    state.user.tokens[payload.key] = payload.value
  }
}
