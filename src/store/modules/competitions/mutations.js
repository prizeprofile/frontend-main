import Vue from 'vue'
import { ENTER_COMPETITION, VIEW_COMPETITION } from '@/store/types'

export default {

  /**
   * Remembers that a competition has been entered.
   *
   * @param {any.array} entered
   * @param {any} paload
   *
   * @return {void}
   */
  [ENTER_COMPETITION]: ({ entered }, payload) => {
    let i = entered.findIndex(competition => competition.id === payload.id)

    i === -1
      // If the competition has not been entered prior, push it to the array.
      ? entered.push(payload)
      // Otherwise update the current entry.
      : entered[i] = payload
  },

  /**
   * Sets currently viewed competition.
   *
   * @param {any} state
   * @param {any} competition
   *
   * @return {void}
   */
  [VIEW_COMPETITION]: (state, competition) => {
    Vue.set(state, 'viewed', competition)
  }
}
