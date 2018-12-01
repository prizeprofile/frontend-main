<template>
  <layout type="Default" header="Default">
    <aside slot="side">
      <panel title="Filter Competitions" accordion-mobile>
        <filters></filters>
      </panel>

      <panel class="is-hidden-touch">
        <social></social>
      </panel>
    </aside>

    <main slot="main">
      <welcome-brick />

      <competitions></competitions>
    </main>
  </layout>
</template>

<script>
import Social from '@/views/partials/common/Social'
import Filters from '@/views/partials/common/Filters'
import Competitions from '@/views/partials/lists/Competitions'
import WelcomeBrick from '@/views/partials/common/WelcomeBrick'

export default {
  components: { Competitions, Filters, Social, WelcomeBrick }
}
</script>
