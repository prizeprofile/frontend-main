import { MODAL_SET } from '@/store/types'

export default {
  /**
   * Sets the array with competitions.
   *
   * @param {object} state
   * @param {Boolean} bool
   * @return {void}
   */
  [MODAL_SET]: (state, payload) => {
    state.elements.modals[payload.modal].isActive = payload.active
  }
}
