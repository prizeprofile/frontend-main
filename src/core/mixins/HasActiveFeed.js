import { feeds } from '@/core/feeds'

export default {
  computed: {
    activeFeed () {
      const active = this.$store.getters.activeFeedSlug

      return feeds.find(feed => feed.slug === active)
    }
  }
}
