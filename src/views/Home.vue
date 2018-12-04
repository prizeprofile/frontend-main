<template>
  <layout type="Default" header="Default">
    <aside slot="side">
      <welcome-brick
        class="is-hidden-desktop"
        :data="activeFeed.welcome.views.feed"
      />

      <panel title="Filter" accordion-touch>
        <filters></filters>
      </panel>

      <panel class="is-hidden-touch">
        <social></social>
      </panel>
    </aside>

    <main slot="main">
      <welcome-brick
        class="is-hidden-touch"
        :data="activeFeed.welcome.views.feed"
      />

      <competitions></competitions>
    </main>
  </layout>
</template>

<script>
import Social from '@/views/partials/common/Social'
import Filters from '@/views/partials/common/Filters'
import HasActiveFeed from '@/core/mixins/HasActiveFeed'
import Competitions from '@/views/partials/lists/Competitions'
import WelcomeBrick from '@/views/partials/common/WelcomeBrick'

export default {
  components: { Competitions, Filters, Social, WelcomeBrick },

  mixins: [HasActiveFeed]
}
</script>
