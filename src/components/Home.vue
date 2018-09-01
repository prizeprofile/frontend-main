<template>
  <layout>
    <div class="modals">
      <welcome-modal />

      <connect-twitter-modal />
    </div>

    <filters-buckled v-on:toggle="hideFilters = !hideFilters"/>

    <div class="home-content">
      <div class="container columns is-desktop is-variable is-4">
        <div
          v-bind:class="{'is-hidden-touch': hideFilters}"
          class="
            column
            is-one-third-desktop
            is-three-quarters-tablet"
        >
          <filters />

          <social class="is-hidden-touch" />
        </div>

        <div class="
          column
          is-three-quarters-tablet
          is-two-thirds-desktop
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

  data () {
    return {
      hideFilters: true
    }
  }
}
</script>
