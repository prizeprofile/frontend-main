import axios from 'axios'
import config from 'config'
import { LOAD_PROMOTERS, SET_PROMOTERS } from '@/store/types'

export default {
  /**
   * Action that commits the promoters to the state. It looks to the local
   * storage cache if there are any, otherwise makes an API call to the backend.
   *
   * @param {object.function} commit
   * @return {Promise<void>}
   */
  [LOAD_PROMOTERS]: ({ commit }) => {
    return axios.get(config.api.promoters)
      .then(({ data }) => commit(SET_PROMOTERS, data))
      .catch(console.error)
  }
}
