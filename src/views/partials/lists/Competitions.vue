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

      <div v-show="!competitions.last" key="loading-bricks">
        <placeholder-brick></placeholder-brick>
        <placeholder-brick class="is-hidden-mobile"></placeholder-brick>
        <placeholder-brick class="is-hidden-mobile"></placeholder-brick>
      </div>
    </transition-group>

    <panel elevated v-show="!competitions.content.length && competitions.last">
      <div class="has-padding-3 has-text-centered">
        <h3 class="title is-4">
          <span class="has-text-primary">Ooops!</span>
          No Competitions Found
        </h3>

        <p class="subtitle is-6 has-text-grey-light">Try changing the filter and open up your search</p>
      </div>
    </panel>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Sieve from '@/views/partials/common/Sieve'
import Competition from '@/views/partials/common/Competition'
import WelcomeBrick from '@/views/partials/common/WelcomeBrick'
import PlaceholderBrick from '@/views/partials/ui/PlaceholderBrick'

export default {
  components: { Competition, PlaceholderBrick, Sieve, WelcomeBrick },

  mounted () {
    // Infinite scroll listener.
    window.addEventListener('scroll', this.onScroll)
  },

  destroyed () {
    window.removeEventListener('scroll', this.onScroll)
  },

  computed: {
    ...mapGetters(['competitions'])
  },

  methods: {
    onScroll () {
      const { scrollTop, offsetHeight } = window.document.documentElement
      const bottomOfWindow = scrollTop + window.innerHeight * 1.3 >= offsetHeight

      if (!bottomOfWindow || this.competitions.last) {
        return
      }

      this.$router.push({
        name: 'home',
        query: { ...this.$route.query,
          page: this.competitions.page + 1
        }
      })
    }
  }
}
</script>
