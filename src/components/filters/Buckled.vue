<template>
  <div class="filters-buckled">
    <div
      @click="sortBy('recent')"
      class="filters-buckled-button is-centered"
      v-bind:class="{active: activeSort === 'recent'}"
    >
      Recent
    </div>

    <div
      @click="sortBy('popular')"
      class="filters-buckled-button is-centered"
      v-bind:class="{active: activeSort === 'popular'}"
    >
      Popular
    </div>

    <div class="filters-buckled-filter is-hidden-desktop">
      Filter
      <span class="has-text-primary">
        <i class="fas fa-sliders-h"></i>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeSort: 'recent'
    }
  },

  methods: {
    /**
     * Sorts competitions by different criteria.
     *
     * @param {string} str
     * @return {void}
     */
    sortBy (str) {
      // TODO: Apply sort.

      this.activeSort = str
    }
  }
}
</script>
