<template>
  <div>
    <router-view></router-view>
    <global-modals></global-modals>
  </div>
</template>

<script>
import Vue from 'vue'
import GlobalModals from '@/views/partials/lists/GlobalModals'

export default {
  components: { GlobalModals },

  mounted () {
    this.loadCache(localStorage.getItem('vuex:store'))
  },

  methods: {
    loadCache (cache) {
      if (!cache) {
        return
      }

      cache = JSON.parse(cache)

      ;[
        {
          condition: _ => cache.user,
          routine: state => Vue.set(state, 'user', cache.user)
        },
        {
          condition: _ => cache.competitions,
          routine: state => Vue.set(state.competitions, 'entered', cache.competitions.entered)
        }
      ].forEach(({ condition, routine }) => condition() && routine(this.$store.state))
    }
  }
}
</script>

<style lang="sass">
@import assets/sass/app
</style>
