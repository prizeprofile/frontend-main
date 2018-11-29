<template>
  <div class="sort-filters is-horizontally-scrollable has-background-white">
    <div class="container">
      <div class="tabs">
        <ul>
          <li
            v-for="(filter, key) in filters"
            :key="key"
            :class="{ 'is-active': active === filter.key }"
            @click="feed.addFilter('sort', filter.key)"
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
import { activeFeed } from '@/core/feeds'

export default {
  data () {
    return {
      filters: [
        {
          icon: 'fa-clock',
          name: 'Recent',
          key: 'createdAt,desc'
        },
        {
          icon: 'fa-fire',
          name: 'Popular',
          key: 'entrants,desc'
        },
        {
          icon: 'fa-user',
          name: 'Low Entry',
          key: 'entrants,asc'
        },
        {
          icon: 'fa-stopwatch',
          name: 'Ending Soon',
          key: 'endDate,asc'
        }
      ]
    }
  },

  computed: {
    feed () {
      return activeFeed()
    },

    active () {
      return this.feed.getFilter('sort')
    }
  }
}
</script>
