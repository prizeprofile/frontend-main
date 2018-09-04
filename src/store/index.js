import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import elements from './modules/elements'
import promoters from './modules/promoters'
import competitions from './modules/competitions'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    competitions,
    elements,
    promoters,
    user
  },

  mutations: {
    // Loads cached data from local storage.
    init (state) {
      let cache = window.localStorage.getItem('store')

      if (cache) {
        this.replaceState(Object.assign(state, JSON.parse(cache)))
      }
    }
  }
})

// Caches Vuex to localStorage.
store.subscribe((_, state) => {
  window.localStorage.setItem('store', JSON.stringify(state))
})

export default store
