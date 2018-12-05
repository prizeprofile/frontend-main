import { ENTER_COMPETITION } from '@/store/types'

export default {
  /**
   * Saves competition enter to store.
   *
   * @param {any.function} commit
   * @param {any} payload
   *
   * @return {Promise<void>}
   */
  [ENTER_COMPETITION]: ({ commit }, payload) => commit(ENTER_COMPETITION, payload)
}
