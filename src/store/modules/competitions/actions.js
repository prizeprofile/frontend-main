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
    const data = getters.feed.content.find(comp => comp.id == id)

    if (data) {
      return commit(VIEW_COMPETITION, { data, feed })
    }

    console.log('competition could not be found in cache')

    await axios.get(`${config.api.competition}/${id}`)
  }
}
