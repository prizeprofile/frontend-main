import { SET_ACTIVE_MODAL } from '@/store/types'

export default {
  /**
   * Sets the array with competitions.
   *
   * @param {object} state
   * @param {Boolean} bool
   * @return {void}
   */
  [SET_ACTIVE_MODAL]: (state, payload) => {
    state.activeModal = payload
  }
}
