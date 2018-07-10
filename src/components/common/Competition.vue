<template>
  <div class="brick competition-frame">
    <div class="competition-frame-promoter">
      <div class="tags is-flex-right">
        <span class="tag is-primary"
          v-text="humanFriendlyTime(competition.posted)"
        >
        </span>

        <span class="tag">
          <span
            class="is-bold"
            v-text="competition.entrants"
            ></span>&nbsp;
            entrants
        </span>

        <a
          target="_blank"
          class="is-flex-right"
          v-bind:href="competition.tweet_link"
        >
          <span class="tag">
            <i class="fas fa-external-link-alt"></i>
          </span>
        </a>
      </div>

      <span class="image is-32x32 is-cover"
        :style="'background-image: url(' + competition.promoter.image + ')'"
      ></span>

      <h3 v-text="competition.promoter.name"></h3>

      <twitter-badge
        class="twitter-badge"
        v-if="competition.promoter.approved"
      />
    </div>

    <div class="competition-frame-content">
      <div
        class="frame-content-description"
        v-html="prettifyDescription(competition.text)"
      ></div>

      <div class="frame-content-preview" v-if="competition.preview">
        <img v-bind:src="competition.preview" alt="Preview" />
      </div>

      <div class="frame-content-actions has-buttons">
        <div class="content-actions-twitter">
          <span
            v-bind:class="entry.tagfriend || { inactive: true }"
            @click="enter(['tagfriend'])"
          >
            <i class="fas fa-user-plus"></i>
          </span>

          <span
            v-bind:class="entry.comment || { inactive: true }"
            @click="enter(['comment'])"
          >
            <i class="far fa-comment-alt"></i>
          </span>

          <span
            v-bind:class="entry.retweet || { inactive: true }"
            @click="enter(['retweet'])"
          >
            <i class="fas fa-retweet"></i>
          </span>

          <span
            v-bind:class="entry.like || { inactive: true }"
            @click="enter(['like'])"
          >
            <i class="fas fa-heart"></i>
          </span>
        </div>

        <div
          class="content-actions-enter is-bold"
          @click="enter(Object.keys(entry))"
        >
          <i class="fas fa-magic"></i>
          &nbsp;
          <span>ENTER</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import enterCompetition from '@/modules/entries'
import TwitterBadge from '@/components/common/elements/TwitterBadge'

export default {
  components: { TwitterBadge },

  props: ['payload'],

  data () {
    return {
      entry: {}
    }
  },

  created () {
    this.competition.entry_methods.forEach(method => this.entry[method] = {})
  },

  computed: {
    competition () {
      return this.payload
    }
  },

  methods: {
    enter (methods) {
      const result = enterCompetition(methods, this.competition.tweet_id)

      result.forEach((method) => {
        let name = method.name()

        method.job
          .then(() => this.entry[name] || (this.entry[name] = {}))
          .then(() => this.entry[name].done = true)
          .catch(() => this.entry[name].error = true)
          .then(() => this.$forceUpdate())
      })
    },

    /**
     * Transforms the default time into more human friendly format.
     *
     * @param {string|Date} time
     * @return {string}
     */
    humanFriendlyTime (time) {
      return moment(time).fromNow()
    },

    /**
     * Runs all necessary preparations to display the description.
     *
     * @param {string} str
     * @return {string}
     */
    prettifyDescription (str) {
      // TODO: Link, @-ed and hashtag colours.
      return str
    }
  }
}
</script>
