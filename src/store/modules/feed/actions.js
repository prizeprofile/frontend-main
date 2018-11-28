import {
  RESET_FEED,
  SET_FEED,
  APPEND_TO_FEED
} from '@/store/types'

export default {
  /**
   * @return {Promise<void>}
   */
  [SET_FEED]: ({ commit }, payload) => {
    return commit(SET_FEED, payload)
  },

  /**
   * @return {Promise<void>}
   */
  [RESET_FEED]: async ({ commit }, feed) => {
    return commit(SET_FEED, { feed, content: [] })
  },

  /**
   * @return {Promise<void>}
   */
  [APPEND_TO_FEED]: async ({ commit, state }, payload) => {
    return payload.feed === state.feed
      ? commit(APPEND_TO_FEED, payload.data)
      : commit(SET_FEED, payload)
  }
}
