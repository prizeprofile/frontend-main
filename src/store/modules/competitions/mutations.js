import _ from 'lodash'
import { SET_COMPETITIONS } from '@/store/types'

export default {
  /**
   * Sets the array with competitions.
   *
   * @param {object} state
   * @param {object[]} payload
   * @return {void}
   */
  [SET_COMPETITIONS]: (state, payload) => {
    if (!_.isArray(payload)) {
      throw new Error('Payload has to be an array.')
    }

    state.competitions = payload
  }
}
