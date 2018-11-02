<template>
  <panel medium>
    <article class="competition">
      <!-- External link. -->
      <a class="competition-external-link" :href="tweetLink" target="_blank" ref="noopener">
        <icon type="fas" name="fa-external-link-alt"></icon>
      </a>

      <!-- Info tags. -->
      <div class="competition-tags tags">
        <span class="tag">
          <span class="has-text-weight-bold">{{ competition.entrants }}</span>&nbsp;entrants
        </span>
        <span class="tag">
          Found&nbsp;<span class="has-text-weight-bold">{{ competition.posted | humanFriendlyTime }}</span>
        </span>

        <span class="tag" v-if="competition.end_date">
          Ends&nbsp;<span class="has-text-weight-bold">{{ competition.end_date | humanFriendlyTime }}</span>
        </span>
      </div>

      <!-- Promoter. -->
      <div class="competition-promoter">
        <pic
          class="competition-promoter-logo"
          size="48x48"
          rounded filled
          :src="competition.promoter.thumbnail" alt="Promoter Thumbnail"
        ></pic>

        <div class="competition-promoter-name content">
          <p>
            {{ competition.promoter.name || competition.promoter.screen_name }}
            <sup
              v-if="competition.promoter.verified"
              class="competition-promoter-verified"
            ><i class="fas fa-check-circle"></i></sup>
          </p>
        </div>
      </div>

      <!-- Content. -->
      <div class="competition-content">
        <p v-text="competition.text"></p>
      </div>

      <!-- Banner image. -->
      <div class="competition-image" v-if="competition.preview">
        <pic size="2:1" :src="competition.preview" alt="Competition Preview" radius filled></pic>
      </div>

      <!-- Competition actions. -->
      <div class="competition-actions">
        <div class="competition-actions-entry-methods badges">
          <badge
            v-for="(method, key) in entryMethods"
            :key="key"
            :static="!entryMethodAvailable(method.name)"
            @click="enterCompetition(competition, [method.name])"
          >
            <icon :type="method.icon.type" :name="method.icon.name" small></icon>
          </badge>
        </div>
        <div class="competition-actions-spacer"></div>
        <div class="competition-actions-autoentry" v-if="canOneClickEnter()">
          <action
            medium fullwidth :loading="status === 'loading'"
            :classes="[`has-background-${status}`]"
            @click="bulkEnter(competition, competition.entry_methods)"
          >
            <icon name="fas fa-magic"></icon>
            &nbsp;
            <span v-if="status === 'success'">Entered</span>
            <span v-else-if="status === 'danger'">Try Again</span>
            <span v-else>Enter</span>
          </action>
        </div>
      </div>
    </article>
  </panel>
</template>

<script>
import moment from 'moment'
import ControlsModals from '@/core/mixins/ControlsModals'
import EntersCompetitions from '@/core/mixins/EntersCompetitions'

export default {
  mixins: [EntersCompetitions, ControlsModals],

  props: {
    payload: {
      type: Object,
      required: true
    }
  },

  data () {
    return {
      status: null
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
     *
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
      return `https://twitter.com/statuses/${this.competition.resource_id}`
    }
  },

  methods: {
    /**
     * @param {any} competition
     * @param {String[]} methods
     */
    bulkEnter (competition, methods) {
      if (!this.$store.getters.isLogged) {
        this.showModal('connect-twitter')

        return
      }

      this.status = 'loading'

      this.enterCompetition(competition, methods)
        .then(() => this.status = 'success')
        .catch(() => this.status = 'danger')
    },

    /**
     * Determines whether the entry method is available.
     *
     * @param {string} methodName
     * @return {boolean}
     */
    entryMethodAvailable (methodName) {
      return this.competition.entry_methods.find(m => m === methodName)
    },

    /**
     * Temporarily disables comment and friend methods.
     */
    canOneClickEnter () {
      return !(this.entryMethodAvailable('comment') || this.entryMethodAvailable('friend'))
    }
  }
}
</script>
