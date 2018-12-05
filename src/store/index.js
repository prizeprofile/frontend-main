import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import feed from './modules/feed'
import elements from './modules/elements'
import promoters from './modules/promoters'
import competitions from './modules/competitions'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    competitions,
    feed,
    elements,
    promoters,
    user
  }
})

// Caches Vuex to localStorage.
store.subscribe((_, state) => {
  localStorage.setItem('vuex:store', JSON.stringify({
    user: state.user,
    competitions: {
      entered: state.competitions.entered
    }
  }))
})

export default store
