<template>
  <div class="card">
    <div class="card-image">
      <pic
        size="2:1"
        :src="competition.preview || '$/images/gleam-fallback.jpeg'"
        fallback="$/images/gleam-fallback.jpeg"
        alt="Competition Preview"
        filled
      ></pic>
    </div>

    <div class="card-content">
      <div class="competition-tags tags">
        <span class="tag" v-if="competition.entrants">
          <span class="has-text-weight-bold">
            {{ competition.entrants }}
          </span>
          &nbsp;entrants
        </span>

        <span class="tag" v-if="competition.end_date">
          Ends&nbsp;
          <span class="has-text-weight-bold">
            {{ competition.end_date | humanFriendlyTime }}
          </span>
        </span>
      </div>

      <div class="media">
        <div class="media-content">
          <p class="title is-5">{{ competition.text }}</p>
          <p class="subtitle is-6 has-text-grey">
            <img :src="competition.promoter.thumbnail" alt="Promoter" />
            {{ competition.promoter.homepage | trimUrl }}
          </p>
        </div>
      </div>

      <div class="content">
        <a
          target="_blank"
          @click="enter(competition)"
          :class="{ 'has-background-success': isEntered }"
          :href="`https://gleam.io/${competition.resource_id}`"
          class="action is-primary is-medium is-fullwidth"
        >
          Enter<span v-show="isEntered">ed</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import { ENTER_COMPETITION } from '@/store/types'

export default {
  props: {
    payload: {
      type: Object,
      required: true
    }
  },

  data () {
    return {
      isEntered: this.$store
        .getters
        .hasEnteredCompetition(this.payload.id)
    }
  },

  filters: {
    /**
     * Return a human friendly time for display.
     *
     * @param {string} value
     * @return {string}
     */
    humanFriendlyTime (value) {
      return moment(value).fromNow()
    },

    /**
     * @param {string} value
     * @return {string}
     */
    trimUrl (value) {
      return value
        .replace(/https?:\/\/(www.)?/gmi, '')
        .replace(/\/$/gmi, '')
    }
  },

  computed: {
    /**
     * Renaming the payload prop to suit this component.
     */
    competition () {
      return this.payload
    }
  },

  methods: {
    enter (competition) {
      this.isEntered = true

      this.$store.dispatch(ENTER_COMPETITION, {
        id: this.competition.id,
        methods: [],
        timestamp: Date.now()
      })
    }
  }
}
</script>
