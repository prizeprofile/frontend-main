<template>
  <modal name="connect-twitter">
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
  </modal>
</template>

<script>
import { USER_CONNECT_TWITTER } from '@/store/types'

export default {
  methods: {
    auth () {
      this.$store.dispatch(USER_CONNECT_TWITTER)
    }
  }
}
</script>
