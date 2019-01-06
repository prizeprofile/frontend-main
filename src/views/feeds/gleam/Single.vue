<template>
  <div class="card has-border-radius-medium">
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-5">{{ competition.text }}</p>
          <p class="subtitle is-6 has-text-grey">
            <img :src="competition.promoter.thumbnail" alt="Promoter" />
            {{ competition.promoter.homepage | trimUrl }}
          </p>
        </div>
      </div>

      <div class="competition-tags tags">
        <span class="tag" v-if="competition.entrants">
          <span class="has-text-weight-bold">
            {{ competition.entrants }}
          </span>
          &nbsp;entrants
        </span>

        <span class="tag">
          Found&nbsp;
          <span class="has-text-weight-bold">
            {{ competition.created_at | humanFriendlyTime }}
          </span>
        </span>

        <span class="tag" v-if="competition.end_date">
          Ends&nbsp;
          <span class="has-text-weight-bold">
            {{ competition.end_date | humanFriendlyTime }}
          </span>
        </span>
      </div>

      <a
        target="_blank"
        ref="gleamWidget"
        class="e-widget no-button"
        :href="`https://gleam.io/${competition.resource_id}`"
      ></a>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import slugify from 'slugify'
import { ENTER_COMPETITION } from '@/store/types'
import LoadsGleamWidget from '@/core/mixins/LoadsGleamWidget'

export default {
  props: {
    payload: {
      type: Object,
      required: true
    }
  },

  mixins: [LoadsGleamWidget],

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
  }
}
</script>
