import 'es6-promise/auto'
import Vue from 'vue'
import App from './App'
import store from './store'
import routes from './routes'
import Router from 'vue-router'
import VueVisible from 'vue-visible'
import AsyncComputed from 'vue-async-computed'

Vue.use(Router)
  .use(VueVisible)
  .use(AsyncComputed)

export default new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router: new Router({ routes }),
  store,
  beforeCreate () {
    this.$store.commit('init')
  }
})
