import axios from 'axios'
import config from 'config'
import { SET_COMPETITIONS, LOAD_COMPETITIONS } from '@/store/types'

export default {
  /**
   * Action that commits the competitions to the state.
   * It looks to the local storage cache if there are any, otherwise
   * makes an API call to the backend.
   *
   * @param {object.function} commit
   * @param {number} offset
   * @return {Promise<void>}
   */
  [LOAD_COMPETITIONS]: ({ commit }, offset = 50) => {
    // TODO: Implement offset.
    // TODO: Implement error handler.

    /* return new Promise(resolve => setTimeout(resolve, 1500))
      .then(() => ({data: [
        {
          id: 1,
          tweet_id: '998990964671893506',
          posted: new Date(),
          entrants: 15,
          preview: 'http://via.placeholder.com/640x320',
          tweet_link: 'https://twitter.com/Nigel_Farage/status/998990964671893506',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          promoter: {
            name: 'EE',
            image: 'static/images/_temp.jpg',
            approved: true
          },
          entry_methods: ['like', 'comment', 'retweet']
        },
        {
          id: 2,
          tweet_id: '998990964671893506',
          posted: new Date(),
          preview: 'http://via.placeholder.com/500x820',
          entrants: 15,
          tweet_link: 'https://twitter.com/Nigel_Farage/status/998990964671893506',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          promoter: {
            name: 'Tesco',
            image: 'static/images/_temp.jpg',
            approved: false
          },
          entry_methods: ['like', 'comment']
        },
        {
          id: 3,
          tweet_id: '998990964671893506',
          posted: new Date(),
          preview: 'http://via.placeholder.com/1250x320',
          entrants: 10,
          tweet_link: 'https://twitter.com/Nigel_Farage/status/998990964671893506',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          promoter: {
            name: 'Tesco',
            image: 'http://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/42/2017/08/Steves-630x330.jpg',
            approved: true
          },
          entry_methods: ['like']
        }
      ]})) */
    return axios.get(config.api.competitions)
      .then(({ data }) => commit(SET_COMPETITIONS, data))
      .catch(console.error)
  }
}
