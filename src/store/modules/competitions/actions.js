import axios from 'axios'
import config from '@/config'
import { LOAD_COMPETITIONS, RESET_COMPETITIONS, SET_COMPETITIONS } from '@/store/types'

export default {
  /**
   * Action that commits the competitions to the state.
   *
   * @param {object.function} commit
   * @param {number} offset
   * @return {Promise<void>}
   */
  [LOAD_COMPETITIONS]: async ({ commit }, filters = {}) => {
    const url = new URL(config.api.competitions)

    // Append filters to the request.
    Object.keys(filters).forEach(key => url.searchParams.set(key, filters[key]))

    return axios.get(url.toString())
      .then(({ data }) => commit(SET_COMPETITIONS, data))
      .catch(() => commit(SET_COMPETITIONS, []))
  },

  /**
   * Action that resets the competitions array on the state.
   *
   * @return {Promise<void>}
   */
  [RESET_COMPETITIONS]: async ({ commit }) => {
    return commit(SET_COMPETITIONS, [])
  }
}
