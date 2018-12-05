<template>
  <div class="sort-filters is-horizontally-scrollable has-background-white">
    <div class="container">
      <div class="tabs">
        <ul>
          <li
            v-for="(filter, key) in filters"
            :key="key"
            :class="{ 'is-active': active === filter.key }"
            @click="filter.onClick(activeFeed)"
          >
            <a>
              <span class="icon">
                <i class="fas" :class="[filter.icon]"></i>
              </span>
              <span v-text="filter.name"></span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import HasActiveFeed from '@/core/mixins/HasActiveFeed'

export default {
  mixins: [ HasActiveFeed ],

  data () {
    return {
      filters: [
        {
          icon: 'fa-clock',
          name: 'Recent',
          key: 'createdAt,desc',
          onClick: feed => feed
            .addFilter('sort', 'createdAt,desc')
            .addFilter('onlyRecent', '')
        },
        {
          icon: 'fa-stopwatch',
          name: 'Ending Soon',
          key: 'endDate,asc',
          onClick: feed => feed
            .addFilter('sort', 'endDate,asc')
            .addFilter('onlyRecent', '')
        },
        {
          icon: 'fa-fire',
          name: 'Popular',
          key: 'entrants,desc',
          onClick: feed => feed
            .addFilter('sort', 'entrants,desc')
            .addFilter('onlyRecent', true)
        },
        {
          icon: 'fa-user',
          name: 'Low Entry',
          key: 'entrants,asc',
          onClick: feed => feed
            .addFilter('sort', 'entrants,asc')
            .addFilter('onlyRecent', true)
        }
      ]
    }
  },

  computed: {
    active () {
      return this.activeFeed.getFilter('sort')
    }
  }
}
</script>
