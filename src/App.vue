<template>
  <div>
    <router-view></router-view>
    <global-modals></global-modals>
  </div>
</template>

<script>
import GlobalModals from '@/views/partials/lists/GlobalModals'

export default {
  components: { GlobalModals },

  mounted () {
    let cache = localStorage.getItem('vuex:store')

    if (cache) {
      this.$store.replaceState(Object.assign(this.$store.state, JSON.parse(cache)))
    }
  }
}
</script>

<style lang="sass">
@import assets/sass/app
</style>
