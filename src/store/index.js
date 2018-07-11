import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import elements from './modules/elements'
import competitions from './modules/competitions'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    competitions,
    elements,
    user
  },

  mutations: {
    // Loads cashed data from local storage.
    init (state) {
      let cashe = window.localStorage.getItem('store')

      if (cashe) {
        this.replaceState(Object.assign(state, JSON.parse(cashe)))
      }
    }
  }
})

// Cashes Vuex to localStorage.
store.subscribe((_, state) => {
  window.localStorage.setItem('store', JSON.stringify(state))
})

export default store
