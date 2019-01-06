import axios from 'axios'
import config from '@/config'
import { ENTER_COMPETITION, VIEW_COMPETITION } from '@/store/types'

export default {

  /**
   * Saves competition enter to store.
   *
   * @param {any.function} commit
   * @param {any} payload
   *
   * @return {Promise<void>}
   */
  [ENTER_COMPETITION]: ({ commit }, payload) => commit(ENTER_COMPETITION, payload),

  /**
   * Stores a competition into last viewed.
   *
   * @param {any.function} commit
   * @param {any.any} getters
   *
   * @return {Promise<void>}
   */
  [VIEW_COMPETITION]: async ({ commit, getters }, { id, feed }) => {
    const content = getters.feed.content.find(comp => comp.id == id)

    if (content) {
      return commit(VIEW_COMPETITION, { content, feed })
    }

    const { data } = await axios.get(`${config.api.competitions}/${id}`)

    return commit(VIEW_COMPETITION, { feed, content: data })
  }
}
