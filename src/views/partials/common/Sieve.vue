<template>
  <div class="sieve">
    <div class="sieve-order">
      <div class="sieve-order-label">Sort</div>

      <dropdown v-model="raw.orderBy" :items="dropdownItems"></dropdown>
    </div>
    <div class="sieve-spacer"></div>
    <div class="sieve-pattern">
      <form-input white placeholder="Search by promoter or prize" v-model="raw.pattern">
        <icon slot="icon-left" name="fa-search" class="has-text-primary"></icon>
      </form-input>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      raw: {
        pattern: '',
        orderBy: 'recent'
      },
      dropdownItems: [
        { name: 'recent', text: 'Recent' },
        { name: 'popular', text: 'Popular' }
      ]
    }
  },

  watch: {
    /**
     * Watch the filters property to send a request after a short timeout.
     */
    filters: {
      deep: true,
      handler (value) {
        clearTimeout(this.filterTimeout)

        this.filterTimeout = setTimeout(this.filterCompetitions, 500)
      }
    }
  },

  computed: {
    /**
     * Transform the raw filers to match the appropriate values.
     */
    filters () {
      return {
        pattern: this.raw.pattern,
        orderBy: this.raw.orderBy
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

      if (query.pattern) {
        this.raw.pattern = query.pattern
      }

      if (query.orderBy) {
        this.raw.orderBy = query.orderBy
      }
    },

    /**
     * Redirects to the same page with filters applied.
     */
    filterCompetitions () {
      this.$router.push({
        name: 'home',
        query: { ...this.$route.query, ...this.filters }
      })
    }
  }
}
</script>
