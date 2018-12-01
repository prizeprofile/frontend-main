<template>
  <div>
    <transition-group name="fade" tag="div">
      <component
        :is="`${this.activeFeed.slug}-feed`"
        key="competitions"
        class="block"
      ></component>

      <div v-show="!feed.last" key="loading-bricks">
        <placeholder-brick></placeholder-brick>
        <placeholder-brick class="is-hidden-mobile"></placeholder-brick>
        <placeholder-brick class="is-hidden-mobile"></placeholder-brick>
      </div>
    </transition-group>

    <panel elevated v-show="!feed.content.length && feed.last">
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
import GleamFeed from '@/views/feeds/gleam/List'
import TwitterFeed from '@/views/feeds/twitter/List'
import HasActiveFeed from '@/core/mixins/HasActiveFeed'
import PlaceholderBrick from '@/views/partials/ui/PlaceholderBrick'

export default {
  components: { PlaceholderBrick, TwitterFeed, GleamFeed },

  mixins: [ HasActiveFeed ],

  mounted () {
    // Infinite scroll listener.
    window.addEventListener('scroll', this.onScroll)
  },

  destroyed () {
    window.removeEventListener('scroll', this.onScroll)
  },

  computed: {
    ...mapGetters(['feed'])
  },

  methods: {
    onScroll () {
      const { scrollTop, offsetHeight } = window.document.documentElement
      const bottomOfWindow = scrollTop + window.innerHeight * 1.3 >= offsetHeight

      if (!bottomOfWindow || this.feed.last) {
        return
      }

      this.activeFeed.addFilter('page', this.activeFeed.getFilter('page') || 1)
    }
  }
}
</script>
