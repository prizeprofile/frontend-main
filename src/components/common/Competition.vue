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
          <span>
            <i class="fas fa-user-plus"></i>
          </span>

          <span>
            <i class="far fa-comment-alt"></i>
          </span>

          <span>
            <i class="fas fa-retweet"></i>
          </span>

          <span>
            <i class="fas fa-heart"></i>
          </span>
        </div>

        <div class="content-actions-enter">
          <i class="fas fa-magic"></i>
          &nbsp;
          <span>ENTER</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TwitterBadge from '@/components/common/TwitterBadge'
import moment from 'moment'

export default {
  components: { TwitterBadge },

  props: ['payload'],

  computed: {
    competition () {
      return this.payload
    }
  },

  methods: {
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
