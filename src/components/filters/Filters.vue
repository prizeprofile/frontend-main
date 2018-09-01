<template>
  <div class="brick panel">
    <div class="block is-centered">
      <h3>Filter</h3>
    </div>

    <div class="filters is-two-thirds-tablet">
      <div class="block">
        <span style="display: flex; align-items: center; flex-wrap: wrap">
          <label class="switch">
            <input type="checkbox" v-model="filters.onlyVerified">
            <span class="slider round"></span>
          </label>

          <span style="padding: 0 0 0 5px">
            Only showing verified accounts
          </span>

          <twitter-badge />
        </span>
      </div>

      <div class="block">
        Promoter:

        <div class="block">
          <input
            value=""
            type="text"
            class="input"
            placeholder="Search here..."
            v-model="promoterPattern"
            @keyup.enter="togglePromoter(filteredPromoters[0])"
          />

          <ul class="promoters-autocomplete" v-show="!!promoterPattern">
            <li v-for="(promoter, key) in filteredPromoters" :key="key" @click="togglePromoter(promoter)">
              {{ promoter.name }}
            </li>
          </ul>
        </div>

        <div class="field is-grouped is-grouped-multiline">
          <div class="control" v-for="(promoter, key) in filters.promoters" :key="key">
            <div class="tags has-addons">
              <span class="tag is-primary">{{ promoter.name }}</span>
              <a class="tag is-delete" @click="togglePromoter(promoter)"></a>
            </div>
          </div>
        </div>
        <div class="block"></div>
      </div>

      <div class="block">
        <div class="block">
          Ways to enter:
        </div>

        <div class="entry-methods">
          <div
            v-for="(method, key) in entryMethods"
            :key="key"
            @click="toggleEntryMethod(method.name)"
            :class="{ 'is-active': filters.entryMethods.find(m => m === method.name) }"
          >
            <span class="icon">
              <i :class="['fas', `fa-${method.icon}`]"></i>
            </span>
          </div>
        </div>
      </div>

      <div class="block">
        <div class="block">
          Number of entrants:
        </div>

        <div class="slider-bar">
          <input
            type="range"
            min="1"
            max="100"
            class="slider"
            v-model="filters.numberOfEntrants"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { LOAD_PROMOTERS, FILTER_COMPETITIONS } from '@/store/types'
import TwitterBadge from '@/components/common/elements/TwitterBadge'

export default {
  components: { TwitterBadge },

  data: () => ({
    promoterPattern: '',
    filterTimeout: null,
    filters: {
      onlyVerified: false,
      numberOfEntrants: '50',
      entryMethods: [],
      promoters: []
    },
    entryMethods: [
      { name: 'friend', icon: 'user-plus' },
      { name: 'comment', icon: 'comment-alt' },
      { name: 'retweet', icon: 'retweet' },
      { name: 'like', icon: 'heart' },
      { name: 'mention', icon: 'at' }
    ]
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
    ...mapGetters(['promoters']),

    /**
     * Promoters array filtered base on the input field pattern
     *
     * @var {any[]}
     */
    filteredPromoters () {
      return this.promoters.filter(p => p.name.match(new RegExp(this.promoterPattern, 'i')))
    },

    /**
     * Filters stringified for a url query.
     *
     * @var {string}
     */
    stringifiedFilters () {
      return `
        ?onlyVerified=${this.filters.onlyVerified}
        &numberOfEntrants=${this.filters.numberOfEntrants}
        &entryMethods=${this.filters.entryMethods.join('|')}
        &promoters=${this.filters.promoters.map(p => p.id).join('|')}
      `.replace(/\s/g, '')
    }
  },

  /**
   * Load all promoters upon mounting the component.
   */
  mounted () {
    this.$store.dispatch(LOAD_PROMOTERS)
  },

  methods: {
    /**
     * Toggles the filter for the provided entry method.
     *
     * @param {string} method
     */
    toggleEntryMethod (method) {
      this.filters.entryMethods = this._toggleArrayItem(this.filters.entryMethods, method)
    },

    /**
     * Toggles the filter for the provided promoter.
     *
     * @param {string} promoter
     */
    togglePromoter (promoter) {
      this.filters.promoters = this._toggleArrayItem(this.filters.promoters, promoter)
    },

    /**
     * Dispatches a store event to filter competitions.
     */
    filterCompetitions () {
      this.$store.dispatch(FILTER_COMPETITIONS, this.stringifiedFilters)
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
