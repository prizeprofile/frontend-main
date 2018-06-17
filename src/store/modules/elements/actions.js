import { MODAL_SET, MODAL_SHOW, MODAL_HIDE } from '@/store/types'

export default {
  /**
   * Hides welcome modal window.
   *
   * @param {object.function} commit
   * @param {string} modal
   * @return {Promise<void>}
   */
  [MODAL_SHOW]: ({ commit }, modal) => {
    commit(MODAL_SET, { modal, active: true })
  },

  /**
   * Shows welcome modal window.
   *
   * @param {object.function} commit
   * @param {string} modal
   * @return {Promise<void>}
   */
  [MODAL_HIDE]: ({ commit }, modal) => {
    commit(MODAL_SET, { modal, active: false })
  }
}
