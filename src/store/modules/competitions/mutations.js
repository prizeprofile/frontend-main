import Vue from 'vue'
import { SET_COMPETITIONS, APPEND_COMPETITIONS, INCREMENT_COMPETITIONS_PAGE } from '@/store/types'

export default {
  /**
   * Appends the array with competitions.
   *
   * @param {object} state
   * @param {object[]} payload
   *
   * @return {void}
   */
  [APPEND_COMPETITIONS]: (state, { content, last, number }) => {
    Vue.set(state, 'content', [...state.content, ...content])
    Vue.set(state, 'last', !!last)
    console.log(state.page, number)
    Vue.set(state, 'page', number)
  },

  /**
   * Sets the array with competitions.
   *
   * @param {object} state
   * @param {object[]} payload
   *
   * @return {void}
   */
  [SET_COMPETITIONS]: (state, { content, last }) => {
    Vue.set(state, 'content', content)
    Vue.set(state, 'last', !!last)
    Vue.set(state, 'page', 0)
  },

  [INCREMENT_COMPETITIONS_PAGE]: (state) => {
    Vue.set(state, 'page', state.page + 1)
  }
}
