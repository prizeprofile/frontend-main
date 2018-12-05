import Vue from 'vue'
import {
  SET_FEED,
  APPEND_TO_FEED
} from '@/store/types'

export default {
  /**
   * @return {void}
   */
  [APPEND_TO_FEED]: (state, { content, last, number }) => {
    Vue.set(state, 'content', [...state.content, ...content])
    Vue.set(state, 'last', !!last)
    Vue.set(state, 'page', number)
  },

  /**
   * @return {void}
   */
  [SET_FEED]: (state, { slug, data }) => {
    Vue.set(state, 'content', data.content)
    Vue.set(state, 'last', !!data.last)
    Vue.set(state, 'page', 0)
    Vue.set(state, 'slug', slug)
  }
}
