// import axios from 'axios'
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
    // TODO: Cache competition in local storage.
    // TODO: Implement offset.
    // TODO: Implement error handler.

    // return axios.get('http://localhost:8001/')
    return new Promise(resolve => setTimeout(resolve, 1500))
      .then(() => ({data: [
        {
          id: 1,
          posted: new Date(),
          entrants: 15,
          tweet_link: 'https://twitter.com/Nigel_Farage/status/998990964671893506',
          text: 'daddy sees ya. gotta go and buy some food cuz im starving. dont scroll down.',
          promoter: {
            name: 'EE',
            image: 'static/images/_temp.jpg',
            approved: true
          }
        },
        {
          id: 2,
          posted: new Date(),
          preview: 'https://cdn.mos.cms.futurecdn.net/wXNBvsCtBLmiEJRyfP2644-768-80.jpg',
          entrants: 15,
          tweet_link: 'https://twitter.com/Nigel_Farage/status/998990964671893506',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          promoter: {
            name: 'Tesco',
            image: 'static/images/_temp.jpg',
            approved: false
          }
        },
        {
          id: 3,
          posted: new Date(),
          preview: 'http://primapekarna.cz/Public/Images/Article/stredni-rohlik_01.png',
          entrants: 'all',
          tweet_link: 'https://twitter.com/Nigel_Farage/status/998990964671893506',
          text: 'youre a rebell fucking hell. well anyway this is a very good piece of traditional czech rohlik. best with ham and some butter or some honey. if you feel peckish there aint a better option, trust me bruv',
          promoter: {
            name: 'Baked Baker',
            image: 'http://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/42/2017/08/Steves-630x330.jpg',
            approved: true
          }
        }
      ]}))
      .then(({ data }) => commit(SET_COMPETITIONS, data))
      .catch(console.error)
  }
}
