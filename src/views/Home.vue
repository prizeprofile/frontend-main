<template>
  <layout type="Default" header="Default">
    <aside slot="side">
      <panel title="Filter Competitions">
        <filters></filters>
      </panel>

      <panel>
        <social></social>
      </panel>
    </aside>

    <main slot="main">
      <competitions></competitions>
    </main>
  </layout>
</template>

<script>
import Filters from '@/views/partials/Filters'
import Social from '@/views/partials/common/Social'
import Competitions from '@/views/partials/lists/Competitions'

export default {
  components: { Competitions, Filters, Social }
}
</script>
