<template>
  <router-view></router-view>
</template>

<script>

import { LOAD_COMPETITIONS } from '@/store/types'

export default {
  created () {
    // Loads the competitions from either API or local cache.
    // If loading from API, the default amount is 50 competitions.
    this.$store.dispatch(LOAD_COMPETITIONS)
  }
}
</script>

<style lang="sass">
  @import assets/sass/app
</style>
