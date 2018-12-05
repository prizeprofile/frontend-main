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
  [RESET_FEED]: async ({ commit }, slug) => {
    return commit(SET_FEED, { slug, content: [] })
  },

  /**
   * @return {Promise<void>}
   */
  [APPEND_TO_FEED]: async ({ commit, state }, payload) => {
    return payload.slug === state.slug
      ? commit(APPEND_TO_FEED, payload.data)
      : commit(SET_FEED, payload)
  }
}
