<template>
  <div class="filters">
    <!-- TODO: Refactor Filters later on. -->
    <div class="block">
      <form-input white placeholder="Search by promoter or prize" v-model="pattern">
        <icon slot="icon-left" name="fa-search" class="has-text-primary"></icon>
      </form-input>
    </div>

    <span
      class="filters-heading"
      v-show="activeFeed.slug === 'twitter'"
    >
      Only Verified Accounts
    </span>

    <span
      class="filters-heading"
      v-show="activeFeed.slug === 'gleam'"
    >
      Hide Gaming Competitions
    </span>

    <lever v-model="toggle">
      <span slot="on">On &nbsp;<i class="fas fa-check-circle"></i></span>
      <span slot="off">Off &nbsp;<i class="fas fa-check-circle"></i></span>
    </lever>
  </div>
</template>

<script>
import HasActiveFeed from '@/core/mixins/HasActiveFeed'

export default {
  mixins: [ HasActiveFeed ],

  data () {
    return {
      toggle: null,
      pattern: ''
    }
  },

  computed: {
    toggleFilter () {
      return this.activeFeed.slug === 'twitter'
        ? 'onlyVerified'
        : 'notGaming'
    }
  },

  watch: {
    activeFeed () {
      this.toggle = !!this.activeFeed.getFilter(this.toggleFilter)
    },

    toggle () {
      this.activeFeed.addFilter(this.toggleFilter, this.toggle)
    },

    pattern () {
      this.activeFeed.addFilter('pattern', this.pattern)
    }
  }
}
</script>
