<template>
  <div class="connect-twitter-modal modal" v-bind:class="{ 'is-active': isActive }">
    <div class="modal-background" @click="hide()"></div>

    <div class="modal-content">
      <div class="hero is-white is-medium">
        <div class="modal-body is-centered">
          <div class="block">
            <img src="/static/images/branding/logo_green.png" alt="PrizeProfile">
          </div>

          <h3 class="has-text-grey-darker">Connect Twitter</h3>

          <p class="has-text-grey-darker block">
            To enter competitions with one click, we need you to connect
            PrizeProfile with your Twitter account.
          </p>

          <div class="block">
            <span class="button is-info is-medium" v-on:click="auth">
              CONNECT TWITTER
            </span>
          </div>

          <div class="block">
            <a
              target="_blank"
              href="https://twitter.com/signup"
              class="button is-info is-outlined"
            >
              SIGN UP TO TWITTER
            </a>
          </div>

          <p class="has-text-grey is-size-7">
            We never post without your permission
          </p>
        </div>
      </div>
    </div>

    <button
      v-on:click="hide"
      aria-label="close"
      class="modal-close is-large"
    ></button>
  </div>
</template>

<script>
import { MODAL_HIDE, USER_CONNECT_TWITTER } from '@/store/types'

export default {
  computed: {
    isActive () {
      return this.$store.getters.modal('connect-twitter').isActive
    }
  },

  methods: {
    hide () {
      this.$store.dispatch(MODAL_HIDE, 'connect-twitter')
    },

    auth () {
      this.$store.dispatch(USER_CONNECT_TWITTER)
    }
  }
}
</script>
