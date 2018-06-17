import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import elements from './modules/elements'
import competitions from './modules/competitions'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    competitions,
    elements,
    user
  }
})
