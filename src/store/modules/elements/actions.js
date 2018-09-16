import { SET_ACTIVE_MODAL, SHOW_MODAL, HIDE_MODALS } from '@/store/types'

export default {
  /**
   * Hides welcome modal window.
   *
   * @param {object.function} commit
   * @param {string} modal
   * @return {Promise<void>}
   */
  [SHOW_MODAL]: async ({ commit }, modal) => {
    return commit(SET_ACTIVE_MODAL, modal)
  },

  /**
   * Shows welcome modal window.
   *
   * @param {object.function} commit
   * @return {Promise<void>}
   */
  [HIDE_MODALS]: async ({ commit }) => {
    return commit(SET_ACTIVE_MODAL, null)
  }
}
