<template>
  <div>
    <competition
      v-for="competition in feed.content"
      :key="competition.id"
      :payload="competition"
    ></competition>
  </div>
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
