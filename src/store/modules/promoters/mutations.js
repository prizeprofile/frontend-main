import _ from 'lodash'
import { SET_PROMOTERS } from '@/store/types'

export default {
  /**
   * Sets the array with promoters.
   *
   * @param {object} state
   * @param {object[]} payload
   * @return {void}
   */
  [SET_PROMOTERS]: (state, payload) => {
    if (!_.isArray(payload)) {
      throw new Error('Payload has to be an array.')
    }

    state.promoters = payload
  }
}
