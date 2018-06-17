<template>
  <layout>
    <div class="modals">
      <welcome-modal />

      <connect-twitter-modal />
    </div>

    <filters-buckled />

    <div class="home-content">
      <div class="container columns is-desktop">
        <div class="
          column
          is-hidden-touch
          is-one-third-desktop
          is-one-quarter-fullhd
          is-three-quarters-tablet
        ">
          <filters />

          <social class="is-hidden-touch" />
        </div>

        <div class="
          column
          is-three-quarters-tablet
          is-two-thirds-desktop
          is-three-quarters-fullhd
        ">
          <competitions />
        </div>
      </div>
    </div>
  </layout>
</template>

<script>
import Layout from '@/layouts/DefaultLayout'
import Social from '@/components/common/Social'
import { LOAD_COMPETITIONS } from '@/store/types'
import Filters from '@/components/filters/Filters'
import Competitions from '@/components/Competitions'
import FiltersBuckled from '@/components/filters/Buckled'
import WelcomeModal from '@/components/modals/WelcomeModal'
import ConnectTwitterModal from '@/components/modals/ConnectTwitterModal'

export default {
  components: {
    Layout,
    Social,
    Filters,
    WelcomeModal,
    Competitions,
    FiltersBuckled,
    ConnectTwitterModal
  },

  created () {
    // Loads the competitions from either API or local cache.
    // If loading from API, the default amount is 50 competitions.
    this.$store.dispatch(LOAD_COMPETITIONS)
  }
}
</script>
