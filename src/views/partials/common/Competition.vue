<template>
  <panel medium>
    <article class="competition">
      <!-- External link. -->
      <a class="is-pulled-right has-text-grey" :href="tweetLink" target="_blank" ref="noopener">
        <icon type="fas" name="fa-external-link-alt"></icon>
      </a>

      <!-- Info tags. -->
      <div class="competition-tags tags">
        <span class="tag">
          <span class="has-text-weight-bold">{{ competition.retweets }}</span>&nbsp;entrants
        </span>
        <span class="tag">
          Found&nbsp;<span class="has-text-weight-bold">{{ competition.posted | humanFriendlyTime }}</span>
        </span>
      </div>

      <!-- Promoter. -->
      <div class="competition-promoter">
        <pic
          class="competition-promoter-logo"
          size="48x48"
          rounded
          :src="competition.promoter.thumbnail" alt="Promoter Thumbnail"
        ></pic>

        <div class="competition-promoter-name content">
          <p>
            {{ competition.promoter.name }}
            <sup
              v-if="competition.promoter.verified"
              class="competition-promoter-verified"
            ><i class="fas fa-check-circle"></i></sup>
          </p>
        </div>
      </div>

      <!-- Content. -->
      <div class="competition-content">
        <p>{{ competition.text | prettifyDescription }}</p>
      </div>

      <!-- Banner image. -->
      <div class="competition-image" v-if="competition.preview">
        <pic size="2:1" :src="competition.preview" alt="Competition Preview"></pic>
      </div>

      <!-- Competition actions. -->
      <div class="competition-actions">
        <div class="competition-actions-entry-methods badges">
          <badge
            v-for="(method, key) in entryMethods.values()"
            :key="key"
            :static="!entryMethodAvailable(entryMethods[method].name)"
            @click="enterCompetition([entryMethods[method].name])"
          >
            <icon :type="entryMethods[method].icon.type" :name="entryMethods[method].icon.name" small></icon>
          </badge>
        </div>
        <div class="competition-actions-spacer"></div>
        <div class="competition-actions-autoentry">
          <action
            medium
            @click="enterCompetition(this.this.competition.entry_methods)"
          >
            <icon name="fas fa-magic"></icon>
            &nbsp;
            Enter
          </action>
        </div>
      </div>
    </article>
  </panel>
</template>

<script>
import moment from 'moment'
import * as EntryMethod from '@/core/enums/EntryMethod'

export default {
  props: {
    payload: {
      type: Object,
      required: true
    }
  },

  data () {
    return {
      entryMethods: EntryMethod
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
     * Return prettified competition description.
     * TODO: Link, @-ed and hashtag colours.
     *
     * @param {string} value
     * @return {string}
     */
    prettifyDescription (value) {
      return value
    }
  },

  computed: {
    /**
     * Renaming the payload prop to suit this component.
     */
    competition () {
      return this.payload
    },

    /**
     * Form the twitter tweet link.
     */
    tweetLink () {
      return `https://twitter.com/statuses/${this.competition.tweet_id}`
    }
  },

  methods: {
    /**
     * Enters the competition based on the provided methods.
     *
     * @param {string[]} methods
     */
    enterCompetition (methods) {
      //
    },

    /**
     * Determines whether the entry method is available.
     *
     * @param {string} method
     * @return {boolean}
     */
    entryMethodAvailable (method) {
      return true
    }
  }
}
</script>
