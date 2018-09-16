<template>
  <div>
    <router-view></router-view>
    <global-modals></global-modals>
  </div>
</template>

<script>
import GlobalModals from '@/views/partials/lists/GlobalModals'

export default {
  components: { GlobalModals }
}
</script>

<style lang="sass">
@import assets/sass/app
</style>
