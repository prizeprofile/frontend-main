<template>
  <layout type="Default" header="Default">
    <aside slot="side">
      <welcome-brick
        class="is-hidden-mobile"
        :data="activeFeed.welcome.views.feed"
      />

      <!-- Popular competitions -->

      <panel class="is-hidden-touch">
        <social></social>
      </panel>
    </aside>

    <main slot="main">
      <component
        :is="`gleam-single-competition`"
        :payload="$store.getters.viewedCompetition.data"
      >
      </component>
    </main>
  </layout>
</template>

<script>
import Social from '@/views/partials/common/Social'
import HasActiveFeed from '@/core/mixins/HasActiveFeed'
import GleamSingleCompetition from '@/views/feeds/gleam/Single'
import WelcomeBrick from '@/views/partials/common/WelcomeBrick'

export default {
  components: { Social, WelcomeBrick, GleamSingleCompetition },

  mixins: [HasActiveFeed]
}
</script>
