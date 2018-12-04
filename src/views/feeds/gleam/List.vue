<template>
  <masonry
    :cols="2"
    :gutter="30"
    class="gleam-feed"
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
