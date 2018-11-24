import Vue from 'vue'
import {
  SET_COMPETITIONS,
  APPEND_COMPETITIONS,
  ENTER_COMPETITION
} from '@/store/types'

export default {
  /**
   * Appends the array with competitions.
   *
   * @param {any} state
   * @param {any[]} payload
   *
   * @return {void}
   */
  [APPEND_COMPETITIONS]: (state, { content, last, number }) => {
    Vue.set(state, 'content', [...state.content, ...content])
    Vue.set(state, 'last', !!last)
    Vue.set(state, 'page', number)
  },

  /**
   * Sets the array with competitions.
   *
   * @param {any} state
   * @param {any[]} payload
   *
   * @return {void}
   */
  [SET_COMPETITIONS]: (state, { content, last }) => {
    Vue.set(state, 'content', content)
    Vue.set(state, 'last', !!last)
    Vue.set(state, 'page', 0)
  },

  /**
   * Remembers the competition.
   *
   * @param {any.array} entered
   * @param {any} paload
   *
   * @return {void}
   */
  [ENTER_COMPETITION]: ({ entered }, payload) => {
    let i = entered.findIndex(competition => competition.id === payload.id)

    i === -1 ? entered.push(payload) : entered[i] = payload
  }
}
