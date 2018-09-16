<template>
  <div class="filters">
    <!-- Entry types filters. -->
    <span class="filters-heading">Entry Types</span>
    <div class="filters-entry-types badges">
      <badge
        v-for="(method, key) in entryMethods.values()"
        :key="key"
        :active="!!raw.entryMethods.find(m => m === entryMethods[method].name)"
        flex
        @click="toggleEntryMethod(entryMethods[method].name)"
      >
        <icon :type="entryMethods[method].icon.type" :name="entryMethods[method].icon.name" small></icon>
      </badge>
    </div>

    <hr>

    <!-- Number of entrants filters. -->
    <span class="filters-heading"># of Entrants</span>
    <slider :max="10" v-model="raw.numberOfEntrants"></slider>
    <span class="fitlers-help">
      Up to:
      <span class="has-text-primary">
        {{ filters.numberOfEntrants }}{{ filters.numberOfEntrants === 1000 ? '+' : '' }}
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
import { mapGetters } from 'vuex'
import * as EntryMethod from '@/core/enums/EntryMethod'

export default {
  data: () => ({
    filterTimeout: null,
    raw: {
      numberOfEntrants: 10,
      entryMethods: [],
      onlyVerified: false
    },
    entryMethods: EntryMethod
  }),

  watch: {
    /**
     * Watch the filters property to send a request after a short timeout.
     */
    filters: {
      deep: true,
      handler (value, old) {
        clearTimeout(this.filterTimeout)

        this.filterTimeout = setTimeout(this.filterCompetitions, 1000)
      }
    }
  },

  computed: {
    /**
     * Transform the filers to match the appropriate values.
     */
    filters () {
      return {
        numberOfEntrants: this.raw.numberOfEntrants * 100,
        onlyVerified: this.raw.onlyVerified + 0,
        entryMethods: this.raw.entryMethods.sort().join('|')
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
        this.raw.entryMethods = query.entryMethods.split('|')
      }

      if (query.numberOfEntrants) {
        this.raw.numberOfEntrants = parseInt(query.numberOfEntrants / 100)
      }

      if (query.onlyVerified) {
        this.raw.onlyVerified = !! + query.onlyVerified
      }
    },

    /**
     * Redirects to the same page with filters.
     */
    filterCompetitions () {
      this.$router.push({
        name: 'home',
        query: this.filters
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
