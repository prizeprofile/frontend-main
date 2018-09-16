<template>
  <div>
    <transition-group name="fade" tag="div">
      <competition
        v-for="competition in competitions"
        :key="competition.id"
        :payload="competition"
      ></competition>

      <placeholder-brick
        v-for="key in 3"
        :key="`brick-${key}`"
      ></placeholder-brick>
    </transition-group>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Competition from '@/views/partials/common/Competition'
import PlaceholderBrick from '@/views/partials/ui/PlaceholderBrick'

export default {
  components: { Competition, PlaceholderBrick },

  computed: {
    ...mapGetters(['competitions'])
  }
}
</script>
