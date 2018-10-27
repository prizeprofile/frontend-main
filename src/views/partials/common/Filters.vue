<template>
  <div class="filters">
    <!-- Entry types filters. -->
    <span class="filters-heading">Entry Methods</span>
    <div class="filters-entry-types badges">
      <badge
        v-for="(method, key) in entryMethods"
        :key="key"
        :active="!!raw.entryMethods.find(m => m === method.name)"
        flex
        @click="toggleEntryMethod(method.name)"
      >
        <icon :type="method.icon.type" :name="method.icon.name" small></icon>
      </badge>
    </div>

    <hr>

    <!-- Number of entrants filters. -->
    <span class="filters-heading"># of Entrants</span>
    <slider :max="10" v-model="numberOfEntrants"></slider>
    <span class="fitlers-help">
      Up to:
      <span class="has-text-primary">
        {{ entrants }}{{ entrants === 1000 ? '+' : '' }}
      </span>
    </span>

    <hr>

    <!-- Only verified accounts filters. -->
    <span class="filters-heading">Only Verified Accounts</span>
    <lever v-model="raw.onlyVerified">
      <span slot="on">On &nbsp;<i class="fas fa-check-circle"></i></span>
      <span slot="off">Off &nbsp;<i class="fas fa-check-circle"></i></span>
    </lever>
  </div>
</template>

<script>
import EntersCompetitions from '@/core/mixins/EntersCompetitions'

export default {
  mixins: [EntersCompetitions],

  data: () => ({
    filterTimeout: null,
    numberOfEntrants: 10,
    raw: {
      entryMethods: [],
      onlyVerified: false
    }
  }),

  watch: {
    /**
     * Watch the filters property to send a request after a short timeout.
     */
    filters: {
      deep: true,
      handler (value) {
        clearTimeout(this.filterTimeout)

        this.filterTimeout = setTimeout(this.filterCompetitions, 1000)
      }
    }
  },

  computed: {
    /**
     * Number of entrants.
     */
    entrants () {
      return this.numberOfEntrants * 100
    },

    /**
     * Transform the raw filers to match the appropriate values.
     */
    filters () {
      return {
        maxEntrants: this.entrants < 1000 ? this.entrants : 0,
        onlyVerified: this.raw.onlyVerified + 0,
        entryMethods: [...this.raw.entryMethods].sort().join(',')
      }
    }
  },

  /**
   * Component mounted hook.
   */
  mounted () {
    this.readFiltersFromQuery()
  },

  methods: {
    /**
     * Reads and parses filters from the query params.
     */
    readFiltersFromQuery () {
      const query = this.$route.query

      if (query.entryMethods) {
        this.raw.entryMethods = query.entryMethods.split(',')
      }

      if (query.maxEntrants) {
        this.numberOfEntrants = parseInt(query.maxEntrants / 100)
      }

      if (query.onlyVerified) {
        this.raw.onlyVerified = !!+query.onlyVerified
      }
    },

    /**
     * Redirects to the same page with filters applied.
     */
    filterCompetitions () {
      this.$router.push({
        name: 'home',
        query: { ...this.$route.query, ...this.filters, page: 0 }
      })
    },

    /**
     * Toggles the filter for the provided entry method.
     *
     * @param {string} method
     */
    toggleEntryMethod (method) {
      this.raw.entryMethods = this._toggleArrayItem(this.raw.entryMethods, method)
    },

    /**
     * Helper for toggling an item in an array based on exact match.
     *
     * @param {string[]|number[]} array
     * @param {string|number} item
     */
    _toggleArrayItem (array, item) {
      return array.find(i => i === item)
        ? array.filter(i => i !== item)
        : array.concat([item])
    }
  }
}
</script>
