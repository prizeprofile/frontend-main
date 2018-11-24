import axios from 'axios'
import config from '@/config'
import {
  LOAD_COMPETITIONS,
  RESET_COMPETITIONS,
  SET_COMPETITIONS,
  APPEND_COMPETITIONS,
  ENTER_COMPETITION
} from '@/store/types'

const fetchCompetitions = (filters) => {
  const url = new URL(config.api.competitions)

  // Append filters to the request.
  Object.keys(filters).forEach(key => url.searchParams.set(key, filters[key]))

  return axios.get(url.toString()).then(({ data }) => data)
}

export default {
  /**
   * Action that commits the competitions to the state.
   *
   * @param {any.function} commit
   * @param {any} filters
   *
   * @return {Promise<void>}
   */
  [LOAD_COMPETITIONS]: async ({ commit }, filters = {}) => {
    return commit(SET_COMPETITIONS, await fetchCompetitions(filters))
  },

  /**
   * Action that resets the competitions array on the state.
   *
   * @return {Promise<void>}
   */
  [RESET_COMPETITIONS]: async ({ commit }) => {
    return commit(SET_COMPETITIONS, { content: [] })
  },

  /**
   * Action that appends competitions to the state.
   *
   * @param {any.function} commit
   * @param {any} filters
   *
   * @return {Promise<void>}
   */
  [APPEND_COMPETITIONS]: async ({ commit }, filters) => {
    return commit(APPEND_COMPETITIONS, await fetchCompetitions(filters))
  },

  /**
   * Saves competition entering to store.
   *
   * @param {any.function} commit
   * @param {any} payload
   *
   * @return {Promise<void>}
   */
  [ENTER_COMPETITION]: ({ commit }, payload) => commit(ENTER_COMPETITION, payload)
}
