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
        orderBy: 'createdAt'
      },
      dropdownItems: [
        {
          name: 'createdAt',
          text: 'Recent',
          type: 'desc'
        },
        {
          name: 'entrants',
          text: 'Popular',
          type: 'desc',
          onlyRecent: true
        },
        {
          name: 'endDate',
          text: 'Ending soon',
          type: 'asc'
        }
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
      const item = this.dropdownItems.find(i => i.name === this.raw.orderBy)
      return {
        pattern: this.raw.pattern,
        sort: `${this.raw.orderBy},${item.type}`,
        onlyRecent: item.onlyRecent || ''
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

      if (query.sort) {
        this.raw.orderBy = query.sort.split(',')[0]
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
    }
  }
}
</script>
