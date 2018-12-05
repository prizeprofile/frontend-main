<template>
  <masonry
    :cols="{ default: 2, 1023: 1 }"
    :gutter="30"
    class="gleam-feed masonry"
  >
    <competition
      v-for="competition in feed.content"
      :key="competition.id"
      :payload="competition"
    ></competition>
  </masonry>
</template>

<script>
import { mapGetters } from 'vuex'
import Competition from './Competition'

export default {
  components: { Competition },

  computed: {
    ...mapGetters(['feed'])
  }
}
</script>
