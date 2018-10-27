<template>
  <div>
    <welcome-brick />

    <transition-group name="fade" tag="div">
      <sieve v-if="competitions.content.length || true" key="sieve"></sieve>

      <competition
        v-for="competition in competitions.content"
        :key="competition.id"
        :payload="competition"
      ></competition>

      <placeholder-brick
        v-show="!competitions.last"
        v-for="key in 3"
        :key="`brick-${key}`"
      ></placeholder-brick>
    </transition-group>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Sieve from '@/views/partials/common/Sieve'
import { INCREMENT_COMPETITIONS_PAGE } from '@/store/types'
import Competition from '@/views/partials/common/Competition'
import WelcomeBrick from '@/views/partials/common/WelcomeBrick'
import PlaceholderBrick from '@/views/partials/ui/PlaceholderBrick'

export default {
  components: { Competition, PlaceholderBrick, Sieve, WelcomeBrick },

  mounted () {
    // Infinite scroll listener.
    window.addEventListener('scroll', () => {
      const { scrollTop, offsetHeight } = window.document.documentElement
      const bottomOfWindow = scrollTop + window.innerHeight === offsetHeight

      if (!bottomOfWindow || this.competitions.last) {
        return
      }

      this.$router.push({
        name: 'home',
        query: { ...this.$route.query,
          page: this.competitions.page + 1
        }
      })

      this.$store.dispatch(INCREMENT_COMPETITIONS_PAGE)
    })
  },

  computed: {
    ...mapGetters(['competitions'])
  }
}
</script>
