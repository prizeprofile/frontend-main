import { USER_SET_TOKEN, USER_UPDATE_TIMESTAMPS } from '@/store/types'

export default {
  /**
   * Sets a token for user.
   *
   * @param {object} state
   * @param {object[]} payload
   * @return {void}
   */
  [USER_SET_TOKEN]: (state, payload) => {
    state.user.tokens[payload.key] = payload.value
  },

  [USER_UPDATE_TIMESTAMPS]: (state, payload) => {
    //
  }
}
